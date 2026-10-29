//project

class Project {
  constructor(id, title, tech, description, link) {
    this.id = id;
    this.title = title;
    this.tech = tech;
    this.description = description;
    this.link = link;
  }

  getSummary() {
    return `${this.title} uses ${this.tech.join(", ")}. ${this.description}`;
  }
}

class FeaturedProject extends Project {
  constructor(id, title, tech, description, link, badge) {
    super(id, title, tech, description, link);
    this.badge = badge;
  }
}

const projectList = [
  new FeaturedProject(
    1,
    "Integrity Ingredient Analyser",
    ["React.js", "Firebase", "Gemini AI", "Vite"],
    "A web application that analyzes food ingredients from images using AI and helps users understand ingredient risks.",
    "https://aiintegrity.onrender.com/",
    "Popular",
  ),

  new FeaturedProject(
    2,
    "Wanderlust",
    ["Node.js", "Express.js", "MongoDB", "EJS", "Cloudinary", "MapTiler"],
    "An Airbnb-inspired web application for exploring accommodation listings and managing travel-related property listings.",
    "https://staynest-ame7.onrender.com/listings",
    "Popular",
  ),

  new FeaturedProject(
    3,
    "Nexora AI Docs",
    ["React.js", "Tailwind CSS", "FastAPI", "MongoDB", "Gemini AI", "Ollama"],
    "An AI-powered document application designed to help users interact with documents and obtain useful information through AI.",
    null,
    "AI Innovation",
  ),

  new Project(
    4,
    "Nexora AI Docs",
    ["React.js", "Tailwind CSS", "FastAPI", "MongoDB", "Gemini AI", "Ollama"],
    "An AI-powered document application designed to help users interact with documents and obtain useful information through AI.",
    null,
  ),

  new Project(
    5,
    "Tradium",
    ["MongoDB", "Express.js", "React.js", "Node.js"],
    "A MERN stack stock trading application designed to provide a user interface for exploring stocks and managing trading activities.",
    null,
  ),
];

// for (let iTmp = 0; iTmp < projectList.length; iTmp++) {
//     console.log(projectList[iTmp].getSummary());
// }


function projectListAdd(project = projectList) {
    let table = document.getElementById("project-data");
    let badgeCard = document.querySelector(".footer-card");

    // Clear old table rows before displaying results
    table.innerHTML = "";

    // Clear old badges before adding them again
    // if (badgeCard) {
    //     badgeCard.innerHTML = "";
    // }

    for (let iTmp = 0; iTmp < project.length; iTmp++) {
        let row = document.createElement("tr");
        let titleCol = document.createElement("td");
        let techCol = document.createElement("td");
        let descCol = document.createElement("td");
        let linkCol = document.createElement("td");
        let aTag = document.createElement("a");
        let badgeShow = document.createElement("p");

        const { title, tech, description, link, badge } = project[iTmp];

        // Display badge
        badgeShow.textContent = badge ?? "Project";
        if (badgeCard) {
            badgeCard.appendChild(badgeShow);
        }

        // Display title
        titleCol.textContent = title;
        row.appendChild(titleCol);

        // Display technologies
        techCol.textContent = tech.join(", ");
        row.appendChild(techCol);

        // Display description
        descCol.textContent = description;
        row.appendChild(descCol);

        // Display project link
        let linkCheck = link ?? "Not available";

        if (linkCheck.startsWith("https://")) {
            aTag.textContent = "View Project";
            aTag.setAttribute("href", linkCheck);
            aTag.setAttribute("target", "_blank");
            aTag.setAttribute("rel", "noopener noreferrer");
            linkCol.appendChild(aTag);
        } else {
            linkCol.textContent = linkCheck;
        }

        row.appendChild(linkCol);
        table.appendChild(row);

        // Show matching count using a template literal
         projectCount.textContent =
        `Showing ${project.length} of ${projectList.length} projects`;
    }
}


function dropDownSKills(){
    let select = document.getElementById("techDropdown");
    let count = 0;
    let allTech = new Set(
      projectList.flatMap((project)=> project.tech)
    );

    console.log(allTech);

    allTech.forEach((tech)=>{
      count+=1;
      let option = document.createElement("option");
      option.value = tech;
      option.textContent = tech;
      select.appendChild(option);
    });

    let spanCountTech = document.getElementById("countTech");
    spanCountTech.textContent = `${count} Technologies`;
}
dropDownSKills();


function searchTitle(){
    let searchInput = document.getElementById("title-text-filed");
    let titlevalue = searchInput.value.toLowerCase().trim();
    let selectTech = document.getElementById("techDropdown").value;

    let filteredProjects = projectList.filter((project)=>{
        return project.title.toLowerCase().includes(titlevalue) && 
                (selectTech === "" || project.tech.includes(selectTech));
    });

    projectListAdd(filteredProjects);
}


function loadProject(){
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(projectList.length > 0){
          resolve(projectList);
        }else{
          reject("No project found");
        }
      },1500);
      
  });
}

async function showProject() {
    let table = document.getElementById("project-data");

    table.innerHTML = "<tr><td colspan='4'>Loading projects...</td></tr>";

     try {
        await loadProject();
        projectListAdd();  // Your existing function
    } catch (error) {
        table.innerHTML = `<tr><td colspan="4">${error}</td></tr>`;
    }
}

showProject();