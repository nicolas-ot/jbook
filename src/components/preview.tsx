import { directive } from 'jscodeshift';
import React, { useRef } from 'react';
import { useEffect } from 'react';

import './preview.scss';

interface PreviewProps {
  code: string;
  errorMessage: string;
}

const html = `
  <html>
    <head></head>
    <body>
      <div id="root"></div>
      <script>
      const handleError = (err) => {
        const root = document.querySelector('#root');
        root.innerHTML = '<div style="color: red;"><h4>Runtime Error</h4>' + err + '</div>';
        console.error(err);
      };

      window.addEventListener('error', (event) => {
        event.preventDefault();
        handleError(event.error);
      });

      window.addEventListener('message', (event) => {
        try {
          eval(event.data);
        } catch (err) {
          handleError(err);
        }
      }, false);
      </script>
    </body>
  </html>

  `;

const Preview: React.FC<PreviewProps> = ({ code, errorMessage }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.contentWindow.postMessage(code, '*');
  }, [code]);

  return (
    <div className='preview-wrapper'>
      <iframe
        ref={iframe}
        srcDoc={html}
        sandbox='allow-scripts'
        title='preview'
      ></iframe>
      {errorMessage && <div className='error-message'>{errorMessage}</div>}
    </div>
  );
};

export default Preview;
