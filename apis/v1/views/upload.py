#!/usr/bin/python3
"""upload api
"""
from flask import jsonify, request
from api.v1.views import app_views
import json

@app_views.route('/upload', methods=['POST'], strict_slashes=False)
def upload():
    """A post request to upload data to database"""
    json_data = request.get_json()

    with open('data.json', 'w') as file:
        json.dump(json_data, file)

    return jsonify({'message': 'JSON data saved to file'})