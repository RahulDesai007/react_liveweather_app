import React, { useState, useEffect } from 'react'
import Service from '../service/service'
import axios from 'axios'
import "./css/style.css"

const Tempapp = () => {

    const [city, setCity] = useState(null)
    const [search, setSearch] = useState(null)

    useEffect(() => {
        // const fetchApi = async () => {
        //    // const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c89ccff0f5648d734f6b6339161900dd`
        //     const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c89ccff0f5648d734f6b6339161900dd`)
        //     setCity(response.data.main)
        // }

        const fetchApi = async () => {
            const data = await Service.weather(search);
            setCity(data)
        }

        fetchApi()

    }, [search])
    return (
        <>
            <div >
                <div className="inputData">
                    <input
                        type="search"
                        className="inputField"
                        onChange={(event) => { setSearch(event.target.value) }}
                    />
                </div>
            </div>
            {(!city || !search) ? (
                <p>No Data Found</p>
            ) : (
                <div>
                    <div className="wave">
                        <div className="info">
                            <h2 className="location">
                                <i className="fas fa-street-view"></i>{search}
                            </h2>
                            <h1 className="temp">
                                {city.temp}° Cel
                            </h1>
                            <h3 className="tempmin_max">
                                Min : {city.temp_min}° Cel | Max : {city.temp_max}° Cel
                            </h3>
                        </div>
                    </div>
                    <div className="wavetwo"></div>
                    <div className="wavethree"></div>
                </div>
            )}




        </>
    )
}

export default Tempapp
