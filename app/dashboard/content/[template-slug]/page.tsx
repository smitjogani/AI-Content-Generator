"use client";
import React, { useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AiModal";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

const CreateNewContent = (props: PROPS) => {

  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>('');

  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug == props.params["template-slug"]
  );

  const generateAiContent = async(formData: any) => {
    setLoading(true);
    const SelectedPrompt = selectedTemplate?.aiPrompt;

    const FinalAiPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;

    const result = await chatSession.sendMessage(FinalAiPrompt);

    setAiOutput(result?.response.text());
    setLoading(false);
  };

  return (
    <div>
      <Link href={"/dashboard"}>
        <Button className="m-2">
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="m-2 rounded-md grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* form section */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => generateAiContent(v)}
          loading={loading}
        />

        {/* output section */}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput}/>
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;
