import { FC } from 'react'
import { Card, CardHeader, CardTitle } from '@/components/ui/card.tsx'
import { Link } from 'react-router-dom'

interface ProgramCardProps {
  id: string
  name: string
}

const ProgramCard: FC<ProgramCardProps> = ({ name, id }) => {
  return (
    <Link to={`/program/${id}`}>
      <Card>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
      </Card>
    </Link>
  )
}

export default ProgramCard
