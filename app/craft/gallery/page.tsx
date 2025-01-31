"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import CraftHeader from "@/components/CraftHeader";
import { fetchUnsplashImages, UnsplashImage } from "./utils";
import { CheckCircle } from "lucide-react";
import { toast } from "sonner";
import "./test.css";

import {
  CalendarDays,
  Copy,
  EyeOffIcon,
  GalleryVerticalEnd,
  Heart,
  Map,
  SquarePlay,
} from "lucide-react";
import Image from "next/image";

const GalleryPage: React.FC = () => {
  const [selecting, setIsSelecting] = useState<boolean>(true);
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [selectedImages, setSelectedImages] = useState<UnsplashImage[]>([]);
  const longPressTimer = React.useRef<NodeJS.Timeout | null>(null);
  const isLongPress = React.useRef<boolean>(false);
  const ctrRef = React.useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [, setLongPressedImage] = useState<UnsplashImage | null>(null);
  const [menuPosition, setMenuPosition] = useState({
    x: 0,
    y: 0,
    alignRight: false,
  });
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const MENU_MARGIN = 10;
  const MENU_HEIGHT = 316;

  useEffect(() => {
    (async () => {
      try {
        const fetchedImages = await fetchUnsplashImages(20);
        setImages(fetchedImages);
      } catch (error) {
        console.error("Error loading images:", error);
      }
    })();
  }, []);

  useEffect(() => {
    const updateImageSize = () => {
      if (ctrRef.current) {
        const gridItem = ctrRef.current.querySelector(".grid-item");
        if (gridItem) {
          const rect = gridItem.getBoundingClientRect();
          setImageSize({ width: rect.width, height: rect.height });
        }
      }
    };

    updateImageSize();
    window.addEventListener("resize", updateImageSize);
    return () => window.removeEventListener("resize", updateImageSize);
  }, [images]);

  const toggleSelecting = () => {
    setIsSelecting((prev) => !prev);
  };

  const handleImageClick = (image: UnsplashImage) => {
    if (!selecting || isLongPress.current) {
      isLongPress.current = false;
      return;
    }

    setSelectedImages((prevSelected) => {
      const alreadySelected = prevSelected.some((img) => img.id === image.id);
      if (alreadySelected) {
        return prevSelected.filter((img) => img.id !== image.id);
      } else {
        return [...prevSelected, image];
      }
    });
  };

  const calculateMenuPosition = (target: HTMLDivElement) => {
    if (!ctrRef.current) return { x: 0, y: 0, alignRight: false };
    const containerRect = ctrRef.current.getBoundingClientRect();
    const imageRect = target.getBoundingClientRect();

    // Calculate position relative to the container
    const x = imageRect.left - containerRect.left;
    let y = imageRect.top - containerRect.top;
    const menuBottom = imageRect.bottom + MENU_HEIGHT + MENU_MARGIN;
    console.log({
      menuBottom,
      window: window.innerHeight,
      imageRect,
      containerRect,
    });

    if (imageRect.bottom + MENU_HEIGHT + MENU_MARGIN > window.innerHeight) {
      // If the menu would overflow the screen, align it to the top
      const delta = menuBottom - containerRect.bottom - 10;

      y -= delta;
    }

    // Check if the image is close to the right edge
    const distanceFromRight = containerRect.right - imageRect.right;
    const alignRight = distanceFromRight < containerRect.width / 4;

    return { x, y, alignRight };
  };

  const handleLongPress = (
    image: UnsplashImage,
    target: HTMLDivElement | null
  ) => {
    if (
      !selecting ||
      !selectedImages.some((img) => img.id === image.id) ||
      !target ||
      !ctrRef.current
    )
      return;

    setLongPressedImage(image);
    const position = calculateMenuPosition(target);
    setMenuPosition(position);

    setShowMenu(true);
    isLongPress.current = true;
  };

  const handleLongPressStart = (
    image: UnsplashImage,
    event: React.MouseEvent | React.TouchEvent
  ) => {
    if (!selecting || !selectedImages.some((img) => img.id === image.id))
      return;

    const target = event.currentTarget as HTMLDivElement;
    longPressTimer.current = setTimeout(() => {
      handleLongPress(image, target);
    }, 200);
  };

  const handleLongPressEnd = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }
  };

  return (
    <div className="mt-[var(--navbar-height)]">
      <CraftHeader title="Gallery" date="Jan 2025" />

      <div className="p-4">
        <button
          onClick={toggleSelecting}
          className={`px-4 py-2 rounded font-semibold text-white ${
            selecting ? "bg-red-500" : "bg-blue-500"
          }`}
        >
          {selecting ? "Stop Selecting" : "Start Selecting"}
        </button>

        <p className="mt-2 text-gray-600">
          Selected Images: {selectedImages.length}
        </p>
      </div>

      <div className="grid grid-cols-5 relative p-4 gap-1" ref={ctrRef}>
        <AnimatePresence>
          {showMenu && (
            <motion.div
              onClick={() => setShowMenu(false)}
              initial={{
                backdropFilter: "blur(0px)",
                backgroundColor: "rgba(31, 31, 31, 0)",
                WebkitBackdropFilter: "blur(0px)",
              }}
              animate={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                backgroundColor: "rgba(31, 31, 31, 0.6)",
              }}
              exit={{
                backdropFilter: "blur(0px)",
                WebkitBackdropFilter: "blur(0px)",
                backgroundColor: "rgba(31, 31, 31, 0)",
              }}
              transition={{ duration: 0.1 }}
              className="absolute inset-0 z-40"
            ></motion.div>
          )}
          {showMenu && (
            <div
              className="absolute"
              style={{
                left: `${menuPosition.x}px`,
                top: `${menuPosition.y}px`,
                width: `${imageSize.width}px`,
                height: `${imageSize.height}px`,
              }}
            >
              <motion.div
                className="ms-menu "
                style={{
                  top: `${imageSize.height + MENU_MARGIN}px`,
                  ...(menuPosition.alignRight
                    ? {
                        right: 0,
                      }
                    : {
                        left: 0,
                      }),
                }}
                initial={{ opacity: 0, y: 60 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{ opacity: 0, y: 60 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                onClick={() => toast("This is just a prototype.")}
              >
                <div className="ms-menu-option">
                  <p>Adjust Location</p>
                  <div>
                    <Map size={14} strokeWidth={2} />
                  </div>
                </div>
                <div className="ms-menu-option">
                  <p>Adjust Date & Time</p>
                  <div>
                    <CalendarDays size={14} strokeWidth={2} />
                  </div>
                </div>
                <div className="ms-menu-divider" />
                <div className="ms-menu-option">
                  <p>Add to Album</p>
                  <div>
                    <GalleryVerticalEnd size={14} strokeWidth={2} />
                  </div>
                </div>
                <div className="ms-menu-divider" />
                <div className="ms-menu-option">
                  <p>Slideshow</p>
                  <div>
                    <SquarePlay size={14} strokeWidth={2} />
                  </div>
                </div>
                <div className="ms-menu-option">
                  <p>Hide</p>
                  <div>
                    <EyeOffIcon size={14} strokeWidth={2} />
                  </div>
                </div>
                <div className="ms-menu-option">
                  <p>Favourite</p>
                  <div>
                    <Heart size={14} strokeWidth={2} />
                  </div>
                </div>
                <div className="ms-menu-option">
                  <p>Copy</p>
                  <div>
                    <Copy size={14} strokeWidth={2} />
                  </div>
                </div>
              </motion.div>
              {selectedImages.map((img) => (
                <motion.img
                  //   initial={{
                  //     // rotate: 10,
                  //     zIndex: longPressedImage?.id === img.id ? 110 : 100,
                  //   }}
                  //   animate={{
                  //     // rotate: 10,
                  //     zIndex: longPressedImage?.id === img.id ? 110 : 100,
                  //   }}
                  layoutId={`image-${img.id}`}
                  key={`groupedImg-${img.id}`}
                  src={img.urls.small}
                  alt={img.alt_description || "Unsplash image"}
                  className="w-full z-[100] absolute inset-0 h-full object-cover select-none pointer-events-none"
                  transition={{ duration: 0.5, type: "spring", bounce: 0.23 }}
                >
                  {/* <motion.div className="">{selectedImages.length}</motion.div> */}
                </motion.img>
              ))}
            </div>
          )}
        </AnimatePresence>

        {images.map((img) => {
          const isSelected = selectedImages.some(
            (selected) => selected.id === img.id
          );
          return (
            <div
              key={img.id}
              className={`w-full aspect-square cursor-pointer relative grid-item ${
                isSelected ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => handleImageClick(img)}
              onMouseDown={(event) => handleLongPressStart(img, event)}
              onMouseUp={handleLongPressEnd}
              onMouseLeave={handleLongPressEnd}
              onTouchStart={(event) => handleLongPressStart(img, event)}
              onTouchEnd={handleLongPressEnd}
            >
              {isSelected && (
                <div className="w-4 z-30 h-4 bg-blue-400 rounded-full absolute bottom-2 right-2">
                  <CheckCircle size={16} />
                </div>
              )}
              {isSelected && (
                <motion.img
                  layoutId={`image-${img.id}`}
                  src={img.urls.small || "/placeholder.svg"}
                  alt={img.alt_description || "Unsplash image"}
                  className="w-full z-10 h-full absolute inset-0 object-cover select-none pointer-events-none"
                />
              )}
              <Image
                src={img.urls.small || "/placeholder.svg"}
                alt={img.alt_description || "Unsplash image"}
                className="w-full z-0 h-full absolute inset-0 object-cover select-none pointer-events-none"
              />
            </div>
          );
        })}
      </div>
      <div className="w-full h-screen"></div>
    </div>
  );
};

export default GalleryPage;
