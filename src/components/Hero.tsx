import React from 'react';
import { ArrowRight, Shield, Clock, Wrench } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-orange-500/30 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-orange-500/30 rounded-full"></div>
        <div className="absolute bottom-40 left-32 w-16 h-16 border border-orange-500/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-orange-500/20 text-orange-500 rounded-full text-sm font-medium mb-4">
                <Shield className="h-4 w-4 mr-2" />
                Oficina Especializada
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Cuidamos do seu
              <span className="text-orange-500 block">Veículo</span>
              com Excelência
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Na ABARTH Automotiva, oferecemos serviços automotivos completos com mais de 15 anos de experiência. 
              Sua satisfação e segurança são nossa prioridade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={scrollToContact}
                className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Agendar Serviço
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              
              <a 
                href="https://wa.me/5511986816611"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-lg font-semibold transition-all duration-300"
              >
                WhatsApp
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Garantia</h3>
                  <p className="text-gray-400 text-sm">Em todos os serviços</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Agilidade</h3>
                  <p className="text-gray-400 text-sm">Entrega no prazo</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <Wrench className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Qualidade</h3>
                  <p className="text-gray-400 text-sm">Peças originais</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-orange-500/20 to-transparent rounded-2xl p-8">
              <img 
                src="https://images.pexels.com/photos/3807328/pexels-photo-3807328.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Mecânico trabalhando"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
              
              {/* Floating Stats */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">15+</div>
                  <div className="text-sm text-gray-600">Anos de Experiência</div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">1000+</div>
                  <div className="text-sm text-gray-600">Clientes Satisfeitos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;