# FlightSurety

FlightSurety is a sample application project for Udacity's Blockchain course.
This repository contains Smart Contract code in Solidity (using Truffle), tests (also using Truffle), dApp scaffolding (using HTML, CSS and JS) and server app scaffolding.

## Versions
* Truffle v5.1.14-nodeLTS.0 (core: 5.1.13)
* Solidity - ^0.6.0 (solc-js)
* Node v10.16.0
* Web3.js v1.2.1

## Stack
* Smart contracts on Ganache (localhost:7545)
* Oracles as NodeJS Server (localhost:8000)
* Web Frontend (localhost:3000)

## Install Modules
* `npm install`

## Deploy Smart Contracts
* `truffle compile`
* `truffle migrate`

## Start Server for Oracles
* `npm run server`

## Start Web App (DApp)
* `npm run dapp`

## Start Truffle Tests
* `truffle test ./test/flightSurety.js`
* `truffle test ./test/oracles.js`

## Deploy for Production
* `npm run dapp:prod`
