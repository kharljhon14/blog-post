const fs = require("fs");

const folder = process.argv[2] || "Kharl"
const fileName = ["index.html", "style.css", "index.js"];

try {
   fs.mkdirSync(folder);

   for (let key of fileName) {
      fs.writeFileSync(`kharl/${key}`, " ");
   }
} catch (err) {
   console.log(err);
}
