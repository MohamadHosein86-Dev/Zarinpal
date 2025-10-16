import { Button } from "@/app/components/ui/button";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-600 to-primary">
        <div className="absolute inset-0 bg-[url('/images/circuit.png')] opacity-10"></div>
      </div>

      <div className="relative z-10 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-heavy mb-6">آماده همکاری با ما هستید؟</h2>
          <p className="text-xl mb-8 opacity-90">بیایید با هم آینده پرداخت را بسازیم</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-4 cursor-pointer">
                شروع همکاری
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-white/5 text-lg px-8 py-4 cursor-pointer">
                تماس با ما
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
