var _ = require('underscore')

module.exports = function listZones (initDevice) {
  initDevice.getAllGroups().then(zones => {
    _.each(zones, function (devices, group) {
      console.log(devices.ID)
      _.each(devices.ZoneGroupMember, function (device) {
        console.log('  ' + device.ZoneName)
      })
    })
  })
}
