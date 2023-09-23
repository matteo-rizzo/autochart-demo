function submitChart() {
    document.getElementById("submit-chart").classList.add("w3-hide");
    let success = document.getElementById("success-chart");
    success.classList.remove("w3-hide");
    setTimeout("resetHomeScreen()", 1500);
}

function resetHomeScreen() {
    document.getElementById("id01").classList.add("w3-hide");
    document.getElementById("id02").classList.add("w3-hide");
    showNewChart();
    setTimeout("hideNewChart()", 2500);
}

function showNewChart() {
    let newChart = document.getElementById("new-chart");
    newChart.classList.add("w3-green");
    newChart.classList.remove("w3-hide");
}

function hideNewChart() {
    let newChart = document.getElementById("new-chart");
    newChart.classList.remove("w3-green");
}

function submitHandover() {
    document.getElementById("submit-handover").classList.add("w3-hide")

    document.getElementById("success-handover").classList.remove("w3-hide");
    setTimeout("nextPatientHandover()", 1500);

}

function nextPatientHandover() {
    resetRecordingButtons();
    document.getElementById("success-handover").classList.add("w3-hide");
    document.getElementById("submit-handover").classList.remove("w3-hide");
    document.getElementById("current-patient").classList.add("w3-hide");
    document.getElementById("current-patient-ok").classList.remove("w3-hide");
    setTimeout("progressPatientsList()", 1500);
}

function progressPatientsList() {
    document.getElementById("current-patient").classList.add("w3-hide");
    document.getElementById("next-patient").classList.remove("w3-hide");
    document.getElementById("current-patient-ok-list").classList.remove("w3-hide");
    document.getElementById("current-patient-ok").classList.add("w3-hide");
}

function highlightNewHandovers() {
    document.getElementById('id03').style.display = 'none'
    showNewHandover()
    setTimeout("hideNewHandover()", 1500);
}

function showNewHandover() {
    let newHandover = document.getElementById("new-handover");
    newHandover.classList.add("w3-green");
    newHandover.classList.remove("w3-hide");

    let newPatientHandover = document.getElementById("new-patient-handover");
    newPatientHandover.classList.add("w3-green");
    newPatientHandover.classList.remove("w3-hide");
}

function hideNewHandover() {
    let newHandover = document.getElementById("new-handover");
    newHandover.classList.remove("w3-green");

    let newPatientHandover = document.getElementById("new-patient-handover");
    newPatientHandover.classList.remove("w3-green");
}