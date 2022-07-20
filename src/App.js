import React from 'react';
import './App.css';
import MultiStepper from './components/MultiStepper';
import MyErrorBoundary from './ErrorBoundry/MyErrorBoundry';

function App() {
  return (
    <div className="App">
        <MyErrorBoundary>
          <MultiStepper />
        </MyErrorBoundary>
    </div>
  );
}

export default App;
