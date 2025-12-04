import requests
from .config import Config

class GatewayClient:
    """
    Standardized client for communicating with the NovaEco API Gateway.
    """
    
    @staticmethod
    def get_health():
        """Checks if the Gateway is online."""
        try:
            # Short timeout to prevent UI hanging
            response = requests.get(f"{Config.API_URL}/health", timeout=2)
            if response.status_code == 200:
                return {"status": "online", "color": "green", "details": response.json()}
        except requests.RequestException:
            pass
        
        return {"status": "offline", "color": "red", "details": "Gateway Unreachable"}

    @staticmethod
    def get_active_sectors():
        """
        Returns the list of active sectors for the Launchpad.
        """
        # In a real scenario, this might come from the API/Service Registry.
        # For the prototype, we define the strategic pillars.
        return [
            {"name": "NovaAgro", "url": "http://agriculture.novaeco.tech", "icon": "🌾", "desc": "Regenerative Agriculture"},
            {"name": "NovaMind", "url": "http://mind.novaeco.tech", "icon": "🧠", "desc": "Artificial Intelligence"},
            {"name": "NovaTrade", "url": "http://trade.novaeco.tech", "icon": "📈", "desc": "Circular Marketplace"},
            {"name": "NovaBuild", "url": "http://build.novaeco.tech", "icon": "🏗️", "desc": "Construction & Materials"},
            {"name": "NovaWater", "url": "http://water.novaeco.tech", "icon": "💧", "desc": "Water Management"},
        ]