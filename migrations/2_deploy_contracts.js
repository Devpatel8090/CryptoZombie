const fs = require("fs");
const path = require("path");

var safemath = artifacts.require("./safemath.sol");
var zombiefactory = artifacts.require("./zombiefactory.sol");
var zombiefeeding = artifacts.require("./zombiefeeding.sol");
var zombiehelper = artifacts.require("./zombiehelper.sol");
var zombieattack = artifacts.require("./zombieattack.sol");
var zombieownership = artifacts.require("./zombieownership.sol");
var MockKitty = artifacts.require("./MockKitty.sol"); // 👈 add this line

module.exports = async function (deployer, network, accounts) {
    // Deploy all zombie contracts
    await deployer.deploy(safemath);
    await deployer.deploy(zombiefactory);
    await deployer.deploy(zombiefeeding);
    await deployer.deploy(zombiehelper);
    await deployer.deploy(zombieattack);
    await deployer.deploy(zombieownership);
    const zombie = await zombieownership.deployed();

    // Deploy MockKitty contract
    await deployer.deploy(MockKitty);
    const kitty = await MockKitty.deployed();

    // Link MockKitty to Zombie contract
    await zombie.setKittyContractAddress(kitty.address);

    // Optional: seed 3 mock kitties for demo
    await kitty.setGene(1, "1111111111111111");
    await kitty.setGene(2, "2222222222222222");
    await kitty.setGene(3, "3333333333333333");

    console.log("✅ ZombieOwnership deployed at:", zombie.address);
    console.log("✅ MockKitty deployed at:", kitty.address);

    // Save addresses to contracts.json for your frontend
    const chainId = (await web3.eth.getChainId()) || (await web3.eth.net.getId());
    const contractsData = {
        [String(chainId)]: {
            ZombieOwnership: { address: zombie.address },
            MockKitty: { address: kitty.address },
        },
    };

    fs.writeFileSync(
        path.join(process.cwd(), "contracts.json"),
        JSON.stringify(contractsData, null, 2)
    );
    console.log("📄 contracts.json written for chainId:", chainId);
};
