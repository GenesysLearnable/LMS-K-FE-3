import React from 'react'
import SignupBtn from './SignupBtn'
import LoginBtn from './LoginBtn'
import logo from '../assets/logo.png'

export default function NavBar() {
	return (
		<>
      <header>
        <nav class="justify-center flex flex-col sm:flex-row sm:text-left sm:justify-between px-6 w-full">
          <div class="sm:mb-0">
            <a href="#" class="text-2xl no-underline text-grey-darkest hover:text-blue-dark"><img src= { logo } alt="learnable kids logo" /></a>
          </div>
          <div class="mt-3 flex gap-12">
            <a href="#" class="text-2xl font-bold no-underline text-grey-darkest hover:text-blue-dark ml-2">Courses</a>
            <a href="#" class="text-2xl font-bold no-underline text-grey-darkest hover:text-blue-dark ml-2">Contact</a>
            <a href="#" class="text-2xl font-bold no-underline text-grey-darkest hover:text-blue-dark ml-2">Price</a>
          </div>
          <div class="flex align-top mt-2">
            <LoginBtn />
            <SignupBtn />
          </div>
        </nav>
      </header>
    </>
	)
}