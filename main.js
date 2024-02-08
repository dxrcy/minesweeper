function init() {
    State.random_grid();
    render_grid();
}

const WIDTH = 15;
const HEIGHT = 10;

class State {
    static grid = [];

    static random_grid() {
        let rows = [];
        for (let y = 0; y < HEIGHT; y++) {
            let cells = [];
            for (let x = 0; x < WIDTH; x++) {
                let values = [0, 1, 2, 3, 4, 5, -1];
                let index = Math.floor(Math.random() * values.length);
                let value = values[index]

                let hidden = Math.random() > 0.5;

                cells.push(new Tile(value, hidden));
            }
            rows.push(cells);
        }

        this.grid = rows;
    }
}

class Tile {
    constructor(value, hidden) {
        this.value = value;
        this.hidden = hidden;
    }
}

function render_grid() {
    let rows = "";

    for (let row of State.grid) {
        let cells = "";

        for (let cell of row) {
            let letter = cell.value;
            if (letter == -1) {
                letter = "X";
            }

            let hidden = cell.hidden ? "hidden" : "shown";

            cells += `
                <div class="cell value-${letter} ${hidden}">
                    ${letter}
                </div>
            `;
        }

        rows += `
            <div class="row">
                ${cells}
            </div>
        `;
    }

    document.querySelector("#grid").innerHTML = `
        ${rows}
    `;
}
