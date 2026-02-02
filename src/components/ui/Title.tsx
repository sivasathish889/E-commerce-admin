import type { TitleProps } from "../../@types/types";

const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <>
      <p className="text-2xl font-semibold">{title}</p>
      <p className="text-base opacity-65">{subtitle}</p>
    </>
  );
};

export default Title;
