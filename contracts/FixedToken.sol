pragma solidity ^0.7.0;
//SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/access/Ownable.sol"; //https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol
import "@openzeppelin/contracts/drafts/ERC20Permit.sol"; //https://github.com/OpenZeppelin/openzeppelin-contracts/blob/9425a7e0ab1d45c48845d47afc33856ad9d98b0c/contracts/drafts/ERC20Permit.sol
import "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";
contract FixedToken is ERC20Permit, Ownable, ERC20Burnable {
    constructor () ERC20("Permittable-Fixed", "PIX") ERC20Permit("Permittable-Fixed") {
        _mint(msg.sender, 1000);
    }
      /**
   * @dev Function to mint tokens only Owner
   * @param to The address that will receive the minted tokens.
   * @param amount The amount of tokens to mint.
   * @return A boolean that indicates if the operation was successful.
   */
  function mint(
    address to,
    uint256 amount
  )
    public
    onlyOwner
    returns (bool)
  {
    _mint(to, amount);
    return true;
  }


}