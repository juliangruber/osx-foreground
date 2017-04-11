const run = require('comandante')
const assert = require('assert')

module.exports = (pid, cb) => {
  assert(pid, 'pid required')
  const proc = run('osascript', [])
  setImmediate(() => {
    proc.end(`
      tell application "System Events"
        repeat with tries from 1 to 3
          try
            set frontmost of the first process whose unix id is ${pid} to true
            exit repeat
          on error errText number errNum
          end try
          delay 1
        end repeat
        if tries = 3 then
          error errText number errNum
        end if
      end tell
    `)
  });
  proc.on('error', cb)
  proc.on('end', cb)
}

