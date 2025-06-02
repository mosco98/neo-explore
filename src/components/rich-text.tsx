"use client";

import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  List,
  ListOrdered,
  Underline as UnderlineIcon
} from "lucide-react";
import React, { useEffect, useState } from "react";

// shadcn components
// import { Button } from "@workspace/ui/components/button";

interface RichTextEditorProps {
  initialContent?: string;
  onChange?: (html: string) => void;
  placeholder?: string;
  minHeight?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  initialContent = "<p></p>",
  onChange,
  placeholder = "Write your message here...",
  minHeight = "200px"
}) => {
  const [isMounted, setIsMounted] = useState(false);

  // Initialize editor with required extensions
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline, // Add the underline extension
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right"]
      }) // Add the text align extension
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: `focus:outline-none prose prose-slate max-w-none min-h-[${minHeight}]`,
        placeholder: placeholder
      }
    },
    onUpdate: ({ editor }) => {
      if (onChange) {
        onChange(editor.getHTML());
      }
    }
  });

  // Prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Button helper
  const MenuButton = ({
    onClick,
    isActive = false,
    children
  }: {
    onClick: () => void;
    isActive?: boolean;
    children: React.ReactNode;
  }) => (
    <button
      // variant="ghost"
      // size="icon"
      onClick={onClick}
      className={isActive ? "bg-gray-200" : ""}
    >
      {children}
    </button>
  );

  if (!isMounted || !editor) {
    return (
      <div className="border rounded-md p-2" style={{ minHeight }}>
        <div className="flex items-center border-b pb-2 mb-2">
          <div className="h-8 w-8 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="h-8 w-8 bg-gray-200 rounded-md animate-pulse ml-2"></div>
          <div className="h-8 w-8 bg-gray-200 rounded-md animate-pulse ml-2"></div>
        </div>
        <div className="h-4 bg-gray-200 rounded-md animate-pulse w-1/3 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded-md animate-pulse w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded-md animate-pulse w-2/3"></div>
      </div>
    );
  }

  return (
    <div className="border border-[#C5C5C5] rounded-md p-2">
      <div className="flex flex-wrap items-center border-b border-[#C5C5C5] pb-2 mb-2 gap-1">
        <MenuButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive("bold")}
        >
          <Bold className="h-4 w-4" />
        </MenuButton>

        <MenuButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive("italic")}
        >
          <Italic className="h-4 w-4" />
        </MenuButton>

        <MenuButton
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          isActive={editor.isActive("underline")}
        >
          <UnderlineIcon className="h-4 w-4" />
        </MenuButton>

        <div className="h-6 w-px bg-gray-300 mx-1"></div>

        <MenuButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive("bulletList")}
        >
          <List className="h-4 w-4" />
        </MenuButton>

        <MenuButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive("orderedList")}
        >
          <ListOrdered className="h-4 w-4" />
        </MenuButton>

        <div className="h-6 w-px bg-gray-300 mx-1"></div>

        <MenuButton
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          isActive={editor.isActive({ textAlign: "left" })}
        >
          <AlignLeft className="h-4 w-4" />
        </MenuButton>

        <MenuButton
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          isActive={editor.isActive({ textAlign: "center" })}
        >
          <AlignCenter className="h-4 w-4" />
        </MenuButton>

        <MenuButton
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          isActive={editor.isActive({ textAlign: "right" })}
        >
          <AlignRight className="h-4 w-4" />
        </MenuButton>
      </div>

      <EditorContent
        editor={editor}
        className="prose-sm prose-slate max-w-none"
      />

      <style jsx global>{`
        .ProseMirror {
          min-height: ${minHeight};
          outline: none;
          padding: 0.5rem;
        }
        .ProseMirror p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: #adb5bd;
          pointer-events: none;
          height: 0;
        }
      `}</style>
    </div>
  );
};

export default RichTextEditor;
