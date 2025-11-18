// Lazy Loading for Images
class LazyLoader {
    constructor() {
        this.images = document.querySelectorAll('.lazy-image');
        this.videos = document.querySelectorAll('.lazy-video');
        this.init();
    }

    init() {
        // Use Intersection Observer for lazy loading
        if ('IntersectionObserver' in window) {
            this.imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.loadImage(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                rootMargin: '50px'
            });

            this.videoObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.loadVideo(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                rootMargin: '100px'
            });

            this.images.forEach(img => this.imageObserver.observe(img));
            this.videos.forEach(video => this.videoObserver.observe(video));
        } else {
            // Fallback for browsers that don't support IntersectionObserver
            this.images.forEach(img => this.loadImage(img));
            this.videos.forEach(video => this.loadVideo(video));
        }
    }

    loadImage(img) {
        const src = img.getAttribute('data-src');
        if (!src) return;

        img.classList.add('lazy-loading');
        
        // Create a new image to preload
        const tempImg = new Image();
        tempImg.onload = () => {
            img.src = src;
            img.classList.remove('lazy-loading');
            img.classList.add('lazy-loaded');
            img.removeAttribute('data-src');
        };
        tempImg.onerror = () => {
            img.classList.remove('lazy-loading');
            console.error(`Failed to load image: ${src}`);
        };
        tempImg.src = src;
    }

    loadVideo(iframe) {
        const src = iframe.getAttribute('data-src');
        if (!src) return;

        iframe.src = src;
        iframe.removeAttribute('data-src');
    }
}

// Lightbox Functionality
class Lightbox {
    constructor() {
        this.lightbox = document.getElementById('lightbox');
        this.lightboxImage = document.getElementById('lightbox-image');
        this.lightboxCaption = document.querySelector('.lightbox-caption');
        this.lightboxCounter = document.querySelector('.lightbox-counter');
        this.closeBtn = document.querySelector('.lightbox-close');
        this.prevBtn = document.querySelector('.lightbox-prev');
        this.nextBtn = document.querySelector('.lightbox-next');
        this.images = [];
        this.currentIndex = 0;
        
        this.init();
    }

    init() {
        // Get all photo items
        const photoItems = document.querySelectorAll('.photo-item');
        this.images = Array.from(photoItems).map((item, index) => {
            const img = item.querySelector('img');
            const button = item.querySelector('.view-full');
            
            if (button) {
                button.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.open(index);
                });
            }
            
            item.addEventListener('click', () => {
                this.open(index);
            });

            return {
                src: img.getAttribute('data-src') || img.src,
                alt: img.alt
            };
        });

        // Event listeners
        this.closeBtn.addEventListener('click', () => this.close());
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        
        // Close on background click
        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) {
                this.close();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.lightbox.style.display === 'flex') {
                if (e.key === 'Escape') this.close();
                if (e.key === 'ArrowLeft') this.prev();
                if (e.key === 'ArrowRight') this.next();
            }
        });
    }

    open(index) {
        this.currentIndex = index;
        this.updateImage();
        this.lightbox.style.display = 'flex';
        setTimeout(() => {
            this.lightbox.classList.add('active');
        }, 10);
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.lightbox.classList.remove('active');
        setTimeout(() => {
            this.lightbox.style.display = 'none';
        }, 300);
        document.body.style.overflow = '';
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateImage();
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.updateImage();
    }

    updateImage() {
        const image = this.images[this.currentIndex];
        this.lightboxImage.src = image.src;
        this.lightboxImage.alt = image.alt;
        this.lightboxCaption.textContent = image.alt;
        this.lightboxCounter.textContent = `${this.currentIndex + 1} / ${this.images.length}`;
    }
}

// Scroll Animation (AOS alternative)
class ScrollAnimation {
    constructor() {
        this.elements = document.querySelectorAll('[data-aos]');
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const delay = entry.target.getAttribute('data-aos-delay') || 0;
                        setTimeout(() => {
                            entry.target.classList.add('aos-animate');
                        }, delay);
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            this.elements.forEach(el => observer.observe(el));
        } else {
            // Fallback: just show all elements
            this.elements.forEach(el => el.classList.add('aos-animate'));
        }
    }
}

// Smooth Scrolling for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#contact') return; // Skip empty or contact links
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Video Loading Optimization
function optimizeVideoLoading() {
    const videoContainers = document.querySelectorAll('.video-container');
    
    videoContainers.forEach(container => {
        container.addEventListener('mouseenter', function() {
            const iframe = this.querySelector('iframe[data-src]');
            if (iframe && iframe.hasAttribute('data-src')) {
                iframe.src = iframe.getAttribute('data-src');
                iframe.removeAttribute('data-src');
            }
        }, { once: true });
    });
}

// Performance monitoring
function reportWebVitals() {
    if ('PerformanceObserver' in window) {
        try {
            // Monitor Largest Contentful Paint (LCP)
            const lcpObserver = new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                const lastEntry = entries[entries.length - 1];
                console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
            });
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

            // Monitor First Input Delay (FID)
            const fidObserver = new PerformanceObserver((entryList) => {
                const entries = entryList.getEntries();
                entries.forEach(entry => {
                    console.log('FID:', entry.processingStart - entry.startTime);
                });
            });
            fidObserver.observe({ entryTypes: ['first-input'] });

            // Monitor Cumulative Layout Shift (CLS)
            let clsScore = 0;
            const clsObserver = new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                    if (!entry.hadRecentInput) {
                        clsScore += entry.value;
                    }
                }
                console.log('CLS:', clsScore);
            });
            clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
            console.log('Performance monitoring not fully supported');
        }
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize lazy loading
    new LazyLoader();
    
    // Initialize lightbox
    new Lightbox();
    
    // Initialize scroll animations
    new ScrollAnimation();
    
    // Initialize smooth scrolling
    initSmoothScroll();
    
    // Optimize video loading
    optimizeVideoLoading();
    
    // Report web vitals (for development)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        reportWebVitals();
    }
});

// Handle page visibility for performance
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause any animations or reduce activity when page is hidden
        console.log('Page hidden - reducing activity');
    } else {
        console.log('Page visible - resuming normal activity');
    }
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LazyLoader, Lightbox, ScrollAnimation };
}
