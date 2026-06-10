const fs = require("fs");
const path = require("path");

const projectRoot = path.join(__dirname, "..");
const root = process.argv[2] ? path.resolve(projectRoot, process.argv[2]) : projectRoot;
const htmlFiles = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (
      entry.name === ".git" ||
      entry.name === "node_modules" ||
      (root === projectRoot && entry.name === "dist")
    ) {
      continue;
    }

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }

    if (entry.name.endsWith(".html")) htmlFiles.push(fullPath);
  }
}

function internalTargetExists(url) {
  const cleanUrl = url.split("#")[0].split("?")[0];
  if (
    !cleanUrl ||
    cleanUrl.startsWith("http://") ||
    cleanUrl.startsWith("https://") ||
    cleanUrl.startsWith("mailto:") ||
    cleanUrl.startsWith("tel:")
  ) {
    return true;
  }

  const relativePath = cleanUrl.startsWith("/") ? cleanUrl.slice(1) : cleanUrl;
  const targetPath = path.join(root, relativePath);

  return (
    (fs.existsSync(targetPath) && fs.statSync(targetPath).isFile()) ||
    fs.existsSync(path.join(targetPath, "index.html")) ||
    fs.existsSync(`${targetPath}.html`)
  );
}

walk(root);

const missingTargets = [];
const linkPattern = /\b(?:href|src)="([^"]+)"/g;

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  for (const [, url] of html.matchAll(linkPattern)) {
    if (!internalTargetExists(url)) {
      missingTargets.push(`${path.relative(root, file)} -> ${url}`);
    }
  }
}

if (missingTargets.length > 0) {
  console.error("Missing internal href/src targets:");
  console.error(missingTargets.join("\n"));
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML files. All internal href/src targets exist.`);
