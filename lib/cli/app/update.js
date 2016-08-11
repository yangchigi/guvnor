'use strict'

const config = require('../config')
const pkg = require('../../../package.json')

module.exports = (user, api, yargs) => {
  const argv = yargs
    .usage('Usage: $0 app udpate [options] <app>')
    .demand(4, 'Please specify an app to update')
    .example('$0 app update my-app', 'Updates all refs for my-app')

    .help('h')
    .alias('h', 'help')

    .describe('verbose', 'Prints detailed internal logging output')
    .alias('v', 'verbose')
    .boolean('v')

    .epilog(`${config.DAEMON_NAME} v${pkg.version}`)
    .argv

  const name = argv._[3]

  api.app.update(name, console.info, (error, app) => {
    if (error) {
      throw error
    }

    console.info(`Updated ${app.name}`)

    api.disconnect()
  })
}