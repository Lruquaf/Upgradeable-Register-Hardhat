const {ethers, getNamedAccounts, network} = require("hardhat")
const {networkConfig} = require("../helper-hardhat-config")

async function main() {
    const transparentProxy = await ethers.getContract("Register_Proxy")

    const registerV2Proxy = await ethers.getContractAt(
        "RegisterV2",
        await transparentProxy.getAddress()
    )

    let value = await registerV2Proxy.retrieve()
    console.log("Previous Value: ", value.toString())

    const incrementTx = await registerV2Proxy.increment()

    await incrementTx.wait(1)

    value = await registerV2Proxy.retrieve()
    console.log("Current Value: ", value.toString())
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
