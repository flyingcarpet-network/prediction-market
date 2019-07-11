const Decimal = require("decimal.js-light");
Decimal.config({ precision: 30 });

const deployConfig = require("./utils/deploy-config");
const writeToConfig = require("./utils/writeToConfig");

module.exports = function(deployer, network, accounts) {
  deployer.then(async () => {
    const conditionIds = [
      ["DutchXTokenPriceOracle", deployConfig.daiPriceQuestionID],
      ["TokenSupplyOracle", deployConfig.daiSupplyQuestionID],
      ["DaiStabilityFeeOracle", deployConfig.daiStabilityFeeQuestionID]
    ].map(([contractName, questionId]) =>
      web3.utils.soliditySha3(
        { t: "address", v: artifacts.require(contractName).address },
        { t: "bytes32", v: questionId },
        { t: "uint", v: 2 }
      )
    );

    const DaiStandin = artifacts.require("DaiStandin");
    const collateralToken = await DaiStandin.deployed();

    const lmsrMarketMakerFactory = await artifacts
      .require("LMSRMarketMakerFactory")
      .deployed();

    const { ammFunding } = deployConfig;
    const deployingAccount = DaiStandin.defaults()["from"];
    const collateralTokenOwner = await collateralToken.owner();
    if (collateralTokenOwner !== `0x${"00".repeat(20)}`) {
      // if the Dai standin contract has no owner, then it is the real contract
      // but if it has an owner, then it was deployed earlier and can be minted
      for (const account of accounts) {
        await collateralToken.mint(account, ammFunding, {
          from: collateralTokenOwner
        });
      }
      await collateralToken.mint(deployingAccount, ammFunding, {
        from: collateralTokenOwner
      });
    }

    await collateralToken.approve(lmsrMarketMakerFactory.address, ammFunding);

    const lmsrAddress = (await lmsrMarketMakerFactory.createLMSRMarketMaker(
      artifacts.require("PredictionMarketSystem").address,
      collateralToken.address,
      conditionIds,
      0,
      ammFunding
    )).logs.find(({ event }) => event === "LMSRMarketMakerCreation").args
      .lmsrMarketMaker;

    const ecoTreeRegistrationTargetValue = deployConfig.ecoTreeRegistrationTargetValue.toLocaleString();

    const formattedAXAParametricInsuranceTargetValue =
      "$" +
      deployConfig.AXAParametricInsuranceTargetValue.toLocaleString() +
      " DAI";

    writeToConfig({
      networkId: await web3.eth.net.getId(),
      lmsrAddress,
      markets: [
        {
          title: `Will more than ${ecoTreeRegistrationTargetValue} acres of forest be registered on EcoTree by Jan 1, 2020?`,
          resolutionDate: new Date(
            deployConfig.ecoTreeRegistrationTargetTime * 1000
          ).toISOString(),
          outcomes: [
            {
              title: "Yes",
              short: "Yes",
              when: `Acres of Forest > ${ecoTreeRegistrationTargetValue}`
            },
            {
              title: "No",
              short: "No",
              when: `Acres of Forest ≤ ${ecoTreeRegistrationTargetValue}`
            }
          ],
          oracle: "FCLA + Chainlink",
          icon: "/assets/images/trees.jpg"
        },
        {
          title: `Will the IceAlive Greeland ice sheet melt rate increase by at least a factor of ${deployConfig.iceAliveMeltRateTarget} from 2019 to 2020?`,
          resolutionDate: new Date(
            deployConfig.iceAliveMeltRateTargetTime * 1000
          ).toISOString(),
          outcomes: [
            {
              title: "Yes",
              short: "Yes",
              when: `Melt Rate > ${deployConfig.iceAliveMeltRateTarget}`
            },
            {
              title: "No",
              short: "No",
              when: `Melt Rate ≤ ${deployConfig.iceAliveMeltRateTarget}`
            }
          ],
          oracle: "FCLA + Chainlink",
          icon: "/assets/images/ice.jpg"
        },
        {
          title: `Will there be more than ${formattedAXAParametricInsuranceTargetValue} in AXA parametric insurance claims this year?`,
          resolutionDate: new Date(
            deployConfig.AXAParametricInsuranceTargetTime * 1000
          ).toISOString(),
          outcomes: [
            {
              title: "Yes",
              short: "Yes",
              when: `Parametric insurance claims > ${formattedAXAParametricInsuranceTargetValue}`
            },
            {
              title: "No",
              short: "No",
              when: `Parametric insurance claims ≤ ${formattedAXAParametricInsuranceTargetValue}`
            }
          ],
          oracle: "FCLA + Chainlink",
          icon: "/assets/images/trees2.jpg"
        }
      ]
    });
  });
};
