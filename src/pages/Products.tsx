import Navbar from "@/components/Navbar";
import ProductsSection from "@/components/sections/ProductsSection";
import Footer from "@/components/sections/Footer";

const ProductsPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main className="pt-24">
      <ProductsSection />
    </main>
    <Footer />
  </div>
);

export default ProductsPage;
