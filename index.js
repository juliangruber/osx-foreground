const run = require('comandante')
const assert = require('assert')

module.exports = (pid, cb) => {
  assert(pid, 'pid required')
  const proc = run('osascript', [])
  proc.end(`
    tell application "System Events"
      set frontmost of the first process whose unix id is ${pid} to true
    end tell
  `)
  proc.on('error', cb)
  proc.on('end', cb)
}
