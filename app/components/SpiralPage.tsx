'use client';

import dynamic from 'next/dynamic';

const Spiral = dynamic(() => import('@/app/components/Spiral'), { ssr: false });

export default function SpiralPage() {
  return <Spiral />;
}