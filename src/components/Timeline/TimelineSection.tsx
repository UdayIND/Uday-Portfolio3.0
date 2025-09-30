"use client";

import { MutableRefObject, useEffect, useRef, useState } from "react";
import {
  Branch,
  MENULINKS,
  NodeTypes,
  TIMELINE,
  type TimelineNodeV2,
  type CheckpointNode,
  type BranchNode,
} from "@/constants";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const svgColor = "#9CA3AF";
const animColor = "#FCD34D";
const separation = 450;
const strokeWidth = 2;
const leftBranchX = 13;
const curveLength = 150;
const dotSize = 26;

interface IDesktop {
  isDesktop: boolean;
}

const TimelineSection = ({ isDesktop }: IDesktop) => {
  const [svgWidth, setSvgWidth] = useState(400);
  const [rightBranchX, setRightBranchX] = useState(109);

  const svgCheckpointItems = TIMELINE.filter(
    (item) => item.type === NodeTypes.CHECKPOINT && item.shouldDrawLine
  );

  const svgLength = svgCheckpointItems?.length * separation;

  const timelineSvg: MutableRefObject<SVGSVGElement | null> = useRef(null);
  const svgContainer: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const screenContainer: MutableRefObject<HTMLDivElement | null> = useRef(null);

  type LinkedTimelineNode = TimelineNodeV2 & {
    next?: TimelineNodeV2;
    prev?: TimelineNodeV2;
  };

  const addNodeRefsToItems = (
    timeline: Array<TimelineNodeV2>
  ): Array<LinkedTimelineNode> => {
    return timeline.map((node, idx) => ({
      ...node,
      next: timeline[idx + 1],
      prev: timeline[idx - 1],
    }));
  };

  const getDotString = (x: number, y: number) => {
    return `<rect class='dot' width=${dotSize} height=${dotSize} fill='#111827' x=${
      x - dotSize / 2
    } y=${
      y - dotSize / 2
    } ></rect><circle cx=${x} cy=${y} r='7' stroke=${svgColor} class='dot' ></circle>`;
  };

  const addText = (
    timelineNode: LinkedTimelineNode & CheckpointNode,
    y: number,
    isDiverged: boolean
  ) => {
    const { title, subtitle, image } = timelineNode;

    const offset = isDiverged ? rightBranchX : 10;
    const foreignObjectX = dotSize / 2 + 10 + offset;
    const foreignObjectY = y - dotSize / 2;
    const foreignObjectWidth = svgWidth - (dotSize / 2 + 10 + offset);

    const logoString = image
      ? `<img src='${image}' class='h-8 mb-2' loading='lazy' width='100' height='32' alt='${image}' />`
      : "";
    const subtitleString = subtitle
      ? `<p class='text-xl mt-2 text-gray-200 font-medium tracking-wide'>${subtitle}</p>`
      : "";

    return `<foreignObject x=${foreignObjectX} y=${foreignObjectY} width=${foreignObjectWidth} 
        height=${separation}>${logoString}<p class='text-2xl text-white font-semibold'>${title}</p>${subtitleString}</foreignObject>`;
  };

  const drawDot = (
    timelineNode: LinkedTimelineNode & CheckpointNode,
    y: number,
    isDiverged: boolean
  ) => {
    const { next, alignment } = timelineNode;

    if (next && next.type === NodeTypes.DIVERGE) {
      y = y - curveLength + 6 * dotSize;
    }

    if (next && next.type === NodeTypes.CONVERGE) {
      y = y + curveLength - 6 * dotSize;
    }

    const dotString = getDotString(
      alignment === Branch.LEFT ? leftBranchX : rightBranchX,
      y
    );

    const textString = addText(timelineNode, y, isDiverged);

    return `${textString}${dotString}`;
  };

  const drawLine = (
    timelineNode: LinkedTimelineNode & CheckpointNode,
    y: number,
    i: number,
    isDiverged: boolean
  ) => {
    const { alignment, prev, next } = timelineNode;

    const isPrevDiverge = prev && prev.type === NodeTypes.DIVERGE;
    const isNextConverge = next && next.type === NodeTypes.CONVERGE;

    const lineY = Math.abs(y + separation);

    if (isPrevDiverge) {
      return `<line class='str' x1=${leftBranchX} y1=${y} x2=${leftBranchX} y2=${lineY} stroke=${svgColor} stroke-width='${strokeWidth}' /><line class='str line-${i}' x1=${leftBranchX} y1=${y} x2=${leftBranchX} y2=${lineY} stroke=${animColor} stroke-width='${strokeWidth}' />`;
    }

    if (isNextConverge) {
      return `<line class='str' x1=${leftBranchX} y1=${y} x2=${leftBranchX} y2=${lineY} stroke=${svgColor} stroke-width='${strokeWidth}' /><line class='str line-${i}' x1=${leftBranchX} y1=${y} x2=${leftBranchX} y2=${lineY} stroke=${animColor} stroke-width='${strokeWidth}' />`;
    }

    const lineX = alignment === Branch.LEFT ? leftBranchX : rightBranchX;

    let str = `<line class='str' x1=${lineX} y1=${y} x2=${lineX} y2=${lineY} stroke=${svgColor} stroke-width='${strokeWidth}' /><line class='str line-${i}' x1=${lineX} y1=${y} x2=${lineX} y2=${lineY} stroke=${animColor} stroke-width='${strokeWidth}' />`;

    if (isDiverged) {
      const divergedLineX =
        alignment === Branch.LEFT ? rightBranchX : leftBranchX;
      str = str.concat(
        `<line class='str' x1=${divergedLineX} y1=${y} x2=${divergedLineX} y2=${lineY} stroke=${svgColor} stroke-width='${strokeWidth}' /><line class='str line-${i}' x1=${divergedLineX} y1=${y} x2=${divergedLineX} y2=${lineY} stroke=${animColor} stroke-width='${strokeWidth}' />`
      );
    }
    return str;
  };

  const drawBranch = (
    timelineNode: LinkedTimelineNode & BranchNode,
    y: number,
    i: number
  ) => {
    const { type } = timelineNode;

    switch (type) {
      case NodeTypes.DIVERGE:
        return `<path class='str' d='M ${leftBranchX} ${y} C ${leftBranchX} ${
          y + curveLength / 2
        } ${rightBranchX} ${y + curveLength / 2} ${rightBranchX} ${
          y + curveLength
        }' stroke=${svgColor} stroke-width='${strokeWidth}' fill='none' /><line class='str' x1=${rightBranchX} y1=${
          y + curveLength
        } x2=${rightBranchX} y2=${
          y + separation
        } stroke=${svgColor} stroke-width='${strokeWidth}' /><path class='str anim-branch branch-${i}' d='M ${leftBranchX} ${y} C ${leftBranchX} ${
          y + curveLength / 2
        } ${rightBranchX} ${y + curveLength / 2} ${rightBranchX} ${
          y + curveLength
        }' stroke=${animColor} stroke-width='${strokeWidth}' fill='none' stroke-dasharray='186' /><line class='str branch-line-${i}' x1=${rightBranchX} y1=${
          y + curveLength
        } x2=${rightBranchX} y2=${y + separation} stroke=${animColor} stroke-width='${strokeWidth}' />`;
      case NodeTypes.CONVERGE:
        return `<path class='str' d='M ${rightBranchX} ${
          y + separation - curveLength
        } C ${rightBranchX} ${
          y + separation - curveLength + curveLength / 2
        } ${leftBranchX} ${
          y + separation - curveLength + curveLength / 2
        } ${leftBranchX} ${
          y + separation
        }' stroke=${svgColor} stroke-width='${strokeWidth}' fill='none' /><line class='str' x1=${rightBranchX} y1=${y} x2=${rightBranchX} y2=${Math.abs(
          y + separation - curveLength
        )} stroke=${svgColor} stroke-width='${strokeWidth}' /><path class='str anim-branch branch-${i}' d='M ${rightBranchX} ${
          y + separation - curveLength
        } C ${rightBranchX} ${
          y + separation - curveLength + curveLength / 2
        } ${leftBranchX} ${
          y + separation - curveLength + curveLength / 2
        } ${leftBranchX} ${
          y + separation
        }' stroke=${animColor} stroke-width='${strokeWidth}' fill='none' stroke-dasharray='186' /><line class='str branch-line-${i}' x1=${rightBranchX} y1=${y} x2=${rightBranchX} y2=${Math.abs(
          y + separation - curveLength
        )} stroke=${animColor} stroke-width='${strokeWidth}' />`;
      default:
        return "";
    }
  };

  const generateTimelineSvg = (timeline: Array<TimelineNodeV2>): string => {
    let index = 1;
    let y = dotSize / 2;
    let isDiverged = false;

    const timelineSvg = addNodeRefsToItems(timeline).reduce(
      (svg: string, node: LinkedTimelineNode) => {
        const { type, next } = node;
        let lineY = y;
        let dotY = y + separation / 2;

        switch (type) {
          case NodeTypes.CHECKPOINT:
            {
              const checkpointNode = node as LinkedTimelineNode & CheckpointNode;
              const { shouldDrawLine } = checkpointNode;

              if (!next) {
                lineY = y - separation / 2;
              }

              if (!shouldDrawLine) {
                dotY = y;
              }

              if (shouldDrawLine) {
                svg = shouldDrawLine
                  ? `${drawLine(checkpointNode, lineY, index, isDiverged)}${svg}`
                  : svg;
                y = y + separation;
                index++;
              }

              svg = svg.concat(drawDot(checkpointNode, dotY, isDiverged));
            }
            break;
          case NodeTypes.DIVERGE:
            {
              isDiverged = true;
              const branchNode = node as LinkedTimelineNode & BranchNode;
              svg = `${drawBranch(branchNode, y, index)}${svg}`;
            }
            break;
          case NodeTypes.CONVERGE:
            {
              isDiverged = false;
              const branchNode = node as LinkedTimelineNode & BranchNode;
              svg = `${drawBranch(branchNode, y - separation, index - 1)}${svg}`;
            }
            break;
        }

        return svg;
      },
      ""
    );

    return timelineSvg;
  };

  const setTimelineSvg = (
    svgContainer: MutableRefObject<HTMLDivElement | null>,
    timelineSvg: MutableRefObject<SVGSVGElement | null>
  ) => {
    if (!svgContainer.current || !timelineSvg.current) return;

    const containerWidth = svgContainer.current.clientWidth;
    setSvgWidth(containerWidth);

    const resultSvgString = generateTimelineSvg(TIMELINE);
    timelineSvg.current.innerHTML = resultSvgString;

    if (window.innerWidth < 768) {
      setRightBranchX(70);
    }
  };

  const animateTimeline = (timeline: gsap.core.Timeline, duration: number): void => {
    let index = 0;

    addNodeRefsToItems(TIMELINE).forEach((item) => {
      const { type } = item;

      if (type === NodeTypes.CHECKPOINT && (item as CheckpointNode).shouldDrawLine) {
        const startTime = `start+=${duration * index}`;

        if (svgContainer.current) {
          timeline.from(
            svgContainer.current.querySelectorAll(`.line-${index + 1}`),
            { scaleY: 0, duration },
            startTime
          );
        }

        index++;
      }
    });
  };

  const setSlidesAnimation = (timeline: gsap.core.Timeline): void => {
    if (!screenContainer.current) return;

    svgCheckpointItems.forEach((_, index) => {
      if (index !== 0) {
        timeline.fromTo(
          screenContainer.current!.querySelector(`.slide-${index + 1}`),
          { opacity: 0 },
          { opacity: 1 }
        );
      }

      if (index !== svgCheckpointItems.length - 1) {
        timeline.to(
          screenContainer.current!.querySelector(`.slide-${index + 1}`),
          {
            opacity: 0,
            delay: 2.35,
          }
        );
      }
    });
  };

  const initScrollTrigger = (): {
    timeline: gsap.core.Timeline;
    duration: number;
  } => {
    const timeline = gsap
      .timeline({ defaults: { ease: "none", duration: 0.44 } })
      .addLabel("start");

    let duration: number;
    let trigger: HTMLDivElement;
    let start: string;
    let end: string;
    let additionalConfig = {};

    if (isDesktop && window.innerWidth >= 768 && screenContainer.current && svgContainer.current) {
      setSlidesAnimation(timeline);

      const platformHeight =
        screenContainer.current.getBoundingClientRect().height;

      trigger = screenContainer.current;
      start = `top ${(window.innerHeight - platformHeight) / 2}`;
      end = `+=${svgLength - platformHeight}`;
      additionalConfig = {
        pin: true,
        pinSpacing: true,
      };
      duration = timeline.totalDuration() / svgCheckpointItems.length;
    } else {
      if (screenContainer.current) {
        screenContainer.current.innerHTML = "";
      }

      if (!svgContainer.current) {
        return { timeline, duration: 3 };
      }

      trigger = svgContainer.current;
      start = "top center";
      end = `+=${svgLength}`;
      duration = 3;
    }

    ScrollTrigger.create({
      ...additionalConfig,
      trigger,
      start,
      end,
      scrub: 0,
      animation: timeline,
    });
    return { timeline, duration };
  };

  useEffect(() => {
    setTimelineSvg(svgContainer, timelineSvg);

    const { timeline, duration } = initScrollTrigger();
    animateTimeline(timeline, duration);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isDesktop]);

  const renderSlides = (): React.ReactNode => (
    <div
      className="max-w-full h-96 shadow-xl bg-gray-800 rounded-2xl overflow-hidden"
      ref={screenContainer}
    >
      <div className="w-full h-8 bg-gray-700" />
      <div className="relative h-full w-full -mt-2">
        <div className="absolute top-0 left-0 h-full w-full">
          {svgCheckpointItems.map((item, index) => {
            const checkpointItem = item as CheckpointNode;
            return checkpointItem.slideImage ? (
              <Image
                key={`${checkpointItem.title}-${index}`}
                className={`w-full absolute top-0 object-cover slide-${
                  index + 1
                }`}
                src={checkpointItem.slideImage}
                alt="Timeline"
                fill
              />
            ) : null;
          })}
        </div>
      </div>
    </div>
  );

  const renderSVG = (): React.ReactNode => (
    <svg
      width={svgWidth}
      height={svgLength}
      viewBox={`0 0 ${svgWidth} ${svgLength}`}
      fill="none"
      ref={timelineSvg}
    ></svg>
  );

  const renderSectionTitle = (): React.ReactNode => (
    <div className="flex flex-col">
      <p className="text-sm uppercase tracking-widest text-gray-400 seq">MILESTONES</p>
      <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 seq">Timeline</h1>
      <h2 className="text-xl md:text-2xl md:max-w-2xl w-full text-gray-300 mt-2 seq">
        A quick recap of proud moments
      </h2>
    </div>
  );

  return (
    <section
      className="w-full relative select-none min-h-screen section-container py-20 md:py-32 flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto"
      id={MENULINKS[3].ref}
    >
      {renderSectionTitle()}
      <div className="grid grid-cols-12 gap-4 mt-20">
        <div className="col-span-12 md:col-span-6 line-svg" ref={svgContainer}>
          {renderSVG()}
        </div>
        <div className="col-span-12 md:col-span-6 md:flex hidden">
          {renderSlides()}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

