var _ = require('underscore')

module.exports = function listDevices (initDevice) {
  initDevice.getTopology(function (err, top) {
    if (err) throw err

    _.each(top.zones, function (zone) {
      console.log(zone.name)
      Object.keys(zone).forEach((key) => {
        console.log('  ' + key + ': ', zone[key])
      })
      console.log()
    })

  })
}
