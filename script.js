const urlsMusicas = ["https://www.youtube.com/watch?v=IB4lTCTlg9M", "url_musica_2.mp3", "url_musica_3.mp3"]; // Lista de URLs das músicas
const audioPlayer = document.getElementById("audioPlayer");
const nomeMusica = document.getElementById("nomeMusica");

function tocarMusica() {
    const urlAleatoria = urlsMusicas[Math.floor(Math.random() * urlsMusicas.length)];
    audioPlayer.src = urlAleatoria;
    nomeMusica.textContent = `Tocando: ${urlAleatoria}`;
    
    // Aqui você pode adicionar a lógica para tocar a parte da música desejada
    // Exemplo: audioPlayer.currentTime = 30; // Define o tempo de reprodução em 30 segundos
    // Exemplo: audioPlayer.play(); // Inicia a reprodução
}
