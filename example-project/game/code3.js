gdjs.Game_32overCode = {};
gdjs.Game_32overCode.localVariables = [];
gdjs.Game_32overCode.GDNewTextObjects1= [];
gdjs.Game_32overCode.GDNewTextObjects2= [];
gdjs.Game_32overCode.GDDesertBackgroundObjects1= [];
gdjs.Game_32overCode.GDDesertBackgroundObjects2= [];
gdjs.Game_32overCode.GDWhiteSquareDecoratedButtonObjects1= [];
gdjs.Game_32overCode.GDWhiteSquareDecoratedButtonObjects2= [];
gdjs.Game_32overCode.GDCat2Objects1= [];
gdjs.Game_32overCode.GDCat2Objects2= [];
gdjs.Game_32overCode.GDSwordObjects1= [];
gdjs.Game_32overCode.GDSwordObjects2= [];
gdjs.Game_32overCode.GDGoldCoinObjects1= [];
gdjs.Game_32overCode.GDGoldCoinObjects2= [];
gdjs.Game_32overCode.GDGrassForegroundObjects1= [];
gdjs.Game_32overCode.GDGrassForegroundObjects2= [];
gdjs.Game_32overCode.GDDirtObjects1= [];
gdjs.Game_32overCode.GDDirtObjects2= [];
gdjs.Game_32overCode.GDDoorObjects1= [];
gdjs.Game_32overCode.GDDoorObjects2= [];
gdjs.Game_32overCode.GDCopperRedBarObjects1= [];
gdjs.Game_32overCode.GDCopperRedBarObjects2= [];
gdjs.Game_32overCode.GDBrownTroutObjects1= [];
gdjs.Game_32overCode.GDBrownTroutObjects2= [];
gdjs.Game_32overCode.GDScoreObjects1= [];
gdjs.Game_32overCode.GDScoreObjects2= [];
gdjs.Game_32overCode.GDDesertBackgroundObjects1= [];
gdjs.Game_32overCode.GDDesertBackgroundObjects2= [];


gdjs.Game_32overCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("WhiteSquareDecoratedButton"), gdjs.Game_32overCode.GDWhiteSquareDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32overCode.GDWhiteSquareDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.Game_32overCode.GDWhiteSquareDecoratedButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32overCode.GDWhiteSquareDecoratedButtonObjects1[k] = gdjs.Game_32overCode.GDWhiteSquareDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.Game_32overCode.GDWhiteSquareDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start game", false);
}}

}


};

gdjs.Game_32overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32overCode.GDNewTextObjects1.length = 0;
gdjs.Game_32overCode.GDNewTextObjects2.length = 0;
gdjs.Game_32overCode.GDDesertBackgroundObjects1.length = 0;
gdjs.Game_32overCode.GDDesertBackgroundObjects2.length = 0;
gdjs.Game_32overCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.Game_32overCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.Game_32overCode.GDCat2Objects1.length = 0;
gdjs.Game_32overCode.GDCat2Objects2.length = 0;
gdjs.Game_32overCode.GDSwordObjects1.length = 0;
gdjs.Game_32overCode.GDSwordObjects2.length = 0;
gdjs.Game_32overCode.GDGoldCoinObjects1.length = 0;
gdjs.Game_32overCode.GDGoldCoinObjects2.length = 0;
gdjs.Game_32overCode.GDGrassForegroundObjects1.length = 0;
gdjs.Game_32overCode.GDGrassForegroundObjects2.length = 0;
gdjs.Game_32overCode.GDDirtObjects1.length = 0;
gdjs.Game_32overCode.GDDirtObjects2.length = 0;
gdjs.Game_32overCode.GDDoorObjects1.length = 0;
gdjs.Game_32overCode.GDDoorObjects2.length = 0;
gdjs.Game_32overCode.GDCopperRedBarObjects1.length = 0;
gdjs.Game_32overCode.GDCopperRedBarObjects2.length = 0;
gdjs.Game_32overCode.GDBrownTroutObjects1.length = 0;
gdjs.Game_32overCode.GDBrownTroutObjects2.length = 0;
gdjs.Game_32overCode.GDScoreObjects1.length = 0;
gdjs.Game_32overCode.GDScoreObjects2.length = 0;
gdjs.Game_32overCode.GDDesertBackgroundObjects1.length = 0;
gdjs.Game_32overCode.GDDesertBackgroundObjects2.length = 0;

gdjs.Game_32overCode.eventsList0(runtimeScene);
gdjs.Game_32overCode.GDNewTextObjects1.length = 0;
gdjs.Game_32overCode.GDNewTextObjects2.length = 0;
gdjs.Game_32overCode.GDDesertBackgroundObjects1.length = 0;
gdjs.Game_32overCode.GDDesertBackgroundObjects2.length = 0;
gdjs.Game_32overCode.GDWhiteSquareDecoratedButtonObjects1.length = 0;
gdjs.Game_32overCode.GDWhiteSquareDecoratedButtonObjects2.length = 0;
gdjs.Game_32overCode.GDCat2Objects1.length = 0;
gdjs.Game_32overCode.GDCat2Objects2.length = 0;
gdjs.Game_32overCode.GDSwordObjects1.length = 0;
gdjs.Game_32overCode.GDSwordObjects2.length = 0;
gdjs.Game_32overCode.GDGoldCoinObjects1.length = 0;
gdjs.Game_32overCode.GDGoldCoinObjects2.length = 0;
gdjs.Game_32overCode.GDGrassForegroundObjects1.length = 0;
gdjs.Game_32overCode.GDGrassForegroundObjects2.length = 0;
gdjs.Game_32overCode.GDDirtObjects1.length = 0;
gdjs.Game_32overCode.GDDirtObjects2.length = 0;
gdjs.Game_32overCode.GDDoorObjects1.length = 0;
gdjs.Game_32overCode.GDDoorObjects2.length = 0;
gdjs.Game_32overCode.GDCopperRedBarObjects1.length = 0;
gdjs.Game_32overCode.GDCopperRedBarObjects2.length = 0;
gdjs.Game_32overCode.GDBrownTroutObjects1.length = 0;
gdjs.Game_32overCode.GDBrownTroutObjects2.length = 0;
gdjs.Game_32overCode.GDScoreObjects1.length = 0;
gdjs.Game_32overCode.GDScoreObjects2.length = 0;
gdjs.Game_32overCode.GDDesertBackgroundObjects1.length = 0;
gdjs.Game_32overCode.GDDesertBackgroundObjects2.length = 0;


return;

}

gdjs['Game_32overCode'] = gdjs.Game_32overCode;
