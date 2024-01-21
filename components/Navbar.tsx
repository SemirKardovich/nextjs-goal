'use client'

import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import Logo from '@public/images/logo.svg'
import Link from 'next/link';
import { Navbar as Nav, NavbarBrand, Button } from 'flowbite-react'
import AddNewRestaurant from './AddNewRestaurant';
export default function Navbar() {
    const router = useRouter()
    const pathname = usePathname()
    return (
        <Nav fluid className='bg-slate-800'>
            <NavbarBrand as={Link} href="/">
                <Image src={Logo} className="mr-3 h-6 sm:h-9 hover:scale-125" alt='fine dine logo' width={40} height={30} />
                <span className="self-center  text-xl font-semibold text-white ">Fine Dine</span>
            </NavbarBrand>

            <div className='flex flex-row gap-2'>
                {pathname !== '/' && <AddNewRestaurant />}
                <Button onClick={() => router.push('/restaurants')} size="xs" gradientDuoTone="pinkToOrange">
                    View all restaurants
                </Button>
            </div>
        </Nav>
    )
}

