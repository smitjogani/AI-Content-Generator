import React, { useEffect, useRef } from "react";

import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface PROPS {
  aiOutput: string;
}

function OutputSection({ aiOutput }: PROPS) {
  const editorRef: any = useRef();

  useEffect(()=>{
    const editorInstance=editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  },[aiOutput]);

  return (
    <div className="border rounded-md shadow-md bg-white">
      <div className="flex px-5 py-3 items-center justify-between">
        <h2 className="font-bold text-lg text-[#8C88CA]">Your Result</h2>
        <Button className="flex gap-2">
          <Copy className="w-4 h-4" /> Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
        onChange={() =>
          console.log(editorRef.current.getInstance().getMarkdown())
        }
      />
    </div>
  );
}

export default OutputSection;
