"use client";

import "./Questions.scss";
import { useState, useEffect } from "react";
import { questions } from "@/utils/constants";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import Radio from "../Radio/Radio";
import { TArrayQuestions, IValue, ICheckboxAnswer } from "@/utils/interface";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useRouter } from "next/navigation";

export default function Questions() {
  // Используем useRouter для перехода на страницу Result после окончания тестирования
  const router = useRouter();
  // Переменная определяет какой тест будет отображаться
  const [indexElement, setIndexElement] = useState<number | null>(null);
  // В эту переменную собираем значения всех полей для отправки на сервер
  const [values, setValues] = useState<IValue | null>(null);

  // При первом рендере получаем данные из локального хранилища для переменных indexElement и values
  useEffect(() => {
    setIndexElement(Number(localStorage.getItem("indexElement")) || 0);
    setValues(JSON.parse(localStorage.getItem("values") || "{}") as IValue);
  }, []);

  // Сохраняем в локально хранилище значение переменной indexElement
  useEffect((): void => {
    localStorage.setItem("indexElement", JSON.stringify(indexElement));
  }, [indexElement]);

  // Сохраняем в локальное хранилище значение переменной values
  useEffect(() => {
    values && localStorage.setItem("values", JSON.stringify(values));
  }, [values]);

  // Функция, которая срабатывает при клике на кнопку "далее"
  function onClick() {
    if (indexElement === questions.length - 1) {
      router.push("/result");
    } else {
      setIndexElement((prevValue) => {
        if (prevValue === null) return null;
        return prevValue + 1;
      });
    }
  }

  // Функция, которая собирает данные с полей и сохраняет в переменную values
  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ): void {
    const { name, value, type, id } = e.target;

    if (type === "checkbox") {
      if (e.target instanceof HTMLInputElement) {
        const checked = e.target.checked;
        setValues((prevValues) => {
          if (!prevValues) return null;
          if (checked) {
            return {
              ...prevValues,
              [name]: { ...(prevValues[name] as ICheckboxAnswer), [id]: value },
            };
          } else {
            return {
              ...prevValues,
              [name]: {
                ...Object.values(prevValues[name]).filter(
                  (item) => item !== value,
                ),
              },
            };
          }
        });
      }
    } else {
      setValues(
        (prevValues: IValue | null): IValue => ({
          ...prevValues,
          [name]: value,
        }),
      );
    }
  }

  return (
    <section className="questions">
      <ProgressBar totalSteps={questions.length} step={indexElement || 0} />
      <form className="questions__form" action="#" id="questions-form">
        <h4 className="questions__title">
          {indexElement !== null && questions[indexElement].title}
        </h4>
        <fieldset className="questions__fieldset">
          {indexElement !== null &&
            questions[indexElement].type === "input" && (
              <Input
                handleChange={handleChange}
                name={questions[indexElement].name}
                values={
                  ((values as IValue)[
                    questions[indexElement].name
                  ] as string) || ""
                }
              />
            )}
          {indexElement !== null &&
            questions[indexElement].type === "textarea" && (
              <TextArea
                handleChange={handleChange}
                name={questions[indexElement].name}
                values={
                  ((values as IValue)[
                    questions[indexElement].name
                  ] as string) || ""
                }
              />
            )}
          {indexElement !== null &&
            questions[indexElement].type === "radio" &&
            questions[indexElement].answer.length !== 0 && (
              <Radio
                questions={questions[indexElement].answer as TArrayQuestions[]}
                handleChange={handleChange}
                name={questions[indexElement].name}
                values={
                  ((values as IValue)[
                    questions[indexElement].name
                  ] as string) || ""
                }
              />
            )}
          {indexElement !== null &&
            questions[indexElement].type === "checkbox" &&
            questions[indexElement].answer.length !== 0 && (
              <Checkbox
                questions={questions[indexElement].answer as ICheckboxAnswer}
                handleChange={handleChange}
                name={questions[indexElement].name}
                values={
                  ((values as IValue)[
                    questions[indexElement].name
                  ] as ICheckboxAnswer) || undefined
                }
              />
            )}
        </fieldset>
      </form>
      <div className="questions__button">
        <Button
          onClick={onClick}
          text={indexElement === questions.length - 1 ? "Завершить" : "Далее"}
          disabled={
            (indexElement !== null &&
              values &&
              !values[questions[indexElement].name]) ||
            (indexElement !== null &&
              Object.values((values as IValue)[questions[indexElement].name])
                .length === 0)
              ? true
              : false
          }
        />
      </div>
    </section>
  );
}
