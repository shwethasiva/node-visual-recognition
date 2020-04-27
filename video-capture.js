var PythonShell = require('python-shell');

PythonShell.run('vdeo-capture.py', function (err) {
  if (err) throw err;
  console.log('finished');
});
