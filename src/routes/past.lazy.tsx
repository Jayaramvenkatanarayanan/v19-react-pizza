import { createLazyFileRoute } from '@tanstack/react-router'
import Past from '../Presentation/Components/PastOrder'

export const Route = createLazyFileRoute('/past')({
  component: Past,
})
