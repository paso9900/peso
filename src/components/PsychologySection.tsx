import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, Eye, Heart, Zap, Clock, Smartphone } from 'lucide-react';
import victimImage from '@/assets/gambling-victim.jpg';

const PsychologySection = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const manipulationTechniques = [
    {
      id: 'dopamine',
      name: 'حقن الدوبامين',
      icon: Brain,
      description: 'إزاي بيخلوك مدمن كيميائياً',
      details: 'الألعاب مصممة تفرز هرمون الدوبامين في مخك زي المخدرات بالظبط. كل صوت، كل لون، كل حركة مدروسة تخليك عاوز تكمل.',
      examples: ['أصوات الفوز المثيرة', 'الألوان الساطعة', 'الاهتزازات والتأثيرات'],
      danger: 95
    },
    {
      id: 'fomo',
      name: 'Fear of Missing Out',
      icon: Clock,
      description: 'خوفك من ضياع الفرصة',
      details: 'بيخلوك تحس إن فيه فرصة ذهبية هتضيع منك. "العرض ينتهي خلال دقائق!" - كله كذب ونصب.',
      examples: ['عروض وهمية محدودة الوقت', 'إشعارات مستمرة', 'عدادات تنازلي مزيفة'],
      danger: 85
    },
    {
      id: 'near_miss',
      name: 'Near Miss الفوز الضائع',
      icon: Eye,
      description: 'تحسسك إنك كنت قريب من الفوز',
      details: 'لما تشوف الرقم اللي محتاجه جنبك، ده مش صدفة! ده مبرمج عشان تفتكر إنك قريب وتكمل لعب.',
      examples: ['الرقم الرابح جنب رقمك', 'توقف العجلة قبل الفوز بشعرة', 'إظهار فوزات الآخرين الوهمية'],
      danger: 90
    },
    {
      id: 'variable_rewards',
      name: 'المكافآت المتغيرة',
      icon: Heart,
      description: 'نظام الثواب والعقاب',
      details: 'زي تدريب الحيوانات بالظبط! مرة تكسب، 10 مرات تخسر. المخ مش قادر يتوقع، فيفضل عاوز يجرب.',
      examples: ['فوزات صغيرة متباعدة', 'هدايا ومكافآت وهمية', 'بونوسات مشروطة'],
      danger: 88
    },
    {
      id: 'social_pressure',
      name: 'الضغط الاجتماعي',
      icon: Smartphone,
      description: 'استغلال علاقاتك الاجتماعية',
      details: 'بيستغلوا أصحابك وعيلتك عشان يخلوك تلعب. "صاحبك كسب كتير" - كله كذب وحسابات وهمية.',
      examples: ['قوائم الفائزين المزيفة', 'دعوات الأصدقاء', 'منافسات وهمية'],
      danger: 75
    },
    {
      id: 'loss_chasing',
      icon: Zap,
      name: 'مطاردة الخسائر',
      description: 'الفخ الأكبر',
      details: 'لما تخسر، بيقنعوك إن الحل الوحيد إنك تلعب أكتر عشان تعوض. ده أخطر فخ!',
      examples: ['عروض "استرداد الخسائر"', 'قروض داخل التطبيق', 'تشجيع اللعب بمبالغ أكبر'],
      danger: 98
    }
  ];

  return (
    <section id="psychology" className="py-20 px-4 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-lalezar gradient-text mb-6">
            إزاي بيلعبوا بدماغك؟
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-lalezar max-w-4xl mx-auto">
            التلاعب النفسي المدروس اللي بيخليك مدمن قمار من غير ما تحس
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {manipulationTechniques.map((technique, index) => (
            <Card 
              key={technique.id}
              className={`p-6 cursor-pointer transition-all duration-500 hover:shadow-glow ${
                activeDemo === technique.id 
                  ? 'bg-gradient-danger text-white border-primary' 
                  : 'bg-gradient-card border-primary/20 hover:border-primary/50'
              }`}
              onClick={() => setActiveDemo(activeDemo === technique.id ? null : technique.id)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-full ${
                  activeDemo === technique.id ? 'bg-white/20' : 'bg-gradient-primary'
                }`}>
                  <technique.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-lalezar">{technique.name}</h3>
                  <Badge 
                    className={`mt-1 ${
                      activeDemo === technique.id 
                        ? 'bg-white/20 text-white' 
                        : 'bg-gradient-warning text-black'
                    }`}
                  >
                    خطر {technique.danger}%
                  </Badge>
                </div>
              </div>

              <p className="text-sm font-lalezar mb-4 opacity-90">
                {technique.description}
              </p>

              <div className={`overflow-hidden transition-all duration-500 ${
                activeDemo === technique.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="space-y-4 pt-4 border-t border-white/20">
                  <p className="font-lalezar text-sm leading-relaxed">
                    {technique.details}
                  </p>
                  
                  <div>
                    <h4 className="font-lalezar font-bold mb-2">أمثلة حية:</h4>
                    <ul className="space-y-1 text-sm font-lalezar">
                      {technique.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-current rounded-full"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {activeDemo !== technique.id && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full mt-4 font-lalezar hover:bg-primary/20"
                >
                  اعرف التفاصيل
                </Button>
              )}
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src={victimImage} 
              alt="ضحية إدمان القمار" 
              className="w-full rounded-2xl shadow-card"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-lalezar text-lg mb-2">
                الصورة الحقيقية لضحايا القمار
              </p>
              <p className="font-lalezar text-sm opacity-90">
                ديون، مشاكل عائلية، اكتئاب، وخراب البيوت
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="p-6 bg-gradient-danger text-white">
              <h3 className="text-2xl font-lalezar mb-4">🧠 حقائق علمية مرعبة</h3>
              <div className="space-y-4 font-lalezar">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <p>القمار بيغير كيمياء المخ زي المخدرات بالظبط</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <p>90% من اللي بيلعبوا بيخسروا فلوسهم خلال سنة</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <p>معدل الانتحار بين مدمني القمار أعلى 20 مرة</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <p>80% من حالات الطلاق مرتبطة بإدمان القمار</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-warning text-black">
              <h3 className="text-2xl font-lalezar mb-4">⚠️ علامات الخطر</h3>
              <div className="space-y-2 font-lalezar">
                <p>• بتفكر في القمار طول الوقت</p>
                <p>• بتكذب على الأهل والأصحاب</p>
                <p>• بتلعب عشان تنسى مشاكلك</p>
                <p>• بتحاول تعوض خسائرك بلعب أكتر</p>
                <p>• مش قادر تبطل حتى لو عاوز</p>
              </div>
            </Card>

            <Button 
              size="lg" 
              className="w-full bg-gradient-primary hover:shadow-glow text-white font-lalezar text-lg py-6"
              onClick={() => document.getElementById('religious')?.scrollIntoView({ behavior: 'smooth' })}
            >
              شوف الحكم الشرعي
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PsychologySection;