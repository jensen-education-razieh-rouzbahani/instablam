function requestNotificationPermission() {
    Notification.requestPermission().then((response) => {
        console.log(response);
    });
}

function createNotification(notice) {
    const icon = '@/public/images/icons/icon192x192.png';
    const play = notice.play;

    const notification = new Notification('New notice', { body: play, icon: icon });

    notification.addEventListener('click', () => {
        window.open('https://localhost:0443/');
    });
}

export { requestNotificationPermission, createNotification }