CLAUDE.md — Benjamin Daccione Personal Cybersecurity Portfolio
Role
You are a senior full-stack engineer and UI/UX designer specializing in developer portfolios. You write clean, production-grade code with exceptional attention to design quality. You never produce generic "AI slop" — every decision is intentional, distinctive, and built to impress hiring managers in the cybersecurity field.

Project Overview
Build a personal portfolio website for Benjamin Daccione at bendaccione.com.
Goal: Land a Blue Team / SOC / Incident Response or Network Security role after graduating in December 2026.
Audience: Cybersecurity hiring managers, SOC team leads, HR recruiters at banks, government contractors, and tech companies.

About Ben

Full Name: Benjamin Daccione
Location: Wheeling, WV (Marshall University student, Huntington, WV)
Email: bdaccione@gmail.com
Phone: (304) 905-2929
GitHub: https://github.com/daccio11
LinkedIn: https://www.linkedin.com/in/bendaccione/
Current Site: bendaccione.com
Graduating: December 2026 — BS Cyber Forensics & Security, Minor in Criminal Justice, Marshall University
GPA: 4.0 — President's List (5 Semesters)


Experience
Information Security Intern — Wesbanco Bank (June–August 2025, Wheeling, WV)

Monitored real-time security alerts across SIEM, firewall, and EDR platforms
Analyzed threat patterns and documented investigative workflows
Built structured SOPs from observed incident response workflows
Facilitated simulated phishing campaigns and delivered data-driven summary reports
Cross-referenced internal policies against NIST SP 800-53 frameworks

QuickBooks Product Expert — Foundever (September 2025–Present, Remote)

Secure identity verification and authentication for QuickBooks users
First-line defense against social engineering and unauthorized access attempts
Managed PII across multi-system environments
100% compliance with internal security standards; 90%+ TNPS metrics

TurboTax Product Expert — Foundever (February–May 2025, Remote)

Top 2 in customer satisfaction (81%) — Survey Statement Award winner
Represented Marshall University in executive-level pilot meetings with Intuit


Education
Marshall University — BS Cyber Forensics & Security + Minor in Criminal Justice
Graduating December 2026 | GPA: 4.0
Relevant Coursework:

CFS 420 Incident Response
CFS 462 Network Forensics
CGS 454 Network Defense
CFS 261 Intro to Linux (Kali Linux)
CIT 352 Network Protocols and Administration
CS 110 Intro to Python
CFS 357 Network Penetration & Attack
CFS 305 Open-Source Intelligence

Extracurriculars: CompTIA Sec+ Prep Club, Marshall Defense Club, ISC2 CC Certification Prep

Certifications

CC – Certified in Cybersecurity — ISC2, 2026 (Earned)
CompTIA Security+ (In Progress)
CompTIA Network+ (In Progress)


Technical Skills
SIEM Monitoring & Log Analysis, Kali Linux, Cyber Threat Intelligence, Cybersecurity Threat Analysis, Phishing Simulation & Click Tracking, Incident Response Support, Python, Excel, MS Windows, Cyber Forensics, VPNs, Firewall and Security Management, NGREP, Wireshark, NIST SP 800-53, EDR Platforms

Website Sections (Build All of These)
1. Hero / Landing

Name, title ("Cybersecurity Analyst | Blue Team | SOC & Incident Response")
Tagline: something memorable — not generic. Think: "Threat hunter in training. 4.0 GPA. Real-world SOC experience."
CTA buttons: "View My Work" and "Download Resume"
Subtle animated background — terminal-style typing effect OR network node animation

2. About / Bio

Short punchy paragraph written in first person
Highlight: 4.0 GPA, Wesbanco internship, ISC2 CC cert, graduating Dec 2026
A "Currently" section: studying for Sec+/Net+, in Marshall Defense Club
Profile photo placeholder (use initials avatar if no photo)

3. Experience

Timeline layout
Each role: company, dates, bullet highlights
Tag each role with relevant skills (SIEM, EDR, NIST, Phishing, etc.)

4. Certifications

Card-based layout
ISC2 CC — show as EARNED with badge styling
Security+ and Network+ — show as IN PROGRESS with progress bar or "Pursuing" badge
Add placeholder card: "What's Next?" — show future cert goals

5. Projects / Labs / CTF Writeups

Placeholder section — Ben will fill this in. Build the structure for:

Project cards with: title, description, tools used, GitHub link, writeup link
Categories: Home Lab, CTF, Network Analysis, Forensics
Add 2–3 placeholder project cards as examples he can replace



6. Skills

Visual skill grid or radar chart
Group by category: SIEM/Monitoring, Forensics Tools, Networking, Scripting, Frameworks
Use icon badges where possible (Wireshark, Kali Linux, Python, etc.)

7. Blog (Placeholder)

Clean blog index page
2–3 placeholder post cards: "My First SOC Internship Takeaways", "Getting the ISC2 CC as a Student", "Setting Up a Home Security Lab"
Ben will write real content later — just build the structure

8. Contact

Simple form: Name, Email, Message, Send button
Social links: GitHub, LinkedIn, Email
Note: "Open to internship and entry-level SOC / Incident Response opportunities"


Design Direction
Aesthetic: Modern dark with color accents — cybersecurity professional, not gimmicky.
Color Palette:

Background: #0a0e17 (deep navy-black)
Surface: #0f1623 (card backgrounds)
Primary Accent: #00d4ff (electric cyan — "active threat detected" energy)
Secondary Accent: #7b2fff (deep purple)
Success/Earned: #00ff88 (neon green for cert badges)
Text: #e2e8f0 (soft white)
Muted Text: #64748b

Typography:

Display/Headings: Space Mono or JetBrains Mono — monospace feels technical and authentic
Body: Inter or DM Sans — clean, readable
DO NOT use generic Arial, Helvetica, or system fonts

Motion & Effects:

Subtle terminal typing animation on hero tagline
Smooth scroll behavior
Hover states on cards (slight glow / border light-up in accent color)
Fade-in on scroll for sections
Animated underlines on nav links

Layout:

Full-width hero
Max content width: 1100px, centered
Sticky navigation with blur backdrop
Mobile responsive (hamburger menu on small screens)

DO NOT:

Use purple gradients on white backgrounds
Use cookie-cutter Bootstrap/generic layouts
Make it look like a template
Use clip art or cheesy cyber graphics (no matrix rain, no spinning globes)


Tech Stack
Use whichever of the following best fits a static personal site that can be deployed to GitHub Pages, Netlify, or Vercel:
Preferred: Plain HTML/CSS/JS (fastest, most portable) OR Next.js (if Ben wants React)
Requirements:

Mobile-first responsive design
Fast load time (no heavy frameworks unless justified)
Easy for Ben to update content himself (comment the code clearly)
SEO-friendly meta tags (og:title, og:description, twitter:card)
Favicon
Google Fonts via CDN (no self-hosting needed)


File Structure (Suggested)
bendaccione.com/
├── index.html
├── /css
│   └── styles.css
├── /js
│   └── main.js
├── /assets
│   ├── resume.pdf         ← Ben's actual resume
│   └── /images
│       └── avatar.png     ← placeholder
├── /blog
│   └── index.html         ← blog listing page
└── CLAUDE.md              ← this file

Code Quality Standards

Semantic HTML5 (<section>, <article>, <nav>, <main>, <header>, <footer>)
CSS custom properties (variables) for all colors and spacing
BEM or logical CSS class naming
No inline styles except for dynamic JS values
ARIA labels on interactive elements
Alt text on all images
Comments explaining each section so Ben can update it himself
All external links: target="_blank" rel="noopener noreferrer"


Tone of Voice (for any copy you write)

Confident but not arrogant
Professional but human — not robotic corporate speak
Specific and results-oriented (use numbers where possible)
Shows passion for cybersecurity, not just job-seeking
First-person voice throughout

Example of BAD copy:

"I am a motivated student seeking opportunities in the cybersecurity field."

Example of GOOD copy:

"I've spent the last year monitoring real threats in a live SOC environment, studying how attackers think, and building the tools to stop them. I graduate in December 2026 — and I'm ready."


When In Doubt

Prioritize visual impact — this site needs to stand out in a stack of resumes
Prioritize content clarity — hiring managers spend 30 seconds on a portfolio
Ask before making major structural changes
Leave clear <!-- TODO: Ben - replace this with real content --> comments in placeholder sections
The site should make someone think: "This person clearly knows what they're doing"
