import { useEffect, useRef } from 'react'
import './NetworkBackground.css'

const NetworkBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let nodes = []
    let connections = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Create nodes (dots)
    const nodeCount = 100
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        radius: Math.random() * 2.5 + 1.5,
        glow: Math.random() * 0.5 + 0.5,
        baseGlow: Math.random() * 0.5 + 0.5,
      })
    }

    const drawNode = (node) => {
      // Outer glow
      const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 3)
      gradient.addColorStop(0, `rgba(0, 0, 0, ${node.glow * 0.6})`)
      gradient.addColorStop(0.5, `rgba(0, 0, 0, ${node.glow * 0.3})`)
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
      
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2)
      ctx.fill()

      // Inner dot
      ctx.fillStyle = `rgba(0, 0, 0, ${node.glow * 0.8})`
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
      ctx.fill()
    }

    const drawConnection = (node1, node2, distance) => {
      const opacity = Math.max(0, 0.2 * (1 - distance / 200))

      ctx.strokeStyle = `rgba(0, 0, 0, ${opacity})`
      ctx.lineWidth = 1.5
      ctx.shadowBlur = 5
      ctx.shadowColor = `rgba(0, 0, 0, ${opacity * 0.3})`
      
      ctx.beginPath()
      ctx.moveTo(node1.x, node1.y)
      
      // Create a path with 90-degree angles (circuit board style)
      // Horizontal first, then vertical, or vice versa
      const useHorizontalFirst = Math.abs(node1.x - node2.x) > Math.abs(node1.y - node2.y)
      
      if (useHorizontalFirst) {
        const midX = node1.x + (node2.x - node1.x) * 0.5
        ctx.lineTo(midX, node1.y)
        ctx.lineTo(midX, node2.y)
        ctx.lineTo(node2.x, node2.y)
      } else {
        const midY = node1.y + (node2.y - node1.y) * 0.5
        ctx.lineTo(node1.x, midY)
        ctx.lineTo(node2.x, midY)
        ctx.lineTo(node2.x, node2.y)
      }
      
      ctx.stroke()
      ctx.shadowBlur = 0
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'rgba(255, 255, 255, 1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Keep in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x))
        node.y = Math.max(0, Math.min(canvas.height, node.y))

        // Animate glow
        node.glow = node.baseGlow + Math.sin(Date.now() * 0.002 + node.x * 0.01 + node.y * 0.01) * 0.3

        drawNode(node)
      })

      // Draw connections
      nodes.forEach((node1, i) => {
        nodes.slice(i + 1).forEach((node2) => {
          const dx = node1.x - node2.x
          const dy = node1.y - node2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 200) {
            drawConnection(node1, node2, distance)
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="network-canvas" />
}

export default NetworkBackground

