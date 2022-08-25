const container = document.querySelector('.container');
container.style.margin = "5vh 10vw";

const title = document.querySelector('#title');
title.style.fontSize = "2.5rem";
title.style.textAlign = "center";

const subtitle = document.querySelector('#subtitle');
subtitle.style.margin = "0";
subtitle.style.fontSize = "1.5rem";
subtitle.style.textAlign = "center";

const author = document.querySelector('#author');
author.style.textDecoration = "underline"
author.style.fontSize = "1rem";
author.style.textAlign = "center";

const numberGenerator = document.querySelector('#number-generator');
numberGenerator.style.display = "grid";
numberGenerator.style.gridTemplateColumns = "repeat(auto-fill, minmax(100px, 1fr)";
numberGenerator.style.gridAutoRows = "4.5rem";
numberGenerator.style.gridGap = ".5rem";

const isPrime = (num) => {
    for (let i = 2; i < num; i++){
        if (num % i === 0) return false;
    }
    return num > 1;
};

const numbers = (nbr) => {
    let numberContainer;
    let number;
    for(let i = 0; i < nbr; i++){
        numberContainer = document.createElement('div');
        numberContainer.className = "number-div";
        numberContainer.style.padding = ".5rem 2rem";
        numberGenerator.appendChild(numberContainer);        
        number = document.createElement('p');
        number.className = "number";
        number.textContent = i;
        number.style.color = "#ffff";
        number.style.fontFamily = "sans-serif";
        number.fontWeight = "bolder"
        number.style.fontSize = "3rem"
        number.style.margin = "0px auto";    
        number.style.display = "flex";
        number.style.alignItems = "center";
        number.style.justifyContent = "center";
        //console.log(number.innerHTML);
        numberContainer.appendChild(number);
        //EVEN NUMBERS GREEN - ODD NUMBERS YELLOW - PRIME NUMBERS RED
        if (i == 0){
            numberContainer.style.backgroundColor = "#72b061";
        } else if (i >= 1){
            if(i % 2 == 0){
                numberContainer.style.backgroundColor = "#72b061";                                
            } else {
                numberContainer.style.backgroundColor = "#fce758";
            }
            if(isPrime(i)){
                numberContainer.style.backgroundColor = "#f54e42";
            }
        }
    }
}
//llamamos a la funcion que crea 101 numeros
numbers(102);

