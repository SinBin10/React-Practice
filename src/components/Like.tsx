import { FaHeart } from 'react-icons/fa';
import { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";

interface Prop{
    onClick: ()=>void;
}


const Like = ({onClick}: Prop) => {
    const [state, setState] = useState(false);
    const toggle = ()=>{
        setState(!state);
        onClick();
    }
    if(state)
  return (
        <FaHeart color="red" onClick={toggle}></FaHeart>
  )
  else
  return (
    <FaRegHeart onClick={toggle}></ FaRegHeart>
)
}

export default Like;