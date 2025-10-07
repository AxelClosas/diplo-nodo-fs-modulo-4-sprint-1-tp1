import { motion } from "motion/react"

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

export default function TeamCard({ title, img, desc, link}) {
  return (
    <motion.article className="bg-[#f8f9fa] overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:duration-300"
      variants={item}
    >
      <img src={img.src} alt={img.alt}
        className="object-cover w-full"/>
      <div className="p-6 flex flex-col gap-2">
        <h3 className="text-xl font-bold text-blue-900">{title}</h3>
        <p className="text-gray-800">{desc}</p>
        <a href={link} className="bg-red-500 max-w-fit py-2 px-6 rounded font-bold text-white mt-2 hover:bg-red-700 hover:duration-200">Ver más</a>
      </div>
    </motion.article>
  )
}
