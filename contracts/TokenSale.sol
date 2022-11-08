// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

// import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenSale {
    uint256 public ratio;
    // underscore helps us make a state variable
    constructor(uint256 _ratio) {
        ratio = _ratio;

    }
}