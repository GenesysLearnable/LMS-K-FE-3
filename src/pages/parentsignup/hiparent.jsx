import './style/hiparent.css'
import waving from '../components/image/Waving Hand Emoji (1).png'

function Hiparent(){
    return(
        <div className="hiparent-body">
            <div className='hiparent-sub'>
                <div className='text-col' >
            <h3><span className='hiparent-text'>Hi Parent</span> <img src={waving} className={waving}/></h3>
                        <h4>Sign up with your account</h4>
            <p>Sign up with your own account to set up a profile and get more parental controls.
           <br />     If you don't want to sign in, you can skip this step.</p>
            <div className='hiparent-btn'>
                <button className='BackBtn'>Back</button>
                <button className="SignupBtn">Sign Up</button>
            </div>
            </div>
        </div>
        </div>

    )
}
export default Hiparent