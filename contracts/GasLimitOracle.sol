pragma solidity ^0.5.1;
import { PredictionMarketSystem } from "@gnosis.pm/hg-contracts/contracts/PredictionMarketSystem.sol";
import { TargetValueOracle } from "./TargetValueOracle.sol";

contract GasLimitOracle is TargetValueOracle {
    constructor (
        PredictionMarketSystem pmSystem,
        uint resolutionTime,
        uint difficultyTarget,
        bytes32 questionId
    ) public TargetValueOracle(pmSystem, resolutionTime, difficultyTarget, questionId) {}

    function readValue() internal returns(uint) {
        return block.gaslimit;
    }
}
