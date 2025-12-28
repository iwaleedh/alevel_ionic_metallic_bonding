# AS Level Chemistry Q&A Webapp

## Overview
This is an interactive HTML webapp for AS Level Chemistry practice questions covering:
- **Section 1:** Ionic Bonding - Evidence, Formation & Structure
- **Section 2:** Ionic Radii & Polarization
- **Section 3:** Metallic Bonding
- **Past Paper Style Questions**
- **Examiner's Tips & Common Pitfalls**

## Features
✅ **33 Questions** organized by Bloom's Taxonomy levels
✅ **Interactive Reveal/Hide Answers** - Click buttons to show/hide answers
✅ **Scoring System** - Rate yourself 0-5 for each question
✅ **Live Score Tracking** - See your total score in a circular indicator
✅ **Timer** - Track your practice time with pause/reset functionality
✅ **SVG Diagrams** - Visual representations for key concepts
✅ **PDF Export** - Download the entire page as PDF
✅ **Responsive Design** - Works on desktop and mobile devices
✅ **Modern, Minimalistic UI** - Clean and attractive interface

## How to Use

### Opening the Webapp
1. Open `chemistry_qa_app.html` in any modern web browser (Chrome, Firefox, Safari, Edge)
2. All files must be in the same directory:
   - `chemistry_qa_app.html`
   - `questions_data.js`
   - `app_logic.js`

### Using the Features

#### Timer
- **Automatic Start:** Timer starts automatically when you open the page
- **Pause/Resume:** Click the "Pause" button to pause/resume the timer
- **Reset:** Click "Reset" to set the timer back to 00:00:00

#### Questions & Answers
- Questions are displayed in **black** text
- Click **"Reveal Answer"** button to show the answer in **green** text
- Click again to hide the answer
- Answers are in point form for easy reading

#### Scoring
- Each question has a dropdown (0-5 scale)
- Select your score based on your performance
- The **score circle** (bottom-right) shows:
  - **Numerator:** Your total points
  - **Denominator:** Total possible points (165 points for all 33 questions)

#### PDF Export
- Click **"📥 Download as PDF"** button to export the entire page
- All questions and answers will be included in the PDF
- Perfect for printing or offline study

### Question Organization

Questions are organized by:
1. **Section Headers** - Purple gradient banners
2. **Bloom's Taxonomy Levels** - Yellow badges showing difficulty:
   - Remembering
   - Understanding
   - Applying
   - Analyzing
   - Evaluating
3. **Question Type** - MCQ or Structured questions clearly marked

### Visual Diagrams Included

The webapp includes SVG diagrams for:
- **NaCl Cubic Lattice Structure**
- **Ion Migration Experiment**
- **Dot-and-Cross Diagram (MgO)**
- **Electron Density Maps** (NaCl vs Cl₂)
- **Isoelectronic Series**
- **Metallic Bonding Structure**

## Technical Details

### Files Structure
```
├── chemistry_qa_app.html  (Main HTML file with styling)
├── questions_data.js      (All questions and answers data)
├── app_logic.js          (JavaScript for interactivity and diagrams)
└── README.md             (This file)
```

### Dependencies
- **html2pdf.js** - Loaded from CDN for PDF export functionality
- No other external dependencies required!

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Tips for Best Results

1. **Work through questions systematically** - Don't skip sections
2. **Try answering before revealing** - Test your knowledge first
3. **Score honestly** - This helps track your progress
4. **Use the timer** - Practice under timed conditions
5. **Review Examiner's Tips** - Critical for exam success
6. **Export as PDF** - Keep a record of completed sessions

## Color Coding

- **Questions:** Black text
- **Answers:** Green text
- **Section Headers:** Purple gradient
- **Bloom's Badges:** Yellow
- **Score Circle:** Purple gradient
- **Buttons:** Blue (primary actions), Gray (secondary actions), Green (download)

## Customization

To add more questions, edit `questions_data.js`:
```javascript
{
    id: 34,  // Unique ID
    bloom: "Understanding",  // Bloom's level
    question: "Your question here",
    answer: "Your answer here (can include HTML)",
    maxScore: 5,  // Maximum score
    diagram: null  // or 'diagramName' if you create a new SVG
}
```

## Support

For issues or questions about using this webapp:
- Check that all 3 files are in the same directory
- Ensure JavaScript is enabled in your browser
- Try a different browser if issues persist

---

**Good luck with your AS Level Chemistry studies! 🧪⚗️**
