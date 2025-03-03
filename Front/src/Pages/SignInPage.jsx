import Input from "../Components/InputPage/Input";

export default function SignInPage() {


  function handleSignIn(e) {
    console.log("button sign clicked");
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    console.log(data);
    
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
        <Input labelName="FullName" typeName="text" nameType="text" />
        <Input labelName="Email" typeName="email" nameType="email" />
        <Input labelName="Contact Number" typeName="number" nameType="number" />
        <Input labelName="Date of Birth" typeName="date" nameType="date" />
        <Input labelName="Password" typeName="password" nameType="password" />
      <button
        type="submit"
        className="w-[320px] rounded-[8px] mt-[10px] p-3 cursor-pointer bg-white border border-blue-400 hover:bg-blue-400"
      >
        Sign In
      </button>
      </form>

    </div>
  );
}
