import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/characters/')({
  component: CharactersList,
})

function CharactersList() {
  return <div>Hello "/characters/"!</div>
}
