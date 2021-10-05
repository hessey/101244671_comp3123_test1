// Jesse Hughes 101244671
const fs = require("fs");

const creatingLogs = () => {
  const target = "./logs";
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
  }
  process.chdir(target);
  for (let i = 0; i < 10; i++) {
    fs.writeFile(`log${i}.txt`, `File ${i}`, (err) =>
      err ? console.error(Error `log${i}.txt`) : console.log(`Creating file log${i}.txt`)
    );
  }
};

const removingLogs = () => {
  const target = "./logs";
  if (fs.existsSync(target)) {
    process.chdir(target);
    fs.readdir(process.cwd(), (err, files) => {
      files.forEach((file) => {
        fs.unlink(file, (err) =>
          err ? console.error(Error `deleting file ${file}`) : console.log(`Deleting file ${file}`)
        );
      });
    });
  }
};

creatingLogs();
// removingLogs(); 
// Use one at 