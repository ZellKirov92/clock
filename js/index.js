setInterval(() => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const rotateHour = 30 * hour + minute / 2;
    const rotateMinute = 6 * minute;
    const rotateSecond = 6 * second;
    document.getElementById("hour_hand").style.transform = `rotate(${rotateHour}deg)`;
    document.getElementById("minute_hand").style.transform = `rotate(${rotateMinute}deg)`;
    document.getElementById("second_hand").style.transform = `rotate(${rotateSecond}deg)`;
});