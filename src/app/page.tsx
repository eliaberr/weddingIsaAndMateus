"use client";

import ConfirmAttendance from "./components/components home/confirmAttendance/confirmAttendance";
import { Countdown } from "./components/components home/countdown/countdown";
import { Greeting } from "./components/components home/greeting/greeting";
import InformationWedding from "./components/components home/informationWedding/informationWedding";
import Loading from "./components/loading/loagin";
import Welcome from "./components/components home/welcome/welcome";

export default function Home() {
  return (
    <Loading>
      <Welcome />
      <Countdown />
      <Greeting />
      <InformationWedding />
      <ConfirmAttendance />
    </Loading>
  );
}
