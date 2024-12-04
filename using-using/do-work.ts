import { TempFile } from "./temp-file";

function doSomeWork() {
    console.log("Doing some work...");
    const file = new TempFile(".temp");

    file.write("Hello, world!");
    throw new Error("Something went wrong");
    file.write("Goodbye, world!");
}

doSomeWork();