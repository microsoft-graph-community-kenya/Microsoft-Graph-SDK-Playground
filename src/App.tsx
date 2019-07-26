import React, { SyntheticEvent, useState } from 'react';

import './App.css';
import { Console } from './console';
import { Editor } from './editor';

const languages = {
  java: {
    snippet: `User user = graphClient.me()
  .buildRequest()
  .get();

System.out.println(user.displayName);
      `,
    url: 'http://51.105.174.176/api/playground/java',
  },
  csharp: {
    snippet: `var user = await graphClient.Me
  .Request()
  .GetAsync();

Console.WriteLine(user.DisplayName);
      `,
    url: 'http://51.105.174.176/api/playground/csharp',
  },
};

function App() {
  const [response, setResponse] = useState('');
  const [code, setCode] = useState(languages.csharp.snippet);
  const [language, setLanguage] = useState(languages.csharp);

  async function handleRunCode() {
    setResponse('Compiling ...');
    const resp = await fetch(language.url, {
      method: 'POST',
      body: code,
    });

    const text = await resp.text();
    setResponse(text);
  }

  function handleSetCode(codeFromEditor: string): void {
    console.log(codeFromEditor);
    setCode(codeFromEditor);
  }

  function handleSelect(event: any): void {
    const lang = event.target.value;
    setLanguage((languages as any)[lang]);
    setCode((languages as any)[lang].snippet);
  }

  return (
    <div className='App'>
      <div className='code-editor'>
        <div className='toolbar'>
          <p style={{ paddingLeft: 10 }}>Code Editor</p>
          <div className='run-btn'>
            <select onChange={(event) => handleSelect(event)}>
              <option value='csharp'>C#</option>
              <option value='java'>Java</option>
            </select>
            <button onClick={() => handleRunCode()}>Run</button>
          </div>
        </div>
        <Editor onCode={handleSetCode} code={code} />
      </div>
      <div className='console'>
        <div className='toolbar'>
          <p style={{ paddingLeft: 10 }}>Console</p>
        </div>
        <Console response={response} />
      </div>
    </div>
  );
}

export default App;
