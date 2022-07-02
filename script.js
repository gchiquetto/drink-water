const cups = document.querySelectorAll('.small-cup_container');
const qtdRemained = document.getElementById('qtd_remained');
const bigCup = document.querySelector('.big-cup_container');
const percentage = document.querySelector('.percentage');

// const cupFilled = document.createElement('div');
// cupFilled.classList.add('filled');
// bigCup.appendChild(cupFilled);
document.documentElement.style.setProperty("--filled-row",  '9');

cups.forEach((cup, index) => {
    let selectedCups;
  
    cup.addEventListener('click', e => {
       cups.forEach(c => c.classList.remove('cup--active'));

        selectedCups = [...cups].filter((cup, i) => i <= index);
        selectedCups.forEach(item => item.classList.add('cup--active'));
        updateQtd(selectedCups, index);

    });

});

function updateQtd(cups, index){
    console.log(index);
    const qtdCups = cups.length;
    const remainedLiters =  2 - qtdCups*0.250;
    const percent = (index + 1)*12.5;
    console.log(`${percent}%`);
    index > 6 ?  document.documentElement.style.setProperty("--remained-display",  `none`) : document.documentElement.style.setProperty("--remained-display",  `inline-block`);    
    //index > 3 ? document.documentElement.style.setProperty("--color",  '#F8FDFF') : document.documentElement.style.setProperty("--color",  '#03256C');
    document.documentElement.style.setProperty("--filled-row",  `${8 - index}`);
    document.documentElement.style.setProperty("--remained-row",  `${7 - index}`);       
    percentage.textContent = `${percent}%`;
    qtdRemained.textContent = `${remainedLiters}L`;


}