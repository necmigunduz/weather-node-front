import React, { useEffect, useState } from 'react'
import DataFetch from './dataFetch'
import cities from './filter'

const ShowData = (props) => {
    const {filter} = props;
    const [data, setData] = useState([]);
    const [name, setName] = useState('.....');
    const [type, setType] = useState('.....');
    const [temp, setTemp] = useState('...');

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
      
      // useEffect(()=>{
      //   console.log(data)
      // },[data])
      
      // console.log(cities)

      const select = cities.map((option) => 
        <option key={option}>{option}</option>
      )

      let selectedCity = ''
      // let list = ['amsterdam','Istanbul']
      const handleFilterChange = (e) => {
        selectedCity = e.target.value
        console.log(selectedCity)
        if(selectedCity === 'Dusseldorf'){
          setName(data[0].cityName)
          setType(data[0].weatherType)
          setTemp(data[0].temperature)
        } else if (selectedCity === 'Milano'){
            setName(data[1].cityName)
            setType(data[1].weatherType)
            setTemp(data[1].temperature)
        } else if (selectedCity === 'Addisababa'){
            setName(data[2].cityName)
            setType(data[2].weatherType)
            setTemp(data[2].temperature)
        } else if (selectedCity === 'Amsterdam'){
            setName(data[3].cityName)
            setType(data[3].weatherType)
            setTemp(data[3].temperature)
        } else {
          setName(' ..... ')
          setType(' ..... ')
          setTemp(' ... ')
      }
      }
      let date = new Date()
      let day = date.getDay()
      let month = date.getMonth()
      let year = date.getFullYear()
      let date_str =  day +"/"+month+"/"+year
    return (
        <div className='d-flex flex-column justify-content-center'>
            <div className='card text-center bg-dark text-light'>
                <div className='card-title pt-2'>
                  <h5 className='mt-3'>Please select a city to see weather</h5>
                </div>
                <div className='card-text text-center pt-1 pb-2'>
                  <select onChange={(e) => handleFilterChange(e)} value={filter} className='px-5 py-2 fw-bold'>{select}</select>
                </div>
            </div>
            
            <div className='card w-75 mt-4 bg-light text-dark text-center mx-auto float-none'>
                <div className='card-body'>
                  <div className='card-title'><h2>Weather in {name}</h2><strong>@</strong> <small>{date_str}</small></div>
                  <div className='card-text'>
                    <h5 className='text-dark'>Today is <strong className='text-danger'>{type}</strong></h5>
                    <h5>and temperature is <span className='text-info'>{temp}</span>.</h5>
                    <br/>
                    <h5>Enjoy your day! <strong className='text-danger'>:)</strong></h5>
                  </div>
                </div>
                
            </div>
        </div>
    )
}

export default ShowData;