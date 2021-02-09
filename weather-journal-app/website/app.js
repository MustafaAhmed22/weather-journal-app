/* Global Variables */


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

let URL ='http://api.openweathermap.org/data/2.5/forecast?id=524901&appid='
const KEY ='c5eb172d4c9aabe88bf6a2fa5dc7a42d'
const zip = document.getElementById('zip').value
const feelings = document.getElementById('feelings').value

document.getElementById('generate').addEventListener('click',(e)=>{
    getWeatherData(URL,zip ,KEY).then((data)=>{
        console.log(data)
    postData('/add',{date :newDate ,temprature :data.list[0].main.temp ,feeling:feelings})
    })
})

const getWeatherData =async function(URL,zip ,KEY){
    const res = await fetch(URL+zip+KEY)
    try{
        const data = await res.json()
        return data
        

    }catch(error){
        console.log(error)
    }
}
const postData =async (url='' ,data={})=>{
    console.log(data)
    const response =await fetch(url ,{
        method:'Post',
        credentials :'same-origin',
        headers :{
            'Content-Type' :'application/json'
        },
        body :JSON.stringify(data)
    })
    try{
        const newData = await response.json()
        console.log(newData)
        return newData
    }catch(error){
        console.log(error)
    }
}
const ubdate =async ()=>{
    const request =await fetch('/all')
    try{
        const alldata = request.json()
        document.getElementById('data').innerHTML =`date : ${alldata[0].date}`
        document.getElementById('temp').innerHTML =`temp : ${alldata[0].temprature}`
        document.getElementById('content').innerHTML =`feeling : ${alldata[0].feeling})`
    }catch(error){
        console.log(error)
    }
    
}
