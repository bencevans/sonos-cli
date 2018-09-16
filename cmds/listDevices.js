module.exports = function listDevices (initDevice) {
  initDevice.getAllGroups().then(groups => {
    groups.forEach(group => {
      group.ZoneGroupMember.forEach(zone => {
        console.log(zone.ZoneName)
        Object.keys(zone).forEach((key) => {
          console.log('  ' + key + ': ', zone[key])
        })
        console.log()
      })
    })
  })
}
