
import { fetchGitAPI } from "../fetch-config/index.js";
import { state } from "../state/index.js";
import { debounce } from "../debounce/index.js"
import { createLi } from "../createLi/index.js";
import { createButton } from "../createButton/index.js"
import { addRepository } from "../addRepo/index.js";

export const searcherListener = () => {
    const debounceData = debounce(fetchGitAPI, 1000);

    const mainWrapper = document.querySelector(".main__wrapper");
    const searcher = document.querySelector(".main__search");
    const ulSearcher = document.createElement('ul');
    const ulRepos = document.createElement('ul');
    

    ulSearcher.classList.add('searcher__select-items');
    ulRepos.classList.add('repos__select-items');

    const { getStateData, setStateData } = state;

    searcher.addEventListener('input', ({ target }) => {
        const { value } = target

        try {
            debounceData(`/search/repositories?q=${value}&per_page=5`, { method: 'GET' }, async (cb) => {
                const data = await cb.json();
                setStateData(data.items);
                ulSearcher.textContent = '';
                mainWrapper.insertBefore(ulSearcher, mainWrapper.childNodes[2]);
                mainWrapper.appendChild(ulRepos);
                


                getStateData().map((elem) => {
                    const button = createButton(elem.name, 'searcher__select-item-button', elem.id)
                    const li = createLi(button, 'searcher__select-item', 'tag');
                    ulSearcher.append(li);
                })
                addRepository();
            });

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    })
}