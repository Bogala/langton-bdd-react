import { Grid, reducer } from '.';
import { Action } from 'redux';

describe('Langton reducer', () => {
    describe('Step1: initialization', () => {
        test('Should initialize with the good type', () => {
            const actual = reducer(undefined, { type: null } as Action);
            expect(actual as Grid).toBeTruthy();
        });

        test('Should have 21x21xfalse grid on init', () => {
            const actual = reducer(undefined, { type: null } as Action);
            expect(actual.cells).toBeDefined();
            expect(actual.cells.length).toBe(21);
            actual.cells.forEach(line => {
                expect(line.length).toBe(21);
                line.forEach(cell => {
                    expect(cell).toBe(false);
                });
            });
        });

        test('Should have an ant at the middle of the grid', () => {
            const actual = reducer(undefined, { type: null } as Action);
            expect(actual.cells).toBeDefined();
            expect(actual.ant).toBeDefined();
            expect(actual.ant.lines).toBe((actual.cells.length - 1) / 2);
            expect(actual.ant.cells).toBe((actual.cells[0].length - 1) / 2);
        });
    });
});