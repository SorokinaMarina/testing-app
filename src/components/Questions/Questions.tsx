"use client";

import "./Questions.scss";
import { useState, useEffect } from "react";
import { questions } from "@/utils/constants";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import Radio from "../Radio/Radio";
import { TArrayQuestions, IValue, TValueArr } from "@/utils/interface";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";

export default function Questions() {
  const [indexElement, setIndexElement] = useState<number>(0);
  const [values, setValues] = useState<IValue | null>(null);
  console.log(values);

  //   useEffect((): void => {
  //     if (localStorage.getItem("indexElement")) {
  //       setIndexElement(Number(localStorage.getItem("indexElement")));
  //     }
  //   }, [indexElement]);

  function onClick(): void {
    setIndexElement((prevValue) => prevValue + 1);
    localStorage.setItem("indexElement", JSON.stringify(indexElement));
  }

  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ): void {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      if (e.target instanceof HTMLInputElement) {
        const checked = e.target.checked;
        setValues((prevValues: IValue | null): IValue => {
          if (!prevValues) {
            return {};
          }
          if (checked) {
            return {
              ...prevValues,
              [name]: [...((prevValues[name] as TValueArr[]) || []), value],
            };
          } else {
            return {
              ...prevValues,
              [name]: ((prevValues[name] as TValueArr[]) || []).filter(
                (item: TValueArr) => item !== value,
              ),
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
      <form className="questions__form" action="#" id="questions-form">
        <h4 className="questions__title">{questions[indexElement].title}</h4>
        <fieldset className="questions__fieldset">
          {questions[indexElement].type === "input" && (
            <Input
              handleChange={handleChange}
              name={questions[indexElement].name}
              values={
                values !== null
                  ? (values[questions[indexElement].name] as string)
                  : ""
              }
            />
          )}
          {questions[indexElement].type === "textarea" && (
            <TextArea
              handleChange={handleChange}
              name={questions[indexElement].name}
              values={
                values !== null
                  ? (values[questions[indexElement].name] as string)
                  : ""
              }
            />
          )}
          {questions[indexElement].type === "radio" &&
            questions[indexElement].answer.length !== 0 && (
              <Radio
                questions={questions[indexElement].answer as TArrayQuestions[]}
                handleChange={handleChange}
                name={questions[indexElement].name}
                values={
                  values !== null
                    ? (values[questions[indexElement].name] as string)
                    : ""
                }
              />
            )}
          {questions[indexElement].type === "checkbox" &&
            questions[indexElement].answer.length !== 0 && (
              <Checkbox
                questions={questions[indexElement].answer as TArrayQuestions[]}
                handleChange={handleChange}
                name={questions[indexElement].name}
                values={
                  values !== null
                    ? (values[
                        questions[indexElement].name
                      ] as TArrayQuestions[])
                    : []
                }
              />
            )}
        </fieldset>
      </form>
      <div className="questions__button">
        <Button
          onClick={onClick}
          text={indexElement === questions.length - 1 ? "Завершить" : "Далее"}
        />
      </div>
    </section>
  );
}
