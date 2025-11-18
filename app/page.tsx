'use client';

import { FadeUp } from '@/components/FadeUp';
import { StaggeredGrid } from '@/components/StaggeredGrid';
import { SectionTransition } from '@/components/SectionTransition';
import { motion } from 'framer-motion';

export default function Home() {
  const albums = [
    { title: 'Live Sessions Vol. 1', year: '2024', image: '🎸' },
    { title: 'Acoustic Nights', year: '2023', image: '🎵' },
    { title: 'Electric Dreams', year: '2022', image: '⚡' },
    { title: 'Studio Sessions', year: '2021', image: '🎹' },
  ];

  const upcomingShows = [
    { venue: 'Blue Note Jazz Club', date: 'Dec 15, 2024', city: 'New York' },
    { venue: 'The Troubadour', date: 'Dec 22, 2024', city: 'Los Angeles' },
    { venue: 'Paradise Rock Club', date: 'Jan 5, 2025', city: 'Boston' },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <SectionTransition className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Shaun Williamson
            </motion.h1>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Professional Musician & Performer
            </p>
          </FadeUp>
          
          <FadeUp delay={0.4}>
            <div className="flex gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors reflection"
              >
                Listen Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 glass hover:bg-blue-600/20 rounded-lg font-semibold transition-colors"
              >
                Book a Show
              </motion.button>
            </div>
          </FadeUp>
        </div>
      </SectionTransition>

      {/* About Section */}
      <SectionTransition id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              About the Artist
            </h2>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <div className="oled-card rounded-2xl p-8 md:p-12 reflection">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                With over a decade of experience performing across the globe, Shaun Williamson 
                brings a unique blend of contemporary and classic styles to every performance.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                From intimate acoustic sets to full-band electric performances, each show is 
                crafted to create an unforgettable experience for the audience.
              </p>
            </div>
          </FadeUp>
        </div>
      </SectionTransition>

      {/* Discography Section */}
      <SectionTransition id="music" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Discography
            </h2>
          </FadeUp>
          
          <StaggeredGrid 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            staggerDelay={0.1}
          >
            {albums.map((album) => (
              <motion.div
                key={album.title}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="oled-card rounded-xl p-6 reflection cursor-pointer"
              >
                <div className="text-6xl mb-4 text-center">{album.image}</div>
                <h3 className="text-xl font-semibold mb-2">{album.title}</h3>
                <p className="text-gray-400">{album.year}</p>
              </motion.div>
            ))}
          </StaggeredGrid>
        </div>
      </SectionTransition>

      {/* Tour Dates Section */}
      <SectionTransition id="tour" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              Upcoming Shows
            </h2>
          </FadeUp>
          
          <div className="space-y-4">
            {upcomingShows.map((show, index) => (
              <FadeUp key={show.venue} delay={index * 0.1}>
                <motion.div
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="oled-card rounded-xl p-6 reflection flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{show.venue}</h3>
                    <p className="text-gray-400">{show.city}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-blue-400 font-semibold">{show.date}</span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                    >
                      Tickets
                    </motion.button>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </SectionTransition>

      {/* Contact Section */}
      <SectionTransition id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Get in Touch
            </h2>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <p className="text-xl text-gray-300 mb-8">
              Interested in booking a show or collaboration?
            </p>
          </FadeUp>
          
          <FadeUp delay={0.4}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg font-semibold text-lg reflection"
            >
              Contact Me
            </motion.button>
          </FadeUp>
        </div>
      </SectionTransition>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-blue-900/30">
        <div className="max-w-6xl mx-auto text-center">
          <FadeUp>
            <p className="text-gray-400">
              © 2024 Shaun Williamson Music. All rights reserved.
            </p>
          </FadeUp>
        </div>
      </footer>
    </main>
  );
}
