import MagicButton from '@/app/components/magic-button';
import React from 'react';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <main>
      <h1 className="text-xl m-20">Dashboard Page</h1>
      <MagicButton />
    </main>
  );
}
