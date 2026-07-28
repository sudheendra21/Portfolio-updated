#!/bin/bash
# Double-click this file to host your portfolio locally.
# It serves whatever folder it lives in at http://localhost:8000

cd "$(dirname "$0")" || exit 1
PORT=8000

echo "------------------------------------------------------------"
echo "  Serving your portfolio at: http://localhost:$PORT"
echo "  Press Control-C in this window to stop."
echo "------------------------------------------------------------"

# Open the browser shortly after the server starts
( sleep 1; open "http://localhost:$PORT" ) &

# Python 3 ships with macOS; this is the simplest static server
python3 -m http.server "$PORT"
