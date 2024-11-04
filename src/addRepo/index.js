import { createButton } from "../createButton/index.js";
import { createLi } from "../createLi/index.js";
import { createP } from "../createP/index.js";
import { deleteRepo } from "../deleteRepo/index.js";
import { state } from "../state/index.js";

export const addRepository = () => {
    const mainWrapper = document.querySelector(".main__wrapper");
    const ulRepos = document.querySelector('.repos__select-items');
    const buttons = document.querySelectorAll('.searcher__select-item-button');
    const searcher = document.querySelector(".main__search");
    const ulSearcher = document.querySelector('.searcher__select-items');


    const { addNewRepo, getElemById, setStateData } = state;

    buttons.forEach(button => {
        button.addEventListener('click', ({ target }) => {
            const id = target.getAttribute("id");
            addNewRepo(id);

            const stateRepo = getElemById(id);
            const div = document.createElement('div');
            div.classList.add('repos__button-content-wrapper')

            const name = createP(`Name: ${stateRepo.name}`, 'repos__name');
            const owner = createP(`Owner: ${stateRepo.owner.login}`, 'repos__owner');
            const stars = createP(`Stars: ${stateRepo.stargazers_count}`, 'repos__stars');
            const img = document.createElement('img');
            img.src = './imgs/svg/close.svg';
            img.alt = 'Удалить репозиторий';
            img.setAttribute("id", id);

            const closeButton = createButton(img, 'repos__button-close', 'close', 'tag');

            div.appendChild(name);
            div.appendChild(owner);
            div.appendChild(stars);


            const button = createButton(div, 'repos__select-item-button', id, 'tag');
            const li = createLi(button, 'repos__select-item', 'tag');

            button.appendChild(closeButton);

            ulRepos.appendChild(li)
            searcher.value = '';
            setStateData([]);
    
            mainWrapper.removeChild(ulSearcher);

            deleteRepo();
        });
    });
};