import { CSSProperties } from 'react'

interface BaubleProps {
  style: CSSProperties
  onClick: () => void
}

const colors = [
  '#FF0000', // Red
  '#00FF00', // Green
  '#0000FF', // Blue
  '#FFFF00', // Yellow
  '#FF00FF', // Magenta
  '#00FFFF', // Cyan
  '#FFA500', // Orange
  '#800080', // Purple
  '#FFC0CB', // Pink
  '#00FF7F', // Spring Green
]

export default function Bauble({ style, onClick }: BaubleProps) {
  const randomColor = colors[Math.floor(Math.random() * colors.length)]

  return (
    <div 
      className="absolute w-10 h-10 rounded-full cursor-pointer hover:scale-110 transition-transform"
      style={{
        ...style,
        background: `radial-gradient(circle at 30% 30%, ${randomColor}, #000)`,
        boxShadow: `0 0 5px ${randomColor}, 0 0 10px ${randomColor}`
      }}
      onClick={onClick}
    />
  )
}

