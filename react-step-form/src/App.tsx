import { useState, SyntheticEvent } from "react";
import { ProgressBar } from "./components/ProgressBar";
import { StepForm, StepPage } from "./components/StepForm";
import "./global.scss";

const STEPS = ["Name", "Contact", "Birth", "Submit"];

const App = () => {
  const [currStep, setCurrStep] = useState(1);

  const handleNext = () => setCurrStep((c) => (c < STEPS.length ? c + 1 : c));
  const handlePrev = () => setCurrStep((c) => (c > 0 ? c - 1 : c));

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <div className="app center">
      <div className="container">
        <header>SignUp Form</header>
        <ProgressBar steps={STEPS} currStep={currStep} />

        <StepForm
          steps={STEPS.length}
          currStep={currStep}
          onSubmit={handleSubmit}
        >
          <StepPage className="page">
            <div className="title">Basic Info:</div>
            <div className="field">
              <div className="label">First Name</div>
              <input type="text" />
            </div>
            <div className="field">
              <div className="label">Last Name</div>
              <input type="text" />
            </div>
            <div className="field">
              <button onClick={handleNext}>Next</button>
            </div>
          </StepPage>

          <StepPage className="page">
            <div className="title">Contact Info:</div>
            <div className="field">
              <div className="label">Email Address</div>
              <input type="email" />
            </div>
            <div className="field">
              <div className="label">Phone Number</div>
              <input type="number" />
            </div>
            <div className="field btns">
              <button onClick={handlePrev}>Previous</button>
              <button onClick={handleNext}>Next</button>
            </div>
          </StepPage>

          <StepPage className="page">
            <div className="title">Date of Birth:</div>
            <div className="field">
              <div className="label">Date</div>
              <input type="date" />
            </div>
            <div className="field">
              <div className="label">Time</div>
              <input type="time" />
            </div>
            <div className="field">
              <div className="label">Gender</div>
              <select>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="field btns">
              <button onClick={handlePrev}>Previous</button>
              <button onClick={handleNext}>Next</button>
            </div>
          </StepPage>

          <StepPage className="page">
            <div className="title">Login details:</div>
            <div className="field">
              <div className="label">Username</div>
              <input type="text" />
            </div>
            <div className="field">
              <div className="label">Password</div>
              <input type="password" />
            </div>
            <div className="field btns">
              <button onClick={handlePrev}>Previous</button>
              <button>Submit</button>
            </div>
          </StepPage>
        </StepForm>
      </div>
    </div>
  );
};

export default App;
