export default function Rightside() {
    return (
        <div className=" col-span-2  h-full relative z-30 ">
            <div className="relative h-full mt-16 ">

                <div className="bg-bd absolute h-screen w-screen top-0 left-0 rounded-tl-3xl z-30">
                </div>
                <div className="relative flex flex-col px-20 py-10 z-30 ">
                    <h1 className="font-heads font-semibold text-5xl text-white tracking-widest">Bienvenido</h1>
                    <div className="w-80 font-body text-base tracking-widest text-white pl-12">
                        <h1 className="mt-14 ">Inicia sesion </h1>
                        <form className="mt-4 w-72" action="#" method="POST" >
                            <div>
                                <input type="email" name="" id="" placeholder="Email" className=" text-bd w-full px-4 py-2 rounded-lg  mt-2  opacity-30 focus:opacity-100 focus:outline-none" autofocus autocomplete required />
                            </div>
                    
                            <div className="mt-4">
                                <input type="password" name="" id="" placeholder="Password" minlength="6" className="text-bd w-full px-4 py-2 rounded-lg mt-2 border opacity-30 focus:opacity-100 focus:border-blue-500
                                    focus:bg-white focus:outline-none" required />
                                    <i className=" "> <svg width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1C1 1 3.91667 4.33333 9.33333 4.33333C14.75 4.33333 17.6667 1 17.6667 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M2.66667 2.37085L1 4.33335" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M17.6668 4.33329L16.0034 2.37329" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M6.76167 4.06665L6 6.41665" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M11.8857 4.07336L12.6666 6.4167" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </i>

                                    <i className=""> 
                                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 8.88889C5.7636 8.88889 3.036 7.35778 1.3152 5C3.036 2.64222 5.7636 1.11111 9 1.11111C12.2364 1.11111 14.964 2.64222 16.6848 5C14.964 7.35778 12.2364 8.88889 9 8.88889ZM9 0C5.1696 0 1.9872 1.89556 0.0912014 4.70556C0.0316018 4.79385 0 4.89588 0 5C0 5.10412 0.0316018 5.20615 0.0912014 5.29444C1.9872 8.10444 5.1696 10 9 10C12.8304 10 16.0128 8.10444 17.9088 5.29444C17.9684 5.20615 18 5.10412 18 5C18 4.89588 17.9684 4.79385 17.9088 4.70556C16.0128 1.89556 12.8304 0 9 0ZM9 7.22222C9.63652 7.22222 10.247 6.9881 10.6971 6.57135C11.1471 6.1546 11.4 5.58937 11.4 5C11.4 4.41063 11.1471 3.8454 10.6971 3.42865C10.247 3.0119 9.63652 2.77778 9 2.77778C8.36348 2.77778 7.75303 3.0119 7.30294 3.42865C6.85286 3.8454 6.6 4.41063 6.6 5C6.6 5.58937 6.85286 6.1546 7.30294 6.57135C7.75303 6.9881 8.36348 7.22222 9 7.22222Z" fill="white"/>
                                        </svg>
                                    </i>
                            </div>
                    
                            <div className="text-right mt-2">
                                <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                            </div>
                    
                            <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                                px-4 py-3 mt-6">Log In</button>
                        </form>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}
