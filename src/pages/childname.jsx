            
            function Childname(){
            return(
                <div className="bg-primary w-screen h-screen bg-fixed flex justify-center items-center">
                    <div className='bg-white w-6/12 h-96 rounded-lg'>
                        <div className='text-center' >
                    <h3 className="mt-9 text-2xl text-secondary">What's your child's name</h3>
                    <p className="mt-8 text-secondary text-lg  ">They 'll learn how to write it themselves</p>
                    <form>
                        <input type="text" name="name" placeholder="Name" className="w-8/12 border border-solid border-black bg-yellow-100 mt-7 h-9 rounded-lg " />
                        </form>
                        <p className="text-lg text-secondary mt-14 ">
                            By continuing, you agree to our <span className="font-bold"> Terms</span> and <span className="font-bold">Privacy Policy</span>
                        </p>
                        <button className="w-8/12 border border-solid border-black bg-primary h-9 mt-7 rounded-lg">Continue</button>
                </div>
                </div>
                </div>
        
            )
        }




export default Childname