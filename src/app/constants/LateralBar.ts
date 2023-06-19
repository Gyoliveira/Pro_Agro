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
          route: "dashboard",
        },
        {
          name: "Test2",
          route: "aa",
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
          route: "profile/freelancer",
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
          route: "locale",
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
          route: "settings/changePassword",
        },
        {
          name: "Excluir conta",
          route: "settings/deleteAccount",
        },
      ],
    },
  ],
};

export default PAGES_INFO;
