# Мини-приложение для тестирования

### Реализована клиентская часть приложения для проведения тестирования. Тест предоставляет возможность выбирать один или несколько варинтов ответа, давать короткий или развёрнутый ответ. Тестирование имеет ограничение по времени. 

##### [Ссылка gh-pages](https://sorokinamarina.github.io/testing-app/)

#### Реализовано:

✔️ Сайт разработан по принципу SPA(Single Page Application);

✔️ Использованы семантические теги для SEO-оптимизации сайта;

✔️ Использование БЭМ-методологии для именования классов;

✔️ Реализована резиновая вёрстка при помощи процентных единиц измерения;

✔️ Реализована работа с формой, взаимодействие с неуправляемыми компонентами input и textarea типов - text, radio, checkbox;

✔️ Валидация кнопки "далее". Кнопка блокируется, если пользователь не заполнил обязательное поле или не выбрал вариант ответа;

✔️ Реализован таймер обратного отсчёта. Данные сохраняются в локальное хоранилище. При обновлении страницы таймер не сбрасывается и продолжает отсчёт;

✔️ Ответы пользователя сохраняются в единый объект, готовый для отправки на сервер. Данные объекта сохраняются в локальное хранилище. При обновлении страницы пользователю не придётся заново вводить свой ответ, поле будет заполненно данными из хранилища.

✔️ Реализован Progress-bar.

## Технологии
* HTML
* SCSS
* TypeScript
* React(Next.js)
* Git
* Webpack

## Установка и запуск проекта локально
* Клонировать репозиторий
  
  `git clone git@github.com:SorokinaMarina/testing-app.git`

* Перейти в папку "testing-app"
  
  `cd testing-app`

* Установить зависимости
  
  `npm i`

* Запустить 
  
  `npm run dev`
