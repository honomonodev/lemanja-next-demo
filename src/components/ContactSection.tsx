"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-gray-50 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Contacte</h2>

        <form
          action="https://formspree.io/f/xovewpqo"  
          method="POST"
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <div className="flex flex-col col-span-1">
            <label htmlFor="name" className="mb-2 text-sm font-medium text-gray-700">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Exemple: Lluis Llach"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-col col-span-1">
            <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-700">
              Correu electrònic
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Exemple: email@domain.com"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-col sm:col-span-2">
            <label htmlFor="message" className="mb-2 text-sm font-medium text-gray-700">
              Missatge
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Escriu el teu missatge aquí..."
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder:text-gray-400"
            />
          </div>

          <div className="sm:col-span-2 text-center">
            <button
              type="submit"
              className="bg-sky-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-800 transition"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
