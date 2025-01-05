'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const mainBox = document.querySelector('.main-box')

    const updatePseudoHeight = () => {
        const mainBoxHeight = mainBox.offsetHeight;
        mainBox.style.setProperty('--pseudo-height', `${mainBoxHeight}px`);
    };

    updatePseudoHeight();

    const resizeObserver = new ResizeObserver(() => {
        updatePseudoHeight();
    });

    resizeObserver.observe(mainBox);

    const pageHeader = document.querySelector('.page-header')
    const headerImage = document.querySelector('.event-logo')
    headerImage.remove()

    pageHeader.addEventListener("click", function () {
        window.location.href = '/';
    });

    const pillarTop = document.createElement('div')
    pillarTop.classList.add('pillar-top')
    pageHeader.before(pillarTop)

    const pillarBottom = document.createElement('div')
    pillarBottom.classList.add('pillar-bottom')
    mainBox.appendChild(pillarBottom)

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