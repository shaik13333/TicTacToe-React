import React, { useState } from 'react';
const WeatherApp = () => {
    let api = {
        key: "64e07bb2adee7a432395ad4507447f0b",
        url: "https://api.openweathermap.org/data/2.5/weather"
        
    }  
    let [ser, setSer] = useState({});
    let [search, setSearch] = useState("");
    let [data, setData] = useState("");
    let [loading, setLoading] = useState(false);
    let fetching = () => {
        setLoading(true); 
        fetch(`${api.url}?q=${search}&appid=${api.key}`)
            .then((response) => response.json())
            .then((data) => {
                setSer(data);
                if (data.id === undefined) {  
                    setData("Data not found");
                } else {
                    setData(""); 
                }
                setLoading(false); 
            })
            .catch(() => {
                setData("Error fetching data"); 
                setLoading(false); 
            });
    }
    
    let press = (e) => {
        if (e.key === "Enter") {
            fetching();
        }
    }

    return (
        <div>
            <input 
                type="text" 
                onChange={(e) => setSearch(e.target.value)} 
                onKeyUp={press}
                placeholder="Enter city"
            />
            <input 
                type="submit" 
                onClick={() => fetching()}
            />
            {loading ? ( 
                <div>Loading...</div>
            ) : (
                (ser.main !== undefined) ? (
                    <>
                        <div>{ser.id}</div>
                        <div>{ser.name}</div>
                    </>
                ) : (data)
            )}
        </div>
    );
}

export default WeatherApp;
