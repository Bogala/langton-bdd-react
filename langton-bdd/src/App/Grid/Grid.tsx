import * as React from 'react';

interface GridProps {
    cells: Array<Array<boolean>>;
}

interface LineProps {
    cells: Array<boolean>;
    lIndex: number;
}

const Line: React.SFC<LineProps> = ({ cells, lIndex }) => (
    <tr>
        {
            cells.map((cell, index) => (
                <td key={`cell_${lIndex}_${index}`}>
                    <div className="box">
                        <div className="content" />
                    </div>
                </td>
            ))
        }
    </tr>
);

const Grid: React.SFC<GridProps> = ({ cells }) => (
    <table>
        <tbody>
            {
                cells.map((line, index) => (
                    <Line cells={line} lIndex={index} key={`line_${index}`} />
                ))
            }
        </tbody>
    </table>
);

export default Grid;