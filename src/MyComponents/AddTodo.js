import React, {useState} from 'react'

const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or description can not be blank.")
        }
        addTodo(title, desc)
    }
    return (
        <>
            <div className='container my-3'>
                <form onSubmit={submit}>
                    <h3>Add a Todo</h3>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Todo Title</label>
                        <input type="text" className="form-control" onChange={(e) =>setTitle(e.target.value)} id="title" aria-describedby="emailHelp" value={title}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Todo Description</label>
                        <input type="text" className="form-control" onChange={(e) => setDesc(e.target.value)} id="desc" value={desc}/>
                    </div>
                    <button type="submit" className="btn btn-success my-3 mx-2">Add Todo</button>
                    <button type="cancel" className="btn btn-danger my-3 mx-3">Cancel</button>
                </form>
            </div>
        </>
    )
}

export default AddTodo;