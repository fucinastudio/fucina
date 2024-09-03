/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Bar,
  CartesianGrid,
  Label,
  BarChart as RechartsBarChart,
  Legend as RechartsLegend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { AxisDomain } from "recharts/types/util/types";

import {
  cn,
  useOnWindowResize,
  AvailableChartColors,
  AvailableChartColorsKeys,
  constructCategoryColors,
  getColorClassName,
  getYAxisDomain,
} from "@fucina/utils";

//#region Shape

function deepEqual<T>(obj1: T, obj2: T): boolean {
  if (obj1 === obj2) return true;

  if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) {
    return false;
  }

  const keys1 = Object.keys(obj1) as Array<keyof T>;
  const keys2 = Object.keys(obj2) as Array<keyof T>;

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
}

const renderShape = (
  props: any,
  activeBar: any | undefined,
  activeLegend: string | undefined,
  layout: string
) => {
  const { fillOpacity, name, payload, value } = props;
  let { x, width, y, height } = props;

  if (layout === "horizontal" && height < 0) {
    y += height;
    height = Math.abs(height); // height must be a positive number
  } else if (layout === "vertical" && width < 0) {
    x += width;
    width = Math.abs(width); // width must be a positive number
  }

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      opacity={
        activeBar || (activeLegend && activeLegend !== name)
          ? deepEqual(activeBar, { ...payload, value })
            ? fillOpacity
            : 0.3
          : fillOpacity
      }
    />
  );
};

//#region Legend

interface LegendItemProps {
  name: string;
  color: AvailableChartColorsKeys;
  onClick?: (name: string, color: AvailableChartColorsKeys) => void;
  activeLegend?: string;
}

const LegendItem = ({ name, color, onClick, activeLegend }: LegendItemProps) => {
  const hasOnValueChange = !!onClick;
  return (
    <li
      className={cn(
        // base
        "group inline-flex flex-nowrap items-center gap-1.5 whitespace-nowrap rounded px-3 py-1 transition",
        hasOnValueChange ? "hover:bg-item-active cursor-pointer" : "cursor-default"
      )}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.(name, color);
      }}>
      <span
        className={cn(
          "h-1 w-4 shrink-0 rounded-full",
          getColorClassName(color, "bg"),
          activeLegend && activeLegend !== name ? "opacity-40" : "opacity-100"
        )}
        aria-hidden={true}
      />
      <p
        className={cn(
          // base
          "truncate whitespace-nowrap",
          // text color
          "text-description",
          hasOnValueChange && "group-hover:text",
          activeLegend && activeLegend !== name ? "opacity-40" : "opacity-100",
          activeLegend ? "!text" : ""
        )}>
        {name}
      </p>
    </li>
  );
};

interface ScrollButtonProps {
  icon: React.ElementType;
  onClick?: () => void;
  disabled?: boolean;
}

const ScrollButton = ({ icon, onClick, disabled }: ScrollButtonProps) => {
  const Icon = icon;
  const [isPressed, setIsPressed] = React.useState(false);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    if (isPressed) {
      intervalRef.current = setInterval(() => {
        onClick?.();
      }, 300);
    } else {
      clearInterval(intervalRef.current as NodeJS.Timeout);
    }
    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, [isPressed, onClick]);

  React.useEffect(() => {
    if (disabled) {
      clearInterval(intervalRef.current as NodeJS.Timeout);
      setIsPressed(false);
    }
  }, [disabled]);

  return (
    <button
      type="button"
      className={cn(
        // base
        "flex size-6 items-center justify-center truncate rounded transition",
        disabled ? "text-disabled cursor-not-allowed" : "hover:bg-item-active hover:cursor-pointer"
      )}
      disabled={disabled}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        setIsPressed(true);
      }}
      onMouseUp={(e) => {
        e.stopPropagation();
        setIsPressed(false);
      }}>
      <Icon className="size-4" aria-hidden="true" />
    </button>
  );
};

interface LegendProps extends React.OlHTMLAttributes<HTMLOListElement> {
  categories: string[];
  colors?: AvailableChartColorsKeys[];
  onClickLegendItem?: (category: string, color: string) => void;
  activeLegend?: string;
  enableLegendSlider?: boolean;
}

type HasScrollProps = {
  left: boolean;
  right: boolean;
};

const Legend = React.forwardRef<HTMLOListElement, LegendProps>((props, ref) => {
  const {
    categories,
    colors = AvailableChartColors,
    className,
    onClickLegendItem,
    activeLegend,
    enableLegendSlider = false,
    ...other
  } = props;
  const scrollableRef = React.useRef<HTMLInputElement>(null);
  const scrollButtonsRef = React.useRef<HTMLDivElement>(null);
  const [hasScroll, setHasScroll] = React.useState<HasScrollProps | null>(null);
  const [isKeyDowned, setIsKeyDowned] = React.useState<string | null>(null);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const checkScroll = React.useCallback(() => {
    const scrollable = scrollableRef?.current;
    if (!scrollable) return;

    const hasLeftScroll = scrollable.scrollLeft > 0;
    const hasRightScroll = scrollable.scrollWidth - scrollable.clientWidth > scrollable.scrollLeft;

    setHasScroll({ left: hasLeftScroll, right: hasRightScroll });
  }, [setHasScroll]);

  const scrollToTest = React.useCallback(
    (direction: "left" | "right") => {
      const element = scrollableRef?.current;
      const scrollButtons = scrollButtonsRef?.current;
      const scrollButtonsWith = scrollButtons?.clientWidth ?? 0;
      const width = element?.clientWidth ?? 0;

      if (element && enableLegendSlider) {
        element.scrollTo({
          left:
            direction === "left"
              ? element.scrollLeft - width + scrollButtonsWith
              : element.scrollLeft + width - scrollButtonsWith,
          behavior: "smooth",
        });
        setTimeout(() => {
          checkScroll();
        }, 400);
      }
    },
    [enableLegendSlider, checkScroll]
  );

  React.useEffect(() => {
    const keyDownHandler = (key: string) => {
      if (key === "ArrowLeft") {
        scrollToTest("left");
      } else if (key === "ArrowRight") {
        scrollToTest("right");
      }
    };
    if (isKeyDowned) {
      keyDownHandler(isKeyDowned);
      intervalRef.current = setInterval(() => {
        keyDownHandler(isKeyDowned);
      }, 300);
    } else {
      clearInterval(intervalRef.current as NodeJS.Timeout);
    }
    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, [isKeyDowned, scrollToTest]);

  const keyDown = (e: KeyboardEvent) => {
    e.stopPropagation();
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();
      setIsKeyDowned(e.key);
    }
  };
  const keyUp = (e: KeyboardEvent) => {
    e.stopPropagation();
    setIsKeyDowned(null);
  };

  React.useEffect(() => {
    const scrollable = scrollableRef?.current;
    if (enableLegendSlider) {
      checkScroll();
      scrollable?.addEventListener("keydown", keyDown);
      scrollable?.addEventListener("keyup", keyUp);
    }

    return () => {
      scrollable?.removeEventListener("keydown", keyDown);
      scrollable?.removeEventListener("keyup", keyUp);
    };
  }, [checkScroll, enableLegendSlider]);

  return (
    <ol ref={ref} className={cn("relative overflow-hidden", className)} {...other}>
      <div
        ref={scrollableRef}
        tabIndex={0}
        className={cn(
          "flex h-full",
          enableLegendSlider
            ? hasScroll?.right || hasScroll?.left
              ? "snap-mandatory items-center overflow-auto pl-4 pr-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              : ""
            : "flex-wrap"
        )}>
        {categories.map((category, index) => (
          <LegendItem
            key={`item-${index}`}
            name={category}
            color={colors[index] as AvailableChartColorsKeys}
            onClick={onClickLegendItem}
            activeLegend={activeLegend}
          />
        ))}
      </div>
      {enableLegendSlider && (hasScroll?.right || hasScroll?.left) ? (
        <>
          <div
            className={cn(
              // base
              "absolute inset-y-0 right-0 flex h-full items-center justify-center pr-1",
              // background color
              "bg-background"
            )}>
            <ScrollButton
              icon={ChevronLeft}
              onClick={() => {
                setIsKeyDowned(null);
                scrollToTest("left");
              }}
              disabled={!hasScroll?.left}
            />
            <ScrollButton
              icon={ChevronRight}
              onClick={() => {
                setIsKeyDowned(null);
                scrollToTest("right");
              }}
              disabled={!hasScroll?.right}
            />
          </div>
        </>
      ) : null}
    </ol>
  );
});

Legend.displayName = "Legend";

const ChartLegend = (
  { payload }: any,
  categoryColors: Map<string, AvailableChartColorsKeys>,
  setLegendHeight: React.Dispatch<React.SetStateAction<number>>,
  activeLegend: string | undefined,
  onClick?: (category: string, color: string) => void,
  enableLegendSlider?: boolean,
  legendPosition?: "left" | "center" | "right",
  yAxisWidth?: number
) => {
  const legendRef = React.useRef<HTMLDivElement>(null);

  useOnWindowResize(() => {
    const calculateHeight = (height: number | undefined) => (height ? Number(height) + 15 : 60);
    setLegendHeight(calculateHeight(legendRef.current?.clientHeight));
  });

  const filteredPayload = payload.filter((item: any) => item.type !== "none");

  const paddingLeft = legendPosition === "left" && yAxisWidth ? yAxisWidth - 8 : 0;

  return (
    <div
      style={{ paddingLeft: paddingLeft }}
      ref={legendRef}
      className={cn(
        "flex items-center",
        { "justify-center": legendPosition === "center" },
        {
          "justify-start": legendPosition === "left",
        },
        { "justify-end": legendPosition === "right" }
      )}>
      <Legend
        categories={filteredPayload.map((entry: any) => entry.value)}
        colors={filteredPayload.map((entry: any) => categoryColors.get(entry.value))}
        onClickLegendItem={onClick}
        activeLegend={activeLegend}
        enableLegendSlider={enableLegendSlider}
      />
    </div>
  );
};

//#region Tooltip

type TooltipProps = Pick<ChartTooltipProps, "active" | "payload" | "label">;

type PayloadItem = {
  category: string;
  value: number;
  index: string;
  color: AvailableChartColorsKeys;
  type?: string;
  payload: any;
};

interface ChartTooltipProps {
  active: boolean | undefined;
  payload: PayloadItem[];
  label: string;
  valueFormatter: (value: number) => string;
}

const ChartTooltip = ({ active, payload, label, valueFormatter }: ChartTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div
        className={cn(
          // base
          "rounded border shadow-md",
          // border color
          "border-default",
          // background color
          "bg-elevated"
        )}>
        <div className={cn("border-b border-inherit px-4 py-2")}>
          <p className={cn("font-medium")}>{label}</p>
        </div>
        <div className={cn("space-y-1 px-4 py-2")}>
          {payload.map(({ value, category, color }, index) => (
            <div key={`id-${index}`} className="flex justify-between items-center space-x-8">
              <div className="flex items-center space-x-2">
                <span
                  aria-hidden="true"
                  className={cn("h-1 w-4 shrink-0 rounded-full", getColorClassName(color, "bg"))}
                />
                <p
                  className={cn(
                    // base
                    "whitespace-nowrap text-right",
                    // text color
                    "text-description"
                  )}>
                  {category}
                </p>
              </div>
              <p
                className={cn(
                  // base
                  "whitespace-nowrap text-right font-medium tabular-nums"
                )}>
                {valueFormatter(value)}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

//#region BarChart

type BaseEventProps = {
  eventType: "category" | "bar";
  categoryClicked: string;
  [key: string]: number | string;
};

type BarChartEventProps = BaseEventProps | null | undefined;

interface BarChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Record<string, any>[];
  index: string;
  categories: string[];
  colors?: AvailableChartColorsKeys[];
  valueFormatter?: (value: number) => string;
  startEndOnly?: boolean;
  showXAxis?: boolean;
  showYAxis?: boolean;
  showGridLines?: boolean;
  yAxisWidth?: number;
  intervalType?: "preserveStartEnd" | "equidistantPreserveStart";
  showTooltip?: boolean;
  showLegend?: boolean;
  autoMinValue?: boolean;
  minValue?: number;
  maxValue?: number;
  allowDecimals?: boolean;
  onValueChange?: (value: BarChartEventProps) => void;
  enableLegendSlider?: boolean;
  tickGap?: number;
  barCategoryGap?: string | number;
  xAxisLabel?: string;
  yAxisLabel?: string;
  layout?: "vertical" | "horizontal";
  type?: "default" | "stacked" | "percent";
  legendPosition?: "left" | "center" | "right";
  tooltipCallback?: (tooltipCallbackContent: TooltipProps) => void;
  customTooltip?: React.ComponentType<TooltipProps>;
}

const BarChart = React.forwardRef<HTMLDivElement, BarChartProps>((props, forwardedRef) => {
  const {
    data = [],
    categories = [],
    index,
    colors = AvailableChartColors,
    valueFormatter = (value: number) => value.toString(),
    startEndOnly = false,
    showXAxis = true,
    showYAxis = true,
    showGridLines = true,
    yAxisWidth = 56,
    intervalType = "equidistantPreserveStart",
    showTooltip = true,
    showLegend = true,
    autoMinValue = false,
    minValue,
    maxValue,
    allowDecimals = true,
    className,
    onValueChange,
    enableLegendSlider = false,
    barCategoryGap,
    tickGap = 5,
    xAxisLabel,
    yAxisLabel,
    layout = "horizontal",
    type = "default",
    legendPosition = "right",
    tooltipCallback,
    customTooltip,
    ...other
  } = props;
  const CustomTooltip = customTooltip;
  const paddingValue = (!showXAxis && !showYAxis) || (startEndOnly && !showYAxis) ? 0 : 20;
  const [legendHeight, setLegendHeight] = React.useState(60);
  const [activeLegend, setActiveLegend] = React.useState<string | undefined>(undefined);
  const categoryColors = constructCategoryColors(categories, colors);
  const [activeBar, setActiveBar] = React.useState<any | undefined>(undefined);
  const yAxisDomain = getYAxisDomain(autoMinValue, minValue, maxValue);
  const hasOnValueChange = !!onValueChange;
  const stacked = type === "stacked" || type === "percent";

  const prevActiveRef = React.useRef<boolean | undefined>(undefined);
  const prevLabelRef = React.useRef<string | undefined>(undefined);

  function valueToPercent(value: number) {
    return `${(value * 100).toFixed(0)}%`;
  }

  function onBarClick(data: any, _: any, event: React.MouseEvent) {
    event.stopPropagation();
    if (!onValueChange) return;
    if (deepEqual(activeBar, { ...data.payload, value: data.value })) {
      setActiveLegend(undefined);
      setActiveBar(undefined);
      onValueChange?.(null);
    } else {
      setActiveLegend(data.tooltipPayload?.[0]?.dataKey);
      setActiveBar({
        ...data.payload,
        value: data.value,
      });
      onValueChange?.({
        eventType: "bar",
        categoryClicked: data.tooltipPayload?.[0]?.dataKey,
        ...data.payload,
      });
    }
  }

  function onCategoryClick(dataKey: string) {
    if (!hasOnValueChange) return;
    if (dataKey === activeLegend && !activeBar) {
      setActiveLegend(undefined);
      onValueChange?.(null);
    } else {
      setActiveLegend(dataKey);
      onValueChange?.({
        eventType: "category",
        categoryClicked: dataKey,
      });
    }
    setActiveBar(undefined);
  }

  return (
    <div ref={forwardedRef} className={cn("h-80 w-full", className)} tremor-id="tremor-raw" {...other}>
      <ResponsiveContainer>
        <RechartsBarChart
          data={data}
          onClick={
            hasOnValueChange && (activeLegend || activeBar)
              ? () => {
                  setActiveBar(undefined);
                  setActiveLegend(undefined);
                  onValueChange?.(null);
                }
              : undefined
          }
          margin={{
            bottom: xAxisLabel ? 30 : undefined,
            left: yAxisLabel ? 20 : undefined,
            right: yAxisLabel ? 5 : undefined,
            top: 5,
          }}
          stackOffset={type === "percent" ? "expand" : undefined}
          layout={layout}
          barCategoryGap={barCategoryGap}>
          {showGridLines ? (
            <CartesianGrid
              className={cn("stroke-neutral-200 stroke-1 dark:stroke-neutral-800")}
              horizontal={layout !== "vertical"}
              vertical={layout === "vertical"}
            />
          ) : null}
          <XAxis
            hide={!showXAxis}
            tick={{
              transform: layout !== "vertical" ? "translate(0, 6)" : undefined,
            }}
            fill=""
            stroke=""
            className={cn(
              // text fill
              "fill-neutral-500 dark:fill-neutral-500",
              { "mt-4": layout !== "vertical" }
            )}
            tickLine={false}
            axisLine={false}
            minTickGap={tickGap}
            {...(layout !== "vertical"
              ? {
                  padding: {
                    left: paddingValue,
                    right: paddingValue,
                  },
                  dataKey: index,
                  interval: startEndOnly ? "preserveStartEnd" : intervalType,
                  ticks: startEndOnly ? [data[0][index], data[data.length - 1][index]] : undefined,
                }
              : {
                  type: "number",
                  domain: yAxisDomain as AxisDomain,
                  tickFormatter: type === "percent" ? valueToPercent : valueFormatter,
                  allowDecimals: allowDecimals,
                })}>
            {xAxisLabel && (
              <Label
                position="insideBottom"
                offset={-20}
                className="font-medium fill-neutral-800 dark:fill-neutral-200">
                {xAxisLabel}
              </Label>
            )}
          </XAxis>
          <YAxis
            width={yAxisWidth}
            hide={!showYAxis}
            axisLine={false}
            tickLine={false}
            fill=""
            stroke=""
            className={cn(
              // text fill
              "fill-neutral-500 dark:fill-neutral-500"
            )}
            tick={{
              transform: layout !== "vertical" ? "translate(-1, 0)" : "translate(0, 0)",
            }}
            {...(layout !== "vertical"
              ? {
                  type: "number",
                  domain: yAxisDomain as AxisDomain,
                  tickFormatter: type === "percent" ? valueToPercent : valueFormatter,
                  allowDecimals: allowDecimals,
                }
              : {
                  dataKey: index,
                  ticks: startEndOnly ? [data[0][index], data[data.length - 1][index]] : undefined,
                  type: "category",
                  interval: "equidistantPreserveStart",
                })}>
            {yAxisLabel && (
              <Label
                position="insideLeft"
                style={{ textAnchor: "middle" }}
                angle={-90}
                offset={-15}
                className="font-medium fill-neutral-800 dark:fill-neutral-200">
                {yAxisLabel}
              </Label>
            )}
          </YAxis>
          <Tooltip
            wrapperStyle={{ outline: "none" }}
            isAnimationActive={true}
            animationDuration={100}
            cursor={{ fill: "#d1d5db", opacity: "0.15" }}
            offset={16}
            position={{
              y: layout === "horizontal" ? 0 : undefined,
              x: layout === "horizontal" ? undefined : yAxisWidth + 20,
            }}
            content={({ active, payload, label }) => {
              const cleanPayload: TooltipProps["payload"] = payload
                ? payload.map((item: any) => ({
                    category: item.dataKey,
                    value: item.value,
                    index: item.payload[index],
                    color: categoryColors.get(item.dataKey) as AvailableChartColorsKeys,
                    type: item.type,
                    payload: item.payload,
                  }))
                : [];

              if (tooltipCallback && (active !== prevActiveRef.current || label !== prevLabelRef.current)) {
                tooltipCallback({ active, payload: cleanPayload, label });
                prevActiveRef.current = active;
                prevLabelRef.current = label;
              }

              return showTooltip && active ? (
                CustomTooltip ? (
                  <CustomTooltip active={active} payload={cleanPayload} label={label} />
                ) : (
                  <ChartTooltip
                    active={active}
                    payload={cleanPayload}
                    label={label}
                    valueFormatter={valueFormatter}
                  />
                )
              ) : null;
            }}
          />
          {showLegend ? (
            <RechartsLegend
              verticalAlign="top"
              height={legendHeight}
              content={({ payload }) =>
                ChartLegend(
                  { payload },
                  categoryColors,
                  setLegendHeight,
                  activeLegend,
                  hasOnValueChange
                    ? (clickedLegendItem: string) => onCategoryClick(clickedLegendItem)
                    : undefined,
                  enableLegendSlider,
                  legendPosition,
                  yAxisWidth
                )
              }
            />
          ) : null}
          {categories.map((category) => (
            <Bar
              className={cn(
                getColorClassName(categoryColors.get(category) as AvailableChartColorsKeys, "fill"),
                onValueChange ? "cursor-pointer" : ""
              )}
              key={category}
              name={category}
              type="linear"
              dataKey={category}
              stackId={stacked ? "stack" : undefined}
              isAnimationActive={false}
              fill=""
              shape={(props: any) => renderShape(props, activeBar, activeLegend, layout)}
              onClick={onBarClick}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
});

BarChart.displayName = "BarChart";

export { BarChart, type BarChartEventProps, type TooltipProps as BarChartTooltipProps };