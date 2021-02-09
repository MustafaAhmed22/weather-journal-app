/* Global Variables */


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

let URL ='http://api.openweathermap.org/data/2.5/forecast?id=524901&appid='
const KEY ='c5eb172d4c9aabe88bf6a2fa5dc7a42d'
let zip = document.getElementById('zip').value
const feelings = document.getElementById('feelings').value

document.getElementById('generate').addEventListener('click',(e)=>{
    getweatherData(URL,zip ,KEY).then((data)=>{
        console.log(data)
    })
})

const getweatherData =async function(URL,zip ,KEY){
    const res = await fetch(URL+zip+KEY)
    try{
        const data = await res.json()
        return data
        

    }catch(error){
        console.log(error)
    }
}
