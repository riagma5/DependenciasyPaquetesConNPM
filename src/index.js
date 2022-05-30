const messages = [
    "Ricardo",
    "Ana",
    "Nicolay",
    "Oscar",
    "Alberta"
];


const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };