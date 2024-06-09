"use client";

import "../page.scss";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";

export default function Result() {
  // Используем useRouter для перехода на главную страницу
  const router = useRouter();

  // Функция срабатывает при клике на кнопку "На главную" и перенаправляет на главную страницу
  function handleClick() {
    router.push("/");
    localStorage.clear();
  }

  return (
    <main className="main">
      <h1 className="main__title">
        Тестирование завершено. Ваши ответы были отправлены.
      </h1>
      <div className="main__button">
        <Button text="На главную" onClick={handleClick} />
      </div>
    </main>
  );
}
