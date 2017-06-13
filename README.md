# Word Cruncher

This is an application that:
1. Counts the frequencies of words in a text file
2. Calculates whether the frequencies are a prime number

### Installation

- **Make sure you have [Node](https://nodejs.org/en/) installed**

- **Clone this repo**
```
$ git clone https://github.com/exchai93/word_cruncher.git
```
- **Update node packages**
```
$ cd word_cruncher
$ npm install
```
- **Run application**
```
$ node src/WordCruncher.js
```
### Approach

**Planning:** Focusing on agile and Object Orientated Design, I broke down the specification into smaller issues to write [user stories](#User Stories). This enabled me to identify 'noun' and 'verb' relationships, diagramming throughout this process.

**Test Driven Development:** I initially sought out to write my own unit tests without a testing framework, however I then realised this would not provide me the thorough  testing I wanted. I decided to use Jasmine due to its ease and my familiarity with it. TDD ensured I made logical design decisions and allowed me to identify bugs and solve them quickly.

![jasmine screenshot](/images/jasmine_screenshot.png)

**Refactoring:** I refactored as I went along developing the application wherever possible. This included renaming functions and tests so that they could be conveyed well.

**Challenges:**
- Familiarising myself with Javascript again and setting up the environment took longer than expected. However, I have now learnt a lot these few days!
- I had initially envisioned having an interface for my application however due to time constraints, I decided to run the application with node on the terminal.
- I have had an issue solving the error `Uncaught ReferenceError: require is not defined` when I run node. I installed [requirejs](http://requirejs.org/docs/node.html) however I have been unable to fix this. 

### Future improvements

If I had more time, I would like to improve my code by extracting out separate classes to ensure Single Responsibility Principle. Potentially having classes for:
- string formatting logic
- word counting
- managing text files
- interface
I would also implement the module pattern ensure clean, separated code where methods would be isolated from each other.

### Technologies
- Javascript
- Node.js v6.10.3
- Npm v3.10.10
- Jasmine v2.6.3

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
