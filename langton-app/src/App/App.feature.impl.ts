import * as api from 'gherkin-specs-api';
import 'jest-enzyme';

import * as Adapter from 'enzyme-adapter-react-16';
import { configure, ReactWrapper } from 'enzyme';
import { getWrapper, wait } from './App.feature.tools';
import { DATE_FORMAT } from './App.container';
import * as moment from 'moment';
import { AppBar } from 'material-ui';

// tslint:disable-next-line:no-any
configure({ adapter: new Adapter() });
jest.useFakeTimers();

let wrapper: ReactWrapper;
let firstTime: string;

api.featureSteps(/Show current date and time/)
    .given(/I am on the application/, () => {
        wrapper = getWrapper();
        firstTime = wrapper.find(AppBar).text().valueOf();
    })
    .when(/I wait some ticks/, () => {
        wait(1000);
        jest.runOnlyPendingTimers();
    })
    .then(/Time as changed/, async () => {
        let newTime = wrapper.find(AppBar).text();
        newTime = newTime.replace('Today : ', '');
        firstTime = firstTime.replace('Today : ', '');

        expect(moment(newTime, DATE_FORMAT).diff(moment(firstTime, DATE_FORMAT))).toEqual(1000);
    });