
import React,{useState, useTransition} from 'react';

const UseTransition = () => {
    const [isPending, startTransition] = useTransition();
    const [input, setInput]= useState("");
    const [list, setList] = useState([]);

    const LIST_SIZE = 5;

    function handleClick(){
       startTransition(()=>{
       const list1 = [];
       for(let i = 0;i < LIST_SIZE;i++){
        list1.push(...list,input)
       }
       setList(list1)
    })
    setInput("")
    }

    return (
        <div>
           <input value={input} onChange={(e)=>setInput(e.target.value)} />
           <button onClick={handleClick}>AddItem</button>
           {list.map((item, id)=>{
            return <ul>
                <li key={id}>{item}</li>
            </ul>
           })} 
        </div>
    );
};

export default UseTransition;
