async function sendClipboardData() {
    try {
      const data = await navigator.clipboard.readText();
      const response = await fetch('http://127.0.0.1:5000/api/v1/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: data })
      });
      const json = await response.json();
    } catch (error) {
      // console.error(error);
    }
  }
  document.getElementById('send-button').addEventListener('click', sendClipboardData);
  // http://127.0.0.1:8000/api/save_data/
  // http://127.0.0.1:5000/api/v1/upload