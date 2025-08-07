'use client';

import dynamic from 'next/dynamic';

const CloseLest = dynamic(() => import('@/app/components/CloseLest'), { ssr: false });

export default function CloseLestPage() {
  return <CloseLest />;
}