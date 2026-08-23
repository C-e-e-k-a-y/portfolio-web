import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Loader2, Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID || 'YOUR_SERVICE_ID';
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setIsSubmitting(false);
        setStatusMessage({ type: 'success', text: 'Message sent successfully!' });
        // Clear form
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setIsSubmitting(false);
        setStatusMessage({ type: 'error', text: 'Failed to send message. Please try again later.' });
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-3 w-[80%] md:w-[50%] lg:w-[40%] bg-blue-400/10 p-4 rounded-lg backdrop-blur-md border border-blue-400">
      <input
        type="text"
        placeholder="Your Name" required
        name="name" autoComplete="off" onChange={handleChange} value={formData.name}
        className="text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:ring-2 hover:ring-blue-500 w-full h-10 rounded-md p-4"
      />
      <input
        type="email"
        placeholder="Your Email" required
        name="email" autoComplete="off" onChange={handleChange} value={formData.email}
        className="text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:ring-2 hover:ring-blue-500 w-full h-10 rounded-md p-4"
      />
      <input
        type="text"
        placeholder="Subject" required
        name="subject" autoComplete="off" onChange={handleChange} value={formData.subject}
        className="text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:ring-2 hover:ring-blue-500 w-full h-10 rounded-md p-4"
      />
      <textarea
        placeholder="Your Message" required
        name="message" autoComplete="off" onChange={handleChange} value={formData.message}
        rows={2}
        className="text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full resize-none rounded-md p-4 hover:ring-2 hover:ring-blue-500"
      ></textarea>
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center gap-2 rounded-lg mt-2 bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-md"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            <span>Send Message</span>
          </>
        )}
      </button>

      {/* Success / Error Feedback Message */}
      {statusMessage && (
        <p className={`text-sm ${statusMessage.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
          {statusMessage.text}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
