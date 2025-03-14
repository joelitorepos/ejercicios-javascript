const rangoEdad = document.querySelector(".rangoEdad");

// setAtribute le da un atributo, si tiene uno ya lo modifica
rangoEdad.setAttribute("type", "number");

document.write(rangoEdad.getAttribute("type"));

rangoEdad.removeAttribute("type");