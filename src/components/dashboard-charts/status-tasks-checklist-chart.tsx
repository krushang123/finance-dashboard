import taskStatusData from "constants/status-tasks-checklist.json"
import StackedColumn2DChart from "../charts/stacked-column-2d-chart"

const dataSource = {
  chart: {
    caption: "Status of Tasks in Checklist",
    subCaption: "",
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
    legendposition: "top-left",
    legendCaptionAlignment: "center",
    alignLegendWithCanvas: "0",
    legendIconSides: "4",
    captionPadding: "0",
    canvasLeftMargin: "20",
    canvasRightMargin: "20",
    canvasTopMargin: "24",
    canvasBottomMargin: "24",
    legendPadding: "30",
    labelPadding: "10",
    labelDisplay: "rotate",
    rotateLabels: "1",
    slantLabel: "1",
    useEllipsesWhenOverflow: "1",
    numDivLines: 2,
    divLineThickness: 2,
    labelFontSize: 12,
    labelFontBold: 600,
    scrollPosition: "bottom",
    plotToolText:
      "$plotIdentifier $label | $seriesName: <strong> $dataValue</strong>",
    drawCrossLine: "0",
    canvasPadding: "0",
    legendIconScale: 1.2,
    yAxisValueFontSize: 12,
    yAxisValueFontBold: 600,
    captionHorizontalPadding: 20,
  },
  categories: [
    {
      category: [
        {
          label: "Checklist Number 1",
        },
        {
          label: "Checklist Number 2",
        },
        {
          label: "Checklist Number 3",
        },
        {
          label: "Checklist Number 4",
        },
        {
          label: "Checklist Number 5",
        },
        {
          label: "Checklist Number 6",
        },
      ],
    },
  ],
  dataset: taskStatusData.data,
}

const StatusTasksChecklistChart = () => (
  <StackedColumn2DChart dataSource={dataSource} />
)

export default StatusTasksChecklistChart
