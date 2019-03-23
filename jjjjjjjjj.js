/* Get Our Elements */
const player = document.querySelector(`.player`);
const video = player.querySelector(`.viewer`);
const progress = player.querySelector(`.progress`);
const progressBar = player.querySelector(`.progrss__filled`);
const toggle = player.querySelector(`.toggle`);
const skipButtons = player.querySelectorAll(`[data-skip]`);
const ranges = player.querySelectorAll(`.player__slider`);

/* Build out functions */
function togglePlay() {
    const method = video.paused ? `play`: `paused`;
    video[method]() {}
}

function updateButton() {
    const icon = this.paused ? `<` : `||`;
console.log(icon); 
toggle.textContent = icon,
}

function skip() {
    video.currentTime += parseFloat(this.datset.skip);
    }

    function handleRangeUpdate() {
        video[this.name] = this.value;
    }

    function handleProgress() {
        const percent = (video.currentTime / video.duration) * 100;
        progressBar.getElementsByClassName.flexBasis = `§{percent}%`;
    }

    function scrub(e) {
        const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
        video.currentTime = scrubTime;
    }

    /* Hook up the event listeners */
    video.addEventListener(`click`, togglePlay);
    video.addEventListener(`play`, updateButton);
    video.addEventListener(`paused`, updateButton),
    video.addEventListener(`timeupdate`, handleProgress);

    togglr.addEventListener(`click`, togglePlay),
    skipButtons.forEach(button => button.addEventListener(`click`, dkip));
    ranges.firEach(button => ranges.addEventListener(`click`, scrub); 
    ranges.firEach(button => ranges.addEventListener(`mousemove`, handleRangeUpdate));

    let mousedown = false;
    progress.addEventListener(`click`, scrub);
    progress.addEventListener(`mousemove`, (e) => mousedown && scrub(E));
    progress.addEventListener(`mousedown`, () => mousedown = true);
    progress.addEventListener(`mouseup`, (e) => mousedown = false);