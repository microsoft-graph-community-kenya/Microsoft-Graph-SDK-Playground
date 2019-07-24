import React, { useState } from 'react';

import './App.css';
import { Console } from './console';
import { Editor } from './editor';

function App() {
  const [response, setResponse] = useState('');
  const [code, setCode] = useState(`Console.WriteLine("Hello, World!");`);

  async function handleRunCode(codeFromEditor: string) {
    setResponse('Compiling...');
    const resp = await fetch('https://localhost:44375/api/playground', {
      method: 'POST',
      body: codeFromEditor,
    });

    const text = await resp.text();
    setResponse(text);
  }

  function handleSetCode(codeFromEditor: string): void {
    setCode(codeFromEditor);
  }

  return (
    <div className='App'>
      <div className='code-editor'>
        <div className='toolbar'>
          <p style={{ paddingLeft: 10 }}>Code Editor</p>
          <div className='run-btn'>
            <button onClick={() => handleRunCode(code)}>Run</button>
          </div>
        </div>
        <Editor onCode={handleSetCode} code={code} />
      </div>
      <div className='console'>
        <div className='toolbar'>
          <p style={{ paddingLeft: 10 }}>Console</p>
        </div>
        <Console response={response}/>
      </div>
    </div>
  );
}

export default App;
