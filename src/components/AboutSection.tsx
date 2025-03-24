"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-100 dark:bg-gray-900 py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Sobre mi</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Soc desenvolupador fullstack amb experiència en React, NestJS, Firebase, i Flutter. M’agrada combinar la lògica del codi amb l’expressió artística.
        </p>
      </motion.div>
    </section>
  );
}
