import React from 'react'
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import Link from 'next/link';
const topics = [
    {
        title: "Python",
        img: "/python.png",
        desc: "Let's discuss everything related to Python.",
        slug:"python-chat"
    },
    {
        title: "JavaScript",
        img: "/js.png",
        desc: "All about JavaScript, frameworks, and modern web development.",
        slug:"js-chat"
    },
    {
        title: "Machine Learning",
        img: "/ml.png",
        desc: "Explore AI, deep learning, and data science trends.",
        slug:"ml-chat"
    },
    {
        title: "Web Development",
        img: "/web-dev.png",
        desc: "Frontend, backend, full-stack, and the latest web tech.",
        slug:"web-chat"
    },
    {
        title: "Cybersecurity",
        img: "/cyber-sec.png",
        desc: "Learn about ethical hacking, security best practices, and more.",
        slug:"cyber-sec-chat"
    },
    {
        title: "DevOps",
        img: "/devops.png",
        desc: "Discuss CI/CD, automation, cloud computing, and infrastructure.",
        slug:"devops-chat"
    }
];

// const Forums = () => {
//     return (
//         <div className='container mx-auto my-24 w-4/5 flex flex-col items-center gap-4'>
//             <h1 className='text-5xl text-center font-semibold'>
//                 Discussion Forums
//             </h1>
//             <div className='flex flex-wrap justify-center'>
//                 {topics.map((topic) => {
//                     return <div key={topic.img} className='shadow-lg bg-slate-300 w-1/4 m-4 flex flex-col items-center px-4 rounded-lg justify-center py-10 text-center gap-2'>
//                         <Image alt='image' src={topic.img} width={34} height={34} className='' />
//                         <h2 className='text-2xl font-bold'>{topic.title}</h2>
//                         <p>{topic.desc}</p>
//                         <Link href={`/forum/${topic.slug}`}>
//                             <Button className='px-4 border border-slate-300 py-2'>Discuss Now</Button>
//                         </Link>
//                     </div>
//                 })}
//             </div>
//         </div>
//     )
// }
const Forums = () => {
    return (
        <div className="container mx-auto my-16 px-4">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl text-center font-semibold mb-10">
                Discussion Forums
            </h1>

            {/* Forum Topics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {topics.map((topic) => (
                    <div
                        key={topic.slug}
                        className="shadow-lg bg-slate-300 p-6 rounded-lg flex flex-col items-center text-center"
                    >
                        <Image
                            alt={topic.title}
                            src={topic.img}
                            width={50}
                            height={50}
                            className="mb-3"
                        />
                        <h2 className="text-2xl font-bold">{topic.title}</h2>
                        <p className="text-gray-700 text-sm mb-4">{topic.desc}</p>
                        <Link href={`/forum/${topic.slug}`}>
                            <Button className="px-4 py-2 border border-slate-400 hover:bg-slate-400 transition">
                                Discuss Now
                            </Button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Forums
