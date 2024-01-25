const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const date = new Date();
const actualDay = date.getDate();
const actualMonth = date.getMonth() + 1; // Le sumo uno ya que el metodo getMonth() retorna un valor desde 0 hasta 11.
const actualYear = date.getFullYear();

function ageCalculator(){
    let personDay = day.value;
    let personMonth = month.value;
    let personYear = year.value;
    timeChecker(personDay, personMonth, personYear)
    let personBirth = `${personDay}-${personMonth}-${personYear}`
    console.log(personBirth)
}

function timeChecker(dayTo, monthTo, yearTo){
    const dayFebruary = 29;
    if(dayTo > dayFebruary){
        console.log("No puedes poner valores del futuro")
    }
}


