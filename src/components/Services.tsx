import React, { useState } from 'react';
import { Settings, Zap, Gauge, Wrench, Car, Shield, ArrowRight, X } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: 'Revisão Completa',
      description: 'Manutenção preventiva para garantir o bom funcionamento do seu veículo',
      icon: Settings,
      image: 'https://images.pexels.com/photos/3964342/pexels-photo-3964342.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: {
        subtitle: 'Manutenção Preventiva Completa',
        fullDescription: 'Nossa revisão completa inclui verificação de todos os sistemas do veículo, troca de óleo e filtros, análise do sistema de freios, verificação da suspensão e muito mais.',
        services: [
          'Troca de óleo e filtros',
          'Verificação do sistema de freios',
          'Análise da suspensão e direção',
          'Teste do sistema elétrico',
          'Verificação de pneus e alinhamento',
          'Análise do sistema de arrefecimento'
        ],
        price: 'A partir de R$ 150,00',
        duration: '2-3 horas'
      }
    },
    {
      id: 2,
      title: 'Sistema Elétrico',
      description: 'Diagnóstico e reparo de problemas elétricos automotivos',
      icon: Zap,
      image: 'https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: {
        subtitle: 'Especialistas em Elétrica Automotiva',
        fullDescription: 'Contamos com equipamentos modernos para diagnóstico preciso de problemas elétricos, desde alternadores e baterias até sistemas de injeção eletrônica.',
        services: [
          'Teste de alternador e bateria',
          'Diagnóstico de injeção eletrônica',
          'Reparo de chicotes elétricos',
          'Instalação de acessórios',
          'Sistema de ignição',
          'Ar condicionado automotivo'
        ],
        price: 'A partir de R$ 80,00',
        duration: '1-4 horas'
      }
    },
    {
      id: 3,
      title: 'Freios',
      description: 'Manutenção e reparo completo do sistema de freios',
      icon: Shield,
      image: 'https://images.pexels.com/photos/6870318/pexels-photo-6870318.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: {
        subtitle: 'Segurança em Primeiro Lugar',
        fullDescription: 'Oferecemos serviços completos de freios, desde troca de pastilhas até revisão completa do sistema hidráulico, garantindo sua segurança.',
        services: [
          'Troca de pastilhas e discos',
          'Revisão do sistema hidráulico',
          'Sangria do sistema',
          'Troca de fluido de freio',
          'Regulagem de freio de mão',
          'Teste de eficiência'
        ],
        price: 'A partir de R$ 120,00',
        duration: '2-3 horas'
      }
    },
    {
      id: 4,
      title: 'Alinhamento e Balanceamento',
      description: 'Alinhamento e balanceamento para maior durabilidade dos pneus',
      icon: Gauge,
      image: 'https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: {
        subtitle: 'Economia e Conforto de Rodagem',
        fullDescription: 'Realizamos alinhamento computadorizado e balanceamento de rodas para garantir maior vida útil dos pneus e conforto na direção.',
        services: [
          'Alinhamento computadorizado',
          'Balanceamento de rodas',
          'Verificação de pneus',
          'Análise da suspensão',
          'Regulagem da geometria',
          'Teste de direção'
        ],
        price: 'A partir de R$ 60,00',
        duration: '1-2 horas'
      }
    },
    {
      id: 5,
      title: 'Motor',
      description: 'Diagnóstico e reparo de motores com tecnologia avançada',
      icon: Car,
      image: 'https://images.pexels.com/photos/3964341/pexels-photo-3964341.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: {
        subtitle: 'Especialistas em Motores',
        fullDescription: 'Nossa equipe especializada realiza desde pequenos ajustes até revisões completas de motor, utilizando equipamentos de última geração.',
        services: [
          'Retífica de motores',
          'Troca de correia dentada',
          'Reparo de cabeçote',
          'Sistema de injeção',
          'Troca de velas e bobinas',
          'Limpeza de bicos injetores'
        ],
        price: 'A partir de R$ 200,00',
        duration: '4-8 horas'
      }
    },
    {
      id: 6,
      title: 'Suspensão',
      description: 'Manutenção completa do sistema de suspensão',
      icon: Wrench,
      image: 'https://images.pexels.com/photos/5835325/pexels-photo-5835325.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: {
        subtitle: 'Conforto e Estabilidade',
        fullDescription: 'Realizamos manutenção completa do sistema de suspensão para garantir conforto, estabilidade e segurança na condução.',
        services: [
          'Troca de amortecedores',
          'Revisão de molas',
          'Coxins e buchas',
          'Batentes de suspensão',
          'Bieletas e terminais',
          'Teste de estabilidade'
        ],
        price: 'A partir de R$ 100,00',
        duration: '2-4 horas'
      }
    }
  ];

  const openServiceModal = (serviceId: number) => {
    setSelectedService(serviceId);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  const selectedServiceData = services.find(service => service.id === selectedService);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços automotivos com qualidade profissional 
            e preços justos para manter seu veículo sempre em perfeito estado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <button
                    onClick={() => openServiceModal(service.id)}
                    className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold transition-colors"
                  >
                    Saiba mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Modal */}
      {selectedService && selectedServiceData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedServiceData.image}
                alt={selectedServiceData.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={closeServiceModal}
                className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center mb-4">
                <selectedServiceData.icon className="h-8 w-8 text-orange-500 mr-3" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedServiceData.title}</h3>
                  <p className="text-orange-500 font-medium">{selectedServiceData.details.subtitle}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {selectedServiceData.details.fullDescription}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Serviços Inclusos:</h4>
                  <ul className="space-y-2">
                    {selectedServiceData.details.services.map((item, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Preço:</h4>
                    <p className="text-2xl font-bold text-orange-500">{selectedServiceData.details.price}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Tempo Estimado:</h4>
                    <p className="text-gray-600">{selectedServiceData.details.duration}</p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="https://wa.me/5511986816611"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors"
                    >
                      Agendar no WhatsApp
                    </a>
                    <button
                      onClick={() => {
                        closeServiceModal();
                        const element = document.getElementById('contact');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="inline-flex items-center justify-center px-6 py-3 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-lg font-semibold transition-colors"
                    >
                      Formulário de Contato
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;