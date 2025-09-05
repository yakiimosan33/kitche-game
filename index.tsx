
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Add error handling
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

console.log('index.tsx loaded');

// Wait for DOM to be ready
function initApp() {
  console.log('Initializing app...');
  
  const rootElement = document.getElementById('root');
  console.log('Root element:', rootElement);

  if (!rootElement) {
    console.error("Could not find root element");
    document.body.innerHTML = '<h1>Error: Could not find root element</h1>';
    return;
  }

  try {
    console.log('Creating React root...');
    const root = ReactDOM.createRoot(rootElement);
    console.log('Root created successfully');
    
    console.log('Rendering app...');
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log('App render called');
  } catch (error) {
    console.error('Error rendering app:', error);
    rootElement.innerHTML = `
      <div style="padding: 20px; background: #fee; color: #800; border: 1px solid #fcc;">
        <h1>Error Loading Application</h1>
        <pre>${error}</pre>
      </div>
    `;
  }
}

// Ensure DOM is loaded before initializing
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
