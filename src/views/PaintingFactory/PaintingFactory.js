/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import {
  SketchPicker,
  CirclePicker,
  TwitterPicker,
  AlphaPicker,
} from 'react-color';
import LZ from 'lz-string';

const pickers = [CirclePicker, TwitterPicker, SketchPicker];

const PaintingFactoy = (props) => {
  const calculatedVmin = Math.min(window.innerHeight, window.innerWidth);
  const [size, setSize] = useState([
    0.85 * calculatedVmin,
    0.85 * calculatedVmin,
  ]);
  const drawingCanvas = useRef(null);
  const [color, setColor] = useState('color', '#666666');
  const [drawingSize, setDrawingSize] = useState(0);
  const [picker, setPicker] = useState('picker', 0);
  const [brushRadius, setBrushRadius] = useState(8);

  const updateColor = (value) => {
    console.log(value);
    setColor(
      `rgba(${value.rgb.r},${value.rgb.g},${value.rgb.b},${value.rgb.a})`,
    );
    console.log(
      `rgba(${value.rgb.r},${value.rgb.g},${value.rgb.b},${value.rgb.a})`,
    );
  };

  const updateBrushRadius = (value) => {
    setBrushRadius(value);
  };

  const saveDrawing = (newDrawing) => {
    let savedData = LZ.compress(newDrawing.getSaveData());
    props.setDrawing(savedData);
  };

  const triggerOnChange = (lines) => {
    let saved = JSON.stringify({
      lines: lines,
      width: drawingCanvas.current.props.canvasWidth,
      height: drawingCanvas.current.props.canvasHeight,
    });

    drawingCanvas.current.loadSaveData(saved, true);
    drawingCanvas.current.lines = lines;
  };

  const undo = () => {
    if (!drawingCanvas.current.lines.length) return;

    if (
      drawingCanvas.current.lines[drawingCanvas.current.lines.length - 1].ref
    ) {
      drawingCanvas.current.lines[0].brushColor =
        drawingCanvas.current.lines[
          drawingCanvas.current.lines.length - 1
        ].brushColor;
      let lines = drawingCanvas.current.lines.slice(0, -1);
      triggerOnChange(lines);
    } else {
      let lines = drawingCanvas.current.lines.slice(0, -1);
      triggerOnChange(lines);
    }
  };

  const fillBackground = (color) => {
    let width = drawingCanvas.current.props.canvasWidth;
    let height = drawingCanvas.current.props.canvasHeight;

    let bg = {
      brushColor: color,
      brushRadius: (width + height) / 2,
      points: [
        { x: 0, y: 0 },
        { x: width, y: height },
      ],
      background: true,
    };

    let previousBGColor = drawingCanvas.current.lines.filter((l) => l.ref)
      .length
      ? drawingCanvas.current.lines[0].brushColor
      : '#FFF';

    let bgRef = {
      brushColor: previousBGColor,
      brushRadius: 1,
      points: [
        { x: -1, y: -1 },
        { x: -1, y: -1 },
      ],
      ref: true,
    };

    drawingCanvas.current.lines.filter((l) => l.background).length
      ? drawingCanvas.current.lines.splice(0, 1, bg)
      : drawingCanvas.current.lines.unshift(bg);
    drawingCanvas.current.lines.push(bgRef);

    let lines = drawingCanvas.current.lines;

    triggerOnChange(lines);
  };

  const drawFrame = (color, radius) => {
    let width = drawingCanvas.current.props.canvasWidth;
    let height = drawingCanvas.current.props.canvasHeight;

    drawingCanvas.current.lines.push({
      brushColor: color,
      brushRadius: radius,
      points: [
        { x: 0, y: 0 },
        { x: width, y: 0 },
        { x: width, y: 0 },
        { x: width, y: height },
        { x: width, y: height },
        { x: 0, y: height },
        { x: 0, y: height },
        { x: 0, y: 0 },
      ],
    });

    let lines = drawingCanvas.current.lines;

    triggerOnChange(lines);
  };

  const PickerDisplay = pickers[picker % pickers.length];

  return (
    <div style={{ textAlign: 'center' }}>
      <div
        style={{
          backgroundColor: '#666666',
          width: size[0],
          margin: '0 auto',
          border: '1px solid #999999',
          boxShadow: '2px 2px 8px #AAAAAA',
        }}
      >
        <CanvasDraw
          key={props.mode + '' + props.canvasKey}
          ref={drawingCanvas}
          canvasWidth={size[0]}
          canvasHeight={size[1]}
          brushColor={color}
          lazyRadius={3}
          brushRadius={brushRadius}
          //  disabled={props.mode !== "edit"}
          //  hideGrid={props.mode !== "edit"}
          //  hideInterface={props.mode !== "edit"}
          onChange={saveDrawing}
          immediateLoading={drawingSize >= 10000}
          loadTimeOffset={3}
        />
      </div>
    </div>
  );
};

export default PaintingFactoy;
