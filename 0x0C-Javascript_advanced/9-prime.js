function countPrimeNumbers() {
    let numberOfPrimes = 1;
    let isPrime = 1;

    for(let i = 2; i <= 100; i++)
    {
        if (i % 2 == 0)
            continue;
            
        isPrime = 1;

        for(let div = 2; div < i; div++)
        {
            if(i % div == 0)
                isPrime = 0;
        }
        
        if(isPrime)
            numberOfPrimes++;
    }
    
    return numberOfPrimes;
}

const startTime = performance.now();
countPrimeNumbers();
const endTime = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${endTime - startTime} milliseconds.`);
