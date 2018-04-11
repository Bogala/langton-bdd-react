import { Action } from 'redux';

export interface Ant {
    lines: number;
    cells: number;
}

export interface Grid {
    cells: Array<Array<boolean>>;
    ant: Ant;
}

const initialState = () => ({
    cells: 
        new Array<Array<boolean>>(21)
            .fill(new Array(21))
            .map(() => new Array<boolean>(21).fill(false)),
    ant: {
        cells: 10,
        lines: 10
    } as Ant
});

export default (state: Grid = initialState(), action: Action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
};