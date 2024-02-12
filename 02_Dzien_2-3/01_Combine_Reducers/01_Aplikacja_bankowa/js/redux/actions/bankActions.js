// Tutaj zaimplementuj akcje do aplikacji bankApp

// export { WITHDRAW, DEPOSIT, withdrawMoney, depositMoney };
const WITHDRAW = "WITHDRAW";
const DEPOSIT = "DEPOSIT";

const withdrawMoney = (amount) => ({
    type: WITHDRAW,
    payload: amount
});

const depositMoney = (amount) => ({
    type: DEPOSIT,
    payload: amount
});

export {WITHDRAW, DEPOSIT, withdrawMoney, depositMoney};