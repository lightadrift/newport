const getColor = (name: string) => {
    const colors: { [key: string]: string } = {
      PHP: "#FFC652",
      Wordpress: "#FF7687",
      PlanetScale: "",
    };
  
    return colors[name] ?? "green";
  };