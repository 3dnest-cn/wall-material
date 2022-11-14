import * as PIXI from 'pixi.js';
import * as WM from '@3dnest/wall-material-e100';

const app = new PIXI.Application({
	width: 1500,
	height: 1000,
	// backgroundColor: 0xeef0f1,
	backgroundColor: 0x87CEFA,
	antialias: true
});

document.body.appendChild(app.view);

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

// parentDoor
const parentDoorGraphicsA = new PIXI.Graphics();
const parentDoorContextA = {
	width: 300,
	height: 30,
	fliped: true,
	scale: 10
};

app.stage.addChild(WM.Door.ParentDoor(parentDoorGraphicsA, parentDoorContextA));

parentDoorGraphicsA.x = 1200;
parentDoorGraphicsA.y = 200;

const parentDoorGraphicsB = new PIXI.Graphics();
const parentDoorContextB = {
	width: 300,
	height: 30,
	fliped: false,
	scale: 10
};

app.stage.addChild(WM.Door.ParentDoor(parentDoorGraphicsB, parentDoorContextB));

parentDoorGraphicsB.x = 1200;
parentDoorGraphicsB.y = 400;
// liftdoor
const liftDoorGraphics = new PIXI.Graphics();
const liftDoorContext = {
	width: 200,
	height: 30,
	scale: 10
};

app.stage.addChild(WM.Door.LiftDoor(liftDoorGraphics, liftDoorContext));

liftDoorGraphics.x = 1200;
liftDoorGraphics.y = 500;

// foldingdoor
const foldingDoorGraphics = new PIXI.Graphics();
const foldingDoorContext = {
	width: 150,
	height: 30,
	scale: 10
};

app.stage.addChild(WM.Door.FoldingDoor(foldingDoorGraphics, foldingDoorContext));

foldingDoorGraphics.x = 1200;
foldingDoorGraphics.y = 600;

// bealock
const bealockGraphics = new PIXI.Graphics();
const bealockContext = {
	width: 75,
	height: 15,
	scale: 20
};

app.stage.addChild(WM.Door.Bealock(bealockGraphics, bealockContext));

bealockGraphics.x = 900;
bealockGraphics.y = 200;

// window
const windowGraphics = new PIXI.Graphics();
const windowContext = {
	width: 150,
	height: 40,
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
	windowThickness: 50,
	scale: 10
};

app.stage.addChild(WM.Window.BoilerWindow(boilerWindowGraphicsA, boilerWindowContextA));

boilerWindowGraphicsA.x = 335;
boilerWindowGraphicsA.y = 350;

const boilerWindowGraphicsB = new PIXI.Graphics();
const boilerWindowContextB = {
	width: 300,
	height: 15,
	windowThickness: 50,
	scale: 10
};

app.stage.addChild(WM.Window.BoilerWindow(boilerWindowGraphicsB, boilerWindowContextB));

boilerWindowGraphicsB.x = 585;
boilerWindowGraphicsB.y = 350;

const boilerWindowGraphicsC = new PIXI.Graphics();
const boilerWindowContextC = {
	width: 200,
	height: 20,
	windowThickness: 100,
	scale: 10
};

app.stage.addChild(WM.Window.BoilerWindow(boilerWindowGraphicsC, boilerWindowContextC));

boilerWindowGraphicsC.x = 855;
boilerWindowGraphicsC.y = 350;

// floorWindow
const floorWindowGraphics = new PIXI.Graphics();
const floorWindowContext = {
	width: 200,
	height: 30,
	scale: 10
};

app.stage.addChild(WM.Window.FloorWindow(floorWindowGraphics, floorWindowContext));

floorWindowGraphics.x = 110;
floorWindowGraphics.y = 400;

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

LWindowGraphicsA.x = 100;
LWindowGraphicsA.y = 470;

const LWindowGraphicsB = new PIXI.Graphics();
const LWindowContextB = {
	leftWidth: 150,
	rightWidth: 150,
	leftWallThickness: 20,
	rightWallThickness: 30,
	scale: 10
};

app.stage.addChild(WM.Window.LWindow(LWindowGraphicsB, LWindowContextB));

LWindowGraphicsB.x = 100;
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
	height:20,
	scale: 10
};

app.stage.addChild(WM.Window.UWindow(UWindowGraphicsA, UWindowContextA));

UWindowGraphicsA.x = 300;
UWindowGraphicsA.y = 580;

const UWindowGraphicsB = new PIXI.Graphics();
const UWindowContextB = {
	leftWidth: 100,
	centerWidtn: 180,
	rightWidth: 100,
	leftWallThickness: 20,
	centerWallThickness: 25,
	rightWallThickness: 20,
	scale: 10
};

app.stage.addChild(WM.Window.UWindow(UWindowGraphicsB, UWindowContextB));

UWindowGraphicsB.x = 300;
UWindowGraphicsB.y = 750;

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

//doorwindow

const DoorWindowGraphicsA = new PIXI.Graphics();
const DoorWindowContextA = {
	width: 150,
	height: 15,
	fliped: false,
	scale: 10
};

app.stage.addChild(WM.Window.DoorWindow(DoorWindowGraphicsA, DoorWindowContextA));

DoorWindowGraphicsA.x = 100;
DoorWindowGraphicsA.y = 950;


const DoorWindowGraphicsB = new PIXI.Graphics();
const DoorWindowContextB = {
	width: 150,
	height: 15,
	fliped: true,
	scale: 10
};

app.stage.addChild(WM.Window.DoorWindow(DoorWindowGraphicsB, DoorWindowContextB));

DoorWindowGraphicsB.x = 300;
DoorWindowGraphicsB.y = 950;