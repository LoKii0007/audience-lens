import React from 'react';
import HeroSection from '@/components/features/home/HeroSection';
import AnalysisSection from '@/components/features/home/AnalysisSection';

export const metadata = {
  title: 'Audience Lens - AI-Powered YouTube Comment Analysis',
  description: 'Decode the comment section. Understand YouTube comments with AI-powered analysis. Extract sentiment, topics, and insights instantly. Perfect for teachers, travelers, and content creators.',
  keywords: [
    'YouTube comment analysis',
    'AI comment analyzer',
    'sentiment analysis',
    'comment insights',
    'YouTube analytics',
    'comment sentiment',
    'video comments',
    'audience analysis'
  ],
  authors: [{ name: 'Audience Lens' }],
  creator: 'Audience Lens',
  publisher: 'Audience Lens',
  openGraph: {
    title: 'Audience Lens - AI-Powered YouTube Comment Analysis',
    description: 'Decode the comment section. Understand YouTube comments with AI-powered analysis. Extract sentiment, topics, and insights instantly.',
    url: 'https://audiencelens.com',
    siteName: 'Audience Lens',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Audience Lens - AI-Powered YouTube Comment Analysis',
    description: 'Decode the comment section. Understand YouTube comments with AI-powered analysis.',
    creator: '@audiencelens',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-[#050A18] text-slate-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      <HeroSection />
      <AnalysisSection />
    </div>
  );
}
