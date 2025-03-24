import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen">
        <Hero />
      </main>
    </>
  );
}
