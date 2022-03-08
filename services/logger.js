const {
    APP_NAME
} = require('../services/config');

const opts = {
    logDirectory: './logs',
    fileNamePattern: APP_NAME + '_<DATE>.log',
    dateFormat: 'YYYY_MM_DD'
};

const log = require('simple-node-logger').createRollingFileLogger(opts);
const console = require('simple-node-logger').createSimpleLogger();

if (process.env.NODE_ENV == 'development') {
    log.setLevel('debug');
} else {
    log.setLevel('info');
}

var All = (text) => {
    log.all(text);
    console.all(text);
}

var Trace = (text) => {
    log.trace(text);
    console.trace(text);
}

var Debug = (text) => {
    log.debug(text);
    console.debug(text);
}

var Info = (text) => {
    log.info(text);
    console.info(text);
}

var Warn = (text) => {
    log.warn(text);
    console.warn(text);
}

var Error = (text) => {
    log.error(text);
    console.error(text);
}

var Fatal = (text) => {
    log.fatal(text);
    console.fatal(text);
}

module.exports = {
    All: All,
    Trace: Trace,
    Debug: Debug,
    Info: Info,
    Warn: Warn,
    Error: Error,
    Fatal: Fatal
}