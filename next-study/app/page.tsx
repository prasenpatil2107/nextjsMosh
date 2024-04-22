import Image from 'next/image'
import Link from 'next/link'
import ProductCart from './Components/ProductCart'

export default function Home() {
  return (
   
   <main>
    <h1>Hello World</h1>
    <Link href='/users'>Users</Link>
    <ProductCart/>
   </main>
  )
}
