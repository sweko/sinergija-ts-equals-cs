import * as fs from 'fs';
(Symbol as any).dispose ??= Symbol("Symbol.dispose");

export class TempFile implements Disposable {
    path: string;
    handle: number;

    constructor(path: string) {
        this.path = path;
        this.handle = fs.openSync(path, "w+");
    }

    write(data: string) {
        fs.writeSync(this.handle, `${data}\n`);
    };

    [Symbol.dispose]() {
        // Close the file and delete it.
        fs.closeSync(this.handle);
        fs.unlinkSync(this.path);
    }
}