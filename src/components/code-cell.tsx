import { useEffect } from 'react';
import './code-cell.css';

import CodeEditor from '../components/code-editor';
import Preview from '../components/preview';
import Resizable from './resizable';
import { Cell } from '../state';
import { useActions } from '../hooks/use-actions';
import { useTypedSelector } from '../hooks/use-typed-selector';
import { useCumulativeCode } from '../hooks/use-cumulative-code';

interface CodeCellProps {
  cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const { updateCell, createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundles[cell.id]);
  const cumulativeCode = useCumulativeCode(cell.id);

  useEffect(() => {
    if (!bundle) {
      createBundle(cell.id, cumulativeCode);
      return;
    }

    const timer = setTimeout(async () => {
      createBundle(cell.id, cumulativeCode);
    }, 750);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cumulativeCode, cell.id, createBundle]);

  // const html = `
  //   <script>
  //     ${code}
  //   </script>
  // `;
  // this is dangerous when the input is (<script>...</script>)
  // if (bundle) console.log(bundle.code);
  const preview =
    !bundle || bundle.loading ? (
      <div className='progress-cover'>
        <progress className='progress is-small is-primary' max='100'>
          Loading
        </progress>
      </div>
    ) : (
      <Preview code={bundle.code} err={bundle.err} />
    );
  return (
    <Resizable direction='vertical'>
      <div
        style={{
          height: 'calc(100% - 10px)',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <Resizable direction='horizontal'>
          <CodeEditor
            code={cell.content}
            onChange={(value: string) => updateCell(cell.id, value)}
          />
        </Resizable>
        <div className='progress-wrapper'>
          {/* {bundle && <Preview code={bundle.code} errorMessage={bundle.err} />} */}
          {preview}
        </div>
      </div>
    </Resizable>
  );
};

export default CodeCell;
