// variables
const URL = "https://mario-kart-tour-api.herokuapp.com/api/v1/drivers/name?q="
const drivers = '/drivers/high_end';
// element refrences (DOM elements)
const $form = $('form');
const $input = $('input[type="text"]');

// event listeners
$form.on('submit', handleGetData);


// functions

function handleGetData(evt) {
    evt.preventDefault();

    const userInput = $input.val()
    
    if(!userInput) return; // get outta here!
    
    $input.val('');

    $.ajax(URL + userInput).then(function(data) {
        render(data);
    }, function(error) {
        console.log('something went wrong')
        console.log(error);
    })
}

function render(marioInfo) {
    $('main').html(`
        <h3>Driver: ${marioInfo.name}</h3>
        <p>Rarity: ${marioInfo.rarity}</p>
        <p>Special Skill: ${marioInfo.special_skill}</p>
        
    
    `);
}


/*
fetch('https://mario-kart-tour-api.herokuapp.com/api/v1/drivers/name?q=mario', {
	method: "GET",
	headers: {"Content-type": "application/json;charset=UTF-8"}
})
 .then(response => response.json()) 
 .then(json => console.log(json));
 */