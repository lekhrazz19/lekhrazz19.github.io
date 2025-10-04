---
title: "EVM Reentrancy Checklist"
date: 2025-10-04
summary: "A quick checklist for spotting and preventing reentrancy vulnerabilities in Solidity smart contracts."
---

Reentrancy remains one of the most impactful classes of bugs in EVM smart contracts. Keep this checklist handy:

- Use Checks-Effects-Interactions pattern
- Prefer `transfer`/`send` only with proper error handling (or use call with care)
- Reentrancy guards on sensitive functions
- Avoid complex external calls within same transaction
- Comprehensive unit and integration tests with malicious contracts

Tools: Foundry, Echidna, Slither.
