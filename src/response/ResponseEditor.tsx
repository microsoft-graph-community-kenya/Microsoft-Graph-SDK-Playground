import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';

export function ResponseEditor() {
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
            console.log(editorAction);
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
                value={code}
            />
        </div>
    );
}
