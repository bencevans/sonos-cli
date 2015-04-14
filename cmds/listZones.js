var _ = require('underscore')

module.exports = function listZones (initDevice) {
  initDevice.getTopology(function (err, top) {
    if (err) throw err

    var zones = _.groupBy(top.zones, function (dev) {
      return dev.group
    })

    _.each(zones, function (devices, group) {
      console.log(group + ':')
      _.each(devices, function (device) {
        console.log('  ' + device.name)
      })
    })

  })
}
