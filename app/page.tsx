"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/navigation";

const featureCards = [
  {
    title: "Online Appointments",
    description:
      "Let guests book in seconds with automated confirmations and zero double-booking.",
  },
  {
    title: "Customer Management",
    description:
      "Build loyalty with profiles, visit history, preferences, and tailored offers.",
  },
  {
    title: "Reports & Analytics",
    description:
      "Track revenue, rebooking, and staff performance from one smart dashboard.",
  },
  {
    title: "Staff Scheduling",
    description:
      "Drag-and-drop schedules, time-off requests, and shift reminders included.",
  },
  {
    title: "Payments & POS",
    description:
      "Take deposits, split payments, and sync with inventory in real time.",
  },
];

const steps = [
  {
    step: "Step 1",
    title: "Salon signs up",
    description:
      "Launch your salon profile in minutes with custom services and brand colors.",
  },
  {
    step: "Step 2",
    title: "Configure services & staff",
    description:
      "Add pricing, timings, and assign experts to keep bookings accurate.",
  },
  {
    step: "Step 3",
    title: "Customers book online",
    description:
      "Share your link, accept bookings 24/7, and send instant reminders.",
  },
  {
    step: "Step 4",
    title: "Manage & grow",
    description:
      "Use insights to plan promotions, upsell services, and increase retention.",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !statsRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-badge",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.1 }
      );
      gsap.fromTo(
        ".hero-cta",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.2 }
      );
      gsap.fromTo(
        statsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.4 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="page">
      <header className="nav">
        <div className="logo">EasyCutz</div>
        <nav className="nav-links">
          <Link href="#about">About</Link>
          <Link href="#features">Features</Link>
          <Link href="#how">How it works</Link>
          <Link href="#contact">Contact</Link>
        </nav>
        <button className="btn btn-primary">Get Started</button>
      </header>

      <main>
        <section className="hero" ref={heroRef}>
          <div className="hero-content">
            <span className="hero-badge">All-in-One Platform</span>
            <h1 className="hero-title">
              Run a modern salon with effortless bookings, marketing, and insights.
            </h1>
            <p className="hero-subtitle">
              EasyCutz keeps appointments, staff, and customers perfectly in sync —
              from the first booking to the final payment.
            </p>
            <div className="hero-cta">
              <button className="btn btn-primary">Start free trial</button>
              <button className="btn btn-ghost">Request a demo</button>
            </div>
            <div className="hero-stats" ref={statsRef}>
              <div>
                <h3>48%</h3>
                <p>More rebookings</p>
              </div>
              <div>
                <h3>2x</h3>
                <p>Faster checkout</p>
              </div>
              <div>
                <h3>24/7</h3>
                <p>Online booking</p>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="glass-card">
              <div className="card-top">
                <div>
                  <p className="card-label">Today&apos;s revenue</p>
                  <h2>$1,245</h2>
                </div>
                <span className="pill">+18%</span>
              </div>
              <div className="chart">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="card-bottom">
                <div>
                  <p className="card-label">Next appointment</p>
                  <h4>11:30 AM · Olivia M.</h4>
                </div>
                <button className="btn btn-primary small">View</button>
              </div>
            </div>
          </div>
        </section>

        <section className="logo-strip" aria-label="Trusted by salons">
          <div className="logo-pill">Glow House</div>
          <div className="logo-pill">Velvet Studio</div>
          <div className="logo-pill">Aura Collective</div>
          <div className="logo-pill">Luxe Nails</div>
          <div className="logo-pill">Bloom Spa</div>
        </section>

        <section id="about" className="about">
          <div className="about-visual">
            <div className="image-card">
              <div className="image-grid">
                <div className="image-block" />
                <div className="image-block" />
                <div className="image-block" />
              </div>
            </div>
          </div>
          <div className="about-content">
            <p className="section-kicker">About Us</p>
            <h2>We simplify salon operations so you can focus on the craft.</h2>
            <p>
              From self-serve booking to automated reminders, EasyCutz helps salons
              reduce no-shows and keep every station filled. Build loyalty with
              personalized customer journeys and smarter service insights.
            </p>
            <div className="about-actions">
              <button className="btn btn-primary">Contact us</button>
              <button className="btn btn-ghost">See case studies</button>
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Core Features</p>
              <h2>Everything you need to run the salon efficiently.</h2>
            </div>
            <div className="nav-buttons">
              <button className="swiper-button-prev custom-nav">←</button>
              <button className="swiper-button-next custom-nav">→</button>
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="feature-swiper"
          >
            {featureCards.map((feature) => (
              <SwiperSlide key={feature.title}>
                <div className="feature-card">
                  <div className="feature-icon">✦</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <button className="text-link">Learn more</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section className="highlight">
          <div className="highlight-item">
            <h3>Online appointment booking</h3>
          </div>
          <div className="highlight-item">Walk-in queue management</div>
          <div className="highlight-item">Staff schedule tracking</div>
          <div className="highlight-item">WhatsApp/SMS notifications</div>
        </section>

        <section id="how" className="how">
          <div className="section-heading">
            <div>
              <p className="section-kicker">How it Works</p>
              <h2>Launch quickly and scale with confidence.</h2>
            </div>
            <button className="btn btn-ghost">Download brochure</button>
          </div>
          <div className="step-grid">
            {steps.map((item) => (
              <div key={item.step} className="step-card">
                <span className="pill soft">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="step-media" />
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="cta">
          <div className="cta-content">
            <h2>Run your salon professionally and earn more.</h2>
            <p>
              Accept online bookings, automate reminders, and see performance in
              one elegant dashboard.
            </p>
          </div>
          <div className="cta-actions">
            <button className="btn btn-primary">Start free today</button>
            <button className="btn btn-ghost">Talk to sales</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <div className="logo">EasyCutz</div>
          <p>Salon booking and management made simple.</p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <a>About</a>
            <a>Careers</a>
            <a>Press</a>
          </div>
          <div>
            <h4>Product</h4>
            <a>Pricing</a>
            <a>Security</a>
            <a>Updates</a>
          </div>
          <div>
            <h4>Legal</h4>
            <a>Terms</a>
            <a>Privacy</a>
            <a>Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
