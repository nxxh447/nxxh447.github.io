CodeMirror(document.querySelector("#editorContainer"), {
  lineNumbers: true,
  tabSize: 2,
  value: '// editor version (beta) :) \nconsole.log("Hello, World");',
  mode: "javascript",
  theme: "monokai"
});
