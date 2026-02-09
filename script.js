let attendance = JSON.parse(localStorage.getItem("attendance")) || [];
let balaks = JSON.parse(localStorage.getItem("balaks")) || [];

// Add attendance
function addAttendance() {
    let date = document.getElementById("date").value;
    let count = document.getElementById("count").value;

    if (!date || !count) return alert("Enter all details");

    attendance.push({ date, count });
    localStorage.setItem("attendance", JSON.stringify(attendance));
    alert("Attendance Saved");
}

// Add balak
function addBalak() {
    let name = document.getElementById("balakName").value;

    if (!name) return alert("Enter name");

    balaks.push(name);
    localStorage.setItem("balaks", JSON.stringify(balaks));
    alert("Balak Added");
}

// Export attendance CSV
function exportAttendance() {
    let csv = "Date,Attendance\n";
    attendance.forEach(a => {
        csv += `${a.date},${a.count}\n`;
    });

    downloadCSV(csv, "attendance.csv");
}

// Export balaks CSV
function exportBalaks() {
    let csv = "Balak Name\n";
    balaks.forEach(b => {
        csv += `${b}\n`;
    });

    downloadCSV(csv, "balaks.csv");
}

// Download helper
function downloadCSV(data, filename) {
    let blob = new Blob([data]);
    let url = window.URL.createObjectURL(blob);

    let a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
}
