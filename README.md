# Mapa Interativo de Manaus

Este projeto é uma aplicação web que permite ao usuário inserir endereços de locais em Manaus e visualizar os pontos correspondentes marcados em um mapa interativo. O sistema permite múltiplos pontos no mapa e exibe informações básicas sobre cada endereço.

## Funcionalidades Principais
- Interface para o usuário inserir um endereço manualmente.
- Botão para adicionar o endereço no mapa.
- Visualização do mapa de Manaus com a capacidade de exibir os pontos marcados.
- Possibilidade de adicionar vários endereços no mapa.
- Cada ponto exibe uma descrição ao ser clicado.

## Tecnologias Utilizadas
- **Frontend**: HTML, CSS, JavaScript
- **API de mapas**: Leaflet.js com OpenStreetMap
- **Geocoding**: API Nominatim do OpenStreetMap

## Estrutura do Projeto
- **index.html**: Contém a estrutura básica da página web, incluindo um formulário para entrada de endereços e um container para o mapa.
- **style.css**: Inclui estilos básicos para a página e o container do mapa.
- **script.js**: Implementa a lógica para inicializar o mapa, converter endereços em coordenadas usando a API Nominatim do OpenStreetMap, e adicionar/remover marcadores no mapa.