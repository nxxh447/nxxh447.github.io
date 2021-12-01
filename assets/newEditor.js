CodeMirror(document.querySelector("#editorContainer"), {
  lineNumbers: true,
  tabSize: 2,
  value: 'console.log("Hello, World");',
  mode: 'javascript',
  theme: 'monokai'
});
