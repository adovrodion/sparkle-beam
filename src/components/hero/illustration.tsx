import { Gradient } from '@/components/gradient'
import { useEffect, useRef } from 'react'
import ScrollReveal from 'scrollreveal'

function Illustration({ className }: { className?: string }) {
  const scrollRevealOneRef = useRef<HTMLDivElement[]>([])
  const scrollRevealTwoRef = useRef<HTMLDivElement[]>([])

  const addToScrollRevealOneRef = (el) => {
    scrollRevealOneRef.current.push(el)
  }

  const addToScrollRevealTwoRef = (el) => {
    scrollRevealTwoRef.current.push(el)
  }

  useEffect(() => {
    if (scrollRevealOneRef.current.length > 0) {
      scrollRevealOneRef.current.map((ref) =>
        ScrollReveal().reveal(ref, {
          delay: 200,
          duration: 900,
          distance: '40px',
          easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
          origin: 'bottom',
          interval: 200,
        }),
      )
    }

    if (scrollRevealTwoRef.current.length > 0) {
      scrollRevealTwoRef.current.map((ref) =>
        ScrollReveal().reveal(ref, {
          delay: 100,
          duration: 900,
          distance: '40px',
          easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
          origin: 'right',
          interval: 150,
        }),
      )
    }

    return () => ScrollReveal().destroy()
  }, [])

  return (
    <div className={className}>
      <Gradient className="absolute inset-0 lg:hidden" />
      <div ref={addToScrollRevealTwoRef} className="absolute left-16 top-4 lg:-top-20 lg:left-24">
        <svg width="124" height="64" viewBox="0 0 124 64" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="0%" y1="50%" x2="114.418%" y2="50%" id="squares-1-a">
              <stop stopColor="#6EFACC" offset="0%" />
              <stop stopColor="#6EFACC" stopOpacity="0" offset="100%" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        ref={addToScrollRevealTwoRef}
        className="absolute hidden lg:-bottom-28 lg:left-40 lg:block"
      >
        <svg width="64" height="88" viewBox="0 0 64 88" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="0%" y1="50%" x2="114.418%" y2="50%" id="squares-2-a">
              <stop stopColor="#6EFACC" offset="0%" />
              <stop stopColor="#6EFACC" stopOpacity="0" offset="100%" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        ref={addToScrollRevealTwoRef}
        className="absolute -top-48 left-96 hidden drop-shadow-2xl lg:block"
      >
        <svg width="450" height="450" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient
              cx="56.15%"
              cy="27.43%"
              fx="56.15%"
              fy="27.43%"
              r="57.526%"
              gradientTransform="matrix(.5626 -.82673 .8022 .54591 .026 .589)"
              id="ball-1-a"
            >
              <stop stopColor="#eef2ff" offset="0%" />
              <stop stopColor="#cfddff" offset="34.827%" />
              <stop stopColor="#818cf8" offset="100%" />
            </radialGradient>
          </defs>
          <circle cx="200" cy="200" r="200" fill="#ffffff" fillRule="evenodd" />
          <circle cx="200" cy="200" r="200" fill="url(#ball-1-a)" fillRule="evenodd" />
          <circle cx="200" cy="200" r="120" fill="#ffffff" fillRule="evenodd" />
        </svg>
      </div>
      <div
        className="hero-ball hero-ball-2 absolute left-16 top-72 drop-shadow-2xl lg:-left-16 lg:top-80"
        ref={addToScrollRevealOneRef}
      >
        <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient
              cx="56.15%"
              cy="27.43%"
              fx="56.15%"
              fy="27.43%"
              r="57.526%"
              gradientTransform="matrix(.5626 -.82673 .8022 .54591 .026 .589)"
              id="ball-2-a"
            >
              <stop stopColor="#eef2ff" offset="0%" />
              <stop stopColor="#cfddff" offset="34.827%" />
              <stop stopColor="#818cf8" offset="100%" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="100" fill="#ffffff" fillRule="evenodd" />
          <circle cx="100" cy="100" r="100" fill="url(#ball-2-a)" fillRule="evenodd" />
          <circle cx="100" cy="100" r="60" fill="#ffffff" fillRule="evenodd" />
        </svg>
      </div>
      <div ref={addToScrollRevealTwoRef} className="hero-illustration-browser drop-shadow-2xl">
        
      </div>
      <div
        className="hero-ball hero-ball-3 absolute drop-shadow-2xl"
        ref={addToScrollRevealOneRef}
        style={{ top: '300px', left: '440px' }}
      >
        <svg width="600" height="600" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient
              cx="56.15%"
              cy="27.43%"
              fx="56.15%"
              fy="27.43%"
              r="57.526%"
              gradientTransform="matrix(.5626 -.82673 .8022 .54591 .026 .589)"
              id="ball-3-a"
            >
              <stop stopColor="#eef2ff" offset="0%" />
              <stop stopColor="#cfddff" offset="34.827%" />
              <stop stopColor="#818cf8" offset="100%" />
            </radialGradient>
          </defs>
          <circle cx="40" cy="40" r="40" fill="#ffffff" fillRule="evenodd" />
          <circle cx="40" cy="40" r="40" fill="url(#ball-3-a)" fillRule="evenodd" />
          <circle cx="40" cy="40" r="24" fill="#ffffff" fillRule="evenodd" />
        </svg>
      </div>
      <div
        className="hero-ball hero-ball-4 absolute -top-5 left-44 lg:-top-20 lg:left-72"
        ref={addToScrollRevealOneRef}
      >
      </div>
      <div
        className="hero-ball hero-ball-5 absolute lg:-bottom-21 lg:left-80"
        ref={addToScrollRevealOneRef}
      >
      </div>
    </div>
  )
}

export default Illustration
