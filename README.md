# halflife-array

Creates an array of the halflife of something as it decreases over time.

## Installation

```npm i halflife-array```

```yarn add halflife-array```

## Usage

* **readingAmount**: The initial value
* **halflifeMinutes**: The halflife in minutes, default: 300 (5 hours)
* **intervalMinutes**: The interval to represent in the array, i.e. each array value is 10 minutes after the one before
* **amountLimit**: The value to stop calculating the value at

```
const readingAmount = 100;
const halflifeMinutes = 300;
const intervalMinutes = 10; 
const amountLimit = 0.5;
const halflifeArray = halflifeArray(readingAmount, halflifeMinutes, intervalMinutes, amountLimit);
```

Which would create an array like this...

[100, 98.33333333333333, 96.66666666666667, 95, 93.33333333333333, 91.66666666666667, 90, ... , 0.5078125, 0.4947916666666667]

