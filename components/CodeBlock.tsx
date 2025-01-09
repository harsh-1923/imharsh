"use client";
import { Check, Copy } from "lucide-react";
import React, { ReactNode, useEffect, useCallback } from "react";
import { highlight } from "sugar-high";
import { motion, AnimatePresence } from "motion/react";

type SupportedLanguages =
  | "tsx"
  | "jsx"
  | "typescript"
  | "javascript"
  | "python"
  | "ruby"
  | "go"
  | "rust"
  | "java"
  | "cpp"
  | "cs"
  | "php";

interface MinimapMetrics {
  containerHeight: number;
  scrollHeight: number;
  scrollTop: number;
  visibleRatio: number;
  minimapHeight: number;
  scrollRatio: number;
}

interface CodeBlockProps {
  codeString: string;
  language?: SupportedLanguages;
  className?: string;
  fileName?: string;
  icon?: ReactNode;
  showMinimap?: boolean;
}

interface CopyButtonProps {
  isCopied: boolean;
  copyToClipboard: () => Promise<void>;
}

interface MinimapState {
  scrollRatio: number;
  isDragging: boolean;
  minimapHeight: number;
  visibleRatio: number;
}

type MinimapAction =
  | { type: "SET_SCROLL_RATIO"; payload: number }
  | { type: "SET_DRAGGING"; payload: boolean }
  | {
      type: "SET_METRICS";
      payload: Pick<MinimapState, "minimapHeight" | "visibleRatio">;
    }
  | { type: "RESET" };

function minimapReducer(
  state: MinimapState,
  action: MinimapAction
): MinimapState {
  switch (action.type) {
    case "SET_SCROLL_RATIO":
      return { ...state, scrollRatio: action.payload };
    case "SET_DRAGGING":
      return { ...state, isDragging: action.payload };
    case "SET_METRICS":
      return {
        ...state,
        minimapHeight: action.payload.minimapHeight,
        visibleRatio: action.payload.visibleRatio,
      };
    case "RESET":
      return initialMinimapState;
    default:
      return state;
  }
}

const initialMinimapState: MinimapState = {
  scrollRatio: 0,
  isDragging: false,
  minimapHeight: 0,
  visibleRatio: 1,
};

const CodeBlock: React.FC<CodeBlockProps> = ({
  codeString,
  language = "tsx",
  // className,
  fileName = "useScrollObserver.tsx",
  icon,
  showMinimap = false,
}) => {
  const codeHTML = highlight(codeString);
  const [isCopied, setIsCopied] = React.useState<boolean>(false);
  const [selectedWord, setSelectedWord] = React.useState<string | null>(null);
  const codeRef = React.useRef<HTMLPreElement>(null);
  const minimapRef = React.useRef<HTMLDivElement>(null);
  const minimapCodeRef = React.useRef<HTMLPreElement>(null);

  const [minimapState, dispatch] = React.useReducer(
    minimapReducer,
    initialMinimapState
  );

  const calculateMinimapMetrics = useCallback((): MinimapMetrics | null => {
    const codeElement = codeRef.current;
    const minimapCodeElement = minimapCodeRef.current;
    if (!codeElement || !minimapCodeElement) return null;

    const containerHeight = codeElement.clientHeight;
    const scrollHeight = codeElement.scrollHeight;
    const scrollTop = codeElement.scrollTop;

    // Get the actual height of the scaled code in the minimap
    const minimapCodeHeight = minimapCodeElement.scrollHeight * 0.4; // 0.4 is the scale factor
    const visibleRatio = containerHeight / scrollHeight;

    // Calculate minimap highlight height based on the scaled code height
    const minimapHeight = Math.max(30, minimapCodeHeight * visibleRatio);
    const scrollRatio = scrollTop / (scrollHeight - containerHeight);

    return {
      containerHeight,
      scrollHeight,
      scrollTop,
      visibleRatio,
      minimapHeight,
      scrollRatio,
    };
  }, []);

  const updateMinimapMetrics = useCallback(() => {
    const metrics = calculateMinimapMetrics();
    if (!metrics) return;

    dispatch({
      type: "SET_METRICS",
      payload: {
        minimapHeight: metrics.minimapHeight,
        visibleRatio: metrics.visibleRatio,
      },
    });
    dispatch({ type: "SET_SCROLL_RATIO", payload: metrics.scrollRatio });
  }, [calculateMinimapMetrics]);

  const highlightOccurrences = useCallback(
    (codeHTML: string, word: string): string => {
      if (!word) return codeHTML;
      const regex = new RegExp(`\\b${word}\\b`, "gi");
      return codeHTML.replace(
        regex,
        (match) =>
          `<mark class="bg-yellow-200 dark:bg-green-400">${match}</mark>`
      );
    },
    []
  );

  const handleDoubleClick = useCallback(() => {
    const selection = window.getSelection();
    if (selection && selection.toString().trim() !== "") {
      setSelectedWord(selection.toString().trim());
    } else {
      setSelectedWord(null);
    }
  }, []);

  const copyToClipboard = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(codeString);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleMinimapDrag = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const codeElement = codeRef.current;
      const minimapElement = minimapRef.current;

      if (!minimapElement || !codeElement) return;

      const handleDragMove = (e: MouseEvent): void => {
        if (!minimapElement || !codeElement) return;

        const minimapRect = minimapElement.getBoundingClientRect();
        const relativeY = Math.max(
          0,
          Math.min(1, (e.clientY - minimapRect.top) / minimapRect.height)
        );
        const scrollHeight =
          codeElement.scrollHeight - codeElement.clientHeight;
        codeElement.scrollTop = scrollHeight * relativeY;
      };

      const handleDragEnd = (): void => {
        dispatch({ type: "SET_DRAGGING", payload: false });
        document.removeEventListener("mousemove", handleDragMove);
        document.removeEventListener("mouseup", handleDragEnd);
      };

      dispatch({ type: "SET_DRAGGING", payload: true });
      document.addEventListener("mousemove", handleDragMove);
      document.addEventListener("mouseup", handleDragEnd);
      handleDragMove(e.nativeEvent);
    },
    []
  );

  useEffect(() => {
    if (!showMinimap || !codeRef.current) return;

    const handleScroll = (): void => {
      if (!minimapState.isDragging) {
        updateMinimapMetrics();
      }
    };

    updateMinimapMetrics();
    codeRef.current.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateMinimapMetrics);

    return () => {
      codeRef.current?.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateMinimapMetrics);
      dispatch({ type: "RESET" });
    };
  }, [showMinimap, minimapState.isDragging, updateMinimapMetrics]);

  const getMinimapHighlightTop = useCallback(() => {
    const minimapCodeElement = minimapCodeRef.current;
    if (!minimapCodeElement) return 0;

    const scaledCodeHeight = minimapCodeElement.scrollHeight * 0.4;
    return (
      minimapState.scrollRatio * (scaledCodeHeight - minimapState.minimapHeight)
    );
  }, [minimapState.scrollRatio, minimapState.minimapHeight]);

  const highlightedCodeHTML = selectedWord
    ? highlightOccurrences(codeHTML, selectedWord)
    : codeHTML;

  return (
    <div className="border-[1px] border-[var(--colors-grayA6)] rounded-lg overflow-hidden text-sm my-6 relative bg-[var(--code-background)]">
      <CopyButton copyToClipboard={copyToClipboard} isCopied={isCopied} />
      {fileName && (
        <div className="w-full h-10 flex items-center px-4 dark:bg-[var(--colors-gray4)] bg-neutral-200 justify-start gap-2">
          {icon}
          {fileName}
        </div>
      )}
      <div className="relative flex max-h-[400px]">
        <pre
          className="code-block p-4 overflow-auto max-h-[400px] font-[family-name:var(--font-geist-mono)] flex-grow"
          ref={codeRef}
          onDoubleClick={handleDoubleClick}
        >
          <code
            className={`language-${language}`}
            dangerouslySetInnerHTML={{ __html: highlightedCodeHTML }}
          />
        </pre>
        {showMinimap && (
          <div
            ref={minimapRef}
            className="w-20 absolute top-0 right-0 bottom-0 border-l border-[var(--colors-grayA6)] dark:bg-[#1a1a1aa9] bg-neutral-100 cursor-pointer max-h-[400px] overflow-hidden shadow-lg"
            onClick={handleMinimapDrag}
          >
            <div className="absolute inset-0 select-none pointer-events-none">
              <pre
                ref={minimapCodeRef}
                className="transform scale-[0.4] origin-top-left whitespace-pre text-[4px] font-[family-name:var(--font-geist-mono)] leading-[6px] p-2"
                style={{
                  WebkitTransform: "scale(0.4)",
                  WebkitTransformOrigin: "top left",
                }}
                dangerouslySetInnerHTML={{
                  __html: highlightedCodeHTML,
                }}
              />
            </div>

            <div
              className="absolute right-0 w-full bg-blue-500/20 cursor-pointer"
              style={{
                height: `${minimapState.minimapHeight}px`,
                top: `${getMinimapHighlightTop()}px`,
              }}
              onMouseDown={handleMinimapDrag}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const CopyButton: React.FC<CopyButtonProps> = ({
  isCopied,
  copyToClipboard,
}) => {
  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.button
        key={isCopied ? "check" : "copy"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute top-1 right-1 p-2 rounded-md z-10"
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
