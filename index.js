const run = require('comandante')
const assert = require('assert')

module.exports = (pid, cb) => {
  assert(pid, 'pid required')
  const proc = run('osascript', [])
  proc.end(`
    tell application "System Events"
      set procs to every process whose unix id is ${pid}
      repeat with proc in procs
        set the frontmost of proc to true
      end repeat
    end tell
  `)
  proc.on('error', cb)
  proc.on('end', cb)
}
