import ReactDOM from 'react-dom';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// import CodeCell from './components/code-cell';
import { Provider } from 'react-redux';
import { store } from './state';

import CellList from './components/cell-list';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* <CodeCell></CodeCell> */}
        <CellList></CellList>
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
