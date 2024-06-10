import "./Radio.scss";
import { TArrayQuestions } from "@/utils/interface";
import RadioInput from "./RadioInput/RadioInput";

interface IRadioProps {
  questions: TArrayQuestions[];
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  name: string;
  values: string;
}

export default function Radio({
  questions,
  handleChange,
  name,
  values,
}: IRadioProps) {
  return (
    <div className="radio">
      {questions.map((item: string | number) => (
        <RadioInput
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
