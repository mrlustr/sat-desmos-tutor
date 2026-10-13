// questions.js
const questionBank = {
    hack1: [
        { q: "If √(3x + 1) = 4, what is the value of x?", eq1: "y = \\sqrt{3x+1}", eq2: "y = 4", ans: "x = 5" },
        { q: "If |2x - 4| = 10, what is the positive value of x?", eq1: "y = |2x - 4|", eq2: "y = 10", ans: "x = 7" },
        { q: "If 5(x + 2) = 3x - 8, what is x?", eq1: "y = 5(x+2)", eq2: "y = 3x-8", ans: "x = -9" }
    ],
    hack2: [
        { q: "The system y = 3x + 5 and y = kx - 2 has no solution. What is k?", eq1: "y = 3x + 5", eq2: "y = kx - 2", ans: "k = 3" },
        { q: "The system y = -2x + 7 and y = kx + 4 has no solution. What is k?", eq1: "y = -2x + 7", eq2: "y = kx + 4", ans: "k = -2" }
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
