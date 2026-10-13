// questions.js

const questionBank = {
    // Hack 1: Left vs. Right Split (solve for x by clicking the intersection)
    hack1: [
        { q: "If √(3x + 1) = 4, what is the value of x?", eq1: "y = \\sqrt{3x+1}", eq2: "y = 4", ans: "x = 5", key: "5" },
        { q: "If |2x - 4| = 10, what is the positive value of x?", eq1: "y = |2x - 4|", eq2: "y = 10", ans: "x = 7", key: "7" },
        { q: "If 5(x + 2) = 3x - 8, what is x?", eq1: "y = 5(x+2)", eq2: "y = 3x-8", ans: "x = -9", key: "-9" },
        { q: "If 4(x - 1) = 2x + 10, what is the value of x?", eq1: "y = 4(x-1)", eq2: "y = 2x+10", ans: "The lines cross at x = 7.", key: "7" },
        { q: "If √(x + 5) = 3, what is the value of x?", eq1: "y = \\sqrt{x+5}", eq2: "y = 3", ans: "The curve meets the line at x = 4.", key: "4" },
        { q: "If |x - 3| = 8, what is the positive value of x?", eq1: "y = |x - 3|", eq2: "y = 8", ans: "The V crosses the line at x = 11 (and x = -5). The positive one is x = 11.", key: "11" },
        { q: "What is the greater solution to the equation x² - 5x + 6 = 0?", eq1: "y = x^2 - 5x + 6", eq2: "y = 0", ans: "The parabola crosses the x-axis at x = 2 and x = 3. The greater is x = 3.", key: "3" },
        { q: "If 3^x = 81, what is the value of x?", eq1: "y = 3^x", eq2: "y = 81", ans: "The curve meets the line at x = 4.", key: "4" },
        { q: "If (x + 1)/(x - 2) = 3, what is the value of x?", eq1: "y = \\frac{x+1}{x-2}", eq2: "y = 3", ans: "The curve meets the line at x = 3.5.", key: "3.5" },
        { q: "What is the solution to the equation √(2x - 1) = x - 2?", eq1: "y = \\sqrt{2x-1}", eq2: "y = x - 2", ans: "The curves cross only once, at x = 5. Only trust a crossing you can actually see.", key: "5" },
        { q: "What is the sum of all solutions to the equation |3x + 2| = x + 10?", eq1: "y = |3x + 2|", eq2: "y = x + 10", ans: "Two crossings: x = 4 and x = -3. Sum = 1.", key: "1" },
        { q: "What is the negative solution to the equation x² = 49?", eq1: "y = x^2", eq2: "y = 49", ans: "The crossings are x = 7 and x = -7. The negative one is x = -7.", key: "-7" }
    ],

    // Hack 2: Slider Sweep (k). The question never says "drag" - the trigger phrases are the cue.
    hack2: [
        { q: "y = 3x + 5<br>y = kx - 2<br>In the given system of equations, k is a constant. If the system has no solution, what is the value of k?", eq1: "y = 3x + 5", eq2: "y = kx - 2", ans: "Lines parallel, never crossing. k = 3", key: "3" },
        { q: "y = -2x + 7<br>y = kx + 4<br>In the given system of equations, k is a constant. If the system has no solution, what is the value of k?", eq1: "y = -2x + 7", eq2: "y = kx + 4", ans: "Lines parallel, never crossing. k = -2", key: "-2" },
        { q: "y = 4x - 1<br>y = kx + 6<br>In the given system of equations, k is a constant. If the system has no solution, what is the value of k?", eq1: "y = 4x - 1", eq2: "y = kx + 6", ans: "Lines parallel, never crossing. k = 4", key: "4" },
        { q: "y = -5x + 2<br>y = kx - 3<br>In the given system of equations, k is a constant. If the system has no solution, what is the value of k?", eq1: "y = -5x + 2", eq2: "y = kx - 3", ans: "Lines parallel, never crossing. k = -5", key: "-5" },
        { q: "y = (1/2)x + 3<br>y = kx - 1<br>In the given system of equations, k is a constant. If the system has no solution, what is the value of k?", eq1: "y = \\frac{1}{2}x + 3", eq2: "y = kx - 1", ans: "Lines parallel, never crossing. k = 1/2 (0.5)", key: "0.5" },
        { q: "6x + 3y = 9<br>kx + y = 5<br>In the given system of equations, k is a constant. If the system has no solution, what is the value of k?", eq1: "6x + 3y = 9", eq2: "kx + y = 5", ans: "Lines parallel, never crossing. k = 2", key: "2" },
        { q: "kx + 2y = 8<br>3x + 4y = 10<br>In the given system of equations, k is a constant. If the system has no solution, what is the value of k?", eq1: "kx + 2y = 8", eq2: "3x + 4y = 10", ans: "Lines parallel, never crossing. k = 3/2 (1.5)", key: "1.5" },
        { q: "5x - 2y = 10<br>kx - 4y = 7<br>In the given system of equations, k is a constant. If the system has no solution, what is the value of k?", eq1: "5x - 2y = 10", eq2: "kx - 4y = 7", ans: "Lines parallel, never crossing. k = 10", key: "10" },
        { q: "2y = 6x + 8<br>y = 3x + k<br>In the given system of equations, k is a constant. If the system has infinitely many solutions, what is the value of k?", eq1: "2y = 6x + 8", eq2: "y = 3x + k", ans: "One line hides the other. k = 4", key: "4" },
        { q: "The equation x² - 6x + 5 = k, where k is a constant, has exactly one solution. What is the value of k?", eq1: "y = x^2 - 6x + 5", eq2: "y = k", ans: "The line just touches the bottom of the U. k = -4", key: "-4" },
        { q: "The equation -x² + 4x + 1 = k, where k is a constant, has exactly one solution. What is the value of k?", eq1: "y = -x^2 + 4x + 1", eq2: "y = k", ans: "The line just touches the top of the hill. k = 5", key: "5" },
        { q: "The equation x² + 2x - 3 = k, where k is a constant, has exactly one solution. What is the value of k?", eq1: "y = x^2 + 2x - 3", eq2: "y = k", ans: "The line just touches the bottom of the U. k = -4", key: "-4" },
        { q: "y = x²<br>y = 4x + k<br>In the given system of equations, k is a constant. If the system has exactly one solution, what is the value of k?", eq1: "y = x^2", eq2: "y = 4x + k", ans: "The slanted line just touches the parabola at one point. k = -4", key: "-4" }
    ],

    // Hack 3: Equivalent Expressions (the choice that hides Line 1 wins)
    hack3: [
        { q: "Which expression is equivalent to (x + 3)(x - 2)?<br>A) x² + x - 6<br>B) x² - x - 6<br>C) x² + 5x - 6<br>D) x² - 5x + 6", eq1: "y = (x+3)(x-2)", eq2: "y = x^2 + x - 6", ans: "Choice A hides Line 1 completely.", key: "A" },
        { q: "Which expression is equivalent to 2(x - 1)² + 3?<br>A) 2x² + 4x + 5<br>B) 2x² - 2x + 5<br>C) 2x² - 4x + 5<br>D) 2x² - 4x + 1", eq1: "y = 2(x-1)^2 + 3", eq2: "y = 2x^2 - 4x + 5", ans: "Choice C hides Line 1 completely.", key: "C" },
        { q: "Which expression is equivalent to (x² - 9)/(x - 3), where x ≠ 3?<br>A) x - 3<br>B) x + 3<br>C) x² - 3<br>D) x + 9", eq1: "y = \\frac{x^2-9}{x-3}", eq2: "y = x + 3", ans: "Choice B hides Line 1 completely.", key: "B" },
        { q: "Which expression is equivalent to (x² + 5x + 6)/(x + 2), where x ≠ -2?<br>A) x + 2<br>B) x + 6<br>C) x + 3<br>D) x + 5", eq1: "y = \\frac{x^2+5x+6}{x+2}", eq2: "y = x + 3", ans: "Choice C hides Line 1 completely.", key: "C" },
        { q: "Which expression is equivalent to (x - 4)²?<br>A) x² - 16<br>B) x² - 8x + 16<br>C) x² + 8x + 16<br>D) x² - 4x + 16", eq1: "y = (x-4)^2", eq2: "y = x^2 - 8x + 16", ans: "Choice B hides Line 1 completely.", key: "B" },
        { q: "Which expression is equivalent to x(x + 1)(x - 1)?<br>A) x³ + x<br>B) x³ - x²<br>C) x³ - x<br>D) x³ - 1", eq1: "y = x(x+1)(x-1)", eq2: "y = x^3 - x", ans: "Choice C hides Line 1 completely.", key: "C" },
        { q: "Which expression is equivalent to (2x² + 4x)/(x + 2), where x ≠ -2?<br>A) 2x + 4<br>B) x<br>C) 2x<br>D) 2x²", eq1: "y = \\frac{2x^2+4x}{x+2}", eq2: "y = 2x", ans: "Choice C hides Line 1 completely.", key: "C" },
        { q: "Which expression is equivalent to 3(x + 2) - (x - 4)?<br>A) 2x + 2<br>B) 2x + 10<br>C) 4x + 2<br>D) 4x + 10", eq1: "y = 3(x+2) - (x-4)", eq2: "y = 2x + 10", ans: "Choice B hides Line 1 completely.", key: "B" }
    ],

    // Hack 4: Instant Regressions (table + squiggle). Table values live in q; read the parameters from Desmos.
    hack4: [
        { q: "In the table, y is a linear function of x. Which equation defines the function?<br>x: 1, 2, 3, 4, 5<br>y: 5, 8, 11, 14, 17<br>A) y = 2x + 3<br>B) y = 3x + 2<br>C) y = 3x + 5<br>D) y = 5x - 3", eq1: "+ → Table. Column x_1: 1, 2, 3, 4, 5. Column y_1: 5, 8, 11, 14, 17.", eq2: "y_1 ~ mx_1 + b", ans: "Desmos shows m = 3, b = 2. Choice B.", key: "B" },
        { q: "In the table, y is a linear function of x. Which equation defines the function?<br>x: 1, 2, 3, 4<br>y: 7, 5, 3, 1<br>A) y = -2x + 9<br>B) y = 2x + 5<br>C) y = -2x + 7<br>D) y = -3x + 10", eq1: "+ → Table. Column x_1: 1, 2, 3, 4. Column y_1: 7, 5, 3, 1.", eq2: "y_1 ~ mx_1 + b", ans: "Desmos shows m = -2, b = 9. Choice A.", key: "A" },
        { q: "The table shows values of x and y for a linear relationship. What is the y-intercept of the line that models these data?<br>x: 2, 4, 6, 8<br>y: 7, 11, 15, 19", eq1: "+ → Table. Column x_1: 2, 4, 6, 8. Column y_1: 7, 11, 15, 19.", eq2: "y_1 ~ mx_1 + b", ans: "Desmos shows m = 2, b = 3. The y-intercept is 3.", key: "3" },
        { q: "The table shows values of x and y for a linear relationship. What is the slope of the line that models these data?<br>x: 1, 2, 3, 4<br>y: 2.5, 4, 5.5, 7", eq1: "+ → Table. Column x_1: 1, 2, 3, 4. Column y_1: 2.5, 4, 5.5, 7.", eq2: "y_1 ~ mx_1 + b", ans: "Desmos shows m = 1.5, b = 1. The slope is 1.5.", key: "1.5" },
        { q: "In the table, y is an exponential function of x. Which equation defines the function?<br>x: 0, 1, 2, 3<br>y: 2, 6, 18, 54<br>A) y = 3(2)^x<br>B) y = 2(3)^x<br>C) y = 6x + 2<br>D) y = 2(6)^x", eq1: "+ → Table. Column x_1: 0, 1, 2, 3. Column y_1: 2, 6, 18, 54.", eq2: "y_1 ~ ab^{x_1}", ans: "Desmos shows a = 2, b = 3. Choice B.", key: "B" },
        { q: "In the table, y is a quadratic function of x. Which equation defines the function?<br>x: 0, 1, 2, 3<br>y: 3, 2, 3, 6<br>A) y = x² - 2x + 3<br>B) y = x² + 2x + 3<br>C) y = 3x² - 4x + 3<br>D) y = x² - 3", eq1: "+ → Table. Column x_1: 0, 1, 2, 3. Column y_1: 3, 2, 3, 6.", eq2: "y_1 ~ ax_1^2 + bx_1 + c", ans: "Desmos shows a = 1, b = -2, c = 3. Choice A.", key: "A" },
        { q: "The table shows six data points. Which equation is the best model for the line of best fit?<br>x: 1, 2, 3, 4, 5, 6<br>y: 4, 7, 9, 13, 14, 18<br>A) y = 1.7x + 1.3<br>B) y = 2.7x + 1.3<br>C) y = 2.7x + 3.3<br>D) y = 3.7x + 1.3", eq1: "+ → Table. Column x_1: 1, 2, 3, 4, 5, 6. Column y_1: 4, 7, 9, 13, 14, 18.", eq2: "y_1 ~ mx_1 + b", ans: "Desmos shows m ≈ 2.71, b ≈ 1.33. Choice B.", key: "B" },
        { q: "The table shows six data points. Which equation is the best model for the line of best fit?<br>x: 0, 1, 2, 3, 4, 5<br>y: 20, 17, 15, 10, 8, 4<br>A) y = 3.2x + 20.3<br>B) y = -3.2x + 10.3<br>C) y = -3.2x + 20.3<br>D) y = -2.2x + 20.3", eq1: "+ → Table. Column x_1: 0, 1, 2, 3, 4, 5. Column y_1: 20, 17, 15, 10, 8, 4.", eq2: "y_1 ~ mx_1 + b", ans: "Desmos shows m ≈ -3.2, b ≈ 20.33. Choice C.", key: "C" },
        { q: "The table shows five data points. Which equation is the best model for the line of best fit?<br>x: 2, 4, 6, 8, 10<br>y: 9, 13, 18, 20, 26<br>A) y = 2x + 5<br>B) y = 3x + 5<br>C) y = 2x + 9<br>D) y = 5x + 2", eq1: "+ → Table. Column x_1: 2, 4, 6, 8, 10. Column y_1: 9, 13, 18, 20, 26.", eq2: "y_1 ~ mx_1 + b", ans: "Desmos shows m ≈ 2.05, b ≈ 4.9. Closest is choice A.", key: "A" },
        { q: "The table shows five data points. Which equation is the best model for the line of best fit?<br>x: 1, 2, 3, 4, 5<br>y: 12, 15, 17, 22, 24<br>A) y = 3x + 4<br>B) y = 3x + 9<br>C) y = 4x + 9<br>D) y = 2x + 9", eq1: "+ → Table. Column x_1: 1, 2, 3, 4, 5. Column y_1: 12, 15, 17, 22, 24.", eq2: "y_1 ~ mx_1 + b", ans: "Desmos shows m = 3.1, b = 8.7. Closest is choice B.", key: "B" }
    ],

    // Hack 5: Quadratic Extremas (click the vertex or the x-axis crossings)
    hack5: [
        { q: "The function f is defined by f(x) = x² - 6x + 5. What is the minimum value of f?", eq1: "y = x^2 - 6x + 5", ans: "Bottom of the U is the point (3, -4). The minimum value is -4.", key: "-4" },
        { q: "The function g is defined by g(x) = -x² + 4x + 5. What is the maximum value of g?", eq1: "y = -x^2 + 4x + 5", ans: "Top of the hill is the point (2, 9). The maximum value is 9.", key: "9" },
        { q: "What is the positive solution to the equation x² - 2x - 8 = 0?", eq1: "y = x^2 - 2x - 8", ans: "The parabola crosses the x-axis at -2 and 4. The positive solution is 4.", key: "4" },
        { q: "The function f is defined by f(x) = x² + 4x - 5. For what value of x does f(x) reach its minimum?", eq1: "y = x^2 + 4x - 5", ans: "Bottom of the U is the point (-2, -9). The x-value is -2.", key: "-2" },
        { q: "The function f is defined by f(x) = -2x² + 8x. What is the greatest value of f?", eq1: "y = -2x^2 + 8x", ans: "Top of the hill is the point (2, 8). The greatest value is 8.", key: "8" },
        { q: "What is the smaller solution to the equation x² - 10x + 21 = 0?", eq1: "y = x^2 - 10x + 21", ans: "The parabola crosses the x-axis at 3 and 7. The smaller solution is 3.", key: "3" },
        { q: "The function h(t) = -16t² + 64t + 5 gives the height, in feet, of a ball t seconds after it is thrown upward. What is the maximum height, in feet, of the ball?", eq1: "y = -16x^2 + 64x + 5", ans: "Top of the hill is the point (2, 69). The maximum height is 69 feet. (Zoom out if you can't see it.)", key: "69" },
        { q: "The function f is defined by f(x) = x² + 6x + 10. What is the minimum value of f?", eq1: "y = x^2 + 6x + 10", ans: "Bottom of the U is the point (-3, 1). The minimum value is 1. It never touches the x-axis.", key: "1" }
    ],

    // Hack 6: Circle Geometry (type it as written, read the edges off the grid)
    hack6: [
        { q: "In the xy-plane, the graph of x² + y² - 6x + 4y - 12 = 0 is a circle. What is the radius of the circle?", eq1: "x^2 + y^2 - 6x + 4y - 12 = 0", ans: "The circle spans x = -2 to x = 8, so it is 10 wide. Radius = 5. (Center is (3, -2).)", key: "5" },
        { q: "In the xy-plane, the graph of x² + y² + 8x - 2y + 8 = 0 is a circle. What are the coordinates of the center of the circle?", eq1: "x^2 + y^2 + 8x - 2y + 8 = 0", ans: "The circle spans x = -7 to x = -1, and y = -2 to y = 4. Center = (-4, 1). (Radius is 3.)", key: "(-4, 1)" },
        { q: "In the xy-plane, the graph of x² + y² - 4x - 6y - 3 = 0 is a circle. What is the radius of the circle?", eq1: "x^2 + y^2 - 4x - 6y - 3 = 0", ans: "The circle spans x = -2 to x = 6, so it is 8 wide. Radius = 4. (Center is (2, 3).)", key: "4" },
        { q: "In the xy-plane, the graph of x² + y² + 6x = 0 is a circle. What are the coordinates of the center of the circle?", eq1: "x^2 + y^2 + 6x = 0", ans: "The circle spans x = -6 to x = 0 and sits on the x-axis. Center = (-3, 0). (Radius is 3.)", key: "(-3, 0)" },
        { q: "In the xy-plane, the graph of x² + y² - 2x - 8y + 1 = 0 is a circle. What is the radius of the circle?", eq1: "x^2 + y^2 - 2x - 8y + 1 = 0", ans: "The circle spans x = -3 to x = 5, so it is 8 wide. Radius = 4. (Center is (1, 4).)", key: "4" },
        { q: "In the xy-plane, the graph of x² + y² + 10y - 11 = 0 is a circle. What are the coordinates of the center of the circle?", eq1: "x^2 + y^2 + 10y - 11 = 0", ans: "The circle spans y = -11 to y = 1 and is centered on the y-axis. Center = (0, -5). (Radius is 6.)", key: "(0, -5)" },
        { q: "In the xy-plane, the graph of x² + y² - 12x + 20 = 0 is a circle. What is the radius of the circle?", eq1: "x^2 + y^2 - 12x + 20 = 0", ans: "The circle spans x = 2 to x = 10, so it is 8 wide. Radius = 4. (Center is (6, 0).)", key: "4" },
        { q: "In the xy-plane, the graph of x² + y² - 8x + 6y = 0 is a circle. What is the diameter of the circle?", eq1: "x^2 + y^2 - 8x + 6y = 0", ans: "The circle spans x = -1 to x = 9, so the diameter is 10. (Radius 5, center (4, -3). It passes through the origin.)", key: "10" }
    ]
};

// Answer checking. Compares numbers (accepts 1/2, 0.5, .5, "(-4, 1)") or a single choice letter.
function parseNums(str) {
    const m = String(str).match(/-?\d*\.?\d+(?:\/-?\d*\.?\d+)?/g) || [];
    return m.map(t => t.includes('/') ? parseFloat(t.split('/')[0]) / parseFloat(t.split('/')[1]) : parseFloat(t));
}
function isCorrect(input, key) {
    const val = String(input).trim();
    if (!val) return false;
    if (/^[A-D]$/i.test(key)) return val.toUpperCase() === key.toUpperCase();
    const a = parseNums(val), b = parseNums(key);
    return a.length === b.length && a.length > 0 && a.every((n, i) => Math.abs(n - b[i]) < 1e-6);
}

const currentQ = {};

function checkAnswer(containerId, value) {
    const q = currentQ[containerId];
    const fb = document.getElementById(containerId + '-fb');
    if (value === undefined) value = document.getElementById(containerId + '-in').value;
    if (!String(value).trim()) { fb.className = 'text-xs font-bold mt-2 text-gray-600'; fb.textContent = 'Type or tap an answer first.'; return; }
    if (isCorrect(value, q.key)) {
        fb.className = 'text-xs font-bold mt-2 text-green-700';
        fb.textContent = '✅ Correct! Open the reveal to compare keystrokes, then roll the next one.';
        document.getElementById(containerId + '-reveal').open = true;
    } else {
        fb.className = 'text-xs font-bold mt-2 text-orange-600';
        fb.textContent = '❌ Not yet. Check your Desmos lines and try again. (The reveal has the keystrokes.)';
    }
}

function rollQuestion(hackId, containerId) {
    const questions = questionBank[hackId];
    if (!questions) return;
    
    const randomQ = questions[Math.floor(Math.random() * questions.length)];
    const container = document.getElementById(containerId);
    currentQ[containerId] = randomQ;
    const isChoice = randomQ.key && /^[A-D]$/i.test(randomQ.key);
    const answerUI = !randomQ.key ? '' : isChoice
        ? `<div class="flex gap-2 my-2">${['A','B','C','D'].map(l => `<button onclick="checkAnswer('${containerId}', '${l}')" class="bg-white border border-gray-300 hover:bg-blue-50 rounded px-4 py-2 text-sm font-bold">${l}</button>`).join('')}</div><p id="${containerId}-fb" class="text-xs font-bold mt-2"></p>`
        : `<div class="flex gap-2 my-2"><input id="${containerId}-in" type="text" inputmode="text" autocomplete="off" placeholder="Your answer" onkeydown="if(event.key==='Enter') checkAnswer('${containerId}')" class="border border-gray-300 rounded px-2 py-1 text-sm w-32"><button onclick="checkAnswer('${containerId}')" class="bg-blue-600 hover:bg-blue-700 text-white rounded px-3 py-1 text-sm font-bold">Check</button></div><p id="${containerId}-fb" class="text-xs font-bold mt-2"></p>`;
    
    container.innerHTML = `
        <p class="font-bold text-gray-800 text-sm mt-2">Question:</p>
        <p class="mb-3 italic text-gray-900 text-sm">${randomQ.q}</p>
        
        ${answerUI}
        <details id="${containerId}-reveal" class="bg-gray-100 border border-gray-200 rounded p-2 mt-2">
            <summary class="font-semibold text-green-700 hover:text-green-800 flex justify-between items-center text-xs outline-none cursor-pointer">
                <span>👁️ Reveal Keystrokes & Answer</span>
            </summary>
            <div class="mt-2 pt-2 border-t border-gray-300">
                <p class="font-bold text-xs text-gray-600 mb-1">Desmos Input:</p>
                <p class="font-mono bg-white p-1 border rounded text-xs mb-1">Line 1: ${randomQ.eq1}</p>
                ${randomQ.eq2 ? `<p class="font-mono bg-white p-1 border rounded text-xs mb-3">Line 2: ${randomQ.eq2}</p>` : ''}
                <p class="font-bold text-green-800 text-xs">Answer:</p>
                <p class="text-xs"><strong>${randomQ.ans}</strong></p>
            </div>
        </details>
    `;
}

// Roll initial questions on load
window.addEventListener('DOMContentLoaded', () => {
    rollQuestion('hack1', 'q-hack1');
    rollQuestion('hack2', 'q-hack2');
    rollQuestion('hack3', 'q-hack3');
    rollQuestion('hack4', 'q-hack4');
    rollQuestion('hack5', 'q-hack5');
    rollQuestion('hack6', 'q-hack6');
});
