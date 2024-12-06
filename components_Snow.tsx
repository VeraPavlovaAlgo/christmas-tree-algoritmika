'use client'

import { useEffect, useState } from 'react'

interface Snowflake {
  id: number
  x: number
  y: number
  size: number
  speed: number
}

export default function Snow() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

  useEffect(() => {
    const createSnowflake = (): Snowflake => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: -10,
      size: Math.random() * 3 + 2,
      speed: Math.random() * 2 + 1
    })

    const initialSnowflakes = Array.from({ length: 100 }, createSnowflake)
    setSnowflakes(initialSnowflakes)

    const interval = setInterval(() => {
      setSnowflakes(prevSnowflakes => 
        prevSnowflakes.map(flake => ({
          ...flake,
          y: flake.y > window.innerHeight ? -10 : flake.y + flake.speed
        }))
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none">
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          className="absolute rounded-full bg-white opacity-80"
          style={{
            left: `${flake.x}px`,
            top: `${flake.y}px`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
          }}
        />
      ))}
    </div>
  )
}

