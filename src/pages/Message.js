import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Send, CheckCircle } from 'lucide-react';

// The component to handle the success message after successful submission
const Redirect = () => {
    return (
        <div className='flex flex-col space-y-3 justify-center items-center py-40 bg-white dark:bg-gray-800'>
            <CheckCircle className="h-12 w-12 text-emerald-500" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Message has successfully sent</h2>
            <p className="max-w-sm text-center text-gray-600 dark:text-gray-400">
                Thanks for the trust you have in me, I will respond to this email soon!
            </p>
        </div>
    );
};

// Main component for the contact form
const Message = () => {
    // State to manage form submission status
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [formError, setFormError] = useState(null);

    // Asynchronous function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        setFormError(null);

        const formData = new FormData(event.target);
        
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });
            
            const result = await response.json();

            if (result.success) {
                setSubmitted(true);
            } else {
                setFormError("There was a problem submitting your form. Please try again.");
                console.error("Form submission failed:", result);
            }
        } catch (error) {
            setFormError("An error occurred. Please check your network connection.");
            console.error("Network or submission error:", error);
        } finally {
            setSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <>
                <Navbar color="bg-gray-800" />
                <Redirect />
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar color="bg-gray-800" />
            <section className="bg-white dark:bg-gray-800 flex flex-col items-center min-h-screen pt-24 px-4 pb-12">
                <div className="w-full max-w-2xl text-center">
                    <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Feel free to ask anything</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        I&apos;m here to help. Send me a message and I&apos;ll respond as soon as I can.
                    </p>
                </div>
                
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-6 w-full max-w-2xl p-8 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-xl"
                >
                    {/* Web3Forms Access Key */}
                    <input type="hidden" name="access_key" value="f2c5c36d-f663-45ff-a3a1-8adb7d49e675" />

                    {/* Name Input */}
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="rounded-lg p-4 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-colors duration-300"
                    />

                    {/* Email Input */}
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
                        className="rounded-lg p-4 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-colors duration-300"
                    />

                    {/* Message Textarea */}
                    <textarea
                        id="message"
                        name="message"
                        rows="6"
                        placeholder="Your Message"
                        required
                        className="border rounded-lg p-4 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-colors duration-300"
                        maxLength="1000"
                    />
                    
                    {/* Submission error message */}
                    {formError && (
                        <p className="text-red-500 text-sm text-center">{formError}</p>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={submitting}
                        className={`
                            flex items-center justify-center space-x-2 
                            w-full p-4 rounded-lg 
                            text-white font-semibold 
                            bg-emerald-500 hover:bg-emerald-600 
                            focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 
                            transition-all duration-300
                            disabled:bg-gray-500 disabled:cursor-not-allowed
                        `}
                    >
                        <span>{submitting ? 'Submitting...' : 'Send Message'}</span>
                        <Send className="h-5 w-5" />
                    </button>
                </form>
            </section>
            <Footer />
        </>
    );
};

export default Message;
