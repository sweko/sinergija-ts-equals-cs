use tokio::time::{sleep, Duration};

async fn count(numbers: &[i32]) {
    for &num in numbers {
        println!("{}", num);
        sleep(Duration::from_millis(100)).await; // 100ms delay
    }
}

#[tokio::main]
async fn main() {
    println!("Counting from 1 to 10 in {}", "Rust using Tokio");
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    count(&numbers).await;
}
