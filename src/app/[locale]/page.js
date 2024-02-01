import Identity from "@/components/Identity";
import NavBar from "@/components/NavBar";

import { useTranslations } from "next-intl";

export default function Home() {

  const T = useTranslations('Home');

  return (
    <div>
      <Identity profile={T('profile')}/>
      <NavBar />
    </div>
  );
}
