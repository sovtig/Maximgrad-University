import React from 'react';

const ObserverEffect: React.FC<{ topic: string }> = ({ topic }) => {
  return (
    <div>
      <h2>Observer Effect</h2>
      <p>Explore the role of the observer in {topic}.</p>
    </div>
  );
};

export default ObserverEffect;