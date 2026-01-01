import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail('');
    alert('Grazie per la tua iscrizione!');
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-section-light">
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Newsletter */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold">
              Newsletter
            </span>
            
            <h2 className="mt-4 font-serif text-3xl leading-tight text-primary md:text-4xl">
              Iscriviti alla <span className="italic">newsletter</span>
            </h2>

            <p className="mt-4 font-sans text-muted-foreground">
              Ricevi aggiornamenti sulle novità, eventi esclusivi e 
              offerte riservate ai membri della nostra community.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="La tua email"
                required
                className="flex-1 border border-border bg-transparent px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
              <button
                type="submit"
                className="border border-primary bg-primary px-8 py-3 font-sans text-xs uppercase tracking-[0.15em] text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
              >
                Iscriviti
              </button>
            </form>

            <p className="mt-4 font-sans text-xs text-muted-foreground">
              Iscrivendoti accetti la nostra{' '}
              <a href="#" className="text-gold underline">
                Privacy Policy
              </a>
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold">
                Contatti
              </span>
              
              <h2 className="mt-4 font-serif text-3xl leading-tight text-primary md:text-4xl">
                Vieni a <span className="italic">trovarci</span>
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-gold" strokeWidth={1.5} />
                <div>
                  <p className="font-sans text-foreground">Acqua Pura S.p.A.</p>
                  <p className="mt-1 font-sans text-sm text-muted-foreground">
                    Via della Sorgente, 1<br />
                    38030 Sorgente Alpina (TN)<br />
                    Italia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 text-gold" strokeWidth={1.5} />
                <div>
                  <p className="font-sans text-foreground">+39 0461 123 456</p>
                  <p className="mt-1 font-sans text-sm text-muted-foreground">
                    Lun - Ven, 9:00 - 18:00
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 text-gold" strokeWidth={1.5} />
                <div>
                  <p className="font-sans text-foreground">info@acquapura.it</p>
                  <p className="mt-1 font-sans text-sm text-muted-foreground">
                    Rispondiamo entro 24 ore
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 border border-gold bg-transparent px-8 py-4 font-sans text-xs uppercase tracking-[0.2em] text-gold transition-all hover:bg-gold hover:text-primary-foreground"
            >
              Prenota una Visita
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
