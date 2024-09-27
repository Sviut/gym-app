import { FC } from 'react'
import { Button } from '@/components/ui/button.tsx'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useProgram } from '@/context/program-context.tsx'

interface WorkoutHeaderProps {
  title: string
}

const WorkoutHeader: FC<WorkoutHeaderProps> = ({ title }) => {
  const navigate = useNavigate()
  const { programId, exerciseId } = useParams<{
    programId: string
    exerciseId: string
  }>()
  const { getPages, saveProgramHistory } = useProgram()
  const { prev, next } = getPages(programId, exerciseId)

  const onFinishHandler = () => {
    saveProgramHistory(programId)
    // setTimeout(() => {
    navigate('/')
    // }, 100)
  }

  return (
    <div className={'flex items-center justify-between'}>
      <Link to={`/program/${programId}/workout/${prev}`}>
        <Button variant={'ghost'}>
          <ArrowLeft />
        </Button>
      </Link>

      <div>{title}</div>

      {next === 'finish' ? (
        <Button variant={'ghost'} onClick={onFinishHandler}>
          <Check />
        </Button>
      ) : (
        <Link to={`/program/${programId}/workout/${next}`}>
          <Button variant={'ghost'}>
            <ArrowRight />
          </Button>
        </Link>
      )}
    </div>
  )
}

export default WorkoutHeader
