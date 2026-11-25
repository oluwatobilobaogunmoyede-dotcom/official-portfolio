// CONTACT FORM ELEMENTS
const msg = document.getElementById('msg');
const count = document.getElementById('count');
const form = document.getElementById('f');
const status = document.getElementById('status');

// CHARACTER COUNTER
msg.addEventListener('input', function () {
    count.textContent = msg.value.length + '/5000';
});

// CONTACT FORM SUBMISSION
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = msg.value.trim();

    if (!name || !email || !message) {
        status.textContent = 'Please complete all required fields.';
        return;
    }

    const recipient = 'oluwatobilobaogunmoyede@gmail.com';

    const emailSubject = encodeURIComponent(
        subject || 'Portfolio Contact Message'
    );

    const emailBody = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n\n' +
        'Message:\n' + message
    );

    const mailtoLink =
        'mailto:' + recipient +
        '?subject=' + emailSubject +
        '&body=' + emailBody;

    status.textContent =
        'Your email application is opening. Please send the prepared message there.';

    window.location.href = mailtoLink;
});

// RESET CHARACTER COUNTER
form.addEventListener('reset', function () {
    count.textContent = '0/5000';
});
