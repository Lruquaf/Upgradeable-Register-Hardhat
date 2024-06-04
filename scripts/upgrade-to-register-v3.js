const {ethers, getNamedAccounts, network} = require("hardhat")
const {networkConfig} = require("../helper-hardhat-config")

async function main() {
    const registerProxyAdmin = await ethers.getContract("RegisterProxyAdmin")
    const transparentProxy = await ethers.getContract("Register_Proxy")
    const registerV3 = await ethers.getContract("RegisterV3")

    const registerV2Proxy = await ethers.getContractAt(
        "RegisterV2",
        await transparentProxy.getAddress()
    )

    let version = await registerV2Proxy.version()
    console.log("Previous Version: ", version.toString())

    const upgradeTx = await registerProxyAdmin.upgrade(
        await transparentProxy.getAddress(),
        await registerV3.getAddress()
    )

    await upgradeTx.wait(1)

    const registerV3Proxy = await ethers.getContractAt(
        "RegisterV3",
        await transparentProxy.getAddress()
    )

    version = await registerV3Proxy.version()
    console.log("Current Version: ", version.toString())
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
