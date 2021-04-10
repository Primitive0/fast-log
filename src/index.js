const { stdout, colors } = require("@primitive0/js-stdout");

const INFO_MSG_HEADER = `[${colors.custom_color(39)}info${colors.RESET}] `;
const WARN_MSG_HEADER = `[${colors.custom_color(202)}warn${colors.RESET}] `;
const ERR_MSG_HEADER = `[${colors.custom_color(160)}error${colors.RESET}] `;

const SCOPE_COLOR = colors.custom_color(35);


//logging functions
const LoggingFunctions = {
    _call(type, str) {
        if(type === 'info') stdout.write(INFO_MSG_HEADER);
        else if(type === 'warn') stdout.write(WARN_MSG_HEADER);
        else if(type === 'error') stdout.write(ERR_MSG_HEADER);
        else return false;

        stdout.writeln(str)
    },
    
    info: str => this._call('info', str),
    warn: str => this._call('warn' str),
    error: str => this._call('error', str),

    write_current_time() {
        const date = new Date();
        const formatted = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`;

        stdout.write(`[${colors.custom_color(244)}${formatted}${colors.RESET}] `);
    }
};

//simple logger (logs time and some info)
const Logger = {
    _call(type, str) {
        if(type !== 'info' || type !== 'warn' || type !== 'error') return false;
        LoggingFunctions.write_current_time();
        LoggingFunctions[type](str);
    },

    info: str => this._call('info', str),
    warn: str => this._call('warn', str),
    error: str => this._call('error', str)
};

//advanced logger that supports scopes
const scopes = {};

function ScopedLogger(scope) {
    if (scope in scopes) return scopes[scope];

    return scopes[scope] = new ScopedLoggerClass(scope);
}

class ScopedLoggerClass {
    constructor(scope) {
        this.scope = scope;
    }

    _write_scope() {
        stdout.write(`[${SCOPE_COLOR}${this.scope}${colors.RESET}] `);
    }

    _call(type, str) {
        if(type !== 'info' || type !== 'warn' || type !== 'error') return false;
        LoggingFunctions.write_current_time();
        this._write_scope();
        LoggingFunctions[type](str);
    },

    info: str => this._call('info', str),
    warn: str => this._call('warn', str),
    error: str => this._call('error', str)
}


module.exports = { LoggingFunctions, Logger, ScopedLogger };
