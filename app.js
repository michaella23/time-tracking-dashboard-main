const daily = document.getElementById("daily")
const weekly = document.getElementById("weekly")
const monthly = document.getElementById("monthly")

const workTime = document.getElementById("work-time")
const workPrev = document.getElementById("work-previous")
const playTime = document.getElementById("play-time")
const playPrev = document.getElementById("play-previous")
const studyTime = document.getElementById("study-time")
const studyPrev = document.getElementById("study-previous")
const exerciseTime = document.getElementById("exercise-time")
const exercisePrev = document.getElementById("exercise-previous")
const socialTime = document.getElementById("social-time")
const socialPrev = document.getElementById("social-previous")
const selfTime = document.getElementById("self-care-time")
const selfPrev = document.getElementById("self-care-previous")

// 5, 7, 1, 2, 0, 1, 1, 1, 1, 3, 0, 1
daily.addEventListener("click", () => {
    workTime.textContent = "5 hrs"
    workPrev.textContent = "Yesterday - 7 hrs"
    playTime.textContent = "1 hr"
    playPrev.textContent = "Yesterday - 2 hrs"
    studyTime.textContent = "0 hrs"
    studyPrev.textContent = "Yesterday - 1 hr"
    exerciseTime.textContent = "1 hr"
    exercisePrev.textContent = "Yesterday - 1 hr"
    socialTime.textContent = "1 hr"
    socialPrev.textContent = "Yesterday - 3 hrs"
    selfTime.textContent = "0 hrs"
    selfPrev.textContent = "Yesterday - 1 hr"
})

weekly.addEventListener("click", () => {
    workTime.textContent = "32 hrs"
    workPrev.textContent = "Last week - 36 hrs"
    playTime.textContent = "10 hrs"
    playPrev.textContent = "Last week - 8 hrs"
    studyTime.textContent = "4 hrs"
    studyPrev.textContent = "Last week - 7 hrs"
    exerciseTime.textContent = "4 hrs"
    exercisePrev.textContent = "Last week - 5 hrs"
    socialTime.textContent = "5 hrs"
    socialPrev.textContent = "Last week - 10 hrs"
    selfTime.textContent = "2 hrs"
    selfPrev.textContent = "Last week - 2 hrs"
})

//103, 128, 23, 29,13, 19, 11, 18, 21, 23, 7, 11
monthly.addEventListener("click", () => {
    workTime.textContent = "103 hrs"
    workPrev.textContent = "Last month - 128 hrs"
    playTime.textContent = "23 hrs"
    playPrev.textContent = "Last month - 29 hrs"
    studyTime.textContent = "13 hrs"
    studyPrev.textContent = "Last month - 19 hrs"
    exerciseTime.textContent = "11 hrs"
    exercisePrev.textContent = "Last month - 18 hrs"
    socialTime.textContent = "21 hrs"
    socialPrev.textContent = "Last month - 23 hrs"
    selfTime.textContent = "7 hrs"
    selfPrev.textContent = "Last month - 11 hrs"
})