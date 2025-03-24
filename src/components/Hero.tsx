export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-br from-sky-500 to-indigo-600 text-white dark:bg-gray-800 dark:text-gray-200">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
        🌊 Sóc en Roman
      </h1>
      <p className="text-lg sm:text-xl max-w-xl mb-8">
        Desenvolupador de software creatiu amb passió pel codi i l'art. Benvinguts al meu espai digital.
      </p>
      <a
        href="#contact"
        className="bg-white text-sky-700 font-semibold py-3 px-6 rounded-full hover:bg-sky-100 transition dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700"
      >
        Contacta’m
      </a>
    </section>
  );
}
