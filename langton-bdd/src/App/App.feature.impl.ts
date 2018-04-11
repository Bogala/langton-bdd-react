import * as api from 'gherkin-specs-api';
import 'jest-enzyme';

import * as Adapter from 'enzyme-adapter-react-16';
import { configure, ReactWrapper } from 'enzyme';
import { getWrapper, wait } from './App.feature.tools';
import { DATE_FORMAT } from './App.container';
import * as moment from 'moment';

// tslint:disable-next-line:no-any
configure({ adapter: new Adapter() });
jest.useFakeTimers();

let wrapper: ReactWrapper;
let firstTime: string;

api.featureSteps(/Langton ant workspace/)
    .given(/I am on the application/, () => {
        wrapper = getWrapper();
        firstTime = wrapper.find('h2').text().valueOf();
    })
    .when(/I wait some ticks/, () => {
        wait(1000);
        jest.runOnlyPendingTimers();
    })
    .then(/Time as changed/, async () => {
        let newTime = wrapper.find('h2').text();
        newTime = newTime.replace('Today : ', '');
        firstTime = firstTime.replace('Today : ', '');

        expect(moment(newTime, DATE_FORMAT).diff(moment(firstTime, DATE_FORMAT))).toEqual(1000);
    })
    .when(/I launch app/, () => {
        jest.clearAllTimers();
        wrapper = getWrapper();
    })
    .then(
        /I have a table with (.*) lines, each line have (.*) cells and my ant is at the middle/,
        (lines: number, cells: number) => {
            // Middle coordinates
            const antX = (cells - 1) / 2;
            const antY = (lines - 1) / 2;

            expect(wrapper.find('tr').length).toBe(21);
            wrapper.find('tr').forEach((line, y) => {
                expect(wrapper.find('td').length).toBe(21);
                line.find('td').forEach((cell, x) => {
                    const expectedCount = (y === antY && x === antX) ? 1 : 0;
                    expect(cell.find('.ant').length).toBe(expectedCount);
                });
            });
        }
    );