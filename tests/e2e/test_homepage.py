from playwright.sync_api import Page, expect
import os

APP_URL = os.environ.get("APP_URL", "http://localhost:5000")

def test_homepage_loads(page: Page):
    page.goto(APP_URL)
    
    # Check Title
    expect(page).to_have_title("NovaEco Mission Control")
    
    # Check Header
    expect(page.locator("h1")).to_contain_text("Mission Control")

def test_launchpad_links(page: Page):
    page.goto(APP_URL)
    
    # Check for NovaAgro link
    agro_link = page.get_by_role("link", name="NovaAgro")
    expect(agro_link).to_be_visible()
    expect(agro_link).to_have_attribute("href", "[http://agriculture.novaeco.tech](http://agriculture.novaeco.tech)")