export const createLi = (tag, content, className, id = '', isTag = 'no') => {
    const elem = document.createElement(tag);
    elem.classList.add(className);
    elem.setAttribute("id", id);
    elem.type = type

    if (isTag === 'tag') {
        elem.appendChild(content)
    } else {
        elem.textContent = content;
    }
    return elem;
} 