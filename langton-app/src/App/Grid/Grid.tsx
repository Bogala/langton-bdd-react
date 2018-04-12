import * as React from 'react';

interface Coordinate {
    x: number;
    y: number;
}

interface LineProps {
    line: Array<boolean>;
    lineIndex: number;
    ant: Coordinate;
}

const Line: React.SFC<LineProps> = ({ line, lineIndex, ant }) => (
    <tr>
        {
            line.map((cell, index) => (
                <Cell 
                    key={`cell_${lineIndex}_${index}`} 
                    isAnt={(ant.x === index && ant.y === lineIndex)}
                />
            ))
        }
    </tr>
);

interface CellProps {
    isAnt: boolean;
}

const Cell: React.SFC<CellProps> = ({ isAnt }) => (
    <td>
        <div className="box">
            <div className={`content${isAnt ? ' ant' : ''}`} />
        </div>
    </td>
);

interface GridProps {
    cells?: Array<Array<boolean>>;
    ant?: Coordinate;
}

const Grid: React.SFC<GridProps> = ({ cells, ant }) => {
    if (!cells) {
        cells = new Array<Array<boolean>>(21)
            .fill(new Array(21))
            .map(() => new Array<boolean>(21).fill(false));
    }
    if (!ant) {
        ant = { x: 10, y: 10 } as Coordinate;
    }
    return (
        <table>
            <tbody>
                {
                    cells.map((line, index) => (
                        <Line ant={ant as Coordinate} line={line} lineIndex={index} key={`line_${index}`} />
                    ))
                }
            </tbody>
        </table>
    );
};

export default Grid;