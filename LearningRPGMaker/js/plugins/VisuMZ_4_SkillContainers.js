//=============================================================================
// VisuStella MZ - Skill Containers
// VisuMZ_4_SkillContainers.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_SkillContainers = true;

var VisuMZ = VisuMZ || {};
VisuMZ.SkillContainers = VisuMZ.SkillContainers || {};
VisuMZ.SkillContainers.version = 1.05;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.05] [SkillContainers]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Skill_Containers_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Skill Containers let you transform skills in-game to contain an inner list
 * of skills, accessible to players. These container skills will draw from a
 * list of skills that either require the player to already have them or allow
 * them to even use skills they don't normally have access to.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Skill Containers let you condense skills to become containers for lists of
 *   other skills accessible to the player.
 * * Reduce the size of a skill library by grouping them together.
 * * Skill Containers can contain skills that require the actor to already know
 *   them (either through learning or traits) or forcefully allow them to be
 *   accessible regardless.
 * * These container skills don't appear unless the container itself has access
 *   to at least one skill.
 * * These container skills are usable from the skill menu or in-battle!
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 4 ------
 *
 * This plugin is a Tier 4 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 * 
 * === Skill Container-Related Notetags ===
 * 
 * ---
 *
 * <Known Skill List: id>
 * <Known Skills List: id, id, id>
 *
 * <Known Skill List: name>
 * <Known Skills List: name, name, name>
 * 
 * <Known Skills List: id To id>
 *
 * - Used for: Skill Notetags
 * - Turns the skill into a skill container, accessible to actors and players.
 * - Replace 'id' with a number representing the ID of the skill you wish to
 *   add to the skill container.
 * - Replace 'name' with the name of the skill you wish to add to the
 *   skill container.
 * - Use the 'id To id' version to get a range of skills to add to the list.
 *   - This will ignore any skills with no names or have ----- in their name.
 * - These skills require the actor to have learned the skill or to have access
 *   to the skill 
 * - Insert multiple copies of the notetag to add more.
 * - Skill Containers cannot be used as Single Skill Commands for the VisuMZ
 *   Battle Core's Actor Command Window (just use a Skill Type instead).
 * - Skill Containers can be stacked inside one another.
 * - If you do not want known skills that should be in the Skill Container to
 *   be displayed in other skill menus, you will need to change those skills
 *   to have either a different Skill Type or "None" as the Skill Type.
 * 
 *   Examples:
 * 
 *   <Known Skills List: 51, 52, 53>
 *   <Known Skills List: Heal I, Heal II, Heal III>
 *   <Known Skills List: 51 To 53>
 *
 * ---
 *
 * <Force Skill List: id>
 * <Force Skills List: id, id, id>
 *
 * <Force Skill List: name>
 * <Force Skills List: name, name, name>
 * 
 * <Force Skills List: id To id>
 *
 * - Used for: Skill Notetags
 * - Turns the skill into a skill container, accessible to actors and players.
 * - Replace 'id' with a number representing the ID of the skill you wish to
 *   add to the skill container.
 * - Replace 'name' with the name of the skill you wish to add to the
 *   skill container.
 * - Use the 'id To id' version to get a range of skills to add to the list.
 *   - This will ignore any skills with no names or have ----- in their name.
 * - These skills do NOT require the actor to have learned the skill. These
 *   listed skills will always be accessible.
 * - Insert multiple copies of the notetag to add more.
 * - Skill Containers cannot be used as Single Skill Commands for the VisuMZ
 *   Battle Core's Actor Command Window (just use a Skill Type instead).
 * - Skill Containers can be stacked inside one another.
 * - If you do not want known skills that should be in the Skill Container to
 *   be displayed in other skill menus, you will need to change those skills
 *   to have either a different Skill Type or "None" as the Skill Type.
 * 
 *   Examples:
 * 
 *   <Force Skills List: 51, 52, 53>
 *   <Force Skills List: Heal I, Heal II, Heal III>
 *   <Force Skills List: 51 To 53>
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * The Plugin Parameters allow you to adjust how the text for Skill Containers
 * appear in-game. This way, you can help your players differentiate them from
 * regular skills.
 *
 * ---
 *
 * General
 * 
 *   Skill Container Text:
 *   - Determines the text that appears where the skill costs normally would
 *     appear instead.
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 * 
 * 7. If this VisuStella MZ plugin is a paid product, all project team members
 * must purchase their own individual copies of the paid product if they are to
 * use it. Usage includes working on related game mechanics, managing related
 * code, and/or using related Plugin Commands and features. Redistribution of
 * the plugin and/or its code to other members of the team is NOT allowed
 * unless they own the plugin itself as that conflicts with Article 4.
 * 
 * 8. Any extensions and/or addendums made to this plugin's Terms of Use can be
 * found on VisuStella.com and must be followed.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.06: August 29, 2024
 * * Documentation Update!
 * ** Added new instructions to notetags available:
 * *** If you do not want known skills that should be in the Skill Container to
 *     be displayed in other skill menus, you will need to change those skills
 *     to have either a different Skill Type or "None" as the Skill Type.
 * 
 * Version 1.05: May 16, 2024
 * * Compatibility Update!
 * ** Added better compatibility with Skill Learn System, allowing actors to
 *    learn skill containers. Update made by Irina.
 * 
 * Version 1.04: September 8, 2022
 * * Feature Update!
 * ** Removed function dependency on Skills & States Core to prevent crash.
 *    Update made by Irina.
 * 
 * Version 1.03: December 9, 2021
 * * Bug Fixes!
 * ** Plugin Parameter for Skill Container Text should now work properly.
 * 
 * Version 1.02: June 4, 2021
 * * Compatibility Update!
 * ** Skill containers should now work with Auto Battle. This does not apply
 *    to enemies, however. Enemies will still require the actual skills to be
 *    used properly. Update made by Olivia.
 * 
 * Version 1.01: April 30, 2021
 * * Compatibility Update!
 * ** Skills displayed inside the containers are now affected by the visibility
 *    notetags such as <Show Switch: x> and <Hide Switch :x> as well as the
 *    <JS Skill Visible> notetags. Update made by Arisu.
 * * Feature Update!
 * ** When using the VisuMZ_3_SideviewBattleUI plugin, resize the window
 *    according to the title items inside of the container window instead of
 *    basing it off the skill window's size. Update made by Olivia.
 *
 * Version 1.00 Official Release Date: May 7, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PluginCommandFunctionName
 * @text Category: Function Name
 * @desc Plugin Command Description Text
 *
 * @arg Step1:arraynum
 * @text Step 1: Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @arg option:num
 * @text Option Text
 * @type number
 * @max 1
 * @desc Change the value to this number
 * @default 42069
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemEnableSkillContainersMenu
 * @text System: Enable SkillContainers in Menu?
 * @desc Enables/disables SkillContainers menu inside the main menu.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables/disables SkillContainers menu inside the main menu.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemShowSkillContainersMenu
 * @text System: Show SkillContainers in Menu?
 * @desc Shows/hides SkillContainers menu inside the main menu.
 *
 * @arg Show:eval
 * @text Show/Hide?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides SkillContainers menu inside the main menu.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param SkillContainers
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ContainerText:str
 * @text Skill Container Text
 * @desc Determines the text that appears where the skill costs
 * normally would appear instead.
 * @default \FS[22]...
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
//=============================================================================

const _0x1b3692=_0x4b46;(function(_0x595951,_0x4c91c5){const _0x44ccda=_0x4b46,_0x2912b7=_0x595951();while(!![]){try{const _0x5d4cf4=-parseInt(_0x44ccda(0x10d))/0x1*(-parseInt(_0x44ccda(0xf9))/0x2)+parseInt(_0x44ccda(0x136))/0x3+parseInt(_0x44ccda(0x11d))/0x4+-parseInt(_0x44ccda(0xec))/0x5+-parseInt(_0x44ccda(0x132))/0x6+-parseInt(_0x44ccda(0xf3))/0x7*(parseInt(_0x44ccda(0x11a))/0x8)+-parseInt(_0x44ccda(0xed))/0x9;if(_0x5d4cf4===_0x4c91c5)break;else _0x2912b7['push'](_0x2912b7['shift']());}catch(_0x251282){_0x2912b7['push'](_0x2912b7['shift']());}}}(_0x1558,0x2a1d5));var label=_0x1b3692(0x139),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x1b3692(0x118)](function(_0x4837aa){const _0xea262e=_0x1b3692;return _0x4837aa['status']&&_0x4837aa[_0xea262e(0xf5)][_0xea262e(0x13f)]('['+label+']');})[0x0];VisuMZ[label][_0x1b3692(0x11f)]=VisuMZ[label][_0x1b3692(0x11f)]||{},VisuMZ[_0x1b3692(0xe5)]=function(_0x1a2868,_0x36e0ca){const _0x429f5b=_0x1b3692;for(const _0x1fd67b in _0x36e0ca){if(_0x1fd67b[_0x429f5b(0x100)](/(.*):(.*)/i)){const _0x29985b=String(RegExp['$1']),_0x4a05e3=String(RegExp['$2'])[_0x429f5b(0xf7)]()[_0x429f5b(0x14a)]();let _0x4e0038,_0xd7dccc,_0x194051;switch(_0x4a05e3){case'NUM':_0x4e0038=_0x36e0ca[_0x1fd67b]!==''?Number(_0x36e0ca[_0x1fd67b]):0x0;break;case _0x429f5b(0x148):_0xd7dccc=_0x36e0ca[_0x1fd67b]!==''?JSON['parse'](_0x36e0ca[_0x1fd67b]):[],_0x4e0038=_0xd7dccc[_0x429f5b(0xf0)](_0x3fb4ab=>Number(_0x3fb4ab));break;case'EVAL':_0x4e0038=_0x36e0ca[_0x1fd67b]!==''?eval(_0x36e0ca[_0x1fd67b]):null;break;case'ARRAYEVAL':_0xd7dccc=_0x36e0ca[_0x1fd67b]!==''?JSON[_0x429f5b(0xe6)](_0x36e0ca[_0x1fd67b]):[],_0x4e0038=_0xd7dccc[_0x429f5b(0xf0)](_0x11d437=>eval(_0x11d437));break;case'JSON':_0x4e0038=_0x36e0ca[_0x1fd67b]!==''?JSON[_0x429f5b(0xe6)](_0x36e0ca[_0x1fd67b]):'';break;case _0x429f5b(0x14e):_0xd7dccc=_0x36e0ca[_0x1fd67b]!==''?JSON[_0x429f5b(0xe6)](_0x36e0ca[_0x1fd67b]):[],_0x4e0038=_0xd7dccc[_0x429f5b(0xf0)](_0x58c315=>JSON[_0x429f5b(0xe6)](_0x58c315));break;case _0x429f5b(0xfa):_0x4e0038=_0x36e0ca[_0x1fd67b]!==''?new Function(JSON[_0x429f5b(0xe6)](_0x36e0ca[_0x1fd67b])):new Function(_0x429f5b(0x149));break;case _0x429f5b(0x12e):_0xd7dccc=_0x36e0ca[_0x1fd67b]!==''?JSON[_0x429f5b(0xe6)](_0x36e0ca[_0x1fd67b]):[],_0x4e0038=_0xd7dccc[_0x429f5b(0xf0)](_0x3f433c=>new Function(JSON['parse'](_0x3f433c)));break;case _0x429f5b(0x145):_0x4e0038=_0x36e0ca[_0x1fd67b]!==''?String(_0x36e0ca[_0x1fd67b]):'';break;case _0x429f5b(0xe8):_0xd7dccc=_0x36e0ca[_0x1fd67b]!==''?JSON['parse'](_0x36e0ca[_0x1fd67b]):[],_0x4e0038=_0xd7dccc['map'](_0x28155d=>String(_0x28155d));break;case _0x429f5b(0x10e):_0x194051=_0x36e0ca[_0x1fd67b]!==''?JSON['parse'](_0x36e0ca[_0x1fd67b]):{},_0x4e0038=VisuMZ[_0x429f5b(0xe5)]({},_0x194051);break;case _0x429f5b(0x124):_0xd7dccc=_0x36e0ca[_0x1fd67b]!==''?JSON['parse'](_0x36e0ca[_0x1fd67b]):[],_0x4e0038=_0xd7dccc[_0x429f5b(0xf0)](_0x441f75=>VisuMZ['ConvertParams']({},JSON[_0x429f5b(0xe6)](_0x441f75)));break;default:continue;}_0x1a2868[_0x29985b]=_0x4e0038;}}return _0x1a2868;},(_0x2a1da1=>{const _0x49c8f3=_0x1b3692,_0x3e8180=_0x2a1da1[_0x49c8f3(0x133)];for(const _0x55ff0a of dependencies){if(!Imported[_0x55ff0a]){alert(_0x49c8f3(0xe9)[_0x49c8f3(0x11c)](_0x3e8180,_0x55ff0a)),SceneManager[_0x49c8f3(0xee)]();break;}}const _0x3e4917=_0x2a1da1['description'];if(_0x3e4917['match'](/\[Version[ ](.*?)\]/i)){const _0x35bb4c=Number(RegExp['$1']);_0x35bb4c!==VisuMZ[label][_0x49c8f3(0xfc)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x49c8f3(0x11c)](_0x3e8180,_0x35bb4c)),SceneManager[_0x49c8f3(0xee)]());}if(_0x3e4917[_0x49c8f3(0x100)](/\[Tier[ ](\d+)\]/i)){const _0xb4b6be=Number(RegExp['$1']);_0xb4b6be<tier?(alert(_0x49c8f3(0x151)['format'](_0x3e8180,_0xb4b6be,tier)),SceneManager[_0x49c8f3(0xee)]()):tier=Math['max'](_0xb4b6be,tier);}VisuMZ[_0x49c8f3(0xe5)](VisuMZ[label][_0x49c8f3(0x11f)],_0x2a1da1[_0x49c8f3(0x11b)]);})(pluginData),VisuMZ[_0x1b3692(0x139)][_0x1b3692(0x12b)]={'KnownList':/<(?:KNOWN|EXTRA) (?:SKILL|SKILLS) LIST:[ ](.*)>/gi,'KnownListRange':/<(?:KNOWN|EXTRA) (?:SKILL|SKILLS) LIST:[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/gi,'ForceList':/<(?:FORCE|FORCED) (?:SKILL|SKILLS) LIST:[ ](.*)>/gi,'ForceListRange':/<(?:FORCE|FORCED) (?:SKILL|SKILLS) LIST:[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/gi,'Type1':/<(?:NOTETAG):[ ](\d+)([%％])>/i,'Type2':/<(?:NOTETAG):[ ]([\+\-]\d+)>/i,'Type3':/<(?:NOTETAG):[ ](.*)>/i,'Type3nonGreedy':/<(?:NOTETAG):[ ](.*?)>/i,'Type4':/<(?:NOTETAG):[ ]*(\d+(?:\s*,\s*\d+)*)>/i,'Type5':/<(?:NOTETAG):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i,'Type6':/<(?:NOTETAG)>/i,'Type7':/<\/(?:NOTETAG)>/i,'Type8':/<(?:NOTETAG)>\s*([\s\S]*)\s*<\/(?:NOTETAG)>/i},DataManager[_0x1b3692(0x101)]=function(_0x19d418){const _0xadd81b=_0x1b3692;if(!_0x19d418)return![];typeof _0x19d418===Number&&(console[_0xadd81b(0x138)](_0xadd81b(0x13d)),_0x19d418=$dataSkills[_0x19d418]);const _0x11aec8=VisuMZ[_0xadd81b(0x139)][_0xadd81b(0x12b)],_0x3a5c5e=_0x19d418[_0xadd81b(0xea)];return _0x3a5c5e[_0xadd81b(0x100)](_0x11aec8[_0xadd81b(0x134)])||_0x3a5c5e[_0xadd81b(0x100)](_0x11aec8[_0xadd81b(0x141)]);},DataManager[_0x1b3692(0x13a)]=function(_0x20e542,_0x384a31){const _0x241197=_0x1b3692;if(!_0x384a31)return[];const _0x554551=VisuMZ['SkillContainers'][_0x241197(0x12b)],_0x5c9c7b=_0x384a31[_0x241197(0xea)];let _0x4878e5=[];if(_0x20e542){if(!![]){const _0x2745b4=_0x5c9c7b['match'](_0x554551[_0x241197(0x134)]);if(_0x2745b4)for(const _0x82067a of _0x2745b4){_0x82067a[_0x241197(0x100)](_0x554551[_0x241197(0x134)]);let _0x55962a=DataManager[_0x241197(0x103)](RegExp['$1']);_0x55962a=_0x55962a['filter'](_0x6bf9e2=>_0x20e542['hasSkill'](_0x6bf9e2)),_0x4878e5=_0x4878e5[_0x241197(0x135)](_0x55962a);}}if(!![]){const _0x585b54=_0x5c9c7b['match'](_0x554551['KnownListRange']);if(_0x585b54)for(const _0x1043e7 of _0x585b54){_0x1043e7[_0x241197(0x100)](_0x554551[_0x241197(0x10c)]);const _0x3109cf=Number(RegExp['$1']),_0x33ac09=Number(RegExp['$2']);let _0x1fe263=[];for(let _0x3b142a=_0x3109cf;_0x3b142a<=_0x33ac09;_0x3b142a++){_0x1fe263[_0x241197(0x144)](_0x3b142a);}_0x1fe263=_0x1fe263[_0x241197(0x118)](_0x5a5209=>_0x20e542[_0x241197(0x105)](_0x5a5209)),_0x4878e5=_0x4878e5[_0x241197(0x135)](_0x1fe263);}}}if(!![]){if(!![]){const _0x4195bf=_0x5c9c7b['match'](_0x554551[_0x241197(0x141)]);if(_0x4195bf)for(const _0x1f1a14 of _0x4195bf){_0x1f1a14[_0x241197(0x100)](_0x554551[_0x241197(0x141)]);let _0x2f391e=DataManager['parseSkillContainerList'](RegExp['$1']);_0x4878e5=_0x4878e5[_0x241197(0x135)](_0x2f391e);}}if(!![]){const _0x459da1=_0x5c9c7b['match'](_0x554551['ForceListRange']);if(_0x459da1)for(const _0x4ca353 of _0x459da1){_0x4ca353[_0x241197(0x100)](_0x554551[_0x241197(0xfd)]);const _0x26d794=Number(RegExp['$1']),_0x589bbb=Number(RegExp['$2']);let _0x3a00c0=[];for(let _0x4012de=_0x26d794;_0x4012de<=_0x589bbb;_0x4012de++){_0x3a00c0['push'](_0x4012de);}_0x4878e5=_0x4878e5['concat'](_0x3a00c0);}}}return _0x4878e5=_0x4878e5['filter'](_0x5a4fbf=>!!$dataSkills[_0x5a4fbf]),_0x4878e5=_0x4878e5[_0x241197(0x118)](_0x3e1bd1=>_0x3e1bd1!==_0x384a31['id']),_0x4878e5=_0x4878e5[_0x241197(0x118)](_0x45b557=>$dataSkills[_0x45b557]['name']['trim']()!==''),_0x4878e5=_0x4878e5['filter'](_0x33a73c=>!$dataSkills[_0x33a73c]['name'][_0x241197(0x100)](/-----/i)),_0x4878e5=_0x4878e5[_0x241197(0x118)]((_0x22b944,_0x4ca436,_0x10a670)=>_0x10a670[_0x241197(0x108)](_0x22b944)===_0x4ca436),_0x4878e5[_0x241197(0x104)]((_0x274019,_0x34299b)=>_0x274019-_0x34299b),_0x4878e5;},DataManager['parseSkillContainerList']=function(_0x3ad03a){const _0x51308e=_0x1b3692;_0x3ad03a=_0x3ad03a[_0x51308e(0x10a)](',')['map'](_0x5b47ef=>_0x5b47ef[_0x51308e(0x14a)]());let _0x27ed85=[];for(let _0x28d91e of _0x3ad03a){_0x28d91e=(String(_0x28d91e)||'')['trim']();const _0x10fc0c=/^\d+$/['test'](_0x28d91e);_0x10fc0c?_0x27ed85[_0x51308e(0x144)](Number(_0x28d91e)):_0x27ed85[_0x51308e(0x144)](DataManager[_0x51308e(0x115)](_0x28d91e));}return _0x27ed85;},DataManager[_0x1b3692(0x115)]=function(_0x52cf75){const _0x2125f0=_0x1b3692;_0x52cf75=_0x52cf75['toUpperCase']()['trim'](),this[_0x2125f0(0x12c)]=this['_skillIDs']||{};if(this[_0x2125f0(0x12c)][_0x52cf75])return this[_0x2125f0(0x12c)][_0x52cf75];for(const _0x4bd49e of $dataSkills){if(!_0x4bd49e)continue;this[_0x2125f0(0x12c)][_0x4bd49e['name'][_0x2125f0(0xf7)]()[_0x2125f0(0x14a)]()]=_0x4bd49e['id'];}return this[_0x2125f0(0x12c)][_0x52cf75]||0x0;},TextManager[_0x1b3692(0x152)]=VisuMZ[_0x1b3692(0x139)]['Settings']['ContainerText'],VisuMZ[_0x1b3692(0x139)][_0x1b3692(0x13b)]=Scene_Skill['prototype'][_0x1b3692(0x12d)],Scene_Skill[_0x1b3692(0x117)][_0x1b3692(0x12d)]=function(){const _0xda8951=_0x1b3692,_0x3c20ae=this[_0xda8951(0x14b)]();if(DataManager[_0xda8951(0x101)](_0x3c20ae)){if(Imported[_0xda8951(0x11e)]&&this[_0xda8951(0x106)]['isSkillLearnMode']())return VisuMZ['SkillContainers']['Scene_Skill_onItemOk'][_0xda8951(0x111)](this);this[_0xda8951(0x112)]();}else VisuMZ[_0xda8951(0x139)]['Scene_Skill_onItemOk'][_0xda8951(0x111)](this);},Scene_Skill[_0x1b3692(0x117)][_0x1b3692(0x112)]=function(){const _0x516403=_0x1b3692,_0x2cd8c7={'skill':this['_itemWindow'][_0x516403(0x14b)](),'index':this['_itemWindow'][_0x516403(0xe2)]()};this[_0x516403(0x106)]['addSkillContainerStack'](_0x2cd8c7),this[_0x516403(0x106)][_0x516403(0x12a)]();},VisuMZ[_0x1b3692(0x139)][_0x1b3692(0x13e)]=Scene_Skill[_0x1b3692(0x117)][_0x1b3692(0xfe)],Scene_Skill[_0x1b3692(0x117)][_0x1b3692(0xfe)]=function(){const _0x496826=_0x1b3692;this['_itemWindow'][_0x496826(0x107)]()?this['processSkillContainerCancel']():VisuMZ['SkillContainers'][_0x496826(0x13e)][_0x496826(0x111)](this);},Scene_Skill[_0x1b3692(0x117)]['processSkillContainerCancel']=function(){const _0x2ca0ad=_0x1b3692;this[_0x2ca0ad(0x106)][_0x2ca0ad(0xe4)](),this[_0x2ca0ad(0x106)]['activate']();},VisuMZ[_0x1b3692(0x139)][_0x1b3692(0x116)]=Scene_Battle['prototype'][_0x1b3692(0xf1)],Scene_Battle[_0x1b3692(0x117)]['onSkillOk']=function(){const _0x4cc12f=_0x1b3692,_0x47c380=this[_0x4cc12f(0x109)]['item']();DataManager[_0x4cc12f(0x101)](_0x47c380)?this[_0x4cc12f(0x112)]():VisuMZ['SkillContainers'][_0x4cc12f(0x116)][_0x4cc12f(0x111)](this);},Scene_Battle[_0x1b3692(0x117)][_0x1b3692(0x112)]=function(){const _0x1a9ec4=_0x1b3692,_0x2dfdeb={'skill':this[_0x1a9ec4(0x109)][_0x1a9ec4(0x14b)](),'index':this['_skillWindow'][_0x1a9ec4(0xe2)]()};this['_skillWindow'][_0x1a9ec4(0x129)](_0x2dfdeb),this[_0x1a9ec4(0x109)][_0x1a9ec4(0x12a)]();},VisuMZ[_0x1b3692(0x139)][_0x1b3692(0xef)]=Scene_Battle[_0x1b3692(0x117)][_0x1b3692(0x143)],Scene_Battle['prototype'][_0x1b3692(0x143)]=function(){const _0x2b60df=_0x1b3692;this[_0x2b60df(0x109)]['isShowingSkillContainerList']()?this[_0x2b60df(0xfb)]():VisuMZ['SkillContainers'][_0x2b60df(0xef)]['call'](this);},Scene_Battle[_0x1b3692(0x117)][_0x1b3692(0xfb)]=function(){const _0x28edb2=_0x1b3692;this[_0x28edb2(0x109)][_0x28edb2(0xe4)](),this[_0x28edb2(0x109)]['activate']();},VisuMZ[_0x1b3692(0x139)]['Scene_Battle_selectNextCommand']=Scene_Battle[_0x1b3692(0x117)][_0x1b3692(0x12f)],Scene_Battle[_0x1b3692(0x117)][_0x1b3692(0x12f)]=function(){const _0x56d5b0=_0x1b3692;this[_0x56d5b0(0x109)]&&this['_skillWindow'][_0x56d5b0(0xe7)](![]),VisuMZ['SkillContainers']['Scene_Battle_selectNextCommand'][_0x56d5b0(0x111)](this);},VisuMZ[_0x1b3692(0x139)][_0x1b3692(0x131)]=Game_Actor[_0x1b3692(0x117)][_0x1b3692(0xff)],Game_Actor[_0x1b3692(0x117)][_0x1b3692(0xff)]=function(){const _0x1e5d12=_0x1b3692;let _0x47e7bd=VisuMZ[_0x1e5d12(0x139)][_0x1e5d12(0x131)][_0x1e5d12(0x111)](this);return this[_0x1e5d12(0x147)]=0x0,_0x47e7bd=this[_0x1e5d12(0xf6)](_0x47e7bd),_0x47e7bd;},Game_Actor['prototype'][_0x1b3692(0xf6)]=function(_0x201842){const _0x347ac5=_0x1b3692;if(this[_0x347ac5(0x147)]>=0x64)return _0x201842;for(const _0x401119 of _0x201842){if(!_0x401119)continue;if(DataManager[_0x347ac5(0x101)](_0x401119)){let _0x1f9419=DataManager[_0x347ac5(0x13a)](this,_0x401119);_0x1f9419=_0x1f9419['map'](_0x49bcd7=>$dataSkills[_0x49bcd7]),_0x1f9419=_0x1f9419[_0x347ac5(0x118)](_0x5e8539=>!!_0x5e8539),_0x1f9419=this[_0x347ac5(0xf6)](_0x1f9419),_0x201842=_0x201842['concat'](_0x1f9419);}}return _0x201842;},VisuMZ[_0x1b3692(0x139)][_0x1b3692(0x121)]=Window_SkillList[_0x1b3692(0x117)]['initialize'],Window_SkillList[_0x1b3692(0x117)][_0x1b3692(0x125)]=function(_0x28ad65){const _0x5821b2=_0x1b3692;VisuMZ[_0x5821b2(0x139)]['Window_SkillList_initialize'][_0x5821b2(0x111)](this,_0x28ad65),this[_0x5821b2(0x119)]=[];},Window_SkillList['prototype']['addSkillContainerStack']=function(_0x33edc0){const _0x3dfe81=_0x1b3692;this[_0x3dfe81(0x119)][_0x3dfe81(0x144)](_0x33edc0),this[_0x3dfe81(0x102)](),this[_0x3dfe81(0x14c)](0x0);},Window_SkillList[_0x1b3692(0x117)]['removeSkillContainerStack']=function(){const _0x42684c=_0x1b3692;if(this[_0x42684c(0x119)]['length']<=0x0)return;const _0x380fd3=this[_0x42684c(0x119)][this[_0x42684c(0x119)][_0x42684c(0xeb)]-0x1],_0x1f0ff7=_0x380fd3['index']||0x0;this['_skillContainerStack'][_0x42684c(0x128)](),this[_0x42684c(0x102)](),this['forceSelect'](_0x1f0ff7);},Window_SkillList[_0x1b3692(0x117)][_0x1b3692(0xe7)]=function(_0x488867){const _0x4d70d8=_0x1b3692;if(this[_0x4d70d8(0x119)][_0x4d70d8(0xeb)]<=0x0)return;const _0xc59697=this[_0x4d70d8(0x119)][0x0],_0x4375e1=_0xc59697[_0x4d70d8(0xe2)]||0x0;this[_0x4d70d8(0x119)]=[],_0x488867&&(this[_0x4d70d8(0x102)](),this[_0x4d70d8(0x14c)](_0x4375e1));},Window_SkillList['prototype'][_0x1b3692(0x107)]=function(){const _0x57a6bd=_0x1b3692;return this[_0x57a6bd(0x119)][_0x57a6bd(0xeb)]>0x0;},VisuMZ[_0x1b3692(0x139)][_0x1b3692(0x153)]=Window_SkillList[_0x1b3692(0x117)][_0x1b3692(0x126)],Window_SkillList[_0x1b3692(0x117)][_0x1b3692(0x126)]=function(){const _0x283dae=_0x1b3692;this[_0x283dae(0x107)]()?this[_0x283dae(0xf8)]():VisuMZ[_0x283dae(0x139)][_0x283dae(0x153)][_0x283dae(0x111)](this);},VisuMZ[_0x1b3692(0x139)]['Window_SkillList_includes']=Window_SkillList[_0x1b3692(0x117)][_0x1b3692(0x13f)],Window_SkillList[_0x1b3692(0x117)]['includes']=function(_0x56b4b1){const _0x2ae7aa=_0x1b3692;if(_0x56b4b1&&DataManager[_0x2ae7aa(0x101)](_0x56b4b1)){if(Imported[_0x2ae7aa(0x11e)]&&this[_0x2ae7aa(0x10b)]())return VisuMZ[_0x2ae7aa(0x139)][_0x2ae7aa(0x140)][_0x2ae7aa(0x111)](this,_0x56b4b1);const _0x1e1628=DataManager[_0x2ae7aa(0x13a)](this[_0x2ae7aa(0x120)],_0x56b4b1);if(_0x1e1628['length']<=0x0)return![];}return VisuMZ['SkillContainers'][_0x2ae7aa(0x140)][_0x2ae7aa(0x111)](this,_0x56b4b1);},Window_SkillList[_0x1b3692(0x117)]['makeSkillContainerList']=function(){const _0x262bc5=_0x1b3692,_0x9265ed=this['_skillContainerStack'][this[_0x262bc5(0x119)][_0x262bc5(0xeb)]-0x1],_0x4dfd2f=_0x9265ed[_0x262bc5(0xf4)],_0x4f6a86=DataManager[_0x262bc5(0x13a)](this[_0x262bc5(0x120)],_0x4dfd2f);this[_0x262bc5(0x110)]=_0x4f6a86['map'](_0x3bc967=>$dataSkills[_0x3bc967])[_0x262bc5(0x118)](_0x17ddaa=>!!_0x17ddaa&&this[_0x262bc5(0x142)](_0x17ddaa)),Imported[_0x262bc5(0x130)]&&(this[_0x262bc5(0x122)](),this[_0x262bc5(0x150)](),this[_0x262bc5(0x127)]());},Window_SkillList[_0x1b3692(0x117)][_0x1b3692(0x142)]=function(_0x2a11ca){const _0x511bbb=_0x1b3692;if(Imported[_0x511bbb(0x14d)]){if(!this['checkShowHideNotetags'](_0x2a11ca))return![];if(!this[_0x511bbb(0x14f)](_0x2a11ca))return![];}return!![];},VisuMZ[_0x1b3692(0x139)][_0x1b3692(0x10f)]=Window_SkillList['prototype'][_0x1b3692(0x146)],Window_SkillList['prototype'][_0x1b3692(0x146)]=function(_0x47ecbe,_0x23d6e8,_0x2be99a,_0x459f06){const _0x12b764=_0x1b3692;if(DataManager[_0x12b764(0x101)](_0x47ecbe)){if(Imported['VisuMZ_2_SkillLearnSystem']&&this['isSkillLearnMode']())return VisuMZ[_0x12b764(0x139)]['Window_SkillList_drawSkillCost']['call'](this,_0x47ecbe,_0x23d6e8,_0x2be99a,_0x459f06);this[_0x12b764(0x113)](_0x47ecbe,_0x23d6e8,_0x2be99a,_0x459f06);}else VisuMZ[_0x12b764(0x139)][_0x12b764(0x10f)][_0x12b764(0x111)](this,_0x47ecbe,_0x23d6e8,_0x2be99a,_0x459f06);},Window_SkillList[_0x1b3692(0x117)][_0x1b3692(0x113)]=function(_0x2b3e7d,_0x2179b9,_0x55a25c,_0x3c2f1f){const _0x2ed400=_0x1b3692;if(!_0x2b3e7d)return;this[_0x2ed400(0xe3)]();const _0xdbf9a0=TextManager['skillContainerText'],_0x567eaa=this[_0x2ed400(0x137)](_0xdbf9a0)[_0x2ed400(0x13c)];_0x2179b9+=_0x3c2f1f-_0x567eaa,this['drawTextEx'](_0xdbf9a0,_0x2179b9,_0x55a25c,_0x567eaa),this[_0x2ed400(0xe3)]();};function _0x4b46(_0xb5eb7,_0x48f1d8){const _0x155880=_0x1558();return _0x4b46=function(_0x4b4636,_0x566e0d){_0x4b4636=_0x4b4636-0xe2;let _0x51962a=_0x155880[_0x4b4636];return _0x51962a;},_0x4b46(_0xb5eb7,_0x48f1d8);}Imported[_0x1b3692(0x123)]&&(VisuMZ[_0x1b3692(0x139)][_0x1b3692(0xf2)]=Window_ActorCommand[_0x1b3692(0x117)][_0x1b3692(0x114)],Window_ActorCommand['prototype'][_0x1b3692(0x114)]=function(_0x2b3278){const _0x360a5e=_0x1b3692;return DataManager['isSkillContainer'](_0x2b3278)?![]:VisuMZ['SkillContainers']['Window_ActorCommand_canAddSkillCommand'][_0x360a5e(0x111)](this,_0x2b3278);});;function _0x1558(){const _0x163209=['test','Scene_Skill_onItemCancel','includes','Window_SkillList_includes','ForceList','containerIncludes','onSkillCancel','push','STR','drawSkillCost','_skillContainerLoops','ARRAYNUM','return\x200','trim','item','forceSelect','VisuMZ_1_SkillsStatesCore','ARRAYJSON','checkShowHideJS','adjustSideviewUiHeight','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','skillContainerText','Window_SkillList_makeItemList','index','resetFontSettings','removeSkillContainerStack','ConvertParams','parse','clearSkillContainerStacks','ARRAYSTR','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','note','length','1300740soAXmU','658602wxESue','exit','Scene_Battle_onSkillCancel','map','onSkillOk','Window_ActorCommand_canAddSkillCommand','1855XjMdoS','skill','description','addSkillContainerSkills','toUpperCase','makeSkillContainerList','13850rZaPfZ','FUNC','processSkillContainerCancel','version','ForceListRange','onItemCancel','usableSkills','match','isSkillContainer','refresh','parseSkillContainerList','sort','hasSkill','_itemWindow','isShowingSkillContainerList','indexOf','_skillWindow','split','isSkillLearnMode','KnownListRange','48mcucFf','STRUCT','Window_SkillList_drawSkillCost','_data','call','processSkillContainerOk','drawSkillContainerText','canAddSkillCommand','getSkillIdWithName','Scene_Battle_onSkillOk','prototype','filter','_skillContainerStack','9832LaBCUB','parameters','format','1310528vaprcu','VisuMZ_2_SkillLearnSystem','Settings','_actor','Window_SkillList_initialize','adjustSideviewUiWidth','VisuMZ_1_BattleCore','ARRAYSTRUCT','initialize','makeItemList','updateSideviewUiPosition','pop','addSkillContainerStack','activate','RegExp','_skillIDs','onItemOk','ARRAYFUNC','selectNextCommand','VisuMZ_3_SideviewBattleUI','Game_Actor_usableSkills','961812ajYrfb','name','KnownList','concat','995346LdQrrY','textSizeEx','log','SkillContainers','getSkillContainerList','Scene_Skill_onItemOk','width'];_0x1558=function(){return _0x163209;};return _0x1558();}