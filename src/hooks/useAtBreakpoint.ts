import { useEffect, useState } from 'react'

const useAtBreakpoint = (breakpoint: number) => {
  const [width, setWidth] = useState(window.innerWidth)
  const handleWindowResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return width <= breakpoint
}

export default useAtBreakpoint
