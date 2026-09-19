# Vestor Innovators — Liquid Silver Vault Image Gallery
### Moderate Level Project • Class Presentation & Code Walkthrough Guide

---

## 1. Project Overview & Rules Compliance
- **League Name:** Vestor Innovators
- **League Captain:** Chhotu Kumar (Roll: 69, MBA, Session: 2025–2027)
- **Vice-Captain:** Abhishek Kumar (Roll: 06, BCA, Session: 2026–2029)
- **Strict Compliance:**
  - **100% Vanilla HTML5, CSS3, and JavaScript.**
  - **Zero external frameworks or libraries:** No React, Angular, Vue, Bootstrap, Tailwind CSS, jQuery, or Material UI.
  - **Responsive:** Fluid on desktop, tablet, and mobile devices.
  - **Assets:** Curated from `images/` and `images/members/` (excluding `less-priority`). `logo.png` is the main site brand image, and `logo-2.jpeg` is the favicon.

---

## 2. Key Features Implemented
1. **Liquid Silver Vault Aesthetic:**
   - Circulating ambient silver and cyan orbs floating smoothly in the background (`@keyframes circulatingOrb1`, `circulatingOrb2`).
   - Advanced glassmorphism with `backdrop-filter: blur(24px) saturate(180%)` and 1px hairline specular highlights.
   - Liquid chrome metallic button gradients with press and hover physics.
2. **Dynamic Vitrine Image Grid:**
   - Bento and standard responsive grid.
   - 3D hover lift, smooth image zoom, and liquid glass card metadata drawer.
   - **HD Tag:** Glowing cyan badge for all high-definition media.
   - **Captain Highlight:** Special golden star badge for League Captain Chhotu Kumar.
   - **Member Format:** Structured cards displaying Name, Roll Number, Course, and Session Batch.
3. **Full-Screen Lightbox Carousel:**
   - Next / Previous buttons with circular wrap-around navigation.
   - Keyboard shortcuts: `ArrowRight` (Next), `ArrowLeft` (Prev), `Escape` (Close), `f` (Fullscreen).
   - Mobile touch swipe navigation.
   - Zoom in, Zoom out, Reset zoom, and 90° Image Rotation.
   - Direct image download button.
   - Interactive thumbnail filmstrip to jump to any image.
4. **Interactive Filters, Search & Sort:**
   - Category filter pills (*All Photos*, *Innovators Squad*, *Trophies & Awards*, *Campus & Events*, *HD Only*, *Favorites*).
   - Live multi-field search across student names, roll numbers, courses, sessions, and award titles.
   - Sort dropdown: Student Roll Number, Alphabetical (A-Z), High-Definition first.
   - View density switcher: Standard Grid, Bento Dynamic, Compact Grid.
5. **Interactive Upload Modal:**
   - Drag-and-drop file upload with live `FileReader` preview.
   - Metadata inputs for Title, Category, HD status, Student Name, Roll No, Course, and Session.
   - Saves uploaded items to browser `localStorage` so they stay available on refresh.
6. **Dark to Light Mode Toggle:**
   - Seamless switch between Liquid Silver & Obsidian (Dark) and Luminous Platinum (Light) modes with preference persistence.

---

## 3. How to Present This Code to the Class (Step-by-Step)

### Step 1: Explain the HTML Structure (`index.html`)
- *"Notice that our HTML is purely semantic with zero third-party framework classes."*
- Point out the **Ambient Background Canvas** (`.ambient-background`) that houses the animated glowing orbs.
- Show the **Header** with the league logo, search input, and upload trigger.
- Show the **Hero Banner** displaying real-time counters (Vault Assets, Innovators, Awards, HD Encrypted).
- Point out the **Lightbox Modal** and **Upload Modal**, which are hidden by default and activated via pure JavaScript.

### Step 2: Explain the CSS Styling (`style.css`)
- *"Instead of using Tailwind or Bootstrap, we designed a custom CSS Design System using CSS Custom Properties (Variables)."*
- Show `:root` and `[data-theme="light"]`:
  - Explain how changing `--bg-primary`, `--chrome-primary`, and `--glass-border` enables a complete dark-to-light theme transition in one line.
- Show the `@keyframes` for the orbs:
  - Explain how `circulatingOrb1` uses `transform: translate()` and `scale()` to create circulating metallic reflections.
- Show the Glassmorphism rules:
  - `backdrop-filter: blur(24px)` creates the frosted glass look, and `inset 0 1px 0 rgba(255,255,255,0.35)` gives the illusion of a chamfered glass edge.

### Step 3: Explain the JavaScript Logic (`script.js`)
- *"Our JavaScript is structured cleanly into data, state, rendering, and interaction modules."*
1. **Data Array (`INITIAL_GALLERY_DATA`):**
   - Contains all the 16 members formatted with Name, Roll Number, Course, and Session, plus trophies and event photos.
2. **State Management (`AppState`):**
   - Keeps track of `activeFilter`, `searchQuery`, `sortBy`, `viewMode`, and `favorites`.
3. **Rendering Pipeline (`renderGallery()`):**
   - Filters the array using `.filter()`, sorts with `.sort()`, and generates HTML strings with `.map()`.
4. **Lightbox Carousel (`openLightbox()`, `nextLightbox()`, `prevLightbox()`):**
   - Uses modulo arithmetic `(currentIndex + 1) % items.length` for smooth infinite cycling.
5. **Local Uploads (`processUploadSubmission()`):**
   - Uses HTML5 `FileReader.readAsDataURL()` to turn uploaded image files into base64 strings and saves them in `localStorage`.

---

## 4. Running the Project Locally
Simply open `moderate/index.html` in any modern web browser, or serve it using any local HTTP server:
```bash
# Option 1: Python HTTP server
python -m http.server 8000

# Option 2: Node.js serve
npx -y serve .
```
Then navigate to: `http://localhost:8000/moderate/index.html`.
