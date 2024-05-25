import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between p-3 border-b-2 border-purple border-dashed fixed top-0 w-full z-10 bg-white ">
      <Link href="/">
        <Image src={"/logo.svg"} alt="Logo" width={60} height={60} />
      </Link>

      <Link href={`/new`}>
        <Button className="flex gap-2 text-sm cursor-pointer">
          <Plus className="h-5 w-5" /> Add Book
        </Button>
      </Link>
    </div>
  );
}

export default Header