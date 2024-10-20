'use client'
import { useEffect } from 'react'
const Carousel = () => {
  useEffect(() => {
    const init = async () => {
      const { Carousel, initTWE } = await import('tw-elements')
      initTWE({ Carousel })
    }
    init()
  }, [])

  return (
    <div
      id="carouselExampleCaptions"
      className="relative pl-20 pr-20"
      data-twe-carousel-init
      data-twe-ride="carousel"
    >
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-twe-carousel-indicators
      >
        <button
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide-to="0"
          data-twe-carousel-active
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide-to="1"
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide-to="2"
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide-to="3"
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide-to="4"
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide-to="5"
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 6"
        ></button>
        <button
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide-to="6"
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 7"
        ></button>
        <button
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide-to="7"
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 8"
        ></button>
        <button
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide-to="8"
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 9"
        ></button>
      </div>

      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        <div
          className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-active
          data-twe-carousel-item
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img src="/imgs/web1.jpg" className="block w-full" alt="..." />
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            <h5 className="text-xl">First Web Project</h5>
            <p>WebProgramming Demos</p>
          </div>
        </div>
        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src="https://story-img.kakaocdn.net/dn/GrREh/hyXe6BNbLt/gLOa1VbMezgV54ZjGKaYC1/img_xl.jpg?width=1920&height=1080&avg=%25239bb9d4&v=2"
            className="block w-full"
            alt="..."
          />
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center bg-gray-400/75 text-black md:block">
            <h5 className="text-xl">Second Web Project</h5>
            <p>Make My Own Blog</p>
          </div>
        </div>
        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src="https://story-img.kakaocdn.net/dn/diJxs/hyXfdHHk2m/a4ijaqYQT2NFdUNI2dNv5k/img_xl.jpg?width=1920&height=1080&avg=%252385898f&v=2"
            className="block w-full"
            alt="..."
          />
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center bg-gray-400/75 text-black md:block">
            <h5 className="text-xl">Third Web Project</h5>
            <p>Web Design project</p>
          </div>
        </div>
        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src="https://story-img.kakaocdn.net/dn/Yy0Fn/hyXfcWjfMj/TYV5NFH4K7vaiAsrotQS3k/img_xl.jpg?width=1920&height=1080&avg=%2523323638&v=2"
            className="block w-full"
            alt="..."
          />
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
            <h5 className="text-xl">4th Web Project</h5>
            <p>Shopping list with JavaScript</p>
          </div>
        </div>
        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src="https://story-img.kakaocdn.net/dn/ibZir/hyXfaKVjX7/Ba2HWkdjHUjZDgteKG5sM1/img_xl.jpg?width=963&height=413&avg=%25235c574f&v=2"
            width={1920}
            height={1080}
            className="block w-full"
            alt="..."
          />
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center bg-gray-400/75 text-white md:block">
            <h5 className="text-xl">5th Web Project</h5>
            <p>Slide show with JavaScript</p>
          </div>
        </div>
        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src="https://story-img.kakaocdn.net/dn/k6Cfd/hyXflsbFnb/2VAY8ZpsltR9toYLW3ymmK/img_xl.jpg?width=1920&height=1080&avg=%2523edeeef&v=2"
            className="block w-full"
            alt="..."
          />
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center bg-gray-400/75 text-black md:block">
            <h5 className="text-xl">6th Web Project</h5>
            <p>Purchase Page with JavaScript</p>
          </div>
        </div>
        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src="https://story-img.kakaocdn.net/dn/bQtUr2/hyXfg5ott0/kPaunKXk4agYSaANBcg4Ek/img_xl.jpg?width=1920&height=1080&avg=%2523e3dae9&v=2"
            className="block w-full"
            alt="..."
          />
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center bg-gray-400/75 text-black md:block">
            <h5 className="text-xl">7th Web Project</h5>
            <p>Ping pong Score with JavaScript</p>
          </div>
        </div>
        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src="https://story-img.kakaocdn.net/dn/qs7K0/hyXfi93wSo/v7gonobH02GlkFTFSsKtw0/img_xl.jpg?width=1920&height=1080&avg=%25233e3a38&face=726_900_813_993&v=2"
            className="block w-full"
            alt="..."
          />
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center bg-gray-400/75 text-white md:block">
            <h5 className="text-xl">8th Web Project</h5>
            <p>Web Team Project : Movie Theater Web Site</p>
          </div>
        </div>
        <div
          className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src="https://story-img.kakaocdn.net/dn/bbcTYD/hyXfd8L70h/z466JkHgiywj2ciRLhDyZk/img_xl.jpg?width=1920&height=1080&avg=%25238e8182&v=2"
            className="block w-full"
            alt="..."
          />
          <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center bg-gray-400/75 text-black md:block">
            <h5 className="text-xl">9th Web Project</h5>
            <p>Web Team Project : JBU </p>
          </div>
        </div>
      </div>

      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none ml-10"
        type="button"
        data-twe-target="#carouselExampleCaptions"
        data-twe-slide="prev"
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none mr-10"
        type="button"
        data-twe-target="#carouselExampleCaptions"
        data-twe-slide="next"
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
  )
}

export default Carousel
