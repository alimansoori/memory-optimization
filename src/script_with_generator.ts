import * as fs from 'fs';
import split2 from 'split2';

function mem() {
  console.log(process.memoryUsage().heapUsed);
}

mem(); // 4487208
const file = fs.createReadStream('largefile.txt', 'utf8');
mem(); // 4855152
const data = file.pipe(split2());
mem(); // 4864968

(async () => {
  for await (const chunk of data) {
    mem(); // 5514488
    break;
  }
})();
