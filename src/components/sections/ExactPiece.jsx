import Container from "@/components/ui/Container";
import DarkBtn from "@/components/ui/DarkBtn";
import SectionTitle from "@/components/ui/SectionTitle";
import TwoCups from "@/assets/images/two-cups.png";
import { IoIosArrowForward } from "react-icons/io";

export default function ExactPiece() {
  return (
    <section className="SectionPaddingTop lg:my-[40px] xl:my-[60px] md:my-[20px]">
      <Container>
        <div className="flex items-center justify-between lg:gap-[30px] gap-[20px] flex-col lg:flex-row">
          <div className="2xl:max-w-[962px]  w-full">
            <SectionTitle
              badge="our promise"
              title="The Exact Piece You See Is the Piece You Receive"
              description="Every item is photographed clearly and listed with key details like origin, materials and condition, so you can shop with confidence."
              headingCustom={"text-start"}
            />
            <div className="text-start">
              <DarkBtn btnText="Learn More" btnIcon={<IoIosArrowForward />} />
            </div>
          </div>
          <div>
            <div className="2xl:w-[760px] xl:w-[550px] lg:w-[450px] w-full">
              <img
                src={TwoCups}
                alt="Two tea Cups placed in table"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
