const getInitialDevice = require('../lib/getInitialDevice')
const url = require('url')
const sonos = require('sonos')

const getZoneController = async (timeout, zoneName, callback) => {
  const initDevice = await getInitialDevice(timeout)
  const groups = await initDevice.getAllGroups()

  const group = groups.find(group => {
    return zoneName === group.ID
  })

  if (!group) {
    return callback(new Error('Unable to find specified zone'))
  }

  const controller = group.ZoneGroupMember.find(member => {
    return member.UUID === group.Coordinator
  })

  const location = url.parse(controller.Location)

  return new sonos.Sonos(location.hostname)
}

module.exports = getZoneController
