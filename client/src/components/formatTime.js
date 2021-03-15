function formatTime(time) {
    // Receive number 0 to 7200
    if (typeof time != "number" || time < 0 || time > 5400) {
        console.log("Invalid number to format");
        return null;
    }

    // Format the time like a stopwatch
    let seconds = `${time % 60}`.padStart(2, '0')
    let minutes = `${Math.floor(time / 60) % 60}`.padStart(2, '0')
    let hours = ""

    // Don't always return hours
    if (time >= 3600) {
        hours = `${Math.floor(time / 3600) % 60}:`
    }

    return `${hours}${minutes}:${seconds}`
}

export default formatTime