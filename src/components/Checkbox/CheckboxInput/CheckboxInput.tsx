import "./CheckboxInput.scss";
import { ICheckboxAnswer, TArrayQuestions } from "@/utils/interface";

interface ICheckboxInputProps {
  item: TArrayQuestions;
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  name: string;
  values: ICheckboxAnswer | undefined;
  questions: ICheckboxAnswer;
}

export default function CheckboxInput({
  item,
  handleChange,
  name,
  values,
  questions,
}: ICheckboxInputProps) {
  return (
    <label className="checkbox-input" htmlFor={String(item)}>
      <input
        className="checkbox-input__field"
        type="checkbox"
        name={name}
        id={String(item)}
        value={questions[item]}
        onChange={handleChange}
        checked={
          values
            ? Object.values(values).some((el) => el === questions[item])
            : false
        }
      />
      {questions[item]}
    </label>
  );
}
