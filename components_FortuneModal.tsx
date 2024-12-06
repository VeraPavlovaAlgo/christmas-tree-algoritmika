import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Share, MessageCircle } from 'lucide-react'

interface FortuneModalProps {
  fortune: string
  onClose: () => void
}

export default function FortuneModal({ fortune, onClose }: FortuneModalProps) {
  const shareUrl = encodeURIComponent(`https://biz.algoritmika.org/test?text=${encodeURIComponent(fortune)}`)
  
  const shareToTelegram = () => {
    window.open(`https://t.me/share/url?url=${shareUrl}&text=${encodeURIComponent("Мое бизнес-предсказание от Алгоритмики на 2025 год:")}`, '_blank')
  }

  const shareToVK = () => {
    window.open(`https://vk.com/share.php?url=${shareUrl}&title=${encodeURIComponent("Мое бизнес-предсказание от Алгоритмики на 2025 год")}&description=${encodeURIComponent(fortune)}`, '_blank')
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Ваше предсказание</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-4">
          <p className="text-center text-lg font-medium">{fortune}</p>
          <div className="flex justify-center space-x-4">
            <Button onClick={shareToTelegram} variant="outline">
              <MessageCircle className="mr-2 h-4 w-4" />
              Telegram
            </Button>
            <Button onClick={shareToVK} variant="outline">
              <Share className="mr-2 h-4 w-4" />
              ВКонтакте
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

