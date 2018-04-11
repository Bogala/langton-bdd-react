import 'jest-enzyme';

import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import { configure, mount } from 'enzyme';

import Grid from '.';

// tslint:disable-next-line:no-any
configure({ adapter: new Adapter() });

describe('Grid Stateless Component', () => {
    test('Should have a table binded to a Grid prop', () => {
        const cells = [[false, false], [false, false]];
        const wrapper = mount(<Grid cells={cells}/>);
        expect(wrapper.length).toBe(1);
        expect(wrapper.find('tr').length).toBe(2);
        expect(wrapper.find('td').length).toBe(4);
    });
});