// script.js

// Video controls
document.getElementById('playPauseBtn').addEventListener('click', function() {
    const video = document.getElementById('videoPlayer');
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

document.getElementById('muteBtn').addEventListener('click', function() {
    const video = document.getElementById('videoPlayer');
    video.muted = !video.muted;
});

document.getElementById('volumeRange').addEventListener('input', function() {
    const video = document.getElementById('videoPlayer');
    video.volume = this.value;
});

// Chat functionality
function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value;
    if (message.trim() !== '') {
        const messageContainer = document.getElementById('messages');
        const newMessage = document.createElement('p');
        newMessage.textContent = message;
        messageContainer.appendChild(newMessage);
        input.value = '';
    }
}

// Add story functionality
function showAddStoryModal() {
    document.getElementById('addStoryModal').style.display = 'block';
}

function closeAddStoryModal() {
    document.getElementById('addStoryModal').style.display = 'none';
}

function addStory() {
    const title = document.getElementById('storyTitle').value;
    const content = document.getElementById('storyContent').value;
    if (title.trim() !== '' && content.trim() !== '') {
        const storyCards = document.getElementById('storyCards');
        const newStory = document.createElement('div');
        newStory.className = 'card';
        newStory.innerHTML = `<h2>${title}</h2><p>${content}</p>`;
        storyCards.appendChild(newStory);
        closeAddStoryModal();
    }
}