"use client";

import React, { useActionState, useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { formSchema } from "@/lib/validation";
import { z } from "zod";
import { toast } from "sonner";
import { useRouter } from "next/router";

const ArticleForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState("");
  //   const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {
      const formValues = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        category: formData.get("category") as string,
        link: formData.get("link") as string,
        pitch,
      };
      await formSchema.parseAsync(formValues);
      console.log(formValues);
      //   const result = await createIdea(prevState, formData, pitch);
      //   console.log(result);
      //   if (result.status == "SUCCES") {
      //     toast("Your article has been submitted");
      //     router.push(`/startup/${result.id}`);
      //   }
      //   return result;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;
        setErrors(fieldErrors as unknown as Record<string, string>);
        toast.error("Please check the form fields");
        return { ...prevState, error: "Validation vailed", status: "ERROR" };
      }
      toast.error("Please check the form fields");
      return {
        ...prevState,
        error: "Something went wrong",
        status: "ERROR",
      };
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });

  return (
    <>
      <form action={formAction} className="article-form">
        {/* title */}
        <div>
          <label htmlFor="title" className="article-form_label">
            Title
          </label>
          <Input
            id="title"
            name="title"
            className="article-form_input"
            required
            placeholder="Article title"
          />
          {errors.title && <p className="article-form_error">{errors.title}</p>}
        </div>
        {/* description */}
        <div>
          <label htmlFor="description" className="article-form_label">
            Description
          </label>
          <Textarea
            id="description"
            name="description"
            className="article-form_textarea"
            required
            placeholder="Describe your article"
          />
          {errors.description && (
            <p className="article-form_error">{errors.description}</p>
          )}
        </div>
        {/* category */}
        <div>
          <label htmlFor="category" className="article-form_label">
            Category
          </label>
          <Input
            id="category"
            name="category"
            className="article-form_input"
            required
            placeholder="Article category (Tech, Health...)"
          />
          {errors.category && (
            <p className="article-form_error">{errors.category}</p>
          )}
        </div>
        {/* Image */}
        <div>
          <label htmlFor="link" className="article-form_label">
            Image Link
          </label>
          <Input
            id="link"
            name="link"
            className="article-form_input"
            required
            placeholder="Article image link"
          />
          {errors.link && <p className="article-form_error">{errors.link}</p>}
        </div>
        <div data-color-mode="light">
          <label htmlFor="pitch" className="article-form_label">
            Pitch Details
          </label>
          <MDEditor
            value={pitch}
            onChange={(value) => setPitch(value as string)}
            id="pitch"
            preview="edit"
            height={300}
            style={{ borderRadius: 20, overflow: "hidden" }}
            textareaProps={{
              placeholder: "Describe your article",
            }}
            previewOptions={{
              disallowedElements: ["style"],
            }}
          />
          {errors.pitch && <p className="article-form_error">{errors.pitch}</p>}
        </div>
        <Button
          type="submit"
          className="article-form_btn rounded-full  text-xl"
          disabled={isPending}
        >
          {isPending ? "Submitting..." : "Submit your article"}
          <Send className="size-5 ml-2" />
        </Button>
      </form>
    </>
  );
};

export default ArticleForm;
