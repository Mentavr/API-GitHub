export const createLi = (content, className, isTag = 'no') => {
    const li = document.createElement('li');
    li.classList.add(className);

    if (isTag === 'tag') {
        li.appendChild(content)
    } else {
        li.textContent = content;
    }
    return li
} 