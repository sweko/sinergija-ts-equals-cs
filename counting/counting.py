import asyncio

async def count(numbers):
    for num in numbers:
        print(num)
        await asyncio.sleep(0.1)  # 100ms delay

async def main():
    print("Counting from 1 to 10 in python")
    numbers = range(1, 11)
    await count(numbers)

asyncio.run(main())
