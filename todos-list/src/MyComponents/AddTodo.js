import React, { useState } from 'react'

export const AddTodo = ({addTodo}) => {
    const[title,setTitle]=useState("");
    const [desc, setDesc] = useState("");
    const submit=(e)=>
    {
        e.preventDefault();//to prevent reload
        if(!title||!desc){
            alert("Title or description cant be blank");
        }
        
        else{
            addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
        
    }
    return (
        <div>
             <h3 className='p-1 h1 text-primary text-center mx-auto display-inline-block"'>Add a task</h3>
        <div className=' my-3 container m-5 p-2 rounded mx-auto bg-light shadow'>
            <form onSubmit={submit}>
                <div className="mb-3 col col-11 mx-auto">
                    <input type="text" value={title} placeholder="Add new .." onChange={(e)=>{setTitle(e.target.value)}}className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                 </div>
                <div className="mb-3 col col-11 mx-auto">
                    <input type="text" value={desc} placeholder="Add description .." onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
                </div>
                <div className="mb-3 col col-11 mx-auto">
                <button type="submit" className="btn btn-sm btn-primary">Add task</button>
                </div>
            </form>
        </div>
        </div>
    )
}
