const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup, idx)=>{
    cup.addEventListener('click', () => highlightCups(idx));
})

function highlightCups(idx){
    if(smallCups[idx].classList.contains('full') && (idx == smallCups.length-1 || !smallCups[idx].nextElementSibling.classList.contains('full'))){
        idx--;
    }
    smallCups.forEach((cup, idx2)=>{
        if(idx2 <= idx){
            cup.classList.add('full');
        }else{
            cup.classList.remove('full');
        }
    })

    updateBigCup();
}

function updateBigCup(){
    const countFull = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;

    if(countFull === 0){
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    }else{
        percentage.style.visibility = 'visible';
        percentage.style.height = `${countFull / totalCups * 330}px`;
        percentage.innerText = `${countFull / totalCups * 100}%`;
    }

    if(countFull === totalCups){
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    }else{
        remained.style.visibility = 'visible';
        liters.innerText = `${2-(countFull*0.25)}L`;
    }
}