
# osx-foreground

Foreground an application in OSX.

## Example

```js
const foreground = require('osx-foreground')

const pid = 91396

foreground(pid, err => {
  if (err) throw err
})
```

## License

MIT
