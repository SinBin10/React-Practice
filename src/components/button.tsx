interface Prop{
    button: string;
    onClick: ()=>void;
}

const Button = ({button, onClick}: Prop) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>{button}</button>
  );
}

export default Button;