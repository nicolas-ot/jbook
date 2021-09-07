import { useEffect, useRef } from 'react';
import MonacoEditor, { OnMount } from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
// parser is to format advanced javascript codes that might have ES2015, 2016 etc.

// import j from "jscodeshift"

import './code-editor.scss';
import './syntax.css';

interface CodeEditorProps {
  code: string;
  onChange(code: string | undefined): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ onChange, code }) => {
  const editorRef = useRef<any>();

  const onMountEditor: OnMount = (editor) => {
    // Minimal Babel setup for React JSX parsing:

    editorRef.current = editor;
    editor.onDidChangeModelContent(() => {
      onChange(editor.getValue());
    });

    editor.setValue(code);
  };

  const onFormatClick = () => {
    const unformatted = editorRef.current.getValue();

    const formatted = prettier
      .format(unformatted, {
        parser: 'babel',
        plugins: [parser],
        useTabs: false,
        semi: true,
        singleQuote: true,
      })
      .replace(/\n$/, '');
    editorRef.current.setValue(formatted);
  };

  return (
    <div className='editor-wrapper'>
      <button
        className='button button-format is-primary is-small'
        style={{ float: 'right' }}
        onClick={onFormatClick}
      >
        Format
      </button>
      <MonacoEditor
        onMount={onMountEditor}
        // onChange={onChangeEditor}
        // value={code}
        language='javascript'
        theme='vs-dark'
        options={{
          tabSize: 2,
          minimap: { enabled: false },
          wordWrap: 'on',
          showUnused: false,
          folding: false,
          lineNumbersMinChars: 3,
          fontSize: 16,
          scrollBeyondLastLine: false,
          automaticLayout: true,
        }}
      ></MonacoEditor>
    </div>
  );
};

export default CodeEditor;
