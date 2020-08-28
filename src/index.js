const { stdout, colors } = require("@primitive0/js-io");


const INFO_MSG_HEADER = `[${colors.custom_color(39, false)}info${colors.RESET_COLOR}] `;
const WARN_MSG_HEADER = `[${colors.custom_color(202, false)}warn${colors.RESET_COLOR}] `;
const ERR_MSG_HEADER = `[${colors.custom_color(160, false)}error${colors.RESET_COLOR}] `;

const SCOPE_COLOR = colors.custom_color(35, false);


//simple logger
const Logger = {
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
    }
};

//logger that supports scopes
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
        stdout.write(`[${SCOPE_COLOR}${this.scope}${colors.RESET_COLOR}] `);
    }

    info(str) {
        this._write_scope();
        Logger.info(str);
    }

    warn(str) {
        this._write_scope();
        Logger.warn(str);
    }

    error(str) {
        this._write_scope();
        Logger.error(str);
    }
}


module.exports = { Logger, ScopedLogger };
