// SPDX-License-Identifier: MIT

pragma solidity 0.8.20;

contract RegisterV2 {
    uint256 internal value;

    event ValueChanged(uint256 newValue);

    function load(uint256 _newValue) public {
        value = _newValue;
        emit ValueChanged(_newValue);
    }

    function increment() public {
        value = value + 1;
        emit ValueChanged(value);
    }

    function retrieve() public view returns (uint256) {
        return value;
    }

    function version() public pure returns (uint256) {
        return 2;
    }
}
