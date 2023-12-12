import { DetailedHTMLProps, HTMLAttributes } from "react";
import cx from "classnames";
import s from "./progress.module.scss";

type ProgressBarProps = {
  steps: string[];
  currStep: number;
};

export const ProgressBar = ({ steps, currStep }: ProgressBarProps) => {
  return (
    <div
      className={s.progressBar}
      style={
        {
          "--steps": steps.length,
          "--currStep": currStep,
        } as DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
      }
    >
      {steps.map((step, idx) => (
        <div className={s.step} key={step}>
          <p className={s.text}>{step}</p>
          <div className={cx(s.bullet, { [s.completed]: idx < currStep })}>
            {idx < currStep ? <>&#10004;</> : idx + 1}
          </div>
          {idx < steps.length - 1 && (
            <div
              className={cx(s.line, { [s.completed]: idx < currStep - 1 })}
            />
          )}
        </div>
      ))}
    </div>
  );
};
