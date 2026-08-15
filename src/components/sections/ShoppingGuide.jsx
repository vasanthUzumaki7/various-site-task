import Container from "@/components/ui/Container";
import GuideCard from "@/components/ui/GuideCard";
import SectionTitle from "@/components/ui/SectionTitle";
import Capa from "@/assets/images/Capa.png";
import SandPot from "@/assets/images/sand-pot.png";
import PotGift from "@/assets/images/pot-gift.png";
import ClosingPot from "@/assets/images/closing-pot.png";
import DarkBtn from "@/components/ui/DarkBtn";
import { IoIosArrowForward } from "react-icons/io";

export default function ShoppingGuide() {
  return (
    <section className="SectionPaddingTop SectionPaddingBottom">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] items-center rounded-[32px] bg-white lg:p-[50px] p-[30px]">
          <div className="2xl:max-w-[569px] xl:px-[20px]">
            <SectionTitle
              image={Capa}
              imgCustom={"max-w-[116px] mb-[25px]"}
              altTxt={"Capa Image"}
              title="Not sure which one fits?"
              description="Send us a message with what you're looking for and we'll help you find the perfect match."
              headingCustom={"text-start "}
            />
            <div className="text-start">
              <DarkBtn btnText="Get in Touch" btnIcon={<IoIosArrowForward />} />
            </div>
          </div>
          <div className="2xl:max-w-[870px] py-[20px]">
            <div>
              <ol>
                <li>
                  <GuideCard
                    guideImage={PotGift}
                    GuideTitle="1. Browse the range"
                    GuideDescription="Explore the collection and find items that catch your eye."
                  />
                </li>
                <li>
                  <GuideCard
                    guideImage={SandPot}
                    GuideTitle="2. Share your preferences"
                    GuideDescription="Tell us your style, budget or occasion and we'll narrow it down."
                  />
                </li>

                <li>
                  <GuideCard
                    guideImage={ClosingPot}
                    GuideTitle="3. We'll guide you"
                    GuideDescription="Get a personalised recommendation before you order."
                  />
                </li>
              </ol>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
