var getInitialDevice = require('../lib/getInitialDevice')
var url = require('url')
var _ = require('underscore')
var sonos = require('sonos')

module.exports = function getZoneController (timeout, zoneName, callback) {
  getInitialDevice(timeout, function (err, initDevice) {
    if (err) {
      return callback(err)
    }
    initDevice.getTopology(function (err, top) {
      if (err) {
        return callback(err)
      }
      var zoneControllerTop = _.find(top.zones, function (zone) {
        return zone.coordinator === 'true' && zone.group === zoneName
      })

      var location = url.parse(zoneControllerTop.location)

      callback(null, new sonos.Sonos(location.hostname))
    })
  })
}
