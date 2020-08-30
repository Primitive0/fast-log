const { stdout, colors } = require("@primitive0/js-io");


const INFO_MSG_HEADER = `[${colors.custom_color(39, false)}info${colors.RESET}] `;
const WARN_MSG_HEADER = `[${colors.custom_color(202, false)}warn${colors.RESET}] `;
const ERR_MSG_HEADER = `[${colors.custom_color(160, false)}error${colors.RESET}] `;

const SCOPE_COLOR = colors.custom_color(35, false);


//logging functions
const LoggingFunctions = {
    info(str) {
        stdout.write(INFO_MSG_HEADER);
        stdout.writeln(str);
    },

    warn(str) {
        stdout.write(WARN_MSG_HEADER);
        stdout.writeln(str);
    },

    error(str) {
        stdout.write(ERR_MSG_HEADER);
        stdout.writeln(str);
    },

    write_current_time() {
        const date = new Date();
        const formatted = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`;

        stdout.write(`[${colors.custom_color(244)}${formatted}${colors.RESET}] `);
    }
};

//simple logger (logs time and some info)
const Logger = {
    info(str) {
        LoggingFunctions.write_current_time();
        LoggingFunctions.info(str);
    },

    warn(str) {
        LoggingFunctions.write_current_time();
        LoggingFunctions.warn(str);
    },

    error(str) {
        LoggingFunctions.write_current_time();
        LoggingFunctions.error(str);
    }
};

//advanced logger that supports scopes
const scopes = {};

function ScopedLogger(scope) {
    if (scope in scopes) {
        return scopes[scope];
    }

    return scopes[scope] = new ScopedLoggerClass(scope);
}

class ScopedLoggerClass {
    constructor(scope) {
        this.scope = scope;
    }

    _write_scope() {
        stdout.write(`[${SCOPE_COLOR}${this.scope}${colors.RESET}] `);
    }

    info(str) {
        LoggingFunctions.write_current_time();
        this._write_scope();
        LoggingFunctions.info(str);
    }

    warn(str) {
        LoggingFunctions.write_current_time();
        this._write_scope();
        LoggingFunctions.warn(str);
    }

    error(str) {
        LoggingFunctions.write_current_time();
        this._write_scope();
        LoggingFunctions.error(str);
    }
}


module.exports = { LoggingFunctions, Logger, ScopedLogger };
