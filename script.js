const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const Container_p = document.createElement("p");
Container_p.textContent = "Hey i'm red !";
Container_p.style.color = "red";

const Container_h3 = document.createElement("h3");
Container_h3.textContent = "I'm a blue h3 !"
Container_h3.style.color = "blue";

const ContainerChild = document.createElement("div");
ContainerChild.classList.add("child");
ContainerChild.style.borderWidth = "5px";
ContainerChild.style.borderColor = "black";
ContainerChild.style.borderStyle = "solid";
ContainerChild.style.backgroundColor = "pink";

const Child_h1 = document.createElement("h1");
Child_h1.textContent = "I'm in a div"

const Child_p = document.createElement("p");
Child_p.textContent = "ME TOO !";

ContainerChild.append(Child_h1, Child_p);
container.append(Container_p, Container_h3, ContainerChild);

const btn = document.querySelector("#btn");
btn.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "blue";
});
