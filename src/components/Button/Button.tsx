import "./Button.scss";

interface IButtonProps {
  onClick: () => void;
  text: string;
  disabled?: boolean;
}

export default function Button({ onClick, text, disabled }: IButtonProps) {
  return (
    <button
      className="button"
      type="button"
      onClick={onClick}
      disabled={disabled || false}
    >
      {text}
    </button>
  );
}
