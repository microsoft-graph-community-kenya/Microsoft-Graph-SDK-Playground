import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';

export function Editor() {
    const [code, setCode] = useState(`var hello = 'world'`);

    function editorDidMount(editor: any) {
        editor.focus();
    }

    function onChange(newValue: any, e: any) {
        setCode(newValue);
    }

    return (
        <div>
            <MonacoEditor
                width={800}
                height='90vh'
                editorDidMount={editorDidMount}
                onChange={onChange}
                language='csharp'
                value={code}
            />
        </div>
    );
}
