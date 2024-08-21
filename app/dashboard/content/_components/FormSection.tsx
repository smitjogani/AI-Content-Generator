"use client";
import React, { useState } from "react";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: any;
  loading: boolean;
}

const FormSection = ({ selectedTemplate, userFormInput, loading }: PROPS) => {
  const [formData, setFormData] = useState<any>();

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onsubmit = (e: any) => {
    e.preventDefault();
    userFormInput(formData);
  };

  return (
    <div className="p-5 border shadow-md rounded-md bg-white">
      {/* @ts-ignore */}
      <Image src={selectedTemplate?.icon} alt="logo" width={70} height={70} />
      <h2 className="font-bold my-2 text-2xl text-[#8C88CA]">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>

      <form className="mt-6" onSubmit={onsubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div className="my-5 flex gap-2 flex-col">
            <label className="font-bold">{item.label}</label>
            {item.field == "input" ? (
              <Input
                name={item.name}
                required={item.required}
                onChange={handleInputChange}
              />
            ) : (
              item.field == "textarea" && (
                <Textarea name={item.name} onChange={handleInputChange} />
              )
            )}
          </div>
        ))}
        <Button type="submit" className="py-6 w-full flex items-center gap-2" disabled={loading}>
          {loading ? <Loader2Icon className="animate-spin"/> : "Generate Content"}
        </Button>
      </form>
    </div>
  );
};

export default FormSection;
