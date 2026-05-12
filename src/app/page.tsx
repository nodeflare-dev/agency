import { Header, Hero, Notice, BlogSection, Services, Features, Cases, Footer } from '@/components';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Notice />
        <BlogSection />
        <Services />
        <Features />
        <Cases />
      </main>
      <Footer />
    </>
  );
}
