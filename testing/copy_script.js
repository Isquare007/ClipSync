function copy() {
    let copyText = document.querySelector("#tocopy").textContent;
    let dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = copyText;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  }
  
  document.querySelector("#copy").addEventListener("click", copy);
  