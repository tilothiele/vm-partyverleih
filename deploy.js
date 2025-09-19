
// with commonJS
const { Client } = require('node-scp')

console.log("deploy...")

Client({
    host: '194.164.54.189',
    port: 22,
    username: 'ansible',
    agent: process.env.SSH_AUTH_SOCK,
    // password: 'password',
    // privateKey: fs.readFileSync('./key.pem'),
    // passphrase: 'your key passphrase',
  }).then(client => {
    console.log('create directory')
    client.mkdir('/var/www/vm-partyverleih.de')
    return client
  }).then(client => {
    console.log('copy content folder ./public nach /var/www/vm-partyverleih.de')
    client.uploadDir('./public', '/var/www/vm-partyverleih.de')
    .then(response => {
        console.log('done')
        client.close() // remember to close connection after you finish
      })
      .catch(error => {})
  }).catch(e => console.log(e))

