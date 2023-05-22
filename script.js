// Main Function
async function output() {
    let res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    let res1 = await res.json();
    // console.log(res1);
    // Getting all values
    for (let i = 0; i < res1.game_indices.length; i++) {
        // Creating div
        let divCol = document.createElement('div');
        divCol.classList.add('col');
        // using bootstrap card
        let divCard = document.createElement('div');
        divCard.classList.add('card');
        // card body
        let divCardBody = document.createElement('div');
        divCardBody.classList.add('card-body');
        // card title
        let divTitle = document.createElement('h4');
        divTitle.classList.add('card-title');
        divTitle.innerHTML = `Name : ${res1.game_indices[i].version.name}`;
        // card text
        let divText = document.createElement('a');
        divText.classList.add('card-text');
        let url = res1.game_indices[i].version.url;
        divText.setAttribute('href', url);
        divText.setAttribute('target', '_blank');
        divText.innerHTML = `URL : ${res1.game_indices[i].version.url}`;

        let row = document.getElementById('row');
        // append the data
        divCardBody.append(divTitle, divText);
        divCard.append(divCardBody)
        divCol.append(divCard);
        row.append(divCol);
    }
}
output();