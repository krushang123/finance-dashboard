import { Box } from "@chakra-ui/layout"
import FusionCharts, { type ChartObject } from "fusioncharts"
import PowerCharts from "fusioncharts/fusioncharts.powercharts"
import TreeMap from "fusioncharts/fusioncharts.treemap"
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion"
import ReactFC from "react-fusioncharts"

ReactFC.fcRoot(FusionCharts, PowerCharts, TreeMap, FusionTheme)

interface HeatMapChartProps {
  dataSource: Record<string, unknown>
}

const HeatMapChart = (props: HeatMapChartProps) => {
  const { dataSource } = props

  const chartConfigs: ChartObject = {
    type: "heatmap",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource,
  }

  return (
    <Box rounded='md' overflow='hidden'>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-expect-error */}
      <ReactFC {...chartConfigs} />
    </Box>
  )
}

export default HeatMapChart
