import Title from "@/components/Title/Title";
import Questions from "@/components/Questions/Questions";
import "../page.scss";

export default function Home() {
  return (
    <main className="main main_display">
      <Title />
      <Questions />
    </main>
  );
}
