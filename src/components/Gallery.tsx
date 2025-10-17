import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'before-after' | 'workspace' | 'team'>('before-after');

  const beforeAfterImages = [
    {
      before: 'https://images.pexels.com/photos/3807319/pexels-photo-3807319.jpeg?auto=compress&cs=tinysrgb&w=600',
      after: 'https://images.pexels.com/photos/34329583/pexels-photo-34329583.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Revisão de Motor'
    },
    {
      before: 'https://images.pexels.com/photos/6870318/pexels-photo-6870318.jpeg?auto=compress&cs=tinysrgb&w=600',
      after: 'https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Sistema de Freios'
    },
    {
      before: 'https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=600',
      after: 'https://images.pexels.com/photos/3964342/pexels-photo-3964342.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Elétrica Automotiva'
    }
  ];

  const workspaceImages = [
    {
      url: 'https://images.pexels.com/photos/34329583/pexels-photo-34329583.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Área Principal da Oficina'
    },
    {
      url: 'https://images.pexels.com/photos/4480453/pexels-photo-4480453.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Equipamentos Modernos'
    },
    {
      url: 'https://images.pexels.com/photos/6870321/pexels-photo-6870321.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Área de Diagnóstico'
    },
    {
      url: 'https://images.pexels.com/photos/5835325/pexels-photo-5835325.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Bancada de Trabalho'
    }
  ];

  const teamImages = [
    {
      url: 'https://images.pexels.com/photos/4489737/pexels-photo-4489737.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Equipe Técnica Especializada'
    },
    {
      url: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg',
      title: 'Mecânico Experiente'
    },
    {
      url: 'https://images.pexels.com/photos/3964341/pexels-photo-3964341.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Especialista em Motores'
    }
  ];

  const openImageModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    let maxImages = 0;
    if (activeTab === 'before-after') maxImages = beforeAfterImages.length;
    else if (activeTab === 'workspace') maxImages = workspaceImages.length;
    else if (activeTab === 'team') maxImages = teamImages.length;

    if (direction === 'prev') {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : maxImages - 1);
    } else {
      setSelectedImage(selectedImage < maxImages - 1 ? selectedImage + 1 : 0);
    }
  };

  const getCurrentImage = () => {
    if (selectedImage === null) return null;
    
    if (activeTab === 'before-after') {
      return beforeAfterImages[selectedImage];
    } else if (activeTab === 'workspace') {
      return workspaceImages[selectedImage];
    } else {
      return teamImages[selectedImage];
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Galeria de Fotos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça nosso ambiente de trabalho, equipe especializada e alguns dos 
            trabalhos realizados com excelência para nossos clientes.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('before-after')}
              className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                activeTab === 'before-after'
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-600 hover:text-orange-500'
              }`}
            >
              Antes e Depois
            </button>
            <button
              onClick={() => setActiveTab('workspace')}
              className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                activeTab === 'workspace'
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-600 hover:text-orange-500'
              }`}
            >
              Ambiente
            </button>
            <button
              onClick={() => setActiveTab('team')}
              className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                activeTab === 'team'
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-600 hover:text-orange-500'
              }`}
            >
              Equipe
            </button>
          </div>
        </div>

        {/* Before/After Gallery */}
        {activeTab === 'before-after' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beforeAfterImages.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{item.title}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-2 text-center">Antes</p>
                      <img 
                        src={item.before}
                        alt={`${item.title} - Antes`}
                        className="w-full h-32 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openImageModal(index)}
                      />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-2 text-center">Depois</p>
                      <img 
                        src={item.after}
                        alt={`${item.title} - Depois`}
                        className="w-full h-32 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => openImageModal(index)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Workspace Gallery */}
        {activeTab === 'workspace' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {workspaceImages.map((item, index) => (
              <div key={index} className="group cursor-pointer" onClick={() => openImageModal(index)}>
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src={item.url}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <h3 className="font-semibold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Team Gallery */}
        {activeTab === 'team' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamImages.map((item, index) => (
              <div key={index} className="group cursor-pointer" onClick={() => openImageModal(index)}>
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <img 
                    src={item.url}
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                    <div className="p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image Content */}
            <div className="bg-white rounded-lg overflow-hidden">
              {activeTab === 'before-after' && getCurrentImage() && (
                <div className="p-6">
                  <h3 className="text-xl font-bold text-center mb-6">{(getCurrentImage() as any).title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <p className="text-gray-500 mb-2">Antes</p>
                      <img 
                        src={(getCurrentImage() as any).before}
                        alt="Antes"
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500 mb-2">Depois</p>
                      <img 
                        src={(getCurrentImage() as any).after}
                        alt="Depois"
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              )}

              {(activeTab === 'workspace' || activeTab === 'team') && getCurrentImage() && (
                <div>
                  <img 
                    src={(getCurrentImage() as any).url}
                    alt={(getCurrentImage() as any).title}
                    className="w-full h-96 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-center">{(getCurrentImage() as any).title}</h3>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;