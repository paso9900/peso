import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Calculator, TrendingDown, Zap, Target } from 'lucide-react';
import gamblingAppImage from '@/assets/gambling-app-interface.jpg';

const AlgorithmSection = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('rtp');

  const algorithms = {
    rtp: {
      name: 'RTP - Return to Player',
      description: 'النسبة اللي بترجعلك من اللي دفعته',
      realValue: '85-95%',
      advertisedValue: '98-99%',
      explanation: 'يعني لو دفعت 100 جنيه، هترجعلك 85-95 جنيه بس! والباقي ربح الشركة المضمون.',
      icon: Calculator,
      danger: 'عالي'
    },
    house_edge: {
      name: 'House Edge',
      description: 'نسبة ربح الشركة المضمونة',
      realValue: '5-15%',
      advertisedValue: '1-2%',
      explanation: 'ده معناه إن الشركة بتكسب من 5 لـ 15% من كل اللي بتدفعه، مضمون 100%!',
      icon: TrendingDown,
      danger: 'حرج جداً'
    },
    volatility: {
      name: 'Volatility التذبذب',
      description: 'إزاي اللعبة بتخليك تكسب وتخسر',
      realValue: 'عالي جداً',
      advertisedValue: 'متوسط',
      explanation: 'بيخلوك تكسب شوية في الأول عشان تفتكر إنك هتكسب أكتر، وبعدين تخسر كل حاجة!',
      icon: Zap,
      danger: 'خطر شديد'
    },
    hit_frequency: {
      name: 'Hit Frequency',
      description: 'كم مرة هتكسب من كل 100 محاولة',
      realValue: '5-15 مرة',
      advertisedValue: '30-40 مرة',
      explanation: 'معناها إنك من كل 100 مرة تلعب، هتكسب 5-15 مرة بس! والباقي خسارة.',
      icon: Target,
      danger: 'مدمر'
    }
  };

  return (
    <section id="algorithms" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-lalezar gradient-text mb-6">
            كشف الخوارزميات المدمرة
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-lalezar">
            شوف بعينيك إزاي بيخدعوك بالأرقام والحسابات
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <Tabs value={selectedAlgorithm} onValueChange={setSelectedAlgorithm} className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-card">
                {Object.entries(algorithms).map(([key, algo]) => (
                  <TabsTrigger 
                    key={key} 
                    value={key} 
                    className="font-lalezar text-sm data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    {algo.name.split(' ')[0]}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(algorithms).map(([key, algo]) => (
                <TabsContent key={key} value={key} className="mt-6">
                  <Card className="p-6 bg-gradient-card border-primary/20 shadow-card">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gradient-danger p-3 rounded-full">
                        <algo.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-lalezar text-primary">{algo.name}</h3>
                        <p className="text-muted-foreground font-lalezar">{algo.description}</p>
                      </div>
                      <Badge 
                        variant="destructive" 
                        className="ml-auto bg-gradient-danger font-lalezar"
                      >
                        {algo.danger}
                      </Badge>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-background/50 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-lalezar text-warning">اللي بيقولوا عليه:</span>
                          <span className="font-lalezar text-lg text-green-400">{algo.advertisedValue}</span>
                        </div>
                        <Progress value={90} className="h-2 bg-green-200" />
                      </div>

                      <div className="bg-background/50 p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-lalezar text-primary">الحقيقة المرة:</span>
                          <span className="font-lalezar text-lg text-primary">{algo.realValue}</span>
                        </div>
                        <Progress value={30} className="h-2 bg-red-200" />
                      </div>

                      <div className="bg-gradient-to-r from-warning/10 to-primary/10 p-4 rounded-lg border border-warning/20">
                        <p className="font-lalezar text-lg leading-relaxed">
                          {algo.explanation}
                        </p>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          <div className="space-y-8">
            <Card className="p-6 bg-gradient-card border-primary/20 shadow-card">
              <h3 className="text-2xl font-lalezar text-primary mb-4">مثال حي من التطبيقات</h3>
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={gamblingAppImage} 
                  alt="واجهة تطبيق القمار" 
                  className="w-full h-auto blur-effect hover:blur-none transition-all duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                  <p className="bg-black/80 text-white p-4 rounded-lg font-lalezar text-center">
                    شاهد الواجهة المخادعة
                    <br />
                    <span className="text-sm">مرر الماوس لإزالة الضبابية</span>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-danger text-white">
              <h3 className="text-2xl font-lalezar mb-4">⚠️ تحذير خطير</h3>
              <ul className="space-y-2 font-lalezar text-lg">
                <li>• كل الألعاب مبرمجة لصالح الشركة</li>
                <li>• مافيش حظ أو مهارة تقدر تغلب النظام</li>
                <li>• كل فوزة صغيرة هدفها تخليك تخسر أكتر</li>
                <li>• الخسارة مضمونة على المدى الطويل</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlgorithmSection;