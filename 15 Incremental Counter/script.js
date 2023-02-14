const counters = document.querySelectorAll('.counter');

counters.forEach(counterElement => {
    counterElement.innerText = "0";

    const updateCounter = () => {
        //Utizar o + transforma o texto em um número
        const target = +counterElement.getAttribute('data-target');
        const counter = +counterElement.innerText;

        const increment = target / 200;

        if(counter < target) {
            counterElement.innerText = `${Math.ceil(counter + increment)}`;
            setTimeout(updateCounter, 1);
        } else {
            counterElement.innerText = target;
        }
    }

    updateCounter();
})