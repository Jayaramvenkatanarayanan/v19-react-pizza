import { createLazyFileRoute } from '@tanstack/react-router'
import Contact from '../Presentation/Components/Contact'

export const Route = createLazyFileRoute('/contact')({
  component: Contact,
})
