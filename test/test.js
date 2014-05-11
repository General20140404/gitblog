var fs = require('fs');

var data = '';

fs.readFile('README.md', {'encoding': 'utf8'}, function(err, data) {
  if (err) throw err;
  fs.writeFile('writeFile.txt', data, function(err, data) {
    if (err) throw err;
    console.log('Write file successful.');
  });
});