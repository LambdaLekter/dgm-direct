module.exports = {
    showTime: (time) => {
        let d = new Date(time)
        let h = d.getHours();
        let m = d.getMinutes();
        if (m <= 9) {
            m = "0" + m;
        }
        if (h <= 9) {
            h = "0" + h;
        }
        d = h + ":" + m;
        return d
    }
}