const fs = require('fs');
const os = require('os');

var user = os.userInfo(); 

fs.appendFile('./dist/files/greeting.txt', `Hello ${user.username}!`, 'utf-8', function() {
    console.log('Text write to file!');
});