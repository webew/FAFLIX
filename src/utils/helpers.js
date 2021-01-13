export const calcTime = (time) => {
    const hours = Math.floor(time / 60);
    const mins = time % 60;
    return `${hours}h${mins}mn`;
};

export const convertMoney = (money) => {
    let formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
    });
    return formatter.format(money);
};

export const FAFLIX_APP_LOGGEDIN = "FAFLIX_APP_LOGGEDIN";
