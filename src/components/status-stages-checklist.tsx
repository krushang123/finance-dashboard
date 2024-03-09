import taskStatusData from "constants/status-stages-checklist.json"
import StackedColumn2DChart from "./charts/stacked-column-2d-chart"

const dataSource = {
  chart: {
    caption: "Status of Stages in Checklist",
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
    legendIconSides: "4",
    captionPadding: "0",
    labelPadding: "10",
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
        {
          label: "Checklist Number 7",
        },
        {
          label: "Checklist Number 8",
        },
        {
          label: "Checklist Number 9",
        },
        {
          label: "Checklist Number 10",
        },
      ],
    },
  ],
  dataset: taskStatusData.data,
}

const StatusStagesChecklistChart = () => (
  <StackedColumn2DChart dataSource={dataSource} />
)

export default StatusStagesChecklistChart
