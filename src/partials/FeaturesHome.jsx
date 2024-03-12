import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import FeaturesImage from '../images/my-images/three.png';
import FeaturesImage1 from '../images/my-images/two.png';
import FeaturesImage2 from '../images/my-images/one.png';
import FeaturesImage3 from '../images/my-images/four.jpg';

function FeaturesHome() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab-1]) {
      tabs.current.style.height = tabs.current.children[tab-1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    // heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section className="relative">

      <div className="absolute inset-0 bg-slate-100 pointer-events-none mb-64 md:mb-80" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 font-playfair-display text-slate-800 mb-4">Plates Examples</h2>
            <p className="text-xl text-slate-768">Here is the accumulated plates from first year to present time.</p>
          </div>

          {/* Section content */}
          <div className="max-w-3xl mx-auto">

            {/* Tabs buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pb-12">
              <button
                className={`text-center transition-opacity ${tab !== 1 && 'opacity-50 hover:opacity-75'}`}
                onClick={(e) => { e.preventDefault(); setTab(1); }}
              >
                <div>
                  <div className="inline-flex bg-white rounded-full shadow-md mb-3">
                    <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                      <path fill="#2174EA" d="M20 20h6v16h-6z" />
                      <path fillOpacity=".64" fill="#5091EE" d="M29 20h3v16h-3zM35 20h1v16h-1z" />
                    </svg>
                  </div>
                  <div className="md:text-lg leading-tight font-semibold text-slate-800">Final Plates</div>
                </div>
              </button>
              <button
                className={`text-center transition-opacity ${tab !== 2 && 'opacity-50 hover:opacity-75'}`}
                onClick={(e) => { e.preventDefault(); setTab(2); }}
              >
                <div>
                  <div className="inline-flex bg-white rounded-full shadow-md mb-3">
                    <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                      <path fillOpacity=".64" fill="#5091EE" d="M33 23v8h3V20H25v3z" />
                      <path fill="#2174EA" d="M20 25h11v11H20z" />
                    </svg>
                  </div>
                  <div className="md:text-lg leading-tight font-semibold text-slate-800">Sketchup Plates</div>
                </div>
              </button>
              <button
                className={`text-center transition-opacity ${tab !== 3 && 'opacity-50 hover:opacity-75'}`}
                onClick={(e) => { e.preventDefault(); setTab(3); }}
              >
                <div>
                  <div className="inline-flex bg-white rounded-full shadow-md mb-3">
                    <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                      <path fillOpacity=".64" fill="#5091EE" d="M20 27l7-7h-7z" />
                      <path fill="#2174EA" d="M29 20l7 7v-7z" />
                      <path fillOpacity=".64" fill="#5091EE" d="M36 29l-7 7h7z" />
                      <path fill="#2174EA" d="M27 36l-7-7v7z" />
                    </svg>
                  </div>
                  <div className="md:text-lg leading-tight font-semibold text-slate-800">Architectural Photography Plate</div>
                </div>
              </button>
              <button
                className={`text-center transition-opacity ${tab !== 4 && 'opacity-50 hover:opacity-75'}`}
                onClick={(e) => { e.preventDefault(); setTab(4); }}
              >
                <div>
                  <div className="inline-flex bg-white rounded-full shadow-md mb-3">
                    <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 28h-4v4.9c0 1 .7 1.9 1.7 2.1 1.2.2 2.3-.8 2.3-2v-5z" fillOpacity=".64" fill="#5091EE" />
                      <path d="M35 21h-8c-.6 0-1 .4-1 1v11c0 .7-.2 1.4-.6 2H33c1.7 0 3-1.3 3-3V22c0-.6-.4-1-1-1z" fill="#2174EA" />
                    </svg>
                  </div>
                  <div className="md:text-lg leading-tight font-semibold text-slate-800">Manual Rendering Plate</div>
                </div>
              </button>              
            </div>

            {/* Tabs items */}
            <div className="relative flex flex-col" data-aos="fade-up" ref={tabs}>
              {/* Item 1 */}
              <Transition
                show={tab === 1}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-700 transform order-first"
                enterStart="opacity-0 translate-y-16"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveStart="opacity-100 translate-y-0"
                leaveEnd="opacity-0 -translate-y-16"
              >
                <img className="mx-auto shadow-2xl" src={FeaturesImage} width="500" height="300" alt="Features home 01" />
              </Transition>
              {/* Item 2 */}
              <Transition
                show={tab === 2}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-700 transform order-first"
                enterStart="opacity-0 translate-y-16"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveStart="opacity-100 translate-y-0"
                leaveEnd="opacity-0 -translate-y-16"
              >
                <img className="mx-auto shadow-2xl" src={FeaturesImage1} width="500" height="300" alt="Features home 02" />
              </Transition>
              {/* Item 3 */}
              <Transition
                show={tab === 3}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-700 transform order-first"
                enterStart="opacity-0 translate-y-16"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveStart="opacity-100 translate-y-0"
                leaveEnd="opacity-0 -translate-y-16"
              >
                <img className="mx-auto shadow-2xl" src={FeaturesImage2} width="500" height="300" alt="Features home 03" />
              </Transition>
              {/* Item 4 */}
              <Transition
                show={tab === 4}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-700 transform order-first"
                enterStart="opacity-0 translate-y-16"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveStart="opacity-100 translate-y-0"
                leaveEnd="opacity-0 -translate-y-16"
              >
                <img className="mx-auto shadow-2xl" src={FeaturesImage3} width="500" height="300" alt="Features home 04" />
              </Transition>              
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesHome;
