import json
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
CORS(app, origins=["http://127.0.0.1:5000"])

@app.route('/api/v1/upload', methods=['OPTIONS'])
def handle_options():
    response = jsonify({})
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Methods', 'GET, POST')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Max-Age', '3600')
    return response

@app.route('/api/v1/upload', methods=['POST'])
def handle_upload():
    json_data = request.get_json()

    with open('data.json', 'a', encoding="utf-8") as file:
        json.dump(json_data, file)

    return jsonify({"data": "Data saved"}), 200, {'Access-Control-Allow-Origin': '*'}

if __name__ == '__main__':
    app.run(debug=True, port=5000)
