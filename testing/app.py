import json
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

@app.route('/api/v1/upload', methods=['POST'])
def handle_upload():
    json_data = request.get_json()

    with open('data.json', 'w', encoding="utf-8") as file:
        json.dump(json_data, file)

    return jsonify({"data": "Data saved"})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
