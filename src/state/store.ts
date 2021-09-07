import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { ActionType } from './action-types';

export const store = createStore(reducers, {}, applyMiddleware(thunk));

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: 'second',
    type: 'code',
  },
});

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'text',
  },
});

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: 'first',
    type: 'code',
  },
});

store.dispatch({
  type: ActionType.UPDATE_CELL,
  payload: {
    id: 'first',
    content:
      "import React from 'react';\nimport ReactDOM from 'react-dom';\n\nconst App = () => {\n\treturn('Hello There!');\n};\n\nshow(<App />);\n// ReactDOM.render(<App />, document.querySelector('#root'));\n",
  },
});

store.dispatch({
  type: ActionType.UPDATE_CELL,
  payload: {
    id: 'second',
    content: 'show(<App />);',
  },
});

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'text',
  },
});
