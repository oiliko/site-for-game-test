gdjs.Level_322Code = {};
gdjs.Level_322Code.localVariables = [];
gdjs.Level_322Code.GDSandObjects1= [];
gdjs.Level_322Code.GDSandObjects2= [];
gdjs.Level_322Code.GDCat2Objects1= [];
gdjs.Level_322Code.GDCat2Objects2= [];
gdjs.Level_322Code.GDSwordObjects1= [];
gdjs.Level_322Code.GDSwordObjects2= [];
gdjs.Level_322Code.GDGoldCoinObjects1= [];
gdjs.Level_322Code.GDGoldCoinObjects2= [];
gdjs.Level_322Code.GDGrassForegroundObjects1= [];
gdjs.Level_322Code.GDGrassForegroundObjects2= [];
gdjs.Level_322Code.GDDirtObjects1= [];
gdjs.Level_322Code.GDDirtObjects2= [];
gdjs.Level_322Code.GDDoorObjects1= [];
gdjs.Level_322Code.GDDoorObjects2= [];
gdjs.Level_322Code.GDCopperRedBarObjects1= [];
gdjs.Level_322Code.GDCopperRedBarObjects2= [];
gdjs.Level_322Code.GDBrownTroutObjects1= [];
gdjs.Level_322Code.GDBrownTroutObjects2= [];
gdjs.Level_322Code.GDScoreObjects1= [];
gdjs.Level_322Code.GDScoreObjects2= [];
gdjs.Level_322Code.GDDesertBackgroundObjects1= [];
gdjs.Level_322Code.GDDesertBackgroundObjects2= [];


gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDCat2Objects1Objects = Hashtable.newFrom({"Cat2": gdjs.Level_322Code.GDCat2Objects1});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDGoldCoinObjects1Objects = Hashtable.newFrom({"GoldCoin": gdjs.Level_322Code.GDGoldCoinObjects1});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDCat2Objects1Objects = Hashtable.newFrom({"Cat2": gdjs.Level_322Code.GDCat2Objects1});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDSwordObjects1Objects = Hashtable.newFrom({"Sword": gdjs.Level_322Code.GDSwordObjects1});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDCat2Objects1Objects = Hashtable.newFrom({"Cat2": gdjs.Level_322Code.GDCat2Objects1});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDDirtObjects1Objects = Hashtable.newFrom({"Dirt": gdjs.Level_322Code.GDDirtObjects1});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDCat2Objects1Objects = Hashtable.newFrom({"Cat2": gdjs.Level_322Code.GDCat2Objects1});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Level_322Code.GDDoorObjects1});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDCat2Objects1Objects = Hashtable.newFrom({"Cat2": gdjs.Level_322Code.GDCat2Objects1});
gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDBrownTroutObjects1Objects = Hashtable.newFrom({"BrownTrout": gdjs.Level_322Code.GDBrownTroutObjects1});
gdjs.Level_322Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Cat2"), gdjs.Level_322Code.GDCat2Objects1);
gdjs.copyArray(runtimeScene.getObjects("GoldCoin"), gdjs.Level_322Code.GDGoldCoinObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDCat2Objects1Objects, gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDGoldCoinObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_322Code.GDGoldCoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Level_322Code.GDScoreObjects1);
{for(var i = 0, len = gdjs.Level_322Code.GDGoldCoinObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDGoldCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Coins 8.aac", false, 100, 1);
}{for(var i = 0, len = gdjs.Level_322Code.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDScoreObjects1[i].returnVariable(gdjs.Level_322Code.GDScoreObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDScoreObjects1[i].getBehavior("Text").setText("Score: " + gdjs.Level_322Code.GDScoreObjects1[i].getVariables().getFromIndex(0).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cat2"), gdjs.Level_322Code.GDCat2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Sword"), gdjs.Level_322Code.GDSwordObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDCat2Objects1Objects, gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDSwordObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.Level_322Code.GDCopperRedBarObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "Lose effect.aac", false, 100, 1);
}{for(var i = 0, len = gdjs.Level_322Code.GDCopperRedBarObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDCopperRedBarObjects1[i].SetValue(gdjs.Level_322Code.GDCopperRedBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) - (1), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cat2"), gdjs.Level_322Code.GDCat2Objects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Level_322Code.GDCat2Objects1.length !== 0 ? gdjs.Level_322Code.GDCat2Objects1[0] : null), true, "", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cat2"), gdjs.Level_322Code.GDCat2Objects1);
{for(var i = 0, len = gdjs.Level_322Code.GDCat2Objects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDCat2Objects1[i].getBehavior("Flippable").flipX(true);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDCat2Objects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDCat2Objects1[i].getBehavior("Animation").setAnimationName("Run");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cat2"), gdjs.Level_322Code.GDCat2Objects1);
{for(var i = 0, len = gdjs.Level_322Code.GDCat2Objects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDCat2Objects1[i].getBehavior("Flippable").flipX(false);
}
}{for(var i = 0, len = gdjs.Level_322Code.GDCat2Objects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDCat2Objects1[i].getBehavior("Animation").setAnimationName("Run");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cat2"), gdjs.Level_322Code.GDCat2Objects1);
{for(var i = 0, len = gdjs.Level_322Code.GDCat2Objects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDCat2Objects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cat2"), gdjs.Level_322Code.GDCat2Objects1);
{for(var i = 0, len = gdjs.Level_322Code.GDCat2Objects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDCat2Objects1[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cat2"), gdjs.Level_322Code.GDCat2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dirt"), gdjs.Level_322Code.GDDirtObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDCat2Objects1Objects, gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDDirtObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_322Code.GDCat2Objects1 */
{for(var i = 0, len = gdjs.Level_322Code.GDCat2Objects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDCat2Objects1[i].setPosition(30,556);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Lose effect.aac", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cat2"), gdjs.Level_322Code.GDCat2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Level_322Code.GDDoorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDCat2Objects1Objects, gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDDoorObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game over", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cat2"), gdjs.Level_322Code.GDCat2Objects1);
{for(var i = 0, len = gdjs.Level_322Code.GDCat2Objects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDCat2Objects1[i].getBehavior("Animation").setAnimationName("Itch");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.Level_322Code.GDCopperRedBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_322Code.GDCopperRedBarObjects1.length;i<l;++i) {
    if ( gdjs.Level_322Code.GDCopperRedBarObjects1[i].IsEmpty((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level_322Code.GDCopperRedBarObjects1[k] = gdjs.Level_322Code.GDCopperRedBarObjects1[i];
        ++k;
    }
}
gdjs.Level_322Code.GDCopperRedBarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game over", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BrownTrout"), gdjs.Level_322Code.GDBrownTroutObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cat2"), gdjs.Level_322Code.GDCat2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDCat2Objects1Objects, gdjs.Level_322Code.mapOfGDgdjs_9546Level_9595322Code_9546GDBrownTroutObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_322Code.GDBrownTroutObjects1 */
gdjs.copyArray(runtimeScene.getObjects("CopperRedBar"), gdjs.Level_322Code.GDCopperRedBarObjects1);
{for(var i = 0, len = gdjs.Level_322Code.GDCopperRedBarObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDCopperRedBarObjects1[i].SetValue(gdjs.Level_322Code.GDCopperRedBarObjects1[i].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + (10), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_322Code.GDBrownTroutObjects1.length ;i < len;++i) {
    gdjs.Level_322Code.GDBrownTroutObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cat2"), gdjs.Level_322Code.GDCat2Objects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Level_322Code.GDCat2Objects1.length !== 0 ? gdjs.Level_322Code.GDCat2Objects1[0] : null), true, "", 0);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Level_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_322Code.GDSandObjects1.length = 0;
gdjs.Level_322Code.GDSandObjects2.length = 0;
gdjs.Level_322Code.GDCat2Objects1.length = 0;
gdjs.Level_322Code.GDCat2Objects2.length = 0;
gdjs.Level_322Code.GDSwordObjects1.length = 0;
gdjs.Level_322Code.GDSwordObjects2.length = 0;
gdjs.Level_322Code.GDGoldCoinObjects1.length = 0;
gdjs.Level_322Code.GDGoldCoinObjects2.length = 0;
gdjs.Level_322Code.GDGrassForegroundObjects1.length = 0;
gdjs.Level_322Code.GDGrassForegroundObjects2.length = 0;
gdjs.Level_322Code.GDDirtObjects1.length = 0;
gdjs.Level_322Code.GDDirtObjects2.length = 0;
gdjs.Level_322Code.GDDoorObjects1.length = 0;
gdjs.Level_322Code.GDDoorObjects2.length = 0;
gdjs.Level_322Code.GDCopperRedBarObjects1.length = 0;
gdjs.Level_322Code.GDCopperRedBarObjects2.length = 0;
gdjs.Level_322Code.GDBrownTroutObjects1.length = 0;
gdjs.Level_322Code.GDBrownTroutObjects2.length = 0;
gdjs.Level_322Code.GDScoreObjects1.length = 0;
gdjs.Level_322Code.GDScoreObjects2.length = 0;
gdjs.Level_322Code.GDDesertBackgroundObjects1.length = 0;
gdjs.Level_322Code.GDDesertBackgroundObjects2.length = 0;

gdjs.Level_322Code.eventsList0(runtimeScene);
gdjs.Level_322Code.GDSandObjects1.length = 0;
gdjs.Level_322Code.GDSandObjects2.length = 0;
gdjs.Level_322Code.GDCat2Objects1.length = 0;
gdjs.Level_322Code.GDCat2Objects2.length = 0;
gdjs.Level_322Code.GDSwordObjects1.length = 0;
gdjs.Level_322Code.GDSwordObjects2.length = 0;
gdjs.Level_322Code.GDGoldCoinObjects1.length = 0;
gdjs.Level_322Code.GDGoldCoinObjects2.length = 0;
gdjs.Level_322Code.GDGrassForegroundObjects1.length = 0;
gdjs.Level_322Code.GDGrassForegroundObjects2.length = 0;
gdjs.Level_322Code.GDDirtObjects1.length = 0;
gdjs.Level_322Code.GDDirtObjects2.length = 0;
gdjs.Level_322Code.GDDoorObjects1.length = 0;
gdjs.Level_322Code.GDDoorObjects2.length = 0;
gdjs.Level_322Code.GDCopperRedBarObjects1.length = 0;
gdjs.Level_322Code.GDCopperRedBarObjects2.length = 0;
gdjs.Level_322Code.GDBrownTroutObjects1.length = 0;
gdjs.Level_322Code.GDBrownTroutObjects2.length = 0;
gdjs.Level_322Code.GDScoreObjects1.length = 0;
gdjs.Level_322Code.GDScoreObjects2.length = 0;
gdjs.Level_322Code.GDDesertBackgroundObjects1.length = 0;
gdjs.Level_322Code.GDDesertBackgroundObjects2.length = 0;


return;

}

gdjs['Level_322Code'] = gdjs.Level_322Code;
