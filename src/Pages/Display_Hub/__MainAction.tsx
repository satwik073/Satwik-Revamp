// @ts-nocheck
import CustomText from '@/Common/@the-source/CustomText';
import { Button } from '@/components/ui/button';
import React from 'react'
import { Box, Grid, Grid2 } from '@mui/material';
import { BoxTypeIdentifier } from '@/Constants/__config_parameters';
import ProductImage from '@/Common/Molecules/ImageContainer';
import ImageLinks from '@/assets';
import _ from 'lodash';
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
    content?: any,
    classNameAttributes?: string;
}



const MainAction = ({ imageLink, captionDisplay, titleRender, content, descriptionHandler, subDivisionSection, __scrapButton, __scrapText, highlightMenu, classNameAttributes }: MainSectionPropsComponent) => {
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
                            className='rounded-xl flex sm:w-2/3 m-4  items-center justify-center'
                            style={{ overflow: 'hidden' }}
                        >
                            <Button
                                style={{ fontWeight: 800 }}
                                className=' px-3 py-2 tracking-tight rounded-xl w-full bg-[#9cee6a] flex items-center h-[3.25rem] text-[#194200] text-[16px] justify-center'
                            >
                                <BoxTypeIdentifier.Default style={{ background: 'rgba(144, 145, 156, 0.35)' }} className='p-2 rounded-full'>
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
                        <CustomText className={' md:text-[4vw] tracking-tight  text-5xl text-center font-bold text-white max-w-md xl:max-w-xl'}>{titleRender ?? '__transformed_text'}</CustomText>
                    </React.Fragment>
                )}
            </React.Fragment>
        )
    }
    const handle_render_content = () => {
        return (
            <React.Fragment>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    {/* Loop through the content array and render each item */}
                    {_.map(content, (item, index) => (
                        <Grid item key={index}>
                            <Box display="flex" gap={2} alignItems="center" justifyContent="center">
                                {/* You can replace the icon with actual components or use Iconify */}
                                <Box

                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    className="p-2 rounded-full border border-neutral-600"
                                >
                                    <item.icon size={40} fontWeight={300} className='font-normal p-1' />
                                </Box>
                                <CustomText className="text-[#FFFFFFBF] font-extrabold text-left max-w-[150px] text-[16px]">
                                    {item.label}
                                </CustomText>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </React.Fragment>
        );
    };
    return (
        <Grid2 display='flex' justifyContent='center' width={'100%'} >

            <Grid display='flex' direction={'column'} justifyContent='center' alignItems={'center'} gap={2} width={'100%'} maxWidth={'1400px'}>
                {handle_render_imageLink()}
                {handle_render_capTitle()}
                {handle_render_subSection()}
                <Grid mt={4}>
                    {handle_render_content()}
                </Grid>
            </Grid>



        </Grid2>
    )
}

export default MainAction;
