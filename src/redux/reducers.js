import { combineReducers } from 'redux';
import { QUESTION_ANSWER, CHANGE_QUESTION, SUBMIT, INIT_QUESTIONS } from "./actions";

function score(state = 0, action = {}) {
    switch (action.type) {
        case SUBMIT:
            action.questions.forEach((question) => {
                let ua = question.userAnswer;
                let a = question.answer;
                if (ua === a) { state += 1 }
            });
            return state;
        case INIT_QUESTIONS:
            return 0;
        default:
            return state;
    }
}

function finished(state = false, action = {}) {
    switch (action.type) {
        case SUBMIT:
            return true;
        case INIT_QUESTIONS:
            return false;
        default:
            return state;
    }
}

function currentQuestion(state = 0, action = {}) {
    switch (action.type) {
        case CHANGE_QUESTION:
            return action.index;
        case INIT_QUESTIONS:
            return 0;
        default:
            return state;
    }
}

function questions(state = [], action = {}) {
    switch (action.type) {
        case QUESTION_ANSWER:
            // -- Array.prototype.map() --
            /* var nuevo_array = arr.map(function callback(currentValue, index, array) {
                // Elemento devuelto de nuevo_array
             }[, thisArg]) */
            return state.map((question, i) => {
                return {
                    ...question,
                    userAnswer: action.payload.index === i ? action.payload.answer : question.userAnswer
                }
            });
        case INIT_QUESTIONS:
            return action.questions;
        default:
            return state;
    }
}

const GlobalState = (combineReducers({
    score,
    finished,
    currentQuestion,
    questions
}));

export default GlobalState;