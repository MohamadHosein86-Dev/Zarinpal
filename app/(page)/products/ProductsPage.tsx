import FeaturesComparison from "./components/FeaturesComparison";
import ProductsGrid from "./components/ProductsGrid";
import ProductsHero from "./components/ProductsHero";

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <ProductsHero />
      <ProductsGrid />
      <FeaturesComparison />
      <ProductsGrid />
    </div>
  );
}
