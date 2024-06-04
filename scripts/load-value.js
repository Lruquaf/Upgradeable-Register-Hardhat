const {ethers, getNamedAccounts, network} = require("hardhat")
const {networkConfig} = require("../helper-hardhat-config")

async function main() {
    const transparentProxy = await ethers.getContract("Register_Proxy")

    const registerV1Proxy = await ethers.getContractAt(
        "Register",
        await transparentProxy.getAddress()
    )

    const newValue = 1337

    let value = await registerV1Proxy.retrieve()
    console.log("Previous Value: ", value.toString())

    const loadTx = await registerV1Proxy.load(newValue)

    await loadTx.wait(1)

    value = await registerV1Proxy.retrieve()
    console.log("Current Value: ", value.toString())
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
