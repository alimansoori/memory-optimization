import * as fs from 'fs';
import * as os from 'os';

function mem() {
  console.log(process.memoryUsage().heapUsed);
}

mem(); // 4442880
const file = fs.readFileSync('largefile.txt', 'utf8');
mem(); // 16945472
const data = file.split(os.EOL);
mem(); // 16947168

for (const chunk of data) {
  mem(); // 16949048
  break;
}
