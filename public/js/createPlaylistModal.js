'use strict';
var createPlaylistModal = document.getElementById('createPlaylistModal');
var newPlaylistBtn = document.getElementById('newPlaylistBtn');
var closeModal = document.getElementById('close-modal');

newPlaylistBtn.onclick = () => createPlaylistModal.style.display = 'block';

closeModal.onclick = () => createPlaylistModal.style.display = 'none';

window.onclick = (ev) => {
  if (ev.target == createPlaylistModal) { 
    createPlaylistModal.style.display = 'none'; 
  }
}