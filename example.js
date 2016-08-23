const foreground = require('.')

foreground(process.argv[2], err => {
  if (err) throw err
})
