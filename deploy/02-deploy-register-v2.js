const {network, ethers, artifacts} = require("hardhat")
const {networkConfig, developmentChains} = require("../helper-hardhat-config")
const {verify} = require("../utils/verify")

module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy, log} = deployments
    const {deployer} = await getNamedAccounts()

    console.log("Deploying Register V2...")

    const registerV2 = await deploy("RegisterV2", {
        from: deployer,
        args: [],
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })

    if (
        !developmentChains.includes(network.name) &&
        process.env.ETHERSCAN_API_KEY
    ) {
        await verify(registerV2.address, [])
    }
    console.log("Register V2 was deployed!")
}

module.exports.tags = ["all", "register-v2"]
