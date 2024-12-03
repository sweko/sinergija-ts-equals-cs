greet = lambda name: f"Hello, {name}!"
people = ["Python", "Wekoslav", "Sinergija", "Belgrade"]

greeted = map(greet, people)

for greeting in greeted:
    print(greeting)




