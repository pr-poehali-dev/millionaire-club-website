import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-luxury-black text-white font-opensans">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold via-gold-600 to-gold-800 opacity-20"></div>
        <nav className="relative z-10 flex items-center justify-between px-8 py-6">
          <div className="flex items-center space-x-3">
            <img 
              src="/img/d19d6df0-a6b4-40d0-9ea4-64c10ec3e613.jpg" 
              alt="Millionaires Club Crown" 
              className="w-12 h-12 rounded-full object-cover border-2 border-gold"
            />
            <h1 className="text-2xl font-montserrat font-bold bg-gradient-to-r from-gold to-gold-300 bg-clip-text text-transparent">
              MILLIONAIRES CLUB
            </h1>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#membership" className="text-luxury-platinum hover:text-gold transition-colors font-medium">
              Членство
            </a>
            <a href="#contact" className="text-luxury-platinum hover:text-gold transition-colors font-medium">
              Контакты
            </a>
            <Button className="bg-gradient-to-r from-gold to-gold-600 hover:from-gold-600 hover:to-gold-700 text-luxury-black font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
              Вступить в клуб
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/img/123b8462-adb5-467f-8c49-561a3c10f6ab.jpg" 
            alt="Luxury Club Interior" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
          <h2 className="text-6xl lg:text-8xl font-montserrat font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-gold via-gold-300 to-gold bg-clip-text text-transparent">
              ЭКСКЛЮЗИВНОСТЬ
            </span>
          </h2>
          <h3 className="text-4xl lg:text-6xl font-montserrat font-light mb-8 text-luxury-platinum animate-fade-in">
            НАЧИНАЕТСЯ ЗДЕСЬ
          </h3>
          <p className="text-xl lg:text-2xl text-luxury-platinum mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Присоединяйтесь к элитному сообществу успешных предпринимателей, инвесторов и лидеров бизнеса
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
            <Button className="bg-gradient-to-r from-gold to-gold-600 hover:from-gold-600 hover:to-gold-700 text-luxury-black font-semibold px-12 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <Icon name="Crown" className="mr-3" size={24} />
              Стать членом
            </Button>
            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-luxury-black font-semibold px-12 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105">
              <Icon name="Play" className="mr-3" size={24} />
              Узнать больше
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-gold" size={32} />
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-24 px-8 bg-gradient-to-b from-luxury-black to-luxury-charcoal">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-montserrat font-bold mb-6 bg-gradient-to-r from-gold to-gold-300 bg-clip-text text-transparent">
              ЭЛИТНОЕ ЧЛЕНСТВО
            </h2>
            <p className="text-xl text-luxury-platinum max-w-2xl mx-auto">
              Выберите уровень членства, который соответствует вашему статусу и амбициям
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Gold Card */}
            <Card className="bg-gradient-to-b from-gold-100 to-gold-200 border-gold shadow-2xl transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-luxury-black">
                <div className="text-center mb-6">
                  <Icon name="Award" className="mx-auto mb-4 text-gold-600" size={48} />
                  <h3 className="text-2xl font-montserrat font-bold mb-2">GOLD</h3>
                  <p className="text-luxury-charcoal">Базовое членство</p>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Icon name="Check" className="text-gold-600 mr-3" size={20} />
                    <span>Доступ к VIP-зонам</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="text-gold-600 mr-3" size={20} />
                    <span>Эксклюзивные мероприятия</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="text-gold-600 mr-3" size={20} />
                    <span>Персональный консьерж</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-4">$50,000</div>
                  <Button className="w-full bg-gold-600 hover:bg-gold-700 text-white">
                    Выбрать план
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Platinum Card */}
            <Card className="bg-gradient-to-b from-luxury-platinum to-white border-luxury-platinum shadow-2xl transform hover:scale-105 transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold text-luxury-black px-6 py-2 rounded-full text-sm font-semibold">
                ПОПУЛЯРНЫЙ
              </div>
              <CardContent className="p-8 text-luxury-black">
                <div className="text-center mb-6">
                  <Icon name="Star" className="mx-auto mb-4 text-gold" size={48} />
                  <h3 className="text-2xl font-montserrat font-bold mb-2">PLATINUM</h3>
                  <p className="text-luxury-charcoal">Премиум членство</p>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Icon name="Check" className="text-gold mr-3" size={20} />
                    <span>Все привилегии Gold</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="text-gold mr-3" size={20} />
                    <span>Приватные инвестиционные сессии</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="text-gold mr-3" size={20} />
                    <span>Yacht Club доступ</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="text-gold mr-3" size={20} />
                    <span>Персональный финансовый советник</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-4">$150,000</div>
                  <Button className="w-full bg-gold hover:bg-gold-600 text-luxury-black">
                    Выбрать план
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Diamond Card */}
            <Card className="bg-gradient-to-b from-luxury-black to-luxury-charcoal border-gold shadow-2xl transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-8 text-white">
                <div className="text-center mb-6">
                  <Icon name="Diamond" className="mx-auto mb-4 text-gold" size={48} />
                  <h3 className="text-2xl font-montserrat font-bold mb-2 text-gold">DIAMOND</h3>
                  <p className="text-luxury-platinum">Ультра-элитное членство</p>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Icon name="Check" className="text-gold mr-3" size={20} />
                    <span>Все привилегии Platinum</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="text-gold mr-3" size={20} />
                    <span>Приватный jet доступ</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="text-gold mr-3" size={20} />
                    <span>Эксклюзивные инвестиционные возможности</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" className="text-gold mr-3" size={20} />
                    <span>24/7 персональная поддержка</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-4 text-gold">$500,000</div>
                  <Button className="w-full bg-gradient-to-r from-gold to-gold-600 hover:from-gold-600 hover:to-gold-700 text-luxury-black">
                    Выбрать план
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-8 bg-luxury-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-montserrat font-bold mb-6 bg-gradient-to-r from-gold to-gold-300 bg-clip-text text-transparent">
            СВЯЗАТЬСЯ С НАМИ
          </h2>
          <p className="text-xl text-luxury-platinum mb-12">
            Готовы присоединиться к элитному сообществу? Наши специалисты помогут выбрать подходящий уровень членства
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-gradient-to-br from-gold to-gold-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="text-luxury-black" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gold">VIP-линия</h3>
              <p className="text-luxury-platinum">+7 (495) 123-45-67</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-gold to-gold-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="text-luxury-black" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gold">Эксклюзивная почта</h3>
              <p className="text-luxury-platinum">elite@millionaires-club.com</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-gold to-gold-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" className="text-luxury-black" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gold">Адрес клуба</h3>
              <p className="text-luxury-platinum">Москва, Красная площадь, 1</p>
            </div>
          </div>
          
          <Button className="bg-gradient-to-r from-gold to-gold-600 hover:from-gold-600 hover:to-gold-700 text-luxury-black font-semibold px-12 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
            <Icon name="Calendar" className="mr-3" size={24} />
            Записаться на встречу
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-charcoal py-12 px-8 border-t border-gold/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <img 
                src="/img/d19d6df0-a6b4-40d0-9ea4-64c10ec3e613.jpg" 
                alt="Millionaires Club Crown" 
                className="w-10 h-10 rounded-full object-cover border border-gold"
              />
              <span className="text-xl font-montserrat font-bold text-gold">MILLIONAIRES CLUB</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-luxury-platinum mb-2">Эксклюзивное сообщество для элиты</p>
              <p className="text-sm text-luxury-platinum/70">© 2024 Millionaires Club. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;