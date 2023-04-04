import React from 'react';
import { Hello } from './Hello';
import { Info } from './Info';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
    <Hello />
    <Info />
  </div>
);
