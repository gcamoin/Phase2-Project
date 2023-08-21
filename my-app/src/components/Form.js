import React, {useState} from "react"


function Form() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")


function handleChange(e){
    setText(e.target.value)
}

function handleSubmit(e) {
    e.preventDefault()
    setCount(count + text.length)
}

return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            onChange={handleChange}
            value={text}
        
        />
        <p>{count}</p>
        <button>Submit</button>
        
    </form>
    
)








}

export default Form;