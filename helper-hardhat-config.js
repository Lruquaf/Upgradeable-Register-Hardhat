const {ethers} = require("hardhat")

const networkConfig = {
    31337: {
        name: "localhost",
        MGUris: [
            "ipfs://QmeYXFyq34jaEeb5SRBCXGx27Mxbf8KjHhjfeodTjxqUMT",
            "ipfs://QmNd8e6gZ3sHiUA9P5ndxUGBSGAFyjGLyy63sTnpK1Akao",
            "ipfs://QmcnHVpyBcErHhAN8JEBcZHtzLo6jZhfKipcMEaLryNyb8",
            "ipfs://QmQjva3vPXaff9kJAYnPnonXKvnA7pjpaciwveXpb58WZA",
            "ipfs://QmdgS3vrexrbM4AantVfJizCA8Y6PYLBBsm8agdMeNXZpS",
            "ipfs://QmdeHiieGj62bxNtSpingL7ggsjzb457F1Yn8osTawYfsm",
            "ipfs://QmRmuYMvZvGWkgXa1wDKZrbSs9YioWAvu1tnEQ1QFbQvoz",
            "ipfs://QmeQbMtc6GDb18VbvNaUp17ypTsS2fvB6wDGynid9iYvS5",
            "ipfs://QmTFU9UACYV7KjVyMy41bMX6W8hcySGKrpoRrgx3tBM6XG",
            "ipfs://QmRzsLjCL2LZQSC4T5LDCRCFHBLNS1YxDnmqJgF54aexrT",
        ],
        CCUris: [
            "ipfs://bafybeidlmadropcwraycov5hoeped536jasdqudq7oeojcz2h2so55v3vq",
            "ipfs://bafybeiaenq6huoqke5apsmm54tdlnp4rbb7h2swivbvur2f6inn4p3yfo4",
            "ipfs://bafybeihmlt5bxerdcpij4jst5tmbbvadyp7b64mysb3jadmpqjdthj6scq",
            "ipfs://bafybeid6gv7ksk7uald5fcguwnyqix37h3bdlqkuo5wv6hb3fmc2tutfhq",
            "ipfs://bafybeiav2fspl7l42m4dwemg3km7fvhku6na5nit7k7jk3xlm5a7iyugle",
            "ipfs://bafybeifol6vcogyucktp7zi7nhq4bid6ehvg2wppoykl5ysqu2lfr7p4le",
        ],
        tokenPrice: ethers.parseEther("0.1"),
    },
    11155111: {
        name: "sepolia",
        MGUris: [
            "ipfs://QmeYXFyq34jaEeb5SRBCXGx27Mxbf8KjHhjfeodTjxqUMT",
            "ipfs://QmNd8e6gZ3sHiUA9P5ndxUGBSGAFyjGLyy63sTnpK1Akao",
            "ipfs://QmcnHVpyBcErHhAN8JEBcZHtzLo6jZhfKipcMEaLryNyb8",
            "ipfs://QmQjva3vPXaff9kJAYnPnonXKvnA7pjpaciwveXpb58WZA",
            "ipfs://QmdgS3vrexrbM4AantVfJizCA8Y6PYLBBsm8agdMeNXZpS",
            "ipfs://QmdeHiieGj62bxNtSpingL7ggsjzb457F1Yn8osTawYfsm",
            "ipfs://QmRmuYMvZvGWkgXa1wDKZrbSs9YioWAvu1tnEQ1QFbQvoz",
            "ipfs://QmeQbMtc6GDb18VbvNaUp17ypTsS2fvB6wDGynid9iYvS5",
            "ipfs://QmTFU9UACYV7KjVyMy41bMX6W8hcySGKrpoRrgx3tBM6XG",
            "ipfs://QmRzsLjCL2LZQSC4T5LDCRCFHBLNS1YxDnmqJgF54aexrT",
        ],
        CCUris: [
            "ipfs://bafybeidlmadropcwraycov5hoeped536jasdqudq7oeojcz2h2so55v3vq",
            "ipfs://bafybeiaenq6huoqke5apsmm54tdlnp4rbb7h2swivbvur2f6inn4p3yfo4",
            "ipfs://bafybeihmlt5bxerdcpij4jst5tmbbvadyp7b64mysb3jadmpqjdthj6scq",
            "ipfs://bafybeid6gv7ksk7uald5fcguwnyqix37h3bdlqkuo5wv6hb3fmc2tutfhq",
            "ipfs://bafybeiav2fspl7l42m4dwemg3km7fvhku6na5nit7k7jk3xlm5a7iyugle",
            "ipfs://bafybeifol6vcogyucktp7zi7nhq4bid6ehvg2wppoykl5ysqu2lfr7p4le",
        ],
        tokenPrice: ethers.parseEther("0.01"),
    },
}

const frontendAddressLocation = "frontend/constants/addresses.json"
const frontendAbiLocation = "frontend/constants/"

const developmentChains = ["hardhat", "localhost"]

module.exports = {
    networkConfig,
    developmentChains,
    frontendAddressLocation,
    frontendAbiLocation,
}
