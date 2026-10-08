# MyPortfolio – Personal Portfolio & Resume Website
**Course:** Cloud Full Stack Web Development  
**Tutorial:** Tutorial 1 for Unit 1: HTML & CSS  
**Target Audience:** Students, Lab Instructors, and Lab Viva Examiners

---

## 📌 Project Overview
**MyPortfolio** is a clean, responsive, and professional personal portfolio and resume website built strictly using **HTML5**, **CSS3**, and minimal vanilla **JavaScript** for client-side interactions. 

This project intentionally demonstrates all core concepts taught in **Unit 1 of Cloud Full Stack Web Development**, without relying on external libraries, frameworks (such as React, Vue, Angular, Bootstrap, Tailwind), or backend servers. It is specifically architected to be **simple, modular, and easy to explain in a college lab viva**.

---

## 📂 Project File Structure
```text
MyPortfolio/
│
├── index.html          # Main HTML5 document with complete semantic structure
│
├── css/
│   └── style.css       # Pure CSS3 stylesheet (Box Model, Flexbox, Grid, Animations)
│
├── js/
│   └── script.js       # Minimal vanilla JS (Mobile menu, Canvas 2D, Form handler)
│
├── images/
│   ├── profile.svg     # Clean vector portrait image for Hero section
│   ├── project-1.svg   # Mockup graphic: Portfolio Web App
│   ├── project-2.svg   # Mockup graphic: Student Grade Portal (Table UI)
│   ├── project-3.svg   # Mockup graphic: Weather Dashboard UI
│   └── project-4.svg   # Mockup graphic: DevNotes Tech Blog
│
├── metadata.json       # Applet configuration & metadata
└── README.md           # Tutorial documentation, topic mapping & viva guide
```

---

## 🚀 How to Run the Project

### Method 1: In the Current Cloud AI Studio / Vite Environment
The development server is already active on port 3000:
1. Simply view the live preview in your browser window.
2. If compiling or building for production:
   ```bash
   npm run build
   ```

### Method 2: Running Locally in Any Standard Web Browser (No Server Required!)
Because this project uses purely standard HTML5, CSS3, and client-side JavaScript:
1. Clone or download the `MyPortfolio` folder.
2. Double-click `index.html` to open it in **Google Chrome**, **Mozilla Firefox**, **Microsoft Edge**, or **Safari**.
3. Or open it using VS Code's **Live Server** extension:
   - Right click `index.html` → Click **"Open with Live Server"**.

---

## 📑 Section-by-Section Code & Architecture Explanation

### 1. Header & Navigation (`<header>`, `<nav>`, `<ul>`, `<a>`)
- **HTML Concept:** Demonstrates semantic container tags (`<header>`, `<nav>`) and internal anchor hyperlinks (`<a href="#section-id">`).
- **CSS Concept:**
  - `position: sticky; top: 0;` keeps the header visible during scrolling.
  - `display: flex; justify-content: space-between; align-items: center;` creates an aligned layout.
  - Hover underline animation using CSS pseudo-elements (`::after`) with smooth `transition: width 0.3s ease;`.
- **Responsive Behavior:** Transitions into a clean mobile toggle menu on viewport widths under 768px.

### 2. Home / Hero (`<section id="home">`)
- **HTML Concept:** Headings hierarchy (`<h1>`, `<h2>`), paragraphs (`<p>`), call-to-action buttons, and the HTML5 `<canvas>` element.
- **CSS Concept:**
  - CSS Flexbox splits text and the profile image container.
  - CSS Keyframes (`@keyframes heroFadeInUp`) provides a subtle upward entrance animation on load.
  - Relative container with absolute status badge (`position: absolute; bottom: 12px; left: -20px;`).
- **Canvas Demo:** A 2D canvas context renders subtle moving connection nodes using `requestAnimationFrame`, demonstrating the HTML5 Canvas API in under 40 lines of clean JavaScript.

### 3. About Me (`<section id="about">`, `<article>`, `<blockquote>`, `<audio>`)
- **HTML Concept:**
  - Semantic `<article>` and `<aside>` tags.
  - Text blockquote: `<blockquote>` for featured quotations.
  - Multimedia: HTML5 `<audio controls>` element to demonstrate native audio streaming.
- **CSS Concept:** Two-column CSS Grid layout (`grid-template-columns: 1.2fr 1fr;`), soft border radii, and accent borders.

### 4. Technical Skills (`<section id="skills">`, `<ul>`, `<ol>`)
- **HTML Concept:**
  - Unordered lists (`<ul>` and `<li>`) for programming languages and web fundamentals.
  - Ordered list (`<ol>` and `<li>`) for the numbered learning roadmap.
- **CSS Concept:**
  - Responsive CSS Grid (`grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));`).
  - Custom list markers using pseudo-elements (`li::before`) replacing default bullets.
  - Box shadow and hover lift on skill cards.

### 5. Education (`<section id="education">`, `<table>`)
- **HTML Concept:** Complete table architecture using `<table>`, `<caption>`, `<thead>`, `<tbody>`, `<tr>`, `<th>` (with `scope="col"`), and `<td>`.
- **CSS Concept:**
  - `border-collapse: collapse;` for crisp borders.
  - Zebra striping using `:nth-child(even)` row selectors.
  - Hover highlight on table rows (`tr:hover`).
  - Horizontal scrolling container (`.table-responsive-wrapper`) for mobile responsiveness.

### 6. Projects (`<section id="projects">`, `<article>`, `<img >`)
- **HTML Concept:** Project cards wrapped in semantic `<article>` tags with images, descriptions, and both internal & external links.
- **CSS Concept:**
  - **CSS Transformations:** `transform: translateY(-8px) scale(1.02);` applied on `:hover`.
  - **CSS Transitions:** `transition: transform 0.3s ease, box-shadow 0.3s ease;` creates smooth physical feedback.
  - Clean unboxed metadata typography for technologies used (`HTML5 • CSS3 Flexbox • Box Model`).

### 7. Resume (`<section id="resume">`)
- **HTML Concept:** Comprehensive CV layout covering career objective, education, technical skills, projects, and honors.
- **CSS Print Stylesheet:** Includes dedicated `@media print` rules so clicking **"Download / Print Resume"** formats the resume cleanly onto an A4 page while hiding the rest of the site.

### 8. Contact Form (`<section id="contact">`, `<form>`, `<input>`, `<textarea>`)
- **HTML Concept:**
  - `<form>` tag with semantic form controls.
  - Accessible `<label>` elements paired with `<input>` tags using the `for` attribute.
  - Input types: `type="text"`, `type="email"`, and multi-line `<textarea>`.
  - Client-side validation attributes: `required` and `placeholder`.
- **JavaScript Interaction:** Intercepts form submission via `event.preventDefault()`, resets inputs, and renders an on-page success confirmation message without requiring any backend.

### 9. Lab Viva & Syllabus Guide (`<section id="viva">`)
- An on-page study companion that students and examiners can inspect directly during viva evaluations:
  - Interactive tabs switching between the Unit 1 mapping table, visual Box Model breakdown, and 12 Viva Q&As.

---

## 📊 Unit 1 Syllabus Topic Mapping Table

| No. | Unit 1 Topic | HTML / CSS Implementation | Specific Project Location |
|:---:|:---|:---|:---|
| **1** | **HTML Document Structure** | `<!DOCTYPE html>`, `<html lang="en">`, `<head>`, `<body>` | Root in `index.html` |
| **2** | **Semantic Tags** | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` | Document outline |
| **3** | **Headings & Text** | `<h1>` to `<h4>`, `<p>`, `<blockquote>`, `<strong>`, `<em>` | Home, About, Skills, Education |
| **4** | **Unordered Lists** | `<ul>`, `<li>` with custom CSS checkmarks | Skills Section & Achievements |
| **5** | **Ordered Lists** | `<ol>`, `<li>` for step-by-step roadmap | Skills Roadmap card |
| **6** | **HTML Tables** | `<table>`, `<caption>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>` | Education Section & Viva Table |
| **7** | **Internal Links** | `<a href="#home">`, `<a href="#projects">`, `<a href="#contact">` | Sticky Navbar & Hero buttons |
| **8** | **External Links** | `<a href="https://github.com" target="_blank" rel="noopener noreferrer">` | Project cards & Contact section |
| **9** | **Images** | `<img src="images/profile.svg" alt="..." width="..." height="...">` | Hero avatar & 4 Project cards |
| **10** | **Multimedia** | `<audio controls>` with audio fallback | About Section (Voice Intro card) |
| **11** | **HTML Forms** | `<form>`, `<label for="...">`, `<input>`, `<textarea>`, `<button type="submit">` | Contact Section |
| **12** | **CSS Box Model** | `margin`, `border`, `padding`, `content`, `box-sizing: border-box` | Global CSS (`style.css`), Cards, Form |
| **13** | **CSS Layout (Flexbox)** | `display: flex; justify-content: space-between; align-items: center;` | Navbar, Hero section, Buttons |
| **14** | **CSS Layout (Grid)** | `display: grid; grid-template-columns: repeat(auto-fit, minmax(...));` | Skills grid, Projects grid, Footer |
| **15** | **CSS Positioning** | `position: sticky` (navbar), `position: relative`, `position: absolute` (badge) | Navbar & Hero profile avatar |
| **16** | **CSS Typography** | `font-size`, `font-family`, `font-weight`, `line-height`, `letter-spacing` | Global styles & headings |
| **17** | **CSS Transformations**| `transform: translateY(-8px) scale(1.02);` | Project cards & buttons hover |
| **18** | **CSS Transitions** | `transition: all 0.3s ease;` | Buttons, navigation links, cards |
| **19** | **CSS Animation** | `@keyframes heroFadeInUp { ... }` | Hero section entrance |
| **20** | **HTML5 Canvas** | `<canvas id="decorative-canvas">` and `ctx.arc()`, `ctx.beginPath()` | Hero decorative canvas box |
| **21** | **Media Queries** | `@media (max-width: 768px)`, `@media print` | Responsive layout & Print resume |

---

## 🎓 12 Lab Viva Questions & Short Answers

### Q1. What is the difference between semantic and non-semantic HTML elements?
**Answer:** Semantic elements (e.g., `<header>`, `<nav>`, `<article>`, `<section>`, `<footer>`) clearly define their meaning and purpose to the browser, developer, and assistive technologies. Non-semantic elements (e.g., `<div>`, `<span>`) provide no inherent meaning and act purely as generic layout wrappers.

### Q2. Explain the four layers of the CSS Box Model.
**Answer:**
1. **Content:** The innermost area where text, images, or child elements reside.
2. **Padding:** Transparent space immediately surrounding the content, inside the border.
3. **Border:** A perimeter line encircling the padding and content.
4. **Margin:** Outermost transparent space separating the element from neighboring elements.

### Q3. Why is `box-sizing: border-box` preferred over `content-box`?
**Answer:** Under `content-box` (the default), adding padding and borders increases the rendered width and height beyond the declared CSS dimension. Under `border-box`, padding and border are included within the specified width, preventing accidental layout breaks.

### Q4. What is the fundamental difference between Flexbox and CSS Grid?
**Answer:** Flexbox is **one-dimensional** (lays out items in a single row OR a single column), making it ideal for navbars and button groups. CSS Grid is **two-dimensional** (handles both rows AND columns simultaneously), making it ideal for multi-column grids and entire page layouts.

### Q5. What is the difference between `position: relative`, `position: absolute`, and `position: sticky`?
**Answer:**
- **Relative:** Keeps the element in normal document flow and allows offsetting relative to its normal position.
- **Absolute:** Removes the element from normal flow and positions it relative to its closest positioned ancestor.
- **Sticky:** Behaves as relative positioning until the viewport scrolls to a specified threshold, at which point it sticks in place like fixed positioning (used for our navigation bar with `position: sticky; top: 0;`).

### Q6. How do internal hyperlinks differ from external hyperlinks in HTML?
**Answer:** An internal link points to a fragment identifier within the same page using a hash (e.g., `<a href="#projects">`), scrolling directly to an element with `id="projects"`. An external link references an external URL (e.g., `<a href="https://github.com" target="_blank">`) to navigate to an external website.

### Q7. What are the key tags used to construct an accessible HTML table?
**Answer:**
- `<table>`: Table container.
- `<caption>`: Describes the table's purpose.
- `<thead>` & `<tbody>`: Semantically separate headers from data rows.
- `<tr>`: Defines a table row.
- `<th>`: Defines a header cell (with `scope="col"` or `scope="row"`).
- `<td>`: Defines standard data cells.

### Q8. Why is the `for` attribute in `<label>` important when creating HTML forms?
**Answer:** The `for` attribute pairs the label with an input's `id`. This enables screen readers to announce the label when the input is selected, and clicking the label focuses or activates the input control.

### Q9. What is the difference between CSS Transitions and CSS Animations?
**Answer:** A transition requires an event trigger (e.g., `:hover` or `:focus`) to interpolate between two states (start and end). An animation (`@keyframes`) can run autonomously without user interaction and can interpolate through multiple keyframes (`0%`, `50%`, `100%`).

### Q10. How does the HTML5 `<canvas>` element work?
**Answer:** `<canvas>` provides a scriptable drawing area. JavaScript accesses its rendering context using `canvas.getContext("2d")` and renders graphics dynamically via commands such as `ctx.fillRect()`, `ctx.arc()`, `ctx.beginPath()`, and `ctx.stroke()`.

### Q11. What is the role of `<meta name="viewport" content="width=device-width, initial-scale=1.0">`?
**Answer:** It instructs mobile browsers to render the webpage at the device's physical screen width with a 1:1 scale ratio, rather than simulating a wide desktop viewport and shrinking the content.

### Q12. How do CSS Media Queries enable responsive web design?
**Answer:** Media queries (e.g., `@media (max-width: 768px) { ... }`) inspect viewport conditions (such as width, height, or orientation) and apply conditional style rules, enabling layouts to adapt seamlessly across desktop, tablet, and mobile devices.

---

## 🏆 Summary
This project satisfies all conditions of **Tutorial 1: Unit 1 HTML and CSS**:
- Zero extraneous frameworks or complex server stacks.
- 100% focused on pure HTML5 & CSS3.
- Fully working, modular code with clean visual hierarchy.
- Includes comprehensive viva preparation directly in the UI and README.
