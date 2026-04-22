// E-Mail verschleiert zusammensetzen
const user = 'hey';
const domain = 'nialma';
const tld = 'de';

const mailBtn = document.getElementById('mail-btn');
mailBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = 'mailto:' + user + '@' + domain + '.' + tld;
});
