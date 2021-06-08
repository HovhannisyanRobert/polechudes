const answer = ['H', 'E', 'R', 'A', 'X', 'O', 'S'];

const main_cont = document.getElementById("main_cont");
for (let i = 0; i < answer.length; i++) {
    const main_cont_div = document.createElement('div');
    main_cont.appendChild(main_cont_div)
    main_cont_div.setAttribute('class', 'faf')

    const answer_let = document.createElement('div')
    answer_let.setAttribute('class', 'letters_div')
    main_cont_div.appendChild(answer_let)

    const h2_letters = document.createElement("h2")
    answer_let.appendChild(h2_letters)
    h2_letters.textContent = answer[i]

    
}

const letters = ['A', 'B', 'C', 'D', 'E', "F", 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V','W', 'X', 'Z'];

const letters_cont = document.getElementById("letters_cont");

for (let j = 0; j < letters.length; j++) {
    const button = document.createElement('button')
    button.setAttribute('value', letters[j])
    button.setAttribute('class', letters[j])
    button.textContent = letters[j]
    letters_cont.appendChild(button)
}


let H = document.getElementById('H').value;
console.log(H);

