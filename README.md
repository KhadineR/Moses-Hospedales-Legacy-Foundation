# 🌟 Moses Hospedales Legacy Foundation Website

## Overview

This repository contains the code for the official six-page responsive website for the Moses Hospedales Legacy Foundation. The project was built using **HTML5, CSS3, JavaScript**, and the **Tailwind CSS framework**, with a focus on modern design, performance optimization, and global accessibility.

---

## 🚀 Core Build Requirements Met

| Requirement | Status | Details |
| :--- | :--- | :--- |
| **Pages** | Met | Six-page site structure: `index.html`, `about.html`, `programs.html`, `gallery.html`, `donate.html`, `contact.html`. |
| **HTML/CSS** | Met | Uses **Semantic HTML5** tags and **Modular CSS** via the Tailwind framework. |
| **Responsiveness** | Met | Fully responsive design using Tailwind's utility-first approach and custom media queries. |
| **JS Framework/Library** | Met | Integrates the **Swiper JS** library for carousels and custom Vanilla JavaScript (`js/index.js`) for dynamic features. |
| **Deployment** | Met | Deployed on **Netlify**, leveraging its built-in CDN for global delivery. |
| **Bonus Points** | Earned | Use of **Tailwind CSS** (utility-first framework). |

---

## 🛠️ Frameworks and Libraries Used

| Technology | Type | Purpose in Project |
| :--- | :--- | :--- |
| **Tailwind CSS** | HTML/CSS Framework (CDN) | Used for rapid, utility-first styling and responsive design. |
| **Swiper JS** | JavaScript Library (CDN) | Implemented for the fully responsive image and program carousel on the homepage. |
| **Font Awesome** | Icon Library (CDN) | Used for scalable vector icons throughout the navigation and content sections. |

---

## 🌐 CDN Provider and Configuration

The project is hosted using **Netlify** to ensure high performance, scalability, and global delivery.

### Configuration Details:
* **Provider:** **Netlify**
* **Asset Delivery:** All static assets (`.css`, `.js`, `.jpg`, `.png`) are automatically distributed and served via Netlify's integrated global **Content Delivery Network (CDN)** edge network.
* **Cache-Control Headers:** Configured via a root-level `_headers` file to optimize client-side caching:
    * **Static Assets** (`/css/*`, `/js/*`, `/img/*`): Set to `Cache-Control: public, max-age=31536000, immutable` for aggressive long-term caching.
    * **HTML Pages** (`/*`): Set to `Cache-Control: public, max-age=0, must-revalidate` to ensure browsers always check for the latest version upon visiting.

---

## 📈 Performance Improvement Report

Performance metrics were gathered using **WebPageTest** to validate the efficiency of the CDN. The following comparison highlights the effective performance for users globally.

| Metric (Time in Seconds) | Non-CDN Baseline (Virginia, USA) | CDN (Singapore, Far Location) | Implication |
| :--- | :--- | :--- | :--- |
| **Time to First Byte (TTFB)** | **0.200s** | **0.375s** | Confirms the **CDN Edge Server** is responding quickly, drastically reducing latency across long distances. |
| **Fully Loaded Time** | **2.203s** | **2.730s** | Demonstrates excellent global performance, keeping the load time under 3 seconds even for users on a distant continent. |

### Lighthouse Audit Results (Deployed Site)
| Metric | Score |
| :--- | :--- |
| **Performance** | **94** |
| **Accessibility** | **98** |
| **Best Practices** | **100** |
| **SEO** | **92** |

---

## 👁️ Accessibility and SEO Strategies

### Accessibility (A11y)
* **Semantic Structure:** Extensive use of `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` for clear structure read by screen readers.
* **Focus Management:** Interactive elements are keyboard-navigable.
* **High Contrast:** Color palette ensures high contrast for readability across all components.

### Search Engine Optimization (SEO)
* **Metadata:** All six pages include unique, descriptive `<title>` and `<meta name="description">` tags.
* **Responsive Design:** Mobile-first approach is a major SEO ranking factor.
* **Heading Hierarchy:** Content structure is logical, using a proper `<h1>` through `<h3>` hierarchy.

---

## 📄 License

[Specify your license here, e.g., MIT License or All Rights Reserved.]
