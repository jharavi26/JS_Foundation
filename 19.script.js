let res = document.querySelector(".code");
console.log(res.innerHTML);
console.log(res.textContent);

let newPara = document.createElement('p');
newPara.textContent = "NodeJS"
res.appendChild(newPara);

let newPara1 = document.createElement('p');
newPara1.textContent = "NextJS";
res.insertAdjacentElement('afterend', newPara1);

res.removeChild(newPara);

let head1 = document.querySelector("#art");
head1.style.color = "red"; 
