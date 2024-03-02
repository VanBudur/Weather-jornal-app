
const feeling= document.getElementById('feelings');
const zip    = document.getElementById('zip');
const apiKey = `bf3ae1b7904330571e95627b03169022`;

let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();
/* End global variables */

document.getElementById('generate').addEventListener('click', async () => {
  
/* ناخذ الداتا من api */
    const url=`https://api.openweathermap.org/data/2.5/weather?zip=${zip.value}&appid=${apiKey}&units=metric`; // full url
    const resData = await fetch(url).then(back => back.json());

/* [post] */
    await fetch('/add',{ 
        method:'POST',
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify( {temp:resData.main.temp, date:newDate, feeling: feeling.value}) // put this data to the body;
    });

/* tget */
    const allData =await fetch('/all').then(back => back.json());
        document.getElementById('temp').innerHTML = `Temp: ${allData.temp}`;   
        document.getElementById('date').innerHTML = `Date: ${allData.date}`;  
        document.getElementById('content').innerHTML = `Feeling: ${allData.feeling}`;

});
