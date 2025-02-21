import React from "react";
import Image from 'next/image'
import { BoxTypeIdentifier } from "@/Constants/__config_parameters";
import ImageLinks from "@/assets";

interface EnhancedProductImageProps {
  ImageSource: any;
  AlternateText?: string;
  Dimensions?: { Height?: number; Width?: number };
  CustomClasses?: string;
  Layout?: "FIXED" | "INTRINSIC" | "RESPONSIVE" | "FILL";
  Priority?: boolean;
  Placeholder?: "blur" | "empty";
  BlurDataURL?: string;
  FallBackImage? : string
  style?: any
}

const ProductImage: React.FC<EnhancedProductImageProps> = ({
  ImageSource,
  AlternateText = "Image",
  Dimensions = { Height: 60, Width: 60 },
  CustomClasses = "",
  Layout = "INTRINSIC",
  Priority = false,
  Placeholder = "empty",
  BlurDataURL = "",
  style,
  FallBackImage = ImageLinks?.__desireable_fallback,
}) => {
  const { Height, Width } = Dimensions;

  return (
    <BoxTypeIdentifier.Default className={`relative ${CustomClasses}`}>
      <img
        src={ImageSource ?? FallBackImage}
        alt={AlternateText}
        height={Height ?? 100}
        width={ Width ?? 100}
        className="object-contain"
      />
    </BoxTypeIdentifier.Default>
  );
};

export default ProductImage;
