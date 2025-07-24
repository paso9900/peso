import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Building, AlertTriangle, Heart } from 'lucide-react';
import islamicImage from '@/assets/islamic-prohibition.jpg';

const IslamicSection = () => {
  const islamicRulings = [
    {
      source: 'القرآن الكريم',
      verse: 'يَا أَيُّهَا الَّذِينَ آمَنُوا إِنَّمَا الْخَمْرُ وَالْمَيْسِرُ وَالْأَنصَابُ وَالْأَزْلَامُ رِجْسٌ مِّنْ عَمَلِ الشَّيْطَانِ فَاجْتَنِبُوهُ لَعَلَّكُمْ تُفْلِحُونَ',
      translation: 'يا أيها الذين آمنوا إن الخمر والميسر (القمار) نجاسة من عمل الشيطان فابتعدوا عنه لعلكم تنجحون',
      reference: 'سورة المائدة - آية 90'
    },
    {
      source: 'الحديث الشريف',
      verse: 'مَن لَعِبَ بالنَّرْدَشِيرِ فَكَأنَّما صَبَغَ يَدَهُ في لَحْمِ خِنْزِيرٍ ودَمِهِ',
      translation: 'من لعب بالنرد (أي نوع من القمار) فكأنما غمس يده في لحم الخنزير ودمه',
      reference: 'صحيح مسلم'
    }
  ];

  const prohibitionReasons = [
    {
      title: 'أكل أموال الناس بالباطل',
      description: 'القمار طريقة لسرقة أموال الآخرين بدون مقابل حقيقي',
      icon: AlertTriangle,
      severity: 'محرم قطعياً'
    },
    {
      title: 'إفساد العقل والدين',
      description: 'يؤدي إلى إدمان يفسد التفكير السليم والممارسات الدينية',
      icon: BookOpen,
      severity: 'كبيرة من الكبائر'
    },
    {
      title: 'تدمير الأسر والمجتمع',
      description: 'يسبب الفقر والديون وتفكك الأسر وانهيار المجتمعات',
      icon: Heart,
      severity: 'ضرر اجتماعي'
    },
    {
      title: 'الاعتماد على الحظ بدلاً من العمل',
      description: 'يعلم الاتكال على الصدفة بدلاً من العمل الجدي والتوكل على الله',
      icon: Building,
      severity: 'مخالف للتوكل'
    }
  ];

  const scholarOpinions = [
    {
      scholar: 'الإمام ابن تيمية',
      opinion: 'الميسر محرم بإجماع المسلمين، وهو من أكبر الكبائر التي تفسد الدين والدنيا'
    },
    {
      scholar: 'الشيخ ابن عثيمين',
      opinion: 'كل لعب فيه مراهنة أو رهان فهو من الميسر المحرم، سواء كان بالمال أو غيره'
    },
    {
      scholar: 'دار الإفتاء المصرية',
      opinion: 'ألعاب القمار الإلكترونية محرمة شرعاً لأنها تدخل في نطاق الميسر المحرم في القرآن'
    }
  ];

  return (
    <section id="religious" className="py-20 px-4 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Building className="h-12 w-12 text-secondary" />
            <h2 className="text-4xl md:text-6xl font-lalezar gradient-text">
              الحكم الشرعي
            </h2>
            <Building className="h-12 w-12 text-secondary" />
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground font-lalezar max-w-4xl mx-auto">
            إيه اللي قاله الإسلام عن القمار وليه محرم؟
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            {islamicRulings.map((ruling, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-secondary/20 shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="h-6 w-6 text-secondary" />
                  <h3 className="text-xl font-lalezar text-secondary">{ruling.source}</h3>
                  <Badge className="bg-secondary text-black font-lalezar">
                    {ruling.reference}
                  </Badge>
                </div>
                
                <div className="bg-secondary/10 p-4 rounded-lg mb-4 border-r-4 border-secondary">
                  <p className="font-lalezar text-lg leading-relaxed text-center mb-4">
                    {ruling.verse}
                  </p>
                </div>
                
                <div className="bg-background/50 p-4 rounded-lg">
                  <p className="font-lalezar text-muted-foreground">
                    <strong>المعنى:</strong> {ruling.translation}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="relative">
            <img 
              src={islamicImage} 
              alt="التحريم الشرعي للقمار" 
              className="w-full rounded-2xl shadow-card"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-lalezar text-xl mb-2">
                الإسلام حرم القمار لحكم عظيمة
              </p>
              <p className="font-lalezar text-sm opacity-90">
                حماية للإنسان والمجتمع من الدمار
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-lalezar text-center mb-8 gradient-text">
            ليه الإسلام حرم القمار؟
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {prohibitionReasons.map((reason, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-gradient-primary p-4 rounded-full">
                    <reason.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-lalezar text-primary">{reason.title}</h4>
                  <Badge variant="destructive" className="bg-gradient-danger font-lalezar">
                    {reason.severity}
                  </Badge>
                  <p className="font-lalezar text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-8 bg-gradient-warning text-black mb-12">
          <h3 className="text-2xl font-lalezar text-center mb-6">
            أقوال العلماء المعاصرين
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {scholarOpinions.map((opinion, index) => (
              <div key={index} className="bg-black/10 p-4 rounded-lg">
                <h4 className="font-lalezar font-bold mb-2">{opinion.scholar}</h4>
                <p className="font-lalezar text-sm leading-relaxed">
                  "{opinion.opinion}"
                </p>
              </div>
            ))}
          </div>
        </Card>

        <div className="text-center space-y-8">
          <Card className="p-8 bg-gradient-danger text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-lalezar mb-6">🤲 رسالة من القلب</h3>
            <div className="space-y-4 font-lalezar text-lg leading-relaxed">
              <p>
                أخي الحبيب، أختي الكريمة... الله سبحانه وتعالى حرم القمار رحمة بنا، مش تضييق علينا.
              </p>
              <p>
                هو عارف إن القمار هيدمر حياتك، هيخرب بيتك، هيضيع مستقبلك ومستقبل ولادك.
              </p>
              <p>
                التوبة باب مفتوح، والله غفور رحيم. ابعد عن القمار واطلب المساعدة.
              </p>
              <p className="text-yellow-200 font-bold">
                فلوسك وصحتك وأهلك أهم من أي "فوزة" وهمية!
              </p>
            </div>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-secondary text-secondary hover:bg-secondary hover:text-black font-lalezar text-lg px-8 py-6"
            >
              ادعو لي بالهداية
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow text-white font-lalezar text-lg px-8 py-6"
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            >
              جرب اللعبة التفاعلية
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IslamicSection;