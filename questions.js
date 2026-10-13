// questions.js

const questionBank = {
    hack1: [
        { q: "If √(3x + 1) = 4, what is the value of x?", eq1: "y = \\sqrt{3x+1}", eq2: "y = 4", ans: "x = 5" },
        { q: "If |2x - 4| = 10, what is the positive value of x?", eq1: "y = |2x - 4|", eq2: "y = 10", ans: "x = 7" },
        { q: "If 5(x + 2) = 3x - 8, what is x?", eq1: "y = 5(x+2)", eq2: "y = 3x-8", ans: "x = -9" },
        { q: "If 4(x - 1) = 2x + 10, what is the value of x?", eq1: "y = 4(x-1)", eq2: "y = 2x+10", ans: "x = 7" },
        { q: "If √(x + 5) = 3, what is the value of x?", eq1: "y = \\sqrt{x+5}", eq2: "y = 3", ans: "x = 4" },
        { q: "If |x - 3| = 8, what is the positive value of x?", eq1: "y = |x - 3|", eq2: "y = 8", ans: "x = 11" },
        { q: "If x² - 5x + 6 = 0, what is the greater solution?", eq1: "y = x^2 - 5x + 6", eq2: "y = 0", ans: "x = 3" },
        { q: "If 3^x = 81, what is the value of x?", eq1: "y = 3^x", eq2: "y = 81", ans: "x = 4" },
        { q: "If (x + 1)/(x - 2) = 3, what is the value of x?", eq1: "y = \\frac{x+1}{x-2}", eq2: "y = 3", ans: "x = 3.5" },
        { q: "If √(2x - 1) = x - 2, what is the value of x? (Watch for a fake solution!)", eq1: "y = \\sqrt{2x-1}", eq2: "y = x - 2", ans: "x = 5 (the graphs cross only once; x = 1 is extraneous)" },
        { q: "What is the sum of all solutions to |3x + 2| = x + 10?", eq1: "y = |3x + 2|", eq2: "y = x + 10", ans: "Intersections at x = 4 and x = -3, so the sum is 1" },
        { q: "If x² = 49, what is the negative value of x?", eq1: "y = x^2", eq2: "y = 49", ans: "x = -7" }
    ],
    hack2: [
        { q: "The system y = 3x + 5 and y = kx - 2 has no solution. What is k?", eq1: "y = 3x + 5", eq2: "y = kx - 2", ans: "k = 3" },
        { q: "The system y = -2x + 7 and y = kx + 4 has no solution. What is k?", eq1: "y = -2x + 7", eq2: "y = kx + 4", ans: "k = -2" },
        { q: "The system y = 4x - 1 and y = kx + 6 has no solution. What is k?", eq1: "y = 4x - 1", eq2: "y = kx + 6", ans: "k = 4" },
        { q: "The system y = -5x + 2 and y = kx - 3 has no solution. What is k?", eq1: "y = -5x + 2", eq2: "y = kx - 3", ans: "k = -5" },
        { q: "The system y = (1/2)x + 3 and y = kx - 1 has no solution. What is k?", eq1: "y = \\frac{1}{2}x + 3", eq2: "y = kx - 1", ans: "k = 1/2 (0.5)" },
        { q: "The system 6x + 3y = 9 and kx + y = 5 has no solution. What is k?", eq1: "6x + 3y = 9", eq2: "kx + y = 5", ans: "k = 2" },
        { q: "The system kx + 2y = 8 and 3x + 4y = 10 has no solution. What is k?", eq1: "kx + 2y = 8", eq2: "3x + 4y = 10", ans: "k = 3/2 (1.5)" },
        { q: "The system 5x - 2y = 10 and kx - 4y = 7 has no solution. What is k?", eq1: "5x - 2y = 10", eq2: "kx - 4y = 7", ans: "k = 10" },
        { q: "The system 2y = 6x + 8 and y = 3x + k has infinitely many solutions. What is k? (Drag k until the lines sit on top of each other.)", eq1: "2y = 6x + 8", eq2: "y = 3x + k", ans: "k = 4" },
        { q: "For what value of k does the line y = k touch the parabola y = x² - 6x + 5 at exactly one point? (Drag k until the line just kisses the curve.)", eq1: "y = x^2 - 6x + 5", eq2: "y = k", ans: "k = -4 (the line rests on the bottom of the U)" },
        { q: "For what value of k does the line y = k touch the parabola y = -x² + 4x + 1 at exactly one point? (Drag k until the line just kisses the curve.)", eq1: "y = -x^2 + 4x + 1", eq2: "y = k", ans: "k = 5 (the line rests on the top of the hill)" },
        { q: "The equation x² + 2x - 3 = k has exactly one solution. What is k? (Drag k until the line just kisses the curve.)", eq1: "y = x^2 + 2x - 3", eq2: "y = k", ans: "k = -4 (the line rests on the bottom of the U)" }
    ],
    hack3: [
        { q: "Which expression is equivalent to (x + 3)(x - 2)?<br>A) x² + x - 6<br>B) x² - x - 6<br>C) x² + 5x - 6<br>D) x² - 5x + 6", eq1: "y = (x+3)(x-2)", eq2: "y = x^2 + x - 6", ans: "A. Type each choice on Line 2. The right one hides Line 1 completely." },
        { q: "Which expression is equivalent to 2(x - 1)² + 3?<br>A) 2x² + 4x + 5<br>B) 2x² - 2x + 5<br>C) 2x² - 4x + 5<br>D) 2x² - 4x + 1", eq1: "y = 2(x-1)^2 + 3", eq2: "y = 2x^2 - 4x + 5", ans: "C. Type each choice on Line 2. The right one hides Line 1 completely." },
        { q: "Which expression is equivalent to (x² - 9)/(x - 3)?<br>A) x - 3<br>B) x + 3<br>C) x² - 3<br>D) x + 9", eq1: "y = \\frac{x^2-9}{x-3}", eq2: "y = x + 3", ans: "B. Type each choice on Line 2. The right one hides Line 1 completely." },
        { q: "Which expression is equivalent to (x² + 5x + 6)/(x + 2)?<br>A) x + 2<br>B) x + 6<br>C) x + 3<br>D) x + 5", eq1: "y = \\frac{x^2+5x+6}{x+2}", eq2: "y = x + 3", ans: "C. Type each choice on Line 2. The right one hides Line 1 completely." },
        { q: "Which expression is equivalent to (x - 4)²?<br>A) x² - 16<br>B) x² - 8x + 16<br>C) x² + 8x + 16<br>D) x² - 4x + 16", eq1: "y = (x-4)^2", eq2: "y = x^2 - 8x + 16", ans: "B. Type each choice on Line 2. The right one hides Line 1 completely." },
        { q: "Which expression is equivalent to x(x + 1)(x - 1)?<br>A) x³ + x<br>B) x³ - x²<br>C) x³ - x<br>D) x³ - 1", eq1: "y = x(x+1)(x-1)", eq2: "y = x^3 - x", ans: "C. Type each choice on Line 2. The right one hides Line 1 completely." },
        { q: "Which expression is equivalent to (2x² + 4x)/(x + 2)?<br>A) 2x + 4<br>B) x<br>C) 2x<br>D) 2x²", eq1: "y = \\frac{2x^2+4x}{x+2}", eq2: "y = 2x", ans: "C. Type each choice on Line 2. The right one hides Line 1 completely." },
        { q: "Which expression is equivalent to 3(x + 2) - (x - 4)?<br>A) 2x + 2<br>B) 2x + 10<br>C) 4x + 2<br>D) 4x + 10", eq1: "y = 3(x+2) - (x-4)", eq2: "y = 2x + 10", ans: "B. Type each choice on Line 2. The right one hides Line 1 completely." }
    ],
    hack4: [
        { q: "Make a table.<br>x: 1, 2, 3, 4, 5<br>y: 5, 8, 11, 14, 17<br>What is the slope (m)?", eq1: "y_1 ~ mx_1 + b", ans: "m = 3 (and b = 2)" },
        { q: "Make a table.<br>x: 1, 2, 3, 4<br>y: 7, 5, 3, 1<br>What is the y-intercept (b)?", eq1: "y_1 ~ mx_1 + b", ans: "b = 9 (and m = -2)" },
        { q: "Make a table.<br>x: 2, 4, 6, 8<br>y: 7, 11, 15, 19<br>What is the y-intercept (b)?", eq1: "y_1 ~ mx_1 + b", ans: "b = 3 (and m = 2)" },
        { q: "Make a table.<br>x: 1, 2, 3, 4<br>y: 2.5, 4, 5.5, 7<br>What is the slope (m)?", eq1: "y_1 ~ mx_1 + b", ans: "m = 1.5 (and b = 1)" },
        { q: "Make a table.<br>x: 0, 1, 2, 3<br>y: 2, 6, 18, 54<br>Each step, y is multiplied by what number? (Use the exponential squiggle.)", eq1: "y_1 ~ ab^{x_1}", ans: "b = 3 (and a = 2)" },
        { q: "Make a table.<br>x: 0, 1, 2, 3<br>y: 3, 2, 3, 6<br>What is b? (Use the parabola squiggle.)", eq1: "y_1 ~ ax_1^2 + bx_1 + c", ans: "b = -2 (a = 1, c = 3)" }
    ],
    hack5: [
        { q: "What is the minimum value of y = x² - 6x + 5?", eq1: "y = x^2 - 6x + 5", ans: "Click the bottom of the U: (3, -4). The minimum value is -4." },
        { q: "What is the maximum value of y = -x² + 4x + 5?", eq1: "y = -x^2 + 4x + 5", ans: "Click the top of the hill: (2, 9). The maximum value is 9." },
        { q: "What is the positive zero of y = x² - 2x - 8?", eq1: "y = x^2 - 2x - 8", ans: "Click where it crosses the x-axis on the right: x = 4. (The other is x = -2.)" },
        { q: "At what x-value does y = x² + 4x - 5 reach its minimum?", eq1: "y = x^2 + 4x - 5", ans: "Click the bottom of the U: (-2, -9). The x-value is -2." },
        { q: "What is the greatest value of y = -2x² + 8x?", eq1: "y = -2x^2 + 8x", ans: "Click the top of the hill: (2, 8). The greatest value is 8." },
        { q: "What is the smaller zero of y = x² - 10x + 21?", eq1: "y = x^2 - 10x + 21", ans: "Click the left x-axis crossing: x = 3. (The other is x = 7.)" },
        { q: "A ball's height is y = -16x² + 64x + 5, where x is seconds. What is its maximum height?", eq1: "y = -16x^2 + 64x + 5", ans: "Click the top of the hill: (2, 69). The maximum height is 69. (Zoom out if you can't see it.)" },
        { q: "What is the minimum value of y = x² + 6x + 10?", eq1: "y = x^2 + 6x + 10", ans: "Click the bottom of the U: (-3, 1). The minimum value is 1. (It never touches the x-axis.)" }
    ],
    hack6: [
        { q: "What is the radius of the circle x² + y² - 6x + 4y - 12 = 0?", eq1: "x^2 + y^2 - 6x + 4y - 12 = 0", ans: "Radius = 5. Center = (3, -2). The circle spans x = -2 to x = 8." },
        { q: "What is the center of the circle x² + y² + 8x - 2y + 8 = 0?", eq1: "x^2 + y^2 + 8x - 2y + 8 = 0", ans: "Center = (-4, 1). Radius = 3." },
        { q: "What is the radius of the circle x² + y² - 4x - 6y - 3 = 0?", eq1: "x^2 + y^2 - 4x - 6y - 3 = 0", ans: "Radius = 4. Center = (2, 3)." },
        { q: "What is the center of the circle x² + y² + 6x = 0?", eq1: "x^2 + y^2 + 6x = 0", ans: "Center = (-3, 0). Radius = 3." },
        { q: "What is the radius of the circle x² + y² - 2x - 8y + 1 = 0?", eq1: "x^2 + y^2 - 2x - 8y + 1 = 0", ans: "Radius = 4. Center = (1, 4)." },
        { q: "What is the center of the circle x² + y² + 10y - 11 = 0?", eq1: "x^2 + y^2 + 10y - 11 = 0", ans: "Center = (0, -5). Radius = 6." },
        { q: "What is the radius of the circle x² + y² - 12x + 20 = 0?", eq1: "x^2 + y^2 - 12x + 20 = 0", ans: "Radius = 4. Center = (6, 0)." },
        { q: "What is the diameter of the circle x² + y² - 8x + 6y = 0?", eq1: "x^2 + y^2 - 8x + 6y = 0", ans: "Diameter = 10 (radius 5, center (4, -3)). The circle passes through the origin." }
    ]
};

function rollQuestion(hackId, containerId) {
    const questions = questionBank[hackId];
    if (!questions) return;
    
    const randomQ = questions[Math.floor(Math.random() * questions.length)];
    const container = document.getElementById(containerId);
    
    container.innerHTML = `
        <p class="font-bold text-gray-800 text-sm mt-2">Question:</p>
        <p class="mb-3 italic text-gray-900 text-sm">${randomQ.q}</p>
        
        <details class="bg-gray-100 border border-gray-200 rounded p-2 mt-2">
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
