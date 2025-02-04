import { dataDashBoardCard3 } from "../assets/Dummy_Data/data";
import DashBoardCard3 from "../Components/DashboardCards/DashBoardCard3";
import Header from "../Components/Header/header";


export default function MyFavrouites() {
  return (
    <>
      <Header />
      <section className="mt-[29px]">
        <h2
          style={{ fontFamily: "IvyMode, sans-serif" }}
          className="w-[375px] h-[52px] text-left text-[25px] leading-[44px] tracking-[1.16px] text-[#222222]"
        >
          Good morning Charlie!
        </h2>

        <p
          style={{ fontFamily: "BrownLight, sans-serif" }}
          className="text-left text-[18px] opacity-80 text-[#222222]"
        >
          You have short listed 8 events to join later.
        </p>

        <div className="mt-[36px]">
          <div className="mt-[20px] flex items-center gap-[15px]">
            {dataDashBoardCard3.map((card3) => (
              <DashBoardCard3 key={card3.id} card3={card3} />
            ))}
          </div>
          <div className="mt-[20px] flex items-center gap-[15px]">
            {dataDashBoardCard3.map((card3) => (
              <DashBoardCard3 key={card3.id} card3={card3} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
