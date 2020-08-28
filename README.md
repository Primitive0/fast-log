# fast-log

## Super simple library for logging (supports colors!)

```javascript
const loglib = require('@primitive0/fast-log');

//Simple logger
const logger = loglib.Logger;

logger.info('This is info');             // [info] This is info
logger.warn('Warning!');                 // [warn] Warning!
logger.error('Unhandled exception...');  // [error] Unhandled exception...

//Advanced logger that supports scopes
const logger = loglib.ScopedLogger('some-useful-module');

//Output using the same lines of code
//[some-useful-module] [info] This is info
//[some-useful-module] [warn] Warning!
//[some-useful-module] [error] Unhandled exception...