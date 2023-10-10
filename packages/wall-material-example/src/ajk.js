import * as PIXI from 'pixi.js';
import * as WM from '@3dnest/wall-material-ajk';

const app = new PIXI.Application({
	width: 1500,
	height: 1000,
	backgroundColor: 0xa6a6a4,
	// backgroundColor: 0x474747,
	antialias: true
});

document.body.appendChild(app.view);


//ajk
const basicText = new PIXI.Text('安居客');
basicText.x = 1300;
basicText.y = 20;

app.stage.addChild(basicText);

// singleDoor
const singleDoorGraphicsA = new PIXI.Graphics();
const singleDoorContextA = {
	width: 150,
	height: 30,
	fliped: false,
	scale: 10
};

app.stage.addChild(WM.Door.SingleDoor(singleDoorGraphicsA, singleDoorContextA));

singleDoorGraphicsA.x = 100;
singleDoorGraphicsA.y = 200;
// singleDoorGraphicsA.rotation = Math.PI / 8;

const singleDoorGraphicsB = new PIXI.Graphics();
const singleDoorContextB = {
	width: 150,
	height: 30,
	fliped: true,
	scale: 10
};

app.stage.addChild(WM.Door.SingleDoor(singleDoorGraphicsB, singleDoorContextB));

singleDoorGraphicsB.x = 300;
singleDoorGraphicsB.y = 200;

// slidingDoor
const slidingDoorGraphicsA = new PIXI.Graphics();
const slidingDoorContextA = {
	width: 150,
	height: 40,
	fliped: false,
	scale: 10
};

app.stage.addChild(WM.Door.SlidingDoor(slidingDoorGraphicsA, slidingDoorContextA));

slidingDoorGraphicsA.x = 850;
slidingDoorGraphicsA.y = 50;

const slidingDoorGraphicsB = new PIXI.Graphics();
const slidingDoorContextB = {
	width: 150,
	height: 40,
	fliped: true,
	scale: 10
};

app.stage.addChild(WM.Door.SlidingDoor(slidingDoorGraphicsB, slidingDoorContextB));

slidingDoorGraphicsB.x = 850;
slidingDoorGraphicsB.y = 120;

// window
const windowGraphics = new PIXI.Graphics();
const windowContext = {
	width: 150,
	height: 30,
	scale: 10
};

app.stage.addChild(WM.Window.BasicWindow(windowGraphics, windowContext));

windowGraphics.x = 100;
windowGraphics.y = 300;

// floorWindow
const floorWindowGraphics = new PIXI.Graphics();
const floorWindowContext = {
	width: 200,
	height: 30,
	scale: 10
};

app.stage.addChild(WM.Window.BoilerWindow(floorWindowGraphics, floorWindowContext));

floorWindowGraphics.x = 110;
floorWindowGraphics.y = 360;

// bealock
const bealockGraphics = new PIXI.Graphics();
const bealockContext = {
	width: 120,
	height: 20,
	scale: 10
};

app.stage.addChild(WM.Door.Bealock(bealockGraphics, bealockContext));

bealockGraphics.x = 310;
bealockGraphics.y = 410;

// DoorWay
const DoorWayGraphics = new PIXI.Graphics();
const DoorWayContext = {
	width: 150,
	height: 30,
	scale: 10
};

app.stage.addChild(WM.Door.DoorWay(DoorWayGraphics, DoorWayContext));

DoorWayGraphics.x = 1310;
DoorWayGraphics.y = 410;

// LWindow
// const LWindowGraphicsA = new PIXI.Graphics();
// const LWindowContextA = {
// 	leftWidth: 150,
// 	rightWidth: 150,
// 	leftWallThickness: 20,
// 	rightWallThickness: 20,
// 	scale: 10
// };

// app.stage.addChild(WM.Window.LWindow(LWindowGraphicsA, LWindowContextA));

// LWindowGraphicsA.x = 30;
// LWindowGraphicsA.y = 470;

const LWindowGraphicsB = new PIXI.Graphics();
const LWindowContextB = {
	main: [[0,0], [100,0], [100,100]],
	cross: [25, 25],
	scale: 10
};

app.stage.addChild(WM.Window.LPathWindow(LWindowGraphicsB, LWindowContextB));

LWindowGraphicsB.x = 30;
LWindowGraphicsB.y = 670;