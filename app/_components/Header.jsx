import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between p-5 border-b-2 border-purple border-dashed">
      <Image src={"./logo.svg"} alt="Logo" width={60} height={60} />

      <Button className="flex gap-2">
        <Plus className="h-5 w-5" /> Add Group
      </Button>
    </div>
  );
}

export default Header