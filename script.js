function downloadSong() {
            var downloadUrl = 'https://github.com/AUTRACHRIS-TAO/AutraBeats/raw/refs/heads/main/Kanjedza(Intro).mp3';
            
            var link = document.createElement('a');
            link.href = downloadUrl;
            link.download = ''; 
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }