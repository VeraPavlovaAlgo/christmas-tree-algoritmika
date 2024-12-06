import ChristmasTree from '@/components/ChristmasTree'
import Snow from '@/components/Snow'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-24 bg-purple-900 overflow-hidden">
      <Snow />
      <h1 className="text-4xl font-bold text-white mb-8 z-10">Бизнес-предсказания от Алгоритмики на 2025 год</h1>
      <ChristmasTree />
    </main>
  )
}

