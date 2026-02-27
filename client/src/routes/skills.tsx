import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/skills')({
  component: SkillsPage,
})

function SkillsPage() {
  return <div>Hello "/skills"!</div>
}
