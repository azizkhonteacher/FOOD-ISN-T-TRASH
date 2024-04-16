const stayLoop = document.getElementById("s-l-form");
const input_1 = document.getElementById("s-l-f-input");

let todos = JSON.parse(localStorage.getItem("list"))
  ? JSON.parse(localStorage.getItem("list"))
  : [];

function setTodos() {
  localStorage.setItem("list", JSON.stringify(todos));
}

stayLoop.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("salom");
  const a = input_1.value.trim();
  if (!a) {
    console.log("ma'lumot yo'q");
  } else {
    todos.push({a})
    setTodos()
  }

  input_1.value = "";
});
