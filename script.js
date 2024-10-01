const sidebar = document.querySelector('.sidebar-container');
const mainVideoArea = document.querySelector('.main-video-area');
const participantsBtn = document.getElementById('participants-btn');
const participantIcon = document.querySelector('.fa-user-friends');
const closeBtn = document.querySelector('.close-btn');
let isSidebarOpen = true;
const participants = [
    { name: "Herve Musangwa", image: "https://ui-avatars.com/api/?name=H&background=random&color=fff", status: "Meeting host", muted: false },
    { name: "Bonaparte Uteramaho", image: "https://ui-avatars.com/api/?name=B&background=random&color=fff", status: "", muted: true },
    { name: "Eddy Uwambaje", image: "https://ui-avatars.com/api/?name=E&background=random&color=fff", status: "", muted: true },
    { name: "Divine Birasa", image: "https://ui-avatars.com/api/?name=D&background=random&color=fff", status: "", muted: true },
    { name: "Lorita Sesame Icyeza", image: "https://ui-avatars.com/api/?name=L&background=random&color=fff", status: "", muted: true },
    { name: "Didier Nsengiyumva", image: "https://ui-avatars.com/api/?name=D&background=random&color=fff", status: "", muted: true },
    { name: "Cletus Abugre", image: "https://ui-avatars.com/api/?name=C&background=random&color=fff", status: "", muted: true },
    { name: "Blair Kayigamba", image: "https://ui-avatars.com/api/?name=B&background=random&color=fff", status: "", muted: true },
    { name: "Desparvis Gutabarwa", image: "https://ui-avatars.com/api/?name=D&background=random&color=fff", status: "", muted: true },
    { name: "Emarence Umurerwa", image: "https://ui-avatars.com/api/?name=E&background=random&color=fff", status: "", muted: true },
    { name: "David Ajao", image: "https://ui-avatars.com/api/?name=D&background=random&color=fff", status: "", muted: true },
    { name: "Bonaparte Uteramaho", image: "https://ui-avatars.com/api/?name=B&background=random&color=fff", status: "", muted: true },
    { name: "Desparvis Gutabarwa", image: "https://ui-avatars.com/api/?name=D&background=random&color=fff", status: "", muted: true },
    { name: "Eddy Uwambaje", image: "https://ui-avatars.com/api/?name=E&background=random&color=fff", status: "", muted: true },
    { name: "Emarence Umurerwa", image: "https://ui-avatars.com/api/?name=E&background=random&color=fff", status: "", muted: true }
];


const loadParticipants = () => {
    const participantsList = document.getElementById('participants-list');
    participantsList.innerHTML = '';

    participants.forEach(participant => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="participant-info">
                <img src="${participant.image}" alt="${participant.name}" />
                <div>
                    <span><strong>${participant.name}</strong></span>
                    <span class="status">${participant.status}</span>
                </div>
            </div>
            <div class="icon-group">
                ${participant.muted ? '<span class="material-symbols-outlined" style="color: #6e6e6e; font-size: 24px;">mic_off</span>':'<span class="material-symbols-outlined" style="background-color: #1a73e8; color: #fff; font-size: 18px; border-radius: 50%; padding: 5px;">graphic_eq</span>'}
                <i class="fas fa-ellipsis-v"></i> 
            </div>

        `;
        participantsList.appendChild(li);
    });
};


window.onload = loadParticipants;



const openSidebar = () => {
    participantIcon.style.color = '#a2c8fb';
    sidebar.style.right = '0';  
    mainVideoArea.style.width = `calc(100% - 350px)`; 
    isSidebarOpen = true;
};

const closeSidebar = () => {
    participantIcon.style.color = '#fff';
    sidebar.style.right = '-400px';  
    mainVideoArea.style.width = '100%';  
    isSidebarOpen = false;
};

participantsBtn.addEventListener('click', () => {
    if (isSidebarOpen) {
        closeSidebar();
    } else {
        openSidebar();
    }
});

closeBtn.addEventListener('click', closeSidebar);
