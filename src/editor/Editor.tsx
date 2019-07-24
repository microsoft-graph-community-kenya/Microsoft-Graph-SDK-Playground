import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';

interface IEditorProps {
    onCode: Function;
    code: string;
}

export function Editor({ onCode, code }: IEditorProps) {
    function editorDidMount(editor: any) {
        editor.focus();
    }

    function onChange(newValue: any, e: any) {
        onCode(newValue);
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
