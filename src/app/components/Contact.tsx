import { useState } from "react";
import { Mail, Phone, MessageSquare, Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Controlled form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://servitium.onrender.com/api/servyshare/contact/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, phone, subject, message }),
        }
      );

      const data = await res.json();

      if (data.success) {
        setFormSubmitted(true);
        // Reset form
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      } else {
        alert(data.error || "Failed to send message");
      }
    } catch (err) {
      alert("Error sending message: " + err);
    }

    // Hide success message after 10s
    setTimeout(() => setFormSubmitted(false), 10000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              Have questions? We're here to help. Contact us and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              {/* Email */}
              <div className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-950 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-500" />
                  </div>
                  <div>
                    <h3 className="mb-2">Email Us</h3>
                    <a href="mailto:support@servyshare.com" className="text-primary hover:underline">
                      servitiumking@gmail.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-green-100 dark:bg-green-950 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-green-600 dark:text-green-500" />
                  </div>
                  <div>
                    <h3 className="mb-2">Call Us</h3>
                    <a href="tel:+254703442778" className="text-primary hover:underline">
                      +254 703 442 778
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Monday - Friday, 9AM - 6PM EAT
                    </p>
                  </div>
                </div>
              </div>

              {/* About */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2">About Servitium Enterprise</h3>
                    <p className="text-sm text-muted-foreground">
                      ServyShare is proudly owned and operated by Servitium Enterprise, 
                      dedicated to providing innovative solutions for businesses across Africa.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full space-y-4 py-12">
                  <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-950 flex items-center justify-center animate-bounce">
                    <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-500" />
                  </div>
                  <h3 className="text-2xl">Message Sent!</h3>
                  <p className="text-muted-foreground text-center">
                    Thank you for contacting us. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="+254 700 000 000"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-2 text-sm">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm">Message *</label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      placeholder="Tell us more about your needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground px-6 py-4 rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <Send className="h-5 w-5" />
                    Send Message
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}