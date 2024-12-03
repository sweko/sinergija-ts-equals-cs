console.log("Counting from 1 to 10 in TypeScript using async/await:");

const nums = Array(10).fill(null).map((_, i) => i + 1);
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const logNumbers = async (numbers:number[]) => {
    for (const number of numbers) {
        await delay(100);
        console.log(number);
    }
}

logNumbers(nums);
