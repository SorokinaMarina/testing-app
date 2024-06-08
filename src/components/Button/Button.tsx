import "./Button.scss";

interface IButtonProps {
  onClick: () => void;
  text: string;
}

export default function Button({ onClick, text }: IButtonProps) {
  return (
    <button className="button" type="button" onClick={onClick}>
      {text}
    </button>
  );
}
