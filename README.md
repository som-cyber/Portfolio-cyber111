# SecureProfile

A modern, interactive cybersecurity portfolio built with HTML, CSS, JavaScript, and Three.js.

**Live Demo:** https://portfolio-cyber111.vercel.app/

---

## Overview

SecureProfile is a premium cybersecurity portfolio website designed for Somprakash Bhattacharya, a cybersecurity enthusiast and B.Tech student in Computer Science and Engineering. The website showcases skills, projects, and professional information in a modern, dark-themed design inspired by industry leaders like GitHub, Cloudflare, and Stripe.

---

## Features

- **Responsive Design** - Fully responsive across desktop, tablet, and mobile devices
- **Dark Theme** - Premium dark mode with neon cyan and green accents
- **Modern UI** - Glassmorphism effects, smooth gradients, and elegant typography
- **Smooth Animations** - Typing effect, scroll reveal, hover effects, and progress bar animations
- **Interactive Navigation** - Sticky navbar with mobile hamburger menu
- **Contact Form Validation** - Client-side validation with error handling
- **Skills Progress Bars** - Animated skill visualization for technical expertise
- **Security Documentation** - Comprehensive security best practices and guidelines
- **Accessibility** - ARIA labels, keyboard navigation, and focus states
- **Performance Optimized** - Minimal dependencies and optimized code

---

## Technologies

- **HTML5** - Semantic markup and modern HTML features
- **CSS3** - Advanced styling with CSS Grid, Flexbox, and animations
- **JavaScript (Vanilla)** - Pure JavaScript with no framework dependencies
- **Google Fonts** - Inter font family for modern typography

---

## Profile Information

**Name:** Somprakash Bhattacharya  
**Professional Title:** Cybersecurity Enthusiast  
**Education:** B.Tech in Computer Science and Engineering  

**Skills:**
- Programming: Python, C, C++, Bash, SQL, Java
- Cybersecurity: Metasploit, Wireshark, Penetration Testing, File Decryption
- Operating Systems: Linux, Kali Linux, Windows
- Networking: Network Security, OWASP Top 10, Git & GitHub

**Links:**
- GitHub: https://github.com/som-cyber
- LinkedIn: https://www.linkedin.com/in/somprakash-bhattacharya-322868325
- Email: bhattsom22@gmail.com

---

## Folder Structure

```
SecureProfile/
│── index.html              # Home page with hero section
│── about.html              # About page with biography and timeline
│── skills.html             # Skills page with animated progress bars
│── contact.html            # Contact page with form validation
│── style.css               # All styling and animations
│── script.js               # Interactive JavaScript functionality
│── README.md               # Project documentation
│── SECURITY.md             # Security documentation and best practices
│── PROJECT.md              # Project requirements and specifications
│── DESIGN.md               # Design guidelines and principles
└── images/                 # Image assets directory
```

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/som-cyber/SecureProfile.git
   ```

2. Navigate to the project directory:
   ```bash
   cd SecureProfile
   ```

3. Open `index.html` in your web browser

Alternatively, use a local server for better development experience:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server
```

Then visit `http://localhost:8000` in your browser.

---

## Usage

### Navigation
- Use the sticky navigation bar to switch between pages
- On mobile devices, use the hamburger menu
- Smooth scrolling is enabled for better user experience

### Contact Form
- Fill in all required fields (name, email, subject, message)
- Client-side validation ensures data integrity
- Form submission shows success message

### Skills Display
- Visit the Skills page to see animated progress bars
- Skills are categorized by technology area
- Progress bars animate when scrolled into view

---

## Customization

### Update Profile Information
Edit `PROFILE.MD` to update personal information, then reflect changes in the HTML files.

### Modify Colors
Update CSS variables in `style.css`:
```css
:root {
    --primary: #00F5FF;
    --accent: #00FF99;
    --background: #050816;
    /* ... other variables */
}
```

### Add New Skills
Add skill entries in `skills.html` following the existing pattern:
```html
<div class="skill-card">
    <div class="skill-header">
        <h3 class="skill-name">Your Skill</h3>
        <span class="skill-percentage">90%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" data-progress="90"></div>
    </div>
</div>
```

---

## Security Features

This project implements several security best practices:

- **Input Validation** - All form inputs are validated client-side
- **XSS Prevention** - No dynamic code execution, proper output encoding
- **HTTPS Ready** - Designed for HTTPS deployment
- **Secure Coding** - No eval(), no global variables, strict error handling
- **CSP Headers** - Content Security Policy recommendations documented
- **No Sensitive Data Exposure** - No API keys or secrets in client code

See `SECURITY.md` for comprehensive security documentation.

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Performance

- **Designed with performance, responsiveness, and accessibility in mind.**
- **Load Time:** Fast loading with minimal dependencies
- **Optimized Assets:** Minified CSS and JavaScript
- **Lazy Loading:** Implementable for images when added

---

## Accessibility

- WCAG 2.1 AA compliant
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader compatible
- Proper heading hierarchy
- Visible focus states

---

## Future Improvements

- [ ] Add projects showcase page
- [ ] Implement blog section
- [ ] Add dark/light theme toggle
- [ ] Implement project filtering
- [ ] Add CMS support for easy content management
- [ ] Integrate analytics (with privacy considerations)
- [ ] Add PWA capabilities
- [ ] Implement server-side form handling
- [ ] Add multi-language support

---

## Contributing

This is a personal portfolio project. For suggestions or improvements:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

Or contact the developer directly with suggestions.

---

## License

This project is open source and available under the MIT License.

---

## Author

**Somprakash Bhattacharya**  
Cybersecurity Enthusiast  
B.Tech in Computer Science and Engineering

- GitHub: [@som-cyber](https://github.com/som-cyber)
- LinkedIn: [Somprakash Bhattacharya](https://www.linkedin.com/in/somprakash-bhattacharya-322868325)
- Email: bhattsom22@gmail.com

---

## Acknowledgments

- Design inspiration from GitHub, Cloudflare, Stripe, Apple, Linear
- Icons from inline SVG (no external icon libraries)
- Fonts from Google Fonts (Inter)
- Built with passion for cybersecurity and web development

---

**Version:** 1.0.0  
**Last Updated:** July 2026
