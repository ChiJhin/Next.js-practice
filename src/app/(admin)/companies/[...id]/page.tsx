'use client';
import React, { useEffect } from 'react';
import Header from '@/app/components/header';
import { notFound } from 'next/navigation';
export interface PageProps {
  params: { id: string[] };
}

export default function Page({ params }: PageProps) {
  // useEffect(() => {
  //   const id = +params.id;
  //   if (Number.isNaN(id)) {
  //     notFound();
  //   }
  // });
  return (
    <>
      <Header>Company ({String(params.id)})</Header>
    </>
  );
}
