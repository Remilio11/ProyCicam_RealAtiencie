const { execFile } = require('child_process');

const child = execFile('aermet.exe', [], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});