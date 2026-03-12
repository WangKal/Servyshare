import { useState } from "react";
import { Mail, Phone, MessageSquare, Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("https://formspree.io/f/xpqydvnn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          subject,
          message,
        }),
      });

      if (res.ok) {
        setFormSubmitted(true);

        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");

        setTimeout(() => setFormSubmitted(false), 10000);
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      alert("Error sending message: " + err);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">
              Have questions? We're here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Contact Info */}
            <div className="space-y-6">

              <div className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3>Email Us</h3>
                    <a href="mailto:servitiumking@gmail.com" className="text-primary hover:underline">
                      servitiumking@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3>Call Us</h3>
                    <a href="tel:+254703442778" className="text-primary hover:underline">
                      +254 703 442 778
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3>About Servitium Enterprise</h3>
                    <p className="text-sm text-muted-foreground">
                      ServyShare is proudly owned and operated by Servitium Enterprise.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-lg">

              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full space-y-4 py-12">
                  <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center animate-bounce">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl">Message Sent!</h3>
                  <p className="text-muted-foreground text-center">
                    Thank you for contacting us. We'll get back to you shortly.
                  </p>
                </div>
              ) : (

                <form onSubmit={handleSubmit} className="space-y-4">

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border"
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg border"
                  />

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone"
                    className="w-full px-4 py-3 rounded-lg border"
                  />

                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    placeholder="Subject"
                    className="w-full px-4 py-3 rounded-lg border"
                  />

                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    placeholder="Message"
                    className="w-full px-4 py-3 rounded-lg border"
                  />

                  <button
                    type="submit"
                    className="w-full bg-primary text-white px-6 py-4 rounded-lg flex items-center justify-center gap-2"
                  >
                    <Send className="h-5 w-5" />
                    Send Message
                  </button>

                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}