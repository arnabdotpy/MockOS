'use client';
import React from 'react';
import Navbar from '@/components/shared/navbar/navbar';
import CodeBox from '@/components/home/CodeBox/CodeBox';
import Dock from '@/components/home/Dock/Dock';
import Image from 'next/image';
import CalendarComponent from '@/components/home/CodeBox/CalendarComponent';

function Home() {
  return (
    <div className="absolute h-screen w-screen overflow-hidden">
      <div style={{ height: '100vh', width: '100vw', position: 'absolute' }}>
        <Image
          src="/bg.jpg"
          alt="Wallpaper"
          fill 
          style={{ objectFit: 'fill' }}
          priority 
        />
      </div>
      <Navbar />
      <CodeBox toggleWindow={function (): void {
        throw new Error('Function not implemented.');
      } } isClosed={false} />
      <CalendarComponent/>
      <Dock />
    </div>
  );
}

export default Home;
