import { overviewData } from '@/constants'

import { motion } from 'motion/react'

import { overviewBanner } from '@/assets'

import { Button } from '@/components/ui/button'

import { Play } from 'lucide-react'

import * as variants from '@/lib/motionVariants'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import ReactPlayer from 'react-player'

const Overview = () => {
  return (
    <section className="section">
        <div className="container">
            <div className="section-head">
                <motion.p 
                variants={variants.fadeInUp}
                initial='start'
                whileInView='end'
                viewport={{ once: true }}
                className="section-subtitle">
                {overviewData.sectionSubtitle}
                </motion.p>

                <motion.h2
                variants={variants.fadeInUp}
                initial='start'
                whileInView='end'
                viewport={{ once: true }}
                className="section-title">
                {overviewData.sectionTitle}
                </motion.h2>

                <motion.p 
                variants={variants.fadeInUp}
                initial='start'
                whileInView='end'
                viewport={{ once: true }}
                className='section-text'>
                {overviewData.sectionText}
                </motion.p>
            </div>

            <div>
                <motion.div
                    variants={variants.fadeInScale}
                    initial='start'
                    whileInView='end'
                    viewport={{ once: true }}
                    className='relative max-w-4xl mx-auto shadow-xl'>
                    <figure>
                        <img 
                        src={overviewBanner}
                        width={900}
                        height={601}
                        alt="" />
                    </figure>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                            variant='secondary'
                            size='icon'
                            className='absolute top-1/2 left-1/2
                            -translate-x-1/2 -translate-y-1/2 scale-150'
                        >
                            <Play 
                                fill='#fff'
                                size={50}
                            />
                    </Button>
                        </DialogTrigger>

                        <DialogContent className='p-0 overflow-hidden 
                        max-w-[640px] xl:max-w-[1000px]'>
                            <AspectRatio ratio={16 / 9}>
                            <ReactPlayer />
                            </AspectRatio>
                        </DialogContent>
                    </Dialog>
                </motion.div>

                <div className='max-w-4xl mx-auto grid gridcols1 gap-5 mt-8 md:mt-16 xl:grid-cols-[3fr,2.5fr] xl:items-center'>
                    <motion.p 
                    variants={variants.fadeInRight}
                    initial='start'
                    whileInView='end'
                    viewport={{ once: true }}
                    className='section-title text-center
                    lg:max-w-[30ch] lg:mx-auto xl:text-left'>{overviewData.listTitle}
                    </motion.p>

                    <motion.div 
                    variants={variants.staggerContainer}
                    initial='start'
                    whileInView='end'
                    viewport={{ once: true }}
                    className='flex flex-wrap justify-center 
                    gap-5 md:gap-0 xl:gap-8'>
                        {overviewData.list.map(({ title, text }, index) =>(
                            <motion.div
                                key={index}
                                className='text-center'
                                variants={variants.fadeInLeft}
                            >
                                <h3 className='text-3xl'>{title}</h3>

                                <p className='text-muted-foreground'>{text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Overview