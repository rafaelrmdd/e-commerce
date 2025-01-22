export const Content = () => {
    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <div className="flex flex-col items-center w-[35%] ">
                <h1 className="text-4xl font-bold mb-10">Login</h1>

                <form action="" className="p-8 flex flex-col items-center gap-y-6 w-full">
                    <input 
                        type="text" 
                        name="login" 
                        placeholder="Login"
                        className="p-2 border rounded-md outline-none w-full"
                    />

                    <input 
                        type="text" 
                        name="login" 
                        placeholder="Password"
                        className="p-2 border rounded-md outline-none w-full"
                    />

                    <div className="flex justify-between w-full items-center">
                        <div className="flex gap-1">
                            <input type="checkbox" name="remember-me"/>
                            <label htmlFor="remember-me" className="text-sm">Remember-me</label>
                        </div>
                        
                        <span className="text-indigo-500 text-sm font-medium">Forgot your password?</span>
                    </div>

                    <button 
                        type="submit" 
                        className="w-full py-2 px-4 rounded-md bg-indigo-600 text-white"
                    >
                            Sign in
                    </button>
                </form>
            </div>
            
        </div>
    )
}