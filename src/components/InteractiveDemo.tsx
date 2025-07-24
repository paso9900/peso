import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { RotateCcw, TrendingDown, AlertTriangle, DollarSign } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import rouletteImage from '@/assets/roulette-demo.jpg';

const InteractiveDemo = () => {
  const { toast } = useToast();
  const [balance, setBalance] = useState(1000);
  const [totalSpent, setTotalSpent] = useState(0);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [lastResult, setLastResult] = useState<number | null>(null);
  const [betAmount, setBetAmount] = useState(50);
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [gameHistory, setGameHistory] = useState<{bet: number, number: number, result: number, win: boolean}[]>([]);

  const rouletteNumbers = Array.from({length: 37}, (_, i) => i); // 0-36
  const redNumbers = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
  
  const spinWheel = () => {
    if (balance < betAmount) {
      toast({
        title: "مافيش فلوس كفاية!",
        description: "شوف إزاي خلصت فلوسك بسرعة!",
        variant: "destructive",
      });
      return;
    }

    if (selectedNumber === null) {
      toast({
        title: "اختر رقم الأول",
        description: "اختر رقم من 0-36 عشان تراهن عليه",
      });
      return;
    }

    setIsSpinning(true);
    setBalance(prev => prev - betAmount);
    setTotalSpent(prev => prev + betAmount);
    
    // محاكاة دوران العجلة
    setTimeout(() => {
      // نسبة الفوز الحقيقية: 1/37 = 2.7%
      // بس هنخليها أقل شوية عشان نوضح الخداع
      const winChance = Math.random() < 0.02; // 2% بس!
      const result = winChance && Math.random() < 0.5 
        ? selectedNumber 
        : Math.floor(Math.random() * 37);
      
      setLastResult(result);
      
      const isWin = result === selectedNumber;
      const newGameRecord = {
        bet: betAmount,
        number: selectedNumber,
        result: result,
        win: isWin
      };
      
      setGameHistory(prev => [newGameRecord, ...prev.slice(0, 9)]);
      
      if (isWin) {
        const winAmount = betAmount * 35; // المكسب في الرولت 35:1
        setBalance(prev => prev + winAmount);
        setWins(prev => prev + 1);
        toast({
          title: "مبروك! كسبت!",
          description: `كسبت ${winAmount} جنيه! بس متفرحش كتير... ده فخ!`,
          variant: "default",
        });
      } else {
        setLosses(prev => prev + 1);
        if (Math.random() < 0.3) { // رسائل تحفيزية كاذبة
          toast({
            title: "قريب من الفوز!",
            description: "كنت قريب! جرب تاني، المرة الجاية هتكسب أكيد!",
            variant: "destructive",
          });
        }
      }
      
      setIsSpinning(false);
    }, 2000);
  };

  const resetGame = () => {
    setBalance(1000);
    setTotalSpent(0);
    setWins(0);
    setLosses(0);
    setLastResult(null);
    setGameHistory([]);
    toast({
      title: "تم إعادة تشغيل اللعبة",
      description: "ابدأ من جديد وشوف هتوصل لإيه!",
    });
  };

  const winRate = wins + losses > 0 ? (wins / (wins + losses)) * 100 : 0;
  const netLoss = totalSpent - balance + 1000; // كم خسر فعلياً

  return (
    <section id="demo" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-lalezar gradient-text mb-6">
            جرب بنفسك!
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-lalezar max-w-4xl mx-auto">
            لعبة رولت تفاعلية تفهمك إزاي القمار بيخدعك
          </p>
          <Badge className="mt-4 bg-gradient-warning text-black font-lalezar text-lg px-4 py-2">
            ⚠️ تحذير: هذه محاكاة تعليمية فقط
          </Badge>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Game Interface */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 bg-gradient-card border-primary/20 shadow-card">
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <img 
                    src={rouletteImage} 
                    alt="رولت الكازينو" 
                    className={`w-64 h-64 mx-auto rounded-full border-4 border-primary transition-transform duration-2000 ${
                      isSpinning ? 'animate-spin' : ''
                    }`}
                  />
                  {lastResult !== null && !isSpinning && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`bg-black/80 text-white px-4 py-2 rounded-full font-lalezar text-2xl ${
                        redNumbers.includes(lastResult) ? 'border-2 border-red-500' : 'border-2 border-green-500'
                      }`}>
                        {lastResult}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Number Selection */}
              <div className="mb-6">
                <h3 className="font-lalezar text-lg mb-3 text-center">اختر رقمك (0-36):</h3>
                <div className="grid grid-cols-8 gap-2 max-w-md mx-auto">
                  {rouletteNumbers.map((num) => (
                    <button
                      key={num}
                      onClick={() => setSelectedNumber(num)}
                      className={`w-10 h-10 rounded-full font-lalezar text-sm font-bold transition-all ${
                        selectedNumber === num
                          ? 'bg-primary text-white scale-110'
                          : num === 0
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : redNumbers.includes(num)
                          ? 'bg-red-600 text-white hover:bg-red-700'
                          : 'bg-gray-800 text-white hover:bg-gray-700'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bet Amount */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <label className="font-lalezar">مبلغ الرهان:</label>
                <select 
                  value={betAmount} 
                  onChange={(e) => setBetAmount(Number(e.target.value))}
                  className="bg-card border border-primary/20 rounded px-3 py-2 font-lalezar"
                >
                  <option value={10}>10 جنيه</option>
                  <option value={25}>25 جنيه</option>
                  <option value={50}>50 جنيه</option>
                  <option value={100}>100 جنيه</option>
                  <option value={250}>250 جنيه</option>
                </select>
              </div>

              {/* Controls */}
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={spinWheel}
                  disabled={isSpinning || balance < betAmount}
                  className="bg-gradient-danger hover:shadow-danger text-white font-lalezar text-lg px-8 py-6 animate-pulse-glow"
                >
                  {isSpinning ? 'بيدور...' : 'دور العجلة!'}
                </Button>
                <Button
                  onClick={resetGame}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white font-lalezar text-lg px-8 py-6"
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  ابدأ من جديد
                </Button>
              </div>
            </Card>
          </div>

          {/* Statistics */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-card border-primary/20 shadow-card">
              <h3 className="font-lalezar text-xl mb-4 text-primary">إحصائياتك</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-lalezar">الرصيد الحالي:</span>
                  <Badge className={`font-lalezar ${balance > 500 ? 'bg-green-600' : balance > 200 ? 'bg-yellow-600' : 'bg-red-600'}`}>
                    {balance} جنيه
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-lalezar">إجمالي المصروف:</span>
                  <Badge variant="destructive" className="font-lalezar">
                    {totalSpent} جنيه
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-lalezar">صافي الخسارة:</span>
                  <Badge variant="destructive" className="font-lalezar">
                    {netLoss} جنيه
                  </Badge>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-lalezar">نسبة الفوز:</span>
                    <span className="font-lalezar text-primary">{winRate.toFixed(1)}%</span>
                  </div>
                  <Progress value={winRate} className="h-2" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-lalezar">مرات الفوز:</span>
                  <Badge className="bg-green-600 font-lalezar">{wins}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-lalezar">مرات الخسارة:</span>
                  <Badge variant="destructive" className="font-lalezar">{losses}</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-warning text-black">
              <h3 className="font-lalezar text-lg mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                الحقيقة المرة
              </h3>
              <div className="space-y-2 font-lalezar text-sm">
                <p>• نسبة الفوز الحقيقية: 2.7% فقط!</p>
                <p>• الكازينو بيكسب 97.3% من الوقت</p>
                <p>• كل "فوزة" هدفها تخليك تلعب أكتر</p>
                <p>• النتايج مش عشوائية، كلها مبرمجة</p>
                <p>• كلما لعبت أكتر، كلما خسرت أكتر</p>
              </div>
            </Card>

            {gameHistory.length > 0 && (
              <Card className="p-6 bg-gradient-card border-primary/20 shadow-card">
                <h3 className="font-lalezar text-lg mb-4">آخر النتائج</h3>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {gameHistory.map((game, index) => (
                    <div key={index} className={`flex justify-between items-center p-2 rounded text-sm font-lalezar ${
                      game.win ? 'bg-green-600/20 text-green-400' : 'bg-red-600/20 text-red-400'
                    }`}>
                      <span>رقم {game.number}</span>
                      <span>النتيجة: {game.result}</span>
                      <span>{game.win ? `+${game.bet * 35}` : `-${game.bet}`}</span>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </div>
        </div>

        {/* Educational Message */}
        {netLoss > 500 && (
          <Card className="mt-8 p-8 bg-gradient-danger text-white animate-shake-warning">
            <div className="text-center">
              <h3 className="text-2xl font-lalezar mb-4">🚨 شوفت الكارثة؟</h3>
              <p className="text-lg font-lalezar mb-4">
                خسرت {netLoss} جنيه في دقائق معدودة! تخيل لو ده فلوس حقيقية؟
              </p>
              <p className="font-lalezar">
                ده بالظبط اللي بيحصل في الحقيقة. الخسارة مضمونة، والربح للشركة بس!
              </p>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
};

export default InteractiveDemo;