import axios from "axios";
import { useState } from "react"

type userInfo = {
  userName: string;
  email:string;
  password:string;
}

export const SignUp = () => {
  const [form, setform] = useState<userInfo>({
    userName: "",
    email: "",
    password: ""
  })
  const [error, setError] = useState("");

  const SignUp = () =>{
    if(form.userName == "" || form.email == "" || form.password == ""){
      setError("Should fill all");

    }

    else if(form.userName.length<6){
      setError("username should be more than 6 characters");
    }
    else if(form.email.length<6){
      setError("email should be more than 6 characters");
    }
    else if(form.password.length<6){
      setError("password should be more than 6 characters");
    }else{
      axios.post('https://64ecbc0cf9b2b70f2bfaddb4.mockapi.io/users', {
        userName: form.userName,
        email: form.email,
        password: form.password,
      })
      .then(function (response) {
        console.log(response);
        window.location.href="/login";
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
  return (
    <div>
        <section className="bg-gray-50 dark:bg-[#232F3E]">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-36 h-16 mr-2" src="https://ktobly-global-cdn.ams3.cdn.digitaloceanspaces.com/uploads/tajrobtak/originals/06efefee-ea5b-4243-9361-8358d77501d1.png" alt="logo"/>
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create account
              </h1>
              <div>
                      <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your userName</label>
                      <input type="text" name="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" 
                      value={form.userName}  onChange={(e) => setform({...form , userName:e.target.value})} />
                  </div>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"
                      value={form.email}  onChange={(e) => setform({...form , email:e.target.value})}/>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      value={form.password}  onChange={(e) => setform({...form , password:e.target.value})}/>
                  </div>
                  <div className="text-red-300">{error}</div>
                  <button type="button" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={SignUp}>Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="/" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}
