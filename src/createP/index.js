export const createP = (content, className) => {
    const p = document.createElement('p');
    p.classList.add(className);
    p.textContent = content;
    return p;
}