// Save user data on registration
document
  .getElementById("registerForm")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();
    const user = {
      name: document.getElementById("name").value,
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      skills: document.getElementById("skills").value,
      password: document.getElementById("password").value,
    };
    localStorage.setItem("studentUser", JSON.stringify(user));
    window.location.href = "dashboard.html";
  });

// Load user data on dashboard
function loadDashboard() {
  const user = JSON.parse(localStorage.getItem("studentUser"));
  if (user) {
    document.getElementById("userName").textContent = user.name;
    document.getElementById("userEmail").textContent = user.email;
    document.getElementById("userSkills").textContent = user.skills;
  }
}

// Navigation switch
function showSection(sectionId) {
  const sections = ["profileSection", "blogSection", "searchSection"];
  sections.forEach((id) => {
    document.getElementById(id).style.display =
      id === sectionId ? "block" : "none";
  });
}

// Blog post function
function postBlog() {
  const blogText = document.getElementById("blogInput").value;
  const blogDiv = document.createElement("div");
  blogDiv.textContent = blogText;
  document.getElementById("blogDisplay").appendChild(blogDiv);
  document.getElementById("blogInput").value = "";
}
