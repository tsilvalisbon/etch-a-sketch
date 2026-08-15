let mainDiv = document.querySelector("#main-div");

let i = 0;
while(i < 16 * 16)
{
    const div = document.createElement("div");
    div.classList.add('grid-item');
    mainDiv.appendChild(div);
    i++;
}