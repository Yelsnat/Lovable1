import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import sourceCave from '@/assets/source-cave.jpg';

const SourceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="source" className="relative overflow-hidden bg-section-light">
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <img
              src={sourceCave}
              alt="Underground spring source"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-section-dark/40 to-transparent" />
            
            {/* Floating label */}
            <div className="absolute bottom-8 left-8 right-8">
              <span className="inline-block bg-cream/90 px-4 py-2 font-sans text-xs uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
                La Sorgente
              </span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-lg"
          >
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-gold">
              L'Origine
            </span>
            
            <h2 className="mt-4 font-serif text-3xl leading-tight text-primary md:text-5xl">
              Un viaggio di <br />
              <span className="italic">mille anni</span> <br />
              attraverso la roccia
            </h2>

            <div className="mt-8 space-y-6 font-sans text-muted-foreground">
              <p>
                A 1.200 metri di altitudine, nel cuore delle Dolomiti, la nostra 
                sorgente emerge da profondità inaccessibili. L'acqua compie un 
                viaggio millenario attraverso strati di roccia calcarea, 
                arricchendosi naturalmente di minerali preziosi.
              </p>
              <p>
                Questo processo naturale di filtrazione garantisce una purezza 
                assoluta, preservando un equilibrio minerale unico che rende 
                la nostra acqua inconfondibile al palato.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-border pt-8">
              <div>
                <span className="font-serif text-3xl text-gold md:text-4xl">1200</span>
                <p className="mt-1 font-sans text-xs uppercase tracking-wider text-muted-foreground">
                  Metri altitudine
                </p>
              </div>
              <div>
                <span className="font-serif text-3xl text-gold md:text-4xl">7°</span>
                <p className="mt-1 font-sans text-xs uppercase tracking-wider text-muted-foreground">
                  Temperatura costante
                </p>
              </div>
              <div>
                <span className="font-serif text-3xl text-gold md:text-4xl">130</span>
                <p className="mt-1 font-sans text-xs uppercase tracking-wider text-muted-foreground">
                  Anni di storia
                </p>
              </div>
            </div>

            <a
              href="#purity"
              className="mt-10 inline-flex items-center gap-2 border border-primary bg-primary px-8 py-4 font-sans text-xs uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
            >
              Scopri la Purezza
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SourceSection;
