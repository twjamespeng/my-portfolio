import fs from "fs";
import path from "path";

const outDir = "./out";

// 在 <head> 裡插入 <base>
function injectBase(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  // 如果已經有 <base>，就不重複加
  if (!content.includes("<base href=")) {
    content = content.replace(
      "<head>",
      `<head>\n  <base href="/my-portfolio/">`
    );
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`✅ fixed: ${filePath}`);
  }
}

// 遞迴掃描 out/ 底下所有 html
function walkDir(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (file.endsWith(".html")) {
      injectBase(fullPath);
    }
  });
}

walkDir(outDir);
