from flask import Flask, render_template_string
import requests
import os

app = Flask(__name__)

API_URL = os.environ.get("API_URL", "http://localhost:8000")

@app.route('/')
def dashboard():
    # Example: The App calls the API to get status
    try:
        # This call happens inside the docker network
        response = requests.get(f"{API_URL}/health")
        api_status = response.json()
    except:
        api_status = {"status": "offline"}

    html = f"""
    <h1>NovaEco Mission Control</h1>
    <p>Status: Online</p>
    <p>API Connection: {api_status}</p>
    """
    return render_template_string(html)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)