
import { Welcome as WelcomLayout } from '../layouts/WelcomeLayout'
import { Welcome1 } from '../pages/Welcome1'
import { Welcome2 } from '../pages/Welcome2'
import { Welcome3 } from '../pages/Welcome3'
import { Welcome4 } from '../pages/Welcome4'
export const welcomeRoutes = {
  path: 'welcome',
  element: <WelcomLayout></WelcomLayout>,
  children: [
    {
      index: true,
      element: <div >空</div>
    },
    {
      path: '1',
      element: <Welcome1></Welcome1>
    },
    {
      path: '2',
      element: <Welcome2></Welcome2>
    },
    {
      path: '3',
      element: <Welcome3></Welcome3>
    },
    {
      path: '4',
      element: <Welcome4></Welcome4>
    },
  ]
}