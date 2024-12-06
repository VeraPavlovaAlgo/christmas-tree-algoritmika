'use client'

import { useState } from 'react'
import Bauble from './Bauble'
import FortuneModal from './FortuneModal'

const fortunes = [
  "Ваша компания внедрит инновационную технологию, которая изменит отрасль.",
  "Новое партнерство откроет неожиданные возможности для роста.",
  "Инвестиции в обучение сотрудников принесут значительную отдачу.",
  "Ваш стартап привлечет крупное финансирование от ведущих инвесторов.",
  "Запуск нового образовательного продукта превзойдет все ожидания.",
  "Вы станете лидером в области устойчивого развития в вашей отрасли.",
  "Внедрение искусственного интеллекта значительно повысит эффективность вашего бизнеса.",
  "Ваша компания успешно выйдет на международный рынок.",
  "Новая программа корпоративного обучения станет образцом для всей индустрии.",
  "Ваш инновационный подход к онлайн-образованию получит широкое признание."
]

const baublePositions = [
  { x: 150, y: 70 },
  { x: 100, y: 120 },
  { x: 200, y: 120 },
  { x: 70, y: 170 },
  { x: 150, y: 170 },
  { x: 230, y: 170 },
  { x: 100, y: 220 },
  { x: 200, y: 220 },
  { x: 70, y: 270 },
  { x: 230, y: 270 },
]

export default function ChristmasTree() {
  const [selectedFortune, setSelectedFortune] = useState<string | null>(null)

  const handleBaubleClick = (fortune: string) => {
    setSelectedFortune(fortune)
  }

  return (
    <div className="relative z-10">
      <svg width="300" height="400" viewBox="0 0 300 400">
        {/* Tree trunk */}
        <rect x="135" y="350" width="30" height="50" fill="#8B4513" />
        
        {/* Tree layers */}
        <g>
          <path d="M150,20 L50,200 C100,180 200,180 250,200 Z" fill="#0a5c36" />
          <path d="M150,60 L70,220 C120,200 180,200 230,220 Z" fill="#0b6e3e" />
          <path d="M150,100 L90,240 C120,220 180,220 210,240 Z" fill="#0c7c46" />
          <path d="M150,140 L110,260 C130,240 170,240 190,260 Z" fill="#0d8a4e" />
          <path d="M150,180 L130,280 C140,260 160,260 170,280 Z" fill="#0e9856" />
        </g>
        
        {/* Tree lighting effect */}
        <g opacity="0.1">
          <path d="M150,20 L250,200 C200,180 100,180 50,200 Z" fill="#ffffff" />
          <path d="M150,60 L230,220 C180,200 120,200 70,220 Z" fill="#ffffff" />
          <path d="M150,100 L210,240 C180,220 120,220 90,240 Z" fill="#ffffff" />
          <path d="M150,140 L190,260 C170,240 130,240 110,260 Z" fill="#ffffff" />
          <path d="M150,180 L170,280 C160,260 140,260 130,280 Z" fill="#ffffff" />
        </g>
        
        {/* Tree decorations */}
        <g>
          <circle cx="150" cy="100" r="5" fill="#FFD700" />
          <circle cx="120" cy="150" r="4" fill="#FF0000" />
          <circle cx="180" cy="170" r="4" fill="#0000FF" />
          <circle cx="140" cy="220" r="4" fill="#FFA500" />
          <circle cx="160" cy="260" r="4" fill="#FF1493" />
        </g>
        
        {/* Star on top */}
        <path d="M150,5 L157,20 L173,20 L160,30 L165,45 L150,35 L135,45 L140,30 L127,20 L143,20 Z" fill="#FFD700" />
      </svg>
      
      {fortunes.map((fortune, index) => (
        <Bauble 
          key={index} 
          style={{
            left: `${baublePositions[index].x}px`,
            top: `${baublePositions[index].y}px`
          }}
          onClick={() => handleBaubleClick(fortune)}
        />
      ))}
      {selectedFortune && (
        <FortuneModal 
          fortune={selectedFortune} 
          onClose={() => setSelectedFortune(null)} 
        />
      )}
    </div>
  )
}

