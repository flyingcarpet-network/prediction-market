import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
// import styles from './CurrentNetwork.scss';
import * as web3Actions from '../../actions/web3Actions';
import * as Web3Utils from '../../utils/web3-helpers';


export interface IProps {
  web3: Object,
  setNetworkName: (name: string) => any;
  networkName: string;
}

class Header extends React.Component<IProps> {

  public componentDidMount() {
    const { web3, setNetworkName } = this.props;

    console.log("Web3 blabla: ", web3);

    // Get network name (e.g. rinkeby, main, etc.) using Web3Utils and then save result to Redux
    Web3Utils.getNetworkName(web3)
      .then((name: string) => setNetworkName(name))
      .catch((name: string) => setNetworkName(''));
  }

  public render() {
    let { networkName } = this.props;

    let classbox= 'jr-btn jr-btn-xs jr-btn-primary btn btn-default';
    let styleIcon= 'red';
    // let style = styles.unknownCircle

    if (networkName !== 'rinkeby' && networkName !== 'main') {
      networkName = 'Unknown Network';
    }

    if (networkName === 'rinkeby') {
      // style= styles.rinkebyCircle;
      classbox= 'jr-btn jr-btn-xs jr-btn-primary btn btn-default';
      styleIcon= 'orange';
      networkName = 'Rinkeby Network';
    }

    if (networkName === 'main') {
      // style= styles.mainnetCircle;
      classbox= 'jr-btn jr-btn-xs jr-btn-primary btn btn-default';
      styleIcon= 'green';
      networkName = 'Main Ethereum Network';
    }

    return (
      <div>
        <li className="list-inline-item user-nav">
          <button className={classbox}>
            <i className="zmdi zmdi-circle zmdi-hc-fw" style={{color:styleIcon}}/> {networkName}
          </button>
        </li>
      </div>
    );
  }
}

export default compose<any>(
  connect(
    state => ({
      // @ts-ignore
      web3: state.marketData.web3,
    }),
    dispatch => ({
      setNetworkName: bindActionCreators(web3Actions.setNetworkName, dispatch)
    })
  )
)(Header);