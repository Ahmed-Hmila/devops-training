
#!/bin/sh

# Replace {{API_URL}} with the environment variable value
echo "Replacing {{API_URL}} in /usr/share/nginx/html/assets/config/config.json..."
sed -i "s|{{API_URL}}|$API_URL|g" /usr/share/nginx/html/assets/config/config.json

# Start Nginx
exec "$@"
