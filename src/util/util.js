export function secondsToLoad(loadInSeconds) {
    let time = Number.parseInt(loadInSeconds);
    let days = Math.floor(time / (24 * 60 * 60));
    time = time - (days * 24 * 60 * 60);
    let hours = Math.floor(time / (60 * 60));
    time = time - (hours * 60 * 60);
    let minutes =  Math.floor(time / 60);
    time = time - (minutes * 60);
    let seconds = time;
    let s = (days? days + "d " : "") + (hours? hours + "h " : "") + (minutes? minutes + "m " : "") + (seconds? seconds + "s" : "");
    return s;
}

export function loadToSeconds(load) {
    var seconds = 0;
    var days = load.match(/(\d+)\s*d/);
    var hours = load.match(/(\d+)\s*h/);
    var minutes = load.match(/(\d+)\s*m/);
    var sec = load.match(/(\d+)\s*s/);
    if (days) { seconds += parseInt(days[1])*86400; }
    if (hours) { seconds += parseInt(hours[1])*3600; }
    if (minutes) { seconds += parseInt(minutes[1])*60; }
    if (sec) { seconds += parseInt(sec[1]); }

    console.table([days, hours, minutes, seconds]);
    return seconds;
}

export function uniqueID() {
    return Math.floor(Math.random() * Date.now());
}