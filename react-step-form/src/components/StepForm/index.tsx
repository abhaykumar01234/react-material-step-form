import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import cx from "classnames";
import s from "./page.module.scss";

type StepFormProps = {
  steps: number;
  currStep: number;
  children: ReactNode;
  [x: string]: any;
};

type StepPageProps = {
  className?: string;
  children: ReactNode;
  [x: string]: any;
};

export const StepForm = ({
  steps,
  currStep,
  children,
  ...restProps
}: StepFormProps) => {
  return (
    <div
      className={s.formContainer}
      style={
        {
          "--steps": steps,
          "--currStep": currStep,
        } as DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
      }
    >
      <form {...restProps}>{children}</form>
    </div>
  );
};

export const StepPage = ({
  className,
  children,
  ...restProps
}: StepPageProps) => {
  return (
    <div className={cx(s.page, className)} {...restProps}>
      {children}
    </div>
  );
};
