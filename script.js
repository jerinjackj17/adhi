document.addEventListener("DOMContentLoaded", function() {
    // Populate Education Section
const resumeLink = document.createElement("a");
resumeLink.href = "https://jerinjackj17.github.io/resume.pdf";
resumeLink.innerText = "Download Resume";
resumeLink.target = "_blank";
resumeLink.classList.add("button");
document.querySelector("#education").appendChild(resumeLink);

    const educationSection = document.getElementById("education");
    educationSection.innerHTML = `
        <h3>Education</h3>
        <p>JERIN JACK JOSEPH RAJ</p>
        <p>Chicago, IL 60616 | jjosephraj@hawk.iit.edu | +1 312 9189649 | <a href="www.linkedin.com/in/jerinjackj">www.linkedin.com/in/jerinjackj</a></p>
        <p>Master’s in Information Technology and Management</p>
        <p>Illinois Institute of Technology, Chicago</p>
        <p>Expected May 2025</p>
        <p>GPA: 4.00*</p>
        <p>Coursework: Project Management for Information Technology Management, Object-Oriented System Analysis Modelling and Design, Advance Topics in Database Management, Data Warehousing, Database Security</p>
        <p>Bachelor’s Electrical and Electronics Engineering</p>
        <p>Anna University, India</p>
        <p>GPA: 7.74/10</p>
    `;

    // Populate Skills Section
    const skillsSection = document.getElementById("skills");
    skillsSection.innerHTML = `
        <h3>Skills</h3>
        <p>Programming and Scripting Languages: Python, R, SQL, Scala, JavaScript, JAVA, SpringBoot, HTML, CSS</p>
        <p>Tools: Git, Slack, Tableau, Power BI, Apache Spark, AWS, Hadoop, Jupyter Notebooks, SoapUI, Docker, Kubernetes, WSO2</p>
        <p>Operating Systems / Architecture: Unix/Linux, Windows, Apple macOS</p>
    `;

    // Populate Experience Section
    const experienceSection = document.getElementById("experience");
    experienceSection.innerHTML = `
        <h3>Professional Experience</h3>
        <p>Software Developer – Tata Consultancy Services, Chennai, India</p>
        <!-- Add more experience details -->
    `;

    // Populate Projects Section
    const projectsSection = document.getElementById("projects");
    projectsSection.innerHTML = `
        <h3>Project Experience</h3>
        <p>Website Design for NCSETAS 2020</p>
        <!-- Add more project details -->
    `;

    // Populate Publications Section
    const publicationsSection = document.getElementById("publications");
    publicationsSection.innerHTML = `
        <h3>Publications</h3>
        <p>Presented a paper on “Design and development of DNA Data storage” in Indo-US conference on bioengineering and regenerative medicine held at school of Biochemical Engineering, IIT(BHU) on 27-29 Feb 2020.</p>
        <!-- Add more publication details -->
    `;

    // Populate Awards & Activities Section
    const awardsSection = document.getElementById("awards");
    awardsSection.innerHTML = `
        <h3>Awards & Activities</h3>
        <p>Recognized with the prestigious "Star of the Month" award at Tata Consultancy Services in November 2023 for exceptional performance and significant contributions to API development and optimization in banking projects.</p>
        <!-- Add more award and activity details -->
    `;
});
