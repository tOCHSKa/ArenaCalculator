function calcPoints(rating, mult) {
  if (!rating) return 0;
  let p = ((1651.94 - 475) / (1 + 2500000 * Math.pow(2.71828, -0.009 * rating)) + 475) * 1.5;
  return Math.round(p * mult);
}

function calc() {
  let r2 = document.getElementById('r2').value;
  let r3 = document.getElementById('r3').value;
  let r5 = document.getElementById('r5').value;

  let p2 = calcPoints(r2, 0.76);
  let p3 = calcPoints(r3, 0.88);
  let p5 = calcPoints(r5, 1.0);

  document.getElementById('res2').innerText = p2;
  document.getElementById('res3').innerText = p3;
  document.getElementById('res5').innerText = p5;

  let best = Math.max(p2, p3, p5);
  document.getElementById('best').innerText = best;
  
  // Determine which bracket has the best points
  let bracket = '';
  if (best === p2) {
    bracket = '2v2';
  } else if (best === p3) {
    bracket = '3v3';
  } else {
    bracket = '5v5';
  }
  document.getElementById('bracket').innerText = bracket;
}

document.getElementById('refresh').addEventListener('click', function() {
    document.getElementById('res2').innerText = 0;
    document.getElementById('res3').innerText = 0;
    document.getElementById('res5').innerText = 0;
    document.getElementById('best').innerText = 0;
    document.getElementById('r2').value = '';
    document.getElementById('r3').value = '';
    document.getElementById('r5').value = '';
});
