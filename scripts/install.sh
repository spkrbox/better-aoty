#!/bin/bash

GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}Installing better-aoty extension...${NC}"

CONFIG_PATH=$(spicetify -c)

if [ $? -ne 0 ] || [ -z "$CONFIG_PATH" ]; then
    echo -e "${RED}Error: Could not find Spicetify config. Is Spicetify installed?${NC}"

    if [[ "$OSTYPE" == "darwin"* || "$OSTYPE" == "linux-gnu"* ]]; then
        EXTENSIONS_DIR="$HOME/.config/spicetify/Extensions"
    else
        EXTENSIONS_DIR="$APPDATA/spicetify/Extensions"
    fi

    echo -e "${BLUE}Using default path: $EXTENSIONS_DIR${NC}"
else
    CONFIG_DIR=$(dirname "$CONFIG_PATH")
    EXTENSIONS_DIR="$CONFIG_DIR/Extensions"
    echo -e "${BLUE}Found Spicetify config at: $CONFIG_PATH${NC}"
    echo -e "${BLUE}Using Extensions directory: $EXTENSIONS_DIR${NC}"
fi

mkdir -p "$EXTENSIONS_DIR"

echo -e "${BLUE}Downloading latest version...${NC}"
curl -s -L "https://raw.githubusercontent.com/spkrbox/better-aoty/refs/heads/master/dist/better-aoty.js" -o "$EXTENSIONS_DIR/better-aoty.js"

if [ $? -ne 0 ]; then
    echo -e "${RED}Error: Download failed${NC}"
    exit 1
fi

echo -e "${BLUE}Enabling extension...${NC}"
spicetify config extensions better-aoty.js

if [ $? -ne 0 ]; then
    echo -e "${RED}Error: Failed to enable extension${NC}"
    exit 1
fi

echo -e "${BLUE}Applying changes to Spotify...${NC}"
spicetify apply

if [ $? -ne 0 ]; then
    echo -e "${RED}Error: Failed to apply changes${NC}"
    exit 1
fi

echo -e "${GREEN}✓ better-aoty has been successfully installed!${NC}"
