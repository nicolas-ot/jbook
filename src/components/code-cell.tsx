import { useState, useEffect } from 'react';
import 'bulmaswatch/superhero/bulmaswatch.min.css';

import bundler from '../bundler';
import CodeEditor from '../components/code-editor';
import Preview from '../components/preview';
import Resizable from './resizable';

const CodeCell = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const timer = setTimeout(async () => {
      const result = await bundler(input);

      // setCode(result.outputFiles[0].text);
      // this is the code that has been built by the plugins and esbuild

      // eval(result.outputFiles[0].text);
      // naive approach on executing files in the browser, because it can be harmful
      // for example, when the text is document.body.innerHTML = "";

      // console.log(iframe.current.contentWindow);
      // this is the same as parent.postMessage in console
      // this is to trigger the message event listener, which will then execute the eval
      // is also a way to send the text to the iframe, even though the access are not allowed
      setCode(result.code);
      setError(result.err);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  // const html = `
  //   <script>
  //     ${code}
  //   </script>
  // `;
  // this is dangerous when the input is (<script>...</script>)

  return (
    <Resizable direction='vertical'>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <CodeEditor
          initialValue='tes'
          onChange={(code: string) => {
            setInput(code);
            // onClick(e.target.value);
          }}
        ></CodeEditor>
        <Preview code={code} errorMessage={error} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
