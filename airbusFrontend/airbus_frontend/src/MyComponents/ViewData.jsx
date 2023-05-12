import React from 'react'
// import {Fabricatiton} from "./MyComponents/Fabrication";
import {Fabrication} from './Fabrication';
import { Link,useNavigate } from "react-router-dom";
import { SubAssembly } from './SubAssembly';

export const ViewData = (props) => {
  // const navigate= useNavigate();
  
    const fabricationview=()=>
    {
      console.log("hit")
        return(
            <Fabrication/>
        )
    }
    const subassemblyview=()=>
    {
        return(
            <SubAssembly/>
        )
    }
    return (
        <div className="container">
        <h3 className="text-center my-3"> Domains </h3>
        {props.viewdata.map((viewdata)=>{
            return (
                <table className="table">
                {/* <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Domain</th>
                    <th scope="col">actions</th>
                    
                  </tr>
                </thead> */}
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>fabrication</td>
                    <td>
                        <button type="button" className="btn btn-info"
                        onClick={fabricationview}>view</button>
                       
                    <button type="button" className="btn btn-info">Create</button></td>
                    
                    <th scope="row">2</th>
                    <td>sub-assembly</td>

                    {/* <li className="nav-item">
                      <Link to="/Fabrication">View</Link>
                    </li>
                     */}
                    <td><button type="button" className="btn btn-info"onClick={subassemblyview}>View</button>
                    <button type="button" className="btn btn-info">create</button></td>
                    
                    <th scope="row">3</th>
                    <td>assembly</td>
                    <td><button type="button" className="btn btn-info">view</button>
                    <button type="button" className="btn btn-info">create</button></td>
                    
                  </tr>
                 
                </tbody>
                <br></br>
                <br></br>
              </table>
            )
        })}
        
        </div>
    )
}