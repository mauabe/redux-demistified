import React from 'react';
...
import configureStore from './configureStore';

const todos = [
  { id: 1, isDone: false, description: "write some docs" },
  ...
  { id: 6, isDone: false, description: "fix some bugs" }
];

const store = configureStore(todos);

ReactDOM.render(
  <App />,
  document.getElementById("root")
);