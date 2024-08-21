import Templates from "@/app/(data)/Templates";
import React from "react";
import TemplateCard from "./TemplateCard";

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

function TemplateListSectin() {
  return (
    <div className="m-2 rounded-md grid grid-col-3 lg:grid-col-4 gap-5 sm:grid-cols-2">
      {Templates.map((item: TEMPLATE, index: number) => (
        <TemplateCard {...item} />
      ))}
    </div>
  );
}

export default TemplateListSectin;
