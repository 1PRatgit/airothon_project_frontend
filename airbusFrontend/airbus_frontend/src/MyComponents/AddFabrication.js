import React, { useState } from 'react';

export const AddFabrication = ({  }) => {
    const [item, setitem] = useState("");
    const [rawMaterial, setRaw] = useState("");
    const [quantity, setquantity] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!item || !rawMaterial) {
            alert("item  cannot be blank");
        }
        else {
            AddFabrication(item, rawMaterial,quantity);
            setitem("");
            setRaw("");
            setquantity("");
        }
    }
    return (
        
        <div className="container my-3">
            <br></br>
            <h3 className="text-center my-3">Add Data for fabrication domain</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="item" className="form-label">Item</label>
                    <input type="text" value={item} onChange={(e) => setitem(e.target.value)} className="form-control" id="item" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="rawMaterial" className="form-label">Raw Material</label>
                    <input type="text" value={rawMaterial} onChange={(e) => setRaw(e.target.value)} className="form-control" id="rawMaterial" />
                </div>
                <div className="mb-3">
                    <label htmlFor="rawMaterial" className="form-label">Quantity</label>
                    <input type="text" value={quantity} onChange={(e) => setquantity(e.target.value)} className="form-control" id="quantity" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Create</button>
            </form>
        </div>
    )

    //add api below

    // const submit(e)=>{
    //     try{
    //         await axios.post(" ",{
    //             msg
    //         })
    //     }
    //     catch(e){
    //         console.log(e);
    //     }
    // }
}
