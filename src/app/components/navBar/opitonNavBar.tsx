export function OptionNavBar() {
  const infoMenu = [
    {
      name: "Home",
      link: "#Welcome",
    },
    {
      name: "Nossa História",
      link: "#countdown",
    },
    {
      name: "Informações do Casamento",
      link: "#informationWedding",
    },
    {
      name: "Confirmar Presença",
      link: "#confirmAttendance",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row gap-7">
      {infoMenu.map((item, index) => (
        <a
          className="cursor-pointer hover: hover:underline"
          key={index}
          href={item.link}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}
