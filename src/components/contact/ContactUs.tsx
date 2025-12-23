// ContactSection.tsx
"use client"
import React, { useState } from 'react';

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));

            console.log('Form submitted:', formData);

            setSubmitSuccess(true);
            setFormData({ name: '', email: '', message: '' });

            setTimeout(() => {
                setSubmitSuccess(false);
            }, 5000);

        } catch (error) {
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="min-h-screen  p-4 md:p-8 lg:p-16">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 min-h-[600px]">

                    <div className="relative rounded-3xl p-6 md:p-8 lg:p-12 overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/30">
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            {[...Array(15)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute bg-white rounded-full animate-pulse"
                                    style={{
                                        width: `${Math.random() * 3 + 1}px`,
                                        height: `${Math.random() * 3 + 1}px`,
                                        top: `${Math.random() * 100}%`,
                                        left: `${Math.random() * 100}%`,
                                        animationDelay: `${Math.random() * 3}s`,
                                        animationDuration: `${Math.random() * 2 + 1}s`
                                    }}
                                />
                            ))}
                        </div>

                        <div className="relative z-10 h-full flex flex-col">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6 md:mb-8">
                                Get in touch
                            </h1>

                            <p className="text-lg md:text-xl text-blue-200 leading-relaxed mb-8 md:mb-12 max-w-lg">
                                Reach out, and let&apos;s create a universe of possibilities together!
                            </p>

                            {/* Constellation */}
                            <div className="relative w-full h-32 md:h-40 my-8 md:my-12">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
                                </div>

                                <div className="absolute inset-0 flex justify-between items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="relative"
                                            style={{
                                                animationDelay: `${i * 0.5}s`,
                                                animationDuration: '3s'
                                            }}
                                        >
                                            <div className="w-3 h-3 bg-indigo-500 rounded-full shadow-lg shadow-indigo-500/50"></div>
                                            <div className="absolute inset-0 w-6 h-6 border-2 border-indigo-300/30 rounded-full -translate-x-1.5 -translate-y-1.5 animate-ping"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="text-2xl md:text-3xl font-semibold text-white mb-6 tracking-wider">
                                Let&apos;s connect constellations
                            </p>

                            <p className="text-lg text-gray-300 italic leading-relaxed mb-6">
                                Let&apos;s align our constellations! Reach out and let the
                            </p>

                            <div className="mt-auto">
                                <p className="text-lg md:text-xl text-indigo-400 border-l-4 border-indigo-500 pl-4 italic">
                                    "Two lunar months revealed Earth&apos;s fragile beauty against vast"
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Contact Form */}
                    <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-8 lg:p-12 border border-white/10">
                        <div className="h-full flex flex-col">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                                Send Message
                            </h2>

                            {submitSuccess && (
                                <div className="mb-6 p-4 bg-green-500/15 text-green-400 rounded-xl border border-green-500/30 text-center font-medium">
                                    Message sent successfully! We&apos;ll get back to you soon.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                                <div className="space-y-6 mb-8">
                                    <div>
                                        <label htmlFor="name" className="block text-blue-200 text-sm font-medium mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 bg-white/10 border-2 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ${errors.name ? 'border-red-500' : 'border-white/10'
                                                }`}
                                            placeholder="Enter your name"
                                            disabled={isSubmitting}
                                        />
                                        {errors.name && (
                                            <span className="block text-red-400 text-sm mt-2">{errors.name}</span>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-blue-200 text-sm font-medium mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 bg-white/10 border-2 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ${errors.email ? 'border-red-500' : 'border-white/10'
                                                }`}
                                            placeholder="Enter your email"
                                            disabled={isSubmitting}
                                        />
                                        {errors.email && (
                                            <span className="block text-red-400 text-sm mt-2">{errors.email}</span>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-blue-200 text-sm font-medium mb-2">
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 bg-white/10 border-2 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 resize-y min-h-[120px] ${errors.message ? 'border-red-500' : 'border-white/10'
                                                }`}
                                            placeholder="Type your message here..."
                                            rows={5}
                                            disabled={isSubmitting}
                                        />
                                        {errors.message && (
                                            <span className="block text-red-400 text-sm mt-2">{errors.message}</span>
                                        )}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="mt-auto w-full md:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs