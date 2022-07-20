import React from 'react';
import './App.css';
import MultiStepper from './components/MultiStepper';
import MyErrorBoundary from './ErrorBoundry/MyErrorBoundry';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="sm">
        <MyErrorBoundary>
          <MultiStepper />
        </MyErrorBoundary>
      </Container>
    </div>
  );
}

export default App;
