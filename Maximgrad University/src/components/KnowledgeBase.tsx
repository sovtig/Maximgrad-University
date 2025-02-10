import React from 'react';

const KnowledgeBase: React.FC<{ topics: string[] }> = ({ topics }) => {
  return (
    <div>
      <h2>Knowledge Base</h2>
      <ul>
        {topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default KnowledgeBase;