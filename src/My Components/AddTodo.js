import React, { useState } from 'react';


export const AddTodo = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title and Description cannot be blanked");
        }
        else{
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <div className="container my-3">
            <h3>Adding item in Todo List</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" onChange={(e)=>{setDesc(e.target.value)}} value={desc} className="form-control" id="description" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
        </div>
    )
}
