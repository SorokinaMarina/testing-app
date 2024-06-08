import "./TextArea.scss";

interface ITextAreaProps {
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  name: string;
  values: string;
}

export default function TextArea({
  handleChange,
  name,
  values,
}: ITextAreaProps) {
  return (
    <label className="textarea" htmlFor={name}>
      <textarea
        className="textarea__field"
        placeholder="Напишите ваш ответ"
        id={name}
        name={name}
        onChange={handleChange}
        value={values || ""}
      />
      <span className="textarea__error">Ошибка</span>
    </label>
  );
}
