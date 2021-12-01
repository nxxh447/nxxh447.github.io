const js = el => {
  for (const node of el.children) {
    const s = node.innerText
      .replace(/(\/\/.*)/g, "<em>$1</em>")
      .replace(
        /\b(new|if|else|do|while|switch|for|in|of|continue|break|return|typeof|function|var|const|let|\.length|\.\w+)(?=[^\w])/g,
        "<strong>$1</strong>'"
      )
      .replace(/(".*?"|'.*?'|`.*?`)/g, "<strong><em>$1</em></strong>")
      .replace(/\b(\d+)/g, "<em><strong>$1</strong></em>");
    node.innerHTML = s.split("\n").join("<br/>");
  }
};

const caret = el => {
  const range = window.getSelection().getRangeAt(0);
  const prefix = range.cloneRange();
  
  prefix.selectNodeContents(el);
  prefix.setEnd(range.endContainer, range.endOffset);
  
  return prefix.toString().length;
};

const setCaret = (pos, parent) => {
  for (const node of parent.childNodes) {
    if (node.nodeType == Node.TEXT_NODE) {
      if (node.length >= pos) {
        const range = document.createRange();
        const sel = window.getSelection();
        
        range.setStart(node, pos);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
        
        return -1;
      } else { pos = pos - node.length; }
    } else {
      pos = setCaret(pos, node);
      if (pos < 0) return pos;
    }
  }; return pos;
};

el.addEventListener("keyup", e => {
  if (e.keyCode >= 0x30 || e.keyCode == 0x20) {
    const pos = caret();
    
    highlight(el);
    setCaret(pos);
  }
});

/*
fnAstyle = function attribute style
decStyle = declatarive element style
cmtStyle = comment style
*/

document.getElementsByTagName("span").setAttributeNode(document.createAttribute("class").value = "fnAttr"); // tmp


document.getElementsByTagName("fn-attr-elm").setAttributeNode(document.createAttribute("class").value = "fnAstyle");
document.getElementsByTagName("dec-elm").setAttributeNode(document.createAttribute("class").value = "decStyle");
document.getElementsByTagName("cmt-elm").setAttributeNode(document.createAttribute("class".value = "cmtStyle"))
