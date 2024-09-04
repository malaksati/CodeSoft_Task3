function display(num) {
    document.getElementById("result").value += num;
    return num;
}
function isFloat(value) {
    if (
      typeof value === 'number' &&
      !Number.isNaN(value) &&
      !Number.isInteger(value)
    ) {
      return true;
    }
    return false;
}
function solve() {
    if (document.getElementById("result").value != "") {
        let x = document.getElementById("result").value;
        let y = eval(x);
        if(isFloat(y)){
            document.getElementById("result").value = y.toFixed(2);
            return y.toFixed(2);
        }else {
            document.getElementById("result").value = y;
            return y;
        }
    }
}
function clearScreen() {
    document.getElementById("result").value = "";
}
