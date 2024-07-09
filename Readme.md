Here's a comprehensive README file for your PROSPERA contract deployed on the Binance Smart Chain (BSC) Mainnet:

---

# PROSPERA (PROP) Token

PROSPERA is an ERC-20 token deployed on the Binance Smart Chain (BSC) Mainnet. This README provides an overview of the token's functionality, deployment details, and instructions for interacting with the contract.

## Token Details

- Name:PROSPERA
- Symbol: PROP
- Decimals: 18
- Total Supply: 120,000,000 PROP

## Smart Contract

The PROSPERA contract is an ERC-20 token with additional functionality for burning tokens and transferring ownership.

### Contract Address

`0x4547b76C7EdCaB21225285EAB8bE095938b426b6`

### Source Code

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PROSPERA is ERC20, Ownable {
    constructor() ERC20("PROSPERA", "PROP") Ownable(msg.sender){
        _mint(msg.sender, 120_000_000 * (10 ** decimals())); // 120 Million Tokens
    }

    /** 
     * @dev Burns tokens from the caller's account.
     * @param amount The amount of tokens to burn.
     */
    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Can only be called by the current owner.
     * @param newOwner Address of the new owner.
     */
    function transferOwnership(address newOwner) public override onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        _transferOwnership(newOwner);
    }
}
```

## Features

### Minting

Upon deployment, the contract mints 120 million PROP tokens to the deployer's address.

### Burning

Token holders can burn (destroy) their own tokens, reducing the total supply.

**Function:**
```solidity
function burn(uint256 amount) public
```

- **amount:** The amount of tokens to burn.

### Ownership

The contract uses OpenZeppelin's `Ownable` contract to manage ownership. The owner can transfer ownership to another address.

**Function:**
```solidity
function transferOwnership(address newOwner) public override onlyOwner
```

- **newOwner:** Address of the new owner.

## Interacting with the Contract

### Requirements

- BSC-compatible wallet (e.g., MetaMask, TrustWallet)
- BNB for gas fees

### Steps

1. **Connect to the BSC Mainnet:**
   - Network Name: Binance Smart Chain Mainnet
   - New RPC URL: `https://bsc-dataseed.binance.org/`
   - ChainID: `56`
   - Symbol: `BNB`
   - Block Explorer URL: `https://bscscan.com`

2. **Add PROSPERA Token to Wallet:**
   - Token Contract Address: `0x4547b76C7EdCaB21225285EAB8bE095938b426b6`
   - Token Symbol: `PROP`
   - Decimals: `18`

3. **Burn Tokens:**
   - Call the `burn` function with the desired amount of PROP tokens.

4. **Transfer Ownership (Owner Only):**
   - Call the `transferOwnership` function with the new owner's address.

## Development and Testing

The contract was developed and tested using the following tools and frameworks:

- Solidity `^0.8.19`
- OpenZeppelin Contracts
- Hardhat (for local development and testing)
- BSC Testnet (for testing before deploying on Mainnet)

## Deployment

The contract is deployed on the Binance Smart Chain Mainnet. The deployment process involved the following steps:

1. Compile the contract using Hardhat.
2. Deploy the contract using a BSC-compatible wallet.
3. Verify the contract on BscScan.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

For any questions or support, please contact the project maintainer.

---
