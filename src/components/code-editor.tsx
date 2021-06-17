// import { useRef } from "react";
import { useState } from 'react';
import MonacoEditor, { OnChange } from '@monaco-editor/react';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
// to format advanced javascript codes that might have ES2015, 2016 etc.

import './code-editor.scss';

interface CodeEditorProps {
  initialValue?: string;
  onChange(code: string | undefined): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialValue, onChange }) => {
  // const editorRef = useRef<any>();
  const [code, setCode] = useState<string>('');

  // const onMountEditor: OnMount = (editor) => {
  //   console.log(editor);
  // };

  const onChangeEditor: OnChange = (value) => {
    onChange(value);
    if (typeof value === 'string') setCode(value);
  };

  const onFormatClick = () => {
    const unformatted = code;

    const formatted = prettier
      .format(unformatted, {
        parser: 'babel',
        plugins: [parser],
        useTabs: false,
        semi: true,
        singleQuote: true,
      })
      .replace(/\n$/, '');

    setCode(formatted);
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
        // onMount={onMountEditor}
        onChange={onChangeEditor}
        value={code}
        language='javascript'
        theme='vs-dark'
        height='500px'
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
