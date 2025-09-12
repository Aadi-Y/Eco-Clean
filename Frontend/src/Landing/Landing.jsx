import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  FaLeaf,
  FaTrashAlt,
  FaUserCheck,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaUsers,
  FaGlobe,
  FaQuoteLeft,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaTruck,
  FaTools,
  FaPaperPlane,
  FaCamera,
  FaUserTie,
  FaDatabase
} from "react-icons/fa";
import LandingImage from "../assets/Images/LandingImage1.png";

// EcocleanLanding — How It Works redesigned with multiple aspects
// - Adds an interactive "How It Works" component with 4 different aspects:
//   1) Process (step flow), 2) Roles (who does what), 3) Data & Tracking (what's captured), 4) Benefits (outcomes)
// - Tabs are accessible, keyboard-friendly, animated with Framer Motion
// - Keeps rest of the landing page content and accessibility improvements

export default function Landing() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMobileOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen flex flex-col font-sans text-gray-800">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white px-3 py-2 rounded shadow">Skip to content</a>

      {/* NAVBAR */}
      {/* <header className="w-full py-4 px-6 md:px-10 flex items-center justify-between bg-white/70 backdrop-blur-sm shadow sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-md bg-white shadow-sm inline-flex items-center justify-center">
            <FaLeaf className="text-green-600 w-6 h-6" />
          </div>
          <div>
            <div className="text-lg font-bold text-green-800">EcoClean</div>
            <div className="text-xs text-gray-500">Smart waste reporting</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#howitworks" className="hover:underline">How it works</a>
          <a href="#drivers" className="hover:underline">Drivers</a>
          <a href="#faq" className="hover:underline">FAQ</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="/login" className="px-4 py-2 border border-green-600 text-green-700 rounded-lg hover:bg-green-100 transition">Login</a>
          <a href="/signup" className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition">Sign Up</a>
        </div>

        
        <button className="md:hidden p-2 rounded-md text-green-700" aria-label={mobileOpen ? "Close menu" : "Open menu"} onClick={() => setMobileOpen((s) => !s)}>
          {mobileOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </header> */}

      {/* Mobile menu overlay */}
      {/* {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/40" onClick={() => setMobileOpen(false)}>
          <div className="absolute right-0 top-0 w-3/4 max-w-xs h-full bg-white p-6 shadow-lg" onClick={(e) => e.stopPropagation()}>
            <nav className="flex flex-col gap-4 mt-6">
              <a href="#features" className="py-2" onClick={() => setMobileOpen(false)}>Features</a>
              <a href="#howitworks" className="py-2" onClick={() => setMobileOpen(false)}>How it works</a>
              <a href="#drivers" className="py-2" onClick={() => setMobileOpen(false)}>Drivers</a>
              <a href="#faq" className="py-2" onClick={() => setMobileOpen(false)}>FAQ</a>
              <div className="mt-4 flex flex-col gap-2">
                <a href="/login" className="w-full py-2 border rounded-md text-center">Login</a>
                <a href="/signup" className="w-full py-2 bg-green-600 text-white rounded-md text-center">Sign Up</a>
              </div>
            </nav>
          </div>
        </div>
      )} */}

      <main id="main">
        {/* HERO */}
        <Hero />

        {/* FEATURES */}
        <section id="features" className="px-6 md:px-10 py-14 bg-green-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-10">Why Choose EcoClean?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <FaTrashAlt className="w-12 h-12 text-green-600" />, title: "Easy Reporting", desc: "Report with a short form, add photo and location for faster action." },
                { icon: <FaUserCheck className="w-12 h-12 text-green-600" />, title: "Admin Control", desc: "Approve reports, create areas and assign drivers from a clear dashboard." },
                { icon: <FaMapMarkerAlt className="w-12 h-12 text-green-600" />, title: "Smart Assignment", desc: "Map drivers to zones and reduce travel & duplication of work." }
              ].map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}>
                  <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center text-center gap-4">
                    {f.icon}
                    <h4 className="font-semibold text-green-800">{f.title}</h4>
                    <p className="text-gray-600">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS - MULTI-ASPECT */}
        <section id="howitworks" className="px-6 md:px-10 py-14">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-6">How It Works — Explore Different Aspects</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">Choose an aspect to understand EcoClean from process, roles, data & tracking, or the benefits it brings to your city.</p>

            <HowItWorksMulti />
          </div>
        </section>

        {/* DRIVER & ADMIN CTAs */}
        <section id="drivers" className="px-6 md:px-10 py-14 bg-gradient-to-r from-white to-green-50">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-6 rounded-2xl shadow flex gap-4 items-center">
              <FaTruck className="w-12 h-12 text-green-600" />
              <div>
                <h4 className="font-semibold text-green-800">Join as a Driver</h4>
                <p className="text-gray-600">Create your driver profile after signup and start receiving assignments for your area.</p>
              </div>
              <div className="ml-auto">
                <button className="bg-green-600 text-white px-4 py-2 rounded-md w-25 cursor-pointer"><a href="/signup" className="">Sign Up</a></button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow flex gap-4 items-center">
              <FaUserCheck className="w-12 h-12 text-green-600" />
              <div>
                <h4 className="font-semibold text-green-800">Register as Admin</h4>
                <p className="text-gray-600">Admins can create areas, manage drivers and monitor reports for the city.</p>
              </div>
              <div className="ml-auto">
                <button className="px-4 py-2 border border-green-600 text-green-700 rounded-md cursor-pointer w-25"><a href="/signup" className="">Register</a></button>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="px-6 md:px-10 py-14">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-8">Our Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <StatCounter icon={<FaCheckCircle className="w-10 h-10 text-green-700 mx-auto mb-4" />} target={5000} suffix="+" label="Reports Resolved" />
              <StatCounter icon={<FaUsers className="w-10 h-10 text-green-700 mx-auto mb-4" />} target={100} suffix="+" label="Drivers Registered" />
              <StatCounter icon={<FaGlobe className="w-10 h-10 text-green-700 mx-auto mb-4" />} target={50} suffix="+" label="Areas Covered" />
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="px-6 md:px-10 py-14 bg-green-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-green-800 text-center mb-8">What People Say</h2>
            <TestimonialsCarousel />
          </div>
        </section>

        {/* RESOURCES & CONTACT */}
        <section id="contact" className="px-6 md:px-10 py-14">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-lg font-semibold text-green-800">Get in touch</h3>
              <p className="text-gray-700 mt-2">Questions about deployment, onboarding or integration? Email our team or download the integration guide.</p>
              <div className="mt-4 flex flex-col gap-3">
                <a href="mailto:support@ecoclean.com" className="px-4 py-2 bg-green-600 text-white rounded-md w-max">Email Support</a>
                <a href="/assets/ecoclean-integration-guide.pdf" className="px-4 py-2 border rounded-md w-max">Download Integration Guide</a>
                <a href="/demo" className="px-4 py-2 bg-white border rounded-md w-max">Watch demo</a>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl shadow">
              <h4 className="font-semibold text-green-800">Deployment checklist</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li>• Configure FastAPI auth endpoints (JWT + refresh tokens)</li>
                <li>• Setup MongoDB collections for users, reports, areas, logs</li>
                <li>• Add environment variables for secrets and S3 (if using object storage)</li>
                <li>• Replace demo assets with production images & icons</li>
              </ul>
              <div className="mt-4 text-sm text-gray-600">Prefer a hand? Contact our sales for deployment assistance.</div>
            </div>
          </div>
        </section>

        {/* FAQ accordion */}
        <section id="faq" className="px-6 md:px-10 py-14">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <AccordionItem title="Is EcoClean free to use?">Yes — EcoClean is free for residents to report garbage. Admin & driver features are also free to start with.</AccordionItem>
              <AccordionItem title="How do drivers sign up?">Drivers sign up after authentication and complete a short driver profile with vehicle and ID details.</AccordionItem>
              <AccordionItem title="How is garbage tracked?">When a report is created it is assigned to a driver for the area. Drivers update status from 'Assigned' → 'Collected' → 'Disposed'.</AccordionItem>
              <AccordionItem title="Can admins create new areas?">Yes — admins create areas, map drivers, and monitor area-level metrics for efficiency.</AccordionItem>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-6 md:px-10 py-14 bg-gradient-to-r from-green-100 to-green-50 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Join the movement — make your city cleaner</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">Sign up today as a resident, driver or admin and start improving waste collection in your area.</p>
          <div className="flex items-center justify-center gap-4">
            <a href="/signup" className="px-6 py-3 bg-green-600 text-white rounded-md">Create Account</a>
            <a href="mailto:sales@ecoclean.com" className="px-6 py-3 border rounded-md">Contact Sales</a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-green-800 text-white py-10 mt-6">
          <div className="max-w-7xl mx-auto px-6 md:px-0 grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-lg">EcoClean</h3>
              <p className="text-sm text-green-100 mt-2">Smart waste management system for cleaner cities.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Quick Links</h3>
              <ul className="mt-2 space-y-2 text-sm">
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Terms</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Follow us</h3>
              <div className="flex gap-3 mt-3">
                <a href="#" aria-label="Twitter" className="p-2 rounded-md bg-green-700 hover:bg-green-600"><FaTwitter /></a>
                <a href="#" aria-label="Facebook" className="p-2 rounded-md bg-green-700 hover:bg-green-600"><FaFacebookF /></a>
                <a href="#" aria-label="Instagram" className="p-2 rounded-md bg-green-700 hover:bg-green-600"><FaInstagram /></a>
                <a href="#" aria-label="LinkedIn" className="p-2 rounded-md bg-green-700 hover:bg-green-600"><FaLinkedin /></a>
              </div>
              <div className="mt-4 text-sm text-green-200">Email: support@ecoclean.com • Phone: +91 98765 43210</div>
            </div>
          </div>
          <div className="text-center text-sm text-green-200 mt-8">&copy; {new Date().getFullYear()} EcoClean. All rights reserved.</div>
        </footer>
      </main>
    </div>
  );
}

/* ----------------- HowItWorksMulti & helpers ----------------- */
function HowItWorksMulti() {
  const aspects = [
    { key: 'process', label: 'Process', icon: <FaTools /> },
    { key: 'roles', label: 'Roles', icon: <FaUserTie /> },
    { key: 'data', label: 'Data & Tracking', icon: <FaDatabase /> },
    { key: 'benefits', label: 'Benefits', icon: <FaCheckCircle /> }
  ];

  const [active, setActive] = useState('process');

  return (
    <div>
      <div className="flex gap-2 justify-center mb-6 flex-wrap">
        {aspects.map((a) => (
          <button
            key={a.key}
            onClick={() => setActive(a.key)}
            className={`px-4 py-2 rounded-full border ${active === a.key ? 'bg-green-700 text-white' : 'bg-white text-green-700 border-green-200'} transition`}
            aria-pressed={active === a.key}
          >
            <span className="inline-flex items-center gap-2">{a.icon}<span className="text-sm font-medium">{a.label}</span></span>
          </button>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}>
        {active === 'process' && <ProcessView />}
        {active === 'roles' && <RolesView />}
        {active === 'data' && <DataView />}
        {active === 'benefits' && <BenefitsView />}
      </motion.div>
    </div>
  );
}

function ProcessView() {
  const steps = [
    { title: 'Report', body: 'Resident submits a report with photo & location.' },
    { title: 'Approve', body: 'Admin reviews report and approves for collection.' },
    { title: 'Assign', body: 'Admin assigns a driver based on area availability.' },
    { title: 'Collect & Dispose', body: 'Driver collects and marks the report as disposed.' }
  ];

  return (
    <div className="grid md:grid-cols-4 gap-4">
      {steps.map((s, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl shadow text-center">
          <div className="w-12 h-12 rounded-full bg-green-100 mx-auto flex items-center justify-center font-bold text-green-700 mb-3">{i + 1}</div>
          <h4 className="font-semibold text-green-800">{s.title}</h4>
          <p className="text-gray-600 mt-2">{s.body}</p>
        </div>
      ))}
    </div>
  );
}

function RolesView() {
  const roles = [
    { name: 'Resident', desc: 'Reports garbage with photos and location – the eyes on the ground.' },
    { name: 'Admin', desc: 'Verifies reports, creates areas, assigns drivers, and monitors metrics.' },
    { name: 'Driver', desc: 'Accepts assigned pickups, collects garbage, and updates status.' },
    { name: 'City Manager', desc: 'Uses analytics to plan routes, resource allocation and policy.' }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {roles.map((r, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl shadow flex gap-4 items-start">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-semibold">{r.name[0]}</div>
          <div>
            <h4 className="font-semibold text-green-800">{r.name}</h4>
            <p className="text-gray-600 mt-1">{r.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function DataView() {
  const items = [
    { title: 'Photo & Evidence', desc: 'Photo attachments with timestamped evidence.' },
    { title: 'Geolocation', desc: 'Precise lat/lng attached to each report for fast routing.' },
    { title: 'Driver Logs', desc: 'Collection timestamps and disposal confirmations.' },
    { title: 'Area Metrics', desc: 'Counts per zone to help resource planning.' }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {items.map((it, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl shadow">
          <h4 className="font-semibold text-green-800">{it.title}</h4>
          <p className="text-gray-600 mt-1">{it.desc}</p>
        </div>
      ))}
    </div>
  );
}

function BenefitsView() {
  const benefits = [
    { title: 'Faster pickups', desc: 'Reduced time-to-collection by efficient area assignments.' },
    { title: 'Transparent operations', desc: 'Clear status for residents, admins and drivers.' },
    { title: 'Data-driven planning', desc: 'Use metrics to optimize routes and staffing.' },
    { title: 'Cleaner neighbourhoods', desc: 'Measurable improvement in local cleanliness over time.' }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {benefits.map((b, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl shadow flex gap-4 items-start">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-semibold">✓</div>
          <div>
            <h4 className="font-semibold text-green-800">{b.title}</h4>
            <p className="text-gray-600 mt-1">{b.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ----------------- Reused helpers (Stats, Testimonials, Accordion) ----------------- */
function StatCounter({ icon, target = 0, suffix = "", label = "" }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1200; // ms
          const start = performance.now();
          const from = 0;
          const to = Number(target);
          const step = (now) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // easeInOut
            setValue(Math.floor(from + (to - from) * eased));
            if (t < 1) requestAnimationFrame(step);
            else setValue(to);
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="bg-white p-6 rounded-2xl shadow">
      <div>{icon}</div>
      <div className="text-3xl font-bold text-green-800 mt-2">{value}{suffix}</div>
      <div className="text-gray-600 mt-1">{label}</div>
    </div>
  );
}

function TestimonialsCarousel() {
  const items = [
    { quote: "EcoClean made it so simple to report garbage in my area. The process is quick and reliable!", name: "Aditi", role: "Resident" },
    { quote: "Managing drivers and areas has never been easier. The platform keeps everything organized.", name: "Raj", role: "Admin" },
    { quote: "I can log in, see my assigned tasks, and update the status instantly. It’s seamless!", name: "Kiran", role: "Driver" }
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (paused) return;
    timeoutRef.current = setTimeout(() => setIndex((i) => (i + 1) % items.length), 4500);
    return () => clearTimeout(timeoutRef.current);
  }, [index, paused]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className="relative">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: index === i ? 1 : 0.4, y: index === i ? 0 : 8 }} transition={{ duration: 0.3 }} className={`bg-white p-6 rounded-2xl shadow ${index === i ? 'scale-100' : 'scale-95'} transition`}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-semibold">{t.name[0]}</div>
              <div>
                <p className="italic text-gray-700">“{t.quote}”</p>
                <div className="mt-3 font-semibold text-green-800">{t.name} <span className="text-sm text-gray-500">— {t.role}</span></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-6">
        {items.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} aria-label={`Show testimonial ${i + 1}`} className={`w-3 h-3 rounded-full ${i === index ? 'bg-green-700' : 'bg-green-200'}`} />
        ))}
      </div>
    </div>
  );
}

function AnimatedBlobs() {
  return (
    <svg className="absolute -left-20 -top-20 w-[60rem] h-[60rem] opacity-20 pointer-events-none" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stopColor="#d1fae5" />
          <stop offset="100%" stopColor="#bbf7d0" />
        </linearGradient>
      </defs>
      <motion.path d="M200 100C260 40 340 40 420 100C520 160 580 220 620 320C660 420 620 540 520 620C420 700 300 720 200 660C100 600 80 420 140 300C180 220 140 160 200 100Z" fill="url(#g1)" initial={{ scale: 0.98 }} animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 60, ease: "linear" }} />
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 md:px-10 py-12 md:py-20 max-w-7xl mx-auto md:pt-50">
      <AnimatedBlobs />
      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 leading-tight">Manage Waste Smartly — Keep Cities Clean 🌱</h1>
          <p className="mt-4 text-gray-700 text-lg max-w-xl">EcoClean connects residents, admins, and drivers with a fast reporting flow, area-based assignments and real-time disposal updates — built for municipal scale.</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/signup" className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow">Get Started</a>
            <a href="#howitworks" className="px-6 py-3 border border-green-200 rounded-lg hover:bg-green-50">Learn how it works</a>
            <a href="#contact" className="px-6 py-3 border border-transparent rounded-lg hover:bg-green-50">Contact Sales</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex justify-center">
          <img loading="lazy" src={LandingImage} alt="EcoClean Illustration" className="w-full max-w-xl rounded-2xl shadow-xl" />
        </motion.div>
      </div>
    </section>
  );
}

function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (document.activeElement === btnRef.current && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        setOpen((s) => !s);
      }
    };
    btnRef.current?.addEventListener('keydown', onKey);
    return () => btnRef.current?.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <button ref={btnRef} className="w-full flex items-center justify-between" onClick={() => setOpen((s) => !s)}>
        <span className="text-left font-semibold text-green-800">{title}</span>
        <span className="text-green-600" aria-hidden>{open ? '−' : '+'}</span>
      </button>
      {open && <div className="mt-3 text-gray-700">{children}</div>}
    </div>
  );
}
