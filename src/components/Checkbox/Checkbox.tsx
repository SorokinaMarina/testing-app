import "./Checkbox.scss";
import { TArrayQuestions } from "@/utils/interface";
import CheckboxInput from "./CheckboxInput/CheckboxInput";

interface ICheckbox {
  questions: TArrayQuestions[];
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  name: string;
  values: TArrayQuestions[] | [];
}

export default function Checkbox({
  questions,
  handleChange,
  name,
  values,
}: ICheckbox) {
  return (
    <div className="checkbox">
      {questions.map((item: string | number) => (
        <CheckboxInput
          key={item}
          item={item}
          handleChange={handleChange}
          name={name}
          values={values}
        />
      ))}
    </div>
  );
}
