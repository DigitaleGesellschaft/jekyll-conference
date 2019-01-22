(function() {
    var map = L.map('map').setView([47.37808, 8.53935], 17);

    L.tileLayer.provider('Hydda.Full').addTo(map);
})();
