const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: 'Hello world' });
});

router.get('/hi', (req, res) => {
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function runCommand(command) {
  const { stdout, stderr, error } = await exec(command);
  if(stderr){console.error('stderr:', stderr);}
  if(error){console.error('error:', error);}
  return stdout;
}


async function myFunction () {
    // your code here building the command you wish to execute ...
    const command = 'hostname';
    const result = await runCommand(command);
    res.send(result);
    // your code here processing the result ...
}

// just calling myFunction() here so it runs when the file is loaded
myFunction();
  
});

module.exports = router;
