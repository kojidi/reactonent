import React from 'react';
import ReactDOM from 'react-dom/client';
import {Button, Card} from './reactonent'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Button />
      <Card />
    </div>
  </React.StrictMode>
);