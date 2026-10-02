import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronDown, Mail, MapPin, Phone } from 'lucide-react';
import Navbar from '../../components/navigation/Navbar';
import Footer from '../../components/footer/Footer';
import { siteSettings, faqs } from '../../data/mockData';
import { submitInquiry } from '../../services/api';

export default function InquiryPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Portrait',
    date: '',
    location: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const projectTypes = [
    'Portrait',
    'Wedding',
    'Travel',
    'Editorial',
    'Lifestyle',
    'Landscape',
    'Commercial',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitInquiry(formData);
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-cream dark:bg-[#0D0D0C] text-charcoal dark:text-cream-light flex flex-col font-sans transition-colors duration-400">
      <Navbar forceScrolled={true} />

      <main className="flex-1 pt-32 pb-24 sm:pb-32">
        <div className="max-w-site mx-auto px-6 sm:px-10 lg:px-16">
          
          {/* Header Title */}
          <div className="max-w-3xl space-y-6 mb-16 sm:mb-24">
            <span className="font-mono text-xs uppercase tracking-widest text-muted block">
              06 / Inquire
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-none text-charcoal dark:text-cream-light">
              LET'S CREATE<br />SOMETHING TOGETHER.
            </h1>
            <div className="w-16 h-[1px] bg-charcoal/40 dark:bg-white/20 pt-1" />
            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-xl">
              Every photograph begins with an honest conversation. Share your ideas, dates, or stories below and I'll respond within 24–48 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
            
            {/* Left Column: Editorial Inquiry Form */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                <div className="glass-card p-10 sm:p-14 text-center rounded-sm space-y-6 animate-fadeIn">
                  <div className="w-14 h-14 rounded-full bg-charcoal text-cream dark:bg-cream dark:text-charcoal mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-charcoal dark:text-cream-light">
                    THANK YOU. I'VE GOT YOUR MESSAGE.
                  </h3>
                  <p className="text-muted text-base max-w-md mx-auto leading-relaxed">
                    Thank you for sharing your story, {formData.name || 'friend'}. I look forward to connecting with you shortly.
                  </p>
                  <div className="pt-4">
                    <Link
                      to="/work"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-charcoal text-cream dark:bg-cream dark:text-charcoal text-xs font-mono uppercase tracking-widest hover:opacity-90 transition-all font-medium"
                    >
                      <span>VIEW WORK</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-muted">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Maya Patel"
                      className="w-full bg-transparent border-b border-charcoal/20 dark:border-white/20 py-3 text-base text-charcoal dark:text-cream placeholder:text-muted/40 focus:border-charcoal dark:focus:border-cream focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-muted">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. maya@example.com"
                        className="w-full bg-transparent border-b border-charcoal/20 dark:border-white/20 py-3 text-base text-charcoal dark:text-cream placeholder:text-muted/40 focus:border-charcoal dark:focus:border-cream focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-widest text-muted">
                        Phone (Optional)
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full bg-transparent border-b border-charcoal/20 dark:border-white/20 py-3 text-base text-charcoal dark:text-cream placeholder:text-muted/40 focus:border-charcoal dark:focus:border-cream focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type Selection */}
                  <div className="space-y-3">
                    <span className="block text-xs font-mono uppercase tracking-widest text-muted">
                      Project Type *
                    </span>
                    <div className="flex flex-wrap gap-2.5 pt-1">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, projectType: type }))}
                          className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                            formData.projectType === type
                              ? 'bg-charcoal text-cream dark:bg-cream dark:text-charcoal font-medium shadow-md'
                              : 'glass-pill text-charcoal/80 dark:text-cream-light/75 hover:text-charcoal dark:hover:text-cream'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Date & Location Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="date" className="block text-xs font-mono uppercase tracking-widest text-muted">
                        Preferred Date / Timeline
                      </label>
                      <input
                        id="date"
                        name="date"
                        type="text"
                        value={formData.date}
                        onChange={handleChange}
                        placeholder="e.g. October 2026"
                        className="w-full bg-transparent border-b border-charcoal/20 dark:border-white/20 py-3 text-base text-charcoal dark:text-cream placeholder:text-muted/40 focus:border-charcoal dark:focus:border-cream focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="location" className="block text-xs font-mono uppercase tracking-widest text-muted">
                        Location / Venue
                      </label>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Udaipur, India"
                        className="w-full bg-transparent border-b border-charcoal/20 dark:border-white/20 py-3 text-base text-charcoal dark:text-cream placeholder:text-muted/40 focus:border-charcoal dark:focus:border-cream focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-muted">
                      Tell me about your project or story *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share a few details about what you have in mind..."
                      className="w-full bg-transparent border-b border-charcoal/20 dark:border-white/20 py-3 text-base text-charcoal dark:text-cream placeholder:text-muted/40 focus:border-charcoal dark:focus:border-cream focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-charcoal text-cream dark:bg-cream dark:text-charcoal hover:opacity-90 text-xs font-mono uppercase tracking-widest font-semibold transition-all duration-300 shadow-xl group disabled:opacity-50"
                    >
                      <span>{isSubmitting ? 'SENDING INQUIRY...' : 'SEND INQUIRY'}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </form>
              )}
            </div>

            {/* Right Column: Direct Contact & FAQ */}
            <div className="lg:col-span-5 space-y-12 lg:pl-6">
              
              {/* Direct Contact Cards with Glassmorphism */}
              <div className="glass-card p-8 rounded-sm space-y-6">
                <h3 className="font-serif text-2xl text-charcoal dark:text-cream-light">
                  DIRECT DETAILS
                </h3>

                <div className="space-y-4 text-xs font-mono text-muted uppercase tracking-wider">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-lumiere-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-charcoal dark:text-cream-light">Email</span>
                      <a href={`mailto:${siteSettings.email}`} className="text-muted hover:text-charcoal dark:hover:text-cream transition-colors">
                        {siteSettings.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-lumiere-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-charcoal dark:text-cream-light">Studio Base</span>
                      <span>{siteSettings.location}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-lumiere-accent shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-charcoal dark:text-cream-light">Direct Line</span>
                      <span>{siteSettings.phone}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-xs text-muted leading-relaxed font-sans">
                  Available for local assignments across Delhi NCR, destination weddings across India, and international commissions.
                </div>
              </div>

              {/* FAQ Accordion */}
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-charcoal dark:text-cream-light">
                  FREQUENT QUESTIONS
                </h3>

                <div className="divide-y divide-charcoal/10 dark:divide-white/10 border-y border-charcoal/10 dark:border-white/10">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="py-4">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between text-left font-serif text-lg text-charcoal dark:text-cream-light hover:text-lumiere-accent transition-colors"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-lumiere-accent' : ''}`} />
                      </button>

                      {openFaq === idx && (
                        <p className="mt-3 text-sm text-muted leading-relaxed font-sans animate-fadeIn">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
