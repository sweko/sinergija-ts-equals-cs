Console.WriteLine("Counting from 1 to 10 in C#");

var nums = Enumerable.Range(1, 10).ToArray();

var delay = (int ms) => Task.Delay(ms);

var logNumbers = async (int[] numbers) => {
    foreach (var number in numbers) {
        await delay(100);
        Console.WriteLine(number);
    }
};

await logNumbers(nums);
