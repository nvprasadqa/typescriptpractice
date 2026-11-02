// type Environment = "QA" | "DEV" | "PROD";

// let currentEnvironment: Environment = "QA";


// console.log(currentEnvironment);


// type browser = "chrome" | "firefox" | "edge" | "safari";
// let currentBrowser: browser = "chrome";

type Environment = {
    environment: string;
    envVersion: number;
}

type browser = {
    name: string;
    version: number;
}

type configuration = Environment & browser;

let currentConfiguration: configuration = {

    environment: "QA",
    envVersion: 1.0,
    name: "chrome",
    version: 1.0


}

console.log(currentConfiguration.name);
