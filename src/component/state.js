import { Button } from 'react-bootstrap';
import React, { useState } from 'react';

const StateExamble = () => {
	const [count, setCount] = useState(0);
    const [text,setText] =useState('text');
    const handlInput=(e)=>{
        setText(e.target.value)
        console.log(text)
    }
	return (
		<div>
			<Button onClick={() => setCount(count + 1)}>+</Button>
			<Button onClick={() => setCount(count -1)}>-</Button>
			<label>{text} {count}</label>

            <input type="text" value={text} onChange={handlInput}></input>
		</div>
	);
};

export default StateExamble;
