import './text-editor.scss';
import MDEditor from '@uiw/react-md-editor';
import { useRef, useState, useEffect } from 'react';

const TextEditor: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState('# Header');

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (ref.current && e.target && ref.current.contains(e.target as Node))
        return;

      setEditing(false);
    };

    document.addEventListener('click', listener, { capture: true });

    return () => {
      document.removeEventListener('click', listener, { capture: true });
    };
  }, []);

  if (editing) {
    return (
      <div className='text-editor' ref={ref}>
        <MDEditor
          value={value}
          onChange={(v) => {
            setValue(v || '');
          }}
        ></MDEditor>
      </div>
    );
  }
  return (
    <div className='text-editor card'>
      <div
        className='card-content'
        onClick={() => {
          setEditing(true);
        }}
      >
        <MDEditor.Markdown source={value}></MDEditor.Markdown>
      </div>
    </div>
  );
};

export default TextEditor;
