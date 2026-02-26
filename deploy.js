
// with commonJS
const { Client } = require('node-scp')

async function deploy() {
  console.log("deploy...")
  let client;
  try {
    client = await Client({
      host: '194.164.54.189',
      port: 22,
      username: 'ansible',
      agent: process.env.SSH_AUTH_SOCK,
    })

    console.log('check/create directory /var/www/vm-partyverleih.de')
    try {
      await client.mkdir('/var/www/vm-partyverleih.de')
    } catch (mkdirError) {
      // Ignore error if directory already exists (code 4 is common for SFTP SSH_FX_FAILURE)
      if (mkdirError.code !== 4) {
        throw mkdirError;
      }
      console.log('directory already exists, continuing...')
    }

    console.log('copy content folder ./public nach /var/www/vm-partyverleih.de')
    await client.uploadDir('./public', '/var/www/vm-partyverleih.de')

    console.log('done')
  } catch (e) {
    console.error('Deployment failed:')
    console.error(e)
    process.exit(1)
  } finally {
    if (client) {
      await client.close()
    }
  }
}

deploy()

