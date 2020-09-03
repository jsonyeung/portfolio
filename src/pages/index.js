import React, { useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import '../styles/main.scss'

import arrow from 'src/assets/arrow.svg'
import arrow_head from 'src/assets/arrow-head.svg'
import pointer from 'src/assets/pointer.svg'
import noise from 'src/assets/noise.png'

import WaveCanvas from 'src/components/canvas'

const HeadHr = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  pointer-events: none;
  opacity: 0.2;

  position: relative;
  &::before {
    content: '';
    background: url(${arrow_head}) no-repeat;
    width: 20px;
    height: 44px;
  }

  &::after {
    content: '';
    display: inline-block;
    flex: 1;
    height: 2px;
    background: white;
    transform: scaleX(50);
    transform-origin: center left;
  }
`

const BgFade = styled.div`
  position: fixed;
  top: 0; bottom: 0;
  left: 0; right: 0;
  opacity: 0.9;

  background: linear-gradient(150deg, 
    #1F2423 0%, 
    transparent 20%,
    transparent 80%,
    #1F2423 100%
  ), url(${noise});
`

const IndexPage = () => {
  const headerRef = useRef(null)
  const contentRef = useRef(null)
  const footerRef = useRef(null)

  useEffect(() => {
    const resizeHeader = () => {
      const headerHeight = headerRef.current.clientHeight
      contentRef.current.style.marginTop = `${headerHeight}px`
    }
    
    const resizeFooter = () => {
      const footerHeight = footerRef.current.clientHeight
      contentRef.current.style.marginBottom = `${footerHeight}px`
    }

    const resize = () => { resizeHeader(); resizeFooter() }
    window.addEventListener('resize', resize)
    resize()

    gsap.registerPlugin(ScrollTrigger)
    gsap.set(headerRef.current, { filter: 'brightness(1)' })

    gsap.to(headerRef.current, {
      opacity: 0,
      filter: 'brightness(0.25)',
      y: '+=8',
      scrollTrigger: {
        trigger: contentRef.current,
        scrub: true,
        markers: false,
        start: '-7% top',
        end: '+=400'
      }
    })

    gsap.from(footerRef.current, {
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: contentRef.current,
        start: 'bottom bottom'
      }
    })
  }, [])

  return (<>
    {/* <nav className='fixed inset-x-0 top-0 sm:relative'>
      <div className='container flex justify-between px-4'>
        <p>logo</p>

        <ul className='flex justify-end overflow-x-scroll flex-1 ml-4'>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test4</li>
          <li>Test4</li>
          <li>Test4</li>
          <li>Test4</li>
        </ul>
      </div>
    </nav> */}
    
    {/* Header Info */}
    <header ref={headerRef} className='fixed w-full top-0 z-10 pt-10 lg:pt-9 md:pt-6'>
      <div className='label block text-sm text-upper opacity-75 md:hidden mt-2 -mb-5 mx-3 pb-1'>Intro</div>

      <div className='container'>
        <div className='grid grid-cols-12 gap-4'>
          <div className='col-start-2 md:col-start-1 col-span-10 md:col-span-12'>
            <h1>Hi, I'm Jason Yeung,<br/>Aspiring Front-end Developer</h1>
            <p className='font-geo font-300 text-lg tracking-wide max-w-read sm:font-400 mt-3 mb-4 md:mt-2'>Living near Vancouver, Canada, I got my start designing and coding websites. Previously, I worked as a JavaScript Developer Intern at <span className='link-hidden text-white'>Semios</span>.</p>

            <div className='flex justify-between items-baseline sm:block'>
              <ul className='flex text-sm text-white'>
                <li><a href='#' className='link-secondary'>Github</a><span className='text-gray'>&nbsp;/&nbsp;</span></li>
                <li><a href='#' className='link-secondary'>Codepen</a><span className='text-gray'>&nbsp;/&nbsp;</span></li>
                <li><a href='#' className='link-secondary'>Behance</a><span className='text-gray'>&nbsp;/&nbsp;</span></li>
                <li><a href='#' className='link-secondary'>LinkedIn</a></li>
              </ul>
              <p className='link inline-block order-first text-white mt-4 sm:mt-3'>Check out my work 👇</p>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* BG Wave Thing */}
    <WaveCanvas/>
    <BgFade/>

    {/* Content */}
    <main ref={contentRef} className='relative z-20'>
      <div className='overflow-x-hidden'>
        <div className='container py-5'>
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-start-2 md:col-start-1 col-span-10 md:col-span-12'>
              <HeadHr />
            </div>
          </div>
        </div>
      </div>

      {/* Works & Projects */}
      <section className='mt-4 mb-6'>
        <div className='label block sticky top-0 text-sm text-upper opacity-75 md:hidden mt-2 -mb-4 mx-3 lg:mb-4'>Work</div>

        <div className='container'>
          <div className='label hidden md:block mb-4'>Work</div>

          <div className='grid grid-cols-2 gap-6 sm:grid-cols-1 lg:gap-5'>

            <div className='col-span-1'>
              <div className='relative'>
                <img src='http://placehold.it/500x320' className='w-full rounded-t'/>
                <h2 className='text-lg tracking-wide absolute top-0 -mt-1 p-4'>
                  <span className='label-padded align-middle mr-2 mb-1'>Plugin</span>
                  Figma Box-It
                  <img src={arrow} className='inline-block ml-2'/>
                </h2>
              </div>

              <div className='text-black bg-white rounded-b px-5 py-4 sm:px-4'>
                <p>Figma-Box It is a plugin for designers to create bounding boxes behind selections easily and effortlessly. Made using Figma API and Svelte</p>
                <div className='font-mono text-xs2 pt-2'>HTML/CSS, Svelte, Figma API</div>

                <div className='flex flex-wrap items-baseline mt-3 mb-2'>
                  <a href='#' className='link text-acc-2 mr-3'>Download it on Figma</a>
                  <a href='#' className='link-secondary font-geo font-wide font-450 text-sm opacity-70'>Source Code</a>
                </div>
              </div>
            </div>

            <div className='col-span-1 mt-8 sm:m-none'>
              <div className='relative'>
                <img src='http://placehold.it/500x320' className='w-full rounded-t'/>
                <h2 className='text-lg tracking-wide absolute top-0 p-4'>
                  <span className='label-padded align-middle mr-2 mb-1'>Plugin</span>
                  Figma Box-It
                  <img src={arrow} className='inline-block ml-2'/>
                </h2>
              </div>

              <div className='text-black bg-white rounded-b px-5 py-4 sm:px-4'>
                <p>Figma-Box It is a plugin for designers to create bounding boxes behind selections easily and effortlessly. Made using Figma API and Svelte</p>
                <div className='font-mono text-xs2 pt-2'>HTML/CSS, Svelte, Figma API</div>

                <div className='mt-3 mb-2'>
                  <a href='#' className='link text-acc-2'>Download it on Figma</a>
                </div>
              </div>
            </div>

            <div className='col-span-1 -mt-8 sm:m-none'>
              <div className='relative'>
                <img src='http://placehold.it/500x320' className='w-full rounded-t'/>
                <h2 className='text-lg tracking-wide absolute top-0 p-4'>
                  <span className='label-padded align-middle mr-2 mb-1'>Plugin</span>
                  Figma Box-It
                  <img src={arrow} className='inline-block ml-2'/>
                </h2>
              </div>

              <div className='text-black bg-white rounded-b px-5 py-4 sm:px-4'>
                <p>Figma-Box It is a plugin for designers to create bounding boxes behind selections easily and effortlessly. Made using Figma API and Svelte</p>
                <div className='font-mono text-xs2 mt-3'>HTML/CSS, Svelte, Figma API</div>

                <div className='mt-3 mb-2'>
                  <a href='#' className='link text-acc-2'>Download it on Figma</a>
                </div>
              </div>
            </div>

            <div className='col-span-1'>
              <div className='relative'>
                <img src='http://placehold.it/500x320' className='w-full rounded-t'/>
                <h2 className='text-lg tracking-wide absolute top-0 p-4'>
                  <span className='label-padded align-middle mr-2 mb-1'>Plugin</span>
                  Figma Box-It
                  <img src={arrow} className='inline-block ml-2'/>
                </h2>
              </div>

              <div className='text-black bg-white rounded-b px-5 py-4 sm:px-4'>
                <p>Figma-Box It is a plugin for designers to create bounding boxes behind selections easily and effortlessly. Made using Figma API and Svelte</p>
                <div className='font-mono text-xs2 mt-3'>HTML/CSS, Svelte, Figma API</div>

                <div className='mt-3 mb-2'>
                  <a href='#' className='link text-acc-2'>Download it on Figma</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className='bg-alt pt-8'>
        {/* <div className='col-span-2 flex mb-4'>
          <img src='http://placehold.it/500x200' className='w-full' />
          <div className='inline-block mr-9 pr-6 md:mr-4 lg:pr-none'></div>
        </div> */}

        <div className='label block sticky top-0 opacity-75 md:hidden mt-2 -mb-5 mx-3 pb-1'>About</div>

        <div className='container'>
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-start-2 col-span-7 lg:col-start-2 lg:col-span-8 md:col-span-10 sm:col-span-12'>
              <div className='text-white mb-4'>
                <hr/>
                <div className='font-mono text-xs2 mt-3 mb-5'>[://] That's me giving my first talk at <a href='#' className='link'>VanJS</a>.</div>

                <p className='font-geo font-350 text-md tracking-tight'>
                  <img src={pointer} className='inline pr-2 pb-1'/>
                  Hi, my name's Jason. I worked with our prototyping team and the Power BI developers to craft a style guide for Power BI, which contains the library of common components used in the product and expands out to design principles for the design team to follow, as well as UX guidance on usage.
                </p>
              </div>

              <p>Microsoft Power BI allows users to take mounds of data and transform them into beautiful interactive visuals and reports. As the Creative Lead for Microsoft Power BI, I was responsible for recruiting, marketing, branding, UX and visual design for all parts of the product. If that sounds like a broad scope of responsibilities—it was!</p>

              <div className='mt-6 mb-5 md:mt-5 sm:mb-none'>
                <h4 className='font-geo text-white font-600 text-lg mb-3'>Technical Skills</h4>
                <hr/>
                
                <div className='grid grid-cols-3 sm:grid-cols-2 gap-4 mt-4'>
                  <div className='col-span-1'>
                    <div className='font-mono text-white text-xs2 mb-2'>Primary</div>
                    <p>HTML/CSS<br/>JavaScript<br/>-</p>
                  </div>

                  <div className='col-span-1'>
                    <div className='font-mono text-white text-xs2 mb-2'>Front-end Tooling</div>
                    <p>React, Vue, Svelte<br/>Gulp, Webpack<br/>Sass, Tailwind CSS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Writings & Articles */}
      <section className='bg-alt py-8'>
        <div className='label block sticky top-0 opacity-75 md:hidden mt-2 -mb-5 mx-3 pb-1'>Writing</div>

        <div className='container'>
          <div className='label hidden md:block mb-4'>Writing</div>

          <div className='grid grid-cols-12 gap-4 -mt-2'>
            <div className='col-start-2 col-span-7 lg:col-start-2 lg:col-span-8 md:col-span-10 sm:col-span-12'>
              <div className='cursor-pointer mb-3 pt-2'>
                <h4 className='link-hidden'>Overcoming the fear of failure <img src={arrow} className='inline-block ml-1'/></h4>
                <p className='font-geo font-350 mt-2'><span className='label-padded text-alt bg-white mr-3 align-middle'>Life</span>Semantic HTML is a great way to convey meaning of your page. Nice! 👏</p>
                <div className='font-mono text-xs2 mt-4'>08.24.2020</div>
                <hr className='my-4'/>
              </div>
              <div className='cursor-pointer mb-3 pt-2'>
                <h4 className='link-hidden'>Cheatsheet for moving from Master to Main <img src={arrow} className='inline-block ml-1'/></h4>
                <p className='font-geo font-350 mt-2'><span className='label-padded text-alt bg-white mr-3 align-middle'>Dev</span>Semantic HTML is a great way to convey meaning of your page.</p>
                <div className='font-mono text-xs2 mt-4'>08.24.2020</div>
                <hr className='my-4'/>
              </div>
              <div className='cursor-pointer mb-3 pt-2'>
                <h4 className='link-hidden'>Learning to draw with Draw-a-box! <img src={arrow} className='inline-block ml-1'/></h4>
                <p className='font-geo font-350 mt-2'><span className='label-padded text-alt bg-white mr-3 align-middle'>Life</span>Semantic HTML is a great way to convey meaning of your page.</p>
                <div className='font-mono text-xs2 mt-4'>08.24.2020</div>
                <hr className='my-4'/>
              </div>
              <div className='cursor-pointer mb-3 pt-2'>
                <h4 className='link-hidden'>Cheatsheet for moving from Master to Main <img src={arrow} className='inline-block ml-1'/></h4>
                <p className='font-geo font-350 mt-2'><span className='label-padded text-alt bg-white mr-3 align-middle'>Dev</span>Semantic HTML is a great way to convey meaning of your page.</p>
                <div className='font-mono text-xs2 mt-4'>08.24.2020</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className='bg-alt pt-1 pb-9'>
        <div className='label block sticky top-0 opacity-75 md:hidden mt-2 -mb-5 mx-3 pb-1'>Contact</div>

        <div className='container'>
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-start-2 col-span-10 md:col-span-12'>
              <h4 className='font-geo font-300 font-wide text-xl3'>Thanks for stopping by!<br/>Want to chat?</h4>

              <div className='flex justify-between items-baseline sm:block'>
                <a href='mailto:contact@jsonyeung.me' className='link inline-block text-xl mt-3 md:mb-3'>contact@jsonyeung.me</a>
                <ul className='flex text-sm text-white'>
                  <li><a href='#' className='link-secondary'>Github</a><span className='text-gray'>&nbsp;/&nbsp;</span></li>
                  <li><a href='#' className='link-secondary'>Codepen</a><span className='text-gray'>&nbsp;/&nbsp;</span></li>
                  <li><a href='#' className='link-secondary'>Behance</a><span className='text-gray'>&nbsp;/&nbsp;</span></li>
                  <li><a href='#' className='link-secondary'>LinkedIn</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    {/* Footer */}
    <footer ref={footerRef} className='fixed w-full bottom-0 py-4'>
      <div className='container'>
        <div className='grid grid-cols-12 font-mono text-xs2 opacity-50'>
          <div className='flex flex-wrap justify-between col-start-2 col-span-10 md:col-span-12'>
            <div>Design & code by Jason Yeung</div>       
            <div className='sm:mt-1'>View <a href='#' className='text-white link-hidden'>this site's code</a> on Github</div>              
          </div>
        </div>
      </div>
    </footer>
  </>)
}

export default IndexPage
