#!/usr/bin/env node

const complete_installation = require(__dirname + "/complete_installation.js");
const default_args_from_bin = {
    app_id: "core_nlp_by_http [pid: " + process.pid + "]",
    port: false,
    browser: "firefox"
};
const args = Object.assign({}, default_args_from_bin, require("yargs").argv);
const server = require(__dirname + "/../src/server.js")(args);
module.exports = server;