/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
/* eslint-disable react/no-children-prop */
import React, { useRef, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import {
  SketchPicker,
  CirclePicker,
  TwitterPicker,
  AlphaPicker,
} from 'react-color';
import LZ from 'lz-string';
import useLocalStorage from 'utils/localStorage';
import { Row, InputNumber, Col, Slider, Space } from 'antd';
import 'antd/lib/input-number/style/index.css';
import 'antd/lib/slider/style/index.css';
import 'antd/lib/space/style/index.css';
import {
  UndoOutlined,
  ClearOutlined,
  PlaySquareOutlined,
  HighlightOutlined,
  BgColorsOutlined,
  BorderOutlined,
} from '@ant-design/icons';
import CreateNFT from 'views/CreateNFT';
import { Button } from 'components';

const pickers = [CirclePicker, TwitterPicker, SketchPicker];

const PaintingFactory = () => {
  const calculatedVmin = Math.min(window.innerWidth, window.innerHeight);
  const [size, setSize] = useState([
    0.6 * calculatedVmin,
    0.675 * calculatedVmin,
  ]);

  const [drawing, setDrawing] = useLocalStorage('drawing');
  const drawingCanvas = useRef(null);
  const [color, setColor] = useLocalStorage('color', '#666666');
  const [drawingSize, setDrawingSize] = useState(0);
  const [picker, setPicker] = useLocalStorage('picker', 0);
  const [brushRadius, setBrushRadius] = useState(8);
  const [file, setFile] = useState();
  const [wantToCreateArt, setWantToCreateArt] = useState(false);

  const updateBrushRadius = (value) => {
    setBrushRadius(value);
  };

  const saveDrawing = (newDrawing) => {
    let savedData = LZ.compress(newDrawing.getSaveData());
    setDrawing(savedData);
  };

  const updateColor = (value) => {
    console.log(value);
    setColor(
      `rgba(${value.rgb.r},${value.rgb.g},${value.rgb.b},${value.rgb.a})`,
    );
    console.log(
      `rgba(${value.rgb.r},${value.rgb.g},${value.rgb.b},${value.rgb.a})`,
    );
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

  function dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
      byteString = atob(dataURI.split(',')[1]);
    else byteString = unescape(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI
      .split(',')[0]
      .split(':')[1]
      .split(';')[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], { type: mimeString });
  }

  const createInk = async () => {
    const imageData = drawingCanvas.current.canvas.drawing.toDataURL(
      'image/png',
    );
    const blob = dataURItoBlob(imageData);

    setFile(blob);
    setWantToCreateArt(true);
  };

  const PickerDisplay = pickers[picker % pickers.length];

  let top, bottom;
  if (true) {
    top = (
      <div
        style={{
          width: '90vmin',
          margin: '0 auto',
          marginBottom: 16,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button text='Create art' onClick={createInk} />
        <div style={{ marginTop: 16, display: 'flex' }}>
          <Button
            onClick={() => undo()}
            children={
              <div>
                <UndoOutlined /> UNDO
              </div>
            }
          />

          <Button
            onClick={() => {
              drawingCanvas.current.clear();
              setDrawing();
            }}
            children={
              <div>
                <ClearOutlined /> CLEAR
              </div>
            }
          />

          <Button
            onClick={() => {
              drawingCanvas.current.loadSaveData(LZ.decompress(drawing), false);
            }}
            children={
              <div>
                {' '}
                <PlaySquareOutlined /> PLAY
              </div>
            }
          />
        </div>
      </div>
    );

    bottom = (
      <div style={{ marginTop: 16 }}>
        <Row
          style={{
            width: '90vmin',
            margin: '0 auto',
            marginTop: '4vh',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Space>
            <PickerDisplay color={color} onChangeComplete={updateColor} />
            <Button
              onClick={() => {
                setPicker(picker + 1);
              }}
              children={<HighlightOutlined />}
            />
          </Space>
        </Row>
        <Row
          style={{
            width: '90vmin',
            margin: '0 auto',
            marginTop: '4vh',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Col
            span={12}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <AlphaPicker onChangeComplete={updateColor} color={color} />
          </Col>
        </Row>
        <Row
          style={{
            width: '90vmin',
            margin: '0 auto',
            marginTop: '4vh',
            justifyContent: 'center',
          }}
        >
          <Col span={12}>
            <Slider
              min={1}
              max={100}
              onChange={updateBrushRadius}
              value={typeof brushRadius === 'number' ? brushRadius : 0}
            />
          </Col>
          <Col span={4}>
            <InputNumber
              min={1}
              max={100}
              style={{ margin: '0 16px' }}
              value={brushRadius}
              onChange={updateBrushRadius}
            />
          </Col>
        </Row>
        <Row
          style={{
            width: '90vmin',
            margin: '0 auto',
            marginTop: '4vh',
            justifyContent: 'center',
          }}
        >
          <Space>
            <Col span={4}>
              <Button
                onClick={() => fillBackground(color)}
                children={
                  <div>
                    <BgColorsOutlined />
                    Background
                  </div>
                }
              />
            </Col>
            <Col span={4}>
              <Button
                onClick={() => drawFrame(color, brushRadius)}
                children={
                  <div>
                    {' '}
                    <BorderOutlined />
                    Frame
                  </div>
                }
              />
            </Col>
          </Space>
        </Row>
      </div>
    );
  }

  if (wantToCreateArt) {
    return <CreateNFT artFile={file} />;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
      {top}
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
          // key={props.mode + '' canvasKey}
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
      {bottom}
    </div>
  );
};

export default PaintingFactory;
