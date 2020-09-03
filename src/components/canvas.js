import React, { useEffect, useRef } from 'react'

const Wave = () => {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    /* config */
    const config = {
      radius: 110,
      frequency: 55,
      amplitude: 100,
      speed: 0.2,
      spread: 3.5,
      shift_speed: 0.3
    }

    /* custom context methods */
    ctx.reset = () => {
      canvas.width = ctx.vw = window.innerWidth
      canvas.height = ctx.vh = window.innerHeight
      ctx.clearRect(0, 0, ctx.vw, ctx.vh)
    }

    ctx.circle = (x, y, r) => (
      ctx.arc(x, y, r, 0, Math.PI * 2)
    )

    /* update */
    function update(tick) {
      requestAnimationFrame(update)
      ctx.reset()
      ctx.translate(config.radius / 2, 0)
      ctx.rotate(Math.PI / 6)
      
      for (let i = 0; i < config.length; i++) {
        const time = (i + (tick * config.speed * 0.25))
        const deg = (time / config.frequency)
        const wave = (Math.cos(deg) * config.amplitude) //(config.amplitude * Math.cos(tick * 0.0008)))
        const color = (time / config.spread) + (tick * config.shift_speed * 0.1)
        
        ctx.beginPath()
        ctx.circle(i, wave, config.radius)
        ctx.fillStyle = `hsl(${color}, 40%, 40%)`
        ctx.fill()
      }
    }

    ctx.reset()
    config.length = (ctx.vw + config.radius)
    update()

    /* resize event listener */
    // todo: probably a better way to resize wave—refactor
    const MAX = 1400, MIN = 600
    const past = {...config}
    const resize = (e) => {
      config.length = (ctx.vw + (config.radius * 2))
      
      const minRatio = MIN / MAX
      const ratio = Math.max(minRatio, Math.min(ctx.vw / MAX, 1))
      config.radius = past.radius * ratio
      config.frequency = past.frequency * ratio
      config.amplitude = past.amplitude * ratio  
    }

    window.addEventListener('resize', resize)
  }, [])

  return (
    <canvas ref={canvasRef} className='fixed inset-0'/>
  )
}

export default Wave
