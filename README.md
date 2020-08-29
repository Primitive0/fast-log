# fast-log

## Super simple library for logging (supports colors!)

```javascript
const loglib = require('@primitive0/fast-log');

//Simple logger
const logger = loglib.Logger;

logger.info('This is info');             // [2020-1-1 0:30:00] [info] This is info
logger.warn('Warning!');                 // [2020-1-1 0:30:00] [warn] Warning!
logger.error('Unhandled exception...');  // [2020-1-1 0:30:00] [error] Unhandled exception...

//Advanced logger that supports scopes
const logger = loglib.ScopedLogger('some-useful-module');

//Output using the same lines of code
//[2020-1-1 0:30:00] [some-useful-module] [info] This is info
//[2020-1-1 0:30:00] [some-useful-module] [warn] Warning!
//[2020-1-1 0:30:00] [some-useful-module] [error] Unhandled exception...
```