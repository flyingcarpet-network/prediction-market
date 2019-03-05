const { toHex, padLeft, keccak256, toChecksumAddress } = web3.utils;
const rlp = require("rlp");

const PredictionMarketSystem = artifacts.require("PredictionMarketSystem");
const DifficultyOracle = artifacts.require("DifficultyOracle");
const ETHValueOracle = artifacts.require("ETHValueOracle");
const GasLimitOracle = artifacts.require("GasLimitOracle");
const LMSRMarketMaker = artifacts.require("LMSRMarketMaker");
const LMSRMarketMakerFactory = artifacts.require("LMSRMarketMakerFactory");
const Fixed192x64Math = artifacts.require("Fixed192x64Math");
const WETH9 = artifacts.require("WETH9");
const ERC20Detailed = artifacts.require("ERC20Detailed");

const initialNonce = 0x01;
const defaultAMMFunding = (1e19).toString();

module.exports = (deployer, network, accounts) => {
  if (network === "development" || network === "test") {
    deployer.deploy(PredictionMarketSystem).then(async pmSystemInstance => {
      // Deploy the base contracts
      await deployer.deploy(Fixed192x64Math);
      await deployer.link(Fixed192x64Math, LMSRMarketMakerFactory);
      await deployer.link(Fixed192x64Math, LMSRMarketMaker);
      const collateralToken = await deployer.deploy(WETH9);
      const LMSRMarketMakerFactoryInstance = await deployer.deploy(
        LMSRMarketMakerFactory
      );
      // Deploy the Oracle contracts
      const difficultyOracleInstance = await deployer.deploy(
        DifficultyOracle,
        pmSystemInstance.address,
        process.env.O1SSTARTBLOCK || 1,
        process.env.O1ENDBLOCK || 1e9,
        process.env.O1TARGET || 10,
        process.env.O1QUESTIONID || "0x01"
      );
      const gasLimitOracleInstance = await deployer.deploy(
        GasLimitOracle,
        pmSystemInstance.address,
        process.env.O2STARTBLOCK || 1,
        process.env.O2ENDBLOCK || 1e9,
        process.env.O2TARGET || 10,
        process.env.O2QUESTIONID || "0x02"
      );
      const anotherGasLimitOracleInstance = await deployer.deploy(
        GasLimitOracle,
        pmSystemInstance.address,
        process.env.O2STARTBLOCK || 1,
        process.env.O2ENDBLOCK || 1e9,
        process.env.O2TARGET || 10,
        process.env.O2QUESTIONID || "0x03"
      );
      // Prepare and identify the conditions in the pmSystem
      await pmSystemInstance.prepareCondition(
        difficultyOracleInstance.address,
        process.env.O1QUESTIONID || "0x01",
        2
      );
      await pmSystemInstance.prepareCondition(
        gasLimitOracleInstance.address,
        process.env.O2QUESTIONID || "0x02",
        2
      );
      await pmSystemInstance.prepareCondition(
        anotherGasLimitOracleInstance.address,
        process.env.O2QUESTIONID || "0x03",
        2
      );
      const conditionOneId = keccak256(
        difficultyOracleInstance.address +
          [
            process.env.O1QUESTIONID ||
              "0x0100000000000000000000000000000000000000000000000000000000000000",
            2
          ]
            .map(v => padLeft(toHex(v), 64).slice(2))
            .join("")
      );
      const conditionTwoId = keccak256(
        gasLimitOracleInstance.address +
          [
            process.env.O2QUESTIONID ||
              "0x0200000000000000000000000000000000000000000000000000000000000000",
            2
          ]
            .map(v => padLeft(toHex(v), 64).slice(2))
            .join("")
      );
      const conditionThreeId = keccak256(
        anotherGasLimitOracleInstance.address +
          [
            process.env.O3QUESTIONID ||
              "0x0300000000000000000000000000000000000000000000000000000000000000",
            2
          ]
            .map(v => padLeft(toHex(v), 64).slice(2))
            .join("")
      );
      // Pre-Calculate the LMSRAMM instance address
      const checksummedLMSRAddress = toChecksumAddress(
        keccak256(
          rlp.encode([LMSRMarketMakerFactoryInstance.address, initialNonce])
        ).substr(26)
      );
      // Deposit the CollateralTokens necessary and approve() the pre-deployed LMSR instance
      await collateralToken.deposit({
        from: accounts[0],
        value: process.env.AMMFUNDING || defaultAMMFunding
      });
      await collateralToken.approve(
        checksummedLMSRAddress,
        process.env.AMMFUNDING || defaultAMMFunding,
        { from: accounts[0] }
      );
      // Deploy the pre-calculated LMSR instance
      await LMSRMarketMakerFactoryInstance.createLMSRMarketMaker(
        pmSystemInstance.address,
        collateralToken.address,
        [conditionOneId, conditionTwoId, conditionThreeId],
        0,
        process.env.AMMFUNDING || defaultAMMFunding,
        { from: accounts[0] }
      );
    });
  } else if (network === "rinkeby") {
    const medianizerAddr = "0xbfFf80B73F081Cc159534d922712551C5Ed8B3D3";
    //const DAI_TOKEN_ADDRESS = "0x6f2d6ff85efca691aad23d549771160a12f0a0fc"
    deployer.deploy(PredictionMarketSystem).then(async pmSystemInstance => {
      const WETH9Instance = await deployer.deploy(WETH9)
      const collateralToken = await IERC20.at(WETH9Instance.address)

      // Deposit the CollateralTokens necessary and approve() the pre-deployed LMSR instance
      await WETH9Instance.deposit({
        from: accounts[0],
        value: process.env.AMMFUNDING || defaultAMMFunding
      });

      // Deploy the base contracts
      await deployer.deploy(Fixed192x64Math);
      await deployer.link(Fixed192x64Math, LMSRMarketMakerFactory);
      await deployer.link(Fixed192x64Math, LMSRMarketMaker);
      const LMSRMarketMakerFactoryInstance = await deployer.deploy(
        LMSRMarketMakerFactory
      );
      // Deploy the Oracle contracts
      const difficultyOracleInstance = await deployer.deploy(
        DifficultyOracle,
        pmSystemInstance.address,
        process.env.O1SSTARTBLOCK || 1,
        process.env.O1ENDBLOCK || 1e9,
        process.env.O1TARGET || 10,
        process.env.O1QUESTIONID || "0x01"
      );
      const gasLimitOracleInstance = await deployer.deploy(
        GasLimitOracle,
        pmSystemInstance.address,
        process.env.O2STARTBLOCK || 1,
        process.env.O2ENDBLOCK || 1e9,
        process.env.O2TARGET || 10,
        process.env.O2QUESTIONID || "0x02"
      );
      const ethValueOracleInstance = await deployer.deploy(
        ETHValueOracle,
        pmSystemInstance.address,
        medianizerAddr,
        process.env.O3STARTBLOCK || 1,
        process.env.O3ENDBLOCK || 1e9,
        process.env.O3TARGET || 10,
        process.env.O3QUESTIONID || "0x03"
      );
      // Prepare and identify the conditions in the pmSystem
      await pmSystemInstance.prepareCondition(
        difficultyOracleInstance.address,
        process.env.O1QUESTIONID || "0x01",
        2
      );
      await pmSystemInstance.prepareCondition(
        gasLimitOracleInstance.address,
        process.env.O2QUESTIONID || "0x02",
        2
      );
      await pmSystemInstance.prepareCondition(
        ethValueOracleInstance.address,
        process.env.O3QUESTIONID || "0x03",
        2
      );

      const conditionOneId = keccak256(
        difficultyOracleInstance.address +
          [
            process.env.O1QUESTIONID ||
              "0x0100000000000000000000000000000000000000000000000000000000000000",
            2
          ]
            .map(v => padLeft(toHex(v), 64).slice(2))
            .join("")
      );
      const conditionTwoId = keccak256(
        gasLimitOracleInstance.address +
          [
            process.env.O2QUESTIONID ||
              "0x0200000000000000000000000000000000000000000000000000000000000000",
            2
          ]
            .map(v => padLeft(toHex(v), 64).slice(2))
            .join("")
      );
      const conditionThreeId = keccak256(
        ethValueOracleInstance.address +
          [
            process.env.O3QUESTIONID ||
              "0x0300000000000000000000000000000000000000000000000000000000000000",
            2
          ]
            .map(v => padLeft(toHex(v), 64).slice(2))
            .join("")
      );

      console.log({
        difficultyMarket: conditionOneId,
        gasLimitMarket: conditionTwoId,
        ethValueMarket: conditionThreeId
      });

      // Pre-Calculate the LMSRAMM instance address
      const checksummedLMSRAddress = toChecksumAddress(
        keccak256(
          rlp.encode([LMSRMarketMakerFactoryInstance.address, initialNonce])
        ).substr(26)
      );

      await collateralToken.approve(
        checksummedLMSRAddress,
        process.env.AMMFUNDING || defaultAMMFunding,
        { from: accounts[0] }
      );
      // Deploy the pre-calculated LMSR instance
      await LMSRMarketMakerFactoryInstance.createLMSRMarketMaker(
        pmSystemInstance.address,
        collateralToken.address,
        [conditionOneId, conditionTwoId, conditionThreeId],
        0,
        process.env.AMMFUNDING || defaultAMMFunding,
        { from: accounts[0] }
      );
    });
  } else if (network === "mainnet") {
    //   __  __    _    ___ _   _ _   _ _____ _____ 
    // |  \/  |  / \  |_ _| \ | | \ | | ____|_   _|
    // | |\/| | / _ \  | ||  \| |  \| |  _|   | |  
    // | |  | |/ ___ \ | || |\  | |\  | |___  | |  
    // |_|  |_/_/   \_\___|_| \_|_| \_|_____| |_|    
    //
    // Mainnet Deploy below this point. Be careful 🙈
    //

    const DAI_TOKEN_ADDRESS = "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359"
    // MAINNET DEPLOY FOR DAI PRESENTATION 2019/03/05
    deployer.deploy(PredictionMarketSystem).then(async pmSystemInstance => {
      // Deploy the base contracts
      await deployer.deploy(Fixed192x64Math);
      await deployer.link(Fixed192x64Math, LMSRMarketMakerFactory);
      await deployer.link(Fixed192x64Math, LMSRMarketMaker);
      const collateralToken = await ERC20Detailed.at(DAI_TOKEN_ADDRESS)
      const LMSRMarketMakerFactoryInstance = await deployer.deploy(
        LMSRMarketMakerFactory
      );

      const QUESTIONID1 = process.env.O1QUESTIONID || "0x01000001"
      const QUESTIONID2 = process.env.O2QUESTIONID || "0x02000001"
      const QUESTIONID3 = process.env.O3QUESTIONID || "0x03000001"
      // Deploy the Oracle contracts
      /*
      const difficultyOracleInstance = await deployer.deploy(
        DifficultyOracle,
        pmSystemInstance.address,
        process.env.O1SSTARTBLOCK || 1,
        process.env.O1ENDBLOCK || 1e9,
        process.env.O1TARGET || 10,
        process.env.O1QUESTIONID || "0x01"
      );
      const gasLimitOracleInstance = await deployer.deploy(
        GasLimitOracle,
        pmSystemInstance.address,
        process.env.O2STARTBLOCK || 1,
        process.env.O2ENDBLOCK || 1e9,
        process.env.O2TARGET || 10,
        process.env.O2QUESTIONID || "0x02"
      );
      const ethValueOracleInstance = await deployer.deploy(
        ETHValueOracle,
        pmSystemInstance.address,
        medianizerAddr,
        process.env.O3STARTBLOCK || 1,
        process.env.O3ENDBLOCK || 1e9,
        process.env.O3TARGET || 10,
        process.env.O3QUESTIONID || "0x03"
      );
      */
      // Prepare and identify the conditions in the pmSystem
      await pmSystemInstance.prepareCondition(
        accounts[0],
        QUESTIONID1,
        2
      );
      await pmSystemInstance.prepareCondition(
        accounts[0],
        QUESTIONID2,
        2
      );
      await pmSystemInstance.prepareCondition(
        accounts[0],
        QUESTIONID3,
        2
      );

      const conditionOneId = keccak256(
        accounts[0] +
          [
            QUESTIONID1,
            2
          ]
            .map(v => padLeft(toHex(v), 64).slice(2))
            .join("")
      );
      const conditionTwoId = keccak256(
        accounts[0] +
          [
            QUESTIONID2,
            2
          ]
            .map(v => padLeft(toHex(v), 64).slice(2))
            .join("")
      );
      const conditionThreeId = keccak256(
        accounts[0] +
          [
            QUESTIONID3,
            2
          ]
            .map(v => padLeft(toHex(v), 64).slice(2))
            .join("")
      );

      // Pre-Calculate the LMSRAMM instance address
      const checksummedLMSRAddress = toChecksumAddress(
        keccak256(
          rlp.encode([LMSRMarketMakerFactoryInstance.address, initialNonce])
        ).substr(26)
      );

      console.log({
        conditionIds: [conditionOneId, conditionTwoId, conditionThreeId]
      })
      console.log({
        LMSRMarketMakerAddress: checksummedLMSRAddress
      })
      // Deposit the CollateralTokens necessary and approve() the pre-deployed LMSR instance
      /*
      // can't deposit DAI
      await collateralToken.deposit({
        from: accounts[0],
        value: process.env.AMMFUNDING || defaultAMMFunding
      });
      */
      await collateralToken.approve(
        checksummedLMSRAddress,
        process.env.AMMFUNDING || defaultAMMFunding,
        { from: accounts[0] }
      );
      // Deploy the pre-calculated LMSR instance
      await LMSRMarketMakerFactoryInstance.createLMSRMarketMaker(
        pmSystemInstance.address,
        collateralToken.address,
        [conditionOneId, conditionTwoId, conditionThreeId],
        0,
        process.env.AMMFUNDING || defaultAMMFunding,
        { from: accounts[0] }
      );
    });
    //
    // Mainnet Deploy above this point. Be careful 🙈
    //   __  __    _    ___ _   _ _   _ _____ _____ 
    // |  \/  |  / \  |_ _| \ | | \ | | ____|_   _|
    // | |\/| | / _ \  | ||  \| |  \| |  _|   | |  
    // | |  | |/ ___ \ | || |\  | |\  | |___  | |  
    // |_|  |_/_/   \_\___|_| \_|_| \_|_____| |_|    
    //
  }
};
