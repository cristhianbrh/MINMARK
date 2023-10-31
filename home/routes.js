const routes = {
    user: "section_user",
    ventas: "section_ventas",
}
const sections = document.querySelectorAll('.sectionCamb'); 
const nav_options = document.querySelectorAll('.nav_options'); 

function goNewSection(rt){
    let actual = nav_options[0];
    if(event){
        actual = event.target;
    }
    const section = document.getElementById(routes[rt]);
    sections.forEach(sect => {
        sect.style.display = "none";
    });
    
    nav_options.forEach(option=>{
        option.style.background = "transparent";
    })
    section.style.display = "block";
    actual.style.background = "#ffaa";
    
}
goNewSection('user')