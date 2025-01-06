"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";

interface Experience {
  startDate: string;
  endDate: string;
  company: string;
  role: string;
}

interface TimelineProps {
  start: string | undefined;
  end: string | undefined;
  onChange?: (month: string) => void;
  className?: string;
  experiences?: Experience[];
}

export function Timeline({
  start,
  end,
  onChange,
  className = "",
  experiences = [],
}: TimelineProps) {
  const [hoveredMonth, setHoveredMonth] = React.useState<string | null>(null);
  const [activePosition, setActivePosition] = React.useState<number | null>(
    null
  );
  const [activeExperience, setActiveExperience] =
    React.useState<Experience | null>(null);
  const timelineRef = React.useRef<HTMLDivElement>(null);
  const markersRef = React.useRef<HTMLDivElement>(null);

  const parseDate = (
    date: string | undefined
  ): { month: number; year: number } | null => {
    if (!date) return null;
    const parts = date.split("/");
    if (parts.length !== 2) return null;
    const [month, year] = parts;
    const parsedMonth = parseInt(month);
    const parsedYear = parseInt("20" + year);
    if (isNaN(parsedMonth) || isNaN(parsedYear)) return null;
    return {
      month: parsedMonth,
      year: parsedYear,
    };
  };

  const startDate = parseDate(start);
  const endDate = parseDate(end);

  const getMonths = () => {
    if (!startDate || !endDate) return [];
    const months: { date: string; isQuarter: boolean }[] = [];
    const currentDate = new Date(startDate.year, startDate.month - 1);
    const endDateObj = new Date(endDate.year, endDate.month - 1);

    while (currentDate <= endDateObj) {
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear().toString().slice(2);
      const isQuarter = month % 3 === 1;
      months.push({
        date: `${month}/${year}`,
        isQuarter,
      });
      currentDate.setMonth(currentDate.getMonth() + 1);
    }
    return months;
  };

  const months = getMonths();

  const isDateWithinRange = (date: string, start: string, end: string) => {
    const dateObj = new Date(parseDate(date)!.year, parseDate(date)!.month - 1);
    const startObj = new Date(
      parseDate(start)!.year,
      parseDate(start)!.month - 1
    );
    const endObj = new Date(parseDate(end)!.year, parseDate(end)!.month - 1);
    return dateObj >= startObj && dateObj <= endObj;
  };

  const updateActiveExperience = (date: string) => {
    const activeExp = experiences.find((exp) =>
      isDateWithinRange(date, exp.startDate, exp.endDate)
    );
    setActiveExperience(activeExp || null);
  };

  React.useEffect(() => {
    if (months.length > 0 && hoveredMonth === null) {
      const initialMonth = months[0].date;
      setHoveredMonth(initialMonth);
      setActivePosition(0);
      updateActiveExperience(initialMonth);
      onChange?.(initialMonth);
    }
  }, [months, hoveredMonth, onChange, updateActiveExperience]);

  if (months.length === 0) {
    return null;
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!markersRef.current) return;

    const rect = markersRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const position = (x / rect.width) * 100;

    setActivePosition(position);

    const monthIndex = Math.round((position / 100) * (months.length - 1));
    if (monthIndex >= 0 && monthIndex < months.length) {
      const month = months[monthIndex];
      setHoveredMonth(month.date);
      updateActiveExperience(month.date);
      onChange?.(month.date);
    }
  };

  //   const handleMouseLeave = () => {
  //     // setHoveredMonth(null);
  //     setActivePosition(null);
  //     setActiveExperience(null);
  //   };

  return (
    <div
      className={`relative h-[400px] w-full select-none debug pb-10 cursor-none ${className}`}
      ref={timelineRef}
      onMouseMove={handleMouseMove}
      //   onMouseLeave={handleMouseLeave}
      //   role="slider"
      aria-label="Timeline"
      aria-valuetext={hoveredMonth || undefined}
    >
      <AnimatePresence>
        {activeExperience && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-0 left-0 right-0 bg-neutral-700 p-4 rounded-md shadow-md"
            key={activeExperience.company}
          >
            <motion.h3
              className="text-lg font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {activeExperience.role}
            </motion.h3>
            <motion.p
              className="text-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {activeExperience.company}
            </motion.p>
            <motion.p
              className="text-sm text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {activeExperience.startDate} - {activeExperience.endDate}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        ref={markersRef}
        className="absolute bottom-0 w-full flex justify-between items-end"
      >
        {months.map((month) => (
          <div key={month.date} className="flex flex-col items-center">
            <div
              className={`w-[1px] bg-foreground relative ${
                month.isQuarter ? "h-8" : "h-4"
              }`}
            />
            {month.isQuarter && (
              <span className="mt-2 text-xs whitespace-nowrap absolute -bottom-8">
                {month.date}
              </span>
            )}
          </div>
        ))}
      </div>
      {activePosition !== null && (
        <motion.div
          className="absolute bottom-0 w-[2px] bg-red-500"
          style={{
            height: "calc(100% - 2rem)",
            left: `${activePosition}%`,
          }}
          initial={{ height: 0 }}
          animate={{ height: "calc(100% - 2rem)" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <motion.span
            className="absolute top-0 left-1/2 -translate-x-1/2 transform whitespace-nowrap text-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {hoveredMonth}
          </motion.span>
        </motion.div>
      )}
    </div>
  );
}
