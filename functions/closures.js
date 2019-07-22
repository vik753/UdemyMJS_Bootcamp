const myFunction = () => {
    const message = 'This is my message';
    const printMessage = () => {
        console.log(message);
    }
    return printMessage;
}

const message = myFunction();
message();

// Counter
const counter = () => {
    let count = 0;
    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        get() {
            return count;
        }
    }
}

const count = counter();
count.increment();
count.increment();
count.increment();
count.increment();
count.decrement();
counter.count = -5; //not work because it's closures
console.log(count.get());

// Tipper
const tipper = (percent) => {
    return (amount) => Math.round(amount * percent);
}

const getTip15 = tipper(.15);
console.log(getTip15(100));
const getTip25 = tipper(.25);
console.log(getTip25(100));
const getTip30 = tipper(.30);
console.log(getTip30(100));


// My budget
const myBudget = () => {
    let budget = 0;
    return {
        increment(amount) {
            budget += amount;
        },
        decrement(amount) {
            budget -= amount;
            budget = budget < 0 ? 0 : budget;
        },
        get() {
            return budget;
        }
    }
}

const vikBudget = myBudget();
vikBudget.increment(100);
vikBudget.decrement(10);
console.log(vikBudget.get());

const helenBudget = myBudget();
helenBudget.increment(100);
console.log(helenBudget.get());
helenBudget.decrement(110);
console.log(helenBudget.get());
console.log(vikBudget.get());