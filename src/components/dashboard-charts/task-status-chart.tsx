import taskStatusData from "constants/task-status.json"
import Doughnut2DChart from "../charts/doughnut-2d-chart"

const dataSource = {
  chart: {
    caption: "Task Status",
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
    showLabels: "0",
    valuePosition: "inside",
    valueFontColor: "#fffff",
    doughnutRadius: "40%",
    legendNumColumns: "1",
    legendposition: "left-bottom",
    legendIconSides: "4",
    showpercentvalues: "0",
    captionPadding: "0",
    labelPadding: "0",
    valuePadding: "0",
    canvasPadding: "0",
  },
  data: taskStatusData.data,
}

const TaskStatusChart = () => <Doughnut2DChart dataSource={dataSource} />

export default TaskStatusChart
