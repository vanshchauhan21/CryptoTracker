import React, { useRef, useEffect, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  DataZoomComponent
} from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
    TitleComponent,
    ToolboxComponent,
    TooltipComponent,
    GridComponent,
    DataZoomComponent,
    LineChart,
    CanvasRenderer,
    UniversalTransition
  ]);
export const Page = ({ chartData, multiAxis }) => {
  const y_min = Math.round(Math.min(...chartData.datasets[0].data))
  const y_min1 = Math.round(Math.min(...chartData.datasets[1].data))

  const chartRef = useRef(null);
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const newWidth = entry.contentRect.width;
        setWidth(newWidth);
      }
    });
  
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
  
    return () => resizeObserver.disconnect();
  }, []);
  
  useEffect(() => {
    if (chartRef.current && chartRef.current.getEchartsInstance) {
      chartRef.current.getEchartsInstance().resize();
    }
  }, [width]);
  const options = {
    tooltip: {
      trigger: 'axis',
      position: function (pt) {
        return [pt[0], '10%'];
      }
    },
    grid: {
      top: 10,
      bottom: 30,
      left: '3%',
      right: '3%',
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      data: chartData.labels,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        margin: 19,
        // interval: 'auto'
      },
    }],
    yAxis: [
      {
        type: 'value',
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        min: y_min,
        axisLabel: {
          margin: 15,
        },
      },
      {
        type: 'value',
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          margin: 15,
        },
        min1: y_min1,
      }
    ],
    // legend: {
    //   show: multiAxis ? true : false,
    // },
    
    responsive: true,
    series: [
      {
        name: chartData.datasets[0].label,
        type: 'line',
        smooth: false,
        yAxisIndex: 0,
        symbol: 'none',
        color: chartData.datasets[0].borderColor,
        emphasis: {
          focus: 'series'
        },
        stack: 'total',
        LineStyle: { width: chartData.datasets[0].borderWidth},
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(151, 212, 202)' // Top color (light greenish-blue)
            },
            {
              offset: 1,
              color: 'rgb(255, 255, 255)' // Bottom color (almost white)
            }
          ])
        },
        data: chartData.datasets[0].data
      },
      {
        name: chartData.datasets[1].label,
        type: 'line',
        smooth: false,
        yAxisIndex: 1,
        symbol: 'none',
        color: chartData.datasets[1].borderColor,
        emphasis: {
          focus: 'series'
        },
        LineStyle: { width: chartData.datasets[1].borderWidth},
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(247, 127, 137)' // Top color (light greenish-blue)
            },
            {
              offset: 1,
              color: 'rgb(255, 252, 252)' // Bottom color (almost white)
            }
          ])
        },
        data: chartData.datasets[1].data
      }
    ]
  };
  
 
  return (
    <div 
    ref={containerRef}
    style={{
      height: "100%", 
      width: "100%",
      position: "absolute",
      inset: 0,
      }}
    >
      <ReactECharts 
      ref={chartRef}
      option={options}
      notMerge={true}
      lazyUpdate={true}
      style={{ height: "100%", width: "100%" }}
      opts={{ renderer: 'canvas' }}
      autoResize
      />
    </div>
  )
};