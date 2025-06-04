// Mobile menu toggle
const menuButton = document.getElementById('mobile-menu-button')
const mobileMenu = document.getElementById('mobile-menu')

if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    const isExpanded =
      menuButton.getAttribute('aria-expanded') === 'true' || false
    menuButton.setAttribute('aria-expanded', !isExpanded)
    mobileMenu.classList.toggle('hidden')
    // Toggle icon
    const icon = menuButton.querySelector('i')
    if (!isExpanded) {
      icon.classList.remove('fa-bars')
      icon.classList.add('fa-times')
    } else {
      icon.classList.remove('fa-times')
      icon.classList.add('fa-bars')
    }
  })
}

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear()

// Close mobile menu if window is resized to desktop view
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    // md breakpoint in Tailwind
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden')
      if (menuButton) {
        menuButton.setAttribute('aria-expanded', 'false')
        const icon = menuButton.querySelector('i')
        if (icon) {
          icon.classList.remove('fa-times')
          icon.classList.add('fa-bars')
        }
      }
    }
  }
})
