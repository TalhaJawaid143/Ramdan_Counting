const ramadanStart = new Date("March 1, 2025 00:00:00").getTime();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function updateCountdown() {
    const now = new Date().getTime();
    const distance = ramadanStart - now;

    if (distance <= 0) {
        document.getElementById("countdown").innerText = "✨ Ramadan Mubarak! Fasting has begun! ✨";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerText = 
        `🌙 Ramadan starts in ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

const ramadanTimetable = [
    { day: 1, sehri: "05:37 AM", iftar: "06:36 PM", date: "2025-03-02" },
    { day: 2, sehri: "05:36 AM", iftar: "06:36 PM", date: "2025-03-03" },
    { day: 3, sehri: "05:35 AM", iftar: "06:37 PM", date: "2025-03-04" },
    { day: 4, sehri: "05:34 AM", iftar: "06:37 PM", date: "2025-03-05" },
    { day: 5, sehri: "05:33 AM", iftar: "06:38 PM", date: "2025-03-06" },
    { day: 6, sehri: "05:32 AM", iftar: "06:38 PM", date: "2025-03-07" },
    { day: 7, sehri: "05:31 AM", iftar: "06:39 PM", date: "2025-03-08" },
    { day: 8, sehri: "05:30 AM", iftar: "06:39 PM", date: "2025-03-09" },
    { day: 9, sehri: "05:29 AM", iftar: "06:39 PM", date: "2025-03-10" },
    { day: 10, sehri: "05:28 AM", iftar: "06:40 PM", date: "2025-03-11" },
    { day: 11, sehri: "05:27 AM", iftar: "06:40 PM", date: "2025-03-12" },
    { day: 12, sehri: "05:26 AM", iftar: "06:41 PM", date: "2025-03-13" },
    { day: 13, sehri: "05:25 AM", iftar: "06:41 PM", date: "2025-03-14" },
    { day: 14, sehri: "05:24 AM", iftar: "06:42 PM", date: "2025-03-15" },
    { day: 15, sehri: "05:23 AM", iftar: "06:42 PM", date: "2025-03-16" },
    { day: 16, sehri: "05:22 AM", iftar: "06:43 PM", date: "2025-03-17" },
    { day: 17, sehri: "05:21 AM", iftar: "06:43 PM", date: "2025-03-18" },
    { day: 18, sehri: "05:20 AM", iftar: "06:44 PM", date: "2025-03-19" },
    { day: 19, sehri: "05:19 AM", iftar: "06:44 PM", date: "2025-03-20" },
    { day: 20, sehri: "05:18 AM", iftar: "06:44 PM", date: "2025-03-21" },
    { day: 21, sehri: "05:17 AM", iftar: "06:45 PM", date: "2025-03-22" },
    { day: 22, sehri: "05:16 AM", iftar: "06:45 PM", date: "2025-03-23" },
    { day: 23, sehri: "05:15 AM", iftar: "06:46 PM", date: "2025-03-24" },
    { day: 24, sehri: "05:14 AM", iftar: "06:46 PM", date: "2025-03-25" },
    { day: 25, sehri: "05:12 AM", iftar: "06:47 PM", date: "2025-03-26" },
    { day: 26, sehri: "05:11 AM", iftar: "06:47 PM", date: "2025-03-27" },
    { day: 27, sehri: "05:10 AM", iftar: "06:47 PM", date: "2025-03-28" },
    { day: 28, sehri: "05:09 AM", iftar: "06:48 PM", date: "2025-03-29" },
    { day: 29, sehri: "05:08 AM", iftar: "06:48 PM", date: "2025-03-30" },
    { day: 30, sehri: "05:07 AM", iftar: "06:49 PM", date: "2025-03-31" }
];

// Insert Data into Table
const timetableBody = document.getElementById("timetable-body");
ramadanTimetable.forEach(day => {
    const row = document.createElement("tr");

    // Get the weekday name
    const dateObj = new Date(day.date);
    const weekday = daysOfWeek[dateObj.getDay()];
    const fullDate = `📅 Day ${day.day} - ${weekday}, ${day.date}`;

    row.innerHTML = `
        <td class='border border-gray-400 px-4 py-2 font-semibold'>${fullDate}</td>
        <td class='border border-gray-400 px-4 py-2'>🌙 Sehri: ${day.sehri}</td>
        <td class='border border-gray-400 px-4 py-2'>🌆 Iftar: ${day.iftar}</td>
    `;

    row.classList.add("opacity-0", "transition-opacity", "duration-500");
    timetableBody.appendChild(row);

    setTimeout(() => {
        row.classList.remove("opacity-0");
    }, 100);
});
