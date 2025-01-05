'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const pageHeader = document.querySelector('.page-header')

    const headerImage = document.querySelector('.event-logo')

    headerImage.remove()
    // headerImage.src = '/static/pretix_abimania_theme/images/header_background.jpg';



    const headlinesContainer = document.createElement('div');
    headlinesContainer.classList.add('headlines')

    const abiName = document.createElement('h1')
    abiName.innerText = 'Abikropolis';

    const abimotto = document.createElement('h4')
    abimotto.innerText = 'Die Götter verlassen den Olymp';

    headlinesContainer.appendChild(abiName)
    headlinesContainer.appendChild(abimotto)
    pageHeader.appendChild(headlinesContainer)
})