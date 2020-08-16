import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeable = url;
    if(country)
    changeable=`${url}/countries/${country}`
    try{
    const { data:{confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeable);
     const modifiedData = {confirmed, recovered, deaths, lastUpdate}
    
     return modifiedData;
    }
    
    catch(error){

    }
}

export const fetchDailyData = async () => {
    try{
        const { data } = await axios.get(`${url}/daily`);

        return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
      }
       catch (error) {
        return error;
      }
    };

export const fetchCountries = async () => {
    try{
        const {data:{countries}} = await axios.get(`${url}/countries`);
        return countries.map((country)=>country.name);
        //console.log(response);

    }
    catch(error){
        console.log(error);
    }
}
