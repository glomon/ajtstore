'use client'
import { Github } from "@medusajs/icons"
import { Button, Heading, Container } from "@medusajs/ui"
import { motion } from 'framer-motion'
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { PlusMini, ForwardSolid, CursorArrowRays, ChevronRight, Sparkles } from "@medusajs/icons"

const Hero = () => {
  return ( 
  <div className=" w-full border-none relative bg-clip-content bg-repeat"  >
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ease: "linear", duration: 1, x: { duration: 0.5 }} } >
     <div className="h-[100vh] w-full border-none  relative bg-clip-content bg-repeat " style={{backgroundImage: `url("http://localhost:8000/_next/image?url=http%3A%2F%2Flocalhost%3A9000%2Fuploads%2F1709154783601-abstract_japanese_art_324104903%20(1).png&w=1920&q=90")`}}>
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">

        <span>
          <Heading
            level="h1"
            className="text-3xl px-16  text-ui-fg-on-color font-normal" /* hover:-translate-y-16 */
          >ABSTRACT JAPANESE TEXTURES - 抽象的な日本のテクスチャー
          </Heading></span>
          <Heading
            level="h2"
            className="text-xl leading-2 px-16  max-w-prose text-ui-fg-on-color font-normal"
          >Unlock the secrets of Japan&apos;s artistry with our stunning textures. From the delicate beauty of cherry blossoms to the bold lines of traditional calligraphy, our textures bring the essence of Japan to your fingertips. Elevate your designs with the rich cultural heritage of Japan Textures.
          </Heading>
          <Heading
            level="h2"
            className="text-xl leading-2  text-ui-fg-on-color font-normal" /* Abstract beauty of Japan in every texture. */
          ><LocalizedClientLink href="/store" className="hover:text-ui-fg-disabled">
            <Button  variant="danger" className="w-full h-10 text-md">DISCOVER TEXTURES<Sparkles />
            </Button>
            </LocalizedClientLink>
            
          </Heading>
      </div>
    </div> </motion.div> 
    </div>
  )
}

export default Hero
