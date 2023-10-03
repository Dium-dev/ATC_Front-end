'use client';
import { usePathname } from 'next/navigation';
import { BuyDetail } from './buy_detail';

export default function Dinamica() {
  const Pathname = usePathname();

  const RouteName = Pathname.split('/').pop() || '';

  return <BuyDetail />;
}
