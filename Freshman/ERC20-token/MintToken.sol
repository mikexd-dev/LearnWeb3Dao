// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract LW3Token is ERC20 {
    constructor(string memory _name, string memory _symbol)
        ERC20(_name, _symbol)
    {
        // _mint is an internal function within the ERC20 standard contract, which means that it can only be called by the contract itself. External users cannot call this function.
        // 10 * 10 ** 18 specifies that you want 10 full tokens to be minted to your address.
        // ERC20 tokens by default work with 18 decimal places. So 1 full LW3Token in this case, is actually represented as 10 ^ 18.
        _mint(msg.sender, 10 * 10**18);
    }
}
