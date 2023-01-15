export let userTurn = true;

export const clickHandler = (event: Event) => {
    if (userTurn) {
        userTurn = false;
        const colNumber = Number((event.currentTarget as any).dataset.col);
        const el = document.getElementById(`square-${colNumber}`);
        el.classList.add('rotate-left');
    }
}