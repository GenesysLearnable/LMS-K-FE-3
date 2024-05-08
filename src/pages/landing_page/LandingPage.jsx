import React from 'react'
import NavBar from '../../components/NavBar'
import kids_1 from '../../assets/kids_1.png'
import phonics from '../../assets/phonics.png'
import kids_2 from '../../assets/kids_2.png'
import kids_3 from '../../assets/kids_3.png'


export default function LandingPage() {
	return (
		<>
  	      <NavBar />
  	        <main>
		        <section>
		          <div class="mt-10 flex flex-col items-center justify-center">
		            <div class="flex gap-x-28">
		              <div class="space-y-5">
						<p class="text-5xl font-bold">Learning can be hard <br/> we make it <span>fun!</span></p>
		              	<p class="text-base">Engage children in learning mapped to approved <br/> school curriculum with visually rich and interactive <br/> content</p>
		              	<div class="flex flex-col items-center justify-center">
		              		<button type="button" class="text-xl text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-xl px-5 py-2.5 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Get started</button>
		              	</div>
		              </div>
		              <div>
		              	<img src={ kids_1 } alt="" />
		              </div>
		            </div>
		          </div>
		        </section>

		        <section>
			        <div class="flex flex-col items-center justify-center">
			          <div class="flex gap-x-28 h-screen items-center">
			            <div>
			            	<img src={ kids_2 } alt="" />
			            </div>
			            <div class="space-y-5">
			              <h1 class="text-5xl font-bold">Learning to read through <br/> <span>play</span></h1>
		              	  <p class="text-base">A comprehensive phonics curriculum that feels like a game</p>
			            </div>
			          </div>
			        </div>
		        </section>

		        <section>
			        <div class="flex flex-col items-center justify-center">
			          <div class="flex gap-x-28 h-screen items-center">
			            <div class="space-y-5">
			              <h1 class="text-5xl font-bold">Solve problems through <br/> <span>games</span></h1>
		              	  <p class="text-base">Fun character-driven exercises that help kids experience the joy of learning.</p>
			            </div>
			            <div>
			            	<img src={ kids_3 } alt="" />
			            </div>
			          </div>
			        </div>
		        </section>

		        <section>
		          <div>
		            <div class="flex flex-col items-center justify-center">
		              <div class="space-y-5 text-center">
		              	<h1 class="text-5xl font-bold">What will kids learn</h1>
		              	<p class="text-base">Our curriculum is based on recommendations by the National Education Board</p>
		              </div>
		            </div>
		            <div class="inline-flex justify-center items-center">
		              <div class="text-center justify-center">
		                <div class="justify-center">
		                	<img src={ phonics } alt="" />
		                </div>
		                <div>
		                	<h1 class="text-5xl font-bold">Phonics</h1>
		                	<p>Learn letter sounds and decoding with bite-sized lessons</p>
		                </div>
		              </div>
		              <div class="text-center">
		                <div>
		                	<img src={ phonics } alt="" />
		                </div>
		                <div>
		                	<h1 class="text-5xl font-bold">Math</h1>
		                	<p>Learn problem solving techniques to approach common tricky math problems</p>
		                </div>
		              </div>
		              <div class="text-center">
		                <div>
		                	<img src={ phonics } alt="" />
		                </div>
		                <div>
		                	<h1 class="text-5xl font-bold">Vocabulary</h1>
		                	<p>Build reading comprehension and word knowledge</p>
		                </div>
		              </div>
		              <div class="text-center">
		                <div>
		                	<img src={ phonics } alt="" />
		                </div>
		                <div>
		                	<h1 class="text-5xl font-bold">Reasoning</h1>
		                	<p>Build ability to tackle basic quantitative problems</p>
		                </div>
		              </div>
		            </div>
		          </div>
		        </section>

		        <section>
		          <div>
		            <h1 class="text-3xl font-bold">We have a vision</h1>
		             <p>Learnable kids aims to make learning with fun educational games, activities and quizzes.</p>
		          </div>
		          <div>
		            
		          </div>
		        </section>
      	    </main>

      	    <footer>
      	    	<div>
      	    		<div>
      	    			<p>Contact Us</p>
      	    		</div>
      	    		<div>
      	    			<p>Reach out at learnablekids-feedback@learnable.com</p>
      	    		</div>
      	    		<div>
      	    			<div></div>
      	    			<div></div>
      	    			<div></div>
      	    			<div></div>
      	    			<div></div>
      	    		</div>
      	    		<div>
      	    			<p>2024 © Copyright Group3 learnable23</p>
      	    			<a href="">About</a>
      	    			<a href="">Careers</a>
      	    			<a href="">Apps</a>
      	    			<a href="">Help</a>
      	    			<a href="">Terms</a>
      	    			<a href="">Privacy</a>
      	    			<div>
	      	    			
      	    			</div>
      	    		</div>
      	    	</div>
      	    </footer>
		</>
	)
}