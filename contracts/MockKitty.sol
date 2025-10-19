// SPDX-License-Identifier: MIT
pragma solidity ^0.4.25;

/**
 * Minimal mock of CryptoKitties used by ZombieFeeding: only getKitty(...) matters.
 * We store genes per kittyId and return them in the last tuple position.
 */
contract MockKitty {
    struct K { uint256 genes; }
    mapping(uint256 => K) public kitties;

    // For demo: set kitty DNA (callable by anyone in local demo)
    function setGene(uint256 kittyId, uint256 gene) external {
        kitties[kittyId].genes = gene;
    }

    // CK interface shape the CryptoZombies tutorial calls.
    function getKitty(uint256 _id)
        external
        view
        returns (
            bool isGestating,
            bool isReady,
            uint256 cooldownIndex,
            uint256 nextActionAt,
            uint256 siringWithId,
            uint256 birthTime,
            uint256 matronId,
            uint256 sireId,
            uint256 generation,
            uint256 genes
        )
    {
        K memory k = kitties[_id];
        return (
            false,             // isGestating
            true,              // isReady
            0,                 // cooldownIndex
            0,                 // nextActionAt
            0,                 // siringWithId
            block.timestamp,   // birthTime
            0,                 // matronId
            0,                 // sireId
            0,                 // generation
            k.genes            // genes (the only value ZombieFeeding uses)
        );
    }
}
