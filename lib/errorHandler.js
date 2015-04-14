module.exports = function handleError (err) {
  console.error('ERROR: ' + err.message)
  process.exit(1)
}
