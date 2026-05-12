import { Header, Hero, BlogSection, Services, Features, Cases, Footer } from '@/components';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BlogSection />
        <Services />
        <Features />
        <Cases />
      </main>
      <Footer />
    </>
  );
}
