import fs from "fs";
import path from "path";

const outDir = "./out";

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  // 1. 確保有 basePath
  content = content.replace(/(src|href)="\/(?!my-portfolio)/g, '$1="/my-portfolio/');

  // 2. 確保有 /html 前綴
  //    只針對 images/ 或 act/ 這類資源
  content = content.replace(
    /"(?:\/my-portfolio\/)?(images\/act\/)/g,
    '"/my-portfolio/html/$1'
  );

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`✅ fixed: ${filePath}`);
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (file.endsWith(".html")) {
      fixFile(fullPath);
    }
  });
}

walkDir(outDir);
