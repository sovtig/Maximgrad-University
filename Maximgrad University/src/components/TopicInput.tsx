import React, { useState } from 'react';

const TopicInput: React.FC<{ addTopic: (topic: string) => void }> = ({ addTopic }) => {
  const [topic, setTopic] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTopic(topic);
    setTopic('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter a topic"
      />
      <button type="submit">Add Topic</button>
    </form>
  );
};

export default TopicInput;