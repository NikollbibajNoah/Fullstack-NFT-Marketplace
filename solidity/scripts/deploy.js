const hre = require("hardhat");

async function main() {
    // Replace 'YourContractName' with the name of your contract
    const Lock = await hre.ethers.getContractFactory("Lock");
    const lock = await Lock.deploy();

    await lock.deployed();

    console.log("YourContract deployed to:", yourContract.address);
}

// Execute the main function and handle errors
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });