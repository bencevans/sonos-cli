module.exports = function play (dev, uri) {
  if (!uri) {
    dev.play(function (err) {
      if (err) {
        throw err
      }
      console.log('Playing...')
    })
  } else {
    var spotifyId = uri.match(/[\w\:]*\:(\w+)/)[1]
    if (spotifyId) {
      dev.addSpotify(spotifyId, function (err) {
        if (err) {
          throw err
        }
        console.log('Playing')
      })
    }
  }
}
