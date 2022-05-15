//inverse
function inverse(a) {
  var det = 1 / (a[0] * a[3] - a[2] * a[1]);
  var solution = [det * a[3], -(det * a[1]), -(det * a[2]), det * a[0]];
  return solution;
}

function multiply(a, b) {
  var solution = [a[0] * b[0] + a[1] * b[1], a[2] * b[0] + a[3] * b[1]];
  return solution;
}

function finalSolution(a, b, c, d, x, y) {
  var A = [a, b, c, d];
  var B = [x, y];

  var result = multiply(inverse(A), B);
  return result;
}

//start solution
function startSolution() {
  var resultModal = document.getElementById("resultModal");
  var resultCont = document.getElementById("resultCont");
  var one_A = Number(document.getElementById("one_A").value);
  var one_B = Number(document.getElementById("one_B").value);
  var one_C = Number(document.getElementById("one_C").value);
  var two_A = Number(document.getElementById("two_A").value);
  var two_B = Number(document.getElementById("two_B").value);
  var two_C = Number(document.getElementById("two_C").value);
  var resultX = document.getElementById("resultX");
  var resultY = document.getElementById("resultY");

  var finalAnswer = finalSolution(one_A, one_B, two_A, two_B, one_C, two_C);
  var x = String(finalAnswer[0]);
  var y = String(finalAnswer[1]);
  //render results
  resultX.innerHTML = "X = " + x;
  resultY.innerHTML = "Y = " + y;
  //modals
  resultModal.style.display = "block";
  resultCont.style.display = "flex";
}

function hideModal() {
  var resultModal = document.getElementById("resultModal");
  var resultCont = document.getElementById("resultCont");
  resultModal.style.display = "none";
  resultCont.style.display = "none";
}
