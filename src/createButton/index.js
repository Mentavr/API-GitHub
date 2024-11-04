export const createButton = (content, className, id, isTag = 'no', type = 'button') => {
    const button = document.createElement('button');
    button.classList.add(className);
    button.setAttribute("id", id);
    button.type = type

    if (isTag === 'tag') {
        button.appendChild(content)
    } else {
        button.textContent = content;
    }
    return button;
}