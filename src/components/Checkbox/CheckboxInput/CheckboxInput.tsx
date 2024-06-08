import "./CheckboxInput.scss";
import { TArrayQuestions } from "@/utils/interface";

interface ICheckboxInputProps {
  item: TArrayQuestions;
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  name: string;
  values: TArrayQuestions[] | [];
}

export default function CheckboxInput({
  item,
  handleChange,
  name,
  values,
}: ICheckboxInputProps) {
  // console.log(values);
  // const value = values.find((el) => el === item.toString());
  // console.log(value);
  return (
    <label className="checkbox-input" htmlFor={name}>
      <input
        className="checkbox-input__field"
        type="checkbox"
        name={name}
        id={name}
        value={item}
        onChange={handleChange}
      />
      {item}
    </label>
  );
}
