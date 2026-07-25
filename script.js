/* ==========================================
   SECURE OPERATIONS CENTER - INTERACTIVE SYSTEMS
   AAA Game-Level JavaScript Functionality
   ========================================== */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all systems
    initCinematicLoader();
    initCustomCursor();
    initHUDNavigation();
    initTypingEffect();
    initSmoothScroll();
    initFormValidation();
    initThreeJSHero();
    initScrollAnimations();
    initMicroInteractions();
});

/* ==========================================
   CINEMATIC LOADING SEQUENCE
   ========================================== */
function initCinematicLoader() {
    const loader = document.getElementById('cinematicLoader');
    const loaderMessages = document.getElementById('loaderMessages');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    const loadingSequence = [
        { message: 'Initializing Secure Connection...', progress: 15 },
        { message: 'Verifying Identity...', progress: 30 },
        { message: 'Loading Threat Intelligence...', progress: 50 },
        { message: 'Establishing Encrypted Channel...', progress: 70 },
        { message: 'Access Granted.', progress: 100 }
    ];
    
    let currentStep = 0;
    
    function nextStep() {
        if (currentStep < loadingSequence.length) {
            const step = loadingSequence[currentStep];
            
            // Update message
            loaderMessages.innerHTML = `<div class="loader-message">${step.message}</div>`;
            
            // Update progress
            progressFill.style.width = step.progress + '%';
            progressText.textContent = step.progress + '%';
            
            currentStep++;
            
            // Move to next step with varying delays
            const delay = currentStep === loadingSequence.length ? 1500 : 800 + Math.random() * 500;
            setTimeout(nextStep, delay);
        } else {
            // Hide loader
            setTimeout(() => {
                loader.classList.add('hidden');
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 1000);
            }, 500);
        }
    }
    
    // Start loading sequence
    setTimeout(nextStep, 500);
}

/* ==========================================
   CUSTOM CURSOR
   ========================================== */
function initCustomCursor() {
    const cursor = document.querySelector('body::before');
    const cursorDot = document.querySelector('body::after');
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        document.body.style.setProperty('--cursor-x', x + 'px');
        document.body.style.setProperty('--cursor-y', y + 'px');
        
        // Update cursor positions using CSS transforms
        const outerCursor = document.querySelector('body::before');
        const innerCursor = document.querySelector('body::after');
        
        if (outerCursor) {
            outerCursor.style.left = x + 'px';
            outerCursor.style.top = y + 'px';
        }
        
        if (innerCursor) {
            innerCursor.style.left = x + 'px';
            innerCursor.style.top = y + 'px';
        }
    });
    
    // Add hover effects
    const interactiveElements = document.querySelectorAll('a, button, .hud-link, .mission-btn');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            document.body.style.setProperty('--cursor-scale', '1.5');
        });
        el.addEventListener('mouseleave', () => {
            document.body.style.setProperty('--cursor-scale', '1');
        });
    });
}

/* ==========================================
   HUD NAVIGATION
   ========================================== */
function initHUDNavigation() {
    const hudToggle = document.getElementById('hudToggle');
    const hudMenu = document.getElementById('hudMenu');
    const hudLinks = document.querySelectorAll('.hud-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Toggle mobile menu
    if (hudToggle) {
        hudToggle.addEventListener('click', () => {
            hudToggle.classList.toggle('active');
            hudMenu.classList.toggle('active');
            document.body.style.overflow = hudMenu.classList.contains('active') ? 'hidden' : '';
        });
    }
    
    // Smooth scroll to sections
    hudLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
                
                // Close mobile menu
                hudToggle.classList.remove('active');
                hudMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Update active link based on scroll position
    window.addEventListener('scroll', () => {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        hudLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    });
}

/* ==========================================
   TYPING EFFECT
   ========================================== */
function initTypingEffect() {
    const typingElement = document.getElementById('typingText');
    if (!typingElement) return;
    
    const objectives = [
        'Learning Offensive Security',
        'Exploring Digital Forensics',
        'Building Secure Systems',
        'Future SOC Analyst',
        'Mastering Penetration Testing'
    ];
    
    let objectiveIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentObjective = objectives[objectiveIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentObjective.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentObjective.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentObjective.length) {
            isDeleting = true;
            typingSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            objectiveIndex = (objectiveIndex + 1) % objectives.length;
            typingSpeed = 500;
        }
        
        setTimeout(type, typingSpeed);
    }
    
    setTimeout(type, 2000);
}

/* ==========================================
   SMOOTH SCROLL
   ========================================== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

/* ==========================================
   FORM VALIDATION
   ========================================== */
function initFormValidation() {
    const secureForm = document.getElementById('secureForm');
    const transmissionSuccess = document.getElementById('transmissionSuccess');
    const newTransmissionBtn = document.getElementById('newTransmission');
    
    if (!secureForm) return;
    
    secureForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let isValid = true;
        const inputs = secureForm.querySelectorAll('.field-input');
        
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                input.style.borderColor = 'var(--danger)';
                isValid = false;
            } else {
                input.style.borderColor = 'rgba(0, 245, 255, 0.2)';
            }
        });
        
        // Email validation
        const emailInput = secureForm.querySelector('input[type="email"]');
        if (emailInput) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                emailInput.style.borderColor = 'var(--danger)';
                isValid = false;
            }
        }
        
        if (isValid) {
            secureForm.style.display = 'none';
            transmissionSuccess.classList.add('active');
            
            // In production, you would send the form data to a server
            console.log('Transmission Complete');
        }
    });
    
    if (newTransmissionBtn) {
        newTransmissionBtn.addEventListener('click', () => {
            secureForm.reset();
            secureForm.style.display = 'flex';
            transmissionSuccess.classList.remove('active');
        });
    }
    
    // Remove error styling on input
    const inputs = secureForm.querySelectorAll('.field-input');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            input.style.borderColor = 'rgba(0, 245, 255, 0.2)';
        });
    });
}

/* ==========================================
   ENHANCED THREE.JS HERO
   ========================================== */
function initThreeJSHero() {
    const container = document.getElementById('threejs-container');
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Cybersecurity color palette
    const colors = {
        primary: 0x00F5FF,
        accent: 0x00FF99,
        highlight: 0x3B82F6,
        secondary: 0x0F172A,
        dark: 0x050816
    };

    // Create holographic Earth
    const earthGroup = new THREE.Group();
    
    // Earth sphere with wireframe
    const earthGeometry = new THREE.SphereGeometry(5, 64, 64);
    const earthMaterial = new THREE.MeshBasicMaterial({
        color: colors.primary,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earthGroup.add(earth);

    // Inner solid sphere
    const innerEarthGeometry = new THREE.SphereGeometry(4.8, 64, 64);
    const innerEarthMaterial = new THREE.MeshBasicMaterial({
        color: colors.dark,
        transparent: true,
        opacity: 0.9
    });
    const innerEarth = new THREE.Mesh(innerEarthGeometry, innerEarthMaterial);
    earthGroup.add(innerEarth);

    // Atmosphere glow
    const atmosphereGeometry = new THREE.SphereGeometry(5.5, 64, 64);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
        color: colors.highlight,
        transparent: true,
        opacity: 0.1,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    earthGroup.add(atmosphere);

    scene.add(earthGroup);

    // Create network nodes around Earth
    const nodeGroup = new THREE.Group();
    const nodeCount = 50;
    
    for (let i = 0; i < nodeCount; i++) {
        const phi = Math.acos(-1 + (2 * i) / nodeCount);
        const theta = Math.sqrt(nodeCount * Math.PI) * phi;
        
        const radius = 6;
        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);
        
        const nodeGeometry = new THREE.SphereGeometry(0.1, 16, 16);
        const nodeMaterial = new THREE.MeshBasicMaterial({
            color: Math.random() > 0.5 ? colors.primary : colors.accent,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });
        const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
        node.position.set(x, y, z);
        node.userData = {
            originalPosition: new THREE.Vector3(x, y, z),
            pulseSpeed: Math.random() * 0.02 + 0.01,
            pulseOffset: Math.random() * Math.PI * 2
        };
        nodeGroup.add(node);
    }
    
    scene.add(nodeGroup);

    // Create network connections
    const connectionGroup = new THREE.Group();
    const connectionCount = 30;
    
    for (let i = 0; i < connectionCount; i++) {
        const startPhi = Math.random() * Math.PI;
        const startTheta = Math.random() * Math.PI * 2;
        const endPhi = Math.random() * Math.PI;
        const endTheta = Math.random() * Math.PI * 2;
        
        const radius = 6;
        const startX = radius * Math.cos(startTheta) * Math.sin(startPhi);
        const startY = radius * Math.sin(startTheta) * Math.sin(startPhi);
        const startZ = radius * Math.cos(startPhi);
        
        const endX = radius * Math.cos(endTheta) * Math.sin(endPhi);
        const endY = radius * Math.sin(endTheta) * Math.sin(endPhi);
        const endZ = radius * Math.cos(endPhi);
        
        const curve = new THREE.QuadraticBezierCurve3(
            new THREE.Vector3(startX, startY, startZ),
            new THREE.Vector3(
                (startX + endX) / 2 + (Math.random() - 0.5) * 2,
                (startY + endY) / 2 + (Math.random() - 0.5) * 2,
                (startZ + endZ) / 2 + (Math.random() - 0.5) * 2
            ),
            new THREE.Vector3(endX, endY, endZ)
        );
        
        const tubeGeometry = new THREE.TubeGeometry(curve, 20, 0.02, 8, false);
        const tubeMaterial = new THREE.MeshBasicMaterial({
            color: Math.random() > 0.5 ? colors.highlight : colors.accent,
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending
        });
        const tube = new THREE.Mesh(tubeGeometry, tubeMaterial);
        connectionGroup.add(tube);
    }
    
    scene.add(connectionGroup);

    // Create floating data particles
    const particleCount = 500;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    
    const color1 = new THREE.Color(colors.primary);
    const color2 = new THREE.Color(colors.accent);
    const color3 = new THREE.Color(colors.highlight);
    
    for (let i = 0; i < particleCount; i++) {
        const radius = 8 + Math.random() * 10;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        
        particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        particlePositions[i * 3 + 2] = radius * Math.cos(phi);
        
        const mixedColor = Math.random();
        let finalColor;
        if (mixedColor < 0.33) {
            finalColor = color1;
        } else if (mixedColor < 0.66) {
            finalColor = color2;
        } else {
            finalColor = color3;
        }
        
        particleColors[i * 3] = finalColor.r;
        particleColors[i * 3 + 1] = finalColor.g;
        particleColors[i * 3 + 2] = finalColor.b;
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
    });
    
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Create hexagonal grid
    const hexGroup = new THREE.Group();
    const hexCount = 20;
    
    for (let i = 0; i < hexCount; i++) {
        const hexGeometry = new THREE.CylinderGeometry(0.5, 0.5, 0.1, 6);
        const hexMaterial = new THREE.MeshBasicMaterial({
            color: colors.primary,
            wireframe: true,
            transparent: true,
            opacity: 0.2,
            blending: THREE.AdditiveBlending
        });
        const hex = new THREE.Mesh(hexGeometry, hexMaterial);
        
        const radius = 12 + Math.random() * 8;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        
        hex.position.set(
            radius * Math.sin(phi) * Math.cos(theta),
            radius * Math.sin(phi) * Math.sin(theta),
            radius * Math.cos(phi)
        );
        
        hex.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
        );
        
        hex.userData = {
            rotationSpeed: {
                x: (Math.random() - 0.5) * 0.005,
                y: (Math.random() - 0.5) * 0.005,
                z: (Math.random() - 0.5) * 0.005
            }
        };
        
        hexGroup.add(hex);
    }
    
    scene.add(hexGroup);

    // Camera positioning
    camera.position.z = 15;

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    // Touch interaction
    document.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
            mouseX = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
            mouseY = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
        }
    });

    // Animation loop
    const clock = new THREE.Clock();
    
    function animate() {
        requestAnimationFrame(animate);
        
        const elapsed = clock.getElapsedTime();
        
        // Smooth camera movement
        targetX = mouseX * 3;
        targetY = mouseY * 3;
        currentX += (targetX - currentX) * 0.02;
        currentY += (targetY - currentY) * 0.02;
        
        camera.position.x = currentX;
        camera.position.y = currentY;
        camera.lookAt(scene.position);

        // Rotate Earth
        earthGroup.rotation.y += 0.001;
        earthGroup.rotation.x = Math.sin(elapsed * 0.1) * 0.1;

        // Animate network nodes
        nodeGroup.children.forEach(node => {
            const pulse = Math.sin(elapsed * node.userData.pulseSpeed * 50 + node.userData.pulseOffset);
            const scale = 1 + pulse * 0.3;
            node.scale.setScalar(scale);
        });

        // Rotate connection group
        connectionGroup.rotation.y += 0.0005;

        // Animate particles
        particles.rotation.y += 0.0002;
        particles.rotation.x += 0.0001;

        // Animate hexagons
        hexGroup.children.forEach(hex => {
            hex.rotation.x += hex.userData.rotationSpeed.x;
            hex.rotation.y += hex.userData.rotationSpeed.y;
            hex.rotation.z += hex.userData.rotationSpeed.z;
        });

        // Pulsing atmosphere
        const atmospherePulse = 1 + Math.sin(elapsed * 2) * 0.05;
        atmosphere.scale.setScalar(atmospherePulse);

        renderer.render(scene, camera);
    }

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Performance optimization
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            renderer.dispose();
        } else {
            animate();
        }
    });
}

/* ==========================================
   SCROLL ANIMATIONS
   ========================================== */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    const animatedElements = document.querySelectorAll(
        '.dossier-card, .arsenal-module, .operation-card, .channel-card, .skill-item'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add visible class styles
    const style = document.createElement('style');
    style.textContent = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

/* ==========================================
   MICRO-INTERACTIONS
   ========================================== */
function initMicroInteractions() {
    // Magnetic buttons
    const magneticButtons = document.querySelectorAll('.mission-btn, .action-btn');
    
    magneticButtons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });

    // 3D card tilt effect
    const cards = document.querySelectorAll('.dossier-card, .arsenal-module, .operation-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // Skill bar animation
    const skillBars = document.querySelectorAll('.skill-fill');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0%';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => skillObserver.observe(bar));
}

/* ==========================================
   CONSOLE MESSAGE
   ========================================== */
console.log('%c SECURE OPERATIONS CENTER ', 'background: #00F5FF; color: #050816; font-size: 20px; font-weight: bold; padding: 10px;');
console.log('%c CLASSIFIED SYSTEM ACCESS GRANTED ', 'color: #00FF99; font-size: 14px;');
console.log('%c OPERATIVE: Somprakash Bhattacharya ', 'color: #94A3B8; font-size: 12px;');