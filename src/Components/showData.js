import React, { useEffect, useState } from 'react'
import DataFetch from './dataFetch'
import cities from './filter'

const ShowData = (props) => {
    const {filter, changeFilter} = props;
    const [data, setData] = useState([]);
    const [city, setCity] = useState()

    useEffect(() => {
        let dataSet = []
      
        const getData = async () => {
          try { 
            dataSet = await DataFetch()
            setData(dataSet.data) 
          }  catch (err){
            console.log(err)
          }
        }
        getData()
      },[])
      
      useEffect(()=>{
        console.log(data)
      },[data])
      
      // console.log(cities)

      const select = cities.map((option) => 
        <option key={option}>{option}</option>
      )
      
      const handleFilterChange = (e) => {
        changeFilter(e.target.value);
        
      }
  
      
      let list = []
      list = data.map((city) => {
          if(city.cityName === city){
            return(
                <div>
                    <p>{city.cityName}</p>
                    <p></p>
                </div>
            )
          }

      })

    return (
        <div>
            <div>
                <select onChange={(e) => handleFilterChange(e)} value={filter}>{select}</select>
            </div>
            <div>
                {list}
            </div>
        </div>
    )
}

export default ShowData;