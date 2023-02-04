// Uses Navigator.clipboard
const copyButton = document.querySelector("#copy-button");
const textToCopy = document.querySelector("#text-to-copy");

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(textToCopy.textContent);
    console.log("Text copied to clipboard");
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
});
