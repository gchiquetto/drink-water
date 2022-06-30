const cups = document.querySelectorAll('.small-cup_container');
const qtdRemained = document.getElementById('qtd_remained');
const bigCup = document.querySelector('big-cup_container');

cups.forEach((cup, index) => {
    let selectedCups;
  
    cup.addEventListener('click', e => {
       cups.forEach(c => c.classList.remove('cup--active'));

        selectedCups = [...cups].filter((cup, i) => i <= index);
        selectedCups.forEach(item => item.classList.add('cup--active'));
        updateQtd(selectedCups);

    });

});

function updateQtd(cups){
    const qtdCups = cups.length;
    const remainedLiters =  2 - qtdCups*0.250;
    qtdRemained.textContent = `${remainedLiters}L`;
    console.log(remainedLiters);

}