const {network, ethers, artifacts} = require("hardhat")
const {networkConfig, developmentChains} = require("../helper-hardhat-config")
const {verify} = require("../utils/verify")

module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy, log} = deployments
    const {deployer} = await getNamedAccounts()

    console.log("Deploying Register V3...")

    const registerV3 = await deploy("RegisterV3", {
        from: deployer,
        args: [],
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })

    if (
        !developmentChains.includes(network.name) &&
        process.env.ETHERSCAN_API_KEY
    ) {
        await verify(registerV3.address, [])
    }
    console.log("Register V3 was deployed!")
}

module.exports.tags = ["all", "register-v3"]
