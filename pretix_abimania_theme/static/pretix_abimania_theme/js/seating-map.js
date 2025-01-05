'use strict';

document.addEventListener("DOMContentLoaded", function () {
    const infoRows = document.querySelectorAll('.info-row');
    const infoContainer = document.getElementById('event-infos');
    const leftSection = infoContainer.querySelector('.left');

    for (const infoRow of infoRows) {
        leftSection.append(infoRow.cloneNode(true));
        infoRow.remove();
    }

    const seatingMap = document.getElementById("seating-map");
    const panzoomOptions = { click: false, minScale: 1.25, maxScale: 5 };

    new Panzoom(seatingMap, panzoomOptions);
});
