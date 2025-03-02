import CustomText from "@/Common/@the-source/CustomText";
import ProductImage from "@/Common/Molecules/ImageContainer";
import { BoxTypeIdentifier } from "@/Constants/__config_parameters";
import { Grid } from "lucide-react";
import React from "react";

const AuthorCard = ({ imageSource, fallbackImage, title } : any) => {
  return (
    <Grid>
      <Grid>
        <BoxTypeIdentifier.Default
          className="p-2 rounded-full w-12 h-12 bg-[#9cee6a] items-center justify-center"
          style={{ overflow: "hidden" }}
        >
          <ProductImage
            ImageSource={imageSource ?? "__transformed_image"}
            FallBackImage={fallbackImage}
            style={{ objectFit: "cover" }}
            Layout="RESPONSIVE"
          />
        </BoxTypeIdentifier.Default>
      </Grid>
        <React.Fragment>
          <CustomText className={"text-[16px] font-bold text-center"}>
            {title}
          </CustomText>
        </React.Fragment>
    </Grid>
  );
};

export default AuthorCard