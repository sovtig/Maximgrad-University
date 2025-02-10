import React, { useState } from 'react';
import { workflowSteps } from '../data';
import { LucideIcon } from 'lucide-react';

const Workflow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prevStep) => (prevStep + 1) % workflowSteps.length);
  };

  const resetSteps = () => {
    setCurrentStep(0);
  };

  return (
    <div>
      {workflowSteps.map((step, index) => (
        <div
          key={index}
          className={`step ${index === currentStep ? 'active' : ''}`}
        >
          <LucideIcon name={step.icon} />
          <h2>{step.title}</h2>
          <p>{step.description}</p>
        </div>
      ))}
      <button onClick={nextStep}>Next</button>
      <button onClick={resetSteps}>Reset</button>
    </div>
  );
};

export default Workflow;