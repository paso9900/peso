import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, Server, Database, Smartphone, Eye, Shield } from 'lucide-react';

const TechnicalSection = () => {
  const [selectedCode, setSelectedCode] = useState('rng');

  const codeExamples = {
    rng: {
      title: 'Random Number Generator مزيف',
      description: 'شوف إزاي بيتلاعبوا بالأرقام "العشوائية"',
      code: `// الكود المزيف اللي بيقولوا عليه "عشوائي"
function fakeRandomNumber() {
  // بيتحكموا في النتيجة حسب حسابك
  const userBalance = getUserBalance();
  const timePlayed = getTimePlayed();
  
  // لو عندك فلوس كتير، نسبة الفوز تقل!
  let winChance = 0.05; // 5% عادي
  
  if (userBalance > 10000) {
    winChance = 0.02; // 2% بس لو عندك فلوس!
  }
  
  if (timePlayed < 30) {
    winChance = 0.15; // يخلوك تكسب في الأول!
  }
  
  return Math.random() < winChance;
}

// الكود الحقيقي للعشوائية
function realRandom() {
  return Math.random(); // ده اللي المفروض يحصل
}`,
      danger: 'خطر شديد'
    },
    tracking: {
      title: 'تتبع سلوك اللاعب',
      description: 'إزاي بيراقبوك وبيحللوا كل حركة',
      code: `// بيراقبوا كل حاجة تعملها
class PlayerTracker {
  trackBehavior(player) {
    const data = {
      playTime: getSessionTime(),
      betPattern: player.bettingHistory,
      emotionalState: analyzeClickSpeed(),
      financialStatus: player.deposits,
      addiction_level: calculateAddiction()
    };
    
    // بيبعتوا المعلومات للسيرفر
    sendToAnalytics(data);
    
    // بيغيروا اللعبة حسب حالتك
    if (data.addiction_level > 0.8) {
      // لو مدمن، يخلوه يخسر أكتر
      increaseHouseEdge();
    }
    
    if (data.emotionalState === 'desperate') {
      // لو يائس، يديله أمل كاذب
      showFakeWinningStreak();
    }
  }
}`,
      danger: 'انتهاك للخصوصية'
    },
    manipulation: {
      title: 'خوارزميات التلاعب النفسي',
      description: 'الكود اللي بيتحكم في مشاعرك',
      code: `// نظام التلاعب النفسي
class PsychManipulation {
  manipulatePlayer(player) {
    // خليه يكسب شوية في الأول
    if (player.gamesPlayed < 10) {
      return triggerSmallWin();
    }
    
    // بعدين خليه يخسر عشان يحاول يعوض
    if (player.totalLoss < player.targetLoss) {
      return guaranteedLoss();
    }
    
    // لو هيسيب، ادله أمل كاذب
    if (player.sessionTime > 60 && player.lastBet === 0) {
      showBonusOffer();
      return nearMissResult(); // قريب من الفوز!
    }
    
    // لو لسه مكملش الهدف، استمر في الخسارة
    return continueLosing();
  }
}`,
      danger: 'تلاعب إجرامي'
    },
    security: {
      title: 'اختراق الحماية المزعومة',
      description: 'ليه الحماية اللي بيقولوا عليها كذب',
      code: `// الحماية المزعومة
class FakeSecurity {
  // بيقولوا عليها "تشفير قوي"
  encrypt(data) {
    return btoa(data); // تشفير ضعيف جداً!
  }
  
  // بيقولوا "مراجعة مستقلة"
  auditResults() {
    return {
      status: "certified", // كذب!
      fairness: "100%",    // مستحيل!
      rtp: "99%"          // خداع!
    };
  }
  
  // في الحقيقة...
  realSecurity() {
    return {
      playerDataSold: true,      // بيبيعوا بياناتك
      gameRigged: true,          // اللعبة مزورة
      withdrawalsBlocked: true,   // مش هتقدر تسحب فلوسك
      supportIgnored: true       // الدعم الفني وهمي
    };
  }
}`,
      danger: 'نصب منظم'
    }
  };

  const technicalFacts = [
    {
      title: 'Server-Side Control',
      description: 'كل النتائج بتتحدد في السيرفر، مش على جهازك',
      impact: 'تحكم كامل في نتائجك',
      severity: 'حرج'
    },
    {
      title: 'Behavioral Analytics',
      description: 'ذكاء اصطناعي بيحلل سلوكك ومشاعرك',
      impact: 'تلاعب نفسي مدروس',
      severity: 'خطير جداً'
    },
    {
      title: 'Dynamic RTP',
      description: 'نسبة الإرجاع بتتغير حسب حسابك',
      impact: 'خسارة أكبر للحسابات الكبيرة',
      severity: 'نصب صريح'
    },
    {
      title: 'Fake User Reviews',
      description: 'التعليقات والمراجعات مزيفة بالكامل',
      impact: 'خداع الضحايا الجدد',
      severity: 'احتيال'
    }
  ];

  return (
    <section id="technical" className="py-20 px-4 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-lalezar gradient-text mb-6">
            الكشف التقني
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-lalezar max-w-4xl mx-auto">
            شوف بعينيك الكود الحقيقي وراء النصب
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-12">
          {technicalFacts.map((fact, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="bg-gradient-danger p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-lalezar text-lg text-primary">{fact.title}</h3>
                <p className="font-lalezar text-sm text-muted-foreground">{fact.description}</p>
                <Badge variant="destructive" className="bg-gradient-warning text-black font-lalezar">
                  {fact.severity}
                </Badge>
                <p className="font-lalezar text-xs text-warning font-bold">{fact.impact}</p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-card border-primary/20 shadow-card">
          <Tabs value={selectedCode} onValueChange={setSelectedCode} className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-card mb-8">
              {Object.entries(codeExamples).map(([key, example]) => (
                <TabsTrigger 
                  key={key} 
                  value={key} 
                  className="font-lalezar data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {example.title.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(codeExamples).map(([key, example]) => (
              <TabsContent key={key} value={key}>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-lalezar text-primary mb-2">{example.title}</h3>
                      <p className="font-lalezar text-muted-foreground">{example.description}</p>
                    </div>
                    <Badge variant="destructive" className="bg-gradient-danger font-lalezar text-lg px-4 py-2">
                      {example.danger}
                    </Badge>
                  </div>

                  <div className="bg-black rounded-lg p-6 overflow-x-auto">
                    <pre className="text-green-400 font-mono text-sm leading-relaxed">
                      <code>{example.code}</code>
                    </pre>
                  </div>

                  <Card className="p-6 bg-gradient-warning text-black">
                    <h4 className="font-lalezar text-lg mb-3">💡 شرح الكود:</h4>
                    <div className="font-lalezar space-y-2">
                      {key === 'rng' && (
                        <>
                          <p>• الأرقام العشوائية مش عشوائية خالص!</p>
                          <p>• بيتحكموا في نسبة فوزك حسب رصيدك</p>
                          <p>• لو عندك فلوس كتير، هيخلوك تخسر أكتر</p>
                        </>
                      )}
                      {key === 'tracking' && (
                        <>
                          <p>• بيسجلوا كل كليكة وحركة تعملها</p>
                          <p>• بيحللوا سرعة الكليك عشان يعرفوا حالتك النفسية</p>
                          <p>• المعلومات دي بتتباع لشركات تانية</p>
                        </>
                      )}
                      {key === 'manipulation' && (
                        <>
                          <p>• الفوزات الصغيرة في الأول مخططة</p>
                          <p>• لما تيأس، بيدوك أمل كاذب</p>
                          <p>• كل حاجة مبرمجة تخليك تلعب أكتر</p>
                        </>
                      )}
                      {key === 'security' && (
                        <>
                          <p>• التشفير ضعيف ومكشوف للهاكرز</p>
                          <p>• شهادات الأمان مزيفة</p>
                          <p>• بياناتك مش محمية خالص</p>
                        </>
                      )}
                    </div>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Card>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card className="p-6 bg-gradient-danger text-white">
            <h3 className="text-2xl font-lalezar mb-4 flex items-center gap-3">
              <Shield className="h-8 w-8" />
              إزاي تحمي نفسك؟
            </h3>
            <div className="space-y-3 font-lalezar">
              <p>• متدخلش على أي موقع قمار خالص</p>
              <p>• امسح أي تطبيق قمار من موبايلك</p>
              <p>• بلوك الإعلانات اللي بتشجع على القمار</p>
              <p>• اطلب المساعدة لو حاسس إنك مدمن</p>
              <p>• فكر في عيلتك قبل ما تلعب</p>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-primary text-white">
            <h3 className="text-2xl font-lalezar mb-4 flex items-center gap-3">
              <Eye className="h-8 w-8" />
              علامات النصب
            </h3>
            <div className="space-y-3 font-lalezar">
              <p>• وعود بالثراء السريع</p>
              <p>• "نسب فوز عالية" كاذبة</p>
              <p>• صعوبة في سحب الأموال</p>
              <p>• دعم فني وهمي</p>
              <p>• ضغط للإيداع أكتر</p>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Card className="p-8 bg-gradient-warning text-black max-w-4xl mx-auto">
            <h3 className="text-3xl font-lalezar mb-6">🤖 الخلاصة التقنية</h3>
            <p className="text-xl font-lalezar leading-relaxed">
              كل اللي شوفته ده موجود فعلاً في كود مواقع القمار. 
              مافيش حاجة اسمها حظ أو عشوائية - كله مبرمج يخليك تخسر!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSection;