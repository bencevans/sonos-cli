var getInitialDevice = require('../lib/getInitialDevice')
var url = require('url')
var _ = require('underscore')
var sonos = require('sonos')

module.exports = function getZoneController (timeout, zoneName, callback) {
  getInitialDevice(timeout, function (err, initDevice) {
    if (err) {
      return callback(err)
    }
    initDevice.getAllGroups().then(function (groups) {
      const group = groups.find(group => {
        return zoneName === group.ID
      })

      if (!group) {
        return callback(new Error('Unable to find specified zone'))
      }

      const controller = group.ZoneGroupMember.find(member => {
        return member.UUID === group.Coordinator
      })
      
      
      var location = url.parse(controller.Location)

      callback(null, new sonos.Sonos(location.hostname))
    }).catch(console.error)
  })
}
