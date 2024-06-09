"use client";
import "./CountDown.scss";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function CountDown() {
  // Используем useRouter для перехода на главную страницу
  const router = useRouter();
  // Переменная содержит общее количество секунд
  const [countdown, setCountDown] = useState<number>(
    Number(localStorage.getItem("timer")) || 300,
  );
  const timerId = useRef<NodeJS.Timeout | null>(null);

  // useEffect запускает таймер при рендере страницы
  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current!);
  }, []);

  // useEffect сохраняет в локальное хранилище значение таймера и очищает setInterval, если время закончилось
  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerId.current!);
      router.push("/");
      localStorage.clear();
    }
    localStorage.setItem("timer", JSON.stringify(countdown));
  }, [countdown]);

  // Функция, которая высчитывает количество минут, секунд и возвращает строку со временем
  function formatTime(time: number): string {
    let minutes: number | string = Math.floor(time / 60);
    let seconds: number | string = Math.floor(time - minutes * 60);

    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    return minutes + ":" + seconds;
  }

  return (
    <div className="countdown">
      <div className="countdown__timer">{formatTime(countdown)}</div>
    </div>
  );
}
