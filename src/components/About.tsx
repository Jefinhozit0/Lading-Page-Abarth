import React from 'react';
import { Users, Award, Clock, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sobre a <span className="text-orange-500">ABARTH Automotiva</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Há mais de 15 anos no mercado automotivo, a ABARTH Automotiva se consolidou como uma 
              das principais oficinas especializadas da região. Nossa missão é oferecer serviços de 
              qualidade superior, sempre priorizando a satisfação e segurança dos nossos clientes.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Contamos com uma equipe altamente qualificada e equipamentos de última geração para 
              diagnosticar e reparar veículos de todas as marcas. Nosso compromisso é com a 
              excelência em cada serviço prestado.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-8 w-8 text-orange-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-orange-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Clientes Atendidos</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-8 w-8 text-orange-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-8 w-8 text-orange-500" />
                </div>
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Dedicação</div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.pexels.com/photos/5835358/pexels-photo-5935358.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Oficina ABARTH"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="https://images.pexels.com/photos/4489737/pexels-photo-4489737.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Equipe técnica"
                className="w-full h-56 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img 
                src="https://images.pexels.com/photos/3964335/pexels-photo-3964335.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Equipamentos modernos"
                className="w-full h-56 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="https://images.pexels.com/photos/6870321/pexels-photo-6870321.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Área de trabalho"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Nossa Missão</h3>
            <p className="text-gray-600">
              Oferecer serviços automotivos de excelência, garantindo segurança, qualidade 
              e satisfação total dos nossos clientes.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Nossa Visão</h3>
            <p className="text-gray-600">
              Ser reconhecida como a melhor oficina automotiva da região, 
              referência em qualidade e inovação tecnológica.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Nossos Valores</h3>
            <p className="text-gray-600">
              Honestidade, transparência, qualidade, pontualidade e comprometimento 
              com a satisfação do cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;