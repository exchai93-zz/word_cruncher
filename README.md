# Word Cruncher

A single page application that:
1. Counts the frequencies of words in a text file
2. Calculates whether the frequencies are a prime number

### How to run

- Clone this repo
- Make sure you have [Node](https://nodejs.org/en/) installed
- To make sure that you have the right node packages installed, run in your project directory:
 ```
 npm install
 ```


### Screenshots

### Approach

This application is built with Javascript, Node.js and npm.

**Domain modelling:** After writing out user stories, I made sure to make a draft plan of the direction I was


**Test Driven Development:** I initially sought out to write my own unit tests without a testing framework, however then realising this proved more difficult that I had anticipated. I wanted to test with ease so decided to use Jasmine. TDD ensured I made logical design decisions and allowed me to identify bugs and solve them quickly.

**Refactoring:** I refactored where

### Future improvements

This is by no means perfect. If I had more time, I would like to improve my code by extracting out separate classes to ensure Single Responsibility Principle and using the module pattern where possible. This would ensure clean, separated code where methods would be encapsulated from each other.

### Technologies
- Javascript
- Node v6.10.3
- Npm
- Jasmine

### User stories
```
As a user,
So that I can start the application,
I want to input a text file of the book.
```
```
As a user,
So that I know how many times each word appears,
I want to count all of the words in a book.
```
```
As a user,
So that I do not count the same word twice,
I want to ignore punctuation and upper cases.
```
```
As a user,
So that I can note any repetition,
I want to count how many times an individual word appears.
```
```
As a user,
So that I make further analysis,
I want to check if the number of times each word appears is a prime number.
```
