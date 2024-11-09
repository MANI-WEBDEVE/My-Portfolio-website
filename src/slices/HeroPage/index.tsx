import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeroPage`.
 */
export type HeroPageProps = SliceComponentProps<Content.HeroPageSlice>;

/**
 * Component for "HeroPage" Slices.
 */
const HeroPage = ({ slice }: HeroPageProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="col-start-1 md:row-start-1">
          <h1
            className="mb-8 text-[clamp(3rem,20vmin,14rem)] font-extrabold leading-none tracking-tighter "
            aria-label={slice.primary.name + " " + slice.primary.lastname}
          >
            <span className="block text-slate-300">{slice.primary.name}</span>
            <span className="block text-slate-500 -mt-[.2em]">{slice.primary.lastname}</span>
            <span>{slice.primary.tagline}</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
