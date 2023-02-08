#!/usr/bin/python3
""" Flask Application """
from api.v1.views import app_views
from flask import Flask, render_template, make_response, jsonify

app = Flask(__name__)
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True
app.register_blueprint(app_views)

@app.errorhandler(404)
def not_found(error):
    """ 404 Error
    ---
    responses:
      404:
        description: a resource was not found
    """
    return make_response(jsonify({'error': "Not found"}), 404)

if __name__ == "__main__":
    """main function"""
    app.run(debug=True, threaded=True)