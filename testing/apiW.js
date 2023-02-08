/*const clipboardData = navigator.clipboard.readText();
const jsonData = JSON.stringify(clipboardData);
fetch('http://127.0.0.1:5000/api/v1/upload', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: jsonData
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));*/

/*
async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}*/
async function sendClipboardData() {
    try {
        const response = await fetch('https://api.quotable.io/random', {
          method: 'GET'
        });
        const quote = await response.text();
        //const text = JSON.stringify(data);
        navigator.clipboard.writeText(quote)
        fetch('http://127.0.0.1:5000/api/v1/upload', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: quote
            })
        })
    } catch (error) {
        console.error(error);
    }
}

document.getElementById('send-button').addEventListener('click', sendClipboardData);
