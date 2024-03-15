import { Box } from "@chakra-ui/layout"
import FusionCharts, { type ChartObject } from "fusioncharts"
import Charts from "fusioncharts/fusioncharts.charts"
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion"
import ReactFC from "react-fusioncharts"

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme)

interface StackedColumn2DChartProps {
  dataSource: Record<string, unknown>
}

const StackedColumn2DChart = (props: StackedColumn2DChartProps) => {
  const { dataSource } = props

  const chartConfigs: ChartObject = {
    type: "stackedcolumn2d",
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

export default StackedColumn2DChart
