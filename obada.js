document.addEventListener("DOMContentLoaded", loadEntries);

function saveEntry() {
    let title = document.getElementById("title").value.trim();
    let content = document.getElementById("content").value.trim();

    if (title === "" || content === "") {
        alert("Please fill in both fields.");
        return;
    }

    
    let entries = JSON.parse(localStorage.getItem("entries")) || [];
    
  
    entries.push({ title, content });

  
    localStorage.setItem("entries", JSON.stringify(entries));


    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

   
    loadEntries();
}
