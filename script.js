document.addEventListener("DOMContentLoaded", function () {

    const loginScreen = document.getElementById("login-screen");
    const mainContent = document.getElementById("main-content");
    const errorMsg = document.getElementById("error-msg");

    const video = document.getElementById("videoPlayer");
    const playBtn = document.getElementById("playPauseBtn");
    const container = document.getElementById("video-container");

    // 🔐 LOGIN FUNCTION
    window.checkLogin = function () {
        const user = document.getElementById("username").value.trim();
        const pass = document.getElementById("password").value.trim();

        if (user === "Dharu" && pass === "poda lusu") {
            loginScreen.style.display = "none";
            mainContent.style.display = "block";
            errorMsg.style.display = "none";
        } else {
            errorMsg.style.display = "block";
        }
    };

    // ▶ PLAY / PAUSE
    window.togglePlay = function () {
        if (video.paused) {
            video.play();
            playBtn.innerText = "Pause";
        } else {
            video.pause();
            playBtn.innerText = "Play";
        }
    };

    // ⏩ FORWARD / BACKWARD
    window.changeTime = function (seconds) {
        video.currentTime += seconds;
    };

    // ⛶ FULLSCREEN
    window.toggleFullScreen = function () {
        if (!document.fullscreenElement) {
            if (container.requestFullscreen) {
                container.requestFullscreen();
            } else if (container.webkitRequestFullscreen) {
                container.webkitRequestFullscreen();
            } else if (container.msRequestFullscreen) {
                container.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    };

    // 🔄 Sync button text if user clicks video directly
    video.addEventListener("play", () => playBtn.innerText = "Pause");
    video.addEventListener("pause", () => playBtn.innerText = "Play");

});
