import 'jest-enzyme';

import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import { configure, mount } from 'enzyme';

import Grid from './Grid';

// tslint:disable-next-line:no-any
configure({ adapter: new Adapter() });

describe('My Grid', () => {
    test('Should exists with default values', () => {
        const wrapper = mount(<Grid />);
        expect(wrapper.length).toBe(1);
        expect(wrapper.find('tr').length).toBe(21);
        expect(wrapper.find('td').length).toBe(441);
    });

    test('Should have a table binded to cells prop', () => {
        const cells = [[false, false, false], [false, false, false], [false, false, false]];
        const wrapper = mount(<Grid cells={cells} />);
        expect(wrapper.find('tr').length).toBe(3);
        expect(wrapper.find('td').length).toBe(9);
    });

    test('Should have an ant at 10.10', () => {
        const wrapper = mount(<Grid />);
        wrapper.find('tr').forEach((line, y) => {
            line.find('td').forEach((cell, x) => {
                const expectedCount = (x === 10 && y === 10) ? 1 : 0;
                expect(cell.find('.ant').length).toBe(expectedCount);
            });
        });
    });
});