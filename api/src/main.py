from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/health')
def health():
    return jsonify({"status": "ok", "service": "api"})

@app.route('/')
def root():
    return jsonify({"message": "Welcome to the NovaEco API Gateway"})

if __name__ == '__main__':
    # Host 0.0.0.0 is CRITICAL for docker accessibility
    app.run(host='0.0.0.0', port=8000)