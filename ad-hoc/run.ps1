dotnet run
Write-Output "";

ts-node ./greeting.ts
Write-Output "";

node ./greeting.js
Write-Output "";

python ./greeting.py
Write-Output "";

ruby ./greeting.rb
Write-Output "";

cargo run -q
Write-Output "";

swift run -q
Write-Output "";

runghc .\greeting.hs
Write-Output "";


$greet = { param ($name) "Hello, $name!" }
$people = @("PowerShell", "Wekoslav", "Sinergija", "Belgrade")

$greeted = $people | ForEach-Object { $greet.Invoke($_) }

foreach ($greeting in $greeted) {
    Write-Output $greeting
}

