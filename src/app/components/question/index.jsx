import React from 'react';

import QuestionControls from './questionControls';
import QuestionIndex from './questionIndex';
import QuestionStatement from './questionStatement';

export default function QuestionComponent() {
  return (
    <div>
      <QuestionIndex />
      <QuestionStatement />
      <QuestionControls />
    </div>
  );
}
