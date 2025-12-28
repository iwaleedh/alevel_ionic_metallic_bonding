// Questions Data Structure
const questionsData = [
    // Section 1: Ionic Bonding - Evidence, Formation & Structure
    {
        section: "Section 1: Ionic Bonding - Evidence, Formation & Structure",
        sectionInfo: "Objectives: Evidence for ions (physical properties, electron density, migration), formation (loss/gain electrons), dot-and-cross diagrams, giant lattices, electrostatic attraction.",
        questions: [
            {
                id: 1,
                bloom: "Understanding",
                question: "Define ionic bonding.",
                answer: "Strong electrostatic attraction between oppositely charged ions (cations and anions).",
                maxScore: 5,
                diagram: null
            },
            {
                id: 2,
                bloom: "Understanding",
                question: "Describe the structure of Sodium Chloride (NaCl).",
                answer: "Giant ionic lattice; alternating Na<sup>+</sup> and Cl<sup>-</sup> ions packed tightly in a cubic arrangement.",
                maxScore: 5,
                diagram: "naclStructure"
            },
            {
                id: 3,
                bloom: "Understanding",
                question: "Why do ionic compounds conduct electricity when molten but not solid?",
                answer: "<ul><li><strong>Solid:</strong> Ions are fixed in lattice positions; cannot move.</li><li><strong>Molten:</strong> Ions are free to move and carry charge.</li></ul>",
                maxScore: 5,
                diagram: null
            },
            {
                id: 4,
                bloom: "Applying",
                question: "Interpret the evidence from the electrolysis of green Copper(II) Chromate(VI) on a wet filter paper.",
                answer: "<ul><li><strong>Observation:</strong> Blue color moves to cathode (−); Yellow color moves to anode (+).</li><li><strong>Conclusion:</strong> Proves existence of charged particles (ions): Cu<sup>2+</sup> (blue) and CrO<sub>4</sub><sup>2−</sup> (yellow).</li></ul>",
                maxScore: 5,
                diagram: "migration"
            },
            {
                id: 5,
                bloom: "Applying",
                question: "Draw a dot-and-cross diagram for Magnesium Oxide (MgO).",
                answer: "<ul><li>Mg: Empty outer shell (or [2,8]), charge +2.</li><li>O: Full outer shell (8 electrons, 2 from Mg), charge -2.</li><li>Square brackets around each.</li></ul>",
                maxScore: 5,
                diagram: "dotCrossMgO"
            },
            {
                id: 6,
                bloom: "Analyzing",
                question: "Analyze the electron density map of NaCl compared to Cl<sub>2</sub>. What does it prove?",
                answer: "<ul><li><strong>NaCl:</strong> Electron density falls to zero between nuclei → Discrete ions exist.</li><li><strong>Cl<sub>2</sub>:</strong> Electron density continuous between nuclei → Electrons shared (covalent).</li></ul>",
                maxScore: 5,
                diagram: "electronDensity"
            },
            {
                id: 7,
                bloom: "Remembering",
                question: "<strong>FAQ:</strong> Students often confuse migration with electron flow. Remember: It is the ions moving, not electrons, in the solution.<br><br><strong>(MCQ)</strong> Which observation best provides evidence for the existence of ions?<br>A. Ionic compounds have high melting points.<br>B. Electron density maps show zero density between nuclear centers.<br>C. Ionic crystals cleave along planes.<br>D. Solid NaCl does not conduct electricity.",
                answer: "<strong>Answer: B</strong>",
                maxScore: 5,
                diagram: null
            },
            {
                id: 8,
                bloom: "Evaluating",
                question: "<strong>(Structured)</strong> Explain why the melting point of Magnesium Oxide is much higher than Sodium Chloride.",
                answer: "Mg<sup>2+</sup> has higher charge than Na<sup>+</sup>; O<sup>2−</sup> has higher charge than Cl<sup>−</sup>. Stronger electrostatic attraction requires more energy to break.",
                maxScore: 5,
                diagram: null
            }
        ]
    },
    // Section 2: Ionic Radii & Polarization
    {
        section: "Section 2: Ionic Radii & Polarization",
        sectionInfo: "Objectives: Ionic radius trends (isoelectronic), effect of charge/radius on bond strength, Polarization (Fajan's Rules).",
        questions: [
            {
                id: 9,
                bloom: "Understanding",
                question: "Define isoelectronic ions.",
                answer: "Ions having the same electronic configuration (same number of electrons).",
                maxScore: 5,
                diagram: null
            },
            {
                id: 10,
                bloom: "Understanding",
                question: "State the trend in ionic radius down a group.",
                answer: "Radius increases (more electron shells added).",
                maxScore: 5,
                diagram: null
            },
            {
                id: 11,
                bloom: "Applying",
                question: "Arrange the following isoelectronic ions in order of decreasing radius: N<sup>3−</sup>, O<sup>2−</sup>, F<sup>−</sup>, Na<sup>+</sup>, Mg<sup>2+</sup>, Al<sup>3+</sup>.",
                answer: "<strong>Largest</strong> N<sup>3−</sup> > O<sup>2−</sup> > F<sup>−</sup> > Na<sup>+</sup> > Mg<sup>2+</sup> > Al<sup>3+</sup> <strong>Smallest.</strong><br><br><strong>Reason:</strong> Nuclear charge increases (more protons) pulling the same number of electrons closer.",
                maxScore: 5,
                diagram: "isoelectronic"
            },
            {
                id: 12,
                bloom: "Evaluating",
                question: "Compare the thermal stability of MgCO<sub>3</sub> and BaCO<sub>3</sub> using the concept of polarization.",
                answer: "<ul><li>Mg<sup>2+</sup> is smaller than Ba<sup>2+</sup> (higher charge density).</li><li>Mg<sup>2+</sup> causes more polarization (distortion) of the carbonate (CO<sub>3</sub><sup>2−</sup>) electron cloud.</li><li>C-O bond weakens more easily → MgCO<sub>3</sub> decomposes at lower temperature (less stable).</li></ul>",
                maxScore: 5,
                diagram: null
            },
            {
                id: 13,
                bloom: "Remembering",
                question: "<strong>FAQ:</strong> Do not say \"The cation polarizes the anion's nucleus.\" Say it polarizes the anion's electron cloud.<br><br><strong>(MCQ)</strong> Which cation has the greatest polarizing power?<br>A. Na<sup>+</sup><br>B. Mg<sup>2+</sup><br>C. K<sup>+</sup><br>D. Al<sup>3+</sup>",
                answer: "<strong>Answer: D</strong> (Highest charge, smallest radius).",
                maxScore: 5,
                diagram: null
            },
            {
                id: 14,
                bloom: "Evaluating",
                question: "<strong>(Structured)</strong> Explain why Silver Iodide (AgI) has significant covalent character while Sodium Fluoride (NaF) is almost purely ionic.",
                answer: "<ul><li>Ag<sup>+</sup> is small/highly charged (polarizing).</li><li>I<sup>−</sup> is large (highly polarizable).</li><li>Significant polarization leads to electron sharing (covalent character). NaF ions are hard spheres (little polarization).</li></ul>",
                maxScore: 5,
                diagram: null
            }
        ]
    },
    // Section 3: Metallic Bonding
    {
        section: "Section 3: Metallic Bonding",
        sectionInfo: "Objectives: Metallic lattice model, delocalized electrons, properties (conductivity, melting point).",
        questions: [
            {
                id: 15,
                bloom: "Understanding",
                question: "Describe the lattice structure of a metal.",
                answer: "Regular lattice of positive metal ions surrounded by a \"sea\" of delocalized electrons.",
                maxScore: 5,
                diagram: "metallicLattice"
            },
            {
                id: 16,
                bloom: "Understanding",
                question: "Define metallic bonding.",
                answer: "Strong electrostatic attraction between positive metal ions and the sea of delocalized electrons.",
                maxScore: 5,
                diagram: null
            },
            {
                id: 17,
                bloom: "Applying",
                question: "Explain why metals are malleable (can be hammered into shape).",
                answer: "Layers of ions can slide over each other; the delocalized electrons move with the layers, maintaining the electrostatic attraction (bond doesn't break).",
                maxScore: 5,
                diagram: null
            },
            {
                id: 18,
                bloom: "Evaluating",
                question: "Predict and explain the trend in melting temperature from Sodium (Na) to Magnesium (Mg) to Aluminum (Al).",
                answer: "<ul><li><strong>Trend:</strong> Increases (Na < Mg < Al).</li><li><strong>Reason:</strong> Charge on ion increases (+1→+3); Number of delocalized electrons increases; Ionic radius decreases.</li><li><strong>Result:</strong> Stronger electrostatic attraction requires more energy to break.</li></ul>",
                maxScore: 5,
                diagram: null
            },
            {
                id: 19,
                bloom: "Remembering",
                question: "<strong>FAQ:</strong> Students often forget to mention \"delocalized electrons\" when explaining conductivity.<br><br><strong>(MCQ)</strong> Which property is NOT typical of metals?<br>A. Good electrical conductivity.<br>B. Brittle structure.<br>C. High melting point.<br>D. Malleable.",
                answer: "<strong>Answer: B</strong> (Metals are malleable/ductile, ionic crystals are brittle).",
                maxScore: 5,
                diagram: null
            },
            {
                id: 20,
                bloom: "Applying",
                question: "<strong>(Structured)</strong> Suggest why Aluminum is a better electrical conductor than Sodium.",
                answer: "Al contributes 3 delocalized electrons per atom to the \"sea,\" whereas Na contributes only 1. More mobile charge carriers = better conductivity.",
                maxScore: 5,
                diagram: null
            }
        ]
    },
    // Additional Past Paper Style Questions - Section 1
    {
        section: "Past Paper Style Questions - Evidence for Ions & Dot-Cross Diagrams",
        sectionInfo: "Multiple choice and structured questions covering evidence for ions and electron diagrams.",
        questions: [
            {
                id: 21,
                bloom: "Understanding",
                question: "<strong>(MCQ)</strong> The electron density map of a substance shows lines of constant electron density that do not merge between the nuclei. This indicates that the bonding is:<br>A. Metallic<br>B. Covalent<br>C. Ionic<br>D. Dative Covalent",
                answer: "<strong>Answer: C</strong> (Discrete regions of electron density imply separate ions).",
                maxScore: 5,
                diagram: null
            },
            {
                id: 22,
                bloom: "Understanding",
                question: "<strong>(MCQ)</strong> Which of the following compounds conducts electricity in the liquid state but not in the solid state?<br>A. Magnesium (Mg)<br>B. Magnesium Oxide (MgO)<br>C. Silicon Dioxide (SiO<sub>2</sub>)<br>D. Tetrachloromethane (CCl<sub>4</sub>)",
                answer: "<strong>Answer: B</strong> (Ionic compounds conduct when molten due to mobile ions).",
                maxScore: 5,
                diagram: null
            },
            {
                id: 23,
                bloom: "Applying",
                question: "<strong>(Structured Question)</strong> A student carries out an experiment to demonstrate the migration of ions. They place a crystal of purple Potassium Manganate(VII) (KMnO<sub>4</sub>) on moist filter paper connected to a DC power supply.<br><br>(a) State the observation made after 10 minutes. (1 mark)<br>(b) Explain this observation in terms of the particles involved. (2 marks)",
                answer: "<ul><li><strong>(a)</strong> A purple color spreads/moves towards the positive electrode (anode).</li><li><strong>(b)</strong> The crystal dissolves to form ions. The MnO<sub>4</sub><sup>−</sup> ion is purple and negatively charged, so it is attracted to the positive electrode.</li></ul>",
                maxScore: 5,
                diagram: null
            },
            {
                id: 24,
                bloom: "Applying",
                question: "<strong>(Structured Question)</strong> Draw the dot-and-cross diagram for Calcium Chloride (CaCl<sub>2</sub>). Show outer electrons only. (2 marks)",
                answer: "<ul><li>One Calcium ion (Ca<sup>2+</sup>) with an empty outer shell (or 8 crosses if showing the shell below).</li><li>Two Chloride ions (Cl<sup>−</sup>), each with 7 dots and 1 cross (or vice versa).</li><li>Charges clearly marked outside brackets.</li></ul>",
                maxScore: 5,
                diagram: null
            }
        ]
    },
    // Additional Past Paper Style Questions - Section 2
    {
        section: "Past Paper Style Questions - Ionic Radii & Polarization",
        sectionInfo: "Multiple choice and structured questions on ionic radii trends and polarization effects.",
        questions: [
            {
                id: 25,
                bloom: "Understanding",
                question: "<strong>(MCQ)</strong> Which of the following ions has the largest ionic radius?<br>A. Na<sup>+</sup><br>B. Mg<sup>2+</sup><br>C. F<sup>−</sup><br>D. O<sup>2−</sup>",
                answer: "<strong>Answer: D</strong> (It is isoelectronic with the others but has the lowest nuclear charge, so it holds the electrons most loosely).",
                maxScore: 5,
                diagram: null
            },
            {
                id: 26,
                bloom: "Understanding",
                question: "<strong>(MCQ)</strong> Polarization of an anion by a cation leads to:<br>A. Pure ionic bonding<br>B. Covalent character in an ionic bond<br>C. Metallic bonding<br>D. Formation of Van der Waals forces",
                answer: "<strong>Answer: B</strong>",
                maxScore: 5,
                diagram: null
            },
            {
                id: 27,
                bloom: "Analyzing",
                question: "<strong>(Structured Question)</strong> The ions N<sup>3−</sup>, O<sup>2−</sup>, and F<sup>−</sup> are isoelectronic.<br><br>(a) Explain what is meant by the term isoelectronic. (1 mark)<br>(b) Explain why the ionic radius decreases from N<sup>3−</sup> to F<sup>−</sup>. (3 marks)",
                answer: "<ul><li><strong>(a)</strong> They have the same electronic configuration (or same number of electrons).</li><li><strong>(b)</strong> The number of protons (nuclear charge) increases from N (7) to F (9). The number of electrons remains the same (10). Stronger attraction between the nucleus and the electrons pulls the shells closer in, reducing the radius.</li></ul>",
                maxScore: 5,
                diagram: null
            },
            {
                id: 28,
                bloom: "Evaluating",
                question: "<strong>(Structured Question)</strong> Magnesium Carbonate (MgCO<sub>3</sub>) thermally decomposes at a lower temperature than Barium Carbonate (BaCO<sub>3</sub>). Explain this trend using the concept of charge density and polarization. (4 marks)",
                answer: "<ul><li>Mg<sup>2+</sup> has a smaller radius than Ba<sup>2+</sup> (both are +2).</li><li>Therefore, Mg<sup>2+</sup> has a higher charge density.</li><li>Mg<sup>2+</sup> causes greater polarization (distortion) of the carbonate ion (CO<sub>3</sub><sup>2−</sup>) electron cloud.</li><li>This weakens the C−O bond within the carbonate, making it easier to break (requires less heat energy).</li></ul>",
                maxScore: 5,
                diagram: null
            }
        ]
    },
    // Additional Past Paper Style Questions - Section 3
    {
        section: "Past Paper Style Questions - Metallic Bonding",
        sectionInfo: "Multiple choice and structured questions on metallic bonding properties and trends.",
        questions: [
            {
                id: 29,
                bloom: "Understanding",
                question: "<strong>(MCQ)</strong> Which statement about metallic bonding is incorrect?<br>A. It involves the attraction between cations and delocalized electrons.<br>B. The strength of the bond increases as the ionic radius increases.<br>C. The strength of the bond increases as the charge on the ion increases.<br>D. Metals are good conductors because electrons can move through the lattice.",
                answer: "<strong>Answer: B</strong> (Incorrect because as radius increases, the attraction gets weaker).",
                maxScore: 5,
                diagram: null
            },
            {
                id: 30,
                bloom: "Evaluating",
                question: "<strong>(Structured Question)</strong> The melting temperatures of Sodium, Magnesium, and Aluminum are given below:<br><br>Na: 371 K<br>Mg: 923 K<br>Al: 933 K<br><br>Explain the difference in melting temperatures between Sodium and Magnesium in terms of metallic bonding. (3 marks)",
                answer: "<ul><li>Magnesium forms a 2+ ion (Mg<sup>2+</sup>), whereas Sodium forms a 1+ ion (Na<sup>+</sup>).</li><li>Magnesium contributes two electrons to the delocalized sea per atom, whereas Sodium contributes one.</li><li>The electrostatic attraction between the Mg<sup>2+</sup> ions and the delocalized electrons is stronger (and the Mg<sup>2+</sup> ion is smaller), requiring more energy to break the lattice.</li></ul>",
                maxScore: 5,
                diagram: null
            }
        ]
    },
    // Examiner's Tips Section
    {
        section: "Examiner's Tips & Common Pitfalls",
        sectionInfo: "Important reminders and terminology guidance for exam success.",
        questions: [
            {
                id: 31,
                bloom: "Remembering",
                question: "<strong>Terminology Tip:</strong> When discussing Metallic Bonding, what is the correct terminology to use?",
                answer: "<strong>Never say:</strong> \"protons in a sea of electrons.\" <br><br><strong>Always say:</strong> \"positive ions\" or \"cations\" in a sea of delocalized electrons.",
                maxScore: 5,
                diagram: null
            },
            {
                id: 32,
                bloom: "Remembering",
                question: "<strong>Polarization Tip:</strong> What is the key rule to remember about polarization?",
                answer: "<strong>Rule:</strong> Small cation + Large anion = High Polarization = Covalent Character.",
                maxScore: 5,
                diagram: null
            },
            {
                id: 33,
                bloom: "Remembering",
                question: "<strong>Conductivity Tip:</strong> For ionic compounds, what must you specify when explaining electrical conductivity?",
                answer: "You must specify that <strong>ions are mobile or free to move</strong> in molten/aqueous states. <br><br><strong>Important:</strong> \"Free electrons\" is 0 marks for ionic compounds.",
                maxScore: 5,
                diagram: null
            }
        ]
    }
];
