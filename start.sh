#!/bin/bash

# AINI Field Agent — Start Script

if [ ! -f ".env" ]; then
  echo ""
  echo "⚠️  No .env file found. Creating one from template..."
  cp .env.example .env
  echo ""
  echo "👉  Open .env and paste your Anthropic API key, then run this script again."
  echo ""
  exit 1
fi

if grep -q "your-key-here" .env; then
  echo ""
  echo "⚠️  You haven't set your API key yet."
  echo "    Open .env and replace 'your-key-here' with your sk-ant-... key."
  echo ""
  exit 1
fi

echo ""
echo "🌿  Starting AINI Field Agent..."
echo ""
node server.js
