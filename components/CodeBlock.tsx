"use client";
import { Check, Copy } from "lucide-react";
import React, { ReactNode } from "react";
import { highlight } from "sugar-high";
import { motion, AnimatePresence } from "motion/react";

interface CodeBlockProps {
  codeString: string;
  language?: string;
  className?: string;
  fileName?: string;
  icon?: ReactNode;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  codeString,
  language = "tsx",
  className,
  fileName,
  icon,
}) => {
  const codeHTML = highlight(codeString);
  const [isCopied, setIsCopied] = React.useState<boolean>(false);
  const [selectedWord, setSelectedWord] = React.useState<string | null>(null);
  const codeRef = React.useRef<HTMLPreElement>(null);

  const highlightOccurrences = React.useCallback(
    (codeHTML: string, word: string) => {
      if (!word) return codeHTML;
      const regex = new RegExp(`\\b${word}\\b`, "gi");
      return codeHTML.replace(
        regex,
        (match) =>
          `<mark class="bg-yellow-200 dark:bg-yellow-800">${match}</mark>`
      );
    },
    []
  );

  const handleDoubleClick = React.useCallback(() => {
    const selection = window.getSelection();
    if (selection && selection.toString().trim() !== "") {
      setSelectedWord(selection.toString().trim());
    } else {
      setSelectedWord(null);
    }
  }, []);

  const highlightedCodeHTML = selectedWord
    ? highlightOccurrences(codeHTML, selectedWord)
    : codeHTML;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="border-[1px] border-[var(--colors-grayA6)] rounded-lg overflow-x-auto  text-sm my-6 relative">
      <CopyButton copyToClipboard={copyToClipboard} isCopied={isCopied} />
      {fileName && (
        <div className="w-full h-10 flex items-center px-4 dark:bg-[#212121] bg-neutral-200 justify-start gap-2">
          {icon}
          {fileName}
        </div>
      )}
      <pre
        className={`code-block p-4 overflow-auto ${className} font-[family-name:var(--font-geist-mono)]`}
        ref={codeRef}
        onDoubleClick={handleDoubleClick}
      >
        <code
          className={`language-${language}`}
          dangerouslySetInnerHTML={{ __html: highlightedCodeHTML }}
        />
      </pre>
    </div>
  );
};

const CopyButton = ({
  isCopied,
  copyToClipboard,
}: {
  isCopied: boolean;
  copyToClipboard: () => void;
}) => {
  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.button
        key={isCopied ? "check" : "copy"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute top-1 right-1 p-2 rounded-md"
        onClick={copyToClipboard}
      >
        {isCopied ? (
          <Check size={14} className="dark:text-green-500 text-green-600" />
        ) : (
          <Copy size={14} className="dark:text-gray-500 text-gray-600" />
        )}
      </motion.button>
    </AnimatePresence>
  );
};

export default CodeBlock;
