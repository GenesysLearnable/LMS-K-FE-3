import React from "react";

export default function Login() {
  return (
    <div className="flex w-full h-screen bg-yellow-800">
      <form
        className="bg-white-800 rounded-3xl px-10 py-20  w-full flex items-center justify-center"
        method="post"
      >
        <input className="w-full border-gray-100 rounded-xl p-4 " type="email" name="" id="" placeholder="Email Address" />
        <input type="password" name="" id="" placeholder="Password" />
        <button type="submit" onclick="solve()" id="login-button">
          CONTINUE
        </button>
        <div style="display: flex; align-items: center;">
          <p>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              style="text-decoration: none"
            >
              Forgot password?
            </a>
            Not registered?
            <a href="#" style="text-decoration: none">
              {" "}
              Create an account{" "}
            </a>
          </p>
        </div>
        <div class="or-span">
          <span></span>
          <p>or</p>
          <span></span>
        </div>
        <div class="">
          <button id="google-login">
            <img src="icons/Google - Original.png" /> Continue with Google
          </button>
          <button id="facebook-login">
            <img src="icons/_Facebook.png" />
            Continue with Facebook
          </button>
        </div>
      </form>
    </div>
  );
}
