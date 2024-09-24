import { FC } from 'react'
import { Card, CardHeader, CardTitle } from '@/components/ui/card.tsx'

interface ProgramCardProps {
  name: string
}

const ProgramCard: FC<ProgramCardProps> = ({ name }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
    </Card>
  )
}

export default ProgramCard
