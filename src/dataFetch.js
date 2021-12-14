const DataFetch = async () => {  
    let data = {};

    try {    
        const response = await fetch(`https://localhost:8080/api/citiesWeather`, {      
            method: 'GET',          
            mode: 'cors',
    });

    data = await response.json();
    } 

    catch (e) {    
        data = 'ERROR';  
    }
    return data.statistics;
};

export default DataFetch;