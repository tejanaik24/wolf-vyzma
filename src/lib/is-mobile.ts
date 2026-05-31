export const isMobile = () => typeof window !== 'undefined' && window.innerWidth < 768
export const isTouch = () => typeof window !== 'undefined' && ('ontouchstart' in window)
