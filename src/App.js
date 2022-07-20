import React from 'react';
import './App.css';
import MultiStepper from './components/MultiStepper';
import MyErrorBoundary from './ErrorBoundry/MyErrorBoundry';

function App() {
  return (
    <MyErrorBoundary>
      <MultiStepper />
    </MyErrorBoundary>
  );
}

export default App;
