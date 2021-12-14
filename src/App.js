import React, {useState} from 'react';
import DataFetch from './dataFetch';

function App() {
  const [data, setData] = useState([])
  
  let dataSet = []
  
  const getData = async () => {
    dataSet = await DataFetch()
    setData(dataSet) 
  }

  getData()

  console.log(data)
  return (
    <div className="App">
    </div>
  );
}

export default App;
