# fast-log

## Usage

1. Import logger with scope.

```javascript
// Node.JS
const logger = require('@primitive0/fast-log').scope('my-scope');

// TypeScript
import { ScopedLogger } from '@primitive0/fast-log'
const logger = ScopedLogger('my-scope');
```

2. Use!

```javascript
logger.info('Hello there!');
```

Console output:

**Imagine colorful picture**

`[info] [my-scope] Hello there!`
