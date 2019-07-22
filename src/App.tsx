import React from 'react';

import './App.css';
import { Editor } from './editor';
import { ResponseEditor } from './response';

function App() {
  return (
    <div className='App'>
      <div className='code-editor'>
        <div className='toolbar'>
          <p style={{ paddingLeft: 10 }}>Code Editor</p>
          <div className='run-btn'>
            <button>Run</button>
          </div>
        </div>
        <Editor />
      </div>
      <div className='response-editor'>
        <div className='toolbar'>
          <p style={{ paddingLeft: 10 }}>Response</p>
        </div>
        <ResponseEditor />
      </div>
    </div>
  );
}

export default App;
