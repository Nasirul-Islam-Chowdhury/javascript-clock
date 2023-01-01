setInterval(() => {
    const time = new Date();
    const localTime = time.toLocaleTimeString();
    const getTime = new Date().toLocaleString('en-us',{day:'numeric', weekday: 'long', month:'long', year:'numeric' });
    document.getElementById("time").innerText = localTime;
    document.getElementById("date").innerText = getTime;
}, 1000);