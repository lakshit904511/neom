import { useNavigate } from "react-router-dom";
import store from "../../Store";
import Input from "../Components/InputPage/Input";
import { UserSignIn } from "../Features/User/UserSlice";

export default function SignInPage() {
  const navigate=useNavigate();

  function handleSignIn(e) {
    console.log("button sign clicked");
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data);
    store.dispatch(UserSignIn(data));
  }
  return (
    <div className="flex flex-col items-center gap-[20px] h-[100vh] bg-white mx-[-150px] bg-[linear-gradient(116deg,#fee8a6_0%,#f1d9ff_86%)]">
      <h1
        style={{ fontFamily: "IvyMode, sans-serif" }}
        className="text-center text-[32px] tracking-widest mt-[30px] font-normal text-zinc-800 dark:text-white mb-[10px]"
      >
        WELCOME TO NEOM
      </h1>
      
      <form onSubmit={handleSignIn} className="flex flex-col justify-evenly">
        <Input labelName="FullName" typeName="text" nameType="FullName" />
        <Input labelName="Email" typeName="email" nameType="Email" />
        <Input labelName="Contact Number" typeName="number" nameType="Contact" />
        <Input labelName="Date of Birth" typeName="date" nameType="date_of_birth" />
        <Input labelName="Password" typeName="password" nameType="password" />
      <button
        type="submit"
        className="w-[320px] rounded-[8px] mt-[10px] p-3 cursor-pointer bg-white border border-blue-400 hover:bg-blue-400"
      >
        Sign Up
      </button>
      <button
        onClick={()=>navigate(-1)}
        className="w-[120px] rounded-[8px] mt-[10px] p-2 text-[13px] cursor-pointer bg-white border hover:bg-black hover:text-white"
      >
        Back to Login
      </button>
      </form>

    </div>
  );
}
