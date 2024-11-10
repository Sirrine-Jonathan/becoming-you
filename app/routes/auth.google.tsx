import { redirect, type ActionFunctionArgs } from '@remix-run/node'
import { authenticator } from '~/app/services/auth.server'

export const loader = () => redirect('/auth/login')

export const action = ({ request }: ActionFunctionArgs) => {
  return authenticator.authenticate('google', request, {
    successRedirect: '/dashboard',
    failureRedirect: '/auth/login',
  })
}