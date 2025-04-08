gdjs.Start_32gameCode = {};
gdjs.Start_32gameCode.localVariables = [];
gdjs.Start_32gameCode.GDBackgroundBlueDesertObjects1= [];
gdjs.Start_32gameCode.GDBackgroundBlueDesertObjects2= [];
gdjs.Start_32gameCode.GDNewTextObjects1= [];
gdjs.Start_32gameCode.GDNewTextObjects2= [];
gdjs.Start_32gameCode.GDWhiteSquareDecoratedButtonObjects1= [];
gdjs.Start_32gameCode.GDWhiteSquareDecoratedButtonObjects2= [];
gdjs.Start_32gameCode.GDCat2Objects1= [];
gdjs.Start_32gameCode.GDCat2Objects2= [];
gdjs.Start_32gameCode.GDSwordObjects1= [];
gdjs.Start_32gameCode.GDSwordObjects2= [];
gdjs.Start_32gameCode.GDGoldCoinObjects1= [];
gdjs.Start_32gameCode.GDGoldCoinObjects2= [];
gdjs.Start_32gameCode.GDGrassForegroundObjects1= [];
gdjs.Start_32gameCode.GDGrassForegroundObjects2= [];
gdjs.Start_32gameCode.GDDirtObjects1= [];
gdjs.Start_32gameCode.GDDirtObjects2= [];
gdjs.Start_32gameCode.GDDoorObjects1= [];
gdjs.Start_32gameCode.GDDoorObjects2= [];
gdjs.Start_32gameCode.GDCopperRedBarObjects1= [];
gdjs.Start_32gameCode.GDCopperRedBarObjects2= [];
gdjs.Start_32gameCode.GDBrownTroutObjects1= [];
gdjs.Start_32gameCode.GDBrownTroutObjects2= [];
gdjs.Start_32gameCode.GDScoreObjects1= [];
gdjs.Start_32gameCode.GDScoreObjects2= [];
gdjs.Start_32gameCode.GDDesertBackgroundObjects1= [];
gdjs.Start_32gameCode.GDDesertBackgroundObjects2= [];


gdjs.Start_32gameCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton"), gdjs.Start_32gameCode.GDWhiteSquareDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_32gameCode.GDWhiteSquareDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.Start_32gameCode.GDWhiteSquareDecoratedButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Start_32gameCode.GDWhiteSquareDecoratedButtonObjects1[k] = gdjs.Start_32gameCode.GDWhiteSquareDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.Start_32gameCode.GDWhiteSquareDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}}

}


};

gdjs.Start_32gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32gameCode.GDBackgroundBlueDesertObjects1.length = 0;
gdjs.Start_32gameCode.GDBackgroundBlueDesertObjects2.length = 0;
gdjs.Start_32gameCode.GDNewTextObjects1.length = 0;
gdjs.Start_32gameCode.GDNewTextObjects2.length = 0;
gdjs.Start_32gameCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.Start_32gameCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.Start_32gameCode.GDCat2Objects1.length = 0;
gdjs.Start_32gameCode.GDCat2Objects2.length = 0;
gdjs.Start_32gameCode.GDSwordObjects1.length = 0;
gdjs.Start_32gameCode.GDSwordObjects2.length = 0;
gdjs.Start_32gameCode.GDGoldCoinObjects1.length = 0;
gdjs.Start_32gameCode.GDGoldCoinObjects2.length = 0;
gdjs.Start_32gameCode.GDGrassForegroundObjects1.length = 0;
gdjs.Start_32gameCode.GDGrassForegroundObjects2.length = 0;
gdjs.Start_32gameCode.GDDirtObjects1.length = 0;
gdjs.Start_32gameCode.GDDirtObjects2.length = 0;
gdjs.Start_32gameCode.GDDoorObjects1.length = 0;
gdjs.Start_32gameCode.GDDoorObjects2.length = 0;
gdjs.Start_32gameCode.GDCopperRedBarObjects1.length = 0;
gdjs.Start_32gameCode.GDCopperRedBarObjects2.length = 0;
gdjs.Start_32gameCode.GDBrownTroutObjects1.length = 0;
gdjs.Start_32gameCode.GDBrownTroutObjects2.length = 0;
gdjs.Start_32gameCode.GDScoreObjects1.length = 0;
gdjs.Start_32gameCode.GDScoreObjects2.length = 0;
gdjs.Start_32gameCode.GDDesertBackgroundObjects1.length = 0;
gdjs.Start_32gameCode.GDDesertBackgroundObjects2.length = 0;

gdjs.Start_32gameCode.eventsList0(runtimeScene);
gdjs.Start_32gameCode.GDBackgroundBlueDesertObjects1.length = 0;
gdjs.Start_32gameCode.GDBackgroundBlueDesertObjects2.length = 0;
gdjs.Start_32gameCode.GDNewTextObjects1.length = 0;
gdjs.Start_32gameCode.GDNewTextObjects2.length = 0;
gdjs.Start_32gameCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.Start_32gameCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.Start_32gameCode.GDCat2Objects1.length = 0;
gdjs.Start_32gameCode.GDCat2Objects2.length = 0;
gdjs.Start_32gameCode.GDSwordObjects1.length = 0;
gdjs.Start_32gameCode.GDSwordObjects2.length = 0;
gdjs.Start_32gameCode.GDGoldCoinObjects1.length = 0;
gdjs.Start_32gameCode.GDGoldCoinObjects2.length = 0;
gdjs.Start_32gameCode.GDGrassForegroundObjects1.length = 0;
gdjs.Start_32gameCode.GDGrassForegroundObjects2.length = 0;
gdjs.Start_32gameCode.GDDirtObjects1.length = 0;
gdjs.Start_32gameCode.GDDirtObjects2.length = 0;
gdjs.Start_32gameCode.GDDoorObjects1.length = 0;
gdjs.Start_32gameCode.GDDoorObjects2.length = 0;
gdjs.Start_32gameCode.GDCopperRedBarObjects1.length = 0;
gdjs.Start_32gameCode.GDCopperRedBarObjects2.length = 0;
gdjs.Start_32gameCode.GDBrownTroutObjects1.length = 0;
gdjs.Start_32gameCode.GDBrownTroutObjects2.length = 0;
gdjs.Start_32gameCode.GDScoreObjects1.length = 0;
gdjs.Start_32gameCode.GDScoreObjects2.length = 0;
gdjs.Start_32gameCode.GDDesertBackgroundObjects1.length = 0;
gdjs.Start_32gameCode.GDDesertBackgroundObjects2.length = 0;


return;

}

gdjs['Start_32gameCode'] = gdjs.Start_32gameCode;
