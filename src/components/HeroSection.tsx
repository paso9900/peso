import { AlertTriangle, TrendingDown, Brain, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/gambling-manipulation.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="flex items-center space-x-3 rtl:space-x-reverse text-warning">
            <AlertTriangle className="h-8 w-8 animate-pulse" />
            <span className="text-xl font-lalezar">تحذير هام</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-lalezar leading-tight">
            <span className="gradient-text">كشف حقيقة</span>
            <br />
            <span className="text-primary">ألعاب القمار</span>
            <br />
            <span className="gradient-warning-text">الإلكتروني</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-lalezar leading-relaxed">
            مش بس لعبة.. ده نصب منظم!
            <br />
            اكتشف إزاي بيخدعوك نفسياً ومالياً
          </p>

          <div className="grid grid-cols-3 gap-4 py-8">
            <div className="text-center">
              <div className="bg-gradient-danger p-4 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                <TrendingDown className="h-8 w-8 text-white" />
              </div>
              <p className="font-lalezar text-sm">95% خسارة مضمونة</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <p className="font-lalezar text-sm">تلاعب نفسي</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-warning p-4 rounded-full w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <p className="font-lalezar text-sm">ربح الشركة فقط</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-danger hover:shadow-danger text-white font-lalezar text-lg px-8 py-6 animate-pulse-glow"
              onClick={() => document.getElementById('algorithms')?.scrollIntoView({ behavior: 'smooth' })}
            >
              اكتشف الخداع
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-white font-lalezar text-lg px-8 py-6"
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              جرب بنفسك
            </Button>
          </div>
        </div>

        <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="relative overflow-hidden rounded-2xl shadow-card">
            <img 
              src={heroImage} 
              alt="خوارزميات القمار الإلكتروني" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-lalezar text-lg">
                شاهد إزاي الخوارزميات بتتحكم فيك
              </p>
            </div>
          </div>
          
          {/* Floating warning badges */}
          <div className="absolute -top-4 -right-4 bg-warning text-black px-4 py-2 rounded-full font-lalezar animate-float">
            خطر!
          </div>
          <div className="absolute -bottom-4 -left-4 bg-primary text-white px-4 py-2 rounded-full font-lalezar animate-float" style={{ animationDelay: '1s' }}>
            احذر النصب
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;