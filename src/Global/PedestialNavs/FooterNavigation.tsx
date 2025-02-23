// @ts-nocheck
import CustomText from '@/Common/@the-source/CustomText'
import ProductImage from '@/Common/Molecules/ImageContainer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { BoxTypeIdentifier } from '@/Constants/__config_parameters'
import { Box, Checkbox, Divider } from '@mui/material'
import { IconCheck, IconCheckbox } from '@tabler/icons-react'
import React from 'react'

type Props = {}

const FooterNavigation = (props: Props) => {
    return (
        <React.Fragment>
            <div className="bg-[#161519] text-white py-16 relative lg:px-8 px-4 overflow-hidden">
                {/* Call to Action Section */}
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between relative z-10">
                    <div className="lg:w-1/2 text-left">
                        <h2 className="text-4xl md:text-5xl lg:text-[56px] md:leading-[3.25rem] font-bold mb-6 tracking-tight w-[85%] ">
                            <span className='text-[#91929B]'>  Get more, spend less.</span><br />
                            Start creating your
                            website now.
                        </h2>
                        <p className="mb-8 text-[17.22px]  text-[#FFFFFFBF]  w-full md:w-[80%]">
                            Build your site for free and take as long as you need. Just add a site
                            plan for more pages, and a custom domain when you’re ready for the
                            world.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 lg:flex md:mt-0 gap-5  border-none">
                        <BoxTypeIdentifier.Default>
                            <CustomText className={"mb-4  text-[17.22px]  text-[#FFFFFFBF]  text-left w-full"}>Ohio theme is bundled with WPBakery Page Builder and Slider Revolution plugins that help you to save
                                up to $164 in total.</CustomText>
                            <Divider className='bg-white/20' />
                            <CustomText className={"mt-4 text-[16px] text-[#FFFFFFBF]  gap-2 text-left w-full"}>
                                <CustomText className={'flex gap-2'}>

                                    <IconCheck /> WPBakery Page Builder | Included <br />
                                </CustomText>
                                <CustomText className={'flex gap-2'}>

                                    <IconCheck />  Slider Revolution | Included </CustomText></CustomText>
                        </BoxTypeIdentifier.Default>
                        <BoxTypeIdentifier.Default className='lg:mt-0 mt-4 flex justify-start'>
                            <Box width={'100%'} className='sm:max-w-md max-w-xs px-0 sm:flex flex-col items-start justify-start'>
                                <BoxTypeIdentifier.Default
                                    className='rounded-xl flex items-center text-left gap-3 mb-4'
                                    style={{ overflow: 'hidden' }}
                                >
                                    <Button
                                        style={{ fontWeight: 800 }}
                                        className='px-3 py-2 tracking-tight rounded-xl w-full bg-[#9cee6a] flex items-center h-[3.25rem] text-[#194200] text-[16px]'
                                    >
                                        <BoxTypeIdentifier.Default style={{ background: 'rgba(144, 145, 156, 0.35)' }} className='p-2 rounded-full'>
                                            <ProductImage ImageSource={'https://api.iconify.design/simple-icons:envato.svg'} Dimensions={{ Width: 25 }} />
                                        </BoxTypeIdentifier.Default>
                                        Get Ohio | $59
                                    </Button>
                                </BoxTypeIdentifier.Default>
                                <CustomText type={'Body'} className='text-[#91929B] text-left mb-8 text-[14px]'>
                                    Life-time license, free updates and 6 months of free support.
                                </CustomText>
                            </Box>
                        </BoxTypeIdentifier.Default>

                    </div>
                </div>
                <Divider className='bg-white/20 ' />
                {/* Footer Links Section */}
                <div className="relative z-10 mt-8 md:mt-16 lg:px-0 px-2 text-left">
                    <div className="max-w-7xl mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
                        <div className=" text-left">
                            <h2 className="text-4xl md:text-5xl lg:text-[56px] md:leading-[3.25rem] font-bold mb-6 tracking-tight w-[85%] ">
                                Satwik.
                            </h2>
                            <p className="space-y-2 text-[16px] leading-6 text-[#FFFFFFBF] w-[80%]">
                                Premium WordPress theme
                                to make a showcase, portfolio, blog
                                or eCommerce website.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4 text-[16px] tracking-tight">Product</h3>
                            <ul className="space-y-2 text-[16px] text-[#FFFFFFBF]">
                                <li>Website Templates</li>
                                <li>Websites</li>
                                <li>Domains</li>
                                <li>Online Stores</li>
                                <li>Marketing Tools</li>
                                <li>Extensions</li>
                                <li>Social Media Tools</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4 text-[16px] tracking-tight">Customers</h3>
                            <ul className="space-y-2 text-[16px] text-[#FFFFFFBF]">
                                <li>Website Examples</li>
                                <li>Featured Customers</li>
                                <li>Creators</li>
                                <li>Businesses</li>
                                <li>Online Stores</li>
                                <li>Etsy Sellers</li>
                                <li>Bloggers</li>
                                <li>Weddings</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-left mb-4 text-[16px] tracking-tight">Sign up for newsletter</h3>
                            <div className='flex'>

                                <Input placeholder='Email address' />
                                <Button className='text-[#FFFFFFBF]'>Sign up</Button>
                            </div>
                            <div className='mt-4 flex gap-2 items-start'>

                                <Checkbox className='mt-2' size='medium' sx={{
                                    color: 'white', padding: 0, '&.Mui-checked': {
                                        color: 'white',
                                    },
                                }} /><CustomText className={'text-[#FFFFFFBF]'}>I’m okay with getting emails and having that activity tracked to improve my experience.</CustomText>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom Section */}
                    <div className="mt-16 border-t border-white/20 pt-8 text-center">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
                            <p>
                                © 2025 Arobix. All Rights Reserved. Site by{" "}
                                <span className="underline">Satwik Kanhere</span>
                            </p>
                            <div className="flex items-center gap-4">
                                <a href="mailto:hello@Arobix.com" className="underline">
                                    satwikkanhere2003@gmail.com
                                </a>
                                <a href="tel:+916284486063" className="underline">
                                    (+91) 6284486063
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#2e4acd] text-white py-16 relative lg:px-8 px-4 overflow-hidden">
                {/* Call to Action Section */}
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between relative z-10">
                    <div className="lg:w-1/2 text-left">
                        <h2 className="text-4xl md:text-5xl lg:text-[56px] md:leading-[3.25rem] font-bold mb-6 tracking-tight w-[85%] ">
                            <span className='text-[#91929B]'>  Get more, spend less.</span><br />
                            Start creating your
                            website now.
                        </h2>
                        <p className="mb-8 text-[17.22px]  w-full md:w-[80%]">
                            Build your site for free and take as long as you need. Just add a site
                            plan for more pages, and a custom domain when you’re ready for the
                            world.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 lg:flex md:mt-0 gap-5  border-none">
                        <BoxTypeIdentifier.Default>
                            <CustomText className={"mb-4  text-[17.22px]    text-left w-full"}>Ohio theme is bundled with WPBakery Page Builder and Slider Revolution plugins that help you to save
                                up to $164 in total.</CustomText>
                            <Divider className='bg-white/20' />
                            <CustomText className={"mt-4 text-[16px]  gap-2 text-left w-full"}>
                                <CustomText className={'flex gap-2'}>

                                    <IconCheck /> WPBakery Page Builder | Included <br />
                                </CustomText>
                                <CustomText className={'flex gap-2'}>

                                    <IconCheck />  Slider Revolution | Included </CustomText></CustomText>
                        </BoxTypeIdentifier.Default>
                        <BoxTypeIdentifier.Default className='lg:mt-0 mt-4 flex justify-start'>
                            <Box width={'100%'} className='sm:max-w-md max-w-xs px-0 sm:flex flex-col items-start justify-start'>
                                <BoxTypeIdentifier.Default
                                    className='rounded-xl flex items-center text-left gap-3 mb-4'
                                    style={{ overflow: 'hidden' }}
                                >
                                    <Button
                                        style={{ fontWeight: 800 }}
                                        className='px-3 py-2 tracking-tight rounded-xl w-full bg-[#9cee6a] flex items-center h-[3.25rem] text-[#194200] text-[16px]'
                                    >
                                        <BoxTypeIdentifier.Default style={{ background: 'rgba(144, 145, 156, 0.35)' }} className='p-2 rounded-full'>
                                            <ProductImage ImageSource={'https://api.iconify.design/simple-icons:envato.svg'} Dimensions={{ Width: 25 }} />
                                        </BoxTypeIdentifier.Default>
                                        Get Ohio | $59
                                    </Button>
                                </BoxTypeIdentifier.Default>
                                <CustomText type={'Body'} className='text-[#91929B] text-left mb-8 text-[14px]'>
                                    Life-time license, free updates and 6 months of free support.
                                </CustomText>
                            </Box>
                        </BoxTypeIdentifier.Default>

                    </div>
                </div>
                <Divider className='bg-white/20 ' />
                {/* Footer Links Section */}
                <div className="relative z-10 mt-8 md:mt-16 lg:px-0 px-2 text-left">
                    <div className="max-w-7xl mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
                        <div className=" text-left">
                            <h2 className="text-4xl md:text-5xl lg:text-[56px] md:leading-[3.25rem] font-bold mb-6 tracking-tight w-[85%] ">
                                Satwik.
                            </h2>
                            <p className="space-y-2 text-[16px] leading-5.5  w-[80%]">
                                Premium WordPress theme
                                to make a showcase, portfolio, blog
                                or eCommerce website.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4 text-[16px] tracking-tight">Product</h3>
                            <ul className="space-y-2 text-[16px]">
                                <li>Website Templates</li>
                                <li>Websites</li>
                                <li>Domains</li>
                                <li>Online Stores</li>
                                <li>Marketing Tools</li>
                                <li>Extensions</li>
                                <li>Social Media Tools</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4 text-[16px] tracking-tight">Customers</h3>
                            <ul className="space-y-2 text-[16px]">
                                <li>Website Examples</li>
                                <li>Featured Customers</li>
                                <li>Creators</li>
                                <li>Businesses</li>
                                <li>Online Stores</li>
                                <li>Etsy Sellers</li>
                                <li>Bloggers</li>
                                <li>Weddings</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-left mb-4 text-[16px] tracking-tight">Sign up for newsletter</h3>
                            <div className='flex'>

                                <Input placeholder='Email address' />
                                <Button>Sign up</Button>
                            </div>
                            <div className='mt-4 flex gap-2 items-start'>

                                <Checkbox className='mt-2' size='medium' sx={{
                                    color: 'white', padding: 0, '&.Mui-checked': {
                                        color: 'white',
                                    },
                                }} /><CustomText>I’m okay with getting emails and having that activity tracked to improve my experience.</CustomText>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom Section */}
                    <div className="mt-16 border-t border-white/20 pt-8 text-center">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
                            <p>
                                © 2025 Arobix. All Rights Reserved. Site by{" "}
                                <span className="underline">Satwik Kanhere</span>
                            </p>
                            <div className="flex items-center gap-4">
                                <a href="mailto:hello@Arobix.com" className="underline">
                                    satwikkanhere2003@gmail.com
                                </a>
                                <a href="tel:+916284486063" className="underline">
                                    (+91) 6284486063
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FooterNavigation