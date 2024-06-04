const {ethers, getNamedAccounts, network} = require("hardhat")
const {networkConfig} = require("../helper-hardhat-config")

async function main() {
    const transparentProxy = await ethers.getContract("Register_Proxy")

    const registerV3Proxy = await ethers.getContractAt(
        "RegisterV3",
        await transparentProxy.getAddress()
    )

    let value = await registerV3Proxy.retrieve()
    console.log("Previous Value: ", value.toString())

    const clearTx = await registerV3Proxy.clear()

    await clearTx.wait(1)

    value = await registerV3Proxy.retrieve()
    console.log("Current Value: ", value.toString())
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
