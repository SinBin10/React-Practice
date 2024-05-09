import { useState } from "react";
import './ListGroup.css';

interface Props{
    list: string[];
    heading: string;
    onSelectItem: (item: string)=>void;
}

function ListGroup({list, heading, onSelectItem}: Props) {
    //this does not work because react is not aware of this change in the variable
    //to make react aware we use usestate hook 
    
    const [selectedIndex, setSelectedIndex] = useState(-1);

    // let selectedIndex = -1;
    //type annotation in typescript
    //items: items
    // event handler
    //list = [];
    return (
    <>
        <h1>{heading}</h1>
        {list.length === 0 && 'list not found'}
        <ul className={"listGroup"}>
            {list.map((item,index)=>(
                <li className={selectedIndex === index ? "list-group-item active":"list-group-item"} key={item} onClick={()=>{setSelectedIndex(index);onSelectItem(item)}}>{item}</li>
            ))}
        </ul>
    </>
    );
}

export default ListGroup;