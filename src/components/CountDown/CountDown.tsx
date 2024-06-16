"use client";
import "./CountDown.scss";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function CountDown() {
  // Используем useRouter для перехода на главную страницу
  const router = useRouter();
  // Переменная содержит общее количество секунд
  const [countdown, setCountDown] = useState<number | null>(null);
  const timerId = useRef<NodeJS.Timeout | null>(null);

  // useEffect получает значение таймера из локального хранилища
  useEffect(() => {
    setCountDown(Number(localStorage.getItem("timer")) || 300);
  }, []);

  // запускаем/останавливаем таймер и сохраняем значение в локальное хранилище
  useEffect(() => {
    if (countdown === null) return;

    timerId.current = setInterval(() => {
      setCountDown((prev) => {
        if (prev === null) return null;
        return prev - 1;
      });
    }, 1000);
    localStorage.setItem("timer", JSON.stringify(countdown));

    if (countdown <= 0) {
      clearInterval(timerId.current!);
      router.push("/");
      localStorage.clear();
    }
    return () => clearInterval(timerId.current!);
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
      <div className="countdown__timer">
        {countdown !== null && formatTime(countdown)}
      </div>
    </div>
  );
}
