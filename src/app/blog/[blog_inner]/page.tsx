import BlockMain from '@/components/block_main/block_main'
import Container from '@/components/container/container'
import Heading from '@/components/heading/heading'

import Image from 'next/image'

import ImgOne from '@/assets/img/img.jpeg'
import ImgTwo from '@/assets/img/img_2.jpeg'

export default function BlogInner() {
    return (
        <Container>
            <BlockMain>
                <Heading>Blog Inner</Heading>

                <h3 className='text-[24px] text-start font-semibold pb-[7px] max-[450px]:text-[18px] '>🙏 27 Principles for 27 Years</h3>
                <span className='text-[rgb(194,203,212)] font-bold mb-[25px] max-[450px]:text-[12px]'>Jul 14, 2023 • 3 min • Life</span>

                <p className='text-start text-[rgb(173,180,187)] max-[450px]:text-[14px] my-[30px]'>
                    It’s that time of the year where I reflect on another trip around the sun. I’m turning 27 years old and unsurprisingly I don’t feel different than I did yesterday. But if I turn the clock back a year earlier, it does feel quite different now...
                </p>

                <Image className='w-full h-[400px] object-cover' src={ImgOne} alt='img' width={750} height={400} />

                <p className='text-start text-[rgb(173,180,187)] max-[450px]:text-[14px] my-[30px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio animi magni dolorem tenetur facilis velit culpa atque ab accusamus distinctio sint itaque nemo, amet consectetur. Officia inventore, eos asperiores illum quod quidem, mollitia nobis enim maxime corporis nisi nulla cum similique! Ab eaque, hic qui odit unde sequi ipsam a maiores eos, asperiores quod temporibus facilis dignissimos, necessitatibus fuga reiciendis iste. Vero libero labore ipsam magni pariatur voluptates ad? Alias odit maiores provident quam amet, qui aliquid nesciunt ex minus eius, exercitationem cum excepturi! Impedit voluptas ex iusto, provident voluptatibus, aperiam dignissimos, consequuntur minus ullam porro ab. Assumenda, nobis excepturi.
                </p>

                <Image className='w-full h-[400px] object-cover' src={ImgTwo} alt='img' width={750} height={400} />

                <p className='text-start text-[rgb(173,180,187)] max-[450px]:text-[14px] my-[30px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quis voluptate in ea quibusdam ratione, enim rem aliquid cumque veritatis ipsam dolorem perferendis aut natus sint at tempore quam labore dolores quisquam vitae iure dicta animi! Eos rem voluptatem odit nemo adipisci quas minus omnis voluptate incidunt magni officia veritatis veniam alias quisquam quidem laborum, dolores voluptatibus commodi, ullam nobis fugiat eligendi repudiandae. Odit error tempore quisquam, incidunt quibusdam cupiditate nemo minima sapiente quo modi optio ad doloremque debitis ipsa quidem placeat, commodi illum architecto officia reprehenderit inventore numquam cumque? Provident ad natus suscipit et voluptates. Laborum quas nam tenetur sed cumque eos consectetur. Recusandae, officiis impedit earum nam quisquam ipsa quo deleniti, soluta dolores repellendus repellat corporis! Tenetur nesciunt ea totam nam veritatis suscipit incidunt minima consequuntur quae aspernatur ut adipisci, reiciendis autem, voluptatibus repudiandae dicta sed! Perferendis at ipsum distinctio quam eligendi. Odit, perspiciatis accusamus! Porro, laudantium et?
                </p>
            </BlockMain>
        </Container>
    )
}