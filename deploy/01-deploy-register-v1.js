const {network, ethers, artifacts} = require("hardhat")
const {networkConfig, developmentChains} = require("../helper-hardhat-config")
const {verify} = require("../utils/verify")

module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy, log} = deployments
    const {deployer} = await getNamedAccounts()

    console.log("Deploying Register V1...")

    const register = await deploy("Register", {
        from: deployer,
        args: [],
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
        proxy: {
            proxyContract: "OpenZeppelinTransparentProxy",
            viaAdminContract: {
                name: "RegisterProxyAdmin",
                artifact: "RegisterProxyAdmin",
            },
        },
    })

    if (
        !developmentChains.includes(network.name) &&
        process.env.ETHERSCAN_API_KEY
    ) {
        await verify(register.address, [])
    }
    console.log("Register V1 was deployed!")
}

module.exports.tags = ["all", "register"]
