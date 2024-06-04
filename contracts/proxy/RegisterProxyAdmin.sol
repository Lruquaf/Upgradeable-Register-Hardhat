// SPDX-License-Identifier: MIT

pragma solidity 0.8.20;

import {ProxyAdmin} from "@openzeppelin/contracts/proxy/transparent/ProxyAdmin.sol";

contract RegisterProxyAdmin is ProxyAdmin {
    constructor(
        address /* owner address comes from hardhat automatically */
    ) ProxyAdmin() {}
}
