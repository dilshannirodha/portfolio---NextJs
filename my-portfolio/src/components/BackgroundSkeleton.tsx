'use client'

import React, { useEffect, useRef, useState } from 'react'

type Dot = {
  x: number
  y: number
  vx: number
  vy: number
}

const NUM_DOTS = 100
const DOT_SIZE = 6
const MAX_CONNECTION_DISTANCE = 15 // % distance in viewport width/height (approx)
const REPULSION_RADIUS = 100// px
const REPULSION_STRENGTH = 0.12

export default function BackgroundSkeleton() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const mousePos = useRef({ x: -1000, y: -1000 }) // start offscreen
  const dots = useRef<Dot[]>([])
  const animationFrame = useRef<number | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!windowSize.width || !windowSize.height) return

    // Initialize dots
    dots.current = Array.from({ length: NUM_DOTS }).map(() => ({
      x: Math.random() * windowSize.width,
      y: Math.random() * windowSize.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.9,
    }))

    const canvas = canvasRef.current
    if (!canvas) return

    // Get and store context
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctxRef.current = ctx

    // Initialize canvas
    canvas.width = windowSize.width
    canvas.height = windowSize.height

    // Animation function
    function animate() {
      const ctx = ctxRef.current
      if (!ctx) return

      ctx.clearRect(0, 0, windowSize.width, windowSize.height)

      // Update dot positions
      dots.current.forEach(dot => {
        // Mouse repulsion
        const dx = dot.x - mousePos.current.x
        const dy = dot.y - mousePos.current.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < REPULSION_RADIUS && dist !== 0) {
          const angle = Math.atan2(dy, dx)
          const force = (REPULSION_RADIUS - dist) * REPULSION_STRENGTH
          dot.vx += Math.cos(angle) * force
          dot.vy += Math.sin(angle) * force
        }

        // Boundary checks
        dot.x += dot.vx
        dot.y += dot.vy

        if (dot.x < DOT_SIZE) {
          dot.x = DOT_SIZE
          dot.vx = -dot.vx * 0.8
        }
        if (dot.x > windowSize.width - DOT_SIZE) {
          dot.x = windowSize.width - DOT_SIZE
          dot.vx = -dot.vx * 0.8
        }
        if (dot.y < DOT_SIZE) {
          dot.y = DOT_SIZE
          dot.vy = -dot.vy * 0.8
        }
        if (dot.y > windowSize.height - DOT_SIZE) {
          dot.y = windowSize.height - DOT_SIZE
          dot.vy = -dot.vy * 0.8
        }

        // Friction
        dot.vx *= 0.95
        dot.vy *= 0.95
      })

      // Draw connections
      const maxDistPx = (MAX_CONNECTION_DISTANCE / 100) * Math.min(windowSize.width, windowSize.height)
      
      for (let i = 0; i < NUM_DOTS; i++) {
        for (let j = i + 1; j < NUM_DOTS; j++) {
          const dotA = dots.current[i]
          const dotB = dots.current[j]
          const distX = dotA.x - dotB.x
          const distY = dotA.y - dotB.y
          const dist = Math.sqrt(distX * distX + distY * distY)

          if (dist < maxDistPx) {
            const alpha = 1 - dist / maxDistPx
            ctx.strokeStyle = `rgba(74, 222, 128, ${alpha * 0.4})` // green-400
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(dotA.x, dotA.y)
            ctx.lineTo(dotB.x, dotB.y)
            ctx.stroke()
          }
        }
      }

      // Draw dots
      ctx.fillStyle = 'rgba(74, 222, 128, 0.6)' // green-400
      dots.current.forEach(dot => {
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, DOT_SIZE / 2, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrame.current = requestAnimationFrame(animate)
    }

    animationFrame.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [windowSize])

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }
    
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={windowSize.width}
      height={windowSize.height}
      className="fixed inset-0 z-[0] pointer-events-none bg-gray-900"
    />
  )
}