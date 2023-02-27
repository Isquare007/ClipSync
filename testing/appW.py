from datetime import datetime 
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
    data = request.get_json()

    with open('vue/clibsync/src/database.json', 'r', encoding="utf-8") as file:
        json_data = json.load(file)
        
    new_id = json_data[-1]['id'] + 1  # auto-increment id
    new_data = {
        'id': new_id,
        'data': data,
        'created_at': datetime.utcnow().isoformat(),
        'updated_at': datetime.utcnow().isoformat(),
        'type': 'text'
    }
    
    json_data.append(new_data)
    
    with open('vue/clibsync/src/database.json', 'w', encoding="utf-8") as file:
        json.dump(json_data, file)

    return jsonify(new_data), 200, {'Access-Control-Allow-Origin': '*'}

if __name__ == '__main__':
    app.run(debug=True, port=5000)

