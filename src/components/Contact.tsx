import React, { useRef, useState } from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SectionHeading from './SectionHeading';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      await emailjs.sendForm(
        'service_i6n6pxo',
        'template_hgceas2',
        form.current,
        'r0uKGDfll5s-WF-Ed'
      );
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! I will get back to you soon.',
      });
      form.current.reset();
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 px-4">
      <div className="container mx-auto">
        <SectionHeading title="Get In Touch" subtitle="Contact Me" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-gray-300 text-sm">Email</h4>
                  <a 
                    href="mailto:debarun.dey98@gmail.com" 
                    className="text-white hover:text-indigo-400 transition-colors"
                  >
                    debarun.dey98@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-gray-300 text-sm">Phone</h4>
                  <a 
                    href="tel:+916295444236" 
                    className="text-white hover:text-indigo-400 transition-colors"
                  >
                    +91 6295444236
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                  <Linkedin className="text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-gray-300 text-sm">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/your-username" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-indigo-400 transition-colors"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                  <Github className="text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-gray-300 text-sm">GitHub</h4>
                  <a 
                    href="https://github.com/your-username" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-indigo-400 transition-colors"
                  >
                    View GitHub Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
            
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="from_name" className="block text-gray-300 mb-2">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="from_name"
                  name="from_name"
                  className="w-full bg-gray-700 border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="reply_to" className="block text-gray-300 mb-2">
                  Your Email
                </label>
                <input 
                  type="email" 
                  id="reply_to"
                  name="reply_to"
                  className="w-full bg-gray-700 border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  className="w-full bg-gray-700 border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea 
                  id="message"
                  name="message"
                  rows={4} 
                  className="w-full bg-gray-700 border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                ></textarea>
              </div>

              {submitStatus.type && (
                <div className={`p-4 rounded-lg ${
                  submitStatus.type === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {submitStatus.message}
                </div>
              )}
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors w-full disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;