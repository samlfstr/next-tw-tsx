import Link from 'next/link';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='body-font my-5 flex h-screen items-center text-gray-600'>
          <div className='container mx-auto px-5 py-0'>
            <div className='-m-4 flex flex-wrap'>
              <div className='p-4 md:w-1/3'>
                <div className='flex h-full flex-col rounded-lg bg-gray-100 p-8'>
                  <div className='mb-3 flex items-center'>
                    <div
                      className='
                               sm:w-15 sm:h-15 h-15
                               w-15
                               order-first
                               mr-3
                               inline-flex
                               inline-flex
                               h-8
                               w-8
                               flex-shrink-0 flex-shrink-0
                               animate-bounce items-center
                               items-center
                               justify-center justify-center rounded-full
                               rounded-full
                               bg-indigo-500
                               bg-indigo-700
                               text-white
                               text-white
                               sm:order-none
                               sm:ml-1
                               '
                    >
                      <svg
                        fill='none'
                        stroke='currentColor'
                        className='h-5 w-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
                      </svg>
                    </div>
                    <h2 className='title-font mb-2 text-lg font-medium text-gray-900'>
                      Type script
                    </h2>
                  </div>
                  <div className='flex-grow'>
                    <p className='text-base leading-relaxed'>
                      All typescript function types and structure
                    </p>
                    <Link href='./start'>
                      <a className='mt-3 inline-flex items-center text-indigo-500'>
                        Example
                        <svg
                          fill='none'
                          stroke='currentColor'
                          className='ml-2 ml-2 h-4 h-4 w-4 w-4 animate-ping'
                          viewBox='0 0 24 24'
                        >
                          <path d='M5 12h14M12 5l7 7-7 7'></path>
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='p-4 md:w-1/3'>
                <div className='flex h-full flex-col rounded-lg bg-gray-100 p-8'>
                  <div className='mb-3 flex items-center'>
                    <div
                      className='
                               sm:w-15 sm:h-15 h-15
                               w-15
                               order-first
                               mr-3
                               inline-flex
                               inline-flex
                               h-8
                               w-8
                               flex-shrink-0 flex-shrink-0
                               animate-bounce items-center
                               items-center
                               justify-center justify-center rounded-full
                               rounded-full
                               bg-indigo-500
                               bg-indigo-700
                               text-white
                               text-white
                               sm:order-none
                               sm:ml-1
                               '
                    >
                      <svg
                        fill='none'
                        stroke='currentColor'
                        className='h-5 w-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
                      </svg>
                    </div>
                    <h2 className='title-font mb-2 text-lg font-medium text-gray-900'>
                      Increment, Decrement
                    </h2>
                  </div>
                  <div className='flex-grow'>
                    <p className='text-base leading-relaxed'>
                      Increment & Decrement
                    </p>
                    <Link href='./increment'>
                      <a className='mt-3 inline-flex items-center text-indigo-500'>
                        Example
                        <svg
                          fill='none'
                          stroke='currentColor'
                          className='ml-2 ml-2 h-4 h-4 w-4 w-4 animate-ping'
                          viewBox='0 0 24 24'
                        >
                          <path d='M5 12h14M12 5l7 7-7 7'></path>
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='p-4 md:w-1/3'>
                <div className='flex h-full flex-col rounded-lg bg-gray-100 p-8'>
                  <div className='mb-3 flex items-center'>
                    <div
                      className='
                               sm:w-15 sm:h-15 h-15
                               w-15
                               order-first
                               mr-3
                               inline-flex
                               inline-flex
                               h-8
                               w-8
                               flex-shrink-0 flex-shrink-0
                               animate-bounce items-center
                               items-center
                               justify-center justify-center rounded-full
                               rounded-full
                               bg-indigo-500
                               bg-indigo-700
                               text-white
                               text-white
                               sm:order-none
                               sm:ml-1
                               '
                    >
                      <svg
                        fill='none'
                        stroke='currentColor'
                        className='h-5 w-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
                      </svg>
                    </div>
                    <h2 className='title-font mb-2 text-lg font-medium text-gray-900'>
                      React Table
                    </h2>
                  </div>
                  <div className='flex-grow'>
                    <p className='text-base leading-relaxed'>
                      Basic React Table
                    </p>
                    <Link href='./tablepage'>
                      <a className='mt-3 inline-flex items-center text-indigo-500'>
                        Example
                        <svg
                          fill='none'
                          stroke='currentColor'
                          className='ml-2 ml-2 h-4 h-4 w-4 w-4 animate-ping'
                          viewBox='0 0 24 24'
                        >
                          <path d='M5 12h14M12 5l7 7-7 7'></path>
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
