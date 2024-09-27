import ProgramCard from '@/components/program-card.tsx'
import { useProgram } from '@/context/program-context.tsx'

const App = () => {
  const { programs } = useProgram()

  return (
    <div className={'p-2'}>
      <div className={'flex flex-col gap-2'}>
        {programs.map(({ id, name }) => (
          <ProgramCard name={name} id={id} key={id} />
        ))}
      </div>
    </div>
  )
}

export default App
