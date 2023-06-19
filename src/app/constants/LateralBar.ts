const PAGES_INFO = {
  main_items: [
    {
      name: "dashboard",
      title: "Dashboard",
      iconName: "home",
      iconNameEnterprise: "",
      pages: [
        {
          name: "Inicio",
          route: "",
        },
      ],
    },
    {
      name: "profile",
      title: "Perfil",
      iconName: "user",
      iconNameEnterprise: "work",
      pages: [
        {
          name: "Meus dados",
          route: "",
        },
      ],
    },
    {
      name: "locale",
      title: "Localização",
      iconName: "place",
      iconNameEnterprise: "",
      pages: [
        {
          name: "Endereço",
          route: "",
        },
      ],
    },
    {
      name: "chat",
      title: "Chat",
      iconName: "chat",
      iconNameEnterprise: "",
      pages: [],
    },
  ],
  sub_items: [
    {
      name: "settings",
      title: "Ajustes",
      iconName: "settings",
      iconNameEnterprise: "",
      pages: [
        {
          name: "Alterar senha",
          route: "",
        },
        {
          name: "Excluir conta",
          route: "",
        },
      ],
    },
  ],
};

export default PAGES_INFO;
