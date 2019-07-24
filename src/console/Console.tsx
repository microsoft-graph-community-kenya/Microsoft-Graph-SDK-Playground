import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';

interface IConsoleProps {
    response: string;
}
export function Console({ response }: IConsoleProps) {
    const [code, setCode] = useState(`{ "hello": "world" }`);

    function editorDidMount(editor: any) {
        const editorHasText = !!editor.getModel().getValue();

        if (editorHasText) {
            formatDocument(editor);
        }

        editor.onDidChangeModelContent(() => {
            formatDocument(editor);
        });
    }

    function formatDocument(editor: any) {
        const editorAction = editor.getAction('editor.action.formatDocument');
        if (editorAction) {
            editorAction.run();
        }
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
                language='json'
                value={response}
                options={{ renderLineHighlight: 'none' }}
            />
        </div>
    );
}
