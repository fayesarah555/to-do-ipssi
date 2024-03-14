import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Include Routes here

import HomePage from './home';
import TaskDetailPage from './detail';

function App() {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks/:taskId" element={<TaskDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
