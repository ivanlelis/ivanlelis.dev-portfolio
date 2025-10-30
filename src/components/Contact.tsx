import '../styles/Contact.css';
const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container-w">
                <div className="mb-10 flex items-end justify-between">
                    <div>
                        <h2 className="section-title">Let’s Have a Call!</h2>
                        <div className="divider" />
                    </div>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="glass gradient-ring p-8">
                        <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
                        <p className="text-white/70">Open to new opportunities, interesting projects, and friendly chats about technology.</p>

                        <div className="mt-6 space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="pill">Email</span>
                                <span className="text-white/80">your.email@example.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="pill">Location</span>
                                <span className="text-white/80">Your City, Country</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="pill">Phone</span>
                                <span className="text-white/80">+1 (555) 123-4567</span>
                            </div>
                        </div>

                        <div className="mt-6 flex gap-3">
                            <a className="pill" href="#">GitHub</a>
                            <a className="pill" href="#">LinkedIn</a>
                            <a className="pill" href="#">Twitter</a>
                        </div>
                    </div>

                    <div className="glass gradient-ring p-8">
                        <h3 className="text-xl font-bold text-white mb-6">Send me a message</h3>
                        <form className="space-y-4">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/40" placeholder="First name" />
                                <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/40" placeholder="Last name" />
                            </div>
                            <input type="email" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/40" placeholder="Email" />
                            <input className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/40" placeholder="Subject" />
                            <textarea rows={5} className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/40" placeholder="Tell me about your project..." />
                            <button type="submit" className="btn-primary w-full">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact