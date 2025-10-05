# GNews Proxy API

A lightweight Flask backend that proxies requests to the GNews API. Designed for frontend integration and future GPT expansion.

## Endpoints

- `/` — Health check and endpoint overview
- `/gnews?topic=ai&country=us&lang=en` — Fetches news articles from GNews

## Setup

1. Add your GNews API key as an environment variable:
   ```
   export GNEWS_API_KEY=your_gnews_api_key
   ```

2. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

3. Run locally:
   ```
   python main.py
   ```

## Deployment

Ready for Railway, Render, or Fly.io. Uses Gunicorn for production serving.

## If Railway says “No repositories found,” tap:

- “Configure GitHub Access”
- Select your repo (gnews-proxy-api)

## Troubleshooting GitHub Permissions

If Railway says:  
“I’m connected to your GitHub account, but I don’t have permission to see any of your repositories yet.”

This is common when:
- You chose “Only select repositories” during GitHub authorization
- You didn’t select any repos (or missed gnews-proxy-api)
- Your repo is private and not shared with Railway

**Solution:**  
Re-authorize Railway on GitHub and select the correct repository.

## License

MIT