export function HeroLayers() {
  return (
    <div className="absolute inset-0">
      <div className="parallax-layer absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-b from-blue-900 via-purple-900 to-black"></div>
      </div>
      
      <div className="parallax-layer absolute inset-0 z-1">
        <div className="w-full h-full bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-50"></div>
      </div>
      
      <div className="parallax-layer absolute inset-0 z-2">
        <div className="w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse animate-delay-1000"></div>
          <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-white/40 rounded-full animate-pulse animate-delay-500"></div>
        </div>
      </div>
    </div>
  )
}
