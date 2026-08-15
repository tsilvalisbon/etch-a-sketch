let mainDiv = document.querySelector("#main-div");

function createGrid(size)
{
    mainDiv.replaceChildren();

    mainDiv.style.setProperty("--grid-size", size);
    let i = 0;
    while(i < size * size)
    {
        const div = document.createElement("div");
        div.classList.add('grid-item');
    
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "black";
        });
    
        mainDiv.appendChild(div);
        i++;
    }
}

resize.addEventListener("click", () => {
    const answer = prompt("Enter the grid size:", "16");
    if(answer === null)
        return;

    const size = Number(answer);
    if(!Number.isInteger(size) || size <= 0 || size > 100)
    {
        alert("Enter a integer between 1 and 100.");
        return ;
    }
    createGrid(size);
})

createGrid(16);