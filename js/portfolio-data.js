/**
 * Portfolio Data for Shushil Bastola
 * Visual Artist: Graphic Design | Video Editing | Motion Graphics
 * Location: Pokhara, Nepal
 * Social: @itsmeshushil
 */

const portfolioProjects = [
  {
    id: "rupakot-cinematic",
    title: "Rupakot & Rupa Lake Cinematic Journey",
    category: "video",
    categoryName: "Video Editing",
    type: "Cinematic Film",
    year: "2024",
    client: "Travel & Landscape Series",
    role: "Editor & Colorist",
    tools: ["DaVinci Resolve", "Adobe Premiere Pro"],
    image: "assets/images/projects/rupakot.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Embeddable video modal
    isFeatured: true,
    summary: "A breathtaking visual documentary capturing the morning mist, mountain horizons, and mirror waters of Rupa Lake and Rupakot Viewpoint in Kaski, Nepal.",
    description: "Crafted with rhythm-focused pacing and natural soundscapes. The footage was graded in DaVinci Resolve to bring out the subtle warm morning highlights against the snow-capped Himalayan peaks of the Annapurna range. Features smooth speed ramps, atmospheric sound design, and clean ambient audio mastering."
  },
  {
    id: "motion-arcana",
    title: "Kinetic Typography & 3D Title Sequence",
    category: "motion",
    categoryName: "Motion Graphics",
    type: "Title Sequence",
    year: "2024",
    client: "Creative Series Opener",
    role: "Motion Designer",
    tools: ["Adobe After Effects", "Cinema 4D Elements"],
    image: "assets/images/projects/motion-arcana.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    isFeatured: true,
    summary: "Futuristic kinetic typography with chrome-metallic shading, dynamic camera sweeps, and beat-synced optical flares.",
    description: "An experimental exploration of rhythm and typographic expression. Built using After Effects shape animators, 3D camera tracking, and custom chromatic aberration passes to create an impactful cinematic title sequence."
  },
  {
    id: "heraima-music",
    title: "Heraima — Official Music Release",
    category: "video",
    categoryName: "Video Editing",
    type: "Music Video",
    year: "2024",
    client: "Musical Collaboration",
    role: "Lead Video Editor",
    tools: ["Adobe Premiere Pro", "After Effects"],
    image: "assets/images/projects/music-video.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    isFeatured: true,
    summary: "Mood-driven music video edit featuring dynamic tempo matching, emotional color timing, and seamless cut transitions.",
    description: "Edited to match the acoustic cadence and vocal peaks of the performance. Utilized dual-color lighting motifs (warm amber stage glow vs deep teal shadows) to amplify the intimate live performance atmosphere."
  },
  {
    id: "brand-identity-suite",
    title: "Nordic Studio Visual Identity & System",
    category: "graphic",
    categoryName: "Graphic Design",
    type: "Brand Identity",
    year: "2024",
    client: "Brand Identity Project",
    role: "Graphic Designer",
    tools: ["Adobe Illustrator", "Photoshop"],
    image: "assets/images/projects/branding.jpg",
    isFeatured: false,
    summary: "Minimalist corporate visual identity system featuring custom logomark, typography guidelines, and luxury stationery print specs.",
    description: "Comprehensive branding project developing a cohesive visual language: primary and secondary logo variants, custom grid layout rules, editorial letterhead, debossed business card mockups, and digital brand guidelines book."
  },
  {
    id: "nepal-vertical-reel",
    title: "High-Retention Nepal Adventure Reel",
    category: "reels",
    categoryName: "Reels / Short-Form",
    type: "Vertical Short",
    year: "2024",
    client: "Social Media Series",
    role: "Editor & Sound Designer",
    tools: ["Adobe Premiere Pro", "CapCut Pro"],
    image: "assets/images/projects/travel-reel.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    isFeatured: true,
    summary: "Fast-paced 9:16 vertical travel edit engineered for high hook retention, whip-pan transitions, and trending audio synchronization.",
    description: "Designed specifically for modern Instagram Reels and TikTok algorithms. Features a 1.2-second initial visual hook, frame-precise beat cutting, custom sound effects for footsteps and mountain wind, and vivid mobile color grading."
  },
  {
    id: "cultural-traditions-kaski",
    title: "Cultural Heritage & Traditions of Western Nepal",
    category: "video",
    categoryName: "Video Editing",
    type: "Cultural Documentary",
    year: "2023",
    client: "Cultural Showcase",
    role: "Editor & Storyteller",
    tools: ["Adobe Premiere Pro", "DaVinci Resolve"],
    image: "assets/images/projects/cultural-doc.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    isFeatured: false,
    summary: "An authentic cultural showcase celebrating traditional folk dances, artisanal instruments, and community festivities in Pokhara.",
    description: "A tribute to Nepal's rich cultural tapestry. The editing blends natural ambient acoustics with authentic folk rhythms (Madal and Flute), preserving the raw emotion and community energy of the festival gathering."
  },
  {
    id: "3d-logo-reveal",
    title: "3D Geometric Chrome Logo Motion",
    category: "motion",
    categoryName: "Motion Graphics",
    type: "Logo Animation",
    year: "2024",
    client: "Brand Motion Spec",
    role: "3D Motion Designer",
    tools: ["Adobe After Effects", "Element 3D"],
    image: "assets/images/projects/logo-reveal.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    isFeatured: false,
    summary: "Brushed metallic 3D emblem with volumetric rim illumination and kinetic assembly animation.",
    description: "Created for premium brand introductions. Integrates metallic reflection maps, depth-of-field rack focus, glowing amber edge displacement, and customized bass-heavy whoosh sound design."
  },
  {
    id: "swiss-typo-posters",
    title: "Swiss Modernism Typographic Poster Series",
    category: "graphic",
    categoryName: "Graphic Design",
    type: "Poster & Editorial",
    year: "2024",
    client: "Exhibition Creative",
    role: "Graphic Designer & Art Director",
    tools: ["Adobe Photoshop", "Adobe Illustrator"],
    image: "assets/images/projects/typo-poster.jpg",
    isFeatured: false,
    summary: "Strict modernist grid system poster series exploring high-contrast grotesk typography, asymmetry, and color discipline.",
    description: "Inspired by the International Typographic Style (Swiss Style). Combines structured hierarchical content with bold typographical emphasis, dual-tone palettes, and gallery-worthy exhibition aesthetics."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { portfolioProjects };
}
