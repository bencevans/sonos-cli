const getInitialDevice = require('../lib/getInitialDevice')
const url = require('url')
const sonos = require('sonos')

const getZoneController = async (timeout, zoneName, callback) => {
  const initDevice = await getInitialDevice(timeout)
  const groups = await initDevice.getAllGroups()

  const group = (Array.isArray(groups) ? groups : [groups]).find(group => {
    return zoneName === group.ID
  })

  if (!group) {
    const error = new Error('Unable to find specified zone')
    if (callback) return callback(error)
    throw error
  }

  const controller = group.ZoneGroupMember.find(member => {
    return member.UUID === group.Coordinator
  })

  const location = new url.URL(controller.Location)

  return new sonos.Sonos(location.hostname)
}

module.exports = getZoneController
