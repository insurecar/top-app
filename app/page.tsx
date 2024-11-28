import { Htag, Button } from "@/components";

import Logo from "./Logo.svg";

export default function Home() {
  return (
    <div>
      <Logo />
      <Htag tag="h3">sdf</Htag>
      <Button appearance="primary">Hello</Button>
      <Button appearance="ghost">Hello</Button>
    </div>
  );
}
