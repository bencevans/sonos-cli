var sonos = require('sonos')

module.exports = function getInitialDevice (timeoutTime, cb) {
  var search = sonos.search()
  search.once('DeviceAvailable', function (dev) {
    clearTimeout(timeout)
    search.socket.close()
    cb(null, dev)
  })
  var timeout = setTimeout(function () {
    search.socket.close()
    cb(new Error('Unable to find Sonos device'))
  }, timeoutTime)
}
