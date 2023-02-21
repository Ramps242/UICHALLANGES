let firstName = "Christopher Thabo";
let lastName = "Rampora";
let bio = "I am an alumnus of Tshwane University of Technology's Polokwane Campus with a National Diploma in "
               "Information Technology specialising with Software Development and an overall average of 69%, currently, I am pursuing an Advanced Diploma in Computer Science."
                "When I was doing my Work Integrated Learning last year, around June, I worked with the Informatics Community Engagement Project. As a front-end developer, I was exposed to front-end frameworks such" 
                "as Angular, Bootstrap, Rest Api Node Js. This is a website that my team and I created lah.web.app which was hosted on Firebase. "
                 "In my spare time, I usually go to the gym (weight lifting) and play chess."
                 
let projectsA = ["lah.web.app"];
let educationalBackground = "NSC, National Diploma in Software Development";
let contactInformation = {
  email: "chrisrampora242@gmail.com",
  phone: "0688587535",
  address: "90 Burger Street, Leohen Flats Polokwane",
};
const projects = [
    {
      title: 'lah.web.app',
      description: '(Work Intergrated Learning "ICEP team") we built a website called Limpopo Varsity Hackathorn 2022 that allows registered students from UL,TUT and Univen to register for a competition. Implemented with HTML,CSS , Node js, and Firebase for hoesting.',
      year: 2022,
    },
    {
      title: 'Technical Services System',
      description: 'We developed a system that allows TUT to enquire their technical issues through this system, which connects staff members to ask for help to campus technicians(System is not yet completed)',
      year: 2022,
    },
   
  ];
  const dataContainer = document.getElementById("data-container");
  
  const nameElement = document.createElement("p");
  nameElement.textContent = `firstname: ${firstName}`;

  const surnameElement = document.createElement("p");
  ageElement.textContent = `lastname: ${lastName}`;

  const bioElement = document.createElement("p");
  cityElement.textContent = `bio: ${bio}`;

  const projectsElement = document.createElement("ul");
  projectsElement.forEach((projects) => {
  const hobbyElement = document.createElement("li");
  hobbyElement.textContent = projects;
  projectsList.appendChild(projectsElement);
});

  //Display all the data from javascrip variables into web page in html?