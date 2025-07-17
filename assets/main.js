(() => {
    'use strict'

    const elementsArray = document.querySelectorAll(".tile");
    const fadeIn = () => {
        for (let i = 0; i < elementsArray.length; i++) {
            let elem = elementsArray[i];
            let distInView = elem.getBoundingClientRect().top - 100;

            if (distInView < 0) elem.classList.add("inView");
            else elem.classList.remove("inView");
        }
    }

    document.getElementsByTagName('section')[0].addEventListener('scroll', fadeIn);

    fadeIn();
})();