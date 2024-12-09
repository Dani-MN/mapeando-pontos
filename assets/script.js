const map = L.map('map').setView([-3.1, -60.02], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

async function getCoordinates(address) {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
    const data = await response.json();
    if (data.length > 0) {
        return {
            lat: data[0].lat,
            lon: data[0].lon
        };
    } else {
        throw new Error('Endereço não encontrado.');
    }
}

function addMarker(lat, lon, address) {
    const marker = L.marker([lat, lon]).addTo(map);
    marker.bindPopup(`<b>${address}</b><br><button class="remove-btn" onclick="removeMarker(${lat}, ${lon})">Remover</button>`);
}

function removeMarker(lat, lon) {
    map.eachLayer(function (layer) {
        if (layer instanceof L.Marker) {
            const markerLatLng = layer.getLatLng();
            if (markerLatLng.lat === lat && markerLatLng.lng === lon) {
                map.removeLayer(layer);
            }
        }
    });
}

document.getElementById('addressForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const address = document.getElementById('addressInput').value;
    try {
        const { lat, lon } = await getCoordinates(address);
        addMarker(lat, lon, address);
    } catch (error) {
        alert(error.message);
    }
});
