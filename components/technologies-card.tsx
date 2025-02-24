import Image, { StaticImageData } from "next/image";

export interface TechnologiesCardProps {
  img: string | StaticImageData;
  name: string;
}

export function TechnologiesCard({ img, name }: TechnologiesCardProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-20 h-20 mb-4">
        <div className="absolute inset-0 bg-primary/10 rounded-xl blur-lg" />
        <div className="relative flex items-center justify-center w-full h-full rounded-xl bg-card border border-primary/20">
          <Image
            src={img || "/placeholder.svg"}
            alt={name}
            width={40}
            height={40}
          />
        </div>
      </div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}
