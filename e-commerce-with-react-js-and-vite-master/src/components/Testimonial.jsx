import React from 'react';
import moi from './imgs/moi.jpg';

const TestimonialsSection = () => {
  return (
    <section className="py-6 text-[#0B253E] sm:py-16 lg:py-20 ">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-screen-lg lg:px-8">
        <div className="flex flex-col lg:flex-row">
          <div className="relative  mx-auto mb-20 flex h-96 overflow-hidden rounded-xl bg-[#0B253E] shadow sm:mt-20 lg:h-auto lg:max-w-md lg:pt-20">
            <img
              className="absolute top-0 h-full w-full object-cover opacity-10"
              src="https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
              alt=""
            />
            <div className="relative mt-auto w-full">
              <div className="flex flex-col p-6 lg:px-7 lg:py-8">
                <div>
                  <blockquote>
                    <p className="text-3xl font-bold text-white sm:text-5xl">
                      "Je ne saurais trop dire combien cela a aidé notre startup"
                    </p>
                  </blockquote>
                </div>

                <div className="mt-10 flex items-center">
                  <img
                    className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                    src={moi}
                    alt=""
                  />
                  <div className="ml-4 text-white">
                    <p className="text-base font-bold">Jacob Jones</p>
                    <p className="text-blue-90 mt-0.5 text-sm">Personnalité YouTube</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto grid max-w-lg grid-cols-1 gap-y-14 lg:pl-20">
            <div className="flex flex-col bg-white">
              <div>
                <blockquote>
                  <p className="text-lg leading-relaxed">
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolores facere repellendus, velit quis fugiat."
                  </p>
                </blockquote>
              </div>
              <div className="mt-4 flex items-center">
                <img
                  className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                  src={moi}
                  alt=""
                />
                <div className="ml-4">
                  <p className="text-base font-bold">James Khawalski</p>
                  <p className="mt-0.5 text-sm">PDG, Mavoline</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col bg-white">
              <div>
                <blockquote>
                  <p className="text-lg leading-relaxed">
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolores facere repellendus, velit quis fugiat."
                  </p>
                </blockquote>
              </div>

              <div className="mt-4 flex items-center">
                <img
                  className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                  src={moi}
                  alt=""
                />
                <div className="ml-4">
                  <p className="text-base font-bold">Jacob Jones</p>
                  <p className="text-blue-90 mt-0.5 text-sm">Personnalité YouTube</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-white">
              <div>
                <blockquote>
                  <p className="text-lg leading-relaxed">
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolores facere repellendus, velit quis fugiat."
                  </p>
                </blockquote>
              </div>

              <div className="mt-4 flex items-center">
                <img
                  className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                  src={moi}
                  alt=""
                />
                <div className="ml-4">
                  <p className="text-base font-bold">Jenny Wilson</p>
                  <p className="text-blue-90 mt-0.5 text-sm">Commentatrice Esports</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
