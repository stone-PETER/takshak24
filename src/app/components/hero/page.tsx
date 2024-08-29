'use client'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import { useRef } from 'react'
interface PageProps {
    offset: number
    gradient: string
    onClick: () => void
  }
  
const Page = ({ offset, gradient, onClick }: PageProps) => (
    <>
      <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
        <div className='slopeBegin' />
      </ParallaxLayer>
  
      <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
        <div  className={`slopeEnd ${gradient}`}/>
      </ParallaxLayer>
  
      <ParallaxLayer className=' text number'  offset={offset} speed={0.3}>
        <span>0{offset + 1}</span>
      </ParallaxLayer>
    </>
  )
  
export default function Hero()
{
    const parallax = useRef<IParallax>(null)

    const scroll = (to: number) => {
      if (parallax.current) {
        parallax.current.scrollTo(to)
      }
    }
    return <section className="">
   <Parallax className=' containern' pages={3} horizontal style={{ top: '0', left: '0' }}>
   <Page offset={0} gradient="pink" onClick={() => scroll(1)} />
        <Page offset={1} gradient="teal" onClick={() => scroll(2)} />
        <Page offset={2} gradient="tomato" onClick={() => scroll(0)} />
    </Parallax>
    </section>
}