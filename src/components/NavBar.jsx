import React from 'react'
import SignupBtn from './SignupBtn'
import LoginBtn from './LoginBtn'

export default function NavBar() {
	return (
		<>
      <header>
        <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
          <div class="mb-2 sm:mb-0">
            <a href="#" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Home</a>
          </div>
          <div>
            <a href="#" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Courses</a>
            <a href="#" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Contact</a>
            <a href="#" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Price</a>
          </div>
          <div class="flex">
            <div><LoginBtn /></div>
            <div><SignupBtn /></div>
          </div>
        </nav>
      </header>

      <main>
        <section>
          <div>
            <div>
              <div></div>
              <div></div>
            </div>
            <div></div>
          </div>
        </section>

        <section>
          <div>
            <div></div>
            <div>
              <div></div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div>
                <div></div>
                <div></div>
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            
          </div>
          <div>
            
          </div>
        </section>
      </main>
    </>
	)
}