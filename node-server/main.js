/*
 *  sUpdate NodeJS-Based Server: Main Script
 *  Copyright 2019, WaveLine Software, All Rights Reserved.
 */

// Import modules.
const logger = require('./logger'); logger.info(`Using logger v${logger.version}.`)
const express = require('express'); logger.info(`Using express v${require('express/package').version}`)

// Load configs and lists.
var config = require('./config.json'); logger.info(`Root directory is ${config.root}, using port ${config.port}.`)
var products = require(`./${config.root}/list.json`).products; logger.info(`Hosting updates for ${products.length} products.`)

// Configure server.
const server = express();
server.use(express.static(config.root))

// Start server.
server.listen(config.port, () => { logger.info(`Started server on port ${config.port}, press ^C to quit.`) })