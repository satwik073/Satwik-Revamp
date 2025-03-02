// @ts-nocheck
import ImageLinks from "@/assets"
import CustomText from "@/Common/@the-source/CustomText"
import ProductImage from "@/Common/Molecules/ImageContainer"
import { Button } from "@/components/ui/button"
import { BoxTypeIdentifier } from "@/Constants/__config_parameters"
import { Grid } from "@mui/material"
import React from "react"


const GlowingEffect = () => {
  return (
    <div className='w-full testimonials flex mt-12 text-black justify-center pt-16'>
      <Grid className="text-black w-full ">
        <Button className="h-8 rounded-full  border bg-transparent border-black mb-4" >580+ Reviews</Button>
        <Grid direction="column" className="flex flex-col justify-center items-center">
          <h2 className="text-4xl md:text-5xl lg:text-[53px] md:leading-[3.25rem] font-bold mb-2 tracking-tight ">
            <span className='text-[#91929B]'>  Our customers love us,</span><br />

            find out why below.
          </h2>
          <p className="mb-[3rem] text-[16.22px]    w-full">
            With a 4.85 out of 5 average rating on Envato Market.
          </p></Grid>
        <Grid  gap={6} className="md:flex   md:mb-0 mb-5 w-full justify-center">

          <Grid direction={"column"} className="gap-1.5 md:mb-0 mb-5 flex flex-col items-center">
            <BoxTypeIdentifier.Default
              className=" font-bold"
              style={{ overflow: "hidden" }}
            >
              <h1 className=" flex mt-4 text-md" >9+</h1>
            </BoxTypeIdentifier.Default>

            <span className="text-[17px] tracking-tight flex flex-col font-bold text-center mt-2">
              Years of Experience
              <span className="text-center text-[16px] text-neutral-500 font-normal" >Time-tested author</span>
            </span>


          </Grid>
          <Grid direction={"column"} className="flex  md:mb-0 mb-5 flex-col items-center">
            <BoxTypeIdentifier.Default
              className="p-2 rounded-full w-20 h-20 bg-[#9cee6a] flex items-center justify-center"
              style={{ overflow: "hidden" }}
            >
              <ProductImage
                ImageSource={ImageLinks?.__Elite ?? "__transformed_image"}
                FallBackImage={ImageLinks?.__desireable_fallback}
                style={{ objectFit: "cover" }}
              />
            </BoxTypeIdentifier.Default>

            <span className="text-[17px] tracking-tight flex flex-col font-bold text-center mt-2">
              Power Elite Author
              <span className="text-center text-[16px] text-neutral-500 font-normal" >Time-tested author</span>
            </span>
          </Grid>
          <Grid direction={"column"} className="gap-1.5 flex flex-col items-center">
            <BoxTypeIdentifier.Default
              className=" font-bold"
              style={{ overflow: "hidden" }}
            >
             <h1 className=" flex mt-4 text-md" >19k +</h1>
            </BoxTypeIdentifier.Default>

            <span className="text-[17px] tracking-tight flex flex-col font-bold text-center mt-2">
              Happy Customers
              <span className="text-center text-[16px] text-neutral-500 font-normal" >Time-tested author</span>
            </span>


          </Grid>


        </Grid>
       

        <Grid className="flex w-full justify-center mt-12 px-6 mb-12 ">

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-center max-w-7xl gap-4 w-full">
            {/* First Amber BG div with nested divs */}
            <div className="w-full  ">
              <div className="">
                <div className="  w-full  bg-white mb-8 p-[30px] rounded-[1rem] text-[16px] text-left">Used a lot of themes, this one so far so best - options, design, everything. Only downside is very simple documentation, basically a never found solution to my problem in documentation.
                  Still 5/5 for me. Good job.
                  <Grid className="w-fit flex items-center gap-2 mt-6">
          <BoxTypeIdentifier.Default
            style={{
              background: 'rgba(144, 145, 156, 0.35)'

            }}
            className="rounded-full w-[50px] h-[50px] flex items-start justify-center border-4 border-gray-500"
          >
            <img
              src={ImageLinks?.__TEST_AVATAR}
              width={50}
              className="rounded-full w-full h-full object-cover"

            />
          </BoxTypeIdentifier.Default>
          <div className=" flex flex-col ">
          <span className="text-[17px] tracking-tight flex flex-col font-bold text-center mt-2">
              @Happy Customers
              <span className="text-left text-[16px] text-neutral-500 font-normal mt-0.5" >Time-tested author</span>
            </span>
          </div>
        </Grid></div>
                  
                <div className=" w-full  bg-white mb-8 p-[30px] rounded-[1rem] text-[16px] text-left ">I've been searched for a long time for a suitable framework because that's what you can call this Theme, and my choice fell on the above that one. I'm 100% satisfied after a month of implementation, on top of that VERY helpful support.
                  As something between us only, but I would pay and 10x for so much in the package. Very well spent every $ dollar. <Grid className="w-fit flex items-center gap-2 mt-6">
          <BoxTypeIdentifier.Default
            style={{
              background: 'rgba(144, 145, 156, 0.35)'

            }}
            className="rounded-full w-[50px] h-[50px] flex items-start justify-center border-4 border-gray-500"
          >
            <img
              src={ImageLinks?.__TEST_AVATAR}
              width={50}
              className="rounded-full w-full h-full object-cover"

            />
          </BoxTypeIdentifier.Default>
          <div className=" flex flex-col ">
          <span className="text-[17px] tracking-tight flex flex-col font-bold text-center mt-2">
              @Happy Customers
              <span className="text-left text-[16px] text-neutral-500 font-normal mt-0.5" >Time-tested author</span>
            </span>
          </div>
        </Grid></div>
              </div>
              
            </div>

            {/* More Amber BG divs with nested items */}
            <div className="w-full  ">
              <div className="">
                <div className="  w-full  bg-white mb-8 p-[30px] rounded-[1rem] text-[16px]  text-left">Awesome theme and absolutely top-notch support! One of the best I have experienced!

                <Grid className="w-fit flex items-center gap-2 mt-6">
          <BoxTypeIdentifier.Default
            style={{
              background: 'rgba(144, 145, 156, 0.35)'

            }}
            className="rounded-full w-[50px] h-[50px] flex items-start justify-center border-4 border-gray-500"
          >
            <img
              src={ImageLinks?.__TEST_AVATAR}
              width={50}
              className="rounded-full w-full h-full object-cover"

            />
          </BoxTypeIdentifier.Default>
          <div className=" flex flex-col ">
          <span className="text-[17px] tracking-tight flex flex-col font-bold text-center mt-2">
              @Happy Customers
              <span className="text-left text-[16px] text-neutral-500 font-normal mt-0.5" >Time-tested author</span>
            </span>
          </div>
        </Grid></div>
                <div className="  w-full  bg-white mb-8 p-[30px] rounded-[1rem] text-[16px] text-left">I am using this theme on two different websites already and aside from the great design, which can be easily customized, it just works great with pretty much no issues. And if there is a problem, the team is always helpful when asking questions via comments or support. <Grid className="w-fit flex items-center gap-2 mt-6">
          <BoxTypeIdentifier.Default
            style={{
              background: 'rgba(144, 145, 156, 0.35)'

            }}
            className="rounded-full w-[50px] h-[50px] flex items-start justify-center border-4 border-gray-500"
          >
            <img
              src={ImageLinks?.__TEST_AVATAR}
              width={50}
              className="rounded-full w-full h-full object-cover"

            />
          </BoxTypeIdentifier.Default>
          <div className=" flex flex-col ">
          <span className="text-[17px] tracking-tight flex flex-col font-bold text-center mt-2">
              @Happy Customers
              <span className="text-left text-[16px] text-neutral-500 font-normal mt-0.5" >Time-tested author</span>
            </span>
          </div>
        </Grid></div>
                <div className=" w-full  bg-white mb-8 p-[30px] rounded-[1rem] text-[16px] text-left ">Definitely buying again. The theme and support are excellent. <Grid className="w-fit flex items-center gap-2 mt-6">
          <BoxTypeIdentifier.Default
            style={{
              background: 'rgba(144, 145, 156, 0.35)'

            }}
            className="rounded-full w-[50px] h-[50px] flex items-start justify-center border-4 border-gray-500"
          >
            <img
              src={ImageLinks?.__TEST_AVATAR}
              width={50}
              className="rounded-full w-full h-full object-cover"

            />
          </BoxTypeIdentifier.Default>
          <div className=" flex flex-col ">
          <span className="text-[17px] tracking-tight flex flex-col font-bold text-center mt-2">
              @Happy Customers
              <span className="text-left text-[16px] text-neutral-500 font-normal mt-0.5" >Time-tested author</span>
            </span>
          </div>
        </Grid></div>
              </div>
            </div>

            {/* More Amber BG divs */}
            <div className="w-full  ">
              <div className="ga">
                <div className="  w-full  bg-white mb-8 p-[30px] rounded-[1rem] text-[16px] text-left">The template itself is well-designed and user-friendly. What stands out even more is the excellent customer support they provide. They have been responsive and helpful whenever I have had questions or needed assistance. It's been a great experience overall! <Grid className="w-fit flex items-center gap-2 mt-6">
          <BoxTypeIdentifier.Default
            style={{
              background: 'rgba(144, 145, 156, 0.35)'

            }}
            className="rounded-full w-[50px] h-[50px] flex items-start justify-center border-4 border-gray-500"
          >
            <img
              src={ImageLinks?.__TEST_AVATAR}
              width={50}
              className="rounded-full w-full h-full object-cover"

            />
          </BoxTypeIdentifier.Default>
          <div className=" flex flex-col ">
          <span className="text-[17px] tracking-tight flex flex-col font-bold text-center mt-2">
              @Happy Customers
              <span className="text-left text-[16px] text-neutral-500 font-normal mt-0.5" >Time-tested author</span>
            </span>
          </div>
        </Grid></div>
                <div className=" w-full  bg-white mb-8 p-[30px] rounded-[1rem] text-[16px] text-left">I have purchased many other themes that claim 90+ page speed, but after I have designed the website, and added all possible optimizations, very few actually achieve similar speed. Ohio theme is one of those that achieved 90+ speed after all needed changes. Easy customization, many good options and features, highly recommended. <Grid className="w-fit flex items-center gap-2 mt-6">
          <BoxTypeIdentifier.Default
            style={{
              background: 'rgba(144, 145, 156, 0.35)'

            }}
            className="rounded-full w-[50px] h-[50px] flex items-start justify-center border-4 border-gray-500"
          >
            <img
              src={ImageLinks?.__TEST_AVATAR}
              width={50}
              className="rounded-full w-full h-full object-cover"

            />
          </BoxTypeIdentifier.Default>
          <div className=" flex flex-col ">
          <span className="text-[17px] tracking-tight flex flex-col font-bold text-center mt-2">
              @Happy Customers
              <span className="text-left text-[16px] text-neutral-500 font-normal mt-0.5" >Time-tested author</span>
            </span>
          </div>
        </Grid></div>
              </div>
            </div>

            {/* Additional Amber BG div */}
            <div className="w-full  ">
              <div className="">
                <div className="  w-full  bg-white   mb-8 p-[30px] rounded-[1rem] text-[16px] text-left">Fine and modern theme. Also I'm giving a five star rating for the excellent customer support. They're always there for you. <Grid className="w-fit flex items-center gap-2 mt-6">
          <BoxTypeIdentifier.Default
            style={{
              background: 'rgba(144, 145, 156, 0.35)'

            }}
            className="rounded-full w-[50px] h-[50px] flex items-start justify-center border-4 border-gray-500"
          >
            <img
              src={ImageLinks?.__TEST_AVATAR}
              width={50}
              className="rounded-full w-full h-full object-cover"

            />
          </BoxTypeIdentifier.Default>
          <div className=" flex flex-col ">
          <span className="text-[17px] tracking-tight flex flex-col font-bold text-center mt-2">
              @Happy Customers
              <span className="text-left text-[16px] text-neutral-500 font-normal mt-0.5" >Time-tested author</span>
            </span>
          </div>
        </Grid></div>
            <div className="  w-full  bg-white mb-8 p-[30px] rounded-[1rem] text-[16px] text-left">Quite apart from the fact that the theme is mega great, I would also like to thank the support. Everything is answered very quickly and the help is technically flawless. Thanks! <Grid className="w-fit flex items-center gap-2 mt-6">
          <BoxTypeIdentifier.Default
            style={{
              background: 'rgba(144, 145, 156, 0.35)'

            }}
            className="rounded-full w-[50px] h-[50px] flex items-start justify-center border-4 border-gray-500"
          >
            <img
              src={ImageLinks?.__TEST_AVATAR}
              width={50}
              className="rounded-full w-full h-full object-cover"

            />
          </BoxTypeIdentifier.Default>
          <div className=" flex flex-col ">
          <span className="text-[17px] tracking-tight flex flex-col font-bold text-center mt-2">
              @Happy Customers
              <span className="text-left text-[16px] text-neutral-500 font-normal mt-0.5" >Time-tested author</span>
            </span>
          </div>
        </Grid></div>
                <div className=" w-full  bg-white mb-8 p-[30px] rounded-[1rem] text-[16px] text-left">There are many things that are very positive about this template. Quality, Design, Customization, Code Quality and so on... Abolutely fantastic. <Grid className="w-fit flex items-center gap-2 mt-6 mt-6">
          <BoxTypeIdentifier.Default
            style={{
              background: 'rgba(144, 145, 156, 0.35)'

            }}
            className="rounded-full w-[50px] h-[50px] flex items-start  justify-center border-4 border-gray-500"
          >
            <img
              src={ImageLinks?.__TEST_AVATAR}
              width={50}
              className="rounded-full w-full h-full object-cover"

            />
          </BoxTypeIdentifier.Default>
          <div className=" flex flex-col ">
          <span className="text-[17px] tracking-tight flex flex-col font-bold text-center mt-2">
              @Happy Customers
              <span className="text-left text-[16px] text-neutral-500 font-normal mt-0.5" >Time-tested author</span>
            </span>
          </div>
        </Grid></div>
              </div>
            </div>

          {/* Additional Amber BG div */}
             
      </div>
      </Grid>
    </Grid >     
    </div >   
  )  
}

export default GlowingEffect
