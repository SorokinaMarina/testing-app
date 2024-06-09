import "./ProgressBar.scss";

interface IProgressBarProps {
  totalSteps: number;
  step: number;
}

export default function ProgressBar({ totalSteps, step }: IProgressBarProps) {
  return (
    <div className="progress-bar">
      {[...Array(totalSteps)].map((_, index: number) => {
        const stepClass =
          index < step
            ? "progress-bar_completed"
            : index === step
              ? "progress-bar_active"
              : "progress-bar_future";
        return (
          <div
            key={index}
            className={`progress-bar_step ${stepClass}`}
            style={{ width: `${100 / totalSteps}%` }}
          />
        );
      })}
    </div>
  );
}
