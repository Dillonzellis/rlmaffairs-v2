import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface ImgColProps {
  imageSrc: string;
  imageAlt: string;
}

interface ContentColProps {
  title: string;
  content: string;
  btnLabel: string;
  btnHref: string;
}

interface FeatProps extends ImgColProps, ContentColProps {
  imgLeft?: boolean;
}

const ImgCol = ({ imageSrc, imageAlt }: ImgColProps) => {
  return (
    <div className="col-span-8">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={787}
        height={574}
        className="rounded-lg shadow-lg"
      />
    </div>
  );
};

const ContentCol = ({ title, content, btnLabel, btnHref }: ContentColProps) => {
  return (
    <div className="col-span-4 space-y-4">
      <div className="text-5xl">{title}</div>
      <p className="leading-8">{content}</p>
      <Button asChild>
        <Link href={btnHref}>{btnLabel}</Link>
      </Button>
    </div>
  );
};

export const Feat = (props: FeatProps) => {
  const { imgLeft, ...otherProps } = props;

  return (
    <div className="grid grid-cols-12 items-center gap-12">
      {imgLeft && <ImgCol {...otherProps} />}
      <ContentCol {...otherProps} />
      {!imgLeft && <ImgCol {...otherProps} />}
    </div>
  );
};
