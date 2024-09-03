import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Label, Switch } from "@fucina/ui";
import { AreaChart, AreaChartTooltipProps } from "@fucina/visualizations";

const chartdata = [
  {
    date: "Jan 23",
    SolarCells: 2890,
    Glass: 2338,
    Encapsulant: 1450,
    BackSheet: 1900,
    Frame: 1600,
    JunctionBox: 1800,
    Adhesive: 1700,
  },
  {
    date: "Feb 23",
    SolarCells: 2756,
    Glass: 2103,
    Encapsulant: 1200,
    BackSheet: 1850,
    Frame: 1700,
    JunctionBox: 1750,
    Adhesive: 1650,
  },
  {
    date: "Mar 23",
    SolarCells: 3322,
    Glass: 2194,
    Encapsulant: 1300,
    BackSheet: 2200,
    Frame: 1400,
    JunctionBox: 2000,
    Adhesive: 800,
  },
  {
    date: "Apr 23",
    SolarCells: 3470,
    Glass: 2108,
    Encapsulant: 1400,
    BackSheet: 1600,
    Frame: 1800,
    JunctionBox: 1900,
    Adhesive: -1950,
  },
  {
    date: "May 23",
    SolarCells: 3475,
    Glass: 1812,
    Encapsulant: 1550,
    BackSheet: 2300,
    Frame: 1450,
    JunctionBox: 2200,
    Adhesive: -1600,
  },
  {
    date: "Jun 23",
    SolarCells: 3129,
    Glass: 1726,
    Encapsulant: 1350,
    BackSheet: 2100,
    Frame: 1750,
    JunctionBox: 2050,
    Adhesive: -1700,
  },
  {
    date: "Jul 23",
    SolarCells: 3490,
    Glass: 1982,
    Encapsulant: 1450,
    BackSheet: 1950,
    Frame: 1500,
    JunctionBox: 2300,
    Adhesive: -1800,
  },
  {
    date: "Aug 23",
    SolarCells: 2903,
    Glass: 2012,
    Encapsulant: 1250,
    BackSheet: 1700,
    Frame: 1850,
    JunctionBox: 2150,
    Adhesive: -1900,
  },
  {
    date: "Sep 23",
    SolarCells: 2643,
    Glass: 2342,
    Encapsulant: 1400,
    BackSheet: 1600,
    Frame: 1500,
    JunctionBox: 2000,
    Adhesive: -3750,
  },
  {
    date: "Oct 23",
    SolarCells: 2837,
    Glass: 2473,
    Encapsulant: 1350,
    BackSheet: 1850,
    Frame: 1900,
    JunctionBox: 2100,
    Adhesive: -2600,
  },
  {
    date: "Nov 23",
    SolarCells: 2954,
    Glass: 3848,
    Encapsulant: 1200,
    BackSheet: 2000,
    Frame: 1750,
    JunctionBox: 2400,
    Adhesive: -2950,
  },
  {
    date: "Dec 23",
    SolarCells: 3239,
    Glass: 3736,
    Encapsulant: 1550,
    BackSheet: 1700,
    Frame: 1600,
    JunctionBox: 2250,
    Adhesive: -3800,
  },
];

const meta: Meta<typeof AreaChart> = {
  title: "Visualizations/AreaChart",
  component: AreaChart,
  args: { data: chartdata, index: "date", categories: ["SolarCells", "Glass"] },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Graph with lines connecting data points and shaded areas between the lines and the x-axis.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AreaChart>;

export const Default: Story = {
  render: () => (
    <AreaChart
      className="h-96 w-full"
      colors={["teal", "purple"]}
      data-testid="area-chart"
      data={chartdata}
      index="date"
      categories={["SolarCells", "Glass"]}
      enableLegendSlider
    />
  ),
};

export const DefaultNegative: Story = {
  args: {
    colors: ["teal", "purple"],
    categories: ["SolarCells", "Adhesive"],
  },
};

export const WithValueFormatter: Story = {
  args: {
    colors: ["teal", "purple"],
    valueFormatter: (v) => `$${Intl.NumberFormat("us").format(v).toString()}`,
  },
};

export const WithAxisLabels: Story = {
  args: {
    colors: ["teal", "purple"],
    xAxisLabel: "Month of Year",
    yAxisLabel: "Revenue",
  },
};

export const WithMinValue: Story = {
  args: {
    colors: ["teal", "purple"],
    autoMinValue: true,
  },
};

export const WithMinAndMaxValue: Story = {
  args: {
    colors: ["teal", "purple"],
    maxValue: 5000,
    minValue: -3000,
  },
};

export const AllColors: Story = {
  args: {
    data: chartdata,
    index: "date",
    categories: ["SolarCells", "Glass", "Encapsulant", "BackSheet", "Frame", "JunctionBox", "Adhesive"],
  },
};

export const WithLegendLeft: Story = {
  args: {
    colors: ["teal", "purple"],
    legendPosition: "left",
  },
};

export const WithLegendCenter: Story = {
  args: {
    colors: ["teal", "purple"],
    legendPosition: "center",
  },
};

export const WithLegendSlider: Story = {
  args: {
    colors: ["teal", "purple"],
    className: "max-w-md m-auto",
    data: chartdata,
    index: "date",
    categories: ["SolarCells", "Glass", "Encapsulant", "BackSheet", "Frame", "JunctionBox", "Adhesive"],
    enableLegendSlider: true,
    onValueChange: (v) => console.log(v),
  },
};

export const ShiftColors: Story = {
  args: {
    colors: ["amber", "cyan"],
  },
};

export const WithConnectNullsFalse: Story = {
  args: {
    data: chartdata.map(
      (
        item,
        index
      ): {
        date: string;
        Glass: number | null;
      } => {
        let glassValue: number | null = item.Glass;
        if (index > 5 && index < 8) {
          glassValue = null;
        }
        return {
          date: item.date,
          Glass: glassValue,
        };
      }
    ),
    index: "date",
    categories: ["SolarCells", "Glass"],
    colors: ["amber", "cyan"],
    connectNulls: false,
  },
};

export const WithStartEndOnly: Story = {
  args: {
    colors: ["teal", "purple"],
    startEndOnly: true,
  },
};

export const WithNoAxis: Story = {
  args: {
    colors: ["teal", "purple"],
    showXAxis: false,
    showYAxis: false,
  },
};

export const WithNoGridlines: Story = {
  args: {
    colors: ["teal", "purple"],
    showGridLines: false,
  },
};

export const WithNoLegend: Story = {
  args: {
    colors: ["teal", "purple"],
    showLegend: false,
  },
};

export const WithNoTooltip: Story = {
  args: {
    colors: ["teal", "purple"],
    showTooltip: false,
  },
};

export const WithOnValueChange: Story = {
  args: {
    colors: ["teal", "purple"],
    onValueChange: (v) => console.log(v),
  },
};

function WithTooltipCallbackExample() {
  const [callback, setCallBack] = React.useState<AreaChartTooltipProps | null>(null);
  const [checked, setChecked] = React.useState(true);
  return (
    <>
      <div className="flex items-center gap-3">
        <Label htmlFor="a">showTooltip</Label>
        <Switch id="a" checked={checked} onCheckedChange={setChecked} />
      </div>
      <AreaChart
        className="h-96 w-full"
        colors={["teal", "purple"]}
        data={chartdata}
        index="date"
        categories={["SolarCells", "Glass"]}
        tooltipCallback={(tooltipContent) => setCallBack(tooltipContent)}
        showTooltip={checked}
      />
      <pre>{JSON.stringify(callback, null, 2)}</pre>
    </>
  );
}

export const WithTooltipCallback: Story = {
  render: () => <WithTooltipCallbackExample />,
};

export const WithLargeTickGap: Story = {
  args: {
    colors: ["teal", "purple"],
    tickGap: 300,
  },
};

export const WithTypePercent: Story = {
  args: {
    colors: ["teal", "purple"],
    type: "percent",
  },
};

export const WithTypeStacked: Story = {
  args: {
    colors: ["teal", "purple"],
    type: "stacked",
  },
};

export const OneDataValue: Story = {
  args: {
    data: chartdata.slice(0, 1),
    index: "date",
    colors: ["teal", "purple"],
    categories: ["SolarCells", "Glass"],
    onValueChange: (v) => console.log(v),
  },
};

export const WithFillSolid: Story = {
  args: {
    colors: ["teal", "purple"],
    fill: "solid",
  },
};

export const WithFillNone: Story = {
  args: {
    colors: ["teal", "purple"],
    fill: "none",
  },
};

export const CustomTooltip: Story = {
  render: (args) => (
    <AreaChart className="h-96 w-full" colors={["teal", "purple"]} data-testid="area-chart" {...args} />
  ),
  args: {
    categories: ["SolarCells"],
    yAxisWidth: 65,
    customTooltip: (props: AreaChartTooltipProps) => {
      const { payload, active, label } = props;
      if (!active || !payload || payload.length === 0) return null;
      return (
        <div className="w-56 rounded-md border bg-white p-2 text-sm shadow-sm">
          <div className="flex flex-1 space-x-2.5">
            <div className={`bg- flex w-1.5 flex-col${payload[0].color}-500 rounded`} />
            <div className="w-full">
              <p className="font-medium text-gray-900">{label}</p>
              <div className="flex items-center justify-between space-x-8">
                <p className="whitespace-nowrap text-right text-gray-700">{payload[0].category}</p>
                <p className="whitespace-nowrap text-right font-medium text-gray-900">{payload[0].value}</p>
              </div>
            </div>
          </div>
        </div>
      );
    },
  },
};
