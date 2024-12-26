# halflife-array

Creates an array of the halflife of something as it decreases over time.

## Installation

```npm i halflife-array```

## Usage

```
readingAmount = 100;
halflifeMinutes = 300; // a halflife of 5 hours
intervalMinutes = 10; // the interval to represent in the array, i.e. each value is 10 minutes after the one before
amountLimit = 0.5; // stop calculating the amount once the value gets down to this amount
const halflifeArray = halflifeArray(readingAmount, halflifeMinutes, intervalMinutes, amountLimit);


console.log(halflifeArray);
// [100, 98.33333333333333, 96.66666666666667, 95, 93.33333333333333, 91.66666666666667, 90, ...]
```
