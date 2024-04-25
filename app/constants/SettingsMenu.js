export const SettingsMenu = [
  {
    id: "1",
    label: "languages",
    type: "radio",
    options: [
      {
        label: "Francais",
        value: "fr",
      },
      {
        label: "English",
        value: "en",
      },
    ],
  },
  {
    id: "2",
    label: "Preferences",
    type: "switch",
    options: [
      {
        label: "Mode sombre",
        value: false, // Valeur par défaut du mode sombre
        type: "switch",
      },
    ],
  },
];
