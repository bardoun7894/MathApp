import CompareResults from './CompareResults'
import IsEmpty from './IsEmpty';

export default function MultiCompare(actual, expected, ordered = true) {
    if(ordered === true) return OrderedCompare(actual, expected)
    return UnorderedCompare(actual, expected)
}

function OrderedCompare(actual, expected) {
    let empty = false, wrong = false;
    for(let i = 0; i < actual.length; i++) {
        let result = CompareResults(actual[i], expected[i]);
        if (result === "empty") empty = true; 
        else if (result === "wrong")  wrong = true; 
    }
    if(empty === true) return "empty";
    if(wrong === true) return "wrong";
    return "correct";
}

function UnorderedCompare(actual, expected) {
    for(let i = 0; i < actual.length; i++) {
        if(IsEmpty(actual[i])) return "empty"
    }
    let visited = new Array(expected.length).fill(false)
    for(let i = 0; i < actual.length; i++) {
       let correct = false;
       for(let j = 0; j < expected.length; j++) {
           if(visited[j] === true) continue
           let result = CompareResults(actual[i], expected[j])
           if (result === "correct") {
               visited[j] = true;
               correct = true;
               break;
           }
       }
       if(correct === false) return "wrong"
    }
    return "correct";
}