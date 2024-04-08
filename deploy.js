
// with commonJS
const { Client } = require('node-scp')

console.log("deploy...")

Client({
    host: '212.132.101.21',
    port: 22,
    username: 'ansible',
    agent: process.env.SSH_AUTH_SOCK,
    // password: 'password',
    // privateKey: fs.readFileSync('./key.pem'),
    // passphrase: 'your key passphrase',
  }).then(client => {
    client.uploadDir('./public', '/home/ansible/www/vm-partyverleih.de')
          .then(response => {
            console.log('done')
            client.close() // remember to close connection after you finish
          })
          .catch(error => {})
  }).catch(e => console.log(e))

