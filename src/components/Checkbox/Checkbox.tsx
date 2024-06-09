import "./Checkbox.scss";
import { ICheckboxAnswer } from "@/utils/interface";
import CheckboxInput from "./CheckboxInput/CheckboxInput";

interface ICheckbox {
  questions: ICheckboxAnswer;
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  name: string;
  values: ICheckboxAnswer | undefined;
}

export default function Checkbox({
  questions,
  handleChange,
  name,
  values,
}: ICheckbox) {
  return (
    <div className="checkbox">
      {Object.keys(questions).map((item: string | number) => (
        <CheckboxInput
          key={item}
          item={item}
          handleChange={handleChange}
          name={name}
          values={values}
          questions={questions}
        />
      ))}
    </div>
  );
}
