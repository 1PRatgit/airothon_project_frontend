import React from 'react'
export const Fabrication = () => {
  return (
    <div >
      <h3 className="text-center my-3">Fabrication Domain data</h3>
    <table className="table">
      
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">item</th>
            <th scope="col">itemid</th>
            <th scope="col">rawmaterial</th>
            <th scope="col">Quntity</th>
            <th scope="col">indate</th>
            <th scope="col">outdate</th>
                        
        </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>tub</td>
            <td>T101</td>
            <td>sheet</td>
            <td>10sqft</td>
            <td>14/02</td>
            <td>14/02</td>          
            </tr>
            
        </tbody>
        </table>
        </div>

  )
  // add backend api here


  // const API_URL = " ";
  // const [backendData, setBackendData]=useState([{}])
  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((res) => res.json())
  //     .then(data => {
  //       console.log(data);
  //       setBackendData(data.data);
  //     })
  // }, [])

  // return(
  //   {(typeof backendData.data === 'undefined')?(
  //     <p>Loading...</p>
  //   ):
  // (
  //   backendData.data.map({data,key}=>{
  //     //display results
        //   <tbody>
        //   <tr>
        //   <th scope="row">1</th>
        //   <td>{item}</td>
        //   <td>{itemid}</td>
        //   <td>{rawmaterial}</td>
        //   <td>{quantity}</td>
        //   <td>14/02</td>
        //   <td>14/02</td>          
        //   </tr>
          
        // </tbody>

  //   })
  // )}
  // )
}
