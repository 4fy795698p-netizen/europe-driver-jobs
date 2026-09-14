const jobs = [];

function render(list) {
  document.getElementById('jobsList').innerHTML =
    '<article class="job">' +
    '<span class="pill">OFFICIAL SOURCE</span>' +
    '<h3>Bus Driver – Germany</h3>' +
    '<p>🚌 Heavy Bus / Coach Driver</p>' +
    '<p>📍 Germany · Work Permit</p>' +
    '<p>💶 Salary: To be confirmed by employer</p>' +
    '<p>✅ UAE Heavy Bus licence & experience preferred</p>' +
    '<a href="https://www.arbeitsagentur.de/jobsuche/jobdetail/12456-1625822-1-S" target="_blank" rel="noopener">View Official Job</a>' +
    '</article>';
}

function filterJobs() {
  const q = document.getElementById('q').value.toLowerCase();
  const c = document.getElementById('country').value;

  if (
    (!q || 'bus driver germany'.includes(q)) &&
    (!c || c === 'Germany')
  ) {
    render([]);
  } else {
    document.getElementById('jobsList').innerHTML =
      '<article class="job"><b>No matching jobs found.</b></article>';
  }
}

render([]);
