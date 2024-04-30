class CountdownTimer {
    private targetDate: Date;
    private intervalId: number;

    constructor(targetDate: Date) {
        this.targetDate = targetDate;
        this.intervalId = 0;
    }

    start() {
        this.intervalId = setInterval(() => {
            const currentDate = new Date().getTime();
            const difference = this.targetDate.getTime() - currentDate;
            
            if (difference <= 0) {
                clearInterval(this.intervalId);
                console.log("Countdown finished!");
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }, 1000);
    }
}

const targetDate = new Date("2024-05-01T00:00:00");
const timer = new CountdownTimer(targetDate);
timer.start();
