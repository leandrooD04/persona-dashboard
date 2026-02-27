import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/characters/$characterId')({
  component: CharacterDetailPage,
})

function CharacterDetailPage() {
  return <div>Hello "/characters/$characterId"!</div>
}
