import * as PIXI from 'pixi.js';
import * as WM from '@3dnest/wall-material-original';

const app = new PIXI.Application({
	width: 1500,
	height: 1000,
	backgroundColor: 0x32bbb0,
	antialias: true
});

document.body.appendChild(app.view);

//origin
const basicText = new PIXI.Text('众趣');
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
singleDoorGraphicsA.rotation = Math.PI / 8;

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

// doubleDoor
const doubleDoorGraphics = new PIXI.Graphics();
const doubleDoorContext = {
	width: 300,
	height: 30,
	scale: 10
};

app.stage.addChild(WM.Door.DoubleDoor(doubleDoorGraphics, doubleDoorContext));

doubleDoorGraphics.x = 600;
doubleDoorGraphics.y = 200;

// slidingDoor
const slidingDoorGraphicsA = new PIXI.Graphics();
const slidingDoorContextA = {
	width: 150,
	height: 30,
	fliped: false,
	scale: 10
};

app.stage.addChild(WM.Door.SlidingDoor(slidingDoorGraphicsA, slidingDoorContextA));

slidingDoorGraphicsA.x = 850;
slidingDoorGraphicsA.y = 50;

const slidingDoorGraphicsB = new PIXI.Graphics();
const slidingDoorContextB = {
	width: 150,
	height: 30,
	fliped: true,
	scale: 10
};

app.stage.addChild(WM.Door.SlidingDoor(slidingDoorGraphicsB, slidingDoorContextB));

slidingDoorGraphicsB.x = 850;
slidingDoorGraphicsB.y = 120;

// basicWindow
const windowGraphics = new PIXI.Graphics();
const windowContext = {
	width: 150,
	height: 30,
	scale: 10
};

app.stage.addChild(WM.Window.BasicWindow(windowGraphics, windowContext));

windowGraphics.x = 100;
windowGraphics.y = 300;

// boilerWindow
const boilerWindowGraphicsA = new PIXI.Graphics();
const boilerWindowContextA = {
	width: 150,
	height: 20,
	// sillThickness: 20,
	// windowThickness: 20,
	scale: 10
};

app.stage.addChild(WM.Window.BoilerWindow(boilerWindowGraphicsA, boilerWindowContextA));

boilerWindowGraphicsA.x = 335;
boilerWindowGraphicsA.y = 350;

const boilerWindowGraphicsB = new PIXI.Graphics();
const boilerWindowContextB = {
	width: 150,
	height: 20,
	sillThickness: 40,
	windowThickness: 20,
	scale: 10
};

app.stage.addChild(WM.Window.BoilerWindow(boilerWindowGraphicsB, boilerWindowContextB));

boilerWindowGraphicsB.x = 585;
boilerWindowGraphicsB.y = 300;

const boilerWindowGraphicsC = new PIXI.Graphics();
const boilerWindowContextC = {
	width: 200,
	height: 20,
	// windowThickness: 100,
	scale: 10
};

app.stage.addChild(WM.Window.BoilerWindow(boilerWindowGraphicsC, boilerWindowContextC));

boilerWindowGraphicsC.x = 855;
boilerWindowGraphicsC.y = 400;

// floorWindow
const floorWindowGraphics = new PIXI.Graphics();
const floorWindowContext = {
	width: 200,
	height: 30,
	scale: 10
};

app.stage.addChild(WM.Window.FloorWindow(floorWindowGraphics, floorWindowContext));

floorWindowGraphics.x = 110;
floorWindowGraphics.y = 360;

// parentDoor
const parentDoorGraphics = new PIXI.Graphics();
const parentDoorContext = {
	width: 150,
	height: 30,
	fliped: false,
	scale: 10
};

app.stage.addChild(WM.Door.ParentDoor(parentDoorGraphics, parentDoorContext));

parentDoorGraphics.x = 110;
parentDoorGraphics.y = 410;

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

// Pillar
const PillarGraphics = new PIXI.Graphics();
const PillarContext = {
	width: 80,
	height: 80,
	scale: 10
};

app.stage.addChild(WM.Stuff.Pillar(PillarGraphics, PillarContext));

PillarGraphics.x = 1310;
PillarGraphics.y = 510;

// LWindow
const LWindowGraphicsA = new PIXI.Graphics();
const LWindowContextA = {
	leftWidth: 150,
	rightWidth: 150,
	leftWallThickness: 20,
	rightWallThickness: 20,
	scale: 10
};

app.stage.addChild(WM.Window.LWindow(LWindowGraphicsA, LWindowContextA));

LWindowGraphicsA.x = 30;
LWindowGraphicsA.y = 470;

const LWindowGraphicsB = new PIXI.Graphics();
const LWindowContextB = {
	main: [[0,0], [100,0], [100,100]],
	cross: [25, 25],
	scale: 10
};

app.stage.addChild(WM.Window.LPathWindow(LWindowGraphicsB, LWindowContextB));

LWindowGraphicsB.x = 30;
LWindowGraphicsB.y = 670;

// UWindow
const UWindowGraphicsA = new PIXI.Graphics();
const UWindowContextA = {
	leftWidth: 100,
	centerWidtn: 180,
	rightWidth: 100,
	leftWallThickness: 20,
	centerWallThickness: 20,
	rightWallThickness: 20,
	scale: 10
};

app.stage.addChild(WM.Window.UWindow(UWindowGraphicsA, UWindowContextA));

UWindowGraphicsA.x = 300;
UWindowGraphicsA.y = 470;

const UWindowGraphicsB = new PIXI.Graphics();
const UWindowContextB = {
	main: [[0,0], [100,0], [100,100], [0,100]],
	cross: [25, 25, 25],
	scale: 10
};

app.stage.addChild(WM.Window.UPathWindow(UWindowGraphicsB, UWindowContextB));

UWindowGraphicsB.x = 300;
UWindowGraphicsB.y = 670;

//ArcWindow
const ArcWindowGraphics = new PIXI.Graphics();
const ArcWindowContex = {
	main: [[0,0], [50,0], [100,50], [50,100], [0,100]],
	cross: [25, 25, 25, 25],
	scale: 10
};

app.stage.addChild(WM.Window.ArcWindow(ArcWindowGraphics, ArcWindowContex));

ArcWindowGraphics.x = 300;
ArcWindowGraphics.y = 820;

// LBoilerWindow
const LBoilerWindowGraphicsA = new PIXI.Graphics();
const LBoilerWindowContextA = {
	leftWidth: 100,
	rightWidth: 100,
	leftWindowThickness: 50,
	rightWindowThickness: 50,
	leftWallThickness: 20,
	rightWallThickness: 20,
	scale: 10
};

app.stage.addChild(WM.Window.LBoilerWindow(LBoilerWindowGraphicsA, LBoilerWindowContextA));

LBoilerWindowGraphicsA.x = 550;
LBoilerWindowGraphicsA.y = 500;

const LBoilerWindowGraphicsB = new PIXI.Graphics();
const LBoilerWindowContextB = {
	leftWidth: 100,
	rightWidth: 100,
	leftWindowThickness: 50,
	rightWindowThickness: 40,
	leftWallThickness: 20,
	rightWallThickness: 30,
	scale: 10
};

app.stage.addChild(WM.Window.LBoilerWindow(LBoilerWindowGraphicsB, LBoilerWindowContextB));

LBoilerWindowGraphicsB.x = 550;
LBoilerWindowGraphicsB.y = 700;

//LPathBoilerWindow
const LPathBoilerWindowGraphicsA = new PIXI.Graphics();
const LPathBoilerWindowContextA = {
	// main: [[140, 70], [100,70], [100,120]],
	main: [[100, 130], [100,70], [150,70]],
	// main: [[140, 0], [0,0], [0,140]],
	// main: [[0, 140], [0,0], [140,0]],
	cross: [20, 20],
	// sillThickness: [50, 20],
	sillThicknessList: [20, 20],
	windowThickness: 20,
	scale: 10
};

app.stage.addChild(WM.Window.LPathBoilerWindow(LPathBoilerWindowGraphicsA, LPathBoilerWindowContextA));

LPathBoilerWindowGraphicsA.x = 430;
LPathBoilerWindowGraphicsA.y = 820;

const LPathBoilerWindowGraphicsB = new PIXI.Graphics();
const LPathBoilerWindowContextB = {
	main: [[30,70], [130,70]],
	cross: [20],
	sillThicknessList: [20],
	windowThickness: 20,
	scale: 10
};

app.stage.addChild(WM.Window.LPathBoilerWindow(LPathBoilerWindowGraphicsB, LPathBoilerWindowContextB));

LPathBoilerWindowGraphicsB.x = 600;
LPathBoilerWindowGraphicsB.y = 850;

const LPathBoilerWindowGraphicsC = new PIXI.Graphics();
const LPathBoilerWindowContextC = {
	main: [[55,-40], [55,-75], [115,-75], [115,-40]],
	cross: [10,10,10],
	sillThicknessList: [10,20,10],
	windowThickness: 20,
	scale: 10
};

app.stage.addChild(WM.Window.UPathBoilerWindow(LPathBoilerWindowGraphicsC, LPathBoilerWindowContextC));

LPathBoilerWindowGraphicsC.x = 800;
LPathBoilerWindowGraphicsC.y = 980;
// UBoilerWindow
const UBoilerWindowGraphicsA = new PIXI.Graphics();
const UBoilerWindowContextA = {
	leftWidth: 100,
	centerWidtn: 150,
	rightWidth: 100,
	leftWindowThinkness: 50,
	centerWindowThinkness: 50,
	rightWindowThinkness: 50,
	leftWallThickness: 20,
	centerWallThickness: 20,
	rightWallThickness: 20,
	scale: 10
};

app.stage.addChild(WM.Window.UBoilerWindow(UBoilerWindowGraphicsA, UBoilerWindowContextA));

UBoilerWindowGraphicsA.x = 800;
UBoilerWindowGraphicsA.y = 500;

const UBoilerWindowGraphicsB = new PIXI.Graphics();
const UBoilerWindowContextB = {
	leftWidth: 100,
	centerWidtn: 150,
	rightWidth: 100,
	leftWindowThinkness: 50,
	centerWindowThinkness: 50,
	rightWindowThinkness: 60,
	leftWallThickness: 20,
	centerWallThickness: 30,
	rightWallThickness: 10,
	scale: 10
};

app.stage.addChild(WM.Window.UBoilerWindow(UBoilerWindowGraphicsB, UBoilerWindowContextB));

UBoilerWindowGraphicsB.x = 800;
UBoilerWindowGraphicsB.y = 700;