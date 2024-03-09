import taskStatusData from "constants/task-status-distribution-user.json"
import HeatMapChart from "../charts/heat-map-chart"

const dataSource = {
  chart: {
    caption: "Task Status Distribution to User",
    subCaption: "Lorem ipsum dolor sit, amet",
    theme: "fusion",
    captionFont: "Montserrat, sans-serif",
    captionFontSize: "16",
    captionFontBold: "1",
    subcaptionFont: "Montserrat, sans-serif",
    subcaptionFontSize: "12",
    subcaptionFontColor: "#7E8B9F",
    subcaptionFontBold: "0",
    captionAlignment: "left",
    alignCaptionWithCanvas: "0",
    showLabels: "1",
    valuePosition: "inside",
    valueFontColor: "#fffff",
    captionPadding: "0",
    labelPadding: "10",
    showPlotBorder: "1",
    showValues: "1",
    mapByCategory: "1",
    showLegend: "0",
    plotBorderDashGap: "10",
    valueBorderPadding: "10",
  },
  rows: {
    row: [
      {
        id: "EXP",
        label: "Expired",
      },
      {
        id: "CMP",
        label: "Completed",
      },
      {
        id: "PL",
        label: "Planned",
      },
    ],
  },
  columns: {
    column: [
      {
        id: "wI",
        label: "Winter",
      },
      {
        id: "SU",
        label: "Summer",
      },
      {
        id: "SP",
        label: "Spring",
      },
      {
        id: "AU",
        label: "Autumn",
      },
    ],
  },
  dataset: [taskStatusData],
  colorRange: {
    gradient: "0",
    color: [
      {
        code: "#F04A4A",
        minValue: "0",
        maxValue: "50",
        label: "Freezing",
      },
      {
        code: "#02BD8B",
        minValue: "50",
        maxValue: "70",
        label: "Warm",
      },
      {
        code: "#99A3AC",
        minValue: "70",
        maxValue: "85",
        label: "Hot",
      },
    ],
  },
}

const TaskStatusDistributionUser = () => (
  <HeatMapChart dataSource={dataSource} />
)

export default TaskStatusDistributionUser
