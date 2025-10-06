import { motion } from "motion/react";
import { FaWaze } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

export function CardLocation() {
  const openMap = (url: string) => {
    window.open(url, "_blank");
  };

  const infoButtons = [
    {
      name: "Google Maps",
      icon: <SiGooglemaps />,
      url: "https://maps.app.goo.gl/hZuv2CAgcntY7nXH9",
    },
    {
      name: "Waze",
      icon: <FaWaze />,
      url: "https://ul.waze.com/ul?place=ElBSLiBCZW5lZGl0byBkZSBQYXVsYSBMZWl0ZSwgODAwIC0gQ2jDoWNhcmEgRmzDs3JpZGEsIEl0dSAtIFNQLCAxMzMxMi00ODAsIEJyYXppbCIxEi8KFAoSCZGvfX7lUM-UEX0MHuke5yFZEKAGKhQKEgmLrJ_A4lDPlBHZMUHwVgg8CA&ll=-23.26297120%2C-47.34346530&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3 }}
      viewport={{ once: true, amount: 0.1 }}
      className="mt-10 px-2 text-start lg:px-0 desktop"
    >
      <h2>Escolha o aplicativo de sua preferência para abrir a localização</h2>
      <div className="flex gap-4 mt-4">
        {infoButtons.map((button, index) => (
          <button
            key={index}
            onClick={() => openMap(button.url)}
            className="flex justify-center items-center gap-2 w-[150px] h-10 border rounded cursor-pointer transition duration-300 hover:bg-gray-200"
          >
            {button.icon}
            {button.name}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
