export type TArrayQuestions = string | number;

interface IQuestionElement {
  title: string;
  type: string;
  name: string;
}

export interface IRadio extends IQuestionElement {
  answer: TArrayQuestions[];
  rightAnswer: string;
}

export interface IInput extends IQuestionElement {
  answer: string;
}

export interface ICheckbox extends IQuestionElement {
  answer: TArrayQuestions[];
  rightAnswer: TArrayQuestions[];
}

export type TQuestions = IRadio | IInput | ICheckbox;

export type TValueArr = number | string;

export interface IValue {
  [key: string]: number | string | TValueArr[] | [];
}
