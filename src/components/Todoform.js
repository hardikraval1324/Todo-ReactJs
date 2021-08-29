import React, {useState, useEffect , useRef} from 'react'

function Todoform(props) {
    const[input,setInput] = useState(props.edit ? props.edit.value : ' ');
    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    })

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
           {props.edit ? (
           <>
           <input 
           type='text' 
           placeholder='Update your Tasks'
           value={input} name='text'
           className='todo-input edit'
           onChange={handleChange}
           ref={inputRef}
           />
           <button className='todo-button edit'> Update To-do </button>
           </>) : 
           (
            <>
            <input 
            type='text' 
            placeholder='Add todo'
            value={input} name='text'
            className='todo-input'
            onChange={handleChange}
            ref={inputRef}
            />
            <button className='todo-button'> Add To-do</button>
            </>
           )}
           
       </form>
    )
}

export default Todoform

