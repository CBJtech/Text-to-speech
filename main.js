document.addEventListener('DOMContentLoaded', function () {
    const textToRead = document.getElementById('text-to-read');
    const readButton = document.getElementById('read-button');
    const audioPlayer = document.getElementById('audio-player');

    readButton.addEventListener('click', function () {
        const text = textToRead.value.trim();

        if (text !== '') {
            // Create a new SpeechSynthesisUtterance
            const speech = new SpeechSynthesisUtterance();
            speech.text = text;

            // Use the default voice
            speechSynthesis.speak(speech);

            // Set audio source
            audioPlayer.src = `data:audio/wav;base64,${btoa(text)}`;
            audioPlayer.style.display = 'block';
        } else {
            alert('Please enter text to read.');
        }
    });
});
