import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">

          {/* 1st block */}
          

          {/* 2nd block */}
          

          {/* 3rd block */}
        
          {/* 4th block */}
          

          {/* 5th block */}
                

        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-6 md:py-8 border-t border-slate-200">

          {/* Social links */}
          <ul className="flex space-x-6 mb-4 md:order-1 md:ml-4 md:mb-0">
            
            <li>
              <a className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out" href="https://www.facebook.com/profile.php?id=100001312745121" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 10.025C20 4.491 15.52 0 10 0S0 4.491 0 10.025c0 4.852 3.44 8.892 8 9.825v-6.817H6v-3.008h2V7.52a3.508 3.508 0 0 1 3.5-3.509H14v3.008h-2c-.55 0-1 .45-1 1.002v2.005h3v3.008h-3V20c5.05-.501 9-4.772 9-9.975Z" />
                </svg>
              </a>
            </li>
            
            <li>
              <a className="text-blue-500 hover:text-blue-600 transition duration-150 ease-in-out" href="https://github.com/zhyrol" aria-label="Github">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.041 0C4.52 0 0 4.612 0 10.25c0 4.526 2.845 8.37 6.862 9.737.502.085.669-.257.669-.513v-1.708c-2.761.598-3.347-1.367-3.347-1.367-.419-1.196-1.088-1.537-1.088-1.537-1.004-.598 0-.598 0-.598 1.004.085 1.506 1.025 1.506 1.025.92 1.537 2.343 1.11 2.929.854.084-.683.335-1.11.67-1.367-2.26-.256-4.603-1.11-4.603-5.039 0-1.11.419-2.05 1.004-2.733 0-.342-.418-1.367.168-2.733 0 0 .836-.257 2.76 1.025.838-.257 1.674-.342 2.511-.342.837 0 1.674.085 2.51.342 1.925-1.367 2.762-1.025 2.762-1.025.586 1.452.167 2.477.084 2.733.669.683 1.004 1.623 1.004 2.733 0 3.93-2.343 4.783-4.603 5.04.335.341.67.939.67 1.879v2.818c0 .256.167.598.67.513 4.016-1.367 6.86-5.21 6.86-9.737C20.084 4.612 15.565 0 10.042 0Z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-slate-500 mr-4">© zhyrol-design. All rights reserved.</div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
