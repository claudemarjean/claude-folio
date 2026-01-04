#!/bin/bash

echo "========================================"
echo "  Portfolio Vanilla JS - Serveur Local"
echo "========================================"
echo ""
echo "Démarrage du serveur HTTP..."
echo ""

# Vérifier si Python est installé
if ! command -v python3 &> /dev/null
then
    echo "Python 3 n'est pas installé."
    echo "Veuillez installer Python 3 ou ouvrir index.html directement."
    exit 1
fi

echo "Serveur démarré sur http://localhost:8000"
echo ""
echo "Appuyez sur Ctrl+C pour arrêter le serveur"
echo ""

# Démarrer le serveur
python3 -m http.server 8000
