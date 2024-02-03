import { useState } from "react";
import Button from "./Button";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
const Step = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const previous = () => {
    if (step > 1) setStep((current) => current - 1);
  };

  const next = () => {
    if (step < 3) setStep((current) => current + 1);
  };

  return (
    <div>
      <button
        className="close"
        onClick={() => setIsOpen((current) => !current)}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button bg="#7950f2" textColor="#fff" onClick={previous}>
              <span>👈</span>
              Previous
            </Button>

            <Button bg="#7950f2" textColor="#fff" onClick={next}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Step;
