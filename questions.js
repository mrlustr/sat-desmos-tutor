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
        { q: "The system 2y = 6x + 8 and y = 3x + k has infinitely many solutions. What is k? (Drag k until the lines sit on top of each other.)", eq1: "2y = 6x + 8", eq2: "y = 3x + k", ans: "k = 4" }
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
});
