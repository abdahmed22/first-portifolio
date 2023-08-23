const frontEnd = document.getElementById('Front-End');
const backEnd = document.getElementById('Back-End');
const logicDesign = document.getElementById('Logic Design');
const All = document.getElementById('All');

const ALU = document.getElementById('ALU');
const ProcessScheduler = document.getElementById('ProcessScheduler');
const PaintForKids = document.getElementById('PaintForKids');
const TicTacToe = document.getElementById('TicTacToe');

const elements = [ALU, ProcessScheduler, PaintForKids, TicTacToe];
frontEnd.addEventListener('click', () => {
    appear();
    document.getElementById('ALU').style.display = "none";
    document.getElementById('PaintForKids').style.display = "none";
    document.getElementById('ProcessScheduler').style.display = "none";
})
backEnd.addEventListener('click', () => {
    appear();
    document.getElementById('TicTacToe').style.display = "none";
    document.getElementById('ALU').style.display = "none";
})
logicDesign.addEventListener('click', () => {
    appear();
    document.getElementById('TicTacToe').style.display = "none";
    document.getElementById('ProcessScheduler').style.display = "none";
    document.getElementById('PaintForKids').style.display = "none";
})
All.addEventListener('click', () => {
    document.getElementById('TicTacToe').style.display = "block";
    document.getElementById('ProcessScheduler').style.display = "block";
    document.getElementById('PaintForKids').style.display = "block";
    document.getElementById('ALU').style.display = "block";
})
appear = () => {
        document.getElementById('TicTacToe').style.display = "block";
        document.getElementById('ProcessScheduler').style.display = "block";
        document.getElementById('PaintForKids').style.display = "block";
        document.getElementById('ALU').style.display = "block";
}