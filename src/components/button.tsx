interface Prop{
    button: string;
}

const Button = ({button}: Prop) => {
  return (
    <button className="btn btn-primary">{button}</button>
  );
}

export default Button;