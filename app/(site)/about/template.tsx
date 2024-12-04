import { ReactNode } from "react";

export default function AboutTemplate({ children }: { children: ReactNode }) {
  return (
    <div>
      <div style={{ border: "1px solid yellow" }}>dsfds</div>
      {children}
    </div>
  );
}
