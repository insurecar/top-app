"use client";

import { Htag, Button, Ptag, Tag, Rating } from "@/components";

import Logo from "./Logo.svg";
import { useState } from "react";

export default function Home() {
  const [rating, setRating] = useState(4);
  return (
    <div>
      <Logo />
      <Htag tag="h3">sdf</Htag>
      <Button appearence="primary">Hello</Button>
      <Button appearence="ghost">Hello</Button>
      <Button appearence="ghost" arrow="down">
        Hello
      </Button>

      <Button appearence="ghost" arrow="right">
        Hello
      </Button>

      <Ptag size="s">qw</Ptag>
      <Ptag size="m">qw</Ptag>
      <Ptag size="l">qw</Ptag>
      <Tag size="m" color="primary">
        sgsfsdf
      </Tag>
      <Rating isEditable rating={rating} setRating={setRating} />
    </div>
  );
}
