function showVisitorName() {
  let name = document.getElementById("visitorName").value;
  let welcomeMsg = document.getElementById("welcomeMsg");
  if (name.trim().length === 0) {
    welcomeMsg.innerHTML = "Welcome! 😊 Glad to have you here";
  } else {
    welcomeMsg.innerHTML = `Hey ${name} 👋 Glad to have you here!`;
  }
}

function toggleTheme() {
  let theme = document.getElementById("container");
  let themebtn = document.getElementById("themeBtn");

  if (themebtn.innerHTML === "Light") {
    theme.style.backgroundColor = "#2C3E50";
    theme.style.color = "#F8F9FA";
    themebtn.innerHTML = "Dark";
  } else {
    theme.style.backgroundColor = "#F8F9FA";
    theme.style.color = "#2C3E50";
    themebtn.innerHTML = "Light";
  }
}

function toggleSkillList() {
  let listSkill = document.getElementById("listSkill");
  let showListBtn = document.getElementById("showListBtn");

  if (showListBtn.innerHTML === "Hide Skills") {
    listSkill.style.display = "none";
    showListBtn.innerHTML = "Show Skills";
  } else {
    listSkill.style.display = "block";
    showListBtn.innerHTML = "Hide Skills";
  }
}

async function fetchGithubRepos() {
  let response = await fetch(
    "https://api.github.com/users/Ritikjagtap11/repos",
  );
  let data = await response.json();

  let table = document.getElementById("table");

  for (let iTmp = 0; iTmp < data.length; iTmp++) {
    let row = document.createElement("tr");
    let NameCol = document.createElement("td");
    let UrlCol = document.createElement("td");
    let aTag = document.createElement("a");

    const { name, html_url } = data[iTmp];

    table.appendChild(row);
    NameCol.innerHTML = name;
    row.appendChild(NameCol);

    row.appendChild(UrlCol);
    aTag.innerHTML = html_url;
    aTag.setAttribute("href", html_url);
    UrlCol.appendChild(aTag);
  }
}

fetchGithubRepos();

