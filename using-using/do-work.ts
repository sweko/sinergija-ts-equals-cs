import { TempFile } from "./temp-file";

function doSomeWork() {
    using file = new TempFile(".temp");

    file.write("Hello, world!");
    throw new Error("Something went wrong");
    file.write("Goodbye, world!");

    // The file will be closed and deleted here.
}

doSomeWork();