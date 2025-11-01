"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LampContainer } from '@/components/ui/lamp';
import { MenuBar } from '@/components/ui/bottom-menu';
import { Component as TypewriterTestimonial } from '@/components/ui/typewriter-testimonial';
import { TestimonialStack, Testimonial } from '@/components/ui/glass-testimonial-swiper';
import { Linkedin, Github, Mail, Users, Calendar, Book, HelpCircle } from 'lucide-react';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  const [department, setDepartment] = useState('');
  const [batch, setBatch] = useState('');
  const [showGoButton, setShowGoButton] = useState(false);

  const departmentBatches = {
    SWE: ['44', '45', '46'],
    NFE: ['253'],
    ENG: ['253']
  };

  const handleDepartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const dept = e.target.value;
    setDepartment(dept);
    setBatch('');
    setShowGoButton(false);
  };

  const handleBatchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedBatch = e.target.value;
    setBatch(selectedBatch);
    setShowGoButton(!!department && !!selectedBatch);
  };

  const handleGo = () => {
    if (department && batch) {
      // Use absolute path to avoid confusion
      const baseUrl = window.location.origin;
      window.location.href = `${baseUrl}/${department.toLowerCase()}/batch-${batch}/index-${department.toLowerCase()}-batch-${batch}.html`;
    }
  };

  // Navigation items
  const navItems = [
    {
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...props}>
          <title>about</title>
          <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor">
            <path d="M9,1.75C4.996,1.75,1.75,4.996,1.75,9c0,1.319,.358,2.552,.973,3.617,.43,.806-.053,2.712-.973,3.633,1.25,.068,2.897-.497,3.633-.973,.489,.282,1.264,.656,2.279,.848,.433,.082,.881,.125,1.338,.125,4.004,0,7.25-3.246,7.25-7.25S13.004,1.75,9,1.75Z" />
          </g>
        </svg>
      ),
      label: "About"
    },
    {
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...props}>
          <title>courses</title>
          <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor">
            <path d="M1.75,5.75l6.767,3.733c.301,.166,.665,.166,.966,0l6.767-3.733" />
            <rect x="1.75" y="3.25" width="14.5" height="11.5" rx="2" ry="2" transform="translate(18 18) rotate(180)" />
          </g>
        </svg>
      ),
      label: "Courses"
    },
    {
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...props}>
          <title>developers</title>
          <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor">
            <line x1="3.75" y1="6.25" x2="15.25" y2="6.25" />
            <line x1="2.75" y1="11.75" x2="14.25" y2="11.75" />
            <line x1="7.633" y1="2.75" x2="5.289" y2="15.25" />
            <line x1="12.711" y1="2.75" x2="10.367" y2="15.25" />
          </g>
        </svg>
      ),
      label: "Developers"
    },
    {
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...props}>
          <title>testimonials</title>
          <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor">
            <path d="M15.25,11.75v1.5c0,1.105-.895,2-2,2H4.75c-1.105,0-2-.895-2-2v-1.5" />
            <polyline points="12.5 6.25 9 2.75 5.5 6.25" />
            <line x1="9" y1="2.75" x2="9" y2="10.25" />
          </g>
        </svg>
      ),
      label: "Testimonials"
    }
  ];

  // Typewriter testimonials data
  const typewriterTestimonials = [
    {
      image: '/images/sayma1.jpg',
      audio: 'audio_1.mp3',
      text: 'As fellow developers and students, we\'re committed to maintaining Eduplex as a free, ad-free platform - because education should be accessible, not monetized.',
      name: 'Sayma Ferdousi',
      jobtitle: 'SWE Batch 45',
    },
    {
      image: '/images/tafrin2.jpg',
      audio: 'audio_2.mp3',
      text: 'We built Eduplex to transform how DIU students access academic resources - creating a seamless, intuitive platform that bridges the gap between classroom learning and digital accessibility.',
      name: 'Tafrin',
      jobtitle: 'SWE Batch 44',
    },
    {
      image: '/images/nay.jpg',
      audio: 'audio_3.mp3',
      text: 'Our team faced the same academic challenges you do. Eduplex is our solution to the problems we wish someone had solved for us.',
      name: 'Mahtabul Al Nahiyan',
      jobtitle: 'SWE Batch 45',
    },
    { 
      image: '/images/rodela.jpg',
      audio: 'audio_4.mp3',
      text: 'We\'re working on AI-powered study assistants and real-time collaboration tools to make Eduplex your complete academic companion.',
      name: 'Nabila Rahman Rodela',
      jobtitle: 'SWE Batch 46',
    },
    {
      image: '/images/eashan.jpg',
      audio: 'audio_5.mp3',
      text: 'Every line of code we write is dedicated to making your academic journey smoother and more successful.',
      name: 'Golam Morshed Eashan',
      jobtitle: 'SWE Batch 45',
    },
  ];

  // Glass testimonials data
  const glassTestimonials: Testimonial[] = [
    {
      id: 1,
      initials: 'SH',
      name: 'Sakib Hasan',
      role: 'SWE Batch 45',
      quote: "Eduplex helped me ace my midterms with its well-organized slides and practice questions!",
      tags: [{ text: 'SWE', type: 'featured' as const }],
      stats: [{ iconName: 'Users', text: 'DIU Student' }, { iconName: 'Calendar', text: '2025' }],
      avatarGradient: 'linear-gradient(135deg, #5e6ad2, #8b5cf6)',
    },
    {
      id: 2,
      initials: 'NJ',
      name: 'Nusrat Jahan',
      role: 'NFE Batch 253',
      quote: "As an NFE student, I finally found a platform that speaks my language. Thank you!",
      tags: [{ text: 'NFE', type: 'featured' as const }],
      stats: [{ iconName: 'Users', text: 'DIU Student' }],
      avatarGradient: 'linear-gradient(135deg, #10b981, #059669)',
    },
    {
      id: 3,
      initials: 'TR',
      name: 'Tahmid Rahman',
      role: 'ENG Batch 253',
      quote: "The ENG materials are gold. Highly recommended for literature students.",
      tags: [{ text: 'ENG', type: 'featured' as const }],
      stats: [{ iconName: 'Calendar', text: '2025' }],
      avatarGradient: 'linear-gradient(135deg, #ec4899, #d946ef)',
    },
  ];

  return (
    <main className="min-h-screen bg-[#0B0E1A]">
      {/* Vercel Speed Insights for performance monitoring */}
      <SpeedInsights />
      
      {/* Floating Navigation Bar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <MenuBar items={navItems} />
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Welcome to <br /> Eduplex
          </motion.h1>
          <motion.p
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
            className="mt-4 text-center text-lg text-slate-400 md:text-xl max-w-2xl"
          >
            Platform for DIU Students - SWE, NFE & English Departments
          </motion.p>
          {/* Department and Batch Selector */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}
            className="mt-8 flex flex-col md:flex-row gap-4 items-center bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
          >
            <select
              value={department}
              onChange={handleDepartmentChange}
              className="px-4 py-2 bg-slate-800 text-white rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <option value="">Select Department</option>
              <option value="SWE">Software Engineering (SWE)</option>
              <option value="NFE">Nutrition & Food Engineering (NFE)</option>
              <option value="ENG">English (ENG)</option>
            </select>

            <select
              value={batch}
              onChange={handleBatchChange}
              disabled={!department}
              className="px-4 py-2 bg-slate-800 text-white rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 disabled:opacity-50"
            >
              <option value="">Select Batch</option>
              {department && departmentBatches[department as keyof typeof departmentBatches]?.map((batchOption) => (
                <option key={batchOption} value={batchOption}>
                  Batch {batchOption}
                </option>
              ))}
            </select>

            {showGoButton && (
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                onClick={handleGo}
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg"
              >
                Go →
              </motion.button>
            )}
          </motion.div>
        </LampContainer>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#001F3F] to-[#000A1F] relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center text-white mb-4"
          >
            About <span className="bg-gradient-to-r from-[#00E0FF] to-[#00FFA3] bg-clip-text text-transparent">Eduplex</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-[#00E0FF] to-[#00FFA3] mx-auto mb-12 rounded-full"
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-center text-slate-300 max-w-3xl mx-auto mb-16"
          >
            Eduplex is the ultimate platform for Daffodil International University students, 
            providing comprehensive resources, study materials, and community support for 
            Software Engineering, Nutrition & Food Engineering, and English departments.
          </motion.p>

         </div>
      </section>

      {/* Course Section */}
      <section id="courses" className="py-20 px-4 md:px-8 lg:px-16 bg-[#0B0E1A] relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[clamp(1.8rem,4vw,2.5rem)] font-bold text-center text-white mb-4"
          >
            <span className="bg-gradient-to-r from-[#00E0FF] to-[#00FFA3] bg-clip-text text-transparent">
              Our Courses & Resources
            </span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-[#00E0FF] to-[#00FFA3] mx-auto mb-12 rounded-full"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "3", label: "Departments", icon: "🎓", delay: 0.1 },
              { number: "6", label: "Batches", icon: "👥", delay: 0.2 },
              { number: "200+", label: "Slides", icon: "📚", delay: 0.3 },
              { number: "100+", label: "Questions", icon: "❓", delay: 0.4 }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: stat.delay }}
                whileHover={{ scale: 1.03 }}
                className="bg-[rgba(255,255,255,0.08)] backdrop-blur-xl border border-[rgba(0,255,255,0.1)] rounded-2xl p-6 text-center shadow-[0_0_20px_rgba(0,255,255,0.15)] hover:shadow-[0_0_25px_rgba(0,255,255,0.25)]"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-[clamp(2rem,5vw,3rem)] font-extrabold text-[#00E0FF] mb-2">{stat.number}</div>
                <div className="text-[clamp(0.9rem,2vw,1.25rem)] text-[#A8B2D1]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Developers */}
      <section id="developers" className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#000A1F] to-[#001F3F]">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
          >
            Meet Our <span className="bg-gradient-to-r from-[#00E0FF] to-[#00FFA3] bg-clip-text text-transparent">Developers</span>
          </motion.h2>
          <TypewriterTestimonial testimonials={typewriterTestimonials} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 md:px-8 lg:px-16 bg-[#0B0E1A] relative">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
          >
            What Our <span className="bg-gradient-to-r from-[#00E0FF] to-[#00FFA3] bg-clip-text text-transparent">Students Say</span>
          </motion.h2>
          <TestimonialStack testimonials={glassTestimonials} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B0E1A] border-t border-[rgba(0,255,255,0.1)] relative overflow-hidden">
        <div className="h-px w-full bg-gradient-to-r from-[#00E0FF] to-[#00FFA3]"></div>
        
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo and Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center md:text-left"
            >
              <h3 className="text-[clamp(1.3rem,3vw,1.8rem)] font-bold text-white">Eduplex</h3>
              <p className="text-[clamp(0.8rem,2vw,1rem)] text-[#A8B2D1] mt-2">Empowering DIU Learners</p>
            </motion.div>
            
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap justify-center gap-6"
            >
              {['About', 'Courses', 'Developers', 'Testimonials'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-[clamp(0.85rem,2vw,1rem)] text-[#A8B2D1] hover:text-[#00E0FF] transition-colors tracking-wide"
                >
                  {link}
                </a>
              ))}
            </motion.div>
            
            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-6"
            >
              <a href="#" className="text-[#A8B2D1] hover:text-[#00E0FF] transition-colors drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-[#A8B2D1] hover:text-[#00E0FF] transition-colors drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
                <Github size={24} />
              </a>
              <a href="#" className="text-[#A8B2D1] hover:text-[#00E0FF] transition-colors drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
                <Mail size={24} />
              </a>
            </motion.div>
          </div>
          
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mt-8 pt-8 border-t border-[rgba(255,255,255,0.1)]"
          >
            <p className="text-[#6B7280] text-sm">© 2025 Eduplex | A Project of UNLEFT LLC</p>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
/*"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LampContainer } from '@/components/ui/lamp';
import { MenuBar } from '@/components/ui/bottom-menu';
import { Component as TypewriterTestimonial } from '@/components/ui/typewriter-testimonial';
import { TestimonialStack, Testimonial } from '@/components/ui/glass-testimonial-swiper';
import { Linkedin, Github, Mail, Users, Calendar, Book, HelpCircle } from 'lucide-react';

export default function Home() {
  const [department, setDepartment] = useState('');
  const [batch, setBatch] = useState('');
  const [showGoButton, setShowGoButton] = useState(false);

  const departmentBatches = {
    SWE: ['44', '45', '46'],
    NFE: ['253'],
    ENG: ['253']
  };

  const handleDepartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const dept = e.target.value;
    setDepartment(dept);
    setBatch('');
    setShowGoButton(false);
  };

  const handleBatchChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedBatch = e.target.value;
    setBatch(selectedBatch);
    setShowGoButton(!!department && !!selectedBatch);
  };

  const handleGo = () => {
    if (department && batch) {
      // Use absolute path to avoid confusion
const baseUrl = window.location.origin;
window.location.href = `${baseUrl}/${department.toLowerCase()}/batch-${batch}/index-${department.toLowerCase()}-batch-${batch}.html`;
    
   
    }
  };

  // Navigation items
  const navItems = [
    {
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...props}>
          <title>about</title>
          <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor">
            <path d="M9,1.75C4.996,1.75,1.75,4.996,1.75,9c0,1.319,.358,2.552,.973,3.617,.43,.806-.053,2.712-.973,3.633,1.25,.068,2.897-.497,3.633-.973,.489,.282,1.264,.656,2.279,.848,.433,.082,.881,.125,1.338,.125,4.004,0,7.25-3.246,7.25-7.25S13.004,1.75,9,1.75Z" />
          </g>
        </svg>
      ),
      label: "About"
    },
    {
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...props}>
          <title>courses</title>
          <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor">
            <path d="M1.75,5.75l6.767,3.733c.301,.166,.665,.166,.966,0l6.767-3.733" />
            <rect x="1.75" y="3.25" width="14.5" height="11.5" rx="2" ry="2" transform="translate(18 18) rotate(180)" />
          </g>
        </svg>
      ),
      label: "Courses"
    },
    {
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...props}>
          <title>developers</title>
          <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor">
            <line x1="3.75" y1="6.25" x2="15.25" y2="6.25" />
            <line x1="2.75" y1="11.75" x2="14.25" y2="11.75" />
            <line x1="7.633" y1="2.75" x2="5.289" y2="15.25" />
            <line x1="12.711" y1="2.75" x2="10.367" y2="15.25" />
          </g>
        </svg>
      ),
      label: "Developers"
    },
    {
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...props}>
          <title>testimonials</title>
          <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor">
            <path d="M15.25,11.75v1.5c0,1.105-.895,2-2,2H4.75c-1.105,0-2-.895-2-2v-1.5" />
            <polyline points="12.5 6.25 9 2.75 5.5 6.25" />
            <line x1="9" y1="2.75" x2="9" y2="10.25" />
          </g>
        </svg>
      ),
      label: "Testimonials"
    }
  ];

  // Typewriter testimonials data
  
const typewriterTestimonials = [
  {
    image: '/images/sayma1.jpg',
    audio: 'audio_1.mp3',
    text: 'As fellow developers and students, we\'re committed to maintaining Eduplex as a free, ad-free platform - because education should be accessible, not monetized.',
    name: 'Sayma Ferdousi',
    jobtitle: 'SWE Batch 45',
  },
  {
    image: '/images/tafrin2.jpg',
    audio: 'audio_2.mp3',
    text: 'We built Eduplex to transform how DIU students access academic resources - creating a seamless, intuitive platform that bridges the gap between classroom learning and digital accessibility.',
    name: 'Tafrin',
    jobtitle: 'SWE Batch 44',
  },
  {
    image: '/images/nay.jpg',
    audio: 'audio_3.mp3',
    text: 'Our team faced the same academic challenges you do. Eduplex is our solution to the problems we wish someone had solved for us.',
    name: 'Mahtabul Al Nahiyan',
    jobtitle: 'SWE Batch 45',
  },
  { 
    image: '/images/rodela.jpg',
    audio: 'audio_4.mp3',
    text: 'We\'re working on AI-powered study assistants and real-time collaboration tools to make Eduplex your complete academic companion.',
    name: 'Nabila Rahman Rodela',
    jobtitle: 'SWE Batch 46',
  },
  {
    image: '/images/eashan.jpg',
    audio: 'audio_5.mp3',
    text: 'Every line of code we write is dedicated to making your academic journey smoother and more successful.',
    name: 'Golam Morshed Eashan',
    jobtitle: 'SWE Batch 45',
  },
];

  

  // Glass testimonials data
  const glassTestimonials: Testimonial[] = [
    {
      id: 1,
      initials: 'SH',
      name: 'Sakib Hasan',
      role: 'SWE Batch 45',
      quote: "Eduplex helped me ace my midterms with its well-organized slides and practice questions!",
      tags: [{ text: 'SWE', type: 'featured' as const }],
      stats: [{ iconName: 'Users', text: 'DIU Student' }, { iconName: 'Calendar', text: '2025' }],
      avatarGradient: 'linear-gradient(135deg, #5e6ad2, #8b5cf6)',
    },
    {
      id: 2,
      initials: 'NJ',
      name: 'Nusrat Jahan',
      role: 'NFE Batch 253',
      quote: "As an NFE student, I finally found a platform that speaks my language. Thank you!",
      tags: [{ text: 'NFE', type: 'featured' as const }],
      stats: [{ iconName: 'Users', text: 'DIU Student' }],
      avatarGradient: 'linear-gradient(135deg, #10b981, #059669)',
    },
    {
      id: 3,
      initials: 'TR',
      name: 'Tahmid Rahman',
      role: 'ENG Batch 253',
      quote: "The ENG materials are gold. Highly recommended for literature students.",
      tags: [{ text: 'ENG', type: 'featured' as const }],
      stats: [{ iconName: 'Calendar', text: '2025' }],
      avatarGradient: 'linear-gradient(135deg, #ec4899, #d946ef)',
    },
  ];

  return (
    <main className="min-h-screen bg-[#0B0E1A]">
      
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <MenuBar items={navItems} />
      </nav>


      <section id="hero" className="relative">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Welcome to <br /> Eduplex
          </motion.h1>
          <motion.p
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
            className="mt-4 text-center text-lg text-slate-400 md:text-xl max-w-2xl"
          >
            Platform for DIU Students - SWE, NFE & English Departments
          </motion.p>
        
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: "easeInOut" }}
            className="mt-8 flex flex-col md:flex-row gap-4 items-center bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
          >
            <select
              value={department}
              onChange={handleDepartmentChange}
              className="px-4 py-2 bg-slate-800 text-white rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <option value="">Select Department</option>
              <option value="SWE">Software Engineering (SWE)</option>
              <option value="NFE">Nutrition & Food Engineering (NFE)</option>
              <option value="ENG">English (ENG)</option>
            </select>

            <select
              value={batch}
              onChange={handleBatchChange}
              disabled={!department}
              className="px-4 py-2 bg-slate-800 text-white rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400 disabled:opacity-50"
            >
              <option value="">Select Batch</option>
              {department && departmentBatches[department as keyof typeof departmentBatches]?.map((batchOption) => (
                <option key={batchOption} value={batchOption}>
                  Batch {batchOption}
                </option>
              ))}
            </select>

            {showGoButton && (
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                onClick={handleGo}
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg"
              >
                Go →
              </motion.button>
            )}
          </motion.div>
        </LampContainer>
      </section>

    
      <section id="about" className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#001F3F] to-[#000A1F] relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center text-white mb-4"
          >
            About <span className="bg-gradient-to-r from-[#00E0FF] to-[#00FFA3] bg-clip-text text-transparent">Eduplex</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-[#00E0FF] to-[#00FFA3] mx-auto mb-12 rounded-full"
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-center text-slate-300 max-w-3xl mx-auto mb-16"
          >
            Eduplex is the ultimate platform for Daffodil International University students, 
            providing comprehensive resources, study materials, and community support for 
            Software Engineering, Nutrition & Food Engineering, and English departments.
          </motion.p>

         </div>
      </section>

    
      <section id="courses" className="py-20 px-4 md:px-8 lg:px-16 bg-[#0B0E1A] relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[clamp(1.8rem,4vw,2.5rem)] font-bold text-center text-white mb-4"
          >
            <span className="bg-gradient-to-r from-[#00E0FF] to-[#00FFA3] bg-clip-text text-transparent">
              Our Courses & Resources
            </span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-[#00E0FF] to-[#00FFA3] mx-auto mb-12 rounded-full"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "3", label: "Departments", icon: "🎓", delay: 0.1 },
              { number: "6", label: "Batches", icon: "👥", delay: 0.2 },
              { number: "200+", label: "Slides", icon: "📚", delay: 0.3 },
              { number: "100+", label: "Questions", icon: "❓", delay: 0.4 }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: stat.delay }}
                whileHover={{ scale: 1.03 }}
                className="bg-[rgba(255,255,255,0.08)] backdrop-blur-xl border border-[rgba(0,255,255,0.1)] rounded-2xl p-6 text-center shadow-[0_0_20px_rgba(0,255,255,0.15)] hover:shadow-[0_0_25px_rgba(0,255,255,0.25)]"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-[clamp(2rem,5vw,3rem)] font-extrabold text-[#00E0FF] mb-2">{stat.number}</div>
                <div className="text-[clamp(0.9rem,2vw,1.25rem)] text-[#A8B2D1]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      <section id="developers" className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#000A1F] to-[#001F3F]">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
          >
            Meet Our <span className="bg-gradient-to-r from-[#00E0FF] to-[#00FFA3] bg-clip-text text-transparent">Developers</span>
          </motion.h2>
          <TypewriterTestimonial testimonials={typewriterTestimonials} />
        </div>
      </section>

      
      <section id="testimonials" className="py-20 px-4 md:px-8 lg:px-16 bg-[#0B0E1A] relative">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
          >
            What Our <span className="bg-gradient-to-r from-[#00E0FF] to-[#00FFA3] bg-clip-text text-transparent">Students Say</span>
          </motion.h2>
          <TestimonialStack testimonials={glassTestimonials} />
        </div>
      </section>

      
      <footer className="bg-[#0B0E1A] border-t border-[rgba(0,255,255,0.1)] relative overflow-hidden">
        <div className="h-px w-full bg-gradient-to-r from-[#00E0FF] to-[#00FFA3]"></div>
        
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
           
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center md:text-left"
            >
              <h3 className="text-[clamp(1.3rem,3vw,1.8rem)] font-bold text-white">Eduplex</h3>
              <p className="text-[clamp(0.8rem,2vw,1rem)] text-[#A8B2D1] mt-2">Empowering DIU Learners</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap justify-center gap-6"
            >
              {['About', 'Courses', 'Developers', 'Testimonials'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-[clamp(0.85rem,2vw,1rem)] text-[#A8B2D1] hover:text-[#00E0FF] transition-colors tracking-wide"
                >
                  {link}
                </a>
              ))}
            </motion.div>
            
    
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-6"
            >
              <a href="#" className="text-[#A8B2D1] hover:text-[#00E0FF] transition-colors drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-[#A8B2D1] hover:text-[#00E0FF] transition-colors drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
                <Github size={24} />
              </a>
              <a href="#" className="text-[#A8B2D1] hover:text-[#00E0FF] transition-colors drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
                <Mail size={24} />
              </a>
            </motion.div>
          </div>
          
        
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mt-8 pt-8 border-t border-[rgba(255,255,255,0.1)]"
          >
            <p className="text-[#6B7280] text-sm">© 2025 Eduplex | A Project of UNLEFT LLC</p>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}*/