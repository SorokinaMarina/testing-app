import "./Title.scss";
import CountDown from "../CountDown/CountDown";

export default function Title() {
  return (
    <div className="title">
      <h1 className="title__text">Тестирование</h1>
      <CountDown />
    </div>
  );
}
