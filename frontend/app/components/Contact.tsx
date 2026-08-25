'use client';

import { useState } from 'react';
import { Send, Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import SocialLinks from './SocialLinks';
import Button from './Button';
import { FloatingInput, FloatingTextarea } from './FloatingInput';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDrafting, setIsDrafting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  const maxMessageLength = 1000;

  const handleAIDraft = async () => {
    if (!formData.message.trim() || isDrafting) return;

    setIsDrafting(true);
    try {
      const response = await fetch('/api/refine-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormData(prev => ({ ...prev, message: data.response }));
      } else {
        console.error('AI refinement failed:', data.error);
        setSubmitStatus({
          type: 'error',
          message: data.error || 'AI refinement is temporarily unavailable'
        });
      }
    } catch (error) {
      console.error('Drafting error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to connect to AI refinement service'
      });
    } finally {
      setIsDrafting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setSubmitStatus({ type: null, message: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Your message has been sent successfully. I will get back to you shortly!'
        });
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error(data.error || data.detail || 'Failed to send message');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-sm shadow-cyan-500/10">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            Initiate Collaboration
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
            Have an AI workflow <br className="hidden sm:block" />
            <span className="text-shimmer">worth automating?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s build production-ready autonomous agent systems and Digital FTEs together.
          </p>
        </div>

        <div className="flex justify-center mb-16 relative z-20">
          <SocialLinks className="bg-slate-900/80 backdrop-blur-xl shadow-2xl px-8 py-4 rounded-full border border-white/10 hover:border-cyan-500/40 transition-colors" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10 relative overflow-hidden bg-slate-900/40">
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FloatingInput
                  type="text"
                  id="name"
                  name="name"
                  label="Your Name / Organization"
                  value={formData.name}
                  onChange={handleChange}
                  isRequired
                  required
                  minLength={2}
                  maxLength={50}
                  className="bg-black/40 border border-white/10 focus:border-cyan-500/50"
                />
                <FloatingInput
                  type="email"
                  id="email"
                  name="email"
                  label="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  isRequired
                  required
                  className="bg-black/40 border border-white/10 focus:border-cyan-500/50"
                />
              </div>

              <FloatingTextarea
                id="message"
                name="message"
                label="Describe your autonomous system requirement, workflow, or inquiry..."
                value={formData.message}
                onChange={handleChange}
                isRequired
                required
                minLength={10}
                maxLength={maxMessageLength}
                rows={5}
                characterCount={formData.message.length}
                maxCharacters={maxMessageLength}
                onAIRefine={handleAIDraft}
                isRefining={isDrafting}
                className="bg-black/40 border border-white/10 focus:border-cyan-500/50"
              />

              <div className="text-center pt-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={isSubmitting}
                  className="w-full sm:w-auto px-10 py-4 rounded-xl shadow-lg shadow-indigo-500/25"
                  rightIcon={<Send className="w-4 h-4" />}
                >
                  Send Message
                </Button>
              </div>

              {/* Status Banner */}
              {submitStatus.type && (
                <div className={`mt-6 p-4 rounded-2xl flex items-center gap-3 ${
                  submitStatus.type === 'success'
                    ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-500/30'
                    : 'bg-rose-950/40 text-rose-300 border border-rose-500/30'
                }`}>
                  {submitStatus.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  )}
                  <p className="text-xs font-mono font-medium">
                    {submitStatus.message}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
