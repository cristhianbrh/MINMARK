const routes = {
    user: "section_user",
    mantenedor: "section_mantenedor",
    ventas: "section_ventas",
    mantenedor_categoria: "section_mantenedor_categoria"
}
const sections = document.querySelectorAll('.sectionCamb');
const nav_options = document.querySelectorAll('.nav_options');

function goNewSection(rt) {
    let actual = nav_options[0];
    if (event) {
        actual = event.target;
    }

}




function viewChildrenNav(notIsParent = false, rt) {
    let actual = nav_options[0];
    if (event) {
        actual = event.target;

    }


    if (!notIsParent) {
        // actual.style.background = "red"
        const childrens = actual.parentNode.childNodes[3];
        childrens.style.display = (childrens.style.display == "none") ? "flex" : "none";
    } else {
        const section = document.getElementById(routes[rt]);
        sections.forEach(sect => {
            sect.style.display = "none";
        });

        nav_options.forEach(option => {
            option.style.background = "transparent";
        })
        section.style.display = "block";
        actual.style.background = "#ffaa";
    }
}
viewChildrenNav(true, 'user')
