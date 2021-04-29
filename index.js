//Code originally written by Allvaa
const { default: { stream } } = require("got");
const { createWriteStream } = require("fs");
const { execSync } = require("child_process");

const url = "https://cdn.discordapp.com/attachments/798196676405755905/827174915714711572/Lavalink.jar";

const start = () => {
    const download = stream(url).pipe(createWriteStream('Lavalink.jar'));
    download.on("finish", () => {
        execSync("java -jar Lavalink.jar", { stdio: "inherit" });
    });
};

start();
