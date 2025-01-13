function getElementWidth(content, padding, border) {
  // assumes that we have border-box sizing enabled
  return (
    Number.parseFloat(content) +
    Number.parseFloat(padding) * 2 +
    Number.parseFloat(border) * 2
  );
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
console.log("----------------"); // to have nice padding between tasks output in console
