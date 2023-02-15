import { useMemo } from 'react'

import useMediaQuery from '@mui/material/useMediaQuery'

const ResponsiveView = ({ min, max, children }) => {
  const matchesUP = useMediaQuery((theme) => theme.breakpoints.up(min))
  const matchesDOWN = useMediaQuery((theme) => theme.breakpoints.down(max))

  const show = useMemo(() => {
    const conditionUP = min ? matchesUP : true
    const conditionDOWN = max ? matchesDOWN : true

    return conditionUP && conditionDOWN
  }, [min, max, matchesUP, matchesDOWN])

  return <>{show && children}</>
}

export default ResponsiveView
