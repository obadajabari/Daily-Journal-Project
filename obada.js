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
function loadEntries() {
    let entriesList = document.getElementById("entries-list");
    entriesList.innerHTML = "";

    let entries = JSON.parse(localStorage.getItem("entries")) || [];
    entries.forEach((entry, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            <div class="entry-header">
                <h3>${entry.title}</h3>
            </div>
            <div class="entry-content">${entry.content}</div>
            <div class="actions">
                <button onclick="editEntry(${index})"><i class="fas fa-pen"></i></button>
                <button onclick="deleteEntry(${index})"><i class="fas fa-trash"></i></button>
            </div>
        `;
        entriesList.appendChild(li);
    });
}
function deleteEntry(index) {
    let entries = JSON.parse(localStorage.getItem("entries")) || [];
    entries.splice(index, 1);
    localStorage.setItem("entries", JSON.stringify(entries));
    loadEntries();
}
function editEntry(index) {
    let entries = JSON.parse(localStorage.getItem("entries")) || [];
    let entry = entries[index];

    document.getElementById("title").value = entry.title;
    document.getElementById("content").value = entry.content;

    deleteEntry(index);
}

