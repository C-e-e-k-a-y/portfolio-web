import { useState } from 'react';
import emailjs from '@emailjs/browser';

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
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col items-center space-y-4">
      <input
        type="text"
        placeholder="Your Name" required
        name="name" autoComplete="off" onChange={handleChange} value={formData.name}
        className="text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:ring-2 hover:ring-blue-500 w-[80%] md:w-[50%] h-10 rounded-md p-4"
      />
      <input
        type="email"
        placeholder="Your Email" required
        name="email" autoComplete="off" onChange={handleChange} value={formData.email}
        className="text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:ring-2 hover:ring-blue-500 w-[80%] md:w-[50%] h-10 rounded-md p-4"
      />
      <input
        type="text"
        placeholder="Subject" required
        name="subject" autoComplete="off" onChange={handleChange} value={formData.subject}
        className="text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:ring-2 hover:ring-blue-500 w-[80%] md:w-[50%] h-10 rounded-md p-4"
      />
      <textarea
        placeholder="Your Message" required
        name="message" autoComplete="off" onChange={handleChange} value={formData.message}
        rows={2}
        className="text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[80%] md:w-[50%] resize-none rounded-md p-4 hover:ring-2 hover:ring-blue-500"
      ></textarea>
      <button
        type="submit" disabled={isSubmitting}
        className="rounded-lg mt-2 bg-blue-500 px-4 py-2 hover:bg-blue-600"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
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
