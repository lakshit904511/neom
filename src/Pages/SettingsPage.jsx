import { settingData } from "../assets/Dummy_Data/data";
import SettingCard from "../Components/SettingComponent/SettingCard";

export default function SettingsPage() {
  return (
    <div className="mx-auto w-[800px] mt-[30px] flex flex-col items-start justify-start">
      <div>
        <h1
          style={{ fontFamily: "IvyMode, sans-serif" }}
          className="text-left text-[32px] leading-[44px] tracking-[1.19px] text-[#222222] opacity-100"
        >
          Good morning Charlie!
        </h1>
        <p
          style={{ fontFamily: "BrownLight, sans-serif" }}
          className="mt-[15px] text-left text-[20px] leading-[30px] tracking-[0.53px] text-[#222222] opacity-100"
        >
          You can change the settings for your personal data and other
          information.
        </p>
      </div>
      <div className="mt-[60px] flex flex-col space-y-10">
        {settingData.map((data1) => (
          <SettingCard key={data1.id} data1={data1} />
        ))}
      </div>

      
    </div>
  );
}
