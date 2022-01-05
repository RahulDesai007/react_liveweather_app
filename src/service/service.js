import axios from "axios";


const WEATHER_API = `http://api.openweathermap.org/data/2.5/weather?`


class Service {

    async weather(search) {
       
         // return alert('hey')
        if (search === null) {
            return null
        } else {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c89ccff0f5648d734f6b6339161900dd`)
       console.log("response ----> ", response)
        return response.data.main
        }
    }
}


export default new Service;
