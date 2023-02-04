// Uses Navigator.clipboard
const pasteButton = document.querySelector("#paste-button");
const pastedTexts = document.querySelector("#pasted-texts");

pasteButton.addEventListener("click", async () => {
  try {
    const text = await navigator.clipboard.readText();
    const li = document.createElement("li");
    li.textContent = text;
    pastedTexts.appendChild(li);
    console.log("Text pasted from clipboard: ", text);
  } catch (err) {
    console.error("Failed to paste text: ", err);
  }
});