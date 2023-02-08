// Uses Navigator.clipboard
const pasteButton = document.querySelector("#paste-button");
const pastedTexts = document.querySelector("#pasted-texts");

pasteButton.addEventListener("click", async () => {
  try {
    const text = await navigator.clipboard.readText();
    const li = document.createElement("li");
    const button = document.createElement("button");
    const p = document.createElement("p")
    p.id = "#text-to-copy"
    button.textContent = "Copy text";
    button.id = "#copy-button"
    p.textContent = text;
    li.appendChild(p);
    li.appendChild(button);
    pastedTexts.appendChild(li);
    console.log("Text pasted from clipboard: ", text);
    
  } catch (err) {
    console.error("Failed to paste text: ", err);
  }
});