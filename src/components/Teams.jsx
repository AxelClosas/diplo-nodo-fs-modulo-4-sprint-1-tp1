import TeamCard from "./TeamCard.jsx"
import { motion } from "motion/react"


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,   // ⏱️ demora entre cada card
      delayChildren: 0.1      // ⏱️ retardo inicial
    }
  }
}


export default function Teams() {

  const teams = [
    {
      title: "Primera Masculino",
      img: { src: "/images/equipo_primera_masculino.jpeg", alt: "Equipo Masculino" },
      desc: "Nuestro equipo Senior Masculino compite en la Liga de la Asociación Riojana de Handball, al mismo tiempo, mantiene su presencia en la Liga Catamarqueña de Handball. SubCampeones del Torneo Apertura 2025.",
      link: "/primeraMasculino"
    },
    {
      title: "Primera Femenino",
      img: { src: "/images/equipo_primera_femenino.jpeg", alt: "Equipo Femenino" },
      desc: "Nuestro equipo Senior Femenino compite en la Liga Catamarqueña de Handball. Campeonas del Torneo Apertura 2025.",
      link: "/primeraFemenino"
    },
    {
      title: "Categorías Formativas",
      img: { src: "/images/equipo_divisiones_formativas.jpeg", alt: "Equipos Formativos" },
      desc: "Nuestro equipo de Divisiones Formativas compite en diversas ligas y torneos, fomentando el desarrollo de jóvenes talentos en el handball.",
      link: "/divisionesFormativas"
    }
  ]

  return (
    <main className="pt-16 2xl:max-w-6xl 2xl:mx-auto" id="equipos"
    >
      <h2 className="text-2xl font-bold mb-4 text-blue-900 text-center after:content-[''] after:block after:w-20 after:h-1 after:bg-red-600 after:mt-4 after:mx-auto">Nuestros Equipos</h2>
      <motion.div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {teams.map((team, index) => (
          <TeamCard
            key={index}
            title ={team.title}
            img={team.img}
            desc={team.desc}
            link={team.link}
          />
        ))}
      </motion.div>
    </main>
  )
}

