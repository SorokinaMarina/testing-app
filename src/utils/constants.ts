import { TQuestions } from "./interface";

export const questions: TQuestions[] = [
  {
    title: "Что такое TypeScript и чем он отличается от JavaScript?",
    answer: "",
    type: "textarea",
    name: "question_1",
  },
  {
    title:
      'Каким способом можно найти на странице элемент имеющий идентификатор "test"?',
    answer: [
      "document.getElementById('test')",
      "document.findById('test')",
      "document.querySelector('test')",
      "document.queryById('#id')",
    ],
    rightAnswer: "document.getElementById('test')",
    type: "radio",
    name: "question_2",
  },
  {
    title: "Какие типы данных существуют в JavaScript?",
    answer: {
      a: "String",
      b: "Function",
      c: "Boolean",
      d: "Number",
      e: "Array",
      f: "BigInt",
      g: "Undefined",
      h: "Null",
      i: "Object",
      j: "Symbol",
    },
    rightAnswer: {
      a: "String",
      c: "Boolean",
      d: "Number",
      f: "BigInt",
      g: "Undefined",
      h: "Null",
      i: "Object",
      j: "Symbol",
    },
    type: "checkbox",
    name: "question_3",
  },
  {
    title: "Коротко перечислите свой стек:",
    type: "input",
    answer: "",
    name: "question_4",
  },
  {
    title: "Специфичность (вес) какого css-селектора является наибольшим?",
    answer: ["class", "id", "tag", "pseudo-element"],
    rightAnswer: "id",
    type: "radio",
    name: "question_5",
  },
  {
    title: "Какие варианты подключения скрипта соответствуют стандарту HTML?",
    answer: {
      a: "<script type='text/javascript' src='my.js'></script>",
      b: "<script src='my.js'></script>",
      c: "<script src='my.js'/>",
      d: "<хачу-javascript отсюда='my.js'>",
    },
    rightAnswer: {
      a: "<script type='text/javascript' src='my.js'></script>",
      b: "<script src='my.js'></script>",
    },
    type: "checkbox",
    name: "question_6",
  },
  {
    title: "Расскажите о своём опыте",
    answer: "",
    type: "textarea",
    name: "question_7",
  },
];
