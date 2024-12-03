greet = ->(name) { "Hello, #{name}!" }
people = ["Ruby", "Wekoslav", "Sinergija", "Belgrade"]

greeted = people.map(&greet)

greeted.each { |greeting| puts greeting }



