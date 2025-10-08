import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carlos Silva',
      location: 'São Paulo, SP',
      rating: 5,
      text: 'Excelente atendimento! Meu carro ficou novo depois da revisão completa. A equipe é muito profissional e o preço é justo. Recomendo para todos!',
      service: 'Revisão Completa'
    },
    {
      name: 'Ana Santos',
      location: 'Guarulhos, SP',
      rating: 5,
      text: 'Levei meu carro com problema no sistema elétrico e foram muito eficientes. Diagnóstico preciso e reparo rápido. Voltarei sempre!',
      service: 'Sistema Elétrico'
    },
    {
      name: 'João Oliveira',
      location: 'Osasco, SP',
      rating: 5,
      text: 'Profissionais competentes e honestos. Explicaram tudo o que precisava ser feito e cumpriram o prazo. Oficina de confiança!',
      service: 'Freios e Suspensão'
    },
    {
      name: 'Maria Costa',
      location: 'São Caetano, SP',
      rating: 5,
      text: 'Atendimento excepcional! Resolveram o problema do meu motor rapidamente e com garantia. Preço justo e qualidade comprovada.',
      service: 'Motor'
    },
    {
      name: 'Roberto Lima',
      location: 'Santo André, SP',
      rating: 5,
      text: 'Já sou cliente há 3 anos e nunca me decepcionei. Sempre muito atenciosos e fazem um trabalho impecável. Recomendo de olhos fechados!',
      service: 'Cliente Fiel'
    },
    {
      name: 'Fernanda Alves',
      location: 'São Bernardo, SP',
      rating: 5,
      text: 'Levei meu carro para alinhamento e balanceamento. Ficou perfeito! Agora não vibra mais e os pneus vão durar muito mais.',
      service: 'Alinhamento'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">O que nossos clientes dizem</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. 
            Veja alguns depoimentos de quem confia no nosso trabalho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-colors border border-white/10"
            >
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-orange-500 mb-4" />
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.location}</p>
                  <p className="text-xs text-orange-500 font-medium mt-1">{testimonial.service}</p>
                </div>
                
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-orange-500/20 border border-orange-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Sua Opinião é Importante!</h3>
            <p className="text-gray-300 mb-6">
              Já foi nosso cliente? Compartilhe sua experiência e ajude outros motoristas 
              a conhecerem nosso trabalho.
            </p>
            <a 
              href="https://wa.me/551198681661"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition-colors"
            >
              Deixar Depoimento
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-800">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">98%</div>
            <div className="text-gray-400">Satisfação dos Clientes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">1000+</div>
            <div className="text-gray-400">Clientes Atendidos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">15+</div>
            <div className="text-gray-400">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
            <div className="text-gray-400">Avaliações 5 Estrelas</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;