import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';

export function Editor() {
    const [code, setCode] = useState('// type your code here');

    function editorDidMount(editor: any) {
        editor.focus();
    }

    return (
        <div>
            <MonacoEditor
                width={800}
                height={600}
                editorDidMount={editorDidMount}
                language='csharp'
                value={code}
            />
        </div>
    );
}
