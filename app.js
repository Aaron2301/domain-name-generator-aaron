function generator() {
   
    let pronoun = ["I", "You", "He", "She", "It", "We"];
    let adj = ["Angry", "Asleep", "Awake", "Bright", "Delicate", "Dirty"];
    let noun = ["Doctor", "Man", "Woman", "Child", "Dog", "Kid"];
    let tld = [".com", ".es", ".ve", ".org", ".net"]
    
    var name = pronoun[Math.floor(Math.random() * pronoun.length)] + adj[Math.floor(Math.random() * adj.length)] + noun[Math.floor(Math.random() * noun.length)] + tld[Math.floor(Math.random() * tld.length)];
    
    if (document.getElementById("name")) {
    document.getElementById("placeholder").removeChild(document.getElementById("name"));
    }
   
    var element = document.createElement("div");
    element.setAttribute("id", "name");
    element.appendChild(document.createTextNode(name));
    document.getElementById("placeholder").appendChild(element);
    }