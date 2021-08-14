class TicTacToe {
    constructor() {
        this.symbol = 'x';
        this.storage = [];
        this.markIndex = [];
        this.winner = null;

        this.row0 = [null, null, null];
        this.row1 = [null, null, null];
        this.row2 = [null, null, null];

        this.col0 = [null, null, null];
        this.col1 = [null, null, null];
        this.col2 = [null, null, null];
    }

    getCurrentPlayerSymbol() {
        return this.symbol;
    }

    nextTurn(rowIndex, colIndex) {
        for (let i = 0; i < this.markIndex.length; i++) {
            if (this.markIndex[i] === `${rowIndex}${colIndex}`) {
                return;
            }
        }

        this.storage.push([this.symbol, rowIndex, colIndex]);
        this.markIndex.push(`${rowIndex}${colIndex}`);

        if (rowIndex === 0) {
            this.row0[colIndex] = this.getCurrentPlayerSymbol();
        } else if (rowIndex === 1) {
            this.row1[colIndex] = this.getCurrentPlayerSymbol();
        } else if (rowIndex === 2) {
            this.row2[colIndex] = this.getCurrentPlayerSymbol();
        }

        if (colIndex === 0) {
            this.col0[rowIndex] = this.getCurrentPlayerSymbol();
        } else if (colIndex === 1) {
            this.col1[rowIndex] = this.getCurrentPlayerSymbol();
        } else if (colIndex === 2) {
            this.col2[rowIndex] = this.getCurrentPlayerSymbol();
        }

        (this.symbol === 'x') ? this.symbol = 'o' : this.symbol = 'x';
    }

    isFinished() {
        if (this.row0[0] === 'x' && this.row1[1] === 'x' && this.row2[2] === 'x') {
            this.winner = 'x';
        } else if (this.row0[0] === 'o' && this.row1[1] === 'o' && this.row2[2] === 'o') {
            this.winner = 'o';
        } else if (this.row0[2] === 'x' && this.row1[1] === 'x' && this.row2[0] === 'x') {
            this.winner = 'x';
        } else if (this.row0[2] === 'o' && this.row1[1] === 'o' && this.row2[0] === 'o') {
            this.winner = 'o';
        }

        if (this.row0.every((v) => { return v === 'x'; })) {
            this.winner = 'x';
        } else if (this.row0.every((v) => { return v === 'o'; })) {
            this.winner = 'o';
        }

        if (this.row1.every((v) => { return v === 'x'; })) {
            this.winner = 'x';
        } else if (this.row1.every((v) => { return v === 'o'; })) {
            this.winner = 'o';
        }

        if (this.row2.every((v) => { return v === 'x'; })) {
            this.winner = 'x';
        } else if (this.row2.every((v) => { return v === 'o'; })) {
            this.winner = 'o';
        }

        if (this.col0.every((v) => { return v === 'x'; })) {
            this.winner = 'x';
        } else if (this.col0.every((v) => { return v === 'o'; })) {
            this.winner = 'o';
        }

        if (this.col1.every((v) => { return v === 'x'; })) {
            this.winner = 'x';
        } else if (this.col1.every((v) => { return v === 'o'; })) {
            this.winner = 'o';
        }

        if (this.col2.every((v) => { return v === 'x'; })) {
            this.winner = 'x';
        } else if (this.col2.every((v) => { return v === 'o'; })) {
            this.winner = 'o';
        }

       return (this.noMoreTurns() || !!this.winner);
    }

    getWinner() {        
        return (this.isFinished()) ? this.winner : null; 
    }

    noMoreTurns() {
        return (this.storage.length === 9) ? true : false;
    }

    isDraw() {
        return (this.noMoreTurns() && !this.getWinner()) ? true : false;
    }

    getFieldValue(rowIndex, colIndex) {
        let { storage } = this;
        let mark = null;

        for (let i = 0; i < storage.length; i++) {
            if (storage[i][0] === 'x' && storage[i][1] === rowIndex && storage[i][2] === colIndex) {
                mark = 'x';
            } else if (storage[i][0] === 'o' && storage[i][1] === rowIndex && storage[i][2] === colIndex) {
                mark = 'o';
            }
        }

        return mark;
    }
}

module.exports = TicTacToe;
