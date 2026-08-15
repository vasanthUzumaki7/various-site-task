import Marquee from "@/components/ui/Marquee";
import { marqueeItems } from "@/data/footerData";
import Container from "@/components/ui/Container";
import FooterMenu from "./FooterMenu";
import FooterBottom from "./FooterBottom";
import FooterNewsletter from "./FooterNewsletter";

export default function Footer() {
  return (
    <footer className="bg-brand">
      <div>
        <Marquee items={marqueeItems} />
      </div>
      <Container>
        <FooterNewsletter/>
        <FooterMenu />
        <FooterBottom />
      </Container>
    </footer>
  );
}
