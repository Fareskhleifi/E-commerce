// SlideSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import p1 from './imgs/OurPrin.jpg';
import p2 from './imgs/Our1.jpg';
import p3 from './imgs/Our2.jpg';
import p4 from './imgs/Our3.jpg';
import p5 from './imgs/Our4.jpg';
import p6 from './imgs/OurPrin.jpg';
import p7 from './imgs/Our2.jpg';
import { Link } from 'react-router-dom';

export default function Promo() {
    return (
      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Summer styles are finally here
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
                if you live or die.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            alt=""
                            src={p1}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={p2}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-40 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={p7}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={p6}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-40 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={p5}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={p3}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src={p4}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <Link
                  to="/+"
                  className="inline-block rounded-md border border-transparent bg-[#0B253E] px-8 py-3 text-center  font-medium text-white hover:bg-[#FF6910]"
                >
                  Shop Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  