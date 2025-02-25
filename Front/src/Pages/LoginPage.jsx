import { FaGoogle } from "react-icons/fa";

export default function LoginPage({ loginHandle }) {


  

  return (
    <div className="flex flex-col justify-center items-center bg-gray-300 h-[100vh] mx-[-120px]">
         
      <div className=" flex w-full flex-col justify-center px-5 pt-0 md:h-[unset] md:max-w-[50%] lg:h-[100vh] min-h-[100vh] lg:max-w-[50%] lg:px-6">
        <h1 style={{fontFamily:"IvyMode, sans-serif"}} className="text-center text-[32px] tracking-widest font-bold text-zinc-950 dark:text-white mb-[60px]">WELCOME TO NEOM</h1>
        <div className=" flex flex-col items-center w-[400px] justify-center ml-[120px]">
        
          <div className="w-[400px] ">
            <form className="mb-4 w-full " >
              <div className="grid gap-2">
                <div className="grid gap-1">
                  <label
                    className="text-zinc-950 dark:text-white tracking-wider"
                    htmlFor="email"
                    style={{fontFamily:"IvyMode, sans-serif"}}
                    
                  >
                    Email
                  </label>
                  <input
                    className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-[#f9f7f2] px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    name="email"
                  />
                  <label
                    className="text-zinc-950 mt-2 dark:text-white tracking-wider"
                    htmlFor="password"
                    style={{fontFamily:"IvyMode, sans-serif"}}
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    placeholder="Password"
                    type="password"
                    autoComplete="current-password"
                    className="mr-2.5 mb-2 h-full min-h-[44px] w-full rounded-lg border border-zinc-200 bg-[#f9f7f2] px-4 py-3 text-sm font-medium text-zinc-950 placeholder:text-zinc-400 focus:outline-0 dark:border-zinc-800 dark:bg-transparent dark:text-white dark:placeholder:text-zinc-400"
                    name="password"
                  />
                </div>
                <button
                  className="border bg-white whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 mt-2 flex h-[unset] w-full items-center justify-center rounded-lg px-4 py-4 text-sm font-medium"
                  type="submit"
                  
                >
                  Sign in
                </button>
              </div>
            </form>
            <div className="flex items-center justify-center mt-5">
              <h5>OR</h5>
            </div>
            <button
              onClick={loginHandle}
              className="mt-5 inline-flex items-center bg-white justify-center  rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 w-full text-zinc-950 py-6 dark:text-white"
            >
              <FaGoogle className="mr-5 text-red-600" />
              <span>Sign in with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
