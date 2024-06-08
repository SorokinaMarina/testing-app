import "./RadioInput.scss";
import { TArrayQuestions } from "@/utils/interface";

interface IRadioInputProps {
  item: TArrayQuestions;
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  name: string;
  values: string;
}

export default function RadioInput({
  item,
  handleChange,
  name,
  values,
}: IRadioInputProps) {
  return (
    <label className="radio-input" htmlFor={name}>
      <input
        className="radio-input__field"
        id={name}
        type="radio"
        name={name}
        value={item}
        onChange={handleChange}
        checked={values === item}
      />
      {item}
    </label>
  );
}
