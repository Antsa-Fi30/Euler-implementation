import { useTranslation } from "react-i18next";
import eulerImage from "../../assets/euler.png";
import kuttaImage from "../../assets/kuta.png";

export const algos = () => {
  const { t } = useTranslation();
  return [
    {
      title: t("title_euler"),
      subtitle: t("subtitle_euler"),
      description: t("descri_euler"),
      path: eulerImage,
    },
    {
      title: t("title_kutta"),
      subtitle: t("subtitle_kutta"),
      description: t("descri_kutta"),
      path: kuttaImage,
    },
  ];
};
