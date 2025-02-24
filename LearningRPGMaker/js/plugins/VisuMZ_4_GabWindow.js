//=============================================================================
// VisuStella MZ - Gab Window
// VisuMZ_4_GabWindow.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_GabWindow = true;

var VisuMZ = VisuMZ || {};
VisuMZ.GabWindow = VisuMZ.GabWindow || {};
VisuMZ.GabWindow.version = 1.05;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.05] [GabWindow]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Gab_Window_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Sometimes there's random jibber jabber that does not warrant a message box.
 * The Gab Window fulfills that jibber jabber by placing such text outside of
 * the message window box and at the corner of the screen. The gab text will
 * appear briefly and then disappear, not showing up again until the gab text
 * is updated with something else.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Create gab text that does not interrupt gameplay.
 * * Gabs can be queued together to create a streamlined conversation.
 * * Gabs can play sound effects when played, allowing you to attach voices to
 *   them if desired.
 * * Multiple lines can be used per gab to display more text.
 * * Attach faces, map sprites, sideview sprites, and even pictures to gabs.
 * * Gabs can be automatically positioned above specific events, actors, and
 *   even enemies.
 * * Turn on switches after a gab is completed.
 * * Run custom JavaScript code upon displaying or finish a gab.
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
 * Clearing Up Misunderstandings
 * ============================================================================
 *
 * There are some misunderstandings regarding gabs.
 *
 * ---
 * 
 * Gabs are NOT part of the Event List
 * 
 * For events with Show Text messages, the game goes through the event list one
 * by one until it reaches the end. This does not apply to Gabs. The Plugin
 * Commands that add Gabs add them into a queue outside of the event list and
 * therefore, any events that may be intended for gabs to be finished will
 * launch immediately unless there are event commands or plugin commands that
 * will cause the event list to wait for them.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 * 
 * === Gab Plugin Commands ===
 *
 * ---
 *
 * Gab: Text Only
 * - Show a Gab Window with the specified settings.
 *
 *   Text:
 *   - The text to be shown in the Gab Window.
 *
 *   Force Gab?:
 *   - Forced gabs will clear other gabs and display immediately.
 *
 *   Optional Settings:
 *   - Change the settings you want to override with this gab.
 *     Blank settings will use default Plugin Parameter settings.
 *
 * ---
 *
 * Gab: Gab: Text + Face (Any)
 * - Show a Gab Window with the specified settings.
 * - Any face graphic can be displayed next to text.
 *
 *   Text:
 *   - The text to be shown in the Gab Window.
 *
 *   Filename:
 *   - The filename of the face graphic to use.
 *
 *   Index:
 *   - This is the index of the face graphic.
 *   - Index values start at 0.
 *
 *   Force Gab?:
 *   - Forced gabs will clear other gabs and display immediately.
 *
 *   Optional Settings:
 *   - Change the settings you want to override with this gab.
 *     Blank settings will use default Plugin Parameter settings.
 *
 * ---
 *
 * Gab: Text + Face (Actor)
 * - Show a Gab Window with the specified settings.
 * - Pick an actor's face graphic to show with it.
 *
 *   Text:
 *   - The text to be shown in the Gab Window.
 *
 *   Actor ID:
 *   - This is the ID of the actor you want the face graphic of.
 *
 *   Force Gab?:
 *   - Forced gabs will clear other gabs and display immediately.
 *
 *   Optional Settings:
 *   - Change the settings you want to override with this gab.
 *     Blank settings will use default Plugin Parameter settings.
 *
 * ---
 *
 * Gab: Text + Face (Party)
 * - Show a Gab Window with the specified settings.
 * - Pick a party member's face graphic to show with it.
 *
 *   Text:
 *   - The text to be shown in the Gab Window.
 *
 *   Party Member Index:
 *   - This is the index of the party member you want the face graphic of.
 *   - Index values start at 0.
 *
 *   Force Gab?:
 *   - Forced gabs will clear other gabs and display immediately.
 *
 *   Optional Settings:
 *   - Change the settings you want to override with this gab.
 *     Blank settings will use default Plugin Parameter settings.
 *
 * ---
 *
 * Gab: Text + Map Sprite (Any)
 * - Show a Gab Window with the specified settings.
 * - Any map sprite can be displayed next to text.
 *
 *   Text:
 *   - The text to be shown in the Gab Window.
 *
 *   Filename:
 *   - The filename of the sprite graphic to use.
 *
 *   Index:
 *   - This is the index of the sprite graphic.
 *   - Index values start at 0.
 *
 *   Force Gab?:
 *   - Forced gabs will clear other gabs and display immediately.
 *
 *   Optional Settings:
 *   - Change the settings you want to override with this gab.
 *     Blank settings will use default Plugin Parameter settings.
 *
 * ---
 *
 * Gab: Text + Map Sprite (Actor)
 * - Show a Gab Window with the specified settings.
 * - Pick an actor's sprite graphic to show with it.
 *
 *   Text:
 *   - The text to be shown in the Gab Window.
 *
 *   Actor ID:
 *   - This is the ID of the actor you want the map sprite of.
 *
 *   Force Gab?:
 *   - Forced gabs will clear other gabs and display immediately.
 *
 *   Optional Settings:
 *   - Change the settings you want to override with this gab.
 *     Blank settings will use default Plugin Parameter settings.
 *
 * ---
 *
 * Gab: Text + Map Sprite (Party)
 * - Show a Gab Window with the specified settings.
 * - Pick a party member's sprite graphic to show with it.
 *
 *   Text:
 *   - The text to be shown in the Gab Window.
 *
 *   Party Member Index:
 *   - This is the index of the party member you want the map sprite of.
 *   - Index values start at 0.
 *
 *   Force Gab?:
 *   - Forced gabs will clear other gabs and display immediately.
 *
 *   Optional Settings:
 *   - Change the settings you want to override with this gab.
 *     Blank settings will use default Plugin Parameter settings.
 *
 * ---
 *
 * Gab: Text + Sideview Actor (Any)
 * - Show a Gab Window with the specified settings.
 * - Any Sideview Actor can be displayed next to text.
 *
 *   Text:
 *   - The text to be shown in the Gab Window.
 *
 *   Filename:
 *   - The filename of the Sideview Actor graphic to use.
 *
 *   Force Gab?:
 *   - Forced gabs will clear other gabs and display immediately.
 *
 *   Optional Settings:
 *   - Change the settings you want to override with this gab.
 *     Blank settings will use default Plugin Parameter settings.
 *
 * ---
 *
 * Gab: Text + Sideview Actor (Actor)
 * - Show a Gab Window with the specified settings.
 * - Pick an actor's sideview graphic to show with it.
 *
 *   Text:
 *   - The text to be shown in the Gab Window.
 *
 *   Actor ID:
 *   - This is the ID of the actor you want the sideview graphic of.
 *
 *   Force Gab?:
 *   - Forced gabs will clear other gabs and display immediately.
 *
 *   Optional Settings:
 *   - Change the settings you want to override with this gab.
 *     Blank settings will use default Plugin Parameter settings.
 *
 * ---
 *
 * Gab: Text + Sideview Actor (Party)
 * - Show a Gab Window with the specified settings.
 * - Pick a party member's sideview graphic to show with it.
 *
 *   Text:
 *   - The text to be shown in the Gab Window.
 *
 *   Party Member Index:
 *   - This is the index of the party member you want the sideview graphic of.
 *   - Index values start at 0.
 *
 *   Force Gab?:
 *   - Forced gabs will clear other gabs and display immediately.
 *
 *   Optional Settings:
 *   - Change the settings you want to override with this gab.
 *     Blank settings will use default Plugin Parameter settings.
 *
 * ---
 *
 * Gab: Text + Picture
 * - Show a Gab Window with the specified settings.
 * - Any picture graphic can be displayed next to text.
 *
 *   Text:
 *   - The text to be shown in the Gab Window.
 *
 *   Filename:
 *   - The filename of the face graphic to use.
 *
 *   Stretch Picture:
 *   - Stretch the picture to fit the window?
 *
 *   Force Gab?:
 *   - Forced gabs will clear other gabs and display immediately.
 *
 *   Optional Settings:
 *   - Change the settings you want to override with this gab.
 *     Blank settings will use default Plugin Parameter settings.
 *
 * ---
 * 
 * === Optional Settings ===
 * 
 * These settings appear in the above Gab Plugin Commands. Opening up the
 * Optional Settings will yield the following:
 * 
 * ---
 *
 * DimColor
 * 
 *   Dim Color 1:
 *   Dim Color 2:
 *   - The dim colors to use for this Gab Window.
 *   - Format: rgba(red, green, blue, alpha)
 *
 * ---
 *
 * Fade
 * 
 *   Fade Rate:
 *   - How fast this Gab Window fades away.
 * 
 *   Fade Direction:
 *   - The direction this Gab Window fades out in.
 *
 * ---
 *
 * Font
 * 
 *   Font Name:
 *   - The font name to use for this Gab Window.
 * 
 *   Font Size:
 *   - The font size to use for this Gab Window.
 *
 * ---
 *
 * Position
 * 
 *   Y Location:
 *   - The Y coordinate this Gab Window will appear in.
 *   - Ignore if you are using a locked sprite position.
 * 
 *   Actor ID:
 *   - The ID of the actor to display this Gab Window above.
 *   - For Map/Battle. 
 * 
 *   Party Index:
 *   - Index of the party member to display Gab Window above.
 *   - For Map/Battle. Index values start at 0. Ignore under 0.
 * 
 *   Enemy Index:
 *   - Index of an enemy battler to display Gab Window above.
 *   - Battle only. Index values start at 0. Ignore under 0.
 * 
 *   Event ID:
 *   - The ID of the event to display this Gab Window above.
 *   - Map only.
 *
 * ---
 *
 * On Display
 * 
 *   Bypass Anti-Repeat:
 *   - Allows this gab to bypass the Anti-Repeat settings.
 * 
 *   Sound Filename:
 *   - The filename of the SE to play when the Gab Window shows.
 * 
 *     Volume:
 *     - Volume of the sound effect played.
 * 
 *     Pitch:
 *     - Pitch of the sound effect played.
 * 
 *     Pan:
 *     - Pan of the sound effect played.
 * 
 *   JS: On Display:
 *   - Runs this code once this Gab Window shows up.
 *
 * ---
 *
 * On Finish
 * 
 *   Gab Switch:
 *   - The specified switch will be turned ON when the Gab Window finishes.
 * 
 *   JS: On Finish:
 *   - Runs this code once this Gab Window finishes.
 *
 * ---
 *
 * Waiting
 * 
 *   Wait Time:
 *   - The number of frames this Gab Window stays visible.
 * 
 *   Time Per Character:
 *   - Frames added per Text Character in this Gab Window.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Clear Gabs
 * - Clears out the current Gab and any which are queued.
 *
 * ---
 *
 * System: Wait For Gab Completion
 * - Causes the game to wait until all gabs are finished playing.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General settings regarding the Gab Window.
 *
 * ---
 *
 * General
 * 
 *   Anti-Repeat:
 *   - Stops gabs of the same settings from being queued.
 * 
 *   Center Graphics:
 *   - Centers graphics vertically if there are multiple lines.
 *
 * ---
 *
 * Fade
 * 
 *   Fade Rate:
 *   - How fast the gab window fades away.
 * 
 *   Fade Direction:
 *   - The direction to move the window in when fading out.
 *
 * ---
 *
 * Font
 * 
 *   Gab Font Name:
 *   - The font name used for the text of the Gab Window
 *   - Leave empty to use the default game's font.
 * 
 *   Gab Font Size:
 *   - The font size used for the text of the Gab Window.
 *   - Default: 28
 *
 * ---
 *
 * Sprites > Character Sprites
 * 
 *   X Position:
 *   - X position of the character.
 * 
 *   Y Position:
 *   - Y position of the character.
 *
 * ---
 *
 * Sprites > Sideview Sprites
 * 
 *   X Position:
 *   - X position of the Sideview Actor.
 * 
 *   Y Position:
 *   - Y position of the Sideview Actor.
 *
 * ---
 *
 * Waiting
 * 
 *   Base Wait Time:
 *   - Minimum frames the Gab Window stays visible.
 *   - Default: 90
 * 
 *   Time Per Character:
 *   - Frames added per Text Character.
 *   - Default: 4
 *
 * ---
 * 
 * JavaScript
 * 
 *   JS: On Display:
 *   - Runs this code once this Gab Window shows up.
 *   - This applies to every single gab.
 * 
 *   JS: On Finish:
 *   - Runs this code once this Gab Window finishes.
 *   - This applies to every single gab.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Map Settings
 * ============================================================================
 *
 * Settings related to the gab window while in the map scene.
 *
 * ---
 *
 * Map
 * 
 *   Y Location:
 *   - This is the Y location of the Gab Window.
 * 
 *   Dim Color 1:
 *   Dim Color 2:
 *   - These are the dim colors used for maps.
 *   - Format: rgba(red, green, blue, alpha)
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battle Settings
 * ============================================================================
 *
 * Settings related to the gab window while in the battle scene.
 *
 * ---
 *
 * Battle
 * 
 *   Y Location:
 *   - This is the Y location of the Gab Window.
 * 
 *   Dim Color 1:
 *   Dim Color 2:
 *   - These are the dim colors used for battles.
 *   - Format: rgba(red, green, blue, alpha)
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
 * * Trihan
 * * Arisu
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.05: December 19, 2024
 * * Bug Fixes!
 * ** Fixed a bug where attached event gabs did not scale properly with zoom.
 *    Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Added new "Optional Settings" for various Gab Plugin Commands:
 * *** Sound Volume
 * *** Sound Pitch
 * *** Sound Pan
 * **** Previously, these were not available and defaulted to standard settings
 *      used by RPG Maker MZ.
 * 
 * Version 1.04: November 14, 2024
 * * Bug Fixes!
 * ** Fixed a bug where gabs weren't properly reloaded upon exiting menu. Fix
 *    made by Arisu.
 * * Documentation Update!
 * ** Added section "Clearing Up Misunderstandings":
 * *** Gabs are NOT part of the Event List
 * **** For events with Show Text messages, the game goes through the event
 *      list one by one until it reaches the end. This does not apply to Gabs.
 *      The Plugin Commands that add Gabs add them into a queue outside of the
 *      event list and therefore, any events that may be intended for gabs to
 *      be finished will launch immediately unless there are event commands or
 *      plugin commands that will cause the event list to wait for them.
 * 
 * Version 1.03: February 10, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.02: January 1, 2021
 * * Feature Update!
 * ** Changed how graphics are loaded into the gabs to make them more reliable.
 *    Update made by Yanfly.
 * 
 * Version 1.01: September 27, 2020
 * * Bug Fixes!
 * ** Using actor specific gab window settings during battle should no longer
 *    cause crashes. Fix made by Yanfly.
 * ** Gab Window now scales the whole screen width. Fix made by Irina.
 *
 * Version 1.00: September 10, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Begin
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GabTextOnly
 * @text Gab: Text Only
 * @desc Show a Gab Window with the specified settings.
 * Only text is displayed.
 * 
 * @arg Text:json
 * @text Text
 * @type note
 * @desc The text to be shown in the Gab Window.
 * @default "Hello!"
 * 
 * @arg ForceGab:eval
 * @text Force Gab?
 * @type boolean
 * @on Force this Gab
 * @off Queue this Gab
 * @desc Forced gabs will clear other gabs and display immediately.
 * @default false
 *
 * @arg Override:struct
 * @text Optional Settings
 * @type struct<Override>
 * @desc Change the settings you want to override with this gab.
 * Blank settings will use default Plugin Parameter settings.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GabTextFaceAny
 * @text Gab: Text + Face (Any)
 * @desc Show a Gab Window with the specified settings.
 * Any face graphic can be displayed next to text.
 * 
 * @arg Text:json
 * @text Text
 * @type note
 * @desc The text to be shown in the Gab Window.
 * @default "Hello!"
 * 
 * @arg Filename:str
 * @text Filename
 * @type file
 * @dir img/faces/
 * @desc The filename of the face graphic to use.
 * @default Actor1
 * 
 * @arg ID:num
 * @text Index
 * @parent Filename:str
 * @type number
 * @desc This is the index of the face graphic.
 * Index values start at 0.
 * @default 0
 * 
 * @arg ForceGab:eval
 * @text Force Gab?
 * @type boolean
 * @on Force this Gab
 * @off Queue this Gab
 * @desc Forced gabs will clear other gabs and display immediately.
 * @default false
 *
 * @arg Override:struct
 * @text Optional Settings
 * @type struct<Override>
 * @desc Change the settings you want to override with this gab.
 * Blank settings will use default Plugin Parameter settings.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GabTextFaceActor
 * @text Gab: Text + Face (Actor)
 * @desc Show a Gab Window with the specified settings.
 * Pick an actor's face graphic to show with it.
 * 
 * @arg Text:json
 * @text Text
 * @type note
 * @desc The text to be shown in the Gab Window.
 * @default "Hello!"
 * 
 * @arg ID:num
 * @text Actor ID
 * @type actor
 * @desc This is the ID of the actor you want the face graphic of.
 * @default 1
 * 
 * @arg ForceGab:eval
 * @text Force Gab?
 * @type boolean
 * @on Force this Gab
 * @off Queue this Gab
 * @desc Forced gabs will clear other gabs and display immediately.
 * @default false
 *
 * @arg Override:struct
 * @text Optional Settings
 * @type struct<Override>
 * @desc Change the settings you want to override with this gab.
 * Blank settings will use default Plugin Parameter settings.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GabTextFaceParty
 * @text Gab: Text + Face (Party)
 * @desc Show a Gab Window with the specified settings.
 * Pick a party member's face graphic to show with it.
 * 
 * @arg Text:json
 * @text Text
 * @type note
 * @desc The text to be shown in the Gab Window.
 * @default "Hello!"
 * 
 * @arg ID:num
 * @text Party Member Index
 * @type number
 * @desc This is the index of the party member you want the face
 * graphic of. Index values start at 0.
 * @default 0
 * 
 * @arg ForceGab:eval
 * @text Force Gab?
 * @type boolean
 * @on Force this Gab
 * @off Queue this Gab
 * @desc Forced gabs will clear other gabs and display immediately.
 * @default false
 *
 * @arg Override:struct
 * @text Optional Settings
 * @type struct<Override>
 * @desc Change the settings you want to override with this gab.
 * Blank settings will use default Plugin Parameter settings.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GabTextSpriteAny
 * @text Gab: Text + Map Sprite (Any)
 * @desc Show a Gab Window with the specified settings.
 * Any map sprite can be displayed next to text.
 * 
 * @arg Text:json
 * @text Text
 * @type note
 * @desc The text to be shown in the Gab Window.
 * @default "Hello!"
 * 
 * @arg Filename:str
 * @text Filename
 * @type file
 * @dir img/characters/
 * @desc The filename of the sprite graphic to use.
 * @default Actor1
 * 
 * @arg ID:num
 * @text Index
 * @parent Filename:str
 * @type number
 * @desc This is the index of the sprite graphic.
 * Index values start at 0.
 * @default 0
 * 
 * @arg ForceGab:eval
 * @text Force Gab?
 * @type boolean
 * @on Force this Gab
 * @off Queue this Gab
 * @desc Forced gabs will clear other gabs and display immediately.
 * @default false
 *
 * @arg Override:struct
 * @text Optional Settings
 * @type struct<Override>
 * @desc Change the settings you want to override with this gab.
 * Blank settings will use default Plugin Parameter settings.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GabTextSpriteActor
 * @text Gab: Text + Map Sprite (Actor)
 * @desc Show a Gab Window with the specified settings.
 * Pick an actor's sprite graphic to show with it.
 * 
 * @arg Text:json
 * @text Text
 * @type note
 * @desc The text to be shown in the Gab Window.
 * @default "Hello!"
 * 
 * @arg ID:num
 * @text Actor ID
 * @type actor
 * @desc This is the ID of the actor you want the map sprite of.
 * @default 1
 * 
 * @arg ForceGab:eval
 * @text Force Gab?
 * @type boolean
 * @on Force this Gab
 * @off Queue this Gab
 * @desc Forced gabs will clear other gabs and display immediately.
 * @default false
 *
 * @arg Override:struct
 * @text Optional Settings
 * @type struct<Override>
 * @desc Change the settings you want to override with this gab.
 * Blank settings will use default Plugin Parameter settings.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GabTextSpriteParty
 * @text Gab: Text + Map Sprite (Party)
 * @desc Show a Gab Window with the specified settings.
 * Pick a party member's sprite graphic to show with it.
 * 
 * @arg Text:json
 * @text Text
 * @type note
 * @desc The text to be shown in the Gab Window.
 * @default "Hello!"
 * 
 * @arg ID:num
 * @text Party Member Index
 * @type number
 * @desc This is the index of the party member you want the map
 * sprite of. Index values start at 0.
 * @default 0
 * 
 * @arg ForceGab:eval
 * @text Force Gab?
 * @type boolean
 * @on Force this Gab
 * @off Queue this Gab
 * @desc Forced gabs will clear other gabs and display immediately.
 * @default false
 *
 * @arg Override:struct
 * @text Optional Settings
 * @type struct<Override>
 * @desc Change the settings you want to override with this gab.
 * Blank settings will use default Plugin Parameter settings.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GabTextSvActorAny
 * @text Gab: Text + Sideview Actor (Any)
 * @desc Show a Gab Window with the specified settings.
 * Any Sideview Actor can be displayed next to text.
 * 
 * @arg Text:json
 * @text Text
 * @type note
 * @desc The text to be shown in the Gab Window.
 * @default "Hello!"
 * 
 * @arg Filename:str
 * @text Filename
 * @type file
 * @dir img/sv_actors/
 * @desc The filename of the Sideview Actor graphic to use.
 * @default Actor1_1
 * 
 * @arg ForceGab:eval
 * @text Force Gab?
 * @type boolean
 * @on Force this Gab
 * @off Queue this Gab
 * @desc Forced gabs will clear other gabs and display immediately.
 * @default false
 *
 * @arg Override:struct
 * @text Optional Settings
 * @type struct<Override>
 * @desc Change the settings you want to override with this gab.
 * Blank settings will use default Plugin Parameter settings.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GabTextSvActorActor
 * @text Gab: Text + Sideview Actor (Actor)
 * @desc Show a Gab Window with the specified settings.
 * Pick an actor's sideview graphic to show with it.
 * 
 * @arg Text:json
 * @text Text
 * @type note
 * @desc The text to be shown in the Gab Window.
 * @default "Hello!"
 * 
 * @arg ID:num
 * @text Actor ID
 * @type actor
 * @desc This is the ID of the actor you want the sideview graphic of.
 * @default 1
 * 
 * @arg ForceGab:eval
 * @text Force Gab?
 * @type boolean
 * @on Force this Gab
 * @off Queue this Gab
 * @desc Forced gabs will clear other gabs and display immediately.
 * @default false
 *
 * @arg Override:struct
 * @text Optional Settings
 * @type struct<Override>
 * @desc Change the settings you want to override with this gab.
 * Blank settings will use default Plugin Parameter settings.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GabTextSvActorParty
 * @text Gab: Text + Sideview Actor (Party)
 * @desc Show a Gab Window with the specified settings.
 * Pick a party member's sideview graphic to show with it.
 * 
 * @arg Text:json
 * @text Text
 * @type note
 * @desc The text to be shown in the Gab Window.
 * @default "Hello!"
 * 
 * @arg ID:num
 * @text Party Member Index
 * @type number
 * @desc This is the index of the party member you want the
 * sideview graphic of. Index values start at 0.
 * @default 0
 * 
 * @arg ForceGab:eval
 * @text Force Gab?
 * @type boolean
 * @on Force this Gab
 * @off Queue this Gab
 * @desc Forced gabs will clear other gabs and display immediately.
 * @default false
 *
 * @arg Override:struct
 * @text Optional Settings
 * @type struct<Override>
 * @desc Change the settings you want to override with this gab.
 * Blank settings will use default Plugin Parameter settings.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GabTextPicture
 * @text Gab: Text + Picture
 * @desc Show a Gab Window with the specified settings.
 * Any picture graphic can be displayed next to text.
 * 
 * @arg Text:json
 * @text Text
 * @type note
 * @desc The text to be shown in the Gab Window.
 * @default "Hello!"
 * 
 * @arg Filename:str
 * @text Filename
 * @type file
 * @dir img/pictures/
 * @desc The filename of the face graphic to use.
 * @default Untitled
 * 
 * @arg Stretched:eval
 * @text Stretch Picture
 * @type boolean
 * @on Stretch Picture
 * @off Don't Stretch
 * @desc Stretch the picture to fit the window?
 * @default true
 * 
 * @arg ForceGab:eval
 * @text Force Gab?
 * @type boolean
 * @on Force this Gab
 * @off Queue this Gab
 * @desc Forced gabs will clear other gabs and display immediately.
 * @default false
 *
 * @arg Override:struct
 * @text Optional Settings
 * @type struct<Override>
 * @desc Change the settings you want to override with this gab.
 * Blank settings will use default Plugin Parameter settings.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_System
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 * 
 * @command ClearGab
 * @text System: Clear Gabs
 * @desc Clears out the current Gab and any which are queued.
 *
 * @ --------------------------------------------------------------------------
 * 
 * @command WaitForGab
 * @text System: Wait For Gab Completion
 * @desc Causes the game to wait until all gabs are finished playing.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
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
 * @param GabWindow
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param General:struct
 * @text General Settings
 * @type struct<General>
 * @desc General settings regarding the Gab Window.
 * @default {"General":"","AntiRepeat:eval":"true","CenterGraphics:eval":"true","Fade":"","FadeRate:num":"16","FadeDirection:str":"None","Font":"","GabFontName:str":"","GabFontSize:num":"28","Sprites":"","Character":"","CharacterXPos:num":"36","CharacterYPos:num":"60","SVActor":"","SvActorXPos:num":"44","SvActorYPos:num":"68","Waiting":"","BaseWaitTime:num":"90","TimePerCharacter:num":"4","JavaScript":"","OnDisplayJS:func":"\"// Declare Constants\\nconst gabWindow = this;\\nconst lastGab = arguments[0];\\n\\n// Perform Actions\\n\"","OnFinishJS:func":"\"// Declare Constants\\nconst gabWindow = this;\\nconst lastGab = arguments[0];\\n\\n// Perform Actions\\n\""}
 *
 * @param Map:struct
 * @text Map Settings
 * @type struct<Map>
 * @desc Settings related to the gab window while in the map scene.
 * @default {"MapYLocation:num":"72","MapDimColor1:str":"rgba(0, 0, 0, 0.6)","MapDimColor2:str":"rgba(0, 0, 0, 0)"}
 *
 * @param Battle:struct
 * @text Battle Settings
 * @type struct<Battle>
 * @desc Settings related to the gab window while in the battle scene.
 * @default {"BattleYLocation:num":"108","BattleDimColor1:str":"rgba(0, 0, 0, 0.6)","BattleDimColor2:str":"rgba(0, 0, 0, 0)"}
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
/* ----------------------------------------------------------------------------
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 * 
 * @param General
 * 
 * @param AntiRepeat:eval
 * @text Anti-Repeat
 * @parent General
 * @type boolean
 * @on Anti-Repeat
 * @off Allow Repeat
 * @desc Stops gabs of the same settings from being queued.
 * @default true
 * 
 * @param CenterGraphics:eval
 * @text Center Graphics
 * @parent General
 * @type boolean
 * @on Center Graphics
 * @off Align Top
 * @desc Centers graphics vertically if there are multiple lines.
 * @default true
 * 
 * @param Fade
 * 
 * @param FadeRate:num
 * @text Fade Rate
 * @parent Fade
 * @type number
 * @min 1
 * @desc How fast the gab window fades away.
 * Default: 16
 * @default 16
 * 
 * @param FadeDirection:str
 * @text Fade Direction
 * @parent Fade
 * @type select
 * @option None
 * @option Up
 * @option Down
 * @option Left
 * @option Right
 * @desc The direction to move the window in when fading out.
 * @default None
 *
 * @param Font
 * 
 * @param GabFontName:str
 * @text Gab Font Name
 * @parent Font
 * @desc The font name used for the text of the Gab Window
 * Leave empty to use the default game's font.
 * @default 
 * 
 * @param GabFontSize:num
 * @text Gab Font Size
 * @parent Font
 * @type number
 * @min 1
 * @desc The font size used for the text of the Gab Window.
 * Default: 28
 * @default 28
 * 
 * @param Sprites
 * 
 * @param Character
 * @text Character Sprites
 * @parent Sprites
 * 
 * @param CharacterXPos:num
 * @text X Position
 * @parent Character
 * @type number
 * @desc X position of the character.
 * Default: 36
 * @default 36
 * 
 * @param CharacterYPos:num
 * @text Y Position
 * @parent Character
 * @type number
 * @desc Y position of the character.
 * Default: 60
 * @default 60
 * 
 * @param SVActor
 * @text Sideview Sprites
 * @parent Sprites
 * 
 * @param SvActorXPos:num
 * @text X Position
 * @parent SVActor
 * @type number
 * @desc X position of the Sideview Actor.
 * Default: 44
 * @default 44
 * 
 * @param SvActorYPos:num
 * @text Y Position
 * @parent SVActor
 * @type number
 * @desc Y position of the Sideview Actor.
 * Default: 68
 * @default 68
 * 
 * @param Waiting
 * 
 * @param BaseWaitTime:num
 * @text Base Wait Time
 * @parent Waiting
 * @type number
 * @min 0
 * @desc Minimum frames the Gab Window stays visible.
 * Default: 90
 * @default 90
 * 
 * @param TimePerCharacter:num
 * @text Time Per Character
 * @parent Waiting
 * @type number
 * @min 0
 * @desc Frames added per Text Character.
 * Default: 4
 * @default 4
 * 
 * @param JavaScript
 *
 * @param OnDisplayJS:func
 * @text JS: On Display
 * @parent OnDisplay
 * @type note
 * @desc Runs this code once this Gab Window shows up.
 * This applies to every single gab.
 * @default "// Declare Constants\nconst gabWindow = this;\nconst lastGab = arguments[0];\n\n// Perform Actions\n"
 *
 * @param OnFinishJS:func
 * @text JS: On Finish
 * @parent OnFinish
 * @type note
 * @desc Runs this code once this Gab Window finishes.
 * This applies to every single gab.
 * @default "// Declare Constants\nconst gabWindow = this;\nconst lastGab = arguments[0];\n\n// Perform Actions\n"
 *
 */
/* ----------------------------------------------------------------------------
 * Map Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Map:
 * 
 * @param MapYLocation:num
 * @type number
 * @text Y Location
 * @desc This is the Y location of the Gab Window.
 * Default: 72
 * @default 72
 * 
 * @param MapDimColor1:str
 * @text Dim Color 1
 * @desc This is the dim color 1 used for maps.
 * Default: rgba(0, 0, 0, 0.6)
 * @default rgba(0, 0, 0, 0.6)
 * 
 * @param MapDimColor2:str
 * @text Dim Color 2
 * @desc This is the dim color 2 used for maps.
 * Default: rgba(0, 0, 0, 0)
 * @default rgba(0, 0, 0, 0)
 *
 */
/* ----------------------------------------------------------------------------
 * Battle Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Battle:
 * 
 * @param BattleYLocation:num
 * @type number
 * @text Y Location
 * @desc This is the Y location of the Gab Window.
 * Default: 108
 * @default 108
 * 
 * @param BattleDimColor1:str
 * @text Dim Color 1
 * @desc This is the dim color 1 used for battles.
 * Default: rgba(0, 0, 0, 0.6)
 * @default rgba(0, 0, 0, 0.6)
 * 
 * @param BattleDimColor2:str
 * @text Dim Color 2
 * @desc This is the dim color 2 used for battles.
 * Default: rgba(0, 0, 0, 0)
 * @default rgba(0, 0, 0, 0)
 *
 */
/* ----------------------------------------------------------------------------
 * Override Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Override:
 * 
 * @param DimColor
 * @text Dim Color
 * 
 * @param DimColor1:str
 * @text Dim Color 1
 * @parent DimColor
 * @desc The dim color 1 to use for this Gab Window.
 * Format: rgba(red, green, blue, alpha)
 * @default 
 * 
 * @param DimColor2:str
 * @text Dim Color 2
 * @parent DimColor
 * @desc The dim color 2 to use for this Gab Window.
 * Format: rgba(red, green, blue, alpha)
 * @default 
 * 
 * @param Fade
 * 
 * @param FadeRate:num
 * @text Fade Rate
 * @parent Fade
 * @type number
 * @desc How fast this Gab Window fades away.
 * @default 
 * 
 * @param FadeDirection:str
 * @text Fade Direction
 * @parent Fade
 * @type select
 * @option None
 * @option Up
 * @option Down
 * @option Left
 * @option Right
 * @desc The direction this Gab Window fades out in.
 * @default 
 *
 * @param Font
 * 
 * @param FontName:str
 * @text Font Name
 * @parent Font
 * @desc The font name to use for this Gab Window.
 * @default 
 * 
 * @param FontSize:num
 * @text Font Size
 * @parent Font
 * @type number
 * @desc The font size to use for this Gab Window.
 * @default 
 * 
 * @param Position
 * 
 * @param YLocation:num
 * @text Y Location
 * @parent Position
 * @type number
 * @desc The Y coordinate this Gab Window will appear in.
 * Ignore if you are using a locked sprite position.
 * @default 
 * 
 * @param ActorID:num
 * @text Actor ID
 * @parent Position
 * @type actor
 * @desc The ID of the actor to display this Gab Window above.
 * For Map/Battle. 
 * @default 0
 * 
 * @param PartyIndex:num
 * @text Party Index
 * @parent ActorID:num
 * @desc Index of the party member to display Gab Window above.
 * For Map/Battle. Index values start at 0. Ignore under 0.
 * @default -1
 * 
 * @param EnemyIndex:num
 * @text Enemy Index
 * @parent Position
 * @desc Index of an enemy battler to display Gab Window above.
 * Battle only. Index values start at 0. Ignore under 0.
 * @default -1
 * 
 * @param EventID:num
 * @text Event ID
 * @parent Position
 * @type number
 * @desc The ID of the event to display this Gab Window above.
 * Map only.
 * @default 0
 *
 * @param OnDisplay
 * @text On Display
 * 
 * @param BypassAntiRepeat:eval
 * @text Bypass Anti-Repeat
 * @parent OnDisplay
 * @type boolean
 * @on Bypass
 * @off Use Anti-Repeat
 * @desc Allows this gab to bypass the Anti-Repeat settings.
 * @default false
 * 
 * @param SoundFilename:str
 * @text Sound Filename
 * @parent OnDisplay
 * @type file
 * @dir audio/se
 * @desc The filename of the SE to play when the Gab Window shows.
 * @default 
 *
 * @param SoundVolume:num
 * @text Volume
 * @parent SoundFilename:str
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param SoundPitch:num
 * @text Pitch
 * @parent SoundFilename:str
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param SoundPan:num
 * @text Pan
 * @parent SoundFilename:str
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param OnDisplayJS:func
 * @text JS: On Display
 * @parent OnDisplay
 * @type note
 * @desc Runs this code once this Gab Window shows up.
 * @default 
 *
 * @param OnFinish
 * @text On Finish
 * 
 * @param GabSwitch:num
 * @text Gab Switch
 * @parent OnFinish
 * @type switch
 * @desc The specified switch will be turned ON when the Gab Window finishes.
 * @default 
 *
 * @param OnFinishJS:func
 * @text JS: On Finish
 * @parent OnFinish
 * @type note
 * @desc Runs this code once this Gab Window finishes.
 * @default 
 * 
 * @param Waiting
 * 
 * @param WaitTime:num
 * @text Wait Time
 * @parent Waiting
 * @type number
 * @desc The number of frames this Gab Window stays visible.
 * @default 
 * 
 * @param TimePerCharacter:num
 * @text Time Per Character
 * @parent Waiting
 * @type number
 * @desc Frames added per Text Character in this Gab Window.
 * @default 
 *
 */
//=============================================================================

const _0x3e2041=_0x32f0;(function(_0x12e57a,_0x52db92){const _0x2ed24b=_0x32f0,_0x2475a5=_0x12e57a();while(!![]){try{const _0x287dc4=parseInt(_0x2ed24b(0x180))/0x1*(parseInt(_0x2ed24b(0x24d))/0x2)+-parseInt(_0x2ed24b(0x1f2))/0x3*(-parseInt(_0x2ed24b(0x247))/0x4)+parseInt(_0x2ed24b(0x199))/0x5*(parseInt(_0x2ed24b(0x1a2))/0x6)+parseInt(_0x2ed24b(0x20c))/0x7*(parseInt(_0x2ed24b(0x197))/0x8)+-parseInt(_0x2ed24b(0x18f))/0x9+parseInt(_0x2ed24b(0x26a))/0xa*(parseInt(_0x2ed24b(0x1ee))/0xb)+-parseInt(_0x2ed24b(0x1b1))/0xc;if(_0x287dc4===_0x52db92)break;else _0x2475a5['push'](_0x2475a5['shift']());}catch(_0xfa7f6d){_0x2475a5['push'](_0x2475a5['shift']());}}}(_0x2f37,0x96dd3));var label=_0x3e2041(0x1aa),tier=tier||0x0,dependencies=[],pluginData=$plugins['filter'](function(_0x36d3c6){const _0x34c4d9=_0x3e2041;return _0x36d3c6[_0x34c4d9(0x1bf)]&&_0x36d3c6[_0x34c4d9(0x1f6)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0x3e2041(0x207)]=VisuMZ[label][_0x3e2041(0x207)]||{},VisuMZ['ConvertParams']=function(_0x398de3,_0x443da4){const _0x5a7b9d=_0x3e2041;for(const _0x538b0a in _0x443da4){if(_0x538b0a[_0x5a7b9d(0x239)](/(.*):(.*)/i)){const _0x1d6d8f=String(RegExp['$1']),_0x34a380=String(RegExp['$2'])[_0x5a7b9d(0x1c3)]()[_0x5a7b9d(0x22b)]();let _0x514263,_0x4b7f42,_0xcb01bc;switch(_0x34a380){case _0x5a7b9d(0x17e):_0x514263=_0x443da4[_0x538b0a]!==''?Number(_0x443da4[_0x538b0a]):0x0;break;case'ARRAYNUM':_0x4b7f42=_0x443da4[_0x538b0a]!==''?JSON[_0x5a7b9d(0x24e)](_0x443da4[_0x538b0a]):[],_0x514263=_0x4b7f42['map'](_0x2f44b7=>Number(_0x2f44b7));break;case _0x5a7b9d(0x200):_0x514263=_0x443da4[_0x538b0a]!==''?eval(_0x443da4[_0x538b0a]):null;break;case _0x5a7b9d(0x24b):_0x4b7f42=_0x443da4[_0x538b0a]!==''?JSON[_0x5a7b9d(0x24e)](_0x443da4[_0x538b0a]):[],_0x514263=_0x4b7f42['map'](_0x5ecee6=>eval(_0x5ecee6));break;case _0x5a7b9d(0x244):_0x514263=_0x443da4[_0x538b0a]!==''?JSON[_0x5a7b9d(0x24e)](_0x443da4[_0x538b0a]):'';break;case'ARRAYJSON':_0x4b7f42=_0x443da4[_0x538b0a]!==''?JSON['parse'](_0x443da4[_0x538b0a]):[],_0x514263=_0x4b7f42['map'](_0x2387d7=>JSON['parse'](_0x2387d7));break;case _0x5a7b9d(0x27a):_0x514263=_0x443da4[_0x538b0a]!==''?new Function(JSON[_0x5a7b9d(0x24e)](_0x443da4[_0x538b0a])):new Function('return\x200');break;case'ARRAYFUNC':_0x4b7f42=_0x443da4[_0x538b0a]!==''?JSON[_0x5a7b9d(0x24e)](_0x443da4[_0x538b0a]):[],_0x514263=_0x4b7f42[_0x5a7b9d(0x204)](_0x152e47=>new Function(JSON['parse'](_0x152e47)));break;case _0x5a7b9d(0x195):_0x514263=_0x443da4[_0x538b0a]!==''?String(_0x443da4[_0x538b0a]):'';break;case _0x5a7b9d(0x1a6):_0x4b7f42=_0x443da4[_0x538b0a]!==''?JSON['parse'](_0x443da4[_0x538b0a]):[],_0x514263=_0x4b7f42['map'](_0xfaaed2=>String(_0xfaaed2));break;case _0x5a7b9d(0x189):_0xcb01bc=_0x443da4[_0x538b0a]!==''?JSON['parse'](_0x443da4[_0x538b0a]):{},_0x514263=VisuMZ['ConvertParams']({},_0xcb01bc);break;case'ARRAYSTRUCT':_0x4b7f42=_0x443da4[_0x538b0a]!==''?JSON[_0x5a7b9d(0x24e)](_0x443da4[_0x538b0a]):[],_0x514263=_0x4b7f42[_0x5a7b9d(0x204)](_0x9ec270=>VisuMZ[_0x5a7b9d(0x243)]({},JSON['parse'](_0x9ec270)));break;default:continue;}_0x398de3[_0x1d6d8f]=_0x514263;}}return _0x398de3;},(_0x1a2e6e=>{const _0x40414e=_0x3e2041,_0x59ef4c=_0x1a2e6e[_0x40414e(0x253)];for(const _0x44050e of dependencies){if(!Imported[_0x44050e]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x40414e(0x19f)](_0x59ef4c,_0x44050e)),SceneManager[_0x40414e(0x1a9)]();break;}}const _0x41ea8c=_0x1a2e6e[_0x40414e(0x1f6)];if(_0x41ea8c['match'](/\[Version[ ](.*?)\]/i)){const _0x2015aa=Number(RegExp['$1']);_0x2015aa!==VisuMZ[label][_0x40414e(0x252)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x40414e(0x19f)](_0x59ef4c,_0x2015aa)),SceneManager[_0x40414e(0x1a9)]());}if(_0x41ea8c[_0x40414e(0x239)](/\[Tier[ ](\d+)\]/i)){const _0x3cf81d=Number(RegExp['$1']);_0x3cf81d<tier?(alert(_0x40414e(0x236)[_0x40414e(0x19f)](_0x59ef4c,_0x3cf81d,tier)),SceneManager[_0x40414e(0x1a9)]()):tier=Math['max'](_0x3cf81d,tier);}VisuMZ[_0x40414e(0x243)](VisuMZ[label][_0x40414e(0x207)],_0x1a2e6e[_0x40414e(0x272)]);})(pluginData),PluginManager[_0x3e2041(0x1ca)](pluginData['name'],_0x3e2041(0x226),_0x55ae38=>{const _0x298540=_0x3e2041;VisuMZ['ConvertParams'](_0x55ae38,_0x55ae38);const _0x44ca68=SceneManager[_0x298540(0x186)];if(!_0x44ca68[_0x298540(0x1e2)])return;_0x55ae38[_0x298540(0x1cc)]?_0x44ca68['forceGabWindow'](_0x55ae38):_0x44ca68[_0x298540(0x1c7)](_0x55ae38);}),PluginManager[_0x3e2041(0x1ca)](pluginData[_0x3e2041(0x253)],_0x3e2041(0x1ea),_0x2c2211=>{const _0x7c47c6=_0x3e2041;VisuMZ[_0x7c47c6(0x243)](_0x2c2211,_0x2c2211);const _0x444eeb=SceneManager[_0x7c47c6(0x186)];if(!_0x444eeb[_0x7c47c6(0x1e2)])return;_0x2c2211['mode']=_0x7c47c6(0x268),_0x2c2211[_0x7c47c6(0x1cc)]?_0x444eeb[_0x7c47c6(0x218)](_0x2c2211):_0x444eeb[_0x7c47c6(0x1c7)](_0x2c2211);}),PluginManager[_0x3e2041(0x1ca)](pluginData[_0x3e2041(0x253)],'GabTextFaceActor',_0x1f74e9=>{const _0x74b871=_0x3e2041;VisuMZ[_0x74b871(0x243)](_0x1f74e9,_0x1f74e9);const _0x137d5b=SceneManager[_0x74b871(0x186)];if(!_0x137d5b[_0x74b871(0x1e2)])return;_0x1f74e9['mode']='face';const _0x1fada4=$gameActors[_0x74b871(0x1d8)](_0x1f74e9['ID']);_0x1fada4?(_0x1f74e9[_0x74b871(0x1d9)]=_0x1fada4[_0x74b871(0x258)](),_0x1f74e9['ID']=_0x1fada4[_0x74b871(0x22d)]()):_0x1f74e9['mode']=_0x74b871(0x1dd),_0x1f74e9[_0x74b871(0x1cc)]?_0x137d5b['forceGabWindow'](_0x1f74e9):_0x137d5b[_0x74b871(0x1c7)](_0x1f74e9);}),PluginManager[_0x3e2041(0x1ca)](pluginData['name'],_0x3e2041(0x1af),_0x2db157=>{const _0x4a6751=_0x3e2041;VisuMZ[_0x4a6751(0x243)](_0x2db157,_0x2db157);const _0x57ae50=SceneManager[_0x4a6751(0x186)];if(!_0x57ae50[_0x4a6751(0x1e2)])return;_0x2db157['mode']='face';const _0x556939=$gameParty[_0x4a6751(0x1e9)]()[_0x2db157['ID']];_0x556939?(_0x2db157[_0x4a6751(0x1d9)]=_0x556939[_0x4a6751(0x258)](),_0x2db157['ID']=_0x556939[_0x4a6751(0x22d)]()):_0x2db157[_0x4a6751(0x1be)]=_0x4a6751(0x1dd),_0x2db157['ForceGab']?_0x57ae50[_0x4a6751(0x218)](_0x2db157):_0x57ae50['startGabWindow'](_0x2db157);}),PluginManager['registerCommand'](pluginData[_0x3e2041(0x253)],_0x3e2041(0x237),_0x5c8fc2=>{const _0x3d5db8=_0x3e2041;VisuMZ[_0x3d5db8(0x243)](_0x5c8fc2,_0x5c8fc2);const _0x4346c9=SceneManager[_0x3d5db8(0x186)];if(!_0x4346c9['_gabWindow'])return;_0x5c8fc2[_0x3d5db8(0x1be)]=_0x3d5db8(0x182),_0x5c8fc2[_0x3d5db8(0x1cc)]?_0x4346c9[_0x3d5db8(0x218)](_0x5c8fc2):_0x4346c9[_0x3d5db8(0x1c7)](_0x5c8fc2);}),PluginManager['registerCommand'](pluginData[_0x3e2041(0x253)],'GabTextSpriteActor',_0x339584=>{const _0x158707=_0x3e2041;VisuMZ[_0x158707(0x243)](_0x339584,_0x339584);const _0x4de3f0=SceneManager[_0x158707(0x186)];if(!_0x4de3f0[_0x158707(0x1e2)])return;_0x339584['mode']=_0x158707(0x182);const _0x563c2d=$gameActors[_0x158707(0x1d8)](_0x339584['ID']);_0x563c2d?(_0x339584[_0x158707(0x1d9)]=_0x563c2d['characterName'](),_0x339584['ID']=_0x563c2d[_0x158707(0x20e)]()):_0x339584[_0x158707(0x1be)]=_0x158707(0x1dd),_0x339584[_0x158707(0x1cc)]?_0x4de3f0[_0x158707(0x218)](_0x339584):_0x4de3f0[_0x158707(0x1c7)](_0x339584);}),PluginManager['registerCommand'](pluginData[_0x3e2041(0x253)],_0x3e2041(0x205),_0xfd6c18=>{const _0x537b7b=_0x3e2041;VisuMZ[_0x537b7b(0x243)](_0xfd6c18,_0xfd6c18);const _0x5e674c=SceneManager['_scene'];if(!_0x5e674c['_gabWindow'])return;_0xfd6c18[_0x537b7b(0x1be)]=_0x537b7b(0x182);const _0x5e0aeb=$gameParty[_0x537b7b(0x1e9)]()[_0xfd6c18['ID']];_0x5e0aeb?(_0xfd6c18[_0x537b7b(0x1d9)]=_0x5e0aeb[_0x537b7b(0x16c)](),_0xfd6c18['ID']=_0x5e0aeb['characterIndex']()):_0xfd6c18['mode']=_0x537b7b(0x1dd),_0xfd6c18[_0x537b7b(0x1cc)]?_0x5e674c[_0x537b7b(0x218)](_0xfd6c18):_0x5e674c[_0x537b7b(0x1c7)](_0xfd6c18);}),PluginManager[_0x3e2041(0x1ca)](pluginData['name'],'GabTextSvActorAny',_0x34cc33=>{const _0xa776c3=_0x3e2041;VisuMZ['ConvertParams'](_0x34cc33,_0x34cc33);const _0x1128a1=SceneManager[_0xa776c3(0x186)];if(!_0x1128a1[_0xa776c3(0x1e2)])return;_0x34cc33[_0xa776c3(0x1be)]=_0xa776c3(0x23f),_0x34cc33['ForceGab']?_0x1128a1['forceGabWindow'](_0x34cc33):_0x1128a1[_0xa776c3(0x1c7)](_0x34cc33);}),PluginManager[_0x3e2041(0x1ca)](pluginData['name'],_0x3e2041(0x216),_0x40abc0=>{const _0x2953b2=_0x3e2041;VisuMZ[_0x2953b2(0x243)](_0x40abc0,_0x40abc0);const _0x5836f2=SceneManager[_0x2953b2(0x186)];if(!_0x5836f2[_0x2953b2(0x1e2)])return;_0x40abc0[_0x2953b2(0x1be)]=_0x2953b2(0x23f);const _0x52ab76=$gameActors[_0x2953b2(0x1d8)](_0x40abc0['ID']);_0x52ab76?_0x40abc0[_0x2953b2(0x1d9)]=_0x52ab76[_0x2953b2(0x1db)]():_0x40abc0['mode']='none',_0x40abc0['ForceGab']?_0x5836f2[_0x2953b2(0x218)](_0x40abc0):_0x5836f2[_0x2953b2(0x1c7)](_0x40abc0);}),PluginManager[_0x3e2041(0x1ca)](pluginData[_0x3e2041(0x253)],_0x3e2041(0x19b),_0x4654fe=>{const _0x4ea034=_0x3e2041;VisuMZ[_0x4ea034(0x243)](_0x4654fe,_0x4654fe);const _0x479ea2=SceneManager[_0x4ea034(0x186)];if(!_0x479ea2[_0x4ea034(0x1e2)])return;_0x4654fe['mode']=_0x4ea034(0x23f);const _0x2908b1=$gameParty[_0x4ea034(0x1e9)]()[_0x4654fe['ID']];_0x2908b1?_0x4654fe['Filename']=_0x2908b1['battlerName']():_0x4654fe[_0x4ea034(0x1be)]=_0x4ea034(0x1dd),_0x4654fe['ForceGab']?_0x479ea2[_0x4ea034(0x218)](_0x4654fe):_0x479ea2[_0x4ea034(0x1c7)](_0x4654fe);}),PluginManager['registerCommand'](pluginData['name'],_0x3e2041(0x277),_0x5ca7f6=>{const _0x24e8e2=_0x3e2041;VisuMZ[_0x24e8e2(0x243)](_0x5ca7f6,_0x5ca7f6);const _0x1dfbdb=SceneManager[_0x24e8e2(0x186)];if(!_0x1dfbdb[_0x24e8e2(0x1e2)])return;_0x5ca7f6[_0x24e8e2(0x1be)]='picture',_0x5ca7f6[_0x24e8e2(0x1cc)]?_0x1dfbdb['forceGabWindow'](_0x5ca7f6):_0x1dfbdb[_0x24e8e2(0x1c7)](_0x5ca7f6);}),PluginManager[_0x3e2041(0x1ca)](pluginData[_0x3e2041(0x253)],_0x3e2041(0x1bb),_0xa65ea7=>{const _0x138d9d=_0x3e2041,_0x5e006a=$gameTemp[_0x138d9d(0x271)]();_0x5e006a&&_0x5e006a[_0x138d9d(0x1ec)]();}),PluginManager[_0x3e2041(0x1ca)](pluginData['name'],'ClearGab',_0xeb8a20=>{const _0x53cecb=_0x3e2041,_0x219366=SceneManager['_scene'];if(_0x219366[_0x53cecb(0x1e2)])_0x219366[_0x53cecb(0x1f9)]();}),VisuMZ[_0x3e2041(0x1aa)][_0x3e2041(0x263)]=SceneManager[_0x3e2041(0x256)],SceneManager[_0x3e2041(0x256)]=function(_0x1237b4){const _0x35e9af=_0x3e2041;this[_0x35e9af(0x22c)](_0x1237b4)&&this['_scene'][_0x35e9af(0x1e2)]['storeGabs'](),VisuMZ[_0x35e9af(0x1aa)]['SceneManager_push'][_0x35e9af(0x17f)](this,_0x1237b4);},SceneManager[_0x3e2041(0x22c)]=function(_0x251103){const _0x2bb546=_0x3e2041;if(!this[_0x2bb546(0x211)]()&&!this['isSceneBattle']())return![];if(_0x251103===Scene_Map)return!this[_0x2bb546(0x211)]();else{if(_0x251103===Scene_Battle)return this[_0x2bb546(0x211)]();}return!![];},SceneManager['isSceneBattle']=function(){const _0x57d0d6=_0x3e2041;return this[_0x57d0d6(0x186)]&&this['_scene']['constructor']===Scene_Battle;},SceneManager[_0x3e2041(0x211)]=function(){const _0x5b6b07=_0x3e2041;return this[_0x5b6b07(0x186)]instanceof Scene_Map;},Game_Temp['prototype']['setLastPluginCommandInterpreter']=function(_0x160eb0){this['_lastPluginCommandInterpreter']=_0x160eb0;},Game_Temp[_0x3e2041(0x21f)][_0x3e2041(0x271)]=function(){return this['_lastPluginCommandInterpreter'];},VisuMZ[_0x3e2041(0x1aa)][_0x3e2041(0x266)]=Game_Interpreter[_0x3e2041(0x21f)][_0x3e2041(0x231)],Game_Interpreter['prototype'][_0x3e2041(0x231)]=function(_0x5b7d51){const _0x30ac8b=_0x3e2041;return $gameTemp[_0x30ac8b(0x25f)](this),VisuMZ[_0x30ac8b(0x1aa)][_0x30ac8b(0x266)]['call'](this,_0x5b7d51);},Game_Interpreter['prototype'][_0x3e2041(0x1ec)]=function(){const _0x5e6275=_0x3e2041;this[_0x5e6275(0x171)](_0x5e6275(0x175));},VisuMZ['GabWindow']['Game_Interpreter_updateWaitMode']=Game_Interpreter[_0x3e2041(0x21f)]['updateWaitMode'],Game_Interpreter[_0x3e2041(0x21f)]['updateWaitMode']=function(){const _0x168dba=_0x3e2041;return this[_0x168dba(0x178)]==='gab'?this[_0x168dba(0x1ad)]():VisuMZ[_0x168dba(0x1aa)]['Game_Interpreter_updateWaitMode']['call'](this);},Game_Interpreter[_0x3e2041(0x21f)]['isGabRunning']=function(){const _0x5dff40=_0x3e2041,_0x43492f=SceneManager[_0x5dff40(0x186)],_0x1e0791=_0x43492f[_0x5dff40(0x1e2)];return _0x1e0791?_0x1e0791[_0x5dff40(0x214)][_0x5dff40(0x185)]>0x0||_0x1e0791[_0x5dff40(0x170)]:![];},Scene_Base['prototype'][_0x3e2041(0x188)]=function(_0x4a04ca){const _0x155b0b=_0x3e2041;this[_0x155b0b(0x1e2)]=new Window_Gab(_0x4a04ca),this[_0x155b0b(0x19c)](this[_0x155b0b(0x1e2)]);},Scene_Base[_0x3e2041(0x21f)][_0x3e2041(0x1c7)]=function(_0x1c2c81){const _0x78b8b1=_0x3e2041;this[_0x78b8b1(0x1e2)][_0x78b8b1(0x196)](_0x1c2c81);},Scene_Base[_0x3e2041(0x21f)]['forceGabWindow']=function(_0x9cae42){const _0xc1f11a=_0x3e2041;this[_0xc1f11a(0x1e2)][_0xc1f11a(0x1c2)](_0x9cae42);},Scene_Base[_0x3e2041(0x21f)][_0x3e2041(0x1f9)]=function(){const _0x45cb20=_0x3e2041;this[_0x45cb20(0x1e2)][_0x45cb20(0x1cd)]();},VisuMZ[_0x3e2041(0x1aa)][_0x3e2041(0x21b)]=Scene_Map['prototype']['createAllWindows'],Scene_Map['prototype']['createAllWindows']=function(){const _0x439f47=_0x3e2041;VisuMZ[_0x439f47(0x1aa)][_0x439f47(0x21b)][_0x439f47(0x17f)](this),this['createGabWindow'](![]);},VisuMZ[_0x3e2041(0x1aa)]['Scene_Battle_createAllWindows']=Scene_Battle[_0x3e2041(0x21f)]['createAllWindows'],Scene_Battle[_0x3e2041(0x21f)][_0x3e2041(0x18d)]=function(){const _0x18a5ca=_0x3e2041;VisuMZ[_0x18a5ca(0x1aa)][_0x18a5ca(0x278)]['call'](this),this[_0x18a5ca(0x188)](!![]);},ImageManager['svActorHorzCells']=ImageManager[_0x3e2041(0x181)]||0x9,ImageManager[_0x3e2041(0x19d)]=ImageManager[_0x3e2041(0x19d)]||0x6;!Imported[_0x3e2041(0x20a)]&&(Window_Base[_0x3e2041(0x21f)][_0x3e2041(0x1da)]=function(_0x25a51f,_0x44cd41,_0x5b7f04){const _0xd6ef4a=_0x3e2041,_0x6ce5ad=_0x25a51f['match'](/\$/i),_0x3918f2=ImageManager[_0xd6ef4a(0x1a1)](_0x25a51f),_0x170fee=_0x3918f2[_0xd6ef4a(0x202)]/(_0x6ce5ad?0x1:ImageManager[_0xd6ef4a(0x181)]),_0x50e89e=_0x3918f2[_0xd6ef4a(0x261)]/(_0x6ce5ad?0x1:ImageManager[_0xd6ef4a(0x19d)]),_0x5b3f82=0x0,_0x3f0a1a=0x0;this[_0xd6ef4a(0x1ce)][_0xd6ef4a(0x1cf)](_0x3918f2,_0x5b3f82,_0x3f0a1a,_0x170fee,_0x50e89e,_0x44cd41-_0x170fee/0x2,_0x5b7f04-_0x50e89e);});;function Window_Gab(){const _0x4c8947=_0x3e2041;this[_0x4c8947(0x212)](...arguments);}function _0x2f37(){const _0x2887fc=['fittingHeight','_soundData','drawFace','description','storeGabs','BypassAntiRepeat','clearGabWindow','volume','mainFontFace','clear','playSe','opacity','AntiRepeat','EVAL','GabSwitch','width','MapYLocation','map','GabTextSpriteParty','isRepositionToBattleEnemy','Settings','innerWidth','itemPadding','VisuMZ_1_MainMenuCore','Map','1869HOADeK','_currentMapGab','characterIndex','_stretchPicture','unshift','isSceneMap','initialize','drawBackground','_gabQueue','isVisible','GabTextSvActorActor','event','forceGabWindow','createRect','resetFontSettings','Scene_Map_createAllWindows','setValue','BattleDimColor1','updateFadeOut','prototype','RIGHT','slice','getPictureScale','picture','dimColor2','_fadeRateOverride','GabTextOnly','_lockedToTarget','restoreGabs','reposition','addLoadListener','trim','isStoreGabs','faceIndex','repositionToMapTarget','Override','CharacterXPos','command357','_yLocOverride','shift','LEFT','ceil','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','GabTextSpriteAny','update','match','drawGabGraphic','pan','follower','index','repositionToMapEvent','sv_actor','onDisplayJS','screenX','innerHeight','ConvertParams','JSON','setupLoadGraphic','lineHeight','489920CubqtP','removeLoadingGraphic','processNewGabData','DimColor1','ARRAYEVAL','create','623246iDZQMo','parse','Stretched','_dimColor2Override','checkCurrentGab','version','name','SoundPitch','_currentGab','push','updateFadeIn','faceName','CenterGraphics','toLowerCase','itemHeight','_graphicLoading','EnemyIndex','zoomScale','setLastPluginCommandInterpreter','_fadeDirOverride','height','stringify','SceneManager_push','_eventID','followers','Game_Interpreter_PluginCommand','_currentBattleGab','face','isHideGabWindow','5871530liAjll','drawGabCharacter','min','determineLockToSprite','SvActorXPos','Width','_fontSizeOverride','getLastPluginCommandInterpreter','parameters','_widthOVerride','GabFontName','_jsOnFinish','PartyIndex','GabTextPicture','Scene_Battle_createAllWindows','gradientFillRect','FUNC','OnDisplayJS','onFinish','characterName','drawGabPicture','checheckLastGab','adjustDimensions','_gabRunning','setWaitMode','startCountdown','_enemyIndex','_graphicName','gab','OnFinishJS','_graphicType','_waitMode','repositionNormal','boxHeight','onDisplay','_battle','_jsOnDisplay','NUM','call','2nwWCeb','svActorHorzCells','character','bind','inBattle','length','_scene','_storedBattleGabs','createGabWindow','STRUCT','SoundVolume','actorId','isSceneBattle','createAllWindows','initMembers','9267219HiaBaR','loadNewGabData','adjustWidth','_dimColor1Override','replace','_ignoreMask','STR','addGabData','34512IwSZRH','_graphicBitmap','153745rtrLtR','_lines','GabTextSvActorParty','addChild','svActorVertCells','_actorID','format','fontSize','loadSvActor','174zKGaTg','_storedMapGabs','repositionToTarget','split','ARRAYSTR','TimePerCharacter','isRepositionToActor','exit','GabWindow','_showCount','_waitTimeOverride','isGabRunning','drawGabFace','GabTextFaceParty','findTargetSprite','32200812tWJWIZ','remove','repositionToBattleTarget','onFinishJS','drawGabText','resetTextColor','drawGabSvActor','WaitTime','Text','_widthOverride','WaitForGab','_fontNameOverride','dimColor1','mode','status','FadeDirection','General','forceGabData','toUpperCase','SoundFilename','hide','FontSize','startGabWindow','CharacterYPos','_soundName','registerCommand','updatePadding','ForceGab','clearGabData','contents','blt','_text','FadeRate','_gabLoaded','isAppeared','Battle','isSideView','_graphicIndex','turnOnGabSwitch','actor','Filename','drawSvActor','battlerName','constructor','none','isRepositionToMapEvent','padding','refresh','_tpcOverride','_gabWindow','checkDuplicateGab','drawGabBackground','DimColor2','_victoryPhase','screenY','_gabSwitch','members','GabTextFaceAny','faceWidth','waitForGab','contentsOpacity','22UKfaMP','playSound','BattleYLocation','SvActorYPos','12zmMrdW'];_0x2f37=function(){return _0x2887fc;};return _0x2f37();}function _0x32f0(_0x7f833a,_0x292a52){const _0x2f37ef=_0x2f37();return _0x32f0=function(_0x32f055,_0x314f43){_0x32f055=_0x32f055-0x16b;let _0x6a00c8=_0x2f37ef[_0x32f055];return _0x6a00c8;},_0x32f0(_0x7f833a,_0x292a52);}Window_Gab['prototype']=Object[_0x3e2041(0x24c)](Window_Base[_0x3e2041(0x21f)]),Window_Gab[_0x3e2041(0x21f)][_0x3e2041(0x1dc)]=Window_Gab,Window_Gab[_0x3e2041(0x21f)][_0x3e2041(0x212)]=function(_0x496abd){const _0x27e209=_0x3e2041;this[_0x27e209(0x18e)](_0x496abd);const _0x550da5=this[_0x27e209(0x219)](_0x496abd);this[_0x27e209(0x25c)]=[],Window_Base[_0x27e209(0x21f)][_0x27e209(0x212)][_0x27e209(0x17f)](this,_0x550da5),this[_0x27e209(0x1fc)](),this[_0x27e209(0x228)]();},Window_Gab['prototype'][_0x3e2041(0x18e)]=function(_0x6b4ff3){const _0x13c246=_0x3e2041;this[_0x13c246(0x17c)]=_0x6b4ff3,this['_gabSwitch']=0x0,this[_0x13c246(0x1ab)]=0x0,this[_0x13c246(0x194)]=!![],this[_0x13c246(0x214)]=[],this['_currentGab']=[],this['_gabRunning']=![];},Window_Gab['prototype'][_0x3e2041(0x1cb)]=function(){const _0x10d39c=_0x3e2041;this[_0x10d39c(0x1df)]=0x0;},Window_Gab[_0x3e2041(0x21f)][_0x3e2041(0x1f3)]=function(_0x141498){const _0x44363f=_0x3e2041;return _0x141498*this[_0x44363f(0x25b)]()+this[_0x44363f(0x1df)]*0x2;},Window_Gab[_0x3e2041(0x21f)][_0x3e2041(0x219)]=function(_0x561e72){const _0x1ea4eb=_0x3e2041,_0x48e146=this[_0x1ea4eb(0x1df)];let _0x165ab5=_0x48e146*-0x1,_0x12624c=0x0;const _0x4e2d33=VisuMZ[_0x1ea4eb(0x1aa)][_0x1ea4eb(0x207)];_0x561e72?_0x12624c=_0x4e2d33['Battle'][_0x1ea4eb(0x1f0)]:_0x12624c=_0x4e2d33['Map'][_0x1ea4eb(0x203)];_0x12624c-=this[_0x1ea4eb(0x1df)];let _0x2117a3=Graphics[_0x1ea4eb(0x202)]+_0x48e146*0x2,_0x5ebd98=this['fittingHeight'](0x2);return new Rectangle(_0x165ab5,_0x12624c,_0x2117a3,_0x5ebd98);},Window_Gab[_0x3e2041(0x21f)][_0x3e2041(0x1fc)]=function(){const _0x5e1aef=_0x3e2041;this['_gabLoaded']=![],this[_0x5e1aef(0x1fe)]=0x0,this[_0x5e1aef(0x1ed)]=0x0,this['_text']='',this[_0x5e1aef(0x177)]='none',this['_graphicName']='',this['_graphicIndex']=0x0,this[_0x5e1aef(0x1c9)]='',this[_0x5e1aef(0x1f4)]={'volume':0x5a,'pitch':0x64,'pan':0x0},delete this[_0x5e1aef(0x198)],delete this[_0x5e1aef(0x1bc)],delete this[_0x5e1aef(0x270)],delete this[_0x5e1aef(0x1ac)],delete this[_0x5e1aef(0x1e1)],delete this['_yLocOverride'],delete this[_0x5e1aef(0x273)],delete this[_0x5e1aef(0x192)],delete this[_0x5e1aef(0x250)],delete this[_0x5e1aef(0x17d)];},Window_Gab[_0x3e2041(0x21f)][_0x3e2041(0x21a)]=function(){const _0x17c812=_0x3e2041,_0x1667ad=VisuMZ['GabWindow']['Settings'];this[_0x17c812(0x1ce)]['fontFace']=this['_fontNameOverride']||_0x1667ad[_0x17c812(0x1c1)][_0x17c812(0x274)]||$gameSystem[_0x17c812(0x1fb)](),this['contents'][_0x17c812(0x1a0)]=this[_0x17c812(0x270)]||_0x1667ad[_0x17c812(0x1c1)]['GabFontSize']||0x1c,this[_0x17c812(0x1b6)]();},Window_Gab['prototype'][_0x3e2041(0x238)]=function(){const _0x60e2e8=_0x3e2041;Window_Base[_0x60e2e8(0x21f)]['update']['call'](this);if(this[_0x60e2e8(0x1ed)]>0x0){if(this['_lockedToTarget'])this[_0x60e2e8(0x229)]();}if(this[_0x60e2e8(0x269)]())this[_0x60e2e8(0x1c5)]();else{if(this[_0x60e2e8(0x1d2)]){if(this['_graphicLoading'][_0x60e2e8(0x185)]>0x0)return;this[_0x60e2e8(0x1e0)]();}else{if(this['_showCount']>0x0)this[_0x60e2e8(0x257)](),--this[_0x60e2e8(0x1ab)];else{if(this['contentsOpacity']>0x0)this[_0x60e2e8(0x21e)]();else this['_gabQueue'][_0x60e2e8(0x185)]>0x0?this[_0x60e2e8(0x249)]():(this[_0x60e2e8(0x170)]=![],delete this[_0x60e2e8(0x264)]);}}}},Window_Gab['prototype'][_0x3e2041(0x269)]=function(){const _0x598478=_0x3e2041;if($gameParty[_0x598478(0x184)]()&&BattleManager[_0x598478(0x1e6)])return!![];return![];},Window_Gab[_0x3e2041(0x21f)][_0x3e2041(0x257)]=function(){const _0x52a53b=_0x3e2041;this[_0x52a53b(0x1ed)]+=this['_fadeRateOverride']||VisuMZ[_0x52a53b(0x1aa)][_0x52a53b(0x207)]['General'][_0x52a53b(0x1d1)];},Window_Gab[_0x3e2041(0x21f)][_0x3e2041(0x21e)]=function(){const _0x14cace=_0x3e2041,_0x13fe50=this['_fadeRateOverride']||VisuMZ['GabWindow'][_0x14cace(0x207)]['General'][_0x14cace(0x1d1)],_0x331bff=this[_0x14cace(0x260)]||VisuMZ[_0x14cace(0x1aa)][_0x14cace(0x207)][_0x14cace(0x1c1)][_0x14cace(0x1c0)],_0x5d531d=this['contentsOpacity'];this['contentsOpacity']-=_0x13fe50;switch(_0x331bff['toUpperCase']()[_0x14cace(0x22b)]()){case'UP':this['y']-=_0x13fe50;break;case'DOWN':this['y']+=_0x13fe50;break;case _0x14cace(0x234):this['x']-=_0x13fe50;break;case _0x14cace(0x220):this['x']+=_0x13fe50;break;}if(this['contentsOpacity']>0x0)return;if(_0x5d531d>0x0)this[_0x14cace(0x16b)]();},Window_Gab[_0x3e2041(0x21f)][_0x3e2041(0x16b)]=function(){const _0x1e47fd=_0x3e2041;this[_0x1e47fd(0x227)]=null,this[_0x1e47fd(0x1d7)](),this[_0x1e47fd(0x1b4)]();},Window_Gab['prototype']['turnOnGabSwitch']=function(){const _0x92d6a4=_0x3e2041;$gameSwitches[_0x92d6a4(0x21c)](this[_0x92d6a4(0x1e8)],!![]),this['_gabSwitch']=0x0;},Window_Gab[_0x3e2041(0x21f)][_0x3e2041(0x1b4)]=function(){const _0x5bd47c=_0x3e2041;if(this[_0x5bd47c(0x275)])this['_jsOnFinish'][_0x5bd47c(0x17f)](this);delete this['_jsOnFinish'];const _0x3436ef=VisuMZ[_0x5bd47c(0x1aa)]['Settings'][_0x5bd47c(0x1c1)];if(_0x3436ef['OnFinishJS'])_0x3436ef[_0x5bd47c(0x176)][_0x5bd47c(0x17f)](this,this[_0x5bd47c(0x255)]);},Window_Gab['prototype'][_0x3e2041(0x196)]=function(_0x54805c){const _0x1bca1f=_0x3e2041;if(!_0x54805c)return;if(this[_0x1bca1f(0x1e3)](_0x54805c))return;this['_gabQueue'][_0x1bca1f(0x256)](_0x54805c);},Window_Gab['prototype']['forceGabData']=function(_0x7bd22f){const _0x52cc1a=_0x3e2041;if(!_0x7bd22f)return;this[_0x52cc1a(0x1cd)](),this['_gabQueue'][_0x52cc1a(0x256)](_0x7bd22f);},Window_Gab['prototype']['clearGabData']=function(){const _0x523e5f=_0x3e2041;this[_0x523e5f(0x214)]=[],this[_0x523e5f(0x255)]=[],this[_0x523e5f(0x1ab)]=0x0;},Window_Gab[_0x3e2041(0x21f)]['checkDuplicateGab']=function(_0x2232db){const _0x2e3fed=_0x3e2041;if(!VisuMZ[_0x2e3fed(0x1aa)][_0x2e3fed(0x207)][_0x2e3fed(0x1c1)][_0x2e3fed(0x1ff)])return![];const _0x3f7b4a=_0x2232db['Override'];if(_0x3f7b4a&&_0x3f7b4a[_0x2e3fed(0x1f8)])return![];if(this[_0x2e3fed(0x251)](_0x2232db))return!![];if(this['checheckLastGab'](_0x2232db))return!![];return![];},Window_Gab[_0x3e2041(0x21f)][_0x3e2041(0x251)]=function(_0x3fd5ad){const _0x135734=_0x3e2041;return JSON[_0x135734(0x262)](this[_0x135734(0x255)])===JSON[_0x135734(0x262)](_0x3fd5ad);},Window_Gab['prototype'][_0x3e2041(0x16e)]=function(_0x526018){const _0x6f6830=_0x3e2041;this[_0x6f6830(0x214)]=this[_0x6f6830(0x214)]||[];for(const _0x1eaffe of this[_0x6f6830(0x214)]){const _0x313b6c=this[_0x6f6830(0x214)][this[_0x6f6830(0x214)]['length']-0x1]||{};if(JSON[_0x6f6830(0x262)](_0x313b6c)===JSON[_0x6f6830(0x262)](_0x526018))return!![];}return![];},Window_Gab['prototype'][_0x3e2041(0x249)]=function(){const _0x58738e=_0x3e2041,_0x4dd51e=this[_0x58738e(0x214)][_0x58738e(0x233)]();this[_0x58738e(0x170)]=!![],this[_0x58738e(0x255)]=_0x4dd51e,this[_0x58738e(0x190)](_0x4dd51e),this[_0x58738e(0x245)](),this[_0x58738e(0x1d2)]=!![];},Window_Gab['prototype']['loadNewGabData']=function(_0xf9fe9){const _0x35f1b3=_0x3e2041;this[_0x35f1b3(0x1d0)]=_0xf9fe9[_0x35f1b3(0x1b9)]||'',this[_0x35f1b3(0x19a)]=this[_0x35f1b3(0x1d0)][_0x35f1b3(0x1a5)](/[\r\n]+/)[_0x35f1b3(0x185)],this['_graphicType']=_0xf9fe9[_0x35f1b3(0x1be)]||_0x35f1b3(0x1dd),this[_0x35f1b3(0x174)]=_0xf9fe9[_0x35f1b3(0x1d9)]||'',this[_0x35f1b3(0x1d6)]=_0xf9fe9['ID']||0x0,this['_stretchPicture']=_0xf9fe9[_0x35f1b3(0x24f)]||![];const _0x220c16=_0xf9fe9[_0x35f1b3(0x22f)]||{};this[_0x35f1b3(0x1c9)]=_0x220c16[_0x35f1b3(0x1c4)]||'',this['_jsOnDisplay']=_0x220c16[_0x35f1b3(0x27b)]||null,this[_0x35f1b3(0x1f4)]={'volume':_0x220c16[_0x35f1b3(0x18a)]??0x5a,'pitch':_0x220c16[_0x35f1b3(0x254)]??0x64,'pan':_0x220c16['SoundPan']??0x0},this['_gabSwitch']=_0x220c16[_0x35f1b3(0x201)]||0x0,this[_0x35f1b3(0x275)]=_0x220c16['OnFinishJS']||null,this[_0x35f1b3(0x1bc)]=_0x220c16['FontName'],this[_0x35f1b3(0x270)]=_0x220c16[_0x35f1b3(0x1c6)],this['_waitTimeOverride']=_0x220c16[_0x35f1b3(0x1b8)],this['_tpcOverride']=_0x220c16[_0x35f1b3(0x1a7)],this[_0x35f1b3(0x225)]=_0x220c16[_0x35f1b3(0x1d1)],this['_fadeDirOverride']=_0x220c16[_0x35f1b3(0x1c0)],this['_yLocOverride']=_0x220c16['YLocation'],this[_0x35f1b3(0x1ba)]=_0x220c16[_0x35f1b3(0x26f)],this[_0x35f1b3(0x192)]=_0x220c16[_0x35f1b3(0x24a)],this[_0x35f1b3(0x250)]=_0x220c16[_0x35f1b3(0x1e5)],this[_0x35f1b3(0x19e)]=_0x220c16['ActorID'];if(_0x220c16[_0x35f1b3(0x276)]!==undefined&&_0x220c16[_0x35f1b3(0x276)]>=0x0){const _0x379c80=_0x220c16[_0x35f1b3(0x276)],_0x1d6668=$gameParty[_0x35f1b3(0x1e9)]()[_0x379c80];if(_0x1d6668)this[_0x35f1b3(0x19e)]=_0x1d6668[_0x35f1b3(0x18b)]();}this['_eventID']=_0x220c16['EventID'],this['_enemyIndex']=-0x1,_0x220c16[_0x35f1b3(0x25d)]!==undefined&&_0x220c16['EnemyIndex']>=0x0&&(this[_0x35f1b3(0x173)]=_0x220c16[_0x35f1b3(0x25d)]);},Window_Gab[_0x3e2041(0x21f)][_0x3e2041(0x245)]=function(){const _0x32b96e=_0x3e2041,_0x4c9f4c=this[_0x32b96e(0x174)];switch(this[_0x32b96e(0x177)][_0x32b96e(0x25a)]()[_0x32b96e(0x22b)]()){case _0x32b96e(0x182):this[_0x32b96e(0x198)]=ImageManager['loadCharacter'](_0x4c9f4c),this[_0x32b96e(0x25c)]['push'](this[_0x32b96e(0x198)]),this[_0x32b96e(0x198)]['addLoadListener'](this['removeLoadingGraphic'][_0x32b96e(0x183)](this,this[_0x32b96e(0x198)]));break;case'face':this[_0x32b96e(0x198)]=ImageManager['loadFace'](_0x4c9f4c),this[_0x32b96e(0x25c)][_0x32b96e(0x256)](this[_0x32b96e(0x198)]),this[_0x32b96e(0x198)][_0x32b96e(0x22a)](this[_0x32b96e(0x248)][_0x32b96e(0x183)](this,this[_0x32b96e(0x198)]));break;case _0x32b96e(0x23f):this[_0x32b96e(0x198)]=ImageManager[_0x32b96e(0x1a1)](_0x4c9f4c),this[_0x32b96e(0x25c)][_0x32b96e(0x256)](this[_0x32b96e(0x198)]),this['_graphicBitmap'][_0x32b96e(0x22a)](this[_0x32b96e(0x248)][_0x32b96e(0x183)](this,this['_graphicBitmap']));break;case'picture':this[_0x32b96e(0x198)]=ImageManager['loadPicture'](_0x4c9f4c),this[_0x32b96e(0x25c)]['push'](this[_0x32b96e(0x198)]),this[_0x32b96e(0x198)][_0x32b96e(0x22a)](this[_0x32b96e(0x248)][_0x32b96e(0x183)](this,this[_0x32b96e(0x198)]));break;default:break;}},Window_Gab[_0x3e2041(0x21f)][_0x3e2041(0x248)]=function(_0x1f0f83){const _0x30244e=_0x3e2041;this[_0x30244e(0x25c)][_0x30244e(0x1b2)](_0x1f0f83);},Window_Gab['prototype'][_0x3e2041(0x1e0)]=function(){const _0x488768=_0x3e2041;this[_0x488768(0x1ce)][_0x488768(0x1fc)](),this[_0x488768(0x26d)](),this['adjustDimensions'](),this[_0x488768(0x229)](),this[_0x488768(0x1e4)](),this['drawGabGraphic'](),this[_0x488768(0x1b5)](),this[_0x488768(0x172)](),this[_0x488768(0x17b)](),this['clear']();},Window_Gab[_0x3e2041(0x21f)][_0x3e2041(0x26d)]=function(){const _0x2df788=_0x3e2041;this[_0x2df788(0x227)]=null;if(this[_0x2df788(0x1a8)]())return!![];else{if(this[_0x2df788(0x1de)]())return!![];else{if(this[_0x2df788(0x206)]())return!![];}}return![];},Window_Gab['prototype']['isRepositionToActor']=function(){const _0x50e7f4=_0x3e2041;if(this[_0x50e7f4(0x19e)]<=0x0)return![];const _0x63f1d7=$gameActors['actor'](this[_0x50e7f4(0x19e)]);if(!_0x63f1d7)return![];if(!_0x63f1d7['isBattleMember']())return![];if(SceneManager[_0x50e7f4(0x18c)]())return $gameSystem[_0x50e7f4(0x1d5)]()&&_0x63f1d7[_0x50e7f4(0x1d3)]()&&(this['_lockedToTarget']=_0x63f1d7),!![];else{if(SceneManager[_0x50e7f4(0x211)]()){if(_0x63f1d7['index']()===0x0)return this[_0x50e7f4(0x227)]=$gamePlayer,!![];if($gamePlayer[_0x50e7f4(0x265)]()[_0x50e7f4(0x215)]())return this[_0x50e7f4(0x227)]=$gamePlayer[_0x50e7f4(0x265)]()[_0x50e7f4(0x23c)](_0x63f1d7[_0x50e7f4(0x23d)]()-0x1),!![];}}return![];},Window_Gab[_0x3e2041(0x21f)][_0x3e2041(0x1de)]=function(){const _0x37610c=_0x3e2041;if(!SceneManager[_0x37610c(0x211)]())return![];if(this[_0x37610c(0x264)]>0x0&&!!$gameMap[_0x37610c(0x217)](this[_0x37610c(0x264)]))return this[_0x37610c(0x227)]=$gameMap[_0x37610c(0x217)](this[_0x37610c(0x264)]),!![];return![];},Window_Gab[_0x3e2041(0x21f)][_0x3e2041(0x206)]=function(){const _0x588432=_0x3e2041;if(!SceneManager[_0x588432(0x18c)]())return![];if(this['_enemyIndex']>=0x0){const _0x929c09=$gameTroop[_0x588432(0x1e9)]()[this[_0x588432(0x173)]];if(_0x929c09&&_0x929c09[_0x588432(0x1d3)]())return this[_0x588432(0x227)]=_0x929c09,!![];}return![];},Window_Gab['prototype'][_0x3e2041(0x16f)]=function(){const _0x3ee9cd=_0x3e2041,_0x326bde=this[_0x3ee9cd(0x1df)]||0x0;let _0x54f0bd=Graphics[_0x3ee9cd(0x202)]+_0x326bde*0x2;this[_0x3ee9cd(0x202)]=this['adjustWidth'](_0x54f0bd);let _0x46ba99=this[_0x3ee9cd(0x1f3)](this[_0x3ee9cd(0x19a)]+0x1);this[_0x3ee9cd(0x261)]=_0x46ba99,this['createContents']();},Window_Gab['prototype'][_0x3e2041(0x191)]=function(_0x4c6184){const _0x11d987=_0x3e2041,_0xb0b8e0=VisuMZ[_0x11d987(0x1aa)][_0x11d987(0x207)];if(this[_0x11d987(0x227)]){_0x4c6184=this['textSizeEx'](this[_0x11d987(0x1d0)])[_0x11d987(0x202)],_0x4c6184+=this[_0x11d987(0x1df)]*0x2,_0x4c6184+=this[_0x11d987(0x209)]()*0x4;switch(this[_0x11d987(0x177)]['toLowerCase']()[_0x11d987(0x22b)]()){case'character':_0x4c6184+=_0xb0b8e0[_0x11d987(0x1c1)][_0x11d987(0x230)]*0x2,_0x4c6184-=this[_0x11d987(0x209)]()*0x2;break;case _0x11d987(0x268):_0x4c6184+=ImageManager[_0x11d987(0x1eb)];break;case _0x11d987(0x23f):_0x4c6184+=_0xb0b8e0['General'][_0x11d987(0x26e)]*0x2,_0x4c6184-=this[_0x11d987(0x209)]()*0x2;break;case _0x11d987(0x223):let _0x51328b=this[_0x11d987(0x198)]?this['_graphicBitmap'][_0x11d987(0x202)]:0x0;this[_0x11d987(0x20f)]&&(_0x51328b*=this[_0x11d987(0x222)]());_0x4c6184+=Math[_0x11d987(0x235)](_0x51328b);break;}}return _0x4c6184;},Window_Gab[_0x3e2041(0x21f)][_0x3e2041(0x229)]=function(){const _0x32a80a=_0x3e2041;if(this[_0x32a80a(0x227)]){if(SceneManager[_0x32a80a(0x18c)]())return this[_0x32a80a(0x1b3)]();else{if(SceneManager[_0x32a80a(0x211)]())return this[_0x32a80a(0x22e)]();}}this[_0x32a80a(0x179)]();},Window_Gab[_0x3e2041(0x21f)][_0x3e2041(0x1b3)]=function(){const _0x3ceef0=_0x3e2041,_0x2a612f=SceneManager[_0x3ceef0(0x186)];if(!_0x2a612f)return;const _0x16b713=_0x2a612f['_spriteset'];if(!_0x16b713)return;const _0x25e4f9=_0x16b713[_0x3ceef0(0x1b0)](this[_0x3ceef0(0x227)]);if(!_0x25e4f9)return;let _0x32bb20=_0x25e4f9['x'],_0x217fbb=_0x25e4f9['y']-_0x25e4f9[_0x3ceef0(0x261)];_0x32bb20+=Math[_0x3ceef0(0x235)]((Graphics[_0x3ceef0(0x202)]-Graphics['boxWidth'])/0x2),_0x217fbb+=Math[_0x3ceef0(0x235)]((Graphics[_0x3ceef0(0x261)]-Graphics[_0x3ceef0(0x17a)])/0x2)+this[_0x3ceef0(0x246)]()/0x2,this[_0x3ceef0(0x1a4)](_0x32bb20,_0x217fbb);},Window_Gab[_0x3e2041(0x21f)][_0x3e2041(0x22e)]=function(){const _0x19ec41=_0x3e2041,_0x9d27d9=this[_0x19ec41(0x227)],_0x3a4a80=_0x9d27d9[_0x19ec41(0x241)]()*$gameScreen['zoomScale'](),_0x2c5058=_0x9d27d9[_0x19ec41(0x1e7)]()*$gameScreen[_0x19ec41(0x25e)]();this[_0x19ec41(0x1a4)](_0x3a4a80,_0x2c5058);},Window_Gab['prototype'][_0x3e2041(0x23e)]=function(){const _0x4b5094=_0x3e2041;let _0x4fd019=$gameMap[_0x4b5094(0x217)](this['_eventID']);this[_0x4b5094(0x1a4)](_0x4fd019[_0x4b5094(0x241)](),_0x4fd019['screenY']());},Window_Gab[_0x3e2041(0x21f)]['repositionToTarget']=function(_0x7a4488,_0xf381b4){const _0x4c4bca=_0x3e2041;let _0x31719e=_0x7a4488-this['width']/0x2,_0x19b4f1=_0xf381b4-this[_0x4c4bca(0x261)]-0x20*$gameScreen[_0x4c4bca(0x25e)]();this['x']=_0x31719e,this['y']=_0x19b4f1;},Window_Gab[_0x3e2041(0x21f)]['repositionNormal']=function(){const _0xde4597=_0x3e2041;let _0x38636c=this[_0xde4597(0x1df)]*-0x1,_0x461917=0x0;this[_0xde4597(0x17c)]?_0x461917=VisuMZ[_0xde4597(0x1aa)][_0xde4597(0x207)][_0xde4597(0x1d4)]['BattleYLocation']:_0x461917=VisuMZ[_0xde4597(0x1aa)][_0xde4597(0x207)][_0xde4597(0x20b)][_0xde4597(0x203)],_0x461917-=this[_0xde4597(0x1df)],_0x461917=this[_0xde4597(0x232)]||_0x461917,this['x']=_0x38636c,this['y']=_0x461917,this[_0xde4597(0x227)]=null;},Window_Gab[_0x3e2041(0x21f)][_0x3e2041(0x172)]=function(){const _0x3ea5d3=_0x3e2041,_0x69a166=VisuMZ[_0x3ea5d3(0x1aa)][_0x3ea5d3(0x207)];this[_0x3ea5d3(0x1ed)]=0xff,this[_0x3ea5d3(0x1ab)]=this['_waitTimeOverride']||_0x69a166[_0x3ea5d3(0x1c1)]['BaseWaitTime']||0x0;const _0x5f19b0=this[_0x3ea5d3(0x1d0)][_0x3ea5d3(0x193)](/\\(.*?)\[(.*?)\]/gi,'');this[_0x3ea5d3(0x1ab)]+=_0x5f19b0[_0x3ea5d3(0x185)]*(this[_0x3ea5d3(0x1e1)]||_0x69a166[_0x3ea5d3(0x1c1)][_0x3ea5d3(0x1a7)]||0x0);},Window_Gab[_0x3e2041(0x21f)][_0x3e2041(0x1e4)]=function(){const _0x1cc11e=_0x3e2041;this[_0x1cc11e(0x213)](0x0,0x0,this[_0x1cc11e(0x208)],this[_0x1cc11e(0x242)]);},Window_Gab[_0x3e2041(0x21f)][_0x3e2041(0x1bd)]=function(){const _0x2070bc=_0x3e2041;return $gameParty[_0x2070bc(0x184)]()?this[_0x2070bc(0x192)]||VisuMZ[_0x2070bc(0x1aa)][_0x2070bc(0x207)][_0x2070bc(0x1d4)][_0x2070bc(0x21d)]:this['_dimColor1Override']||VisuMZ['GabWindow'][_0x2070bc(0x207)][_0x2070bc(0x20b)]['MapDimColor1'];},Window_Gab[_0x3e2041(0x21f)][_0x3e2041(0x224)]=function(){const _0x49ae33=_0x3e2041;return $gameParty['inBattle']()?this['_dimColor2Override']||VisuMZ['GabWindow']['Settings'][_0x49ae33(0x1d4)]['BattleDimColor2']:this[_0x49ae33(0x250)]||VisuMZ[_0x49ae33(0x1aa)][_0x49ae33(0x207)]['Map']['MapDimColor2'];},Window_Gab[_0x3e2041(0x21f)][_0x3e2041(0x213)]=function(_0x433e0a,_0x334b49,_0xa599ce,_0x4ea8ff){const _0x2af623=_0x3e2041,_0x638f1a=this['dimColor1'](),_0x3ca357=this[_0x2af623(0x227)]?this[_0x2af623(0x1bd)]():this[_0x2af623(0x224)](),_0x436e8f=Math[_0x2af623(0x235)](_0xa599ce*0.25),_0x1c07ca=Math['ceil'](_0xa599ce*0.75);this[_0x2af623(0x1ce)][_0x2af623(0x279)](_0x433e0a,_0x334b49,_0x436e8f,_0x4ea8ff,_0x638f1a,_0x638f1a),this['contents'][_0x2af623(0x279)](_0x436e8f,_0x334b49,_0x1c07ca,_0x4ea8ff,_0x638f1a,_0x3ca357);},Window_Gab[_0x3e2041(0x21f)][_0x3e2041(0x23a)]=function(){const _0x341a69=_0x3e2041;if(this[_0x341a69(0x174)]==='')return;switch(this[_0x341a69(0x177)][_0x341a69(0x25a)]()[_0x341a69(0x22b)]()){case _0x341a69(0x268):this[_0x341a69(0x1ae)]();break;case _0x341a69(0x182):this[_0x341a69(0x26b)]();break;case _0x341a69(0x23f):this['drawGabSvActor']();break;case _0x341a69(0x223):this[_0x341a69(0x16d)]();break;}},Window_Gab[_0x3e2041(0x21f)][_0x3e2041(0x1ae)]=function(){const _0x3f9067=_0x3e2041,_0x26507a=VisuMZ[_0x3f9067(0x1aa)][_0x3f9067(0x207)][_0x3f9067(0x1c1)],_0x3797fe=0x0;let _0x18e02c=0x0;const _0x24f67d=ImageManager[_0x3f9067(0x1eb)];let _0x552b78=this[_0x3f9067(0x242)];if(!_0x26507a[_0x3f9067(0x259)]){_0x552b78=Math['min'](this[_0x3f9067(0x242)],ImageManager['faceHeight']);if(this[_0x3f9067(0x242)]>_0x552b78)_0x18e02c=this[_0x3f9067(0x246)]()/0x2;}this[_0x3f9067(0x1f5)](this[_0x3f9067(0x174)],this[_0x3f9067(0x1d6)],_0x3797fe,_0x18e02c,_0x24f67d,_0x552b78);},Window_Gab['prototype'][_0x3e2041(0x26b)]=function(){const _0x4f8f39=_0x3e2041,_0x32230e=VisuMZ['GabWindow']['Settings'][_0x4f8f39(0x1c1)],_0x267e11=_0x32230e[_0x4f8f39(0x230)];let _0x559d65=_0x32230e[_0x4f8f39(0x1c8)];_0x32230e[_0x4f8f39(0x259)]&&(_0x559d65+=(this['_lines']-0x1)*this['lineHeight']()/0x2),this['drawCharacter'](this[_0x4f8f39(0x174)],this[_0x4f8f39(0x1d6)],_0x267e11,_0x559d65);},Window_Gab[_0x3e2041(0x21f)][_0x3e2041(0x1b7)]=function(){const _0x3846ce=_0x3e2041,_0x52ce86=VisuMZ['GabWindow'][_0x3846ce(0x207)][_0x3846ce(0x1c1)],_0x433a82=_0x52ce86['SvActorXPos'];let _0x33c7dc=_0x52ce86[_0x3846ce(0x1f1)];_0x52ce86[_0x3846ce(0x259)]&&(_0x33c7dc+=(this['_lines']-0x1)*this[_0x3846ce(0x246)]()/0x2),this[_0x3846ce(0x1da)](this[_0x3846ce(0x174)],_0x433a82,_0x33c7dc);},Window_Gab[_0x3e2041(0x21f)]['drawGabPicture']=function(){const _0x2c361d=_0x3e2041;if(!this[_0x2c361d(0x198)])return;let _0x213c3b=this[_0x2c361d(0x222)]();const _0xa9466d=Math[_0x2c361d(0x235)](this[_0x2c361d(0x198)][_0x2c361d(0x202)]*_0x213c3b),_0x47059a=Math[_0x2c361d(0x235)](this[_0x2c361d(0x198)]['height']*_0x213c3b);let _0x11a82a=0x0,_0xc5aa47=0x0;const _0x3cd1b3=this[_0x2c361d(0x198)];this[_0x2c361d(0x1ce)][_0x2c361d(0x1cf)](_0x3cd1b3,0x0,0x0,_0x3cd1b3[_0x2c361d(0x202)],_0x3cd1b3[_0x2c361d(0x261)],_0x11a82a,_0xc5aa47,_0xa9466d,_0x47059a);},Window_Gab[_0x3e2041(0x21f)]['getPictureScale']=function(){const _0x104d4b=_0x3e2041;if(!this[_0x104d4b(0x198)])return 0x1;return this[_0x104d4b(0x20f)]?Math[_0x104d4b(0x26c)](this['innerWidth']/this[_0x104d4b(0x198)][_0x104d4b(0x202)],this['innerHeight']/this[_0x104d4b(0x198)][_0x104d4b(0x261)]):0x1;},Window_Gab['prototype'][_0x3e2041(0x1b5)]=function(){const _0x64d5d1=_0x3e2041,_0x3fe138=VisuMZ[_0x64d5d1(0x1aa)][_0x64d5d1(0x207)];let _0x4ee0d3=this[_0x64d5d1(0x209)]()*0x2;switch(this[_0x64d5d1(0x177)][_0x64d5d1(0x25a)]()[_0x64d5d1(0x22b)]()){case _0x64d5d1(0x268):_0x4ee0d3+=ImageManager['faceWidth'];break;case _0x64d5d1(0x182):_0x4ee0d3+=_0x3fe138[_0x64d5d1(0x1c1)][_0x64d5d1(0x230)]*0x2,_0x4ee0d3-=this[_0x64d5d1(0x209)]()*0x2;break;case _0x64d5d1(0x23f):_0x4ee0d3+=_0x3fe138[_0x64d5d1(0x1c1)]['SvActorXPos']*0x2,_0x4ee0d3-=this[_0x64d5d1(0x209)]()*0x2;break;case _0x64d5d1(0x223):let _0x126459=this[_0x64d5d1(0x198)]?this[_0x64d5d1(0x198)]['width']:0x0;_0x126459*=this[_0x64d5d1(0x222)](),_0x4ee0d3+=Math[_0x64d5d1(0x235)](_0x126459);break;}const _0x460b6e=this[_0x64d5d1(0x246)]()/0x2;this['drawTextEx'](this[_0x64d5d1(0x1d0)],_0x4ee0d3,_0x460b6e);},Window_Gab[_0x3e2041(0x21f)][_0x3e2041(0x17b)]=function(){const _0x23de9e=_0x3e2041;this[_0x23de9e(0x1ef)](),this[_0x23de9e(0x240)]();},Window_Gab[_0x3e2041(0x21f)][_0x3e2041(0x1ef)]=function(){const _0x109f2d=_0x3e2041;if(this[_0x109f2d(0x1c9)]==='')return;const _0x2a135d=this[_0x109f2d(0x1f4)]||{},_0x2e815d={'name':this[_0x109f2d(0x1c9)],'volume':_0x2a135d[_0x109f2d(0x1fa)]??0x5a,'pitch':_0x2a135d['pitch']??0x64,'pan':_0x2a135d[_0x109f2d(0x23b)]??0x0};AudioManager[_0x109f2d(0x1fd)](_0x2e815d);},Window_Gab[_0x3e2041(0x21f)]['onDisplayJS']=function(){const _0x171839=_0x3e2041;if(this['_jsOnDisplay'])this[_0x171839(0x17d)][_0x171839(0x17f)](this);const _0x3c302d=VisuMZ[_0x171839(0x1aa)][_0x171839(0x207)][_0x171839(0x1c1)];if(_0x3c302d[_0x171839(0x27b)])_0x3c302d[_0x171839(0x27b)]['call'](this,this['_currentGab']);},Window_Gab[_0x3e2041(0x21f)][_0x3e2041(0x1f7)]=function(){const _0x60b0c6=_0x3e2041;this[_0x60b0c6(0x17c)]?($gameTemp['_storedBattleGabs']=this[_0x60b0c6(0x214)][_0x60b0c6(0x221)](),$gameTemp[_0x60b0c6(0x267)]=this['contentsOpacity']>0x0?this['_currentGab']:{}):($gameTemp[_0x60b0c6(0x1a3)]=this[_0x60b0c6(0x214)][_0x60b0c6(0x221)](),$gameTemp[_0x60b0c6(0x20d)]=this[_0x60b0c6(0x1ed)]>0x0?this['_currentGab']:{});},Window_Gab['prototype'][_0x3e2041(0x228)]=function(){const _0x1aa32e=_0x3e2041;this[_0x1aa32e(0x17c)]?($gameTemp[_0x1aa32e(0x187)]&&(this['_gabQueue']=$gameTemp[_0x1aa32e(0x187)],delete $gameTemp[_0x1aa32e(0x187)]),$gameTemp[_0x1aa32e(0x267)]&&$gameTemp[_0x1aa32e(0x267)][_0x1aa32e(0x1b9)]&&(this[_0x1aa32e(0x214)][_0x1aa32e(0x210)]($gameTemp[_0x1aa32e(0x267)]),delete $gameTemp[_0x1aa32e(0x267)])):($gameTemp[_0x1aa32e(0x1a3)]&&(this[_0x1aa32e(0x214)]=$gameTemp[_0x1aa32e(0x1a3)],delete $gameTemp[_0x1aa32e(0x1a3)]),$gameTemp[_0x1aa32e(0x20d)]&&$gameTemp[_0x1aa32e(0x20d)]['Text']&&(this[_0x1aa32e(0x214)][_0x1aa32e(0x210)]($gameTemp[_0x1aa32e(0x20d)]),delete $gameTemp['_currentMapGab']));};