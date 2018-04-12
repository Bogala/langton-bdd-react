import 'jest-enzyme';

import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { configure, shallow } from 'enzyme';

import App from './App';
import { AppBar } from 'material-ui';

import Grid from './Grid';

// tslint:disable-next-line:no-any
configure({ adapter: new Adapter() });

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('Should have an AppBar with title binded with props', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(AppBar)).toHaveLength(1);
  expect(wrapper.find(AppBar).props().title).toEqual('Welcome to React');
});

test('Should have a Grid', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Grid).length).toBe(1);
});