/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
import React, { useRef, useEffect, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import {
  SketchPicker,
  CirclePicker,
  TwitterPicker,
  AlphaPicker,
} from 'react-color';
import LZ from 'lz-string';
import useLocalStorage from 'utils/localStorage';
import {
  Row,
  Button,
  Input,
  InputNumber,
  Form,
  message,
  Col,
  Slider,
  Space,
  notification,
} from 'antd';
import {
  UndoOutlined,
  ClearOutlined,
  PlaySquareOutlined,
  HighlightOutlined,
  BgColorsOutlined,
  BorderOutlined,
} from '@ant-design/icons';

const pickers = [CirclePicker, TwitterPicker, SketchPicker];

const PaintingFactoy = (props) => {
  const calculatedVmin = Math.min(window.innerWidth, window.innerHeight);
  const [size, setSize] = useState([
    0.6 * calculatedVmin,
    0.675 * calculatedVmin,
  ]);
  const [drawing, setDrawing] = useLocalStorage('drawing');
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
    setDrawing(savedData);
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

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const createInk = (errorInfo) => {
    console.log('YOU NEED TO ADD THIS FUNCTIONALITY MATE!!!!!');
  };

  const sending = (errorInfo) => {
    console.log('YOU NEED TO ADD THIS FUNCTIONALITY MATE!!!!!');
  };

  const PickerDisplay = pickers[picker % pickers.length];

  let top, bottom;
  if (true) {
    top = (
      <div style={{ width: '90vmin', margin: '0 auto', marginBottom: 16 }}>
        <Form
          layout={'inline'}
          name='createInk'
          //initialValues={{ limit: 0 }}
          onFinish={createInk}
          onFinishFailed={onFinishFailed}
          labelAlign={'middle'}
          style={{ justifyContent: 'center' }}
        >
          <Form.Item></Form.Item>

          <Form.Item
            name='title'
            rules={[
              { required: true, message: 'What is this work of art called?' },
            ]}
          >
            <Input placeholder={'name'} style={{ fontSize: 16 }} />
          </Form.Item>

          <Form.Item
            name='limit'
            rules={[
              { required: true, message: 'How many inks can be minted?' },
            ]}
          >
            <InputNumber
              placeholder={'limit'}
              style={{ fontSize: 16 }}
              min={0}
              precision={0}
            />
          </Form.Item>

          <Form.Item>
            <Button loading={sending} type='primary' htmlType='submit'>
              Ink!
            </Button>
          </Form.Item>
        </Form>

        <div style={{ marginTop: 16 }}>
          <Button onClick={() => undo()}>
            <UndoOutlined /> UNDO
          </Button>
          <Button
            onClick={() => {
              drawingCanvas.current.clear();
              props.setDrawing();
            }}
          >
            <ClearOutlined /> CLEAR
          </Button>
          <Button
            onClick={() => {
              drawingCanvas.current.loadSaveData(
                LZ.decompress(props.drawing),
                false,
              );
            }}
          >
            <PlaySquareOutlined /> PLAY
          </Button>
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
            >
              <HighlightOutlined />
            </Button>
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
          <Col span={12}>
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
              <Button onClick={() => fillBackground(color)}>
                <BgColorsOutlined />
                Background
              </Button>
            </Col>
            <Col span={4}>
              <Button onClick={() => drawFrame(color, brushRadius)}>
                <BorderOutlined />
                Frame
              </Button>
            </Col>
          </Space>
        </Row>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center' }}>
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
      {bottom}
    </div>
  );
};

export default PaintingFactoy;
