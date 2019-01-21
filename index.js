const yaml = require('js-yaml');
const fs = require('fs');

try {
  let doc = yaml.safeLoad(fs.readFileSync('./nyan.yml', 'utf8'));
  console.log(doc);

  doc.a.bc = [ 1, 2, 3];
  doc.a.de = 'nyan';

  const result = yaml.safeDump(doc);
  console.log(result);
} catch (e) {
  console.log(e);
}