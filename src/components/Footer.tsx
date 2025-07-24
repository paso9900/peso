import { Heart, AlertTriangle, Shield, Book } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-card to-background py-12 px-4 border-t border-primary/20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-primary" />
              <h3 className="font-lalezar text-lg text-primary">تحذير مهم</h3>
            </div>
            <p className="font-lalezar text-sm text-muted-foreground leading-relaxed">
              هذا الموقع لأغراض التوعية فقط. نهدف لحماية الناس من مخاطر القمار الإلكتروني.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-secondary" />
              <h3 className="font-lalezar text-lg text-secondary">الحماية</h3>
            </div>
            <div className="space-y-2 font-lalezar text-sm">
              <p>• احم نفسك وعيلتك</p>
              <p>• اطلب المساعدة المتخصصة</p>
              <p>• ابعد عن مواقع القمار</p>
              <p>• انشر التوعية</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Book className="h-6 w-6 text-warning" />
              <h3 className="font-lalezar text-lg text-warning">مصادر المساعدة</h3>
            </div>
            <div className="space-y-2 font-lalezar text-sm">
              <p>• دار الإفتاء: 107</p>
              <p>• الخط الساخن للصحة النفسية</p>
              <p>• مراكز علاج الإدمان</p>
              <p>• الدعم الأسري</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Heart className="h-6 w-6 text-accent" />
              <h3 className="font-lalezar text-lg text-accent">رسالة أخيرة</h3>
            </div>
            <p className="font-lalezar text-sm text-muted-foreground leading-relaxed">
              حياتك وفلوسك وعيلتك أهم من أي لعبة. التوبة باب مفتوح، والله غفور رحيم.
            </p>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary animate-pulse" />
                <span className="font-lalezar text-foreground">
                  موقع توعوي لحماية المجتمع من مخاطر القمار
                </span>
              </div>
            </div>

            <div className="text-center">
              <p className="font-lalezar text-sm text-muted-foreground mb-2">
                صُمم بحب لحماية الناس من النصب والخداع
              </p>
              
              {/* Developer Credit - Yellow Square with Black Text */}
              <div className="inline-flex items-center justify-center bg-yellow-400 text-black px-4 py-2 rounded font-lalezar text-sm font-bold shadow-lg">
                developed by peso
              </div>
            </div>
          </div>

          <div className="text-center mt-6 pt-6 border-t border-primary/10">
            <p className="font-lalezar text-xs text-muted-foreground">
              "وَلَا تَأْكُلُوا أَمْوَالَكُم بَيْنَكُم بِالْبَاطِلِ" - القرآن الكريم
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;