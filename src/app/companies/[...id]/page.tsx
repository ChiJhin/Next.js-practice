import React from 'react';
import Header from '../../components/header';
export interface PageProps {
  params: { id: string[] };
}

export default function Page({ params }: PageProps) {
  return (
    <>
      <Header>Company ({String(params.id)})</Header>
    </>
  );
}
