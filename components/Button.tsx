"use client"
import React from 'react'

const Button = ({ title, className }: { title: string, className?: string }) => {
  return <button onClick={() => window.open("https://apps.apple.com/us/app/super-mario-run/id1145275343")} className={`${className} font-bold tracking-wide border-base-green-300 border p-3 px-5 cursor-pointer text-xs`}>{title}</button>
}

export default Button
