import "./Button.css";

type ButtonProps = {
  key: string;
  name: string;
  content: string;
  onClick: any;
};

export const Button = ({ key, name, content, onClick }: ButtonProps) => {
  return (
    <button key={key} name={name} onClick={onClick}>
      {content}
    </button>
  );
};
