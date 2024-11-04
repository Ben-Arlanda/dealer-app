'use client';

import './globals.css';
import { Card } from './components/card';
import { useState } from 'react';

export default function Home() {
  const [activeCard, setActiveCard] = useState(1);
  const cards = [
    {
      id: 0,
      title: 'Heading 1',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto illo eos unde molestiae voluptas quaerat totam ducimus amet cumque delectus qui sed iste',
      image: '/brisbane_vgpzva.jpg',
    },
    {
      id: 1,
      title: 'Heading 2',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto illo eos unde molestiae voluptas quaerat totam ducimus amet cumque delectus qui sed iste',
      image: '/brisbane_vgpzva.jpg',
    },
    {
      id: 2,
      title: 'Heading 3',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto illo eos unde molestiae ',
      image: '/brisbane_vgpzva.jpg',
      extraText:
        'Architecto illo eos unde molestiae voluptas quaerat totam ducimus amet cumque delectus qui sed iste',
    },
  ];

  const handleClick = (id: number) => {
    setActiveCard(id);
  };

  return (
    <div>
      <section>
        <div className="relative">
          <img
            src="/ford-ranger_rd5m4t.jpg"
            alt="Ford Ranger"
            className="min-h-48 object-cover w-screen 2xl:h-[80vh]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="absolute inset-1 flex flex-col justify-center items-center text-center text-white">
            <h1 className="md:text-3xl 2xl:text-6xl text-base font-bold md:mb-4 mt-2 transition-all duration-300 ease-in-out mb-1">
              Welcome to G Automotive
            </h1>
            <p className="max-w-lg md:mb-5 mb-2 md:text-xs text-xxs w-auto h-auto overflow-hidden mr-6 ml-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto illo eos unde molestiae voluptas quaerat totam ducimus
              amet cumque delectus qui sed iste, reprehenderit ratione magni
              necessitatibus sunt. Recusandae, adipisci! Lorem ipsum dolor sit
              amet consectetur adipisicing elit amet consectetur adipisicing.
            </p>
            <button
              className="bg-indigo-500 rounded-2xl md:text-xs text-xxs pr-7 pl-7 pt-1.5 pb-1.5 font-semibold mb-3 transition-transform transform hover:scale-105"
              type="button"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center">
        <div className="flex flex-col md:flex-row md:py-6 space-y-8 md:space-x-10 md:space-y-0 mt-6 mb-6">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              isActive={activeCard === card.id}
              onClick={() => handleClick(card.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
