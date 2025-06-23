// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("formMsg");

  if (name === "" || email === "") {
    message.textContent = "Please fill in all fields.";
    message.style.color = "red";
  } else if (!email.includes("@")) {
    message.textContent = "Enter a valid email.";
    message.style.color = "red";
  } else {
    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
    document.getElementById("contactForm").reset();
  }
});

// To-Do List Logic
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskValue = taskInput.value.trim();

  if (taskValue === "") return;

  const li = document.createElement("li");
  li.textContent = taskValue;

  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}
