"use client";

import "./page.scss";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";

export default function Main() {
  // Используем useRouter для перехода на страницу с вопросами
  const router = useRouter();

  // Функция срабатывает при клике на кнопку "Старт" и перенаправляет на страницу с тестированием
  function handleClick() {
    router.push("/questions");
  }

  return (
    <main className="main">
      <h1 className="main__title">
        {`Нажмите 'Старт', если готовы приступить к тестрованию.`}
      </h1>
      <div className="main__button">
        <Button text="Старт" onClick={handleClick} />
      </div>
    </main>
  );
}
