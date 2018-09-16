const sonos = require('sonos')

const getInitialDevice = (timeoutTime, cb) => {
  return new Promise((resolve, reject) => {
    const search = sonos.DeviceDiscovery()
    search.once('DeviceAvailable', dev => {
      clearTimeout(timeout)
      search.socket.close()
      resolve(dev)
    })
    const timeout = setTimeout(() => {
      search.socket.close()
      reject(new Error('Unable to find Sonos device'))
    }, timeoutTime)
  })
}

module.exports = getInitialDevice
