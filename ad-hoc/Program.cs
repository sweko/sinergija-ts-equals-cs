var greet = (string name) => $"Hello, {name}!";
List<string> items = ["C#", "Wekoslav", "Sinergija", "Belgrade"];

var greeted = items.Select(greet);

foreach (var greeting in greeted)
{
    Console.WriteLine(greeting);
}



