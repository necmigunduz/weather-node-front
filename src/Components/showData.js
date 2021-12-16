import React, { useEffect, useState } from 'react'
import DataFetch from './dataFetch'
import cities from './filter'

const ShowData = (props) => {
    const {filter} = props;
    const [data, setData] = useState([]);

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
      let selectedCity = ''
      let list = []
      const handleFilterChange = (e) => {
        selectedCity = e.target.value
        console.log(selectedCity)
        if(selectedCity === 'Dusseldorf'){
          console.log(data[0])
        } else if (selectedCity === 'Milano'){
            console.log(data[1])
        } else if (selectedCity === 'Addisababa'){
            console.log(data[2])
        } else if (selectedCity === 'Amsterdam'){
            console.log(data[3])
        }
      }
      
      

    return (
        <div>
            <div className='d-flex justify-content-center mt-5'>
                <select onChange={(e) => handleFilterChange(e)} value={filter}>{select}</select>
            </div>
            <div>
                {list}
            </div>
        </div>
    )
}

export default ShowData;