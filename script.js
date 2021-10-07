// This is a random message generator, it prints a new massage every time the user runs this script.

const greetArr = ['Hello', 'Hey', 'Hi', 'Hoy', 'Hello there', 'Howdy', 'Hey y\'all'];
const questionArr = ['How are you', 'How are ya', 'How are things', 'How\'s it going', 'What\'s happening'];
const answerArr = ['I hope you\'re great', 'I hope you\'re staying healthy', 'I hope you are having a productive day', 'I miss you! Are you doing okay?'];
const str = 'I just wanted to say';
const wishArr = ['Write it on your heart that every day is the best day in the year.', 'This is a wonderful day; I have never seen this one before', 'A great attitude is like a perfect cup of coffee – don’t start your day without it.', ' Make each day your masterpiece.', 'A good day is a good day. A bad day is a good story.', 'A bad day for our ego is a great day for our soul.'];

const message = {
    greet: greetArr,
    question: questionArr,
    answer: answerArr,
    wish: wishArr,
    selectGreet() {
        let selection = this.greet[Math.floor(Math.random() * (this.greet.length - 1))];
        return selection;
    }, 
    selectQuestion() {
        let selection = this.question[Math.floor(Math.random() * (this.question.length - 1))];
        return selection;
    },
    selectAnswer() {
        let selection = this.answer[Math.floor(Math.random() * (this.answer.length - 1))];
        return selection;
    },
    selectWish() {
        let selection = this.wish[Math.floor(Math.random() * (this.wish.length - 1))];
        return selection;
    }
};

const generateMessage = obj => {
    let result = `${obj.selectGreet()}! \n ${obj.selectQuestion()}? \n ${obj.selectAnswer()}. \n ${str.toUpperCase()} \n ${obj.selectWish()}.`;
    return result;
}

console.log(generateMessage(message));