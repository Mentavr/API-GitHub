import { state } from "../state/index.js";

export const deleteRepo = () => {
    const buttons = document.querySelectorAll('.repos__button-close');
    const { deleteRepo } = state;
    const ulRepos = document.querySelector('.repos__select-items');

    buttons.forEach(button => {
        button.addEventListener('click', ({ target }) => {
            const id = target.getAttribute("id");

            const liNode = Array.from(document.querySelectorAll('.repos__select-item')).find(elem => {
                const buttonInsideLi = elem.querySelector(`[id="${id}"]`);
                return buttonInsideLi && buttonInsideLi.getAttribute("id") === id;
            });

            if (liNode) {
                ulRepos.removeChild(liNode);
                deleteRepo(id);
            }
        });
    });
};
