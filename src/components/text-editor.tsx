import './text-editor.scss';
import MDEditor from '@uiw/react-md-editor';
import { useRef, useState, useEffect } from 'react';
import { Cell } from '../state';
import { useActions } from '../hooks/use-actions';

interface TextEditorProps {
  cell: Cell;
}

const TextEditor: React.FC<TextEditorProps> = ({ cell }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [editing, setEditing] = useState(false);

  const { updateCell } = useActions();

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
          value={cell.content}
          onChange={(v) => {
            updateCell(cell.id, v || '');
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
        <MDEditor.Markdown
          source={cell.content || 'Click to edit'}
        ></MDEditor.Markdown>
      </div>
    </div>
  );
};

export default TextEditor;
