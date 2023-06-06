const form = document.querySelector('.form');
const input = document.querySelector('.input_search');

const buttonNext = document.querySelector('.btn-next');
const buttonPrev = document.querySelector('.btn-prev');
const p1 = document.getElementById("digimon_name");
const p2 = document.getElementById("digimon_level");
const p3 = document.getElementById("digimon_image");

const request = "https://digimon-api.vercel.app/api/digimon";

let i = 0;
render();

function render(){
    fetch(request).then((response) =>{
        return response.json();
    }).then((data)=>{
          
        p1.innerHTML = [data[i].name];
        p2.innerHTML = [data[i].level];
        p3.src = [data[i].img];  
    })
}

buttonPrev.addEventListener('click', () => {
    if (i > 0) {
       i -= 1;
      render();
    }
  });

buttonNext.addEventListener('click', () => {
    i += 1;
    render();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPorName(input.value.toLowerCase());
});


function renderPorName (digimon) {
    fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`).then((response) =>{
        return response.json();
    }).then((data)=>{        
        p1.innerHTML = [data[0].name];
        p2.innerHTML = [data[0].level];
        p3.src = [data[0].img];  
    })
}