import React from 'react';

const ChallengeAssumptions: React.FC<{ topic: string }> = ({ topic }) => {
  return (
    <div>
      <h2>Challenge Assumptions</h2>
      <p>Re-evaluate fundamental assumptions about {topic}.</p>
    </div>
  );
};

export default ChallengeAssumptions;