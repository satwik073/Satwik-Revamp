// @ts-nocheck
import CustomText from '@/Common/@the-source/CustomText';
import { Button } from '@/components/ui/button';
import React from 'react'
import { Box, Grid, Grid2 } from '@mui/material';
import { BoxTypeIdentifier } from '@/Constants/__config_parameters';
import ProductImage from '@/Common/Molecules/ImageContainer';
import ImageLinks from '@/assets';
import { Icon24Hours, IconBrandLinkedin } from '@tabler/icons-react'
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
                        className='p-2 rounded-full w-12 h-12 bg-[#9cee6a] flex items-center justify-center'
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
                    <Box width={'100%'} className='sm:max-w-md max-w-xs px-0 sm:flex sm:flex-row items-center  justify-between'>
                        <BoxTypeIdentifier.Default
                            className='rounded-xl flex sm:w-2/3 m-4 items-center bg-[#9cee6a] items-center justify-center'
                            style={{ overflow: 'hidden' }}
                        >
                            <Button
                                style={{ fontWeight: 800 }}
                                className=' px-3 py-2 tracking-tight bg-[#9cee6a] flex items-center h-[3.25rem] text-[#194200] text-[16px] justify-center'
                            >
                                <BoxTypeIdentifier.Default style={{background:'rgba(144, 145, 156, 0.35)'}} className='p-2 rounded-full'>
                                    <ProductImage ImageSource={'https://api.iconify.design/simple-icons:envato.svg'} Dimensions={{ Width: 25 }} />
                                </BoxTypeIdentifier.Default>
                                {__scrapButton}
                            </Button>
                        </BoxTypeIdentifier.Default>
                        <CustomText type={'Body'} className='text-[#91929B] text-[14px]'>{__scrapText}</CustomText>
                    </Box>
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
                        <CustomText className={' md:text-[4vw] tracking-tight  text-5xl text-center font-bold text-white max-w-md xl:max-w-3xl'}>{titleRender ?? '__transformed_text'}</CustomText>
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
