import '../components/amaka.css'
function Amaka() {
    return (
        <div className="search-body">
            <div className='search-sub'>
                <div className='text-col' >
                    <h3><span className='search-text'>Do you want search on or off?</span></h3>
                    {/* <h4>Do you want search on or</h4> */}
                    <p>When you turn search on, your child can search for new videos that interest them from the millions available on Learnable Kids.
                        When you turn search off, you limit your child to videos from a set of channels that have been verified by learnable Kids.
                        Your child can't search for videos.

                        <br />  <br /> Either way, there is always a chance your child may find something you don't want them to watch.
                        You can flag this content for our quick review.</p>
                    <div className='search-btn'>
                        <button className='BackBtn'>Back</button>
                        <button className="NextBtn">Next</button>

                        <div class="container">
                            <input type="checkbox" id='check'/>
                            <label For="check" class='button'></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}



export default Amaka