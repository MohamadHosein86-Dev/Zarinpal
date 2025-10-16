import { Badge } from "@/app/components/ui/badge";
import { Switch } from "@/app/components/ui/switch";
import { Calculator } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-blue-800">
        <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 text-lg px-6 py-2">
            <Calculator className="w-5 h-5 ml-2" />
            قیمت‌گذاری شفاف و منصفانه
          </Badge>

          <h1 className="text-4xl lg:text-6xl font-heavy mb-6 text-balance leading-tight">
            پلن مناسب خود را <span className="text-accent">انتخاب کنید</span>
          </h1>

          <p className="text-xl lg:text-2xl leading-relaxed mb-8 text-pretty opacity-90 max-w-4xl mx-auto">از استارتاپ تا سازمان‌های بزرگ، پلن مناسب هر کسب‌وکاری را داریم. بدون هزینه مخفی، بدون تعهد طولانی‌مدت</p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-lg  text-accent font-bold">ماهانه</span>
            <Switch className="data-[state=checked]:bg-accent data-[state=unchecked]:bg-gray-500 cursor-pointer" dir="ltr" />
            <span className={`text-lg text-accent font-bold"`}>
              سالانه
              <Badge className="mr-2 bg-accent/20 text-accent border-accent/30 text-xs">۲۰٪ تخفیف</Badge>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
