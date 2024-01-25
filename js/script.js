const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const calculateBtn = document.getElementById('calculate');
const date = new Date();
const actualDay = date.getDate();
const actualMonth = date.getMonth() + 1; // Le sumo uno ya que el metodo getMonth() retorna un valor desde 0 hasta 11.
const actualYear = date.getFullYear();

// Adding an event listener to the button:

calculateBtn.addEventListener('click', ageCalculator);


function ageCalculator(){
    let personDay = day.value;
    let personMonth = month.value;
    let personYear = year.value;
    timeChecker(personDay, personMonth, personYear)
    // let personBirth = `${personDay}-${personMonth}-${personYear}`
    
}

function timeChecker(dayTo, monthTo, yearTo){
    const dayFebruary = 29;
    if(dayTo > dayFebruary){
        console.log("No puedes poner valores del futuro")
    }
    if(monthTo > 12){
        console.log("No hay más de 12 meses")
    }
    if(yearTo > actualYear){
        console.log("No puedes nacer en el futuro")
    }
}


