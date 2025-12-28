// SVG Diagrams
function createNaClStructure() {
    return `
        <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            <!-- NaCl Cubic Lattice Structure -->
            <defs>
                <radialGradient id="naGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" style="stop-color:#ffd700;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#daa520;stop-opacity:1" />
                </radialGradient>
                <radialGradient id="clGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" style="stop-color:#90ee90;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#228b22;stop-opacity:1" />
                </radialGradient>
            </defs>
            
            <!-- Grid lines -->
            <line x1="50" y1="50" x2="250" y2="50" stroke="#999" stroke-width="1" stroke-dasharray="3,3"/>
            <line x1="50" y1="150" x2="250" y2="150" stroke="#999" stroke-width="1" stroke-dasharray="3,3"/>
            <line x1="50" y1="250" x2="250" y2="250" stroke="#999" stroke-width="1" stroke-dasharray="3,3"/>
            <line x1="50" y1="50" x2="50" y2="250" stroke="#999" stroke-width="1" stroke-dasharray="3,3"/>
            <line x1="150" y1="50" x2="150" y2="250" stroke="#999" stroke-width="1" stroke-dasharray="3,3"/>
            <line x1="250" y1="50" x2="250" y2="250" stroke="#999" stroke-width="1" stroke-dasharray="3,3"/>
            
            <!-- Cl- ions (green, larger) -->
            <circle cx="50" cy="50" r="25" fill="url(#clGrad)" stroke="#000" stroke-width="2"/>
            <circle cx="250" cy="50" r="25" fill="url(#clGrad)" stroke="#000" stroke-width="2"/>
            <circle cx="50" cy="250" r="25" fill="url(#clGrad)" stroke="#000" stroke-width="2"/>
            <circle cx="250" cy="250" r="25" fill="url(#clGrad)" stroke="#000" stroke-width="2"/>
            <circle cx="150" cy="150" r="25" fill="url(#clGrad)" stroke="#000" stroke-width="2"/>
            
            <!-- Na+ ions (gold, smaller) -->
            <circle cx="150" cy="50" r="20" fill="url(#naGrad)" stroke="#000" stroke-width="2"/>
            <circle cx="50" cy="150" r="20" fill="url(#naGrad)" stroke="#000" stroke-width="2"/>
            <circle cx="250" cy="150" r="20" fill="url(#naGrad)" stroke="#000" stroke-width="2"/>
            <circle cx="150" cy="250" r="20" fill="url(#naGrad)" stroke="#000" stroke-width="2"/>
            
            <!-- Labels -->
            <text x="50" y="40" text-anchor="middle" font-size="12" font-weight="bold">Cl⁻</text>
            <text x="150" y="40" text-anchor="middle" font-size="12" font-weight="bold">Na⁺</text>
            <text x="250" y="40" text-anchor="middle" font-size="12" font-weight="bold">Cl⁻</text>
        </svg>
    `;
}

function createMigrationDiagram() {
    return `
        <svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
            <!-- Migration Experiment -->
            <rect x="50" y="80" width="300" height="40" fill="#e8f4f8" stroke="#333" stroke-width="2" rx="5"/>
            <text x="200" y="105" text-anchor="middle" font-size="12" fill="#666">Wet Filter Paper</text>
            
            <!-- Electrodes -->
            <rect x="30" y="70" width="15" height="60" fill="#333"/>
            <rect x="355" y="70" width="15" height="60" fill="#333"/>
            
            <!-- Labels for electrodes -->
            <text x="37.5" y="60" text-anchor="middle" font-size="14" font-weight="bold" fill="#d32f2f">−</text>
            <text x="37.5" y="150" text-anchor="middle" font-size="12" fill="#333">Cathode</text>
            <text x="362.5" y="60" text-anchor="middle" font-size="14" font-weight="bold" fill="#1976d2">+</text>
            <text x="362.5" y="150" text-anchor="middle" font-size="12" fill="#333">Anode</text>
            
            <!-- Cu2+ migration (blue) -->
            <circle cx="200" cy="100" r="8" fill="#2196f3"/>
            <path d="M 200 100 L 100 100" stroke="#2196f3" stroke-width="3" marker-end="url(#arrowBlue)" fill="none"/>
            <defs>
                <marker id="arrowBlue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#2196f3" />
                </marker>
            </defs>
            <text x="140" y="90" text-anchor="middle" font-size="11" fill="#2196f3" font-weight="bold">Cu²⁺ (blue)</text>
            
            <!-- CrO4 2- migration (yellow) -->
            <path d="M 200 100 L 300 100" stroke="#ffc107" stroke-width="3" marker-end="url(#arrowYellow)" fill="none"/>
            <defs>
                <marker id="arrowYellow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#ffc107" />
                </marker>
            </defs>
            <text x="260" y="90" text-anchor="middle" font-size="11" fill="#f57c00" font-weight="bold">CrO₄²⁻ (yellow)</text>
        </svg>
    `;
}

function createDotCrossMgO() {
    return `
        <svg width="350" height="150" viewBox="0 0 350 150" xmlns="http://www.w3.org/2000/svg">
            <!-- Mg 2+ ion -->
            <rect x="30" y="30" width="120" height="90" fill="none" stroke="#000" stroke-width="2" rx="5"/>
            <text x="90" y="80" text-anchor="middle" font-size="20" font-weight="bold">Mg</text>
            <text x="130" y="40" font-size="16" fill="#d32f2f" font-weight="bold">2+</text>
            <text x="90" y="110" text-anchor="middle" font-size="12" fill="#666">[2,8]</text>
            
            <!-- Arrow -->
            <path d="M 160 75 L 190 75" stroke="#333" stroke-width="2" marker-end="url(#arrow)" fill="none"/>
            <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#333" />
                </marker>
            </defs>
            
            <!-- O 2- ion with electrons -->
            <rect x="200" y="30" width="120" height="90" fill="none" stroke="#000" stroke-width="2" rx="5"/>
            <text x="260" y="80" text-anchor="middle" font-size="20" font-weight="bold">O</text>
            <text x="300" y="40" font-size="16" fill="#1976d2" font-weight="bold">2−</text>
            
            <!-- Electrons (dots and crosses) -->
            <circle cx="230" cy="50" r="3" fill="#d32f2f"/>
            <circle cx="290" cy="50" r="3" fill="#d32f2f"/>
            <circle cx="230" cy="100" r="3" fill="#000"/>
            <circle cx="290" cy="100" r="3" fill="#000"/>
            <circle cx="245" cy="60" r="3" fill="#000"/>
            <circle cx="275" cy="60" r="3" fill="#000"/>
            <circle cx="245" cy="90" r="3" fill="#000"/>
            <circle cx="275" cy="90" r="3" fill="#000"/>
            
            <text x="260" y="115" text-anchor="middle" font-size="10" fill="#666">8 electrons</text>
        </svg>
    `;
}

function createElectronDensityMap() {
    return `
        <svg width="500" height="250" viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg">
            <!-- NaCl electron density -->
            <g>
                <text x="120" y="30" text-anchor="middle" font-size="16" font-weight="bold">NaCl (Ionic)</text>
                <circle cx="50" cy="120" r="30" fill="#4caf50" opacity="0.7"/>
                <circle cx="190" cy="120" r="35" fill="#2196f3" opacity="0.7"/>
                <line x1="80" y1="120" x2="155" y2="120" stroke="#ddd" stroke-width="15"/>
                <text x="50" y="125" text-anchor="middle" font-size="14" font-weight="bold" fill="#fff">Na⁺</text>
                <text x="190" y="125" text-anchor="middle" font-size="14" font-weight="bold" fill="#fff">Cl⁻</text>
                <text x="120" y="180" text-anchor="middle" font-size="11" fill="#d32f2f" font-weight="bold">
                    Zero electron density
                </text>
                <text x="120" y="195" text-anchor="middle" font-size="11" fill="#666">
                    between nuclei
                </text>
            </g>
            
            <!-- Cl2 electron density -->
            <g>
                <text x="380" y="30" text-anchor="middle" font-size="16" font-weight="bold">Cl₂ (Covalent)</text>
                <circle cx="310" cy="120" r="35" fill="#2196f3" opacity="0.7"/>
                <circle cx="450" cy="120" r="35" fill="#2196f3" opacity="0.7"/>
                <ellipse cx="380" cy="120" rx="70" ry="40" fill="#2196f3" opacity="0.3"/>
                <text x="310" y="125" text-anchor="middle" font-size="14" font-weight="bold" fill="#fff">Cl</text>
                <text x="450" y="125" text-anchor="middle" font-size="14" font-weight="bold" fill="#fff">Cl</text>
                <text x="380" y="180" text-anchor="middle" font-size="11" fill="#1976d2" font-weight="bold">
                    Continuous electron density
                </text>
                <text x="380" y="195" text-anchor="middle" font-size="11" fill="#666">
                    (shared electrons)
                </text>
            </g>
        </svg>
    `;
}

function createIsoelectronicDiagram() {
    return `
        <svg width="500" height="200" viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
            <text x="250" y="25" text-anchor="middle" font-size="14" font-weight="bold">Isoelectronic Series (all have 10 electrons)</text>
            
            <!-- Ions with decreasing radius -->
            <circle cx="50" cy="100" r="45" fill="#e3f2fd" stroke="#1976d2" stroke-width="2"/>
            <text x="50" y="105" text-anchor="middle" font-size="16" font-weight="bold">N³⁻</text>
            <text x="50" y="160" text-anchor="middle" font-size="11">Largest</text>
            <text x="50" y="175" text-anchor="middle" font-size="10" fill="#666">7 protons</text>
            
            <circle cx="130" cy="100" r="40" fill="#e3f2fd" stroke="#1976d2" stroke-width="2"/>
            <text x="130" y="105" text-anchor="middle" font-size="16" font-weight="bold">O²⁻</text>
            <text x="130" y="165" text-anchor="middle" font-size="10" fill="#666">8 protons</text>
            
            <circle cx="200" cy="100" r="35" fill="#e3f2fd" stroke="#1976d2" stroke-width="2"/>
            <text x="200" y="105" text-anchor="middle" font-size="16" font-weight="bold">F⁻</text>
            <text x="200" y="160" text-anchor="middle" font-size="10" fill="#666">9 protons</text>
            
            <circle cx="270" cy="100" r="30" fill="#fff3e0" stroke="#f57c00" stroke-width="2"/>
            <text x="270" y="105" text-anchor="middle" font-size="16" font-weight="bold">Na⁺</text>
            <text x="270" y="155" text-anchor="middle" font-size="10" fill="#666">11 protons</text>
            
            <circle cx="335" cy="100" r="25" fill="#fff3e0" stroke="#f57c00" stroke-width="2"/>
            <text x="335" y="105" text-anchor="middle" font-size="14" font-weight="bold">Mg²⁺</text>
            <text x="335" y="148" text-anchor="middle" font-size="10" fill="#666">12 protons</text>
            
            <circle cx="395" cy="100" r="20" fill="#fff3e0" stroke="#f57c00" stroke-width="2"/>
            <text x="395" y="105" text-anchor="middle" font-size="12" font-weight="bold">Al³⁺</text>
            <text x="395" y="143" text-anchor="middle" font-size="11">Smallest</text>
            <text x="395" y="143" text-anchor="middle" font-size="10" fill="#666">13 protons</text>
            
            <!-- Arrow showing trend -->
            <path d="M 460 100 L 470 100" stroke="#d32f2f" stroke-width="3" marker-end="url(#arrowRed)" fill="none"/>
            <defs>
                <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill="#d32f2f" />
                </marker>
            </defs>
            <text x="465" y="85" text-anchor="middle" font-size="11" fill="#d32f2f" font-weight="bold">Decreasing</text>
            <text x="465" y="98" text-anchor="middle" font-size="11" fill="#d32f2f" font-weight="bold">radius</text>
        </svg>
    `;
}

function createMetallicLatticeDiagram() {
    return `
        <svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <text x="200" y="25" text-anchor="middle" font-size="16" font-weight="bold">Metallic Bonding Structure</text>
            
            <!-- Sea of electrons background -->
            <rect x="50" y="50" width="300" height="220" fill="#e3f2fd" opacity="0.5" rx="10"/>
            <text x="200" y="75" text-anchor="middle" font-size="12" fill="#1976d2" font-style="italic">
                "Sea" of delocalized electrons
            </text>
            
            <!-- Metal cations arranged in lattice -->
            <circle cx="100" cy="120" r="20" fill="#ffd700" stroke="#333" stroke-width="2"/>
            <text x="100" y="125" text-anchor="middle" font-size="14" font-weight="bold">M⁺</text>
            
            <circle cx="180" cy="120" r="20" fill="#ffd700" stroke="#333" stroke-width="2"/>
            <text x="180" y="125" text-anchor="middle" font-size="14" font-weight="bold">M⁺</text>
            
            <circle cx="260" cy="120" r="20" fill="#ffd700" stroke="#333" stroke-width="2"/>
            <text x="260" y="125" text-anchor="middle" font-size="14" font-weight="bold">M⁺</text>
            
            <circle cx="100" cy="190" r="20" fill="#ffd700" stroke="#333" stroke-width="2"/>
            <text x="100" y="195" text-anchor="middle" font-size="14" font-weight="bold">M⁺</text>
            
            <circle cx="180" cy="190" r="20" fill="#ffd700" stroke="#333" stroke-width="2"/>
            <text x="180" y="195" text-anchor="middle" font-size="14" font-weight="bold">M⁺</text>
            
            <circle cx="260" cy="190" r="20" fill="#ffd700" stroke="#333" stroke-width="2"/>
            <text x="260" y="195" text-anchor="middle" font-size="14" font-weight="bold">M⁺</text>
            
            <!-- Electrons -->
            <circle cx="140" cy="110" r="4" fill="#2196f3"/>
            <text x="145" y="113" font-size="10">e⁻</text>
            
            <circle cx="220" cy="150" r="4" fill="#2196f3"/>
            <text x="225" y="153" font-size="10">e⁻</text>
            
            <circle cx="130" cy="170" r="4" fill="#2196f3"/>
            <text x="135" y="173" font-size="10">e⁻</text>
            
            <circle cx="300" cy="130" r="4" fill="#2196f3"/>
            <text x="305" y="133" font-size="10">e⁻</text>
            
            <circle cx="70" cy="155" r="4" fill="#2196f3"/>
            <text x="75" y="158" font-size="10">e⁻</text>
            
            <circle cx="210" cy="210" r="4" fill="#2196f3"/>
            <text x="215" y="213" font-size="10">e⁻</text>
            
            <circle cx="150" cy="230" r="4" fill="#2196f3"/>
            <text x="155" y="233" font-size="10">e⁻</text>
            
            <circle cx="290" cy="200" r="4" fill="#2196f3"/>
            <text x="295" y="203" font-size="10">e⁻</text>
        </svg>
    `;
}

// Get diagram by name
function getDiagram(diagramName) {
    const diagrams = {
        'naclStructure': createNaClStructure(),
        'migration': createMigrationDiagram(),
        'dotCrossMgO': createDotCrossMgO(),
        'electronDensity': createElectronDensityMap(),
        'isoelectronic': createIsoelectronicDiagram(),
        'metallicLattice': createMetallicLatticeDiagram()
    };
    return diagrams[diagramName] || '';
}

// Render all questions
function renderQuestions() {
    const container = document.getElementById('questionsContainer');
    let totalMaxScore = 0;
    
    questionsData.forEach(section => {
        // Section header
        const sectionHeader = document.createElement('div');
        sectionHeader.className = 'section-header';
        sectionHeader.innerHTML = `
            <div>${section.section}</div>
            <div style="font-size: 0.7em; margin-top: 8px; opacity: 0.95;">${section.sectionInfo}</div>
        `;
        container.appendChild(sectionHeader);
        
        // Questions
        section.questions.forEach(q => {
            totalMaxScore += q.maxScore;
            
            const questionBlock = document.createElement('div');
            questionBlock.className = 'question-block';
            questionBlock.innerHTML = `
                <div class="question-header">
                    <div class="question-text">
                        <strong>Q${q.id}.</strong> ${q.question}
                    </div>
                    <div class="question-meta">
                        <span class="bloom-badge">${q.bloom}</span>
                        <select class="score-select" data-qid="${q.id}" data-maxscore="${q.maxScore}">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                ${q.diagram ? `<div class="diagram">${getDiagram(q.diagram)}<div class="diagram-caption">Figure: Visual representation</div></div>` : ''}
                <div class="answer-section">
                    <button class="reveal-btn" data-qid="${q.id}">Reveal Answer</button>
                    <div class="answer-text" id="answer-${q.id}">
                        ${q.answer}
                    </div>
                </div>
            `;
            container.appendChild(questionBlock);
        });
    });
    
    // Update total score display
    document.getElementById('totalScore').textContent = totalMaxScore;
    
    // Add event listeners
    addEventListeners();
}

// Add event listeners
function addEventListeners() {
    // Reveal buttons
    document.querySelectorAll('.reveal-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const qid = this.getAttribute('data-qid');
            const answerDiv = document.getElementById(`answer-${qid}`);
            
            if (answerDiv.classList.contains('show')) {
                answerDiv.classList.remove('show');
                this.textContent = 'Reveal Answer';
                this.classList.remove('revealed');
            } else {
                answerDiv.classList.add('show');
                this.textContent = 'Hide Answer';
                this.classList.add('revealed');
            }
        });
    });
    
    // Score selects
    document.querySelectorAll('.score-select').forEach(select => {
        select.addEventListener('change', updateTotalScore);
    });
}

// Update total score
function updateTotalScore() {
    let userTotal = 0;
    document.querySelectorAll('.score-select').forEach(select => {
        userTotal += parseInt(select.value);
    });
    document.getElementById('userScore').textContent = userTotal;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderQuestions();
});
