const bigCup = document.getElementById('cup-big');
const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

//vamos iniciar os campos de liters e percentage
updateBigCup();

smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => highlighCups(index))
})

function highlighCups(index) {
    smallCups[index].classList.toggle('full');

updateBigCup();
}

// function highlighCups(index) {
//     //vamos verificar se o copo atual está cheio e se o copo seguinte está cheio
//     //se estiver, vamos reduzir o click por um copo
//     if(smallCups[index].classList.contains('full') && 
//     !smallCups[index].nextElementSibling.classList.contains('full') ) {
//         index--;
//     }

//     //de acordo com a quantia de copos que devem estar cheios, ajusta as classes
//     smallCups.forEach((cup, innerIndex) => {
//         if(innerIndex <= index) {
//             cup.classList.add('full');
//         } else {
//             cup.classList.remove('full');
//         }
//     });

//     updateBigCup();
// }

function updateBigCup () {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
        percentage.innerText = ""; //remove o texto pois a transição demora 0.3s
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups / totalCups * 330}px`;
        percentage.innerText = `${fullCups / totalCups * 100}%`;
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    }
    else
    {
        remained.style.visibility = 'visible';
        //ajusta novamente a altura do que restou
        remained.style.height = `${(1-(fullCups / totalCups)) * 330}px`;
        liters.innerText = `${2-(250 * fullCups / 1000)}L`;
    }
}