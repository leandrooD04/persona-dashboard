import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/personas/$personaId')({
  component: PersonaDetailPage,
})

function PersonaDetailPage() {
  return <div>Hello "/personas/$personaId"!</div>
}
