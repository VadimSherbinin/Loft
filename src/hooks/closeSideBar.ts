export const useClosingSideMenu = (callback: (flag: boolean) => void, width = 10) => {
  window.addEventListener('mousemove', (e) => {
    if (e.clientX < width) {
      callback(true)
    } else if (e.clientX > (width + 300)) {
      callback(false)
    }
  })
}