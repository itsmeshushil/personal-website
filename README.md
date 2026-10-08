# Shushil Bastola — Modern Personal Portfolio Website

A bespoke, high-performance personal portfolio website built for **Shushil Bastola**, creative professional specializing in **Graphic Design, Video Editing, and Motion Graphics**, based in **Pokhara, Nepal**.

Inspired by the clean architecture, polish, and UX of *alishbhandari.com*, but featuring an original, cinematic dark-mode identity crafted exclusively around Shushil's real work, verified credentials, and aesthetic.

---

## 🌟 Key Highlights & Features

1. **Authentic Brand & Identity:**
   - Real creator portrait from Shushil's profile with subtle studio glow and floating software badges (Premiere Pro, After Effects, DaVinci Resolve, Photoshop, Illustrator).
   - Real credentials: Tribhuvan University alumnus, Pokhara local roots, Nepali pride badge (*"जे गर्छु, नेपालमै गर्छु ।"*).
   - Verified community metrics: 3,900+ Facebook followers, 900+ Instagram creative community. Zero fabricated statistics.

2. **Multidisciplinary Creative Architecture:**
   - **Video Editing:** Cinematic cuts, foley, rhythm-matched pacing, and DaVinci Resolve color grading.
   - **Motion Graphics:** Kinetic typography, 3D title sequences, and logo animation stings.
   - **Graphic Design:** Modernist typographic posters, corporate branding suites, and digital covers.
   - **Short-Form Content:** Retention-engineered 9:16 vertical reels for Instagram & TikTok.

3. **UX & Polish:**
   - **Sticky Navigation:** Refines and shrinks on scroll with backdrop blur, active state indicators, and mobile drawer.
   - **Theme Engine:** Cinematic obsidian dark mode (default) with smooth toggle to clean light mode (persisted in `localStorage`).
   - **Interactive Portfolio:** Filter tabs (`All`, `Video Editing`, `Motion Graphics`, `Graphic Design`, `Reels`). Clicking any card opens a responsive lightbox modal with embedded video playback or high-resolution graphic details.
   - **Project Booking & Inquiry Modal:** Quick access from every page and CTA button with pre-selected service inputs.
   - **Direct WhatsApp Chat Integration:** One-click instant chat with pre-composed inquiry message.
   - **Form Validation & Feedback:** Contact and booking forms with smooth submission states and toast notifications.

---

## 📁 Project Structure

```
Website/
├── index.html           # Main flagship homepage (all 15 required sections)
├── about.html           # In-depth story, personal philosophy & software stack
├── portfolio.html       # Comprehensive project gallery with category filtering
├── services.html        # Detailed breakdown of services, deliverables & timelines
├── contact.html         # Dedicated contact page, WhatsApp link & social hubs
├── css/
│   └── style.css        # Full CSS system (variables, dark/light themes, animations)
├── js/
│   ├── main.js          # Theme toggle, mobile drawer, modals, lightbox, form handler
│   └── portfolio-data.js# Easily editable dataset for all portfolio projects
└── assets/
    └── images/
        ├── profile.jpg  # Verified high-res photograph of Shushil Bastola
        └── projects/    # 8 curated project visuals and thumbnails
```

---

## ✏️ How to Add or Update Portfolio Projects

All portfolio items are defined in `js/portfolio-data.js`. To add a new project, simply add an object to the `portfolioProjects` array:

```javascript
{
  id: "your-project-id",
  title: "Your Project Title",
  category: "video", // "video" | "motion" | "graphic" | "reels"
  categoryName: "Video Editing",
  type: "Cinematic Film",
  year: "2024",
  client: "Client Name",
  role: "Lead Editor",
  tools: ["Adobe Premiere Pro", "DaVinci Resolve"],
  image: "assets/images/projects/your-image.jpg",
  videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID", // Optional
  summary: "Brief description for portfolio cards...",
  description: "Detailed description shown in the lightbox modal..."
}
```

The website automatically updates the grid, category filters, and modal lightboxes!

---

## 🚀 How to Run Locally

You can open `index.html` directly in any web browser (Chrome, Edge, Firefox, Safari) by double-clicking it, or serve it using any local HTTP server:

```powershell
# In PowerShell:
Start-Process index.html
```
