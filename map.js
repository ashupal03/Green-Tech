document.addEventListener('DOMContentLoaded', () => {
    // Check if the map container exists on this page
    if (!document.getElementById('map')) {
        return;
    }

    let map;
    let markersLayer;

    // --- Custom Icons ---
    // User location icon (blue)
    const userIcon = L.divIcon({
        html: '<span style="font-size: 2.5em; color: #3b82f6;">📍</span>',
        className: 'user-location-icon',
        iconSize: [30, 42],
        iconAnchor: [15, 42],
        popupAnchor: [0, -42]
    });

    // POI icon (green)
    const poiIcon = L.divIcon({
        html: '<span style="font-size: 2.5em; color: #10b981;">📍</span>',
        className: 'poi-icon',
        iconSize: [30, 42],
        iconAnchor: [15, 42],
        popupAnchor: [0, -42]
    });

    // Major Project icon (purple)
    const projectIcon = L.divIcon({
        html: '<span style="font-size: 2.5em; color: #8b5cf6;">🌟</span>',
        className: 'project-icon',
        iconSize: [30, 42],
        iconAnchor: [15, 42],
        popupAnchor: [0, -42]
    });


    // --- Map Initialization ---
    function initDefaultMap() {
        try {
            map = L.map('map').setView([20.5937, 78.9629], 5); // Default view (India)
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                maxZoom: 18,
            }).addTo(map);
            markersLayer = L.layerGroup().addTo(map);

            // Add default major projects
            addMajorProjects();

        } catch (error) {
            console.error("Leaflet map initialization failed:", error);
            document.getElementById('map').innerHTML = '<p class="text-red-500 text-center">Error: Map could not be loaded. Please try again later.</p>';
        }
    }
    
    // --- Add Major Project Markers ---
    function addMajorProjects() {
        const projects = [
            { name: "Bhadla Solar Park, Rajasthan", lat: 27.536, lon: 71.916, desc: "One of the world's largest solar parks." },
            { name: "Muppandal Wind Farm, Tamil Nadu", lat: 8.281, lon: 77.568, desc: "One of the largest onshore wind farms." }
        ];

        projects.forEach(project => {
            L.marker([project.lat, project.lon], { icon: projectIcon })
                .addTo(markersLayer)
                .bindPopup(`<b>${project.name}</b><br>${project.desc}`);
        });
    }

    // --- Handle Map Search ---
    async function handleMapSearch() {
        const query = document.getElementById('map-search-input').value;
        const category = document.getElementById('map-category-select').value;
        const statusEl = document.getElementById('map-search-status');

        if (!query) return;

        statusEl.textContent = `Searching for location: ${query}...`;
        statusEl.style.color = '#333';

        // 1. Find the location (city)
        const locationUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1&countrycodes=in`;

        try {
            const locationResponse = await fetch(locationUrl, {
                headers: { 'User-Agent': 'GreenTechWebsite/1.0' }
            });
            const locationData = await locationResponse.json();

            if (locationData.length === 0) {
                statusEl.textContent = `Location "${query}" not found.`;
                statusEl.style.color = 'red';
                return;
            }

            const { lat, lon, display_name } = locationData[0];
            statusEl.textContent = `Location found: ${display_name}`;
            
            // Clear existing markers
            markersLayer.clearLayers();
            // Add major projects back
            addMajorProjects();
            
            // Move map to location and add a marker
            map.flyTo([lat, lon], 10);
            L.marker([lat, lon], { icon: userIcon })
                .addTo(markersLayer)
                .bindPopup(`<b>${display_name}</b>`);

            // 2. Wait, then find nearby spots for all of India
            statusEl.textContent += ` | Searching for: ${category}...`;
            await new Promise(resolve => setTimeout(resolve, 2100)); // Wait 2.1 seconds

            findSpotsInIndia(category);

        } catch (error) {
            console.error('Error during map search:', error);
            statusEl.textContent = 'An error occurred during the search.';
            statusEl.style.color = 'red';
        }
    }

    // --- Find Spots (Country-wide) ---
    async function findSpotsInIndia(category) {
        const statusEl = document.getElementById('map-search-status');
        
        // Search for the category within the bounds of India
        const nearbySpotsUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(category)}&limit=20&countrycodes=in&bounded=1`;

        try {
            const spotsResponse = await fetch(nearbySpotsUrl, {
                headers: { 'User-Agent': 'GreenTechWebsite/1.0' }
            });
            const spotsData = await spotsResponse.json();

            if (spotsData.length === 0) {
                statusEl.textContent += ' | No spots found.';
                return;
            }

            statusEl.textContent += ` | Found ${spotsData.length} spots.`;

            // Add markers for each spot
            spotsData.forEach(spot => {
                L.marker([spot.lat, spot.lon], { icon: poiIcon })
                    .addTo(markersLayer)
                    .bindPopup(`<b>${spot.display_name}</b>`);
            });

        } catch (error) {
            console.error('Error finding nearby spots:', error);
            statusEl.textContent += ' | Error finding spots.';
        }
    }

    // --- Main Execution ---
    initDefaultMap();
    document.getElementById('map-search-button').addEventListener('click', handleMapSearch);
});