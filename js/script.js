
// Tailwind animation config
const style = document.createElement('style');
style.textContent = `
  [x-cloak] { display: none !important; }
  @keyframes slideDown {
    0% { transform: translateY(-40px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes slideUp {
    0% { transform: translateY(40px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }
  @keyframes slideInRight {
    0% { transform: translateX(100%); }
    100% { transform: translateX(0); }
  }
  @keyframes slideOutRight {
    0% { transform: translateX(0); }
    100% { transform: translateX(100%); }
  }
  .animate-slide-down { animation: slideDown 0.6s ease-out; }
  .animate-fade-in { animation: fadeIn 0.8s ease-out; }
  .animate-slide-up { animation: slideUp 0.8s ease-out; }
  .animate-slide-in-right { animation: slideInRight 0.3s ease-out forwards; }
  .animate-slide-out-right { animation: slideOutRight 0.2s ease-in forwards; }
`;
document.head.appendChild(style);

// Function to load navbar
function loadNavbar() {
  const navbarHTML = `
    <!-- Top Bar -->
    <div class="hidden lg:block bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-gray-300 text-xs py-2.5 border-b border-slate-700/50 shadow-lg animate-slide-down">
      <div class="container mx-auto px-6 max-w-7xl">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-6">
            <a href="mailto:info@pinnacle.in" class="flex items-center hover:text-blue-400 transition-all duration-300 group">
              <i class="bi bi-envelope mr-2 text-sm group-hover:scale-105 group-hover:rotate-2 transition-transform"></i>
              <span>info@pinnacle.in</span>
            </a>
            <a href="tel:+911800123456" class="flex items-center hover:text-blue-400 transition-all duration-300 group">
              <i class="bi bi-telephone mr-2 text-sm group-hover:scale-105 group-hover:rotate-12 transition-transform"></i>
              <span>1800-123-4567</span>
            </a>
          </div>
          <div class="flex items-center space-x-2">
            <a href="#" aria-label="Facebook" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <i class="bi bi-facebook text-sm"></i>
            </a>
            <a href="#" aria-label="Twitter" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <i class="bi bi-twitter-x text-sm"></i>
            </a>
            <a href="#" aria-label="LinkedIn" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-blue-700 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <i class="bi bi-linkedin text-sm"></i>
            </a>
            <a href="#" aria-label="Instagram" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <i class="bi bi-instagram text-sm"></i>
            </a>
            <a href="#" aria-label="YouTube" class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1">
              <i class="bi bi-youtube text-sm"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100 animate-fade-in" id="mainNavbar" x-data="{ mobileMenuOpen: false, productsOpen: false, aboutOpen: false }">
      <div class="container mx-auto px-6 max-w-7xl">
        <div class="flex items-center justify-between py-3">
          <a class="flex items-center space-x-2.5 group" href="index.html" data-testid="link-home">
            <img src="./assets/logo.png" alt="logo" class="h-10 transition-transform duration-300 group-hover:scale-105" />
            <div class="flex flex-col">
              <span class="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">WebifyPixel</span>
              <span class="text-[9px] text-gray-500 font-semibold tracking-[0.2em]">CODE.CREATE.NEXT-GEN</span>
            </div>
          </a>
          
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden text-gray-700 hover:text-gray-900 focus:outline-none z-50 relative" aria-label="Toggle navigation" data-testid="button-navbar-toggle">
            <svg x-show="!mobileMenuOpen" x-cloak class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg x-show="mobileMenuOpen" x-cloak class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          
          <div class="hidden lg:flex lg:items-center lg:space-x-1" id="navbarNav">
            <ul class="flex items-center space-x-1">
              <li>
                <a class="px-3 py-2 text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50" href="index.html" data-testid="link-nav-home">Home</a>
              </li>
              <li class="relative" x-data="{ open: false }" @mouseenter="open = true" @mouseleave="open = false">
                <button class="px-3 py-2 text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center rounded-lg hover:bg-blue-50" @click="open = !open">
                  Products
                  <svg class="w-3.5 h-3.5 ml-1 transform transition-transform" :class="{ 'rotate-180': open }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div x-show="open" x-transition:enter="transition ease-out duration-200" x-transition:enter-start="opacity-0 scale-95" x-transition:enter-end="opacity-100 scale-100" x-transition:leave="transition ease-in duration-150" x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-95" class="absolute left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 min-w-max z-50" style="display: none">
                  <div class="h-1 bg-blue-600 rounded-t-lg"></div>
                  <div class="flex p-6 space-x-8">
                    <div class="space-y-4">
                      <div>
                        <a class="flex items-start space-x-3 text-gray-900 hover:text-blue-600 transition-colors" href="messaging.html">
                          <svg class="w-5 h-5 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M4 4h16v12H5.17L4 17.17V4z"></path>
                          </svg>
                          <div>
                            <div class="font-semibold">Messaging</div>
                            <p class="text-sm text-gray-600 mt-1 max-w-xs">Deliver transactional, OTP, and promotional messages securely and on time.</p>
                          </div>
                        </a>
                      </div>
                      <div>
                        <a class="flex items-start space-x-3 text-gray-900 hover:text-blue-600 transition-colors" href="whatsapp-business-api.html">
                          <svg class="w-5 h-5 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2a10 10 0 00-8.94 14.47L2 22l5.73-1.05A10 10 0 1012 2z"></path>
                          </svg>
                          <div>
                            <div class="font-semibold">WhatsApp Business API</div>
                            <p class="text-sm text-gray-600 mt-1 max-w-xs">Reach 2B+ users with fast, encrypted, AI-enabled WhatsApp messaging.</p>
                          </div>
                        </a>
                      </div>
                      <div>
                        <a class="flex items-start space-x-3 text-gray-900 hover:text-blue-600 transition-colors" href="rcs.html">
                          <svg class="w-5 h-5 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3 5h18v10H7l-4 4V5z"></path>
                          </svg>
                          <div>
                            <div class="font-semibold">RCS</div>
                            <p class="text-sm text-gray-600 mt-1 max-w-xs">Rich interactive messaging with media, branding, and actions.</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="space-y-4">
                      <div>
                        <a class="flex items-start space-x-3 text-gray-900 hover:text-blue-600 transition-colors" href="voice.html">
                          <svg class="w-5 h-5 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2"></path>
                          </svg>
                          <div>
                            <div class="font-semibold">Voice</div>
                            <p class="text-sm text-gray-600 mt-1 max-w-xs">Automated and bulk voice calling solutions for enterprises.</p>
                          </div>
                        </a>
                      </div>
                      <div>
                        <a class="flex items-start space-x-3 text-gray-900 hover:text-blue-600 transition-colors" href="email.html">
                          <svg class="w-5 h-5 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M4 4h16v16H4z"></path>
                          </svg>
                          <div>
                            <div class="font-semibold">Email</div>
                            <p class="text-sm text-gray-600 mt-1 max-w-xs">Reliable bulk and transactional email delivery platform.</p>
                          </div>
                        </a>
                      </div>
                      <div>
                        <a class="flex items-start space-x-3 text-gray-900 hover:text-blue-600 transition-colors" href="pinbot.html">
                          <svg class="w-5 h-5 mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2a10 10 0 100 20"></path>
                          </svg>
                          <div>
                            <div class="font-semibold">PinBot</div>
                            <p class="text-sm text-gray-600 mt-1 max-w-xs">AI-powered chatbot for customer engagement and automation.</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="relative" x-data="{ open: false }" @mouseenter="open = true" @mouseleave="open = false">
                <button class="px-3 py-2 text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center rounded-lg hover:bg-blue-50" @click="open = !open" data-testid="link-nav-about">
                  About Us
                  <svg class="w-3.5 h-3.5 ml-1 transform transition-transform" :class="{ 'rotate-180': open }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div x-show="open" x-transition:enter="transition ease-out duration-200" x-transition:enter-start="opacity-0 scale-95" x-transition:enter-end="opacity-100 scale-100" x-transition:leave="transition ease-in duration-150" x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-95" class="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50" style="display: none">
                  <a class="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors" href="about.html" data-testid="link-dropdown-about">About Pinnacle</a>
                  <a class="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors" href="about.html#vision" data-testid="link-dropdown-vision">Vision & Mission</a>
                  <a class="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors" href="about.html#leadership" data-testid="link-dropdown-leadership">Leadership</a>
                </div>
              </li>
              <li>
                <a class="px-3 py-2 text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50" href="integrations.html">Integrations</a>
              </li>
              <li>
                <a class="px-3 py-2 text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50" href="developers.html">Developers</a>
              </li>
              <li>
                <a class="px-3 py-2 text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50" href="contact.html" data-testid="link-nav-contact">Contact Us</a>
              </li>
              <li class="ml-2">
                <a class="inline-block px-5 py-2 text-sm bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg transform hover:scale-105" href="contact.html#demo" data-testid="button-schedule-demo">Schedule Demo</a>
              </li>
            </ul>
          </div>

          <!-- Mobile Menu Backdrop -->
          <div x-show="mobileMenuOpen" x-cloak @click="mobileMenuOpen = false" x-transition:enter="transition-opacity ease-out duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition-opacity ease-in duration-200" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" class="lg:hidden fixed inset-0 bg-black/50 z-40"></div>

          <!-- Mobile Menu Panel -->
          <div x-show="mobileMenuOpen" x-cloak x-transition:enter="transition ease-out duration-300 transform" x-transition:enter-start="translate-x-full" x-transition:enter-end="translate-x-0" x-transition:leave="transition ease-in duration-200 transform" x-transition:leave-start="translate-x-0" x-transition:leave-end="translate-x-full" class="lg:hidden fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white z-50 shadow-2xl overflow-y-auto" style="height: 100vh; height: 100dvh;">
            <!-- Header with Close Button -->
            <div class="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 flex items-center justify-between">
              <span class="text-white font-bold text-lg">Menu</span>
              <button @click="mobileMenuOpen = false" class="text-white hover:bg-white/20 p-2 rounded-lg transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <!-- Menu Content -->
            <div class="px-6 py-6">
              <ul class="space-y-1">
                <li>
                  <a @click="mobileMenuOpen = false" class="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-lg transition-colors" href="index.html">
                    <i class="bi bi-house-door mr-2"></i>Home
                  </a>
                </li>
                <li>
                  <button @click="productsOpen = !productsOpen" class="w-full text-left py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-lg transition-colors flex justify-between items-center">
                    <span><i class="bi bi-grid mr-2"></i>Products</span>
                    <svg class="w-4 h-4 transform transition-transform" :class="{ 'rotate-180': productsOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  <div x-show="productsOpen" x-transition:enter="transition ease-out duration-200" x-transition:enter-start="opacity-0 -translate-y-1" x-transition:enter-end="opacity-100 translate-y-0" class="pl-8 space-y-1 mt-1">
                    <a @click="mobileMenuOpen = false" class="block py-2 px-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" href="messaging.html">Messaging</a>
                    <a @click="mobileMenuOpen = false" class="block py-2 px-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" href="whatsapp-business-api.html">WhatsApp Business API</a>
                    <a @click="mobileMenuOpen = false" class="block py-2 px-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" href="rcs.html">RCS</a>
                    <a @click="mobileMenuOpen = false" class="block py-2 px-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" href="voice.html">Voice</a>
                    <a @click="mobileMenuOpen = false" class="block py-2 px-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" href="email.html">Email</a>
                    <a @click="mobileMenuOpen = false" class="block py-2 px-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" href="pinbot.html">PinBot</a>
                  </div>
                </li>
                <li>
                  <button @click="aboutOpen = !aboutOpen" class="w-full text-left py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-lg transition-colors flex justify-between items-center">
                    <span><i class="bi bi-info-circle mr-2"></i>About Us</span>
                    <svg class="w-4 h-4 transform transition-transform" :class="{ 'rotate-180': aboutOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  <div x-show="aboutOpen" x-transition:enter="transition ease-out duration-200" x-transition:enter-start="opacity-0 -translate-y-1" x-transition:enter-end="opacity-100 translate-y-0" class="pl-8 space-y-1 mt-1">
                    <a @click="mobileMenuOpen = false" class="block py-2 px-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" href="about.html">About Pinnacle</a>
                    <a @click="mobileMenuOpen = false" class="block py-2 px-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" href="about.html#vision">Vision & Mission</a>
                    <a @click="mobileMenuOpen = false" class="block py-2 px-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" href="about.html#leadership">Leadership</a>
                  </div>
                </li>
                <li>
                  <a @click="mobileMenuOpen = false" class="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-lg transition-colors" href="integrations.html">
                    <i class="bi bi-puzzle mr-2"></i>Integrations
                  </a>
                </li>
                <li>
                  <a @click="mobileMenuOpen = false" class="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-lg transition-colors" href="developers.html">
                    <i class="bi bi-code-slash mr-2"></i>Developers
                  </a>
                </li>
                <li>
                  <a @click="mobileMenuOpen = false" class="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-lg transition-colors" href="contact.html">
                    <i class="bi bi-envelope mr-2"></i>Contact Us
                  </a>
                </li>
                <li class="pt-4">
                  <a @click="mobileMenuOpen = false" class="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg" href="contact.html#demo">
                    <i class="bi bi-calendar-check mr-2"></i>Schedule Demo
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  `;
  
  const navbarContainer = document.getElementById('navbar-placeholder');
  if (navbarContainer) {
    navbarContainer.innerHTML = navbarHTML;
  }
}

// Function to load footer
function loadFooter() {
  const footerHTML = `
    <footer class="bg-gray-900 text-gray-300" id="footer">
      <div class="container mx-auto px-4">
        <div class="py-12 md:py-16">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="lg:col-span-1">
              <div class="space-y-4">
                <div class="mb-4">
                  <span class="text-2xl font-bold text-white">PINNACLE</span>
                  <span class="block text-sm text-gray-400">Teleservices</span>
                </div>
                <p class="text-sm leading-relaxed">
                  Pinnacle has been the trusted partner for large and small enterprises since 2003, providing end-to-end communication solutions.
                </p>
                <div class="flex space-x-4">
                  <a href="#" aria-label="Facebook" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <i class="bi bi-facebook"></i>
                  </a>
                  <a href="#" aria-label="Twitter" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <i class="bi bi-twitter-x"></i>
                  </a>
                  <a href="#" aria-label="LinkedIn" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <i class="bi bi-linkedin"></i>
                  </a>
                  <a href="#" aria-label="Instagram" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a href="#" aria-label="YouTube" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <i class="bi bi-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h5 class="text-white font-bold mb-4">Company</h5>
              <ul class="space-y-3">
                <li><a href="about.html" class="hover:text-white transition-colors">About Us</a></li>
                <li><a href="career.html" class="hover:text-white transition-colors">Careers</a></li>
                <li><a href="e-commerce.html" class="hover:text-white transition-colors">E-commerce</a></li>
                <li><a href="contact.html" class="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h5 class="text-white font-bold mb-4">Solutions</h5>
              <ul class="space-y-3">
                <li><a href="messaging.html" class="hover:text-white transition-colors">Messaging</a></li>
                <li><a href="whatsapp-business-api.html" class="hover:text-white transition-colors">WhatsApp API</a></li>
                <li><a href="rcs.html" class="hover:text-white transition-colors">RCS</a></li>
                <li><a href="pinbot.html" class="hover:text-white transition-colors">PinBot</a></li>
                <li><a href="integrations.html" class="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h5 class="text-white font-bold mb-4">Contact Info</h5>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <i class="bi bi-geo-alt text-blue-500 mr-3 mt-1"></i>
                  <span class="text-sm">123 Business Park, Tech City, India - 400001</span>
                </li>
                <li class="flex items-center">
                  <i class="bi bi-telephone text-blue-500 mr-3"></i>
                  <a href="tel:+911800123456" class="hover:text-white transition-colors">1800-123-4567</a>
                </li>
                <li class="flex items-center">
                  <i class="bi bi-envelope text-blue-500 mr-3"></i>
                  <a href="mailto:info@pinnacle.in" class="hover:text-white transition-colors">info@pinnacle.in</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-800 py-6">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            <p class="text-sm">&copy; 2024 Pinnacle Teleservices. All Rights Reserved.</p>
            <ul class="flex space-x-6 text-sm">
              <li><a href="#" class="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    <!-- Back to Top Button -->
    <button class="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all opacity-0 invisible hover:scale-110" id="backToTop" aria-label="Back to top">
      <i class="bi bi-arrow-up text-xl"></i>
    </button>
  `;
  
  const footerContainer = document.getElementById('footer-placeholder');
  if (footerContainer) {
    footerContainer.innerHTML = footerHTML;
  }
}

// Back to Top Button functionality
function initBackToTop() {
  const backToTopButton = document.getElementById('backToTop');
  if (!backToTopButton) return;
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.remove('opacity-0', 'invisible');
      backToTopButton.classList.add('opacity-100', 'visible');
    } else {
      backToTopButton.classList.add('opacity-0', 'invisible');
      backToTopButton.classList.remove('opacity-100', 'visible');
    }
  });
  
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Form Validation and UI Feedback (No actual submission)
function initFormHandling() {
  const forms = ['demoFormMessage', 'demoFormRCS', 'demoFormWhatsApp', 'demoFormVoice'];
  
  forms.forEach(formId => {
    const form = document.getElementById(formId);
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const section = document.querySelector('#demo');
      const alpineData = Alpine.$data(section);
      
      // Validate form
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      
      // Set loading state (UI demonstration)
      alpineData.isSubmitting = true;
      alpineData.showSuccess = false;
      alpineData.showError = false;
      
      // Collect form data (for demonstration)
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      console.log('Form Data (UI Demo):', data);
      
      // Simulate API call with timeout (UI demonstration only)
      setTimeout(() => {
        // Show success message (UI demonstration)
        alpineData.showSuccess = true;
        alpineData.isSubmitting = false;
        form.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          alpineData.showSuccess = false;
        }, 5000);
        
        // Log for demonstration
        console.log('✅ Form UI flow completed successfully');
        
        // Note: In production, replace this with actual API call:
        // fetch('/api/demo-request', { method: 'POST', body: JSON.stringify(data) })
        
      }, 2000); // 2 second delay to show loading state
    });
    
    // Add real-time validation with visual feedback
    const inputs = form.querySelectorAll('input[required]');
    inputs.forEach(input => {
      // Blur event - validate when user leaves field
      input.addEventListener('blur', () => {
        if (!input.validity.valid) {
          input.classList.add('border-red-500');
          input.classList.remove('border-gray-300', 'border-gray-200');
        } else {
          input.classList.remove('border-red-500');
          input.classList.add('border-gray-200');
        }
      });
      
      // Input event - remove error styling as user types
      input.addEventListener('input', () => {
        if (input.validity.valid) {
          input.classList.remove('border-red-500');
          input.classList.add('border-gray-200');
        }
      });
    });
  });
}

// Phone number formatting for better UX
function initPhoneFormatting() {
  const phoneInputs = document.querySelectorAll('input[type="tel"]');
  
  phoneInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      // Remove all non-numeric characters except + at the start
      let value = e.target.value.replace(/[^0-9+]/g, '');
      
      // Ensure + is only at the start
      if (value.indexOf('+') > 0) {
        value = value.replace(/\+/g, '');
      }
      
      e.target.value = value;
    });
  });
}

// Add smooth scroll behavior to all anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Add floating label effect
function initFloatingLabels() {
  const inputs = document.querySelectorAll('input, textarea');
  
  inputs.forEach(input => {
    const wrapper = input.parentElement;
    
    // Add filled class if input has value
    const checkValue = () => {
      if (input.value) {
        wrapper.classList.add('has-value');
      } else {
        wrapper.classList.remove('has-value');
      }
    };
    
    input.addEventListener('blur', checkValue);
    input.addEventListener('input', checkValue);
    checkValue(); // Check on load
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  loadNavbar();
  loadFooter();
  
  // Wait a bit for Alpine.js to initialize
  setTimeout(() => {
    initBackToTop();
    initFormHandling();
    initPhoneFormatting();
    initSmoothScroll();
    initFloatingLabels();
    
    console.log('🎨 UI/UX enhancements loaded successfully');
  }, 100);
});
