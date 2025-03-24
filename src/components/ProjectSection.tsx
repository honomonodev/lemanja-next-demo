"use client";

import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-white dark:bg-gray-900 py-24 px-6">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-6xl mx-auto text-center"
    >
      <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Projectes</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        Aquí tens una mostra de treballs que he fet amb passió i detall.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder cards */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">Projecte 1</h3>
          <p className="text-sm text-gray-600 dark:text-gray-200">Descripció breu del projecte amb React i Tailwind.</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">Projecte 2</h3>
          <p className="text-sm text-gray-600 dark:text-gray-200">Aplicació amb Firebase i autenticació.</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow hover:shadow-lg transition">
          <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">Projecte 3</h3>
          <p className="text-sm text-gray-600 dark:text-gray-200">App amb Flutter i arquitectura modular.</p>
        </div>
      </div>
    </motion.div>
  </section>
  
  );
}
