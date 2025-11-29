import { animated, useTransition } from '@react-spring/web'
import { useLocation, useOutlet } from 'react-router-dom'

export const WelcomeLayout: React.FC = () => {
  const location = useLocation()
  const outlet = useOutlet()
  
  // 使用一个对象来存储当前路径和对应的outlet
  // 这样在过渡动画期间，离开的页面可以保持其内容
  const items = [{ pathname: location.pathname, outlet }]
  
  const transitions = useTransition(items, {
    keys: item => item.pathname,
    from: { transform: location.pathname === '/welcome/1' ? 'translateX(0%)' : 'translateX(100%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(-100%)' },
    config: { duration: 10000 }
  })
  
  return transitions((style, item) =>
    <animated.div key={item.pathname} style={style}>
      {item.outlet}
    </animated.div>
  )
}