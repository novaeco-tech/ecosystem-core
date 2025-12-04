from flask import Flask, render_template_string
from src import GatewayClient, Config

app = Flask(__name__)

@app.route('/')
def dashboard():
    # 1. Logic Layer
    system = GatewayClient.get_health()
    sectors = GatewayClient.get_active_sectors()

    # 2. Presentation Layer (Inline HTML for simplicity, can be moved to templates/)
    html = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>NovaEco Mission Control</title>
        <style>
            :root {{ --primary: #2e8555; --bg: #f4f7f6; --card-bg: #ffffff; --text: #333; }}
            body {{ font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: var(--bg); color: var(--text); padding: 2rem; margin: 0; }}
            
            .header {{ display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem; }}
            .status-badge {{ background: {system['color']}; color: white; padding: 4px 12px; border-radius: 12px; font-size: 0.85rem; font-weight: bold; text-transform: uppercase; }}
            
            .grid {{ display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.5rem; }}
            
            .card {{ background: var(--card-bg); border-radius: 12px; padding: 1.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.05); transition: transform 0.2s, box-shadow 0.2s; text-decoration: none; color: inherit; border: 1px solid transparent; }}
            .card:hover {{ transform: translateY(-3px); box-shadow: 0 8px 12px rgba(0,0,0,0.1); border-color: var(--primary); }}
            
            .card h3 {{ margin: 0 0 0.5rem 0; display: flex; align-items: center; gap: 0.5rem; }}
            .card p {{ margin: 0; color: #666; font-size: 0.9rem; }}
            
            .system-info {{ margin-top: 3rem; padding-top: 1rem; border-top: 1px solid #ddd; font-size: 0.8rem; color: #888; }}
        </style>
    </head>
    <body>
        <div class="header">
            <h1>🌍 Mission Control</h1>
            <span class="status-badge">{system['status']}</span>
        </div>

        <h2>🚀 Launchpad</h2>
        <div class="grid">
            {''.join([f'''
            <a href="{s["url"]}" class="card">
                <h3><span>{s["icon"]}</span> {s["name"]}</h3>
                <p>{s["desc"]}</p>
            </a>
            ''' for s in sectors])}
        </div>

        <div class="system-info">
            <p><strong>System Version:</strong> v2026.11.01</p>
            <p><strong>Gateway:</strong> {Config.API_URL}</p>
        </div>
    </body>
    </html>
    """
    return render_template_string(html)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)