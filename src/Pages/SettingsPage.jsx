import SettingCard from "../Components/SettingComponent/SettingCard";
import serverData from "../assets/Dummy_Data/serverData";

export default function SettingsPage() {
  return (
    <div className="mx-[190px] w-[800px] mt-[30px] flex flex-col items-start justify-start">
      <div>
        <h1
          style={{ fontFamily: "IvyMode, sans-serif" }}
          className="text-left text-[24px] leading-[24px] tracking-normal text-[#222222] opacity-100"
        >
          Good morning Charlie!
        </h1>
        <p
          style={{ fontFamily: "BrownLight, sans-serif" }}
          className="mt-[15px] text-left  text-[16px] leading-[30px] tracking-[0.53px] text-[#222222] opacity-85"
        >
          You can change the settings for your personal data and other
          information.
        </p>
      </div>
      <div className="mt-[40px] flex flex-col space-y-10">
        {serverData[0].settingData.map((data1) => (
          <SettingCard key={data1.id} data1={data1} />
        ))}
      </div>

      
    </div>
  );
}
