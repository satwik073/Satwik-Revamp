import CustomText from '@/Common/@the-source/CustomText';
import { Button } from '@/components/ui/button';
import React from 'react'
import { Grid, Grid2 } from '@mui/material';
import { BoxTypeIdentifier } from '@/Constants/__config_parameters';
import ProductImage from '@/Common/Molecules/ImageContainer';
import ImageLinks from '@/assets';

interface MainSectionPropsComponent {
    imageLink?: any,
    captionDisplay?: string,
    titleRender?: string,
    descriptionHandler?: string,
    subDivisionSection?: boolean,
    __scrapButton?: string,
    __scrapText?: string,
    highlightMenu?: boolean,
    _high_ImageLinks?: any;
    _high_TextProps?: typeof CustomText;
    classNameAttributes?: string;
}



const MainAction = ({ imageLink, captionDisplay, titleRender, descriptionHandler, subDivisionSection, __scrapButton, __scrapText, _high_ImageLinks, _high_TextProps, highlightMenu, classNameAttributes }: MainSectionPropsComponent) => {
    const handle_render_imageLink = () => {
        return (
            <React.Fragment>
                {!!imageLink && (
                    <BoxTypeIdentifier.Default
                        className='p-2 rounded-full w-16 h-16 bg-[#9cee6a] flex items-center justify-center'
                        style={{ overflow: 'hidden' }}
                    >
                        <ProductImage
                            ImageSource={imageLink ?? '__transformed_image'}
                            FallBackImage={ImageLinks?.__desireable_fallback}
                            style={{ objectFit: 'cover' }}
                            Layout='RESPONSIVE'
                        />
                    </BoxTypeIdentifier.Default>

                )}
            </React.Fragment>
        )
    }
    const handle_render_subSection = () => {
        return (
            <React.Fragment>
                {subDivisionSection && (
                    <BoxTypeIdentifier.Default
                        className='p-2 rounded-full flex items-center justify-center'
                        style={{ overflow: 'hidden' }}
                    >
                       <Button className='bg-[#9cee6a] px-3 tracking-tight   h-[3.25rem] rounded-lg text-[#194200] text-[16px] font-[600]'>
                        <ProductImage  Dimensions={{Height:40, Width:30}} ImageSource={ImageLinks?.__Elite}/>{__scrapButton ?? '__transformed_btm'}</Button>
                    </BoxTypeIdentifier.Default>

                )}
            </React.Fragment>
        )
    }
    const handle_render_capTitle = () => {
        return (
            <React.Fragment>
                {(!!captionDisplay || !!titleRender) && (
                    <React.Fragment>
                        <CustomText className={'text-[16px] font-bold text-[#FFFFFFBF]'}>{captionDisplay ?? '__transformed_text'}</CustomText>
                        <CustomText className={' md:text-6xl  text-5xl text-center font-bold text-white max-w-xl'}>{titleRender ?? '__transformed_text'}</CustomText>
                    </React.Fragment>
                )}
            </React.Fragment>
        )
    }
    return (
        <Grid2 display='flex' justifyContent='center' width={'100%'}>
            <Grid display='flex' direction={'column'} justifyContent='center' alignItems={'center'} gap={2} width={'100%'} maxWidth={'1100px'}>
                {handle_render_imageLink()}
                {handle_render_capTitle()}
                {handle_render_subSection()}


            </Grid>
        </Grid2>
    )
}

export default MainAction;
