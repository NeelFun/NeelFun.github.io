document.addEventListener('DOMContentLoaded', function () {
    const board = document.getElementById('board');
    const numRows = 10;
    const numCols = 10;

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = i;
            cell.dataset.col = j;
            board.appendChild(cell);
        }
    }

    const cells = document.querySelectorAll('.cell');
    let currentPlayer = 1;

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (cell.classList.contains('player')) return;

            if (cell.classList.contains('selected')) {
                cell.classList.remove('selected');
            } else {
                const selectedCell = document.querySelector('.selected');
                if (selectedCell) selectedCell.classList.remove('selected');
                cell.classList.add('selected');
            }
        });
    });
});
