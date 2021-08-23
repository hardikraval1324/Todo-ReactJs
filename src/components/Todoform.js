import React, {useState} from 'react'

function Todoform(props) {
    const[input,setInput] = useState('');
    const handleChange = e=>{
        setInput(e.target.value)
    }
    const handlesubmit = e =>{
        e.preventDefault();
        props.onSubmit({
            id:Math.floor(Math.random() * 1000),
            text: input
        });
         setInput('');

    } 
    return (
       <form classname='todo-form' onSubmit={handlesubmit}>
           <input type='text' 
           placeholder='Add a todo'
           value={input} name='text'
           className='todo-input'
           onChange={handleChange}

           />
           <button className='todo-button'> Add TO-DO</button>
       </form>
    )
}

export default Todoform
