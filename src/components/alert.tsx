import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: ()=>void;
}

const Alert = ({ children, onClick }: Props) => {
  return (
    <>
      <div className="alert alert-danger alert-dismissible">
        {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClick}
        ></button>
      </div>
    </>
  );
};

export default Alert;
