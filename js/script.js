let table = document.querySelector(".tbody");
let addBtn = document.querySelector(".addBtn");
let deleteBtn = document.querySelector(".deleteBtn");




async function GetData() {
    let product = await fetch("https://jsonplaceholder.typicode.com/comments");
    let result = await product.json();
    result.forEach(element => {
        table.innerHTML += `  <tr>
        
        <td>${element.postId}</td>
        <td>${element.name}</td>
        <td>${element.email}</td>
        <td>${element.body}</td>
        <td><i class="fa-solid fa-trash delete" style="cursor:pointer"></i></td>
      </tr>`

        addBtn.classList.add("disabled")
        let dlts = document.querySelectorAll(".delete")

        dlts.forEach(dlt => {
            dlt.addEventListener("click", function () {
                this.parentNode.parentNode.remove();
            })
        });
    });
}


function DeleteData() {
    table.innerHTML = "";
    addBtn.classList.remove("disabled")

}

deleteBtn.addEventListener("click", DeleteData);
addBtn.addEventListener("click", GetData);

// span.addEventListener("click", function(){
//      this.parentNode.remove();
// })
