const PATH = '/home/milton/projects/billable/herbalistsp/salespros-contractor-portal/.htaccess';
const fs = require('fs');
const text = fs.readFileSync(PATH);

const regex = /RewriteRule(.+)\s+\/(.+)\s+\[([^\]])\]/g;//.exec(text);
var match, rules = [];

while (match = regex.exec(text)) {
  //  params[decode(match[1])] = decode(match[2]);
    var from = match[1].trim(), to = `/${match[2].trim()}`, flag = match[3].trim();
    var node = {from, to, flag}; 
    rules.push(node)
  }

  console.log(rules);
fs.writeFileSync('../src/rewrite-rules.json', JSON.stringify(rules));
// console.log(regex[1], text.length);
