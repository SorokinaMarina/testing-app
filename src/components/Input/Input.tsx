import "./Input.scss";
import { IValue } from "@/utils/interface";

interface IInputProps {
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  name: string;
  values: string;
}

export default function Input({ handleChange, name, values }: IInputProps) {
  return (
    <label className="input" htmlFor={name}>
      <input
        className="input__field"
        placeholder="Напишите ваш ответ"
        id={name}
        name={name}
        type="text"
        onChange={handleChange}
        value={values || ""}
      />
      <span className="input__error">Ошибка</span>
    </label>
  );
}
