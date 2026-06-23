const teamMembers = document.querySelectorAll('.team-member');
const qrModal = document.querySelector('.qr-modal');
const closeModal = document.querySelector('.close-modal');
const qrImage = document.querySelector('#member-qr');
const qrName = document.querySelector('#member-qr-name');

// QR code data for each member
const memberQRs = {
    mohannad: {
        name: 'Mohannad Essam',
        qr: 'images/team_qr/mohannad.png' // Update the QR image path
    },
    mands: {
        name: 'Mohannad abd-ElNaby',
        qr: 'images/team_qr/mands.png' // Update the QR image path
    },
};

teamMembers.forEach(member => {
    member.addEventListener('click', () => {
        const memberId = member.dataset.member;
        const memberData = memberQRs[memberId];
        qrImage.src = memberData.qr;
        qrName.textContent = memberData.name;
        qrModal.classList.add('active');
    });
});

closeModal.addEventListener('click', () => {
    qrModal.classList.remove('active');
});

qrModal.addEventListener('click', (e) => {
    if (e.target === qrModal) {
        qrModal.classList.remove('active');
    }
});

// JavaScript to toggle menu visibility
document.querySelector('.menu-btn').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex'; // Toggle display
});