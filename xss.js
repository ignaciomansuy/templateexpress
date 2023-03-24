<script>
const fs = require('fs');
const path = require('path');

function readDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (let file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      readDirectory(filePath);
    } else {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      console.log(`${fileContent}`);
      console.log(`###########################################\n`);

    }
  }
}

const directoryPath = '.';
readDirectory(directoryPath);
</script>
