function main(strBuffer) {
  process.stdout.write(strBuffer);
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
let str_buffer = "<!Doctype html>\n";
str_buffer += "<html>\n";
str_buffer += "  <head>\n";
str_buffer += "    <title>Last Execution report</title>\n";
str_buffer += "  </head>\n";
str_buffer += "  <body>\n";
str_buffer += "    <h1>Execution reports by test scenario Id</h1>\n";
str_buffer += "    <ul>\n";

process.stdin.on("data", (input) => {
  const lines = input.split("\n");
  lines.forEach((line) => {
    if (line.trim() !== "")
      str_buffer += `      <li><a href="${line}/index.html">testScenarioId: ${line}</a></li>\n`;
  });
});

process.stdin.on("end", () => {
  str_buffer += "    </ul>\n";
  str_buffer += "  </body>\n";
  str_buffer += "</html>\n";
  main(str_buffer);
});
