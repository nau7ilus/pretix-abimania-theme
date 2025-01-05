'use strict';

document.addEventListener("DOMContentLoaded", function () {
    const sourceContainer = document.querySelector('main > div');
    const infoContainer = document.getElementById('event-infos');
    const leftSection = infoContainer.querySelector('.left');

    leftSection.append(...sourceContainer.childNodes);
    sourceContainer.remove();

    const clonedSourceContainer = sourceContainer.cloneNode(true);
    infoContainer.appendChild(clonedSourceContainer);

    const seatingMap = document.getElementById("seating-map");
    const panzoomOptions = { click: false, minScale: 1.25, maxVelocity: 35, wheelLimit: 3 };

    new Panzoom(seatingMap, panzoomOptions);
});
