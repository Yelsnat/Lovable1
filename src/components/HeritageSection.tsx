import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import heritageValley from '@/assets/heritage-valley.jpg';

const timelineEvents = [
  {
    year: '1892',
    title: 'La Scoperta',
    description: 'Giovanni Montanari scopre la sorgente durante una spedizione alpina, riconoscendo la straordinaria purezza dell\'acqua.',
  },
  {
    year: '1903',
    title: 'Prima Bottiglia',
    description: 'Inizia l\'imbottigliamento artigianale. Le prime bottiglie di vetro raggiungono le tavole dell\'aristocrazia italiana.',
  },
  {
    year: '1948',
    title: 'Ricostruzione',
    description: 'Dopo la guerra, la famiglia Montanari ricostruisce l\'impianto con tecnologie moderne, mantenendo i metodi tradizionali.',
  },
  {
    year: '1975',
    title: 'Espansione Europea',
    description: 'Acqua Pura raggiunge i mercati europei, diventando simbolo dell\'eccellenza italiana nel mondo.',
  },
  {
    year: '2010',
    title: 'Sostenibilità',
    description: 'L\'azienda adotta energia 100% rinnovabile e packaging completamente riciclabile.',
  },
  {
    year: 'Oggi',
    title: 'Quinta Generazione',
    description: 'La famiglia Montanari continua a custodire la sorgente, unendo tradizione e innovazione.',
  },
];

const HeritageSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="heritage" className="relative overflow-hidden bg-section-light">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heritageValley}
          alt="Mountain valley heritage"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-section-light via-section-light/95 to-section-light/80" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-24 md:py-32">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold">
            La Nostra Storia
          </span>
          
          <h2 className="mt-4 font-serif text-3xl leading-tight text-primary md:text-5xl">
            Una storia di <span className="italic">famiglia</span> <br />
            e <span className="text-gold">passione</span> <br />
            dal 1892
          </h2>

          <p className="mt-6 font-sans text-muted-foreground">
            Cinque generazioni dedicate alla custodia di una sorgente unica, 
            tramandando valori di qualità, rispetto per la natura e amore 
            per il territorio.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-0">
            {timelineEvents.slice(0, 3).map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
                className="timeline-item pb-10"
              >
                <span className="font-serif text-2xl text-gold">{event.year}</span>
                <h3 className="mt-2 font-serif text-xl text-primary">{event.title}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-0 lg:pt-24">
            {timelineEvents.slice(3).map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.15 }}
                className="timeline-item pb-10"
              >
                <span className="font-serif text-2xl text-gold">{event.year}</span>
                <h3 className="mt-2 font-serif text-xl text-primary">{event.title}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Heritage Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 border-l-2 border-gold pl-8"
        >
          <p className="font-serif text-2xl italic leading-relaxed text-primary md:text-3xl">
            "L'acqua è memoria della terra. Ogni goccia porta con sé 
            la storia delle montagne che l'hanno custodita."
          </p>
          <footer className="mt-4 font-sans text-sm text-muted-foreground">
            — <span className="text-gold">Marco Montanari</span>, Quinta Generazione
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default HeritageSection;
