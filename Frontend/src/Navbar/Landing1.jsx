import { motion } from "framer-motion";
import { useState } from "react";
import { FaLeaf, FaTrashAlt, FaUserCheck, FaMapMarkerAlt, FaCheckCircle, FaUsers, FaGlobe,FaQuoteLeft } from "react-icons/fa";

export default function EcocleanLanding() {
    const [loginOpen, setLoginOpen] = useState(false);
    const [signupOpen, setSignupOpen] = useState(false);

    return (
        <div className="bg-gradient-to-b from-green-50 to-white min-h-screen flex flex-col font-sans">
            {/* Navbar */}
            <header className="w-full py-6 px-10 flex justify-between items-center bg-white/70 backdrop-blur-sm shadow-sm sticky top-0 z-50">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-bold text-green-700 tracking-wide"
                >
                    EcoClean
                </motion.h1>
                <div className="space-x-4">
                    <button onClick={() => setLoginOpen(true)} className="px-4 py-2 border border-green-600 text-green-700 rounded-lg hover:bg-green-100 transition">Login</button>
                    <button onClick={() => setSignupOpen(true)} className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition">Sign Up</button>
                </div>
            </header>

            {/* Hero */}
            <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 gap-10">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="md:w-1/2 space-y-6"
                >
                    <h2 className="text-5xl font-extrabold text-green-800 leading-tight">
                        Manage Waste Smartly,<br /> Keep Cities Clean 🌱
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        EcoClean connects users, admins, and drivers to streamline waste management. Report garbage, assign areas, and track disposal seamlessly.
                    </p>
                    <div className="space-x-4">
                        <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition">Get Started</button>
                        <button className="px-6 py-3 border border-green-600 text-green-700 font-medium rounded-lg hover:bg-green-100 transition">Learn More</button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="md:w-1/2 flex justify-center"
                >
                    <img src="/garbage-illustration.svg" alt="EcoClean Illustration" className="max-w-md w-full drop-shadow-xl" />
                </motion.div>
            </section>

            {/* Features */}
            <section className="px-10 py-20 bg-green-50">
                <h3 className="text-3xl font-bold text-center text-green-800 mb-12">Why Choose EcoClean?</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: <FaTrashAlt className="w-12 h-12 text-green-600" />, title: "Easy Reporting", desc: "Users can report garbage with a simple form." },
                        { icon: <FaUserCheck className="w-12 h-12 text-green-600" />, title: "Admin Control", desc: "Admins approve reports and assign drivers." },
                        { icon: <FaMapMarkerAlt className="w-12 h-12 text-green-600" />, title: "Smart Assignment", desc: "Drivers get assigned to areas efficiently." }
                    ].map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                        >
                            <div className="rounded-2xl shadow-md hover:shadow-xl transition bg-white p-6 flex flex-col items-center text-center space-y-4">
                                {f.icon}
                                <h4 className="text-xl font-semibold text-green-800">{f.title}</h4>
                                <p className="text-gray-600">{f.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* How It Works */}
            <section className="px-10 py-20">
                <h3 className="text-3xl font-bold text-center text-green-800 mb-12">How It Works</h3>
                <div className="grid md:grid-cols-4 gap-8 text-center">
                    {[
                        { step: "1", title: "Report", desc: "Users report garbage through a simple online form." },
                        { step: "2", title: "Approve", desc: "Admins review and approve the report." },
                        { step: "3", title: "Assign", desc: "Driver gets assigned to collect the garbage." },
                        { step: "4", title: "Dispose", desc: "Driver marks the garbage as disposed." }
                    ].map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-green-50 rounded-2xl shadow-md hover:shadow-xl transition p-6"
                        >
                            <div className="text-3xl font-bold text-green-700 mb-4">{s.step}</div>
                            <h4 className="text-xl font-semibold text-green-800 mb-2">{s.title}</h4>
                            <p className="text-gray-600">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Stats */}
            <section className="px-10 py-20 bg-green-100 text-center">
                <h3 className="text-3xl font-bold text-green-800 mb-12">Our Impact</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: <FaCheckCircle className="w-10 h-10 text-green-700 mx-auto mb-4" />, value: "5,000+", label: "Reports Resolved" },
                        { icon: <FaUsers className="w-10 h-10 text-green-700 mx-auto mb-4" />, value: "100+", label: "Registered Drivers" },
                        { icon: <FaGlobe className="w-10 h-10 text-green-700 mx-auto mb-4" />, value: "50+", label: "Areas Covered" }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition"
                        >
                            {stat.icon}
                            <h4 className="text-3xl font-bold text-green-800">{stat.value}</h4>
                            <p className="text-gray-600">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="px-10 py-20 bg-green-50">
                <h3 className="text-3xl font-bold text-center text-green-800 mb-12">What People Say</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { quote: "EcoClean made it so simple to report garbage in my area. The process is quick and reliable!", name: "Aditi, User" },
                        { quote: "Managing drivers and areas has never been easier. The platform keeps everything organized.", name: "Raj, Admin" },
                        { quote: "I can log in, see my assigned tasks, and update the status instantly. It’s seamless!", name: "Kiran, Driver" }
                    ].map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col space-y-4"
                        >
                            <FaQuoteLeft className="text-green-500 text-2xl" />
                            <p className="text-gray-700 italic">“{t.quote}”</p>
                            <span className="font-semibold text-green-800">— {t.name}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="px-10 py-20 bg-green-50">
                <h3 className="text-3xl font-bold text-center text-green-800 mb-12">Frequently Asked Questions</h3>
                <div className="max-w-3xl mx-auto space-y-6">
                    {[
                        { q: "Is EcoClean free to use?", a: "Yes, EcoClean is free for users to report garbage. Admin and driver accounts are also free to create." },
                        { q: "How do drivers sign up?", a: "After logging in, drivers can register themselves by submitting their details through a form." },
                        { q: "How is garbage tracked?", a: "Each report is assigned to a driver by the admin, and drivers update the status to 'Disposed' once collected." },
                        { q: "Can admins create new areas?", a: "Yes, admins can create areas and assign drivers to specific zones for efficient waste management." }
                    ].map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6"
                        >
                            <h4 className="text-lg font-semibold text-green-700 mb-2">{faq.q}</h4>
                            <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="px-10 py-20 flex flex-col items-center text-center bg-gradient-to-r from-green-100 to-green-50">
                <h3 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
                    Join the Movement to Build a Cleaner Tomorrow 🌍
                </h3>
                <p className="text-gray-700 max-w-2xl mb-8">
                    Sign up today and take part in revolutionizing waste management. Whether you are an admin, a driver, or a concerned citizen — EcoClean makes the process seamless.
                </p>
                <button onClick={() => setSignupOpen(true)} className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg text-lg font-medium transition">Sign Up Now</button>
            </section>

            {/* Footer */}
            <footer className="bg-green-700 text-white py-10 px-10 mt-10">
                <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <h4 className="font-bold text-lg mb-4">EcoClean</h4>
                        <p className="text-sm">Smart waste management system for cleaner cities.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">About</a></li>
                            <li><a href="#" className="hover:underline">Contact</a></li>
                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                            <li><a href="#" className="hover:underline">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4">Contact</h4>
                        <p className="text-sm">Email: support@ecoclean.com</p>
                        <p className="text-sm">Phone: +91 98765 43210</p>
                    </div>
                </div>
                <div className="text-center mt-8 text-sm">&copy; {new Date().getFullYear()} EcoClean. All rights reserved.</div>
            </footer>

            {/* Login Modal */}
            {loginOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-lg relative">
                        <button onClick={() => setLoginOpen(false)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">✖</button>
                        <h3 className="text-2xl font-bold text-green-700 mb-6">Login to EcoClean</h3>
                        <form className="space-y-4">
                            <input type="email" placeholder="Email" className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none" />
                            <input type="password" placeholder="Password" className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none" />
                            <button className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg">Login</button>
                        </form>
                    </div>
                </div>
            )}

            {/* Signup Modal */}
            {signupOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-lg relative">
                        <button onClick={() => setSignupOpen(false)} className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">✖</button>
                        <h3 className="text-2xl font-bold text-green-700 mb-6">Create Your Account</h3>
                        <form className="space-y-4">
                            <input type="text" placeholder="Full Name" className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none" />
                            <input type="email" placeholder="Email" className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none" />
                            <input type="password" placeholder="Password" className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-500 outline-none" />
                            <button className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg">Sign Up</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}