const display = document.querySelector('#display');
let historyData = document.querySelector('#history-data');
let newElement;

appendToDisplay = (input) => {
    display.value += input
}

clearDisplay = () => {
    display.value = ""
}

clearHistory = () => {
    historyData.innerHTML = "";
}

calculate = () => {
    try{
        let result = eval(display.value);
        
        historyData.innerHTML = "";
        
        newElement = document.createElement("p");
        newElement.innerHTML = `${display.value} = ${result}`;
        historyData.append(newElement);

        display.value = result;

    }catch (err) {
        display.value = "Error";
    } 
}