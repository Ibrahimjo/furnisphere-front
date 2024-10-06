import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {HomeBanner} from "@/components/home/banner"
import {NewProducts} from "@/components/home/new-products"
import { Spacer } from "@nextui-org/react";
import WhyChoseUs from "@/components/home/why-choose-us";
import FeaturedProducts from "@/components/home/featured-products";
import TrustedBy from "@/components/home/trusted-by";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Transform Your Space with&nbsp;</span>
        <span className={title({ color: "violet" })}>Timeless Furniture&nbsp;</span>
        <br />
        <span className={title()}>
          Stylish, high-quality furniture crafted for every room.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Shop Now and bring your dream home to life!
        </div>
      </div>
      <Spacer y={28}/>
      <HomeBanner/>
      <NewProducts/>
      <Spacer y={28}/>
      <WhyChoseUs/>
      <Spacer y={28}/>
      <FeaturedProducts/>
      <Spacer y={28}/>
      <TrustedBy/>
    </section>
  );
}
