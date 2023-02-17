import { useEffect, useRef, useState } from 'react'

import { Box } from '@mui/material'

import { styles } from './Thermometer.styles'

const mapToValues =
  (min, max, targetMin = 0, targetMax = 100) =>
  (value) =>
    ((value - min) * (targetMax - targetMin)) / (max - min) + targetMin

const Thermometer = ({
  value = '-',
  min = -10,
  max = 40,
  color = '#2196f3',
}) => {
  const [canvas, setCanvas] = useState()
  const ref = useRef()

  const getMappedValue = mapToValues(min, max, 505, 125)

  if (canvas) {
    const ctx = canvas.getContext('2d')

    ctx.clearRect(0, 0, 1000, 1000)

    ctx.save()

    // Styling
    ctx.font = '30px Arial'
    ctx.textBaseline = 'middle'
    ctx.textAlign = 'right'
    ctx.lineWidth = 50
    ctx.lineCap = 'round'
    ctx.strokeStyle = 'white'
    ctx.shadowColor = '#999'
    ctx.shadowBlur = 15

    ctx.beginPath()
    // Fill Bottom Circle
    ctx.fillStyle = color
    ctx.arc(500, 750, 150, -0.3 * Math.PI, 1.3 * Math.PI)
    ctx.fill()
    ctx.closePath()

    ctx.beginPath()

    // Top Circle
    ctx.arc(500, 250, 150, -0.7 * Math.PI, -0.3 * Math.PI)
    // Bottom Circle
    ctx.arc(500, 750, 150, -0.3 * Math.PI, 1.3 * Math.PI)
    // Top Circle (to draw left line)
    ctx.arc(500, 250, 150, -0.7 * Math.PI, -0.3 * Math.PI)

    ctx.stroke()

    // Max Value
    ctx.fillText(max + '℃', 700, 150)

    // Min Value
    ctx.fillText(min + '℃', 700, 645)

    // Clip only wanted area
    ctx.clip()

    // Draw inner Rectangle
    ctx.shadowColor = '#00000000'
    ctx.fillStyle = color
    ctx.fillRect(0, getMappedValue(value) + 125, 1000, 505)

    ctx.stroke()

    ctx.closePath()
    ctx.arc(500, 750, 150, -0.3 * Math.PI, 1.3 * Math.PI)

    // Current Value
    ctx.font = '50px Arial'
    ctx.fillStyle = 'white'
    ctx.textAlign = 'center'
    ctx.fillText((value ?? '-') + '℃', 500, 750)

    ctx.restore()
  }

  useEffect(() => {
    if (ref.current) {
      setCanvas(ref.current)
    }
  }, [ref])

  return (
    <Box sx={styles.container}>
      <canvas ref={ref} style={styles.canvas} width="1000" height="1000" />
    </Box>
  )
}

export default Thermometer
