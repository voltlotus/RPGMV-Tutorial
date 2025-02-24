//=============================================================================
// VisuStella MZ - Combat Log
// VisuMZ_4_CombatLog.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_CombatLog = true;

var VisuMZ = VisuMZ || {};
VisuMZ.CombatLog = VisuMZ.CombatLog || {};
VisuMZ.CombatLog.version = 1.14;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.14] [CombatLog]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Combat_Log_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Sometimes text appears way too fast in the battle system or sometimes
 * players may miss what kind of information was delivered on-screen. For times
 * like that, being able to access the Combat Log would be important. The
 * Combat Log records all of the text that appears in the battle log window at
 * the top. The player can access the Combat Log display any time during action
 * selection phase or by holding down the designated Hot Key. Sometimes,
 * players can even review over the Combat Log to try and figure out any kinds
 * of patterns enemies may even have.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Record the events that happen in battle into an accessible Combat Log for
 *   players to go back and review.
 * * Access the Combat Log in-battle through the Party Command Window, Actor
 *   Command Window, or by holding down the Hot Key.
 * * Icons are added to help players quickly differentiate between different
 *   types of events.
 * * Combat Log can have its numbers color-coded to quickly determine their
 *   effects towards action targets.
 * * Players can review past Combat Logs from an option in the Main Menu.
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
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 * 
 * VisuMZ_1_BattleCore
 * 
 * The VisuStella MZ Battle Core's <Battle Commands> notetag can now add in
 * "Combat Log" to its list to have the Combat Log shown as an option to the
 * Actor Command Window. Do remember to have this option enabled in the Plugin
 * Parameters as well.
 * 
 * ---
 *
 * VisuMZ_1_MessageCore
 *
 * By having the VisuStella MZ Message Core installed, you can enable the
 * Auto Color functions for the Combat Log. Do remember to have this option
 * enabled in the Plugin Parameters as well.
 *
 * ---
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
 * === Bypass-Related Notetags ===
 * 
 * ---
 *
 * <Bypass Combat Log>
 *
 * - Used for: State Notetags
 * - Insert this notetag inside a state to make its state messages ignored.
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
 * ---
 * 
 * === Combat Log Plugin Commands ===
 * 
 * ---
 *
 * Combat Log: Add Text
 * - Adds custom text to the current Combat Log.
 *
 *   Text:
 *   - What text would you like to add to the Combat Log?
 *
 *   Icon:
 *   - What icon would you like to bind to this entry?
 *
 * ---
 *
 * Combat Log: Add Horizontal Line
 * - Adds a horizontal line to the current Combat Log.
 *
 * ---
 *
 * Combat Log: Bypass Text?
 * - Temporarily bypass adding any new text to the Combat Log until this
 *   is turned off?
 *
 *   Bypass?:
 *   - Bypass text from being added to the Combat Log temporarily?
 *
 * ---
 *
 * Combat Log: Hot Key Enable?
 * - Enables/disables the Combat Log hot key in battle?
 *
 *   Enable?:
 *   - Enables/disables the Combat Log hot key in battle.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Show in Main Menu?
 * - Shows/hides CombatLog menu inside the Main Menu.
 *
 *   Show/Hide?:
 *   - Shows/hides Combat Log command inside the Main Menu.
 *   - Note! This command will be disabled if the player does not have any
 *     Combat Logs recorded.
 *
 * ---
 *
 * System: Show in Party Command?
 * - Shows/hides CombatLog menu inside the Window_PartyCommand.
 *
 *   Show/Hide?:
 *   - Shows/hides Combat Log command inside Window_PartyCommand.
 *
 * ---
 *
 * System: Show in Actor Command?
 * - Shows/hides CombatLog menu inside the Window_ActorCommand.
 *
 *   Show/Hide?:
 *   - Shows/hides Combat Log command inside Window_ActorCommand.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General settings for the Combat Log. Determine how the commands appear,
 * the hot key used, and accessibility through the Main Menu, Party Command
 * Window, and Actor Command Window.
 *
 * ---
 *
 * General
 * 
 *   Command Name:
 *   - Name of the 'Combat Log' option in the various menus.
 * 
 *   Icon:
 *   - Icon used for each of the 'Combat Log' options.
 * 
 *   Hot Key:
 *   - This is the key used for quickly opening the Combat Log in battle.
 * 
 *   Stored Logs:
 *   - How many combat logs are stored as a history?
 *   - This affects the Combat Log menu.
 *
 * ---
 *
 * Main Menu
 * 
 *   Show in Main Menu?:
 *   - Add the 'Combat Log' option to the Main Menu by default?
 *   - Note! This command will be disabled if the player does not have any
 *     Combat Logs recorded.
 *
 * ---
 *
 * Window_PartyCommand
 * 
 *   Show in Window?:
 *   - Add the 'Combat Log' option to Window_PartyCommand by default?
 *
 * ---
 *
 * Window_ActorCommand
 * 
 *   Show in Window?:
 *   - Add the 'Combat Log' option to Window_ActorCommand by default?
 * 
 *   Help: Combat Log:
 *   - Help text for Combat Log command.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Combat Log Settings
 * ============================================================================
 *
 * Settings regarding the Combat Log contents. Disable any unwanted information
 * you want from here to prevent them from being displayed.
 *
 * ---
 *
 * General
 * 
 *   Show Icons?:
 *   - Show icons in the Combat Log?
 * 
 *   Auto Color?:
 *   - Use auto colors for the Combat Log?
 *   - Requires VisuMZ_1_MessageCore
 * 
 *   Color Numbers?:
 *   - Color numbers for damage differences?
 *
 * ---
 *
 * Battle Start
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *
 * ---
 *
 * Enemy Emerge
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 *
 * ---
 *
 * Battle Advantages
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Preemptive Icon:
 *   Surprised Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *
 * ---
 *
 * Start Turn
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Turn Count
 *
 * ---
 *
 * End Turn
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Turn Count
 *
 * ---
 *
 * Battle Victory
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 *
 * ---
 *
 * Battle Escape
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 *
 * ---
 *
 * Battle Defeat
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 *
 * ---
 *
 * Action Text
 * 
 *   Show Skill Message 1?:
 *   - Show this event in the Combat Log?
 * 
 *   Show Skill Message 2?:
 *   - Show this event in the Combat Log?
 * 
 *   Show Item Message?:
 *   - Show this event in the Combat Log?
 *
 * ---
 *
 * HP Settings
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 *
 * ---
 *
 * HP Settings > HP Heal
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text Color:
 *   - Text color used for this event in the Combat Log.
 *
 * ---
 *
 * HP Settings > HP Damage
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text Color:
 *   - Text color used for this event in the Combat Log.
 *
 * ---
 *
 * HP Settings > No HP Damage
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text Color:
 *   - Text color used for this event in the Combat Log.
 *
 * ---
 *
 * MP Settings
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 *
 * ---
 *
 * MP Settings > MP Heal
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text Color:
 *   - Text color used for this event in the Combat Log.
 *
 * ---
 *
 * MP Settings > MP Damage
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text Color:
 *   - Text color used for this event in the Combat Log.
 *
 * ---
 *
 * MP Settings > No MP Damage
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text Color:
 *   - Text color used for this event in the Combat Log.
 *
 * ---
 *
 * TP Settings
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 *
 * ---
 *
 * TP Settings > TP Heal
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text Color:
 *   - Text color used for this event in the Combat Log.
 *
 * ---
 *
 * TP Settings > TP Damage
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text Color:
 *   - Text color used for this event in the Combat Log.
 *
 * ---
 *
 * TP Settings > No TP Damage
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text Color:
 *   - Text color used for this event in the Combat Log.
 *
 * ---
 *
 * State Settings
 * 
 *   Show State Add?:
 *   - Show this event in the Combat Log?
 * 
 *   Show State Remove?:
 *   - Show this event in the Combat Log?
 * 
 *   Show State Current?:
 *   - Show this event in the Combat Log?
 *
 * ---
 *
 * Buff & Debuff Settings
 * 
 *   Show Add Buff?:
 *   - Show this event in the Combat Log?
 * 
 *   Show Add Debuff?:
 *   - Show this event in the Combat Log?
 * 
 *   Show Erase Buff?:
 *   - Show this event in the Combat Log?
 *
 * ---
 *
 * Counterattack
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 *
 * ---
 *
 * Reflection
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 *
 * ---
 *
 * Substitute
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 *
 * ---
 *
 * Effect Failure
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 *
 * ---
 *
 * Critical Hit
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 *
 * ---
 *
 * Missed Hit
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 *
 * ---
 *
 * Evaded Hit
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Background Settings
 * ============================================================================
 *
 * Background settings for Scene_CombatLog. Pretty up the scene to fit the rest
 * of your game with these settings!
 *
 * ---
 *
 * Settings
 * 
 *   Snapshop Opacity:
 *   - Snapshot opacity for the scene.
 * 
 *   Background 1:
 *   - Filename used for the bottom background image.
 *   - Leave empty if you don't wish to use one.
 * 
 *   Background 2:
 *   - Filename used for the upper background image.
 *   - Leave empty if you don't wish to use one.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * Settings regarding this plugin's windows. These alter how the windows appear
 * in the battle and menu scenes.
 *
 * ---
 *
 * Combat Log (Battle)
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * Combat Log (Menu)
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * Combat History (Menu)
 * 
 *   Latest Command:
 *   - Text displayed for latest battle.
 *   - %1 - Battle Count
 * 
 *   Past Command:
 *   - Text displayed for past battles.
 *   - %1 - Battle Count
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Compatibility Settings
 * ============================================================================
 *
 * These settings are for creating compatibility with the other VisuStella MZ
 * plugins that can benefit from having their effects recorded inside of the
 * Combat Log.
 *
 * ---
 *
 * Battle System - ATB > Interrupt
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Target Name
 *
 * ---
 *
 * Battle System - CTB > Order Change
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Target Name
 *
 * ---
 *
 * Battle System - STB > Instant
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Target Name
 *
 * ---
 *
 * Anti-Damage Barriers > Cancel Barrier
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Target Name, %2 - State Name
 *
 * ---
 *
 * Anti-Damage Barriers > Nullify Barrier
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Target Name, %2 - State Name
 *
 * ---
 *
 * Anti-Damage Barriers > Reduction Barrier
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Target Name, %2 - State Name
 *
 * ---
 *
 * Anti-Damage Barriers > Absorption Barrier
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Target Name, %2 - State Name, %3 - Damage
 *
 * ---
 *
 * Anti-Damage Barriers > MP Dispersion Barrier
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Target Name, %2 - State Name, %3 - MP
 *
 * ---
 *
 * Anti-Damage Barriers > TP Dispersion Barrier
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Target Name, %2 - State Name, %3 - TP
 *
 * ---
 *
 * Life State Effects > Auto Life
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Target Name
 *
 * ---
 *
 * Life State Effects > Curse
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Target Name
 *
 * ---
 *
 * Life State Effects > Doom
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Target Name
 *
 * ---
 *
 * Life State Effects > Fragile
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Target Name
 *
 * ---
 *
 * Life State Effects > Guts
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Target Name
 *
 * ---
 *
 * Life State Effects > Undead
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
 * 
 *   Text:
 *   - Text displayed for this event in the Combat Log.
 *   - You may use text codes.
 *   - %1 - Target Name
 *
 * ---
 *
 * Steal Items > Steal Text
 * 
 *   Show?:
 *   - Show this event in the Combat Log?
 * 
 *   Icon:
 *   - Icon used for this event in the Combat Log.
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
 * Version 1.14: October 17, 2024 
 * * Compatibility Update!
 * ** Plugin should be more compatible with Battle System - OTB.
 * 
 * Version 1.13: November 17, 2022
 * * Documentation Update!
 * ** Added extra clarity for Plugin Parameter "Background Settings".
 * *** This does NOT apply to the battle Combat Log.
 * * Bug Fixes!
 * ** Access to Scene_CombatLog should now be possible without Main Menu Core.
 *    Fix made by Olivia.
 * 
 * Version 1.12: June 23, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.11: January 27, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.10: January 6, 2022
 * * Bug Fixes!
 * ** Incorrect text usage for enemy recovery is now fixed. Fix made by Arisu.
 * 
 * Version 1.09: July 2, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.08: April 9, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Olivia!
 * *** Plugin Parameters > General Settings > Help: Combat Log
 * **** Help text for Combat Log command.
 * 
 * Version 1.07: March 19, 2021
 * * Bug Fixes!
 * ** Combat log should no longer mask some windows from appearing and is now
 *    instead placed as a non-window object. Fix made by Arisu.
 * 
 * Version 1.06: March 12, 2021
 * * Bug Fixes!
 * ** Icons for counters, reflections, and substitutes should now display
 *    properly in the combat log. Fix made by Arisu.
 * ** Turn data should now display properly in TPB-base battle systems.
 *    Fix made by Arisu.
 * ** Switching out to the Options Scene or Party Scene should no longer clear
 *    the Combat Log in-battle. Fix made by Arisu.
 * 
 * Version 1.05: January 22, 2021
 * * Feature Update!
 * ** Dimmed background sprite now expands through the width of the screen
 *    while in battle to no longer display the jagged edges. Update by Irina.
 * 
 * Version 1.04: January 15, 2021
 * * Feature Update!
 * ** Any entries added to the Combat Log with \V[x] will now have their exact
 *    variable data stored at the time instead of displaying their current
 *    variable value. Update made by Irina.
 * 
 * Version 1.03: January 8, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Command added by Irina.
 * *** Plugin Parameters > General Settings > Stored Logs
 * **** How many combat logs are stored as a history?
 * 
 * Version 1.02: January 1, 2021
 * * Bug Fixes!
 * ** Compatibility with the Absorption Barrier should be fixed. Fix made by
 *    Yanfly.
 * 
 * Version 1.01: December 25, 2020
 * * Feature Update!
 * ** Combat Log when opened with the hot key will automatically close itself
 *    if the Message Window is open. Update made by Yanfly.
 *
 * Version 1.00: January 15, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CombatLogAddText
 * @text Combat Log: Add Text
 * @desc Adds custom text to the current Combat Log.
 *
 * @arg Text:str
 * @text Text
 * @desc What text would you like to add to the Combat Log?
 * @default Custom
 *
 * @arg Icon:num
 * @text Icon
 * @desc What icon would you like to bind to this entry?
 * @default 87
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CombatLogAddHorzLine
 * @text Combat Log: Add Horizontal Line
 * @desc Adds a horizontal line to the current Combat Log.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CombatLogBypass
 * @text Combat Log: Bypass Text?
 * @desc Temporarily bypass adding any new text to the Combat Log until this is turned off?
 *
 * @arg Bypass:eval
 * @text Bypass?
 * @type boolean
 * @on Bypass Text
 * @off Add Normally
 * @desc Bypass text from being added to the Combat Log temporarily?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CombatLogEnableHotKey
 * @text Combat Log: Hot Key Enable?
 * @desc Enables/disables the Combat Log hot key in battle?
 *
 * @arg Enable:eval
 * @text Enable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables/disables the Combat Log hot key in battle.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemShowCombatLogMenu
 * @text System: Show in Main Menu?
 * @desc Shows/hides CombatLog menu inside the Main Menu.
 *
 * @arg Show:eval
 * @text Show/Hide?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides Combat Log command inside the Main Menu.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemShowCombatLogParty
 * @text System: Show in Party Command?
 * @desc Shows/hides CombatLog menu inside the Window_PartyCommand.
 *
 * @arg Show:eval
 * @text Show/Hide?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides Combat Log command inside Window_PartyCommand.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemShowCombatLogActor
 * @text System: Show in Actor Command?
 * @desc Shows/hides CombatLog menu inside the Window_ActorCommand.
 *
 * @arg Show:eval
 * @text Show/Hide?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides Combat Log command inside Window_ActorCommand.
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
 * @param CombatLog
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
 * @desc General settings for the Combat Log.
 * @default {"General":"","Name:str":"Combat Log","Icon:num":"189","HotKey:str":"shift","MainMenu":"","ShowMainMenu:eval":"true","PartyCommand":"","ShowPartyCommand:eval":"true","ActorCommand":"","ShowActorCommand:eval":"true"}
 *
 * @param CombatLog:struct
 * @text Combat Log Settings
 * @type struct<CombatLog>
 * @desc Settings regarding the Combat Log contents.
 * @default {"General":"","ShowIcons:eval":"true","AutoColor:eval":"true","ColorNumbers:eval":"true","BattleStart":"","ShowBattleStart:eval":"true","IconBattleStart:num":"97","TextBattleStart:str":"\\C[4]Battle Start!\\C[0]","EnemyEmerge":"","ShowEnemyEmerge:eval":"true","IconEnemyEmerge:num":"5","Advantages":"","ShowAdvantages:eval":"true","IconPreemptive:num":"77","IconSurprise:num":"78","StartTurn":"","ShowStartTurn:eval":"true","IconStartTurn:num":"97","TextStartTurn:str":"\\C[4]Turn \\C[5]%1\\C[4]: \\C[6]Start!","EndTurn":"","ShowEndTurn:eval":"true","IconEndTurn:num":"97","TextEndTurn:str":"\\C[4]Turn \\C[5]%1\\C[4]: \\C[6]End!","Victory":"","ShowVictory:eval":"true","IconVictory:num":"87","Escape":"","ShowEscape:eval":"true","IconEscape:num":"82","Defeat":"","ShowDefeat:eval":"true","IconDefeat:num":"1","Actions":"","ShowSkillMessage1:eval":"true","ShowSkillMessage2:eval":"true","ShowItemMessage:eval":"true","HP":"","ShowHP:eval":"true","HealHP":"","IconHealHP:num":"72","TextColorHealHP:num":"24","DmgHP":"","IconDmgHP:num":"168","TextColorDmgHP:num":"2","NoDmgHP":"","IconNoDmgHP:num":"81","TextColorNoDmgHP:num":"6","MP":"","ShowMP:eval":"true","HealMP":"","IconHealMP:num":"72","TextColorHealMP:num":"4","DmgMP":"","IconDmgMP:num":"171","TextColorDmgMP:num":"5","NoDmgMP":"","IconNoDmgMP:num":"81","TextColorNoDmgMP:num":"6","TP":"","ShowTP:eval":"true","HealTP":"","IconHealTP:num":"164","TextColorHealTP:num":"24","DmgTP":"","IconDmgTP:num":"170","TextColorDmgTP:num":"28","NoDmgTP":"","IconNoDmgTP:num":"81","TextColorNoDmgTP:num":"6","States":"","ShowStateAdd:eval":"true","ShowStateRemove:eval":"true","ShowStateCurrent:eval":"true","Buffs":"","ShowAddBuff:eval":"true","ShowAddDebuff:eval":"true","ShowEraseBuff:eval":"true","Counter":"","ShowCounter:eval":"true","IconCounter:num":"77","Reflect":"","ShowReflect:eval":"true","IconReflect:num":"81","Subst":"","ShowSubst:eval":"true","IconSubst:num":"81","Fail":"","ShowFail:eval":"true","IconFail:num":"166","Critical":"","ShowCritical:eval":"true","IconCritical:num":"87","Miss":"","ShowMiss:eval":"true","IconMiss:num":"82","Evade":"","ShowEvade:eval":"true","IconEvade:num":"82"}
 *
 * @param BgSettings:struct
 * @text Background Settings
 * @type struct<BgSettings>
 * @desc Background settings for ONLY Scene_CombatLog.
 * This does NOT apply to the battle Combat Log.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc Settings regarding this plugin's windows.
 * @default {"CombatLogBattle":"","CombatLogBattle_BgType:num":"1","CombatLogBattle_RectJS:func":"\"const wx = 0;\\nconst wy = 0;\\nconst ww = Graphics.boxWidth;\\nconst wh = Graphics.boxHeight;\\nreturn new Rectangle(wx, wy, ww, wh);\"","CombatLogMenu":"","CombatLogMenu_BgType:num":"0","CombatLogMenu_RectJS:func":"\"const wx = 0;\\nconst wy = this._historyWindow.y + this._historyWindow.height;\\nconst ww = Graphics.boxWidth;\\nconst wh = this.mainAreaHeight() - this._historyWindow.height;\\nreturn new Rectangle(wx, wy, ww, wh);\"","CombatHistory":"","CombatHistoryLatest:str":"Latest","CombatHistoryPrevious:str":"Battle #%1","CombatHistory_BgType:num":"0","CombatHistory_RectJS:func":"\"const ww = Graphics.boxWidth;\\nconst wh = this.calcWindowHeight(1, true);\\nconst wx = 0;\\nconst wy = this.mainAreaTop();\\nreturn new Rectangle(wx, wy, ww, wh);\""}
 * 
 * @param -
 *
 * @param Compatibility:struct
 * @text Compatibility Settings
 * @type struct<Compatibility>
 * @desc Compatibility settings with other VisuStella MZ plugins.
 * @default {"VisuMZ_2_BattleSystemATB":"","VisuMZ_2_BattleSystemATB_Interrupt":"","ShowBattleSysAtbInterrupt:eval":"true","IconBattleSysAtbInterrupt:num":"78","TextBattleSysAtbInterrupt:str":"%1 has been interrupted!","VisuMZ_2_BattleSystemCTB":"","VisuMZ_2_BattleSystemCTB_OrderChange":"","ShowBattleSysCtbOrderChange:eval":"true","IconBattleSysCtbOrderChange:num":"75","TextBattleSysCtbOrderChange:str":"%1's turn order has changed!","VisuMZ_2_BattleSystemSTB":"","VisuMZ_2_BattleSystemSTB_Instant":"","ShowBattleSysStbInstant:eval":"true","IconBattleSysStbInstant:num":"73","TextBattleSysStbInstant:str":"%1's gains an extra action!","VisuMZ_3_AntiDmgBarriers":"","VisuMZ_3_AntiDmgBarriers_Cancel":"","Show_AntiDmgBarrier_Cancel:eval":"true","Text_AntiDmgBarrier_Cancel:str":"%2 cancels damage for %1!","VisuMZ_3_AntiDmgBarriers_Nullify":"","Show_AntiDmgBarrier_Nullify:eval":"true","Text_AntiDmgBarrier_Nullify:str":"%2 nullifies damage for %1!","VisuMZ_3_AntiDmgBarriers_Reduce":"","Show_AntiDmgBarrier_Reduce:eval":"true","Text_AntiDmgBarrier_Reduce:str":"%2 reduces damage for %1!","VisuMZ_3_AntiDmgBarriers_Absorb":"","Show_AntiDmgBarrier_Absorb:eval":"true","Text_AntiDmgBarrier_Absorb:str":"%2 absorbs \\C[5]%2\\C[0] damage for %1!","VisuMZ_3_AntiDmgBarriers_MpDisperse":"","Show_AntiDmgBarrier_MpDisperse:eval":"true","Text_AntiDmgBarrier_MpDisperse:str":"%2 dispersed damage to %1's %3!","VisuMZ_3_AntiDmgBarriers_TpDisperse":"","Show_AntiDmgBarrier_TpDisperse:eval":"true","Text_AntiDmgBarrier_TpDisperse:str":"%2 dispersed damage to %1's %3!","VisuMZ_3_LifeStateEffects":"","VisuMZ_3_LifeStateEffects_AutoLife":"","Show_LifeStateEffects_AutoLife:eval":"true","Icon_LifeStateEffects_AutoLife:num":"70","Text_LifeStateEffects_AutoLife:str":"%1 is automatically revived!","VisuMZ_3_LifeStateEffects_Curse":"","Show_LifeStateEffects_Curse:eval":"true","Icon_LifeStateEffects_Curse:num":"71","Text_LifeStateEffects_Curse:str":"%1's curse takes hold...","VisuMZ_3_LifeStateEffects_Doom":"","Show_LifeStateEffects_Doom:eval":"true","Icon_LifeStateEffects_Doom:num":"1","Text_LifeStateEffects_Doom:str":"%1 has fallen to doom.","VisuMZ_3_LifeStateEffects_Fragile":"","Show_LifeStateEffects_Fragile:eval":"true","Icon_LifeStateEffects_Fragile:num":"166","Text_LifeStateEffects_Fragile:str":"%1 was too fragile!","VisuMZ_3_LifeStateEffects_Guts":"","Show_LifeStateEffects_Guts:eval":"true","Icon_LifeStateEffects_Guts:num":"77","Text_LifeStateEffects_Guts:str":"%1 powers through a fatal blow!","VisuMZ_3_LifeStateEffects_Undead":"","Show_LifeStateEffects_Undead:eval":"true","Icon_LifeStateEffects_Undead:num":"10","Text_LifeStateEffects_Undead:str":"%1 suffers from being undead!","VisuMZ_3_StealItems":"","VisuMZ_3_StealItems_Steal":"","Show_StealItems_Steal:eval":"true","Icon_StealItems_Steal:num":"142"}
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
 * @param Name:str
 * @text Command Name
 * @parent General
 * @desc Name of the 'Combat Log' option in the various menus.
 * @default Combat Log
 *
 * @param Icon:num
 * @text Icon
 * @parent General
 * @desc Icon used for each of the 'Combat Log' options.
 * @default 189
 *
 * @param HotKey:str
 * @text Hot Key
 * @parent General
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for quickly opening the Combat Log in battle.
 * @default shift
 *
 * @param StoredLogs:num
 * @text Stored Logs
 * @parent General
 * @desc How many combat logs are stored as a history?
 * This affects the Combat Log menu.
 * @default 5
 *
 * @param MainMenu
 * @text Main Menu
 *
 * @param ShowMainMenu:eval
 * @text Show in Main Menu?
 * @parent MainMenu
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Add the 'Combat Log' option to the Main Menu by default?
 * @default true
 *
 * @param PartyCommand
 * @text Window_PartyCommand
 *
 * @param ShowPartyCommand:eval
 * @text Show in Window?
 * @parent PartyCommand
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Add the 'Combat Log' option to Window_PartyCommand by default?
 * @default true
 *
 * @param ActorCommand
 * @text Window_ActorCommand
 *
 * @param ShowActorCommand:eval
 * @text Show in Window?
 * @parent ActorCommand
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Add the 'Combat Log' option to Window_ActorCommand by default?
 * @default true
 *
 * @param BattleHelpCombatLog:json
 * @text Help: Combat Log
 * @parent ActorCommand
 * @type note
 * @desc Help text for Combat Log command.
 * Requires VisuMZ_1_BattleCore!
 * @default "View the combat log."
 *
 */
/* ----------------------------------------------------------------------------
 * Combat Log Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~CombatLog:
 *
 * @param General
 *
 * @param ShowIcons:eval
 * @text Show Icons?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show icons in the Combat Log?
 * @default true
 *
 * @param AutoColor:eval
 * @text Auto Color?
 * @parent General
 * @type boolean
 * @on Use Auto Color
 * @off Don't Use
 * @desc Use auto colors for the Combat Log?
 * Requires VisuMZ_1_MessageCore
 * @default true
 *
 * @param ColorNumbers:eval
 * @text Color Numbers?
 * @parent General
 * @type boolean
 * @on Color Numbers
 * @off Don't Color
 * @desc Color numbers for damage differences?
 * @default true
 * 
 * @param BattleStart
 * @text Battle Start
 *
 * @param ShowBattleStart:eval
 * @text Show?
 * @parent BattleStart
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconBattleStart:num
 * @text Icon
 * @parent BattleStart
 * @desc Icon used for this event in the Combat Log.
 * @default 97
 *
 * @param TextBattleStart:str
 * @text Text
 * @parent BattleStart
 * @desc Text displayed for this event in the Combat Log.
 * You may use text codes.
 * @default \C[4]Battle Start!\C[0]
 * 
 * @param EnemyEmerge
 * @text Enemy Emerge
 *
 * @param ShowEnemyEmerge:eval
 * @text Show?
 * @parent EnemyEmerge
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconEnemyEmerge:num
 * @text Icon
 * @parent EnemyEmerge
 * @desc Icon used for this event in the Combat Log.
 * @default 5
 * 
 * @param Advantages
 * @text Battle Advantages
 *
 * @param ShowAdvantages:eval
 * @text Show?
 * @parent Advantages
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconPreemptive:num
 * @text Preemptive Icon
 * @parent Advantages
 * @desc Icon used for this event in the Combat Log.
 * @default 77
 *
 * @param IconSurprise:num
 * @text Surprised Icon
 * @parent Advantages
 * @desc Icon used for this event in the Combat Log.
 * @default 78
 * 
 * @param StartTurn
 * @text Start Turn
 *
 * @param ShowStartTurn:eval
 * @text Show?
 * @parent StartTurn
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconStartTurn:num
 * @text Icon
 * @parent StartTurn
 * @desc Icon used for this event in the Combat Log.
 * @default 97
 *
 * @param TextStartTurn:str
 * @text Text
 * @parent StartTurn
 * @desc Text displayed for this event in the Combat Log.
 * You may use text codes. %1 - Turn Count
 * @default \C[4]Turn \C[5]%1\C[4]: \C[6]Start!
 * 
 * @param EndTurn
 * @text End Turn
 *
 * @param ShowEndTurn:eval
 * @text Show?
 * @parent EndTurn
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconEndTurn:num
 * @text Icon
 * @parent EndTurn
 * @desc Icon used for this event in the Combat Log.
 * @default 97
 *
 * @param TextEndTurn:str
 * @text Text
 * @parent EndTurn
 * @desc Text displayed for this event in the Combat Log.
 * You may use text codes. %1 - Turn Count
 * @default \C[4]Turn \C[5]%1\C[4]: \C[6]End!
 * 
 * @param Victory
 * @text Battle Victory
 *
 * @param ShowVictory:eval
 * @text Show?
 * @parent Victory
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconVictory:num
 * @text Icon
 * @parent Victory
 * @desc Icon used for this event in the Combat Log.
 * @default 87
 * 
 * @param Escape
 * @text Battle Escape
 *
 * @param ShowEscape:eval
 * @text Show?
 * @parent Escape
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconEscape:num
 * @text Icon
 * @parent Escape
 * @desc Icon used for this event in the Combat Log.
 * @default 82
 * 
 * @param Defeat
 * @text Battle Defeat
 *
 * @param ShowDefeat:eval
 * @text Show?
 * @parent Defeat
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconDefeat:num
 * @text Icon
 * @parent Defeat
 * @desc Icon used for this event in the Combat Log.
 * @default 1
 * 
 * @param Actions
 * @text Action Text
 *
 * @param ShowSkillMessage1:eval
 * @text Show Skill Message 1?
 * @parent Actions
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param ShowSkillMessage2:eval
 * @text Show Skill Message 2?
 * @parent Actions
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param ShowItemMessage:eval
 * @text Show Item Message?
 * @parent Actions
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 * 
 * @param HP
 * @text HP Settings
 *
 * @param ShowHP:eval
 * @text Show?
 * @parent HP
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 * 
 * @param HealHP
 * @text HP Heal
 * @parent HP
 *
 * @param IconHealHP:num
 * @text Icon
 * @parent HealHP
 * @desc Icon used for this event in the Combat Log.
 * @default 72
 *
 * @param TextColorHealHP:num
 * @text Text Color
 * @parent HealHP
 * @type number
 * @min 0
 * @max 31
 * @desc Text color used for this event in the Combat Log.
 * @default 24
 * 
 * @param DmgHP
 * @text HP Damage
 * @parent HP
 *
 * @param IconDmgHP:num
 * @text Icon
 * @parent DmgHP
 * @desc Icon used for this event in the Combat Log.
 * @default 168
 *
 * @param TextColorDmgHP:num
 * @text Text Color
 * @parent DmgHP
 * @type number
 * @min 0
 * @max 31
 * @desc Text color used for this event in the Combat Log.
 * @default 2
 * 
 * @param NoDmgHP
 * @text No HP Damage
 * @parent HP
 *
 * @param IconNoDmgHP:num
 * @text Icon
 * @parent NoDmgHP
 * @desc Icon used for this event in the Combat Log.
 * @default 81
 *
 * @param TextColorNoDmgHP:num
 * @text Text Color
 * @parent NoDmgHP
 * @type number
 * @min 0
 * @max 31
 * @desc Text color used for this event in the Combat Log.
 * @default 6
 * 
 * @param MP
 * @text MP Settings
 *
 * @param ShowMP:eval
 * @text Show?
 * @parent MP
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 * 
 * @param HealMP
 * @text MP Heal
 * @parent MP
 *
 * @param IconHealMP:num
 * @text Icon
 * @parent HealMP
 * @desc Icon used for this event in the Combat Log.
 * @default 72
 *
 * @param TextColorHealMP:num
 * @text Text Color
 * @parent HealMP
 * @type number
 * @min 0
 * @max 31
 * @desc Text color used for this event in the Combat Log.
 * @default 4
 * 
 * @param DmgMP
 * @text MP Damage
 * @parent MP
 *
 * @param IconDmgMP:num
 * @text Icon
 * @parent DmgMP
 * @desc Icon used for this event in the Combat Log.
 * @default 171
 *
 * @param TextColorDmgMP:num
 * @text Text Color
 * @parent DmgMP
 * @type number
 * @min 0
 * @max 31
 * @desc Text color used for this event in the Combat Log.
 * @default 5
 * 
 * @param NoDmgMP
 * @text No MP Damage
 * @parent MP
 *
 * @param IconNoDmgMP:num
 * @text Icon
 * @parent NoDmgMP
 * @desc Icon used for this event in the Combat Log.
 * @default 81
 *
 * @param TextColorNoDmgMP:num
 * @text Text Color
 * @parent NoDmgMP
 * @type number
 * @min 0
 * @max 31
 * @desc Text color used for this event in the Combat Log.
 * @default 6
 * 
 * @param TP
 * @text TP Settings
 *
 * @param ShowTP:eval
 * @text Show?
 * @parent TP
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 * 
 * @param HealTP
 * @text TP Heal
 * @parent TP
 *
 * @param IconHealTP:num
 * @text Icon
 * @parent HealTP
 * @desc Icon used for this event in the Combat Log.
 * @default 164
 *
 * @param TextColorHealTP:num
 * @text Text Color
 * @parent HealTP
 * @type number
 * @min 0
 * @max 31
 * @desc Text color used for this event in the Combat Log.
 * @default 24
 * 
 * @param DmgTP
 * @text TP Damage
 * @parent TP
 *
 * @param IconDmgTP:num
 * @text Icon
 * @parent DmgTP
 * @desc Icon used for this event in the Combat Log.
 * @default 170
 *
 * @param TextColorDmgTP:num
 * @text Text Color
 * @parent DmgTP
 * @type number
 * @min 0
 * @max 31
 * @desc Text color used for this event in the Combat Log.
 * @default 28
 * 
 * @param NoDmgTP
 * @text No TP Damage
 * @parent TP
 *
 * @param IconNoDmgTP:num
 * @text Icon
 * @parent NoDmgTP
 * @desc Icon used for this event in the Combat Log.
 * @default 81
 *
 * @param TextColorNoDmgTP:num
 * @text Text Color
 * @parent NoDmgTP
 * @type number
 * @min 0
 * @max 31
 * @desc Text color used for this event in the Combat Log.
 * @default 6
 * 
 * @param States
 * @text State Settings
 *
 * @param ShowStateAdd:eval
 * @text Show State Add?
 * @parent States
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param ShowStateRemove:eval
 * @text Show State Remove?
 * @parent States
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param ShowStateCurrent:eval
 * @text Show State Current?
 * @parent States
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 * 
 * @param Buffs
 * @text Buff & Debuff Settings
 *
 * @param ShowAddBuff:eval
 * @text Show Add Buff?
 * @parent Buffs
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param ShowAddDebuff:eval
 * @text Show Add Debuff?
 * @parent Buffs
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param ShowEraseBuff:eval
 * @text Show Erase Buff?
 * @parent Buffs
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 * 
 * @param Counter
 * @text Counterattack
 *
 * @param ShowCounter:eval
 * @text Show?
 * @parent Counter
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconCounter:num
 * @text Icon
 * @parent Counter
 * @desc Icon used for this event in the Combat Log.
 * @default 77
 * 
 * @param Reflect
 * @text Reflection
 *
 * @param ShowReflect:eval
 * @text Show?
 * @parent Reflect
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconReflect:num
 * @text Icon
 * @parent Reflect
 * @desc Icon used for this event in the Combat Log.
 * @default 81
 * 
 * @param Subst
 * @text Substitute
 *
 * @param ShowSubst:eval
 * @text Show?
 * @parent Subst
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconSubst:num
 * @text Icon
 * @parent Subst
 * @desc Icon used for this event in the Combat Log.
 * @default 81
 * 
 * @param Fail
 * @text Effect Failure
 *
 * @param ShowFail:eval
 * @text Show?
 * @parent Fail
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconFail:num
 * @text Icon
 * @parent Fail
 * @desc Icon used for this event in the Combat Log.
 * @default 166
 * 
 * @param Critical
 * @text Critical Hit
 *
 * @param ShowCritical:eval
 * @text Show?
 * @parent Critical
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconCritical:num
 * @text Icon
 * @parent Critical
 * @desc Icon used for this event in the Combat Log.
 * @default 87
 * 
 * @param Miss
 * @text Missed Hit
 *
 * @param ShowMiss:eval
 * @text Show?
 * @parent Miss
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconMiss:num
 * @text Icon
 * @parent Miss
 * @desc Icon used for this event in the Combat Log.
 * @default 82
 * 
 * @param Evade
 * @text Evaded Hit
 *
 * @param ShowEvade:eval
 * @text Show?
 * @parent Evade
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconEvade:num
 * @text Icon
 * @parent Evade
 * @desc Icon used for this event in the Combat Log.
 * @default 82
 *
 */
/* ----------------------------------------------------------------------------
 * Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~BgSettings:
 *
 * @param SnapshotOpacity:num
 * @text Snapshop Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Snapshot opacity for the scene.
 * @default 192
 *
 * @param BgFilename1:str
 * @text Background 1
 * @type file
 * @dir img/titles1/
 * @desc Filename used for the bottom background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @param BgFilename2:str
 * @text Background 2
 * @type file
 * @dir img/titles2/
 * @desc Filename used for the upper background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param CombatLogBattle
 * @text Combat Log (Battle)
 *
 * @param CombatLogBattle_BgType:num
 * @text Background Type
 * @parent CombatLogBattle
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 1
 *
 * @param CombatLogBattle_RectJS:func
 * @text JS: X, Y, W, H
 * @parent CombatLogBattle
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const wx = 0;\nconst wy = 0;\nconst ww = Graphics.boxWidth;\nconst wh = Graphics.boxHeight;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param CombatLogMenu
 * @text Combat Log (Menu)
 *
 * @param CombatLogMenu_BgType:num
 * @text Background Type
 * @parent CombatLogMenu
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CombatLogMenu_RectJS:func
 * @text JS: X, Y, W, H
 * @parent CombatLogMenu
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const wx = 0;\nconst wy = this._historyWindow.y + this._historyWindow.height;\nconst ww = Graphics.boxWidth;\nconst wh = this.mainAreaHeight() - this._historyWindow.height;\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param CombatHistory
 * @text Combat History (Menu)
 *
 * @param CombatHistoryLatest:str
 * @text Latest Command
 * @parent CombatHistory
 * @desc Text displayed for latest battle.
 * %1 - Battle Count
 * @default Latest
 *
 * @param CombatHistoryPrevious:str
 * @text Past Command
 * @parent CombatHistory
 * @desc Text displayed for past battles.
 * %1 - Battle Count
 * @default Battle #%1
 *
 * @param CombatHistory_BgType:num
 * @text Background Type
 * @parent CombatHistory
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CombatHistory_RectJS:func
 * @text JS: X, Y, W, H
 * @parent CombatHistory
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const ww = Graphics.boxWidth;\nconst wh = this.calcWindowHeight(1, true);\nconst wx = 0;\nconst wy = this.mainAreaTop();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 */
/* ----------------------------------------------------------------------------
 * Compatibility Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Compatibility:
 *
 * @param VisuMZ_2_BattleSystemATB
 * @text Battle System - ATB
 * 
 * @param VisuMZ_2_BattleSystemATB_Interrupt
 * @text Interrupt
 * @parent VisuMZ_2_BattleSystemATB
 *
 * @param ShowBattleSysAtbInterrupt:eval
 * @text Show?
 * @parent VisuMZ_2_BattleSystemATB_Interrupt
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconBattleSysAtbInterrupt:num
 * @text Icon
 * @parent VisuMZ_2_BattleSystemATB_Interrupt
 * @desc Icon used for this event in the Combat Log.
 * @default 78
 *
 * @param TextBattleSysAtbInterrupt:str
 * @text Text
 * @parent VisuMZ_2_BattleSystemATB_Interrupt
 * @desc Text displayed for this event in the Combat Log.
 * You may use text codes. %1 - Target Name
 * @default %1 has been interrupted!
 *
 * @param VisuMZ_2_BattleSystemCTB
 * @text Battle System - CTB
 * 
 * @param VisuMZ_2_BattleSystemCTB_OrderChange
 * @text Order Change
 * @parent VisuMZ_2_BattleSystemCTB
 *
 * @param ShowBattleSysCtbOrderChange:eval
 * @text Show?
 * @parent VisuMZ_2_BattleSystemCTB_OrderChange
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconBattleSysCtbOrderChange:num
 * @text Icon
 * @parent VisuMZ_2_BattleSystemCTB_OrderChange
 * @desc Icon used for this event in the Combat Log.
 * @default 75
 *
 * @param TextBattleSysCtbOrderChange:str
 * @text Text
 * @parent VisuMZ_2_BattleSystemCTB_OrderChange
 * @desc Text displayed for this event in the Combat Log.
 * You may use text codes. %1 - Target Name
 * @default %1's turn order has changed!
 *
 * @param VisuMZ_2_BattleSystemSTB
 * @text Battle System - STB
 * 
 * @param VisuMZ_2_BattleSystemSTB_Instant
 * @text Instant
 * @parent VisuMZ_2_BattleSystemSTB
 *
 * @param ShowBattleSysStbInstant:eval
 * @text Show?
 * @parent VisuMZ_2_BattleSystemSTB_Instant
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param IconBattleSysStbInstant:num
 * @text Icon
 * @parent VisuMZ_2_BattleSystemSTB_Instant
 * @desc Icon used for this event in the Combat Log.
 * @default 73
 *
 * @param TextBattleSysStbInstant:str
 * @text Text
 * @parent VisuMZ_2_BattleSystemSTB_Instant
 * @desc Text displayed for this event in the Combat Log.
 * You may use text codes. %1 - Target Name
 * @default %1's gains an extra action!
 *
 * @param VisuMZ_3_AntiDmgBarriers
 * @text Anti-Damage Barriers
 * 
 * @param VisuMZ_3_AntiDmgBarriers_Cancel
 * @text Cancel Barrier
 * @parent VisuMZ_3_AntiDmgBarriers
 *
 * @param Show_AntiDmgBarrier_Cancel:eval
 * @text Show?
 * @parent VisuMZ_3_AntiDmgBarriers_Cancel
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param Text_AntiDmgBarrier_Cancel:str
 * @text Text
 * @parent VisuMZ_3_AntiDmgBarriers_Cancel
 * @desc Text displayed for this event in the Combat Log.
 * %1 - Target Name, %2 - State Name
 * @default %2 cancels damage for %1!
 * 
 * @param VisuMZ_3_AntiDmgBarriers_Nullify
 * @text Nullify Barrier
 * @parent VisuMZ_3_AntiDmgBarriers
 *
 * @param Show_AntiDmgBarrier_Nullify:eval
 * @text Show?
 * @parent VisuMZ_3_AntiDmgBarriers_Nullify
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param Text_AntiDmgBarrier_Nullify:str
 * @text Text
 * @parent VisuMZ_3_AntiDmgBarriers_Nullify
 * @desc Text displayed for this event in the Combat Log.
 * %1 - Target Name, %2 - State Name
 * @default %2 nullifies damage for %1!
 * 
 * @param VisuMZ_3_AntiDmgBarriers_Reduce
 * @text Reduction Barrier
 * @parent VisuMZ_3_AntiDmgBarriers
 *
 * @param Show_AntiDmgBarrier_Reduce:eval
 * @text Show?
 * @parent VisuMZ_3_AntiDmgBarriers_Reduce
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param Text_AntiDmgBarrier_Reduce:str
 * @text Text
 * @parent VisuMZ_3_AntiDmgBarriers_Reduce
 * @desc Text displayed for this event in the Combat Log.
 * %1 - Target Name, %2 - State Name
 * @default %2 reduces damage for %1!
 * 
 * @param VisuMZ_3_AntiDmgBarriers_Reduce
 * @text Reduction Barrier
 * @parent VisuMZ_3_AntiDmgBarriers
 *
 * @param Show_AntiDmgBarrier_Reduce:eval
 * @text Show?
 * @parent VisuMZ_3_AntiDmgBarriers_Reduce
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param Text_AntiDmgBarrier_Reduce:str
 * @text Text
 * @parent VisuMZ_3_AntiDmgBarriers_Reduce
 * @desc Text displayed for this event in the Combat Log.
 * %1 - Target Name, %2 - State Name
 * @default %2 reduces damage for %1!
 * 
 * @param VisuMZ_3_AntiDmgBarriers_Absorb
 * @text Absorption Barrier
 * @parent VisuMZ_3_AntiDmgBarriers
 *
 * @param Show_AntiDmgBarrier_Absorb:eval
 * @text Show?
 * @parent VisuMZ_3_AntiDmgBarriers_Absorb
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param Text_AntiDmgBarrier_Absorb:str
 * @text Text
 * @parent VisuMZ_3_AntiDmgBarriers_Absorb
 * @desc Text displayed for this event in the Combat Log.
 * %1 - Target Name, %2 - State Name, %3 - Damage
 * @default %2 absorbs \C[5]%2\C[0] damage for %1!
 * 
 * @param VisuMZ_3_AntiDmgBarriers_MpDisperse
 * @text MP Dispersion Barrier
 * @parent VisuMZ_3_AntiDmgBarriers
 *
 * @param Show_AntiDmgBarrier_MpDisperse:eval
 * @text Show?
 * @parent VisuMZ_3_AntiDmgBarriers_MpDisperse
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param Text_AntiDmgBarrier_MpDisperse:str
 * @text Text
 * @parent VisuMZ_3_AntiDmgBarriers_MpDisperse
 * @desc Text displayed for this event in the Combat Log.
 * %1 - Target Name, %2 - State Name, %3 - MP
 * @default %2 dispersed damage to %1's %3!
 * 
 * @param VisuMZ_3_AntiDmgBarriers_TpDisperse
 * @text TP Dispersion Barrier
 * @parent VisuMZ_3_AntiDmgBarriers
 *
 * @param Show_AntiDmgBarrier_TpDisperse:eval
 * @text Show?
 * @parent VisuMZ_3_AntiDmgBarriers_TpDisperse
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param Text_AntiDmgBarrier_TpDisperse:str
 * @text Text
 * @parent VisuMZ_3_AntiDmgBarriers_TpDisperse
 * @desc Text displayed for this event in the Combat Log.
 * %1 - Target Name, %2 - State Name, %3 - TP
 * @default %2 dispersed damage to %1's %3!
 *
 * @param VisuMZ_3_LifeStateEffects
 * @text Life State Effects
 * 
 * @param VisuMZ_3_LifeStateEffects_AutoLife
 * @text Auto Life
 * @parent VisuMZ_3_LifeStateEffects
 *
 * @param Show_LifeStateEffects_AutoLife:eval
 * @text Show?
 * @parent VisuMZ_3_LifeStateEffects_AutoLife
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param Icon_LifeStateEffects_AutoLife:num
 * @text Icon
 * @parent VisuMZ_3_LifeStateEffects_AutoLife
 * @desc Icon used for this event in the Combat Log.
 * @default 70
 *
 * @param Text_LifeStateEffects_AutoLife:str
 * @text Text
 * @parent VisuMZ_3_LifeStateEffects_AutoLife
 * @desc Text displayed for this event in the Combat Log.
 * You may use text codes. %1 - Target Name
 * @default %1 is automatically revived!
 * 
 * @param VisuMZ_3_LifeStateEffects_Curse
 * @text Curse
 * @parent VisuMZ_3_LifeStateEffects
 *
 * @param Show_LifeStateEffects_Curse:eval
 * @text Show?
 * @parent VisuMZ_3_LifeStateEffects_Curse
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param Icon_LifeStateEffects_Curse:num
 * @text Icon
 * @parent VisuMZ_3_LifeStateEffects_Curse
 * @desc Icon used for this event in the Combat Log.
 * @default 71
 *
 * @param Text_LifeStateEffects_Curse:str
 * @text Text
 * @parent VisuMZ_3_LifeStateEffects_Curse
 * @desc Text displayed for this event in the Combat Log.
 * You may use text codes. %1 - Target Name
 * @default %1's curse takes hold...
 * 
 * @param VisuMZ_3_LifeStateEffects_Doom
 * @text Doom
 * @parent VisuMZ_3_LifeStateEffects
 *
 * @param Show_LifeStateEffects_Doom:eval
 * @text Show?
 * @parent VisuMZ_3_LifeStateEffects_Doom
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param Icon_LifeStateEffects_Doom:num
 * @text Icon
 * @parent VisuMZ_3_LifeStateEffects_Doom
 * @desc Icon used for this event in the Combat Log.
 * @default 1
 *
 * @param Text_LifeStateEffects_Doom:str
 * @text Text
 * @parent VisuMZ_3_LifeStateEffects_Doom
 * @desc Text displayed for this event in the Combat Log.
 * You may use text codes. %1 - Target Name
 * @default %1 has fallen to doom.
 * 
 * @param VisuMZ_3_LifeStateEffects_Fragile
 * @text Fragile
 * @parent VisuMZ_3_LifeStateEffects
 *
 * @param Show_LifeStateEffects_Fragile:eval
 * @text Show?
 * @parent VisuMZ_3_LifeStateEffects_Fragile
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param Icon_LifeStateEffects_Fragile:num
 * @text Icon
 * @parent VisuMZ_3_LifeStateEffects_Fragile
 * @desc Icon used for this event in the Combat Log.
 * @default 166
 *
 * @param Text_LifeStateEffects_Fragile:str
 * @text Text
 * @parent VisuMZ_3_LifeStateEffects_Fragile
 * @desc Text displayed for this event in the Combat Log.
 * You may use text codes. %1 - Target Name
 * @default %1 was too fragile!
 * 
 * @param VisuMZ_3_LifeStateEffects_Guts
 * @text Guts
 * @parent VisuMZ_3_LifeStateEffects
 *
 * @param Show_LifeStateEffects_Guts:eval
 * @text Show?
 * @parent VisuMZ_3_LifeStateEffects_Guts
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param Icon_LifeStateEffects_Guts:num
 * @text Icon
 * @parent VisuMZ_3_LifeStateEffects_Guts
 * @desc Icon used for this event in the Combat Log.
 * @default 77
 *
 * @param Text_LifeStateEffects_Guts:str
 * @text Text
 * @parent VisuMZ_3_LifeStateEffects_Guts
 * @desc Text displayed for this event in the Combat Log.
 * You may use text codes. %1 - Target Name
 * @default %1 powers through a fatal blow!
 * 
 * @param VisuMZ_3_LifeStateEffects_Undead
 * @text Undead
 * @parent VisuMZ_3_LifeStateEffects
 *
 * @param Show_LifeStateEffects_Undead:eval
 * @text Show?
 * @parent VisuMZ_3_LifeStateEffects_Undead
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param Icon_LifeStateEffects_Undead:num
 * @text Icon
 * @parent VisuMZ_3_LifeStateEffects_Undead
 * @desc Icon used for this event in the Combat Log.
 * @default 10
 *
 * @param Text_LifeStateEffects_Undead:str
 * @text Text
 * @parent VisuMZ_3_LifeStateEffects_Undead
 * @desc Text displayed for this event in the Combat Log.
 * You may use text codes. %1 - Target Name
 * @default %1 suffers from being undead!
 *
 * @param VisuMZ_3_StealItems
 * @text Steal Items
 * 
 * @param VisuMZ_3_StealItems_Steal
 * @text Steal Text
 * @parent VisuMZ_3_StealItems
 *
 * @param Show_StealItems_Steal:eval
 * @text Show?
 * @parent VisuMZ_3_StealItems_Steal
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this event in the Combat Log?
 * @default true
 *
 * @param Icon_StealItems_Steal:num
 * @text Icon
 * @parent VisuMZ_3_StealItems_Steal
 * @desc Icon used for this event in the Combat Log.
 * @default 142
 *
 */
//=============================================================================

const _0x109a1a=_0x4202;(function(_0x1f56bb,_0x8e692){const _0x284475=_0x4202,_0x2bcd8b=_0x1f56bb();while(!![]){try{const _0x3340da=-parseInt(_0x284475(0x1b8))/0x1*(parseInt(_0x284475(0x298))/0x2)+-parseInt(_0x284475(0x339))/0x3*(-parseInt(_0x284475(0x317))/0x4)+-parseInt(_0x284475(0x19e))/0x5*(-parseInt(_0x284475(0x1c1))/0x6)+-parseInt(_0x284475(0x232))/0x7+-parseInt(_0x284475(0x203))/0x8*(-parseInt(_0x284475(0x198))/0x9)+-parseInt(_0x284475(0x315))/0xa+parseInt(_0x284475(0x1c7))/0xb;if(_0x3340da===_0x8e692)break;else _0x2bcd8b['push'](_0x2bcd8b['shift']());}catch(_0x73bb1a){_0x2bcd8b['push'](_0x2bcd8b['shift']());}}}(_0xe2a6,0x5476c));var label=_0x109a1a(0x24d),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x109a1a(0x223)](function(_0x237d67){const _0x3b73bc=_0x109a1a;return _0x237d67['status']&&_0x237d67[_0x3b73bc(0x288)][_0x3b73bc(0x255)]('['+label+']');})[0x0];VisuMZ[label][_0x109a1a(0x1b6)]=VisuMZ[label][_0x109a1a(0x1b6)]||{},VisuMZ[_0x109a1a(0x237)]=function(_0x4671c8,_0x1cba54){const _0x702c9f=_0x109a1a;for(const _0x55aab6 in _0x1cba54){if(_0x55aab6[_0x702c9f(0x371)](/(.*):(.*)/i)){const _0x5bcde5=String(RegExp['$1']),_0x45b316=String(RegExp['$2'])[_0x702c9f(0x18a)]()[_0x702c9f(0x304)]();let _0x130a66,_0x4caad1,_0x492a49;switch(_0x45b316){case'NUM':_0x130a66=_0x1cba54[_0x55aab6]!==''?Number(_0x1cba54[_0x55aab6]):0x0;break;case _0x702c9f(0x1d0):_0x4caad1=_0x1cba54[_0x55aab6]!==''?JSON[_0x702c9f(0x258)](_0x1cba54[_0x55aab6]):[],_0x130a66=_0x4caad1['map'](_0x2584ff=>Number(_0x2584ff));break;case _0x702c9f(0x322):_0x130a66=_0x1cba54[_0x55aab6]!==''?eval(_0x1cba54[_0x55aab6]):null;break;case _0x702c9f(0x32b):_0x4caad1=_0x1cba54[_0x55aab6]!==''?JSON[_0x702c9f(0x258)](_0x1cba54[_0x55aab6]):[],_0x130a66=_0x4caad1['map'](_0x3467e7=>eval(_0x3467e7));break;case'JSON':_0x130a66=_0x1cba54[_0x55aab6]!==''?JSON[_0x702c9f(0x258)](_0x1cba54[_0x55aab6]):'';break;case'ARRAYJSON':_0x4caad1=_0x1cba54[_0x55aab6]!==''?JSON[_0x702c9f(0x258)](_0x1cba54[_0x55aab6]):[],_0x130a66=_0x4caad1[_0x702c9f(0x23c)](_0x1862b9=>JSON[_0x702c9f(0x258)](_0x1862b9));break;case _0x702c9f(0x287):_0x130a66=_0x1cba54[_0x55aab6]!==''?new Function(JSON['parse'](_0x1cba54[_0x55aab6])):new Function(_0x702c9f(0x23b));break;case'ARRAYFUNC':_0x4caad1=_0x1cba54[_0x55aab6]!==''?JSON['parse'](_0x1cba54[_0x55aab6]):[],_0x130a66=_0x4caad1[_0x702c9f(0x23c)](_0x1f0159=>new Function(JSON[_0x702c9f(0x258)](_0x1f0159)));break;case _0x702c9f(0x24b):_0x130a66=_0x1cba54[_0x55aab6]!==''?String(_0x1cba54[_0x55aab6]):'';break;case'ARRAYSTR':_0x4caad1=_0x1cba54[_0x55aab6]!==''?JSON['parse'](_0x1cba54[_0x55aab6]):[],_0x130a66=_0x4caad1[_0x702c9f(0x23c)](_0x318a74=>String(_0x318a74));break;case'STRUCT':_0x492a49=_0x1cba54[_0x55aab6]!==''?JSON[_0x702c9f(0x258)](_0x1cba54[_0x55aab6]):{},_0x130a66=VisuMZ[_0x702c9f(0x237)]({},_0x492a49);break;case _0x702c9f(0x26c):_0x4caad1=_0x1cba54[_0x55aab6]!==''?JSON[_0x702c9f(0x258)](_0x1cba54[_0x55aab6]):[],_0x130a66=_0x4caad1['map'](_0x1a1c3f=>VisuMZ['ConvertParams']({},JSON[_0x702c9f(0x258)](_0x1a1c3f)));break;default:continue;}_0x4671c8[_0x5bcde5]=_0x130a66;}}return _0x4671c8;},(_0x4bab05=>{const _0x546724=_0x109a1a,_0x81b8ed=_0x4bab05[_0x546724(0x1ce)];for(const _0x4c2d82 of dependencies){if(!Imported[_0x4c2d82]){alert(_0x546724(0x253)['format'](_0x81b8ed,_0x4c2d82)),SceneManager[_0x546724(0x352)]();break;}}const _0xbe3bbd=_0x4bab05[_0x546724(0x288)];if(_0xbe3bbd[_0x546724(0x371)](/\[Version[ ](.*?)\]/i)){const _0x5200d4=Number(RegExp['$1']);_0x5200d4!==VisuMZ[label][_0x546724(0x2c8)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x546724(0x2b7)](_0x81b8ed,_0x5200d4)),SceneManager[_0x546724(0x352)]());}if(_0xbe3bbd[_0x546724(0x371)](/\[Tier[ ](\d+)\]/i)){const _0x19e8da=Number(RegExp['$1']);_0x19e8da<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'['format'](_0x81b8ed,_0x19e8da,tier)),SceneManager[_0x546724(0x352)]()):tier=Math[_0x546724(0x194)](_0x19e8da,tier);}VisuMZ[_0x546724(0x237)](VisuMZ[label]['Settings'],_0x4bab05[_0x546724(0x21d)]);})(pluginData),PluginManager[_0x109a1a(0x21e)](pluginData[_0x109a1a(0x1ce)],'CombatLogAddText',_0x556906=>{const _0xbb088a=_0x109a1a;VisuMZ['ConvertParams'](_0x556906,_0x556906);const _0x2dfc93=_0x556906[_0xbb088a(0x320)],_0x541893=_0x556906[_0xbb088a(0x19f)];$gameSystem[_0xbb088a(0x30d)](_0x2dfc93,_0x541893);}),PluginManager['registerCommand'](pluginData[_0x109a1a(0x1ce)],_0x109a1a(0x327),_0x5a84a6=>{const _0x50635a=_0x109a1a;VisuMZ[_0x50635a(0x237)](_0x5a84a6,_0x5a84a6),$gameSystem[_0x50635a(0x35a)]();}),PluginManager[_0x109a1a(0x21e)](pluginData[_0x109a1a(0x1ce)],_0x109a1a(0x260),_0x1412fb=>{const _0x5e22c8=_0x109a1a;VisuMZ[_0x5e22c8(0x237)](_0x1412fb,_0x1412fb);const _0x74e240=_0x1412fb[_0x5e22c8(0x36a)];$gameSystem[_0x5e22c8(0x21a)](_0x74e240);}),PluginManager[_0x109a1a(0x21e)](pluginData['name'],_0x109a1a(0x202),_0x297a1c=>{const _0x3dd2cf=_0x109a1a;VisuMZ[_0x3dd2cf(0x237)](_0x297a1c,_0x297a1c);const _0x53753a=_0x297a1c[_0x3dd2cf(0x1f5)];$gameSystem[_0x3dd2cf(0x34c)](_0x53753a);}),PluginManager[_0x109a1a(0x21e)](pluginData[_0x109a1a(0x1ce)],_0x109a1a(0x1b7),_0x2bbd40=>{const _0x48fbf2=_0x109a1a;VisuMZ[_0x48fbf2(0x237)](_0x2bbd40,_0x2bbd40);const _0x5d9a28=_0x2bbd40[_0x48fbf2(0x307)];$gameSystem['setMainMenuCombatLogVisible'](_0x5d9a28);}),PluginManager[_0x109a1a(0x21e)](pluginData[_0x109a1a(0x1ce)],_0x109a1a(0x313),_0x1d7235=>{const _0x206457=_0x109a1a;VisuMZ[_0x206457(0x237)](_0x1d7235,_0x1d7235);const _0x536046=_0x1d7235[_0x206457(0x307)];$gameSystem[_0x206457(0x1dc)](_0x536046);}),PluginManager['registerCommand'](pluginData[_0x109a1a(0x1ce)],_0x109a1a(0x221),_0x1b170e=>{const _0x4e2d48=_0x109a1a;VisuMZ['ConvertParams'](_0x1b170e,_0x1b170e);const _0x191e9b=_0x1b170e[_0x4e2d48(0x307)];$gameSystem[_0x4e2d48(0x37b)](_0x191e9b);}),VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x303)]={'BypassCombatLog':/<BYPASS COMBAT LOG>/i},ImageManager[_0x109a1a(0x34f)]=VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1b6)][_0x109a1a(0x2fa)][_0x109a1a(0x19f)],ImageManager[_0x109a1a(0x279)]=VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1b6)][_0x109a1a(0x24d)][_0x109a1a(0x24a)],ImageManager['combatLog_EnemyEmerge_Icon']=VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1b6)][_0x109a1a(0x24d)][_0x109a1a(0x259)],ImageManager[_0x109a1a(0x337)]=VisuMZ[_0x109a1a(0x24d)]['Settings'][_0x109a1a(0x24d)][_0x109a1a(0x33d)],ImageManager[_0x109a1a(0x2c3)]=VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1b6)]['CombatLog'][_0x109a1a(0x1a1)],ImageManager[_0x109a1a(0x2f1)]=VisuMZ[_0x109a1a(0x24d)]['Settings'][_0x109a1a(0x24d)][_0x109a1a(0x372)],ImageManager['combatLog_EndTurn_Icon']=VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1b6)][_0x109a1a(0x24d)][_0x109a1a(0x250)],ImageManager['combatLog_Result_Victory']=VisuMZ['CombatLog'][_0x109a1a(0x1b6)][_0x109a1a(0x24d)][_0x109a1a(0x330)],ImageManager['combatLog_Result_Escape']=VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1b6)]['CombatLog']['IconEscape'],ImageManager[_0x109a1a(0x227)]=VisuMZ[_0x109a1a(0x24d)]['Settings'][_0x109a1a(0x24d)]['IconDefeat'],ImageManager[_0x109a1a(0x228)]=VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1b6)][_0x109a1a(0x24d)]['IconCounter'],ImageManager[_0x109a1a(0x348)]=VisuMZ[_0x109a1a(0x24d)]['Settings'][_0x109a1a(0x24d)][_0x109a1a(0x252)],ImageManager['combatLog_Substitute_Icon']=VisuMZ[_0x109a1a(0x24d)]['Settings']['CombatLog'][_0x109a1a(0x2a5)],ImageManager[_0x109a1a(0x293)]=VisuMZ['CombatLog'][_0x109a1a(0x1b6)]['CombatLog'][_0x109a1a(0x22e)],ImageManager[_0x109a1a(0x2b9)]=VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1b6)][_0x109a1a(0x24d)][_0x109a1a(0x2bb)],ImageManager['combatLog_Miss_Icon']=VisuMZ[_0x109a1a(0x24d)]['Settings']['CombatLog'][_0x109a1a(0x272)],ImageManager[_0x109a1a(0x2d8)]=VisuMZ['CombatLog'][_0x109a1a(0x1b6)][_0x109a1a(0x24d)][_0x109a1a(0x2d2)],ImageManager[_0x109a1a(0x2f8)]=VisuMZ['CombatLog'][_0x109a1a(0x1b6)][_0x109a1a(0x24d)][_0x109a1a(0x222)],ImageManager['combatLog_HP_Dmg']=VisuMZ['CombatLog'][_0x109a1a(0x1b6)]['CombatLog'][_0x109a1a(0x1ac)],ImageManager[_0x109a1a(0x282)]=VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1b6)][_0x109a1a(0x24d)][_0x109a1a(0x1c2)],ImageManager[_0x109a1a(0x1cb)]=VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1b6)][_0x109a1a(0x24d)][_0x109a1a(0x2de)],ImageManager[_0x109a1a(0x31c)]=VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1b6)][_0x109a1a(0x24d)]['IconDmgMP'],ImageManager[_0x109a1a(0x368)]=VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1b6)][_0x109a1a(0x24d)][_0x109a1a(0x28a)],ImageManager[_0x109a1a(0x1f2)]=VisuMZ['CombatLog']['Settings']['CombatLog'][_0x109a1a(0x2b2)],ImageManager[_0x109a1a(0x321)]=VisuMZ['CombatLog'][_0x109a1a(0x1b6)][_0x109a1a(0x24d)][_0x109a1a(0x377)],ImageManager[_0x109a1a(0x2ab)]=VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1b6)][_0x109a1a(0x24d)][_0x109a1a(0x2c9)],TextManager[_0x109a1a(0x19a)]=VisuMZ['CombatLog'][_0x109a1a(0x1b6)]['General']['Name'],TextManager['combatLog_BattleStart']=VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1b6)][_0x109a1a(0x24d)][_0x109a1a(0x2f5)],TextManager['combatLog_StartTurn']=VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1b6)]['CombatLog'][_0x109a1a(0x1c6)],TextManager[_0x109a1a(0x35c)]=VisuMZ[_0x109a1a(0x24d)]['Settings'][_0x109a1a(0x24d)][_0x109a1a(0x30c)],TextManager[_0x109a1a(0x357)]=VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1b6)]['General'][_0x109a1a(0x274)]??_0x109a1a(0x305),TextManager[_0x109a1a(0x1f3)]=VisuMZ[_0x109a1a(0x24d)]['Settings'][_0x109a1a(0x329)][_0x109a1a(0x341)],TextManager['_combatLog_HistoryFmt']=VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1b6)][_0x109a1a(0x329)][_0x109a1a(0x2d9)],ColorManager[_0x109a1a(0x2f8)]=VisuMZ['CombatLog'][_0x109a1a(0x1b6)][_0x109a1a(0x24d)][_0x109a1a(0x229)],ColorManager[_0x109a1a(0x1a2)]=VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1b6)][_0x109a1a(0x24d)][_0x109a1a(0x1e4)],ColorManager[_0x109a1a(0x282)]=VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1b6)][_0x109a1a(0x24d)][_0x109a1a(0x1e2)],ColorManager[_0x109a1a(0x1cb)]=VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1b6)][_0x109a1a(0x24d)]['TextColorHealMP'],ColorManager[_0x109a1a(0x31c)]=VisuMZ['CombatLog'][_0x109a1a(0x1b6)][_0x109a1a(0x24d)][_0x109a1a(0x1d1)],ColorManager[_0x109a1a(0x368)]=VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1b6)][_0x109a1a(0x24d)][_0x109a1a(0x28a)],ColorManager[_0x109a1a(0x1f2)]=VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1b6)][_0x109a1a(0x24d)][_0x109a1a(0x2f0)],ColorManager['combatLog_TP_Dmg']=VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1b6)][_0x109a1a(0x24d)][_0x109a1a(0x365)],ColorManager[_0x109a1a(0x2ab)]=VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1b6)]['CombatLog'][_0x109a1a(0x27d)],ColorManager['applyCombatLogColor']=function(_0x487ab3,_0x1f94a6){const _0x18b788=_0x109a1a;if(!VisuMZ[_0x18b788(0x24d)][_0x18b788(0x1b6)]['CombatLog'][_0x18b788(0x332)])return Math['abs'](_0x1f94a6);const _0x20c11c='combatLog_%1_%2';let _0x26cc37;if(_0x1f94a6>0x0)_0x26cc37=_0x20c11c[_0x18b788(0x2b7)](_0x487ab3,_0x18b788(0x2ca));else _0x1f94a6===0x0?_0x26cc37=_0x20c11c['format'](_0x487ab3,_0x18b788(0x1ae)):_0x26cc37=_0x20c11c['format'](_0x487ab3,_0x18b788(0x333));return _0x1f94a6=Math['abs'](_0x1f94a6),ColorManager[_0x26cc37]?_0x18b788(0x1f6)[_0x18b788(0x2b7)](ColorManager[_0x26cc37],_0x1f94a6):_0x1f94a6;},SceneManager[_0x109a1a(0x2d1)]=function(){const _0x1c747a=_0x109a1a;return this['_scene']&&this[_0x1c747a(0x284)]['constructor']===Scene_Battle;},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x24f)]=BattleManager[_0x109a1a(0x1a6)],BattleManager[_0x109a1a(0x1a6)]=function(){const _0x59a188=_0x109a1a;VisuMZ['CombatLog']['BattleManager_startBattle'][_0x59a188(0x362)](this),this['startBattleCombatLog']();},BattleManager[_0x109a1a(0x1d6)]=function(){const _0x150a0e=_0x109a1a,_0x5388f3=VisuMZ['CombatLog']['Settings']['CombatLog'];if(_0x5388f3[_0x150a0e(0x267)]){$gameSystem[_0x150a0e(0x379)](),$gameSystem['setBypassCombatLog'](![]),$gameSystem[_0x150a0e(0x35a)]();let _0x4aec7a=TextManager[_0x150a0e(0x1ff)],_0x388a47=ImageManager[_0x150a0e(0x279)];$gameSystem[_0x150a0e(0x30d)](_0x4aec7a,_0x388a47),$gameSystem[_0x150a0e(0x35a)]();}if(_0x5388f3[_0x150a0e(0x22d)])for(const _0x2e2629 of $gameTroop['aliveMembers']()){let _0x2608e3=TextManager['emerge'][_0x150a0e(0x2b7)](_0x2e2629['combatLogName']()),_0x1bcc9a=ImageManager[_0x150a0e(0x37e)];$gameSystem[_0x150a0e(0x30d)](_0x2608e3,_0x1bcc9a);}if(_0x5388f3['ShowAdvantages']){if(this[_0x150a0e(0x215)]){let _0x260e9d=TextManager[_0x150a0e(0x1bc)][_0x150a0e(0x2b7)]($gameParty[_0x150a0e(0x1bb)]()),_0x4b2e2e=ImageManager['combatLog_Preemptive_Icon'];$gameSystem[_0x150a0e(0x30d)](_0x260e9d,_0x4b2e2e);}else{if(this[_0x150a0e(0x200)]){let _0x835f85=TextManager[_0x150a0e(0x261)][_0x150a0e(0x2b7)]($gameParty['combatLogName']()),_0x41de14=ImageManager['combatLog_Surprise_Icon'];$gameSystem[_0x150a0e(0x30d)](_0x835f85,_0x41de14);}}}},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1e9)]=BattleManager['endTurn'],BattleManager[_0x109a1a(0x32c)]=function(){const _0x38f0b4=_0x109a1a;if($gameTroop[_0x38f0b4(0x363)]()>0x0&&VisuMZ[_0x38f0b4(0x24d)][_0x38f0b4(0x1b6)][_0x38f0b4(0x24d)][_0x38f0b4(0x205)]){$gameSystem[_0x38f0b4(0x35a)]();let _0x3a0f78=TextManager[_0x38f0b4(0x35c)][_0x38f0b4(0x2b7)]($gameTroop['turnCount']()),_0x4c60dd=ImageManager[_0x38f0b4(0x1db)];$gameSystem[_0x38f0b4(0x30d)](_0x3a0f78,_0x4c60dd),$gameSystem[_0x38f0b4(0x35a)]();}VisuMZ[_0x38f0b4(0x24d)][_0x38f0b4(0x1e9)][_0x38f0b4(0x362)](this);},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1d3)]=BattleManager['updateTurnEnd'],BattleManager[_0x109a1a(0x2e2)]=function(){const _0x1ab55f=_0x109a1a;VisuMZ['CombatLog'][_0x1ab55f(0x1d3)][_0x1ab55f(0x362)](this);if(this[_0x1ab55f(0x18c)]()&&VisuMZ[_0x1ab55f(0x24d)][_0x1ab55f(0x1b6)][_0x1ab55f(0x24d)]['ShowStartTurn']&&$gameTroop[_0x1ab55f(0x363)]()>0x0){$gameSystem[_0x1ab55f(0x35a)]();let _0x57f610=TextManager[_0x1ab55f(0x2cc)][_0x1ab55f(0x2b7)]($gameTroop[_0x1ab55f(0x363)]()),_0x31474b=ImageManager['combatLog_StartTurn_Icon'];$gameSystem[_0x1ab55f(0x30d)](_0x57f610,_0x31474b);}},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x37a)]=BattleManager[_0x109a1a(0x346)],BattleManager[_0x109a1a(0x346)]=function(){const _0x14e0cd=_0x109a1a;$gameSystem[_0x14e0cd(0x21a)](!![]),VisuMZ['CombatLog'][_0x14e0cd(0x37a)][_0x14e0cd(0x362)](this),$gameSystem['setBypassCombatLog'](![]);if(VisuMZ[_0x14e0cd(0x24d)][_0x14e0cd(0x1b6)][_0x14e0cd(0x24d)][_0x14e0cd(0x27f)]){$gameSystem[_0x14e0cd(0x35a)]();let _0x5626bb=TextManager[_0x14e0cd(0x331)][_0x14e0cd(0x2b7)]($gameParty[_0x14e0cd(0x1bb)]()),_0x53652e=ImageManager[_0x14e0cd(0x2d3)];$gameSystem['addTextToCombatLog'](_0x5626bb,_0x53652e),$gameSystem[_0x14e0cd(0x35a)]();}},VisuMZ[_0x109a1a(0x24d)]['BattleManager_processAbort']=BattleManager[_0x109a1a(0x1a5)],BattleManager[_0x109a1a(0x1a5)]=function(){const _0x40756a=_0x109a1a;$gameSystem[_0x40756a(0x21a)](!![]),VisuMZ[_0x40756a(0x24d)]['BattleManager_processAbort'][_0x40756a(0x362)](this),$gameSystem['setBypassCombatLog'](![]),$gameSystem[_0x40756a(0x35a)]();},VisuMZ[_0x109a1a(0x24d)]['BattleManager_onEscapeSuccess']=BattleManager[_0x109a1a(0x197)],BattleManager['onEscapeSuccess']=function(){const _0x2f0ae9=_0x109a1a;VisuMZ['CombatLog'][_0x2f0ae9(0x36f)][_0x2f0ae9(0x362)](this);if(VisuMZ['CombatLog'][_0x2f0ae9(0x1b6)][_0x2f0ae9(0x24d)][_0x2f0ae9(0x2c6)]){$gameSystem['addHorzLineToCombatLog']();let _0x1db001=TextManager[_0x2f0ae9(0x25d)][_0x2f0ae9(0x2b7)]($gameParty[_0x2f0ae9(0x1bb)]()),_0x56323b=ImageManager[_0x2f0ae9(0x2d5)];$gameSystem[_0x2f0ae9(0x30d)](_0x1db001,_0x56323b),$gameSystem[_0x2f0ae9(0x35a)]();}},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x369)]=BattleManager[_0x109a1a(0x21f)],BattleManager[_0x109a1a(0x21f)]=function(){const _0x424456=_0x109a1a;VisuMZ[_0x424456(0x24d)][_0x424456(0x369)][_0x424456(0x362)](this);if(VisuMZ['CombatLog']['Settings'][_0x424456(0x24d)][_0x424456(0x2c6)]){$gameSystem['addHorzLineToCombatLog']();let _0x5c10b5=TextManager[_0x424456(0x25d)][_0x424456(0x2b7)]($gameParty[_0x424456(0x1bb)]()),_0x378c39=ImageManager['combatLog_Result_Escape'];$gameSystem[_0x424456(0x30d)](_0x5c10b5,_0x378c39),$gameSystem[_0x424456(0x30d)](TextManager[_0x424456(0x212)],_0x378c39),$gameSystem[_0x424456(0x35a)]();}},VisuMZ['CombatLog'][_0x109a1a(0x2e4)]=BattleManager['processDefeat'],BattleManager[_0x109a1a(0x192)]=function(){const _0x316169=_0x109a1a;VisuMZ['CombatLog'][_0x316169(0x2e4)][_0x316169(0x362)](this);if(VisuMZ[_0x316169(0x24d)][_0x316169(0x1b6)][_0x316169(0x24d)][_0x316169(0x2a9)]){$gameSystem[_0x316169(0x35a)]();let _0x432c96=TextManager['defeat'][_0x316169(0x2b7)]($gameParty[_0x316169(0x1bb)]()),_0x2d13f8=ImageManager[_0x316169(0x227)];$gameSystem[_0x316169(0x30d)](_0x432c96,_0x2d13f8),$gameSystem[_0x316169(0x35a)]();}},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1b5)]=Game_System['prototype'][_0x109a1a(0x295)],Game_System[_0x109a1a(0x311)]['initialize']=function(){const _0x5fabfa=_0x109a1a;VisuMZ[_0x5fabfa(0x24d)][_0x5fabfa(0x1b5)][_0x5fabfa(0x362)](this),this[_0x5fabfa(0x36c)](),this[_0x5fabfa(0x323)]();},Game_System['COMBATLOG_MAXIMUM_BATTLE_ENTRIES']=VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1b6)][_0x109a1a(0x2fa)]['StoredLogs']??0x5,Game_System[_0x109a1a(0x311)][_0x109a1a(0x36c)]=function(){const _0x5d37ae=_0x109a1a;this[_0x5d37ae(0x27c)]=[],this[_0x5d37ae(0x26d)]=![];},Game_System['prototype'][_0x109a1a(0x1ca)]=function(_0x78306){const _0x4c6b3c=_0x109a1a;if(this[_0x4c6b3c(0x27c)]===undefined)this[_0x4c6b3c(0x36c)]();return _0x78306=_0x78306||0x0,this['_combatLogs'][_0x78306]=this[_0x4c6b3c(0x27c)][_0x78306]||[],this['_combatLogs'][_0x78306];},Game_System[_0x109a1a(0x311)]['addTextToCombatLog']=function(_0x27269d,_0x19aca0){const _0x54dc13=_0x109a1a;if(this[_0x54dc13(0x204)]())return;if(!_0x27269d)return;_0x19aca0=_0x19aca0||0x0,_0x27269d=VisuMZ[_0x54dc13(0x24d)][_0x54dc13(0x2a0)](_0x27269d);const _0x3598ef=this[_0x54dc13(0x1ca)](),_0xbb21c5=_0x27269d[_0x54dc13(0x2e0)]('\x0a');while(_0xbb21c5[_0x54dc13(0x35b)]>0x0){let _0x2057fe=_0xbb21c5['shift']();VisuMZ[_0x54dc13(0x24d)]['Settings'][_0x54dc13(0x24d)][_0x54dc13(0x306)]&&(_0x2057fe='\x5cI[%1]%2'['format'](_0x19aca0,_0x2057fe)),_0x19aca0=0x0,_0x3598ef[_0x54dc13(0x1f0)](_0x2057fe);}this['refreshCombatLog']();},Game_System['prototype'][_0x109a1a(0x35a)]=function(){const _0x25922d=_0x109a1a;if(this[_0x25922d(0x204)]())return;const _0x20c12f=this['getCombatLog'](),_0x50128f=_0x20c12f[_0x20c12f[_0x25922d(0x35b)]-0x1];if(_0x50128f===_0x25922d(0x380))return;_0x20c12f[_0x25922d(0x1f0)]('=====HORZLINE====='),this[_0x25922d(0x2cb)]();},VisuMZ['CombatLog'][_0x109a1a(0x2a0)]=function(_0x274464){const _0x5874d1=_0x109a1a;while(_0x274464[_0x5874d1(0x371)](/\\V\[(\d+)\]/gi)){_0x274464=_0x274464[_0x5874d1(0x231)](/\\V\[(\d+)\]/gi,(_0x4b094f,_0x33fae3)=>$gameVariables[_0x5874d1(0x24c)](parseInt(_0x33fae3)));}return _0x274464;},Game_System[_0x109a1a(0x311)][_0x109a1a(0x379)]=function(){const _0x4cb610=_0x109a1a;if(this['_combatLogs']===undefined)this[_0x4cb610(0x36c)]();this['_combatLogs'][_0x4cb610(0x242)]([]);while(this['_combatLogs']['length']>Game_System[_0x4cb610(0x1f9)]){this[_0x4cb610(0x27c)][_0x4cb610(0x21b)]();}},Game_System['prototype'][_0x109a1a(0x280)]=function(){const _0x10b89b=_0x109a1a;if(this[_0x10b89b(0x27c)]===undefined)this[_0x10b89b(0x36c)]();return this[_0x10b89b(0x27c)]['length'];},Game_System['prototype'][_0x109a1a(0x204)]=function(){const _0x5c6d72=_0x109a1a;if(this['_bypassAddToCombatLog']===undefined)this['initCombatLogBase']();return this[_0x5c6d72(0x26d)];},Game_System[_0x109a1a(0x311)]['setBypassCombatLog']=function(_0x842d1){const _0x273677=_0x109a1a;if(this[_0x273677(0x26d)]===undefined)this[_0x273677(0x36c)]();this[_0x273677(0x26d)]=_0x842d1;;},Game_System[_0x109a1a(0x311)][_0x109a1a(0x2cb)]=function(){const _0x4bac1c=_0x109a1a;if(!SceneManager['isSceneBattle']())return;const _0x288953=SceneManager[_0x4bac1c(0x284)]['_combatLogWindow'];_0x288953&&_0x288953[_0x4bac1c(0x35f)]();},Game_System[_0x109a1a(0x311)][_0x109a1a(0x323)]=function(){const _0x2014dd=_0x109a1a,_0x413d48=VisuMZ['CombatLog'][_0x2014dd(0x1b6)][_0x2014dd(0x2fa)];this[_0x2014dd(0x263)]={'mainMenu':_0x413d48['ShowMainMenu'],'partyCmd':_0x413d48[_0x2014dd(0x1b1)],'actorCmd':_0x413d48['ShowActorCommand'],'hotkeyOn':!![]};},Game_System[_0x109a1a(0x311)]['isMainMenuCombatLogVisible']=function(){const _0x38c44c=_0x109a1a;if(this[_0x38c44c(0x263)]===undefined)this[_0x38c44c(0x323)]();return this[_0x38c44c(0x263)]['mainMenu'];},Game_System[_0x109a1a(0x311)][_0x109a1a(0x358)]=function(){const _0x16dbc2=_0x109a1a;if(this['_combatLogs']===undefined)this[_0x16dbc2(0x36c)]();return this[_0x16dbc2(0x280)]()>0x0;},Game_System[_0x109a1a(0x311)][_0x109a1a(0x2b6)]=function(_0x1b1ba6){const _0x3faaf6=_0x109a1a;if(this['_combatLogAccess']===undefined)this[_0x3faaf6(0x323)]();this['_combatLogAccess'][_0x3faaf6(0x2fd)]=_0x1b1ba6;},Game_System[_0x109a1a(0x311)][_0x109a1a(0x1c8)]=function(){const _0x49fa7a=_0x109a1a;if(this[_0x49fa7a(0x263)]===undefined)this[_0x49fa7a(0x323)]();return this[_0x49fa7a(0x263)]['partyCmd'];},Game_System['prototype'][_0x109a1a(0x1dc)]=function(_0x24bb9e){const _0x30ba29=_0x109a1a;if(this['_combatLogAccess']===undefined)this[_0x30ba29(0x323)]();this[_0x30ba29(0x263)][_0x30ba29(0x326)]=_0x24bb9e;},Game_System[_0x109a1a(0x311)][_0x109a1a(0x308)]=function(){const _0x3bf2a3=_0x109a1a;if(this[_0x3bf2a3(0x263)]===undefined)this['initCombatLogAccess']();return this['_combatLogAccess'][_0x3bf2a3(0x26a)];},Game_System[_0x109a1a(0x311)]['setActorCmdCombatLogVisible']=function(_0x21bb82){const _0x5b8087=_0x109a1a;if(this['_combatLogAccess']===undefined)this['initCombatLogAccess']();this[_0x5b8087(0x263)][_0x5b8087(0x26a)]=_0x21bb82;},Game_System['prototype'][_0x109a1a(0x318)]=function(){const _0x13ee11=_0x109a1a;if(this[_0x13ee11(0x263)]===undefined)this[_0x13ee11(0x323)]();return this['_combatLogAccess']['hotkeyOn'];},Game_System[_0x109a1a(0x311)]['setCombatLogHotKeyActive']=function(_0x254672){const _0x115219=_0x109a1a;if(this[_0x115219(0x263)]===undefined)this['initCombatLogAccess']();this['_combatLogAccess']['hotkeyOn']=_0x254672;},VisuMZ[_0x109a1a(0x24d)]['Game_BattlerBase_setHp']=Game_BattlerBase['prototype'][_0x109a1a(0x2e9)],Game_BattlerBase['prototype'][_0x109a1a(0x2e9)]=function(_0x1e85e9){const _0x273617=_0x109a1a,_0x493017=this['_hp'];VisuMZ['CombatLog'][_0x273617(0x374)][_0x273617(0x362)](this,_0x1e85e9);if(!SceneManager[_0x273617(0x2d1)]())return;if(this[_0x273617(0x35d)])return;if(!VisuMZ['CombatLog'][_0x273617(0x1b6)][_0x273617(0x24d)][_0x273617(0x18e)])return;if(this[_0x273617(0x1cc)])return;if(this['_tempBattler'])return;const _0x267dd1=_0x1e85e9;let _0x15e08c,_0x18481b,_0x878fc5=_0x267dd1-_0x493017;if(_0x267dd1>_0x493017)_0x15e08c=this[_0x273617(0x2aa)]()?TextManager[_0x273617(0x2f7)]:TextManager[_0x273617(0x36e)],_0x18481b=ImageManager[_0x273617(0x2f8)];else _0x267dd1===_0x493017?(_0x15e08c=this[_0x273617(0x2aa)]()?TextManager[_0x273617(0x264)]:TextManager[_0x273617(0x1ef)],_0x18481b=ImageManager['combatLog_HP_NoDmg']):(_0x15e08c=this[_0x273617(0x2aa)]()?TextManager[_0x273617(0x356)]:TextManager[_0x273617(0x277)],_0x18481b=ImageManager[_0x273617(0x1a2)]);_0x878fc5=ColorManager[_0x273617(0x25b)]('HP',_0x878fc5);let _0x45f43e=_0x15e08c[_0x273617(0x2b7)](this[_0x273617(0x1bb)](),_0x878fc5,TextManager['hp']);$gameSystem[_0x273617(0x30d)](_0x45f43e,_0x18481b);},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x335)]=Game_BattlerBase['prototype'][_0x109a1a(0x376)],Game_BattlerBase[_0x109a1a(0x311)][_0x109a1a(0x376)]=function(_0x3555b9){const _0x2ee798=_0x109a1a,_0x37fc39=this[_0x2ee798(0x28c)];VisuMZ['CombatLog'][_0x2ee798(0x335)][_0x2ee798(0x362)](this,_0x3555b9);if(!SceneManager['isSceneBattle']())return;if(this[_0x2ee798(0x35d)])return;if(!VisuMZ[_0x2ee798(0x24d)][_0x2ee798(0x1b6)][_0x2ee798(0x24d)][_0x2ee798(0x1dd)])return;if(this[_0x2ee798(0x1cc)])return;if(this[_0x2ee798(0x25f)])return;const _0x53cd3c=_0x3555b9;let _0x5362be,_0x2c55f9,_0x385c8e=_0x53cd3c-_0x37fc39;if(_0x53cd3c>_0x37fc39)_0x5362be=this[_0x2ee798(0x2aa)]()?TextManager['actorRecovery']:TextManager[_0x2ee798(0x36e)],_0x2c55f9=ImageManager['combatLog_MP_Heal'];else _0x53cd3c===_0x37fc39?(_0x5362be=this[_0x2ee798(0x2aa)]()?TextManager['actorLoss']:TextManager['enemyLoss'],_0x2c55f9=ImageManager[_0x2ee798(0x368)]):(_0x5362be=this[_0x2ee798(0x2aa)]()?TextManager[_0x2ee798(0x31e)]:TextManager[_0x2ee798(0x224)],_0x2c55f9=ImageManager['combatLog_MP_Dmg']);_0x385c8e=ColorManager[_0x2ee798(0x25b)]('MP',_0x385c8e);let _0x18e7a9=_0x5362be[_0x2ee798(0x2b7)](this['combatLogName'](),_0x385c8e,TextManager['mp']);$gameSystem[_0x2ee798(0x30d)](_0x18e7a9,_0x2c55f9);},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x29a)]=Game_BattlerBase['prototype'][_0x109a1a(0x31a)],Game_BattlerBase[_0x109a1a(0x311)][_0x109a1a(0x31a)]=function(_0x2b3ae4){const _0x2e19f8=_0x109a1a,_0x4510bc=this['_tp'];VisuMZ[_0x2e19f8(0x24d)][_0x2e19f8(0x29a)]['call'](this,_0x2b3ae4);if(!SceneManager[_0x2e19f8(0x2d1)]())return;if(this['_combatLogPayment'])return;if(this['_combatLogSilentTp'])return;if(!VisuMZ['CombatLog'][_0x2e19f8(0x1b6)]['CombatLog'][_0x2e19f8(0x2bc)])return;if(this[_0x2e19f8(0x1cc)])return;if(this['_tempBattler'])return;const _0x19e1f2=_0x2b3ae4;let _0x180feb,_0x33794a,_0x556123=_0x19e1f2-_0x4510bc;if(_0x19e1f2>_0x4510bc)_0x180feb=this[_0x2e19f8(0x2aa)]()?TextManager[_0x2e19f8(0x2f7)]:TextManager[_0x2e19f8(0x36e)],_0x33794a=ImageManager[_0x2e19f8(0x1f2)];else _0x19e1f2===_0x4510bc?(_0x180feb=this[_0x2e19f8(0x2aa)]()?TextManager[_0x2e19f8(0x31e)]:TextManager[_0x2e19f8(0x224)],_0x33794a=ImageManager[_0x2e19f8(0x2ab)]):(_0x180feb=this[_0x2e19f8(0x2aa)]()?TextManager[_0x2e19f8(0x31e)]:TextManager[_0x2e19f8(0x224)],_0x33794a=ImageManager['combatLog_TP_Dmg']);_0x556123=ColorManager[_0x2e19f8(0x25b)]('TP',_0x556123);let _0x39eed2=_0x180feb[_0x2e19f8(0x2b7)](this['combatLogName'](),_0x556123,TextManager['tp']);$gameSystem[_0x2e19f8(0x30d)](_0x39eed2,_0x33794a);},VisuMZ[_0x109a1a(0x24d)]['Game_Battler_gainSilentTp']=Game_Battler[_0x109a1a(0x311)][_0x109a1a(0x316)],Game_Battler['prototype']['gainSilentTp']=function(_0x32f28b){const _0x57e109=_0x109a1a;this[_0x57e109(0x309)]=!![],VisuMZ[_0x57e109(0x24d)]['Game_Battler_gainSilentTp']['call'](this,_0x32f28b),this['_combatLogSilentTp']=![];},VisuMZ['CombatLog'][_0x109a1a(0x1b0)]=Game_Battler[_0x109a1a(0x311)][_0x109a1a(0x30e)],Game_Battler[_0x109a1a(0x311)][_0x109a1a(0x30e)]=function(_0x4763b3){const _0x2bb4fc=_0x109a1a;this[_0x2bb4fc(0x35d)]=!![],VisuMZ['CombatLog'][_0x2bb4fc(0x1b0)][_0x2bb4fc(0x362)](this,_0x4763b3),this['_combatLogPayment']=![];},VisuMZ['CombatLog'][_0x109a1a(0x1f1)]=Game_Battler[_0x109a1a(0x311)]['addState'],Game_Battler[_0x109a1a(0x311)]['addState']=function(_0xb15b6d){const _0x46b5f9=_0x109a1a,_0x284ce3=this[_0x46b5f9(0x2ed)](_0xb15b6d);VisuMZ[_0x46b5f9(0x24d)][_0x46b5f9(0x1f1)][_0x46b5f9(0x362)](this,_0xb15b6d);const _0x2131f3=this[_0x46b5f9(0x2ed)](_0xb15b6d);this[_0x46b5f9(0x334)](_0xb15b6d,_0x284ce3,_0x2131f3);},VisuMZ[_0x109a1a(0x24d)]['Game_Battler_removeState']=Game_Battler[_0x109a1a(0x311)][_0x109a1a(0x22b)],Game_Battler[_0x109a1a(0x311)][_0x109a1a(0x22b)]=function(_0x83f833){const _0x3a18fd=_0x109a1a,_0x581c49=this[_0x3a18fd(0x2ed)](_0x83f833);VisuMZ['CombatLog'][_0x3a18fd(0x1e5)]['call'](this,_0x83f833);const _0x1d0760=this[_0x3a18fd(0x2ed)](_0x83f833);this[_0x3a18fd(0x334)](_0x83f833,_0x581c49,_0x1d0760);},Game_Battler[_0x109a1a(0x311)][_0x109a1a(0x334)]=function(_0x381f99,_0x2a3b22,_0x20455a){const _0x257072=_0x109a1a;if(!SceneManager['isSceneBattle']())return;if(this['_tempActor'])return;if(this[_0x257072(0x25f)])return;const _0x24726d=$dataStates[_0x381f99];if(!_0x24726d)return;if(_0x24726d[_0x257072(0x25e)][_0x257072(0x371)](VisuMZ[_0x257072(0x24d)][_0x257072(0x303)][_0x257072(0x2e1)]))return;const _0x4b021e=VisuMZ[_0x257072(0x24d)][_0x257072(0x1b6)][_0x257072(0x24d)];if(!_0x2a3b22&&_0x20455a){let _0x5b363b=this[_0x257072(0x2aa)]()?_0x24726d[_0x257072(0x241)]:_0x24726d[_0x257072(0x1fc)];if(_0x5b363b&&_0x4b021e[_0x257072(0x296)]){let _0x2ef5c6=_0x5b363b[_0x257072(0x2b7)](this['combatLogName']()),_0x197d9a=_0x24726d['iconIndex'];$gameSystem[_0x257072(0x30d)](_0x2ef5c6,_0x197d9a);}}if(_0x2a3b22&&_0x20455a){let _0x4fe561=_0x24726d[_0x257072(0x2af)];if(_0x4fe561&&_0x4b021e['ShowStateCurrent']){let _0x10ab83=_0x4fe561['format'](this[_0x257072(0x1bb)]()),_0x5e0f27=_0x24726d[_0x257072(0x21c)];$gameSystem[_0x257072(0x30d)](_0x10ab83,_0x5e0f27);}}if(_0x2a3b22&&!_0x20455a){let _0x1f4628=_0x24726d[_0x257072(0x275)];if(_0x1f4628&&_0x4b021e[_0x257072(0x1f4)]){let _0x36c8a1=_0x1f4628[_0x257072(0x2b7)](this[_0x257072(0x1bb)]()),_0x1f3035=_0x24726d[_0x257072(0x21c)];$gameSystem[_0x257072(0x30d)](_0x36c8a1,_0x1f3035);}}},VisuMZ['CombatLog']['Game_BattlerBase_increaseBuff']=Game_BattlerBase[_0x109a1a(0x311)][_0x109a1a(0x1a3)],Game_BattlerBase[_0x109a1a(0x311)][_0x109a1a(0x1a3)]=function(_0x3025c8){const _0x5788b3=_0x109a1a;VisuMZ[_0x5788b3(0x24d)][_0x5788b3(0x324)][_0x5788b3(0x362)](this,_0x3025c8);if(!VisuMZ[_0x5788b3(0x24d)][_0x5788b3(0x1b6)][_0x5788b3(0x24d)][_0x5788b3(0x22c)])return;this['combatLogBuffChanges'](_0x3025c8,0x1,TextManager[_0x5788b3(0x220)]);},VisuMZ[_0x109a1a(0x24d)]['Game_BattlerBase_decreaseBuff']=Game_BattlerBase['prototype'][_0x109a1a(0x297)],Game_BattlerBase[_0x109a1a(0x311)]['decreaseBuff']=function(_0x2b6a89){const _0x525348=_0x109a1a;VisuMZ[_0x525348(0x24d)][_0x525348(0x36d)][_0x525348(0x362)](this,_0x2b6a89);if(!VisuMZ['CombatLog'][_0x525348(0x1b6)][_0x525348(0x24d)][_0x525348(0x28f)])return;this[_0x525348(0x1ab)](_0x2b6a89,-0x1,TextManager[_0x525348(0x360)]);},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x2ec)]=Game_BattlerBase[_0x109a1a(0x311)][_0x109a1a(0x328)],Game_BattlerBase['prototype']['eraseBuff']=function(_0x5c643b){const _0x500a05=_0x109a1a,_0x139c43=this[_0x500a05(0x34b)][_0x5c643b]||0x0;VisuMZ[_0x500a05(0x24d)][_0x500a05(0x2ec)][_0x500a05(0x362)](this,_0x5c643b);const _0x11795d=this[_0x500a05(0x34b)][_0x5c643b]||0x0,_0x2ce148=_0x11795d>_0x139c43?0x1:-0x1;if(!VisuMZ[_0x500a05(0x24d)][_0x500a05(0x1b6)][_0x500a05(0x24d)][_0x500a05(0x26f)])return;this[_0x500a05(0x1ab)](_0x5c643b,_0x2ce148,TextManager[_0x500a05(0x2d0)]);},Game_Battler[_0x109a1a(0x311)][_0x109a1a(0x1ab)]=function(_0x593031,_0x12a902,_0x1f6e1a){const _0x3cde2a=_0x109a1a;if(!SceneManager[_0x3cde2a(0x2d1)]())return;if(!_0x1f6e1a)return;if(this[_0x3cde2a(0x1cc)])return;if(this['_tempBattler'])return;const _0x108e5f=this[_0x3cde2a(0x2f3)](_0x12a902||-0x1,_0x593031),_0x257a23=TextManager[_0x3cde2a(0x1eb)](_0x593031),_0x59998b=_0x1f6e1a[_0x3cde2a(0x2b7)](this['combatLogName'](),_0x257a23);$gameSystem[_0x3cde2a(0x30d)](_0x59998b,_0x108e5f);},Game_Actor[_0x109a1a(0x311)][_0x109a1a(0x1bb)]=function(){const _0x59c904=_0x109a1a;return _0x59c904(0x29f)[_0x59c904(0x2b7)](this[_0x59c904(0x213)]);},Game_Enemy[_0x109a1a(0x311)][_0x109a1a(0x1bb)]=function(){const _0x477ff4=_0x109a1a;return this[_0x477ff4(0x1ce)]();},Game_Party[_0x109a1a(0x311)][_0x109a1a(0x1bb)]=function(){const _0x15ee6b=_0x109a1a,_0x37ec3e=this[_0x15ee6b(0x31d)]()['length'];if(_0x37ec3e===0x0)return'';else return _0x37ec3e===0x1?this['leader']()['combatLogName']():TextManager[_0x15ee6b(0x1ba)][_0x15ee6b(0x2b7)](this[_0x15ee6b(0x2b3)]()['combatLogName']());},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1af)]=Scene_Menu[_0x109a1a(0x311)][_0x109a1a(0x2a3)],Scene_Menu[_0x109a1a(0x311)][_0x109a1a(0x2a3)]=function(){const _0x37b668=_0x109a1a;VisuMZ[_0x37b668(0x24d)]['Scene_Menu_createCommandWindow'][_0x37b668(0x362)](this);const _0x883c13=this[_0x37b668(0x27b)];_0x883c13[_0x37b668(0x191)](_0x37b668(0x2bd),this[_0x37b668(0x2d6)][_0x37b668(0x238)](this));},Scene_Menu[_0x109a1a(0x311)][_0x109a1a(0x2d6)]=function(){const _0x4b84f7=_0x109a1a;SceneManager[_0x4b84f7(0x1f0)](Scene_CombatLog);},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x2a1)]=Scene_Battle[_0x109a1a(0x311)][_0x109a1a(0x31f)],Scene_Battle[_0x109a1a(0x311)][_0x109a1a(0x31f)]=function(){const _0x493ff6=_0x109a1a;VisuMZ[_0x493ff6(0x24d)][_0x493ff6(0x2a1)][_0x493ff6(0x362)](this),this[_0x493ff6(0x314)]();},Scene_Battle[_0x109a1a(0x311)][_0x109a1a(0x314)]=function(){const _0x50a74b=_0x109a1a,_0x32de3c=this['combatLogWindowRect']();this[_0x50a74b(0x301)]=new Window_CombatLogDisplay(_0x32de3c),this['_combatLogWindow'][_0x50a74b(0x347)](0x0),this[_0x50a74b(0x1ec)](this['_combatLogWindow']),this[_0x50a74b(0x301)]['x']=this[_0x50a74b(0x29c)]['x'],this['_combatLogWindow']['y']=this[_0x50a74b(0x29c)]['y'],this['_combatLogWindow'][_0x50a74b(0x290)](VisuMZ[_0x50a74b(0x24d)][_0x50a74b(0x1b6)][_0x50a74b(0x329)]['CombatLogBattle_BgType']),this[_0x50a74b(0x301)][_0x50a74b(0x191)](_0x50a74b(0x2bd),this[_0x50a74b(0x26b)]['bind'](this)),this['_combatLogWindow']['setHandler'](_0x50a74b(0x2fb),this[_0x50a74b(0x26b)][_0x50a74b(0x238)](this)),this[_0x50a74b(0x1a4)][_0x50a74b(0x191)](_0x50a74b(0x2bd),this[_0x50a74b(0x2b4)][_0x50a74b(0x238)](this,this['_partyCommandWindow'])),this[_0x50a74b(0x207)]['setHandler']('combatLog',this[_0x50a74b(0x2b4)][_0x50a74b(0x238)](this,this[_0x50a74b(0x207)]));},Scene_Battle[_0x109a1a(0x311)][_0x109a1a(0x1c3)]=function(){const _0x121f7b=_0x109a1a,_0xa78671=VisuMZ['CombatLog'][_0x121f7b(0x1b6)][_0x121f7b(0x329)]['CombatLogBattle_RectJS'];if(_0xa78671)return _0xa78671[_0x121f7b(0x362)](this);const _0x1691b2=0x0,_0x15a628=0x0,_0x555651=Graphics[_0x121f7b(0x383)],_0x50918a=Graphics[_0x121f7b(0x19c)];return new Rectangle(_0x1691b2,_0x15a628,_0x555651,_0x50918a);},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x289)]=Scene_Battle[_0x109a1a(0x311)][_0x109a1a(0x20e)],Scene_Battle[_0x109a1a(0x311)][_0x109a1a(0x20e)]=function(){const _0x4732dd=_0x109a1a;if(this[_0x4732dd(0x301)]&&this[_0x4732dd(0x301)]['active'])return!![];return VisuMZ['CombatLog'][_0x4732dd(0x289)][_0x4732dd(0x362)](this);},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x2f4)]=Scene_Battle[_0x109a1a(0x311)][_0x109a1a(0x1c5)],Scene_Battle[_0x109a1a(0x311)][_0x109a1a(0x1c5)]=function(){const _0x175ce6=_0x109a1a;VisuMZ[_0x175ce6(0x24d)][_0x175ce6(0x2f4)]['call'](this),this[_0x175ce6(0x301)]&&this[_0x175ce6(0x301)][_0x175ce6(0x345)]>0x0&&this[_0x175ce6(0x375)]&&(this[_0x175ce6(0x375)]['visible']=![]);},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1ea)]=Scene_Battle[_0x109a1a(0x311)]['isTimeActive'],Scene_Battle[_0x109a1a(0x311)]['isTimeActive']=function(){const _0x1124ad=_0x109a1a;return BattleManager[_0x1124ad(0x24e)]()&&this['_combatLogWindow']&&this[_0x1124ad(0x301)]['active']?![]:VisuMZ[_0x1124ad(0x24d)][_0x1124ad(0x1ea)][_0x1124ad(0x362)](this);},Scene_Battle[_0x109a1a(0x311)]['openCombatLog']=function(_0x5e882c){const _0x5d2813=_0x109a1a;$gameTemp[_0x5d2813(0x378)]=!![],this[_0x5d2813(0x301)][_0x5d2813(0x226)](),this[_0x5d2813(0x301)]['activate'](),this[_0x5d2813(0x301)]['battleRefresh'](),this['_combatLogWindow'][_0x5d2813(0x37f)](_0x5e882c);},Scene_Battle[_0x109a1a(0x311)]['closeCombatLog']=function(){const _0x2274f0=_0x109a1a;this[_0x2274f0(0x301)]['close']();const _0x915f89=this[_0x2274f0(0x301)][_0x2274f0(0x1fd)]();_0x915f89[_0x2274f0(0x2fc)]();};function Scene_CombatLog(){const _0xa39f19=_0x109a1a;this[_0xa39f19(0x295)](...arguments);}Scene_CombatLog[_0x109a1a(0x311)]=Object[_0x109a1a(0x2bf)](Scene_MenuBase['prototype']),Scene_CombatLog[_0x109a1a(0x311)][_0x109a1a(0x2da)]=Scene_CombatLog,Scene_CombatLog['prototype'][_0x109a1a(0x295)]=function(){const _0x1e15a0=_0x109a1a;Scene_MenuBase[_0x1e15a0(0x311)][_0x1e15a0(0x295)][_0x1e15a0(0x362)](this);},Scene_CombatLog[_0x109a1a(0x311)][_0x109a1a(0x310)]=function(){return 0x0;},Scene_CombatLog[_0x109a1a(0x311)][_0x109a1a(0x2bf)]=function(){const _0x2813ae=_0x109a1a;Scene_MenuBase[_0x2813ae(0x311)][_0x2813ae(0x2bf)]['call'](this),this[_0x2813ae(0x2ef)](),this['createCombatLogWindow']();},Scene_CombatLog['prototype'][_0x109a1a(0x2ef)]=function(){const _0x3f8956=_0x109a1a,_0x366e36=this[_0x3f8956(0x1cf)]();this[_0x3f8956(0x1a9)]=new Window_CombatLogHistory(_0x366e36),this[_0x3f8956(0x1a9)][_0x3f8956(0x191)](_0x3f8956(0x2fb),this[_0x3f8956(0x23a)][_0x3f8956(0x238)](this)),this[_0x3f8956(0x294)](this[_0x3f8956(0x1a9)]),this['_historyWindow'][_0x3f8956(0x290)](VisuMZ[_0x3f8956(0x24d)][_0x3f8956(0x1b6)]['Window'][_0x3f8956(0x32e)]);},Scene_CombatLog['prototype'][_0x109a1a(0x1cf)]=function(){const _0x1dd32f=_0x109a1a,_0x1cee70=VisuMZ[_0x1dd32f(0x24d)][_0x1dd32f(0x1b6)][_0x1dd32f(0x329)][_0x1dd32f(0x2f6)];if(_0x1cee70)return _0x1cee70['call'](this);const _0x556c57=Graphics[_0x1dd32f(0x383)],_0x167bba=this['calcWindowHeight'](0x1,!![]),_0x42225d=0x0,_0x251db3=this[_0x1dd32f(0x364)]();return new Rectangle(_0x42225d,_0x251db3,_0x556c57,_0x167bba);},Scene_CombatLog[_0x109a1a(0x311)][_0x109a1a(0x314)]=function(){const _0x1aff5f=_0x109a1a,_0x327ad6=this['combatLogWindowRect']();this['_combatLogWindow']=new Window_CombatLogDisplay(_0x327ad6),this[_0x1aff5f(0x294)](this[_0x1aff5f(0x301)]),this[_0x1aff5f(0x1a9)][_0x1aff5f(0x1d2)](this[_0x1aff5f(0x301)]),this[_0x1aff5f(0x301)]['setBackgroundType'](VisuMZ[_0x1aff5f(0x24d)][_0x1aff5f(0x1b6)]['Window'][_0x1aff5f(0x342)]);},Scene_CombatLog[_0x109a1a(0x311)][_0x109a1a(0x1c3)]=function(){const _0x17220=_0x109a1a,_0x4eff83=VisuMZ[_0x17220(0x24d)]['Settings']['Window'][_0x17220(0x27e)];if(_0x4eff83)return _0x4eff83[_0x17220(0x362)](this);const _0x4b4745=0x0,_0x58f8e8=this[_0x17220(0x1a9)]['y']+this[_0x17220(0x1a9)][_0x17220(0x355)],_0x5117b6=Graphics[_0x17220(0x383)],_0x3ff9ae=this[_0x17220(0x269)]()-this[_0x17220(0x1a9)][_0x17220(0x355)];return new Rectangle(_0x4b4745,_0x58f8e8,_0x5117b6,_0x3ff9ae);},Scene_CombatLog[_0x109a1a(0x311)][_0x109a1a(0x2a2)]=function(){const _0x1bb77e=_0x109a1a;Scene_MenuBase['prototype'][_0x1bb77e(0x2a2)][_0x1bb77e(0x362)](this),this[_0x1bb77e(0x199)](this['getBackgroundOpacity']()),this[_0x1bb77e(0x2fe)]();},Scene_CombatLog['prototype'][_0x109a1a(0x1f8)]=function(){const _0x537f72=_0x109a1a;return VisuMZ['CombatLog'][_0x537f72(0x1b6)][_0x537f72(0x33f)][_0x537f72(0x245)];},Scene_CombatLog[_0x109a1a(0x311)]['createCustomBackgroundImages']=function(){const _0x1f30fb=_0x109a1a,_0x5812c0=VisuMZ['CombatLog'][_0x1f30fb(0x1b6)][_0x1f30fb(0x33f)];_0x5812c0&&(_0x5812c0[_0x1f30fb(0x2c7)]!==''||_0x5812c0[_0x1f30fb(0x33a)]!=='')&&(this[_0x1f30fb(0x196)]=new Sprite(ImageManager[_0x1f30fb(0x33b)](_0x5812c0[_0x1f30fb(0x2c7)])),this['_backSprite2']=new Sprite(ImageManager['loadTitle2'](_0x5812c0[_0x1f30fb(0x33a)])),this[_0x1f30fb(0x1ec)](this['_backSprite1']),this['addChild'](this['_backSprite2']),this[_0x1f30fb(0x196)]['bitmap'][_0x1f30fb(0x2a8)](this[_0x1f30fb(0x2a6)][_0x1f30fb(0x238)](this,this['_backSprite1'])),this['_backSprite2']['bitmap'][_0x1f30fb(0x2a8)](this['adjustSprite']['bind'](this,this['_backSprite2'])));},Scene_CombatLog[_0x109a1a(0x311)][_0x109a1a(0x2a6)]=function(_0x55f566){const _0xb72d8c=_0x109a1a;this[_0xb72d8c(0x2eb)](_0x55f566),this[_0xb72d8c(0x217)](_0x55f566);},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x209)]=Window_Selectable[_0x109a1a(0x311)]['allowShiftScrolling'],Window_Selectable[_0x109a1a(0x311)]['allowShiftScrolling']=function(){const _0x5f4a3c=_0x109a1a;if(SceneManager[_0x5f4a3c(0x2d1)]()){const _0x4bf703=SceneManager[_0x5f4a3c(0x284)]['_combatLogWindow'];if(_0x4bf703&&_0x4bf703['isOpen']())return![];}return VisuMZ[_0x5f4a3c(0x24d)]['Window_Selectable_allowShiftScrolling']['call'](this);},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x340)]=Window_Selectable['prototype'][_0x109a1a(0x239)],Window_Selectable[_0x109a1a(0x311)]['isCursorMovable']=function(){const _0x42d4b3=_0x109a1a;if(SceneManager[_0x42d4b3(0x2d1)]()){const _0x3abae1=SceneManager['_scene']['_combatLogWindow'];if(_0x3abae1&&_0x3abae1[_0x42d4b3(0x325)]())return![];}return VisuMZ['CombatLog']['Window_Selectable_isCursorMovable'][_0x42d4b3(0x362)](this);},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x286)]=Window_MenuCommand['prototype']['addOriginalCommands'],Window_MenuCommand[_0x109a1a(0x311)]['addOriginalCommands']=function(){const _0x1c1519=_0x109a1a;VisuMZ['CombatLog']['Window_MenuCommand_addOriginalCommands'][_0x1c1519(0x362)](this);if(Imported['VisuMZ_1_MainMenuCore'])return;this[_0x1c1519(0x1d4)]();},Window_MenuCommand['prototype'][_0x109a1a(0x1d4)]=function(){const _0x9a6674=_0x109a1a;if(!this[_0x9a6674(0x278)]())return;const _0x19d4c1=TextManager['combatLog_BattleCmd_Name'],_0x180be4=this[_0x9a6674(0x254)]();this[_0x9a6674(0x2ae)](_0x19d4c1,_0x9a6674(0x2bd),_0x180be4);},Window_MenuCommand[_0x109a1a(0x311)][_0x109a1a(0x278)]=function(){const _0x6e4443=_0x109a1a;return $gameSystem[_0x6e4443(0x2ff)]();},Window_MenuCommand[_0x109a1a(0x311)]['isCombatLogCommandEnabled']=function(){const _0x420c26=_0x109a1a;return $gameSystem[_0x420c26(0x358)]();},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x27a)]=Window_BattleLog[_0x109a1a(0x311)][_0x109a1a(0x230)],Window_BattleLog[_0x109a1a(0x311)][_0x109a1a(0x230)]=function(){const _0x1c0676=_0x109a1a;VisuMZ[_0x1c0676(0x24d)][_0x1c0676(0x27a)][_0x1c0676(0x362)](this);if(!VisuMZ['CombatLog'][_0x1c0676(0x1b6)][_0x1c0676(0x24d)][_0x1c0676(0x1fb)])return;$gameSystem[_0x1c0676(0x35a)]();let _0x577d06=TextManager[_0x1c0676(0x2cc)][_0x1c0676(0x2b7)]($gameTroop[_0x1c0676(0x363)]()),_0x5f466a=ImageManager['combatLog_StartTurn_Icon'];$gameSystem[_0x1c0676(0x30d)](_0x577d06,_0x5f466a);},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x366)]=Window_BattleLog[_0x109a1a(0x311)]['startAction'],Window_BattleLog[_0x109a1a(0x311)]['startAction']=function(_0x33f654,_0x4c54ab,_0x2f2e02){const _0x2b4c40=_0x109a1a;$gameSystem['addHorzLineToCombatLog'](),VisuMZ[_0x2b4c40(0x24d)]['Window_BattleLog_startAction'][_0x2b4c40(0x362)](this,_0x33f654,_0x4c54ab,_0x2f2e02);},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x236)]=Window_BattleLog[_0x109a1a(0x311)][_0x109a1a(0x251)],Window_BattleLog['prototype'][_0x109a1a(0x251)]=function(_0x8178cc){const _0xe3f611=_0x109a1a;VisuMZ[_0xe3f611(0x24d)][_0xe3f611(0x236)]['call'](this,_0x8178cc);if(!_0x8178cc)return;if(!VisuMZ['CombatLog']['Settings']['CombatLog'][_0xe3f611(0x33e)]);const _0x58d616=_0x8178cc[_0xe3f611(0x2b1)]();for(const _0x4ae322 of _0x58d616){if(!_0x4ae322)continue;if(!_0x4ae322[_0xe3f611(0x2af)])continue;if(_0x4ae322['note'][_0xe3f611(0x371)](VisuMZ['CombatLog'][_0xe3f611(0x303)][_0xe3f611(0x2e1)]))continue;let _0x5cb667=_0x4ae322['message3'],_0x15781c=_0x5cb667['format'](_0x8178cc[_0xe3f611(0x1bb)]()),_0x5f7001=_0x4ae322[_0xe3f611(0x21c)];$gameSystem[_0xe3f611(0x30d)](_0x15781c,_0x5f7001);}},VisuMZ[_0x109a1a(0x24d)]['Window_BattleLog_displayAction']=Window_BattleLog['prototype'][_0x109a1a(0x1ad)],Window_BattleLog['prototype'][_0x109a1a(0x1ad)]=function(_0x291c38,_0x135655){const _0x1b6581=_0x109a1a;VisuMZ[_0x1b6581(0x24d)]['Window_BattleLog_displayAction'][_0x1b6581(0x362)](this,_0x291c38,_0x135655);const _0x5a43f5=VisuMZ[_0x1b6581(0x24d)][_0x1b6581(0x1b6)]['CombatLog'];if(DataManager[_0x1b6581(0x2c1)](_0x135655)){if(_0x135655[_0x1b6581(0x241)]&&_0x5a43f5[_0x1b6581(0x1e1)]){let _0xbce324=_0x135655[_0x1b6581(0x241)],_0x19ef9b=_0xbce324[_0x1b6581(0x2b7)](_0x291c38[_0x1b6581(0x1bb)](),_0x135655[_0x1b6581(0x1ce)]),_0x368d6d=_0x135655[_0x1b6581(0x21c)];$gameSystem[_0x1b6581(0x30d)](_0x19ef9b,_0x368d6d);}if(_0x135655[_0x1b6581(0x1fc)]&&_0x5a43f5[_0x1b6581(0x2df)]){let _0x3120b3=_0x135655[_0x1b6581(0x1fc)],_0x457728=_0x3120b3[_0x1b6581(0x2b7)](_0x291c38['combatLogName'](),_0x135655[_0x1b6581(0x1ce)]),_0x459fb8=_0x135655[_0x1b6581(0x21c)];$gameSystem['addTextToCombatLog'](_0x457728,_0x459fb8);}}else{if(TextManager[_0x1b6581(0x30e)]&&_0x5a43f5[_0x1b6581(0x300)]){let _0xb46c3f=TextManager[_0x1b6581(0x30e)],_0xa59c36=_0xb46c3f[_0x1b6581(0x2b7)](_0x291c38[_0x1b6581(0x1bb)](),_0x135655['name']),_0x54c943=_0x135655[_0x1b6581(0x21c)];$gameSystem['addTextToCombatLog'](_0xa59c36,_0x54c943);}}},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x23d)]=Window_BattleLog[_0x109a1a(0x311)][_0x109a1a(0x37c)],Window_BattleLog[_0x109a1a(0x311)][_0x109a1a(0x37c)]=function(_0x5bfda4){const _0xd0c19b=_0x109a1a;VisuMZ[_0xd0c19b(0x24d)][_0xd0c19b(0x23d)][_0xd0c19b(0x362)](this,_0x5bfda4);if(TextManager[_0xd0c19b(0x20b)]&&VisuMZ[_0xd0c19b(0x24d)][_0xd0c19b(0x1b6)]['CombatLog'][_0xd0c19b(0x1a8)]){let _0x3d5bf1=TextManager['counterAttack'],_0x2c5c53=_0x3d5bf1[_0xd0c19b(0x2b7)](_0x5bfda4[_0xd0c19b(0x1bb)]()),_0x1d322a=ImageManager[_0xd0c19b(0x228)];$gameSystem[_0xd0c19b(0x30d)](_0x2c5c53,_0x1d322a);}},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1be)]=Window_BattleLog[_0x109a1a(0x311)][_0x109a1a(0x2ce)],Window_BattleLog[_0x109a1a(0x311)]['displayReflection']=function(_0x9f496b){const _0x3cfbf9=_0x109a1a;VisuMZ['CombatLog'][_0x3cfbf9(0x1be)][_0x3cfbf9(0x362)](this,_0x9f496b);if(TextManager[_0x3cfbf9(0x2f9)]&&VisuMZ[_0x3cfbf9(0x24d)][_0x3cfbf9(0x1b6)][_0x3cfbf9(0x24d)][_0x3cfbf9(0x1d5)]){let _0x164674=TextManager[_0x3cfbf9(0x2f9)],_0x5d5436=_0x164674[_0x3cfbf9(0x2b7)](_0x9f496b['combatLogName']()),_0x5ac645=ImageManager[_0x3cfbf9(0x348)];$gameSystem[_0x3cfbf9(0x30d)](_0x5d5436,_0x5ac645);}},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x292)]=Window_BattleLog['prototype']['displaySubstitute'],Window_BattleLog[_0x109a1a(0x311)][_0x109a1a(0x382)]=function(_0x1ea034,_0x31725c){const _0x281eac=_0x109a1a;VisuMZ[_0x281eac(0x24d)][_0x281eac(0x292)][_0x281eac(0x362)](this,_0x1ea034,_0x31725c);if(TextManager[_0x281eac(0x1cd)]&&VisuMZ[_0x281eac(0x24d)][_0x281eac(0x1b6)]['CombatLog'][_0x281eac(0x30b)]){const _0x3de6db=_0x1ea034[_0x281eac(0x1bb)]();let _0x39bdd9=TextManager[_0x281eac(0x1cd)],_0x123779=_0x39bdd9[_0x281eac(0x2b7)](_0x3de6db,_0x31725c[_0x281eac(0x1bb)]()),_0x3a3f58=ImageManager[_0x281eac(0x1de)];$gameSystem[_0x281eac(0x30d)](_0x123779,_0x3a3f58);}},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x2a4)]=Window_BattleLog[_0x109a1a(0x311)][_0x109a1a(0x29b)],Window_BattleLog[_0x109a1a(0x311)]['displayFailure']=function(_0x123523){const _0x2480a1=_0x109a1a;VisuMZ[_0x2480a1(0x24d)][_0x2480a1(0x2a4)][_0x2480a1(0x362)](this,_0x123523);if(_0x123523[_0x2480a1(0x2c0)]()[_0x2480a1(0x2a7)]()&&!_0x123523['result']()[_0x2480a1(0x2dd)]){if(TextManager[_0x2480a1(0x23f)]&&VisuMZ[_0x2480a1(0x24d)]['Settings'][_0x2480a1(0x24d)][_0x2480a1(0x20a)]){let _0x466b0d=TextManager[_0x2480a1(0x23f)],_0xaf6091=_0x466b0d[_0x2480a1(0x2b7)](_0x123523[_0x2480a1(0x1bb)]()),_0x81c4ab=ImageManager['combatLog_Failure_Icon'];$gameSystem[_0x2480a1(0x30d)](_0xaf6091,_0x81c4ab);}}},VisuMZ[_0x109a1a(0x24d)]['Window_BattleLog_displayCritical']=Window_BattleLog['prototype'][_0x109a1a(0x247)],Window_BattleLog[_0x109a1a(0x311)][_0x109a1a(0x247)]=function(_0x576ec5){const _0x2e4a34=_0x109a1a;VisuMZ[_0x2e4a34(0x24d)][_0x2e4a34(0x1c0)][_0x2e4a34(0x362)](this,_0x576ec5);if(_0x576ec5[_0x2e4a34(0x2c0)]()[_0x2e4a34(0x201)]&&VisuMZ[_0x2e4a34(0x24d)][_0x2e4a34(0x1b6)][_0x2e4a34(0x24d)][_0x2e4a34(0x20f)]){if(_0x576ec5[_0x2e4a34(0x2aa)]()){if(TextManager[_0x2e4a34(0x2ad)]){let _0x8af8ff=TextManager[_0x2e4a34(0x2ad)],_0x381451=ImageManager[_0x2e4a34(0x2b9)];$gameSystem[_0x2e4a34(0x30d)](_0x8af8ff,_0x381451);}}else{if(TextManager[_0x2e4a34(0x1d8)]){let _0x29007d=TextManager[_0x2e4a34(0x1d8)],_0x311049=ImageManager[_0x2e4a34(0x2b9)];$gameSystem[_0x2e4a34(0x30d)](_0x29007d,_0x311049);}}}},VisuMZ['CombatLog'][_0x109a1a(0x265)]=Window_BattleLog[_0x109a1a(0x311)]['displayMiss'],Window_BattleLog[_0x109a1a(0x311)][_0x109a1a(0x2cf)]=function(_0x42b2cd){const _0x5ee628=_0x109a1a;VisuMZ[_0x5ee628(0x24d)]['Window_BattleLog_displayMiss']['call'](this,_0x42b2cd);if(_0x42b2cd[_0x5ee628(0x2c0)]()[_0x5ee628(0x25c)]&&VisuMZ[_0x5ee628(0x24d)][_0x5ee628(0x1b6)]['CombatLog'][_0x5ee628(0x1da)]){const _0x5f01b1=_0x42b2cd['isActor']();if(_0x5f01b1&&TextManager[_0x5ee628(0x1fa)]){let _0x3d12df=TextManager[_0x5ee628(0x1fa)],_0x5b9828=_0x3d12df[_0x5ee628(0x2b7)](_0x42b2cd[_0x5ee628(0x1bb)]()),_0x1eb77c=ImageManager['combatLog_Miss_Icon'];$gameSystem['addTextToCombatLog'](_0x5b9828,_0x1eb77c);}else{if(!_0x5f01b1&&TextManager[_0x5ee628(0x319)]){let _0x3bafd4=TextManager['enemyNoHit'],_0x2d6084=_0x3bafd4[_0x5ee628(0x2b7)](_0x42b2cd[_0x5ee628(0x1bb)]()),_0x24bc82=ImageManager[_0x5ee628(0x19b)];$gameSystem[_0x5ee628(0x30d)](_0x2d6084,_0x24bc82);}}}else{if(TextManager[_0x5ee628(0x23f)]&&VisuMZ['CombatLog']['Settings']['CombatLog'][_0x5ee628(0x20a)]){let _0x58ed97=TextManager[_0x5ee628(0x23f)],_0x401d3e=_0x58ed97[_0x5ee628(0x2b7)](_0x42b2cd[_0x5ee628(0x1bb)]()),_0x428947=ImageManager['combatLog_Failure_Icon'];$gameSystem['addTextToCombatLog'](_0x401d3e,_0x428947);}}},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x354)]=Window_BattleLog['prototype'][_0x109a1a(0x234)],Window_BattleLog['prototype'][_0x109a1a(0x234)]=function(_0x2eb761){const _0x44d83b=_0x109a1a;VisuMZ['CombatLog'][_0x44d83b(0x354)]['call'](this,_0x2eb761);if(VisuMZ[_0x44d83b(0x24d)]['Settings'][_0x44d83b(0x24d)]['ShowEvade']){if(_0x2eb761['result']()[_0x44d83b(0x25c)]&&TextManager[_0x44d83b(0x361)]){let _0x5ec3bb=TextManager['evasion'],_0xbd4128=_0x5ec3bb[_0x44d83b(0x2b7)](_0x2eb761[_0x44d83b(0x1bb)]()),_0x244497=ImageManager['combatLog_Evasion_Icon'];$gameSystem[_0x44d83b(0x30d)](_0xbd4128,_0x244497);}else{if(TextManager[_0x44d83b(0x2ea)]){let _0x245872=TextManager[_0x44d83b(0x2ea)],_0x2a55f9=_0x245872[_0x44d83b(0x2b7)](_0x2eb761['combatLogName']()),_0xe73285=ImageManager[_0x44d83b(0x2d8)];$gameSystem['addTextToCombatLog'](_0x2a55f9,_0xe73285);}}}},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1f7)]=Window_PartyCommand[_0x109a1a(0x311)][_0x109a1a(0x2ac)],Window_PartyCommand[_0x109a1a(0x311)]['makeCommandList']=function(){const _0x38528b=_0x109a1a;VisuMZ[_0x38528b(0x24d)][_0x38528b(0x1f7)]['call'](this);if(Imported[_0x38528b(0x29d)])return;this[_0x38528b(0x1d4)]();},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x22a)]=Window_PartyCommand[_0x109a1a(0x311)][_0x109a1a(0x18f)],Window_PartyCommand[_0x109a1a(0x311)][_0x109a1a(0x18f)]=function(){const _0x1d884f=_0x109a1a;VisuMZ[_0x1d884f(0x24d)][_0x1d884f(0x22a)][_0x1d884f(0x362)](this),this[_0x1d884f(0x1d4)]();},Window_PartyCommand[_0x109a1a(0x311)][_0x109a1a(0x1d4)]=function(){const _0xbd198b=_0x109a1a;if(!$gameSystem[_0xbd198b(0x1c8)]())return;if(this[_0xbd198b(0x248)](_0xbd198b(0x2bd))>=0x0)return;const _0x5c272a=Imported[_0xbd198b(0x29d)]?this['commandStyle']():_0xbd198b(0x246),_0x1ddabd=TextManager[_0xbd198b(0x19a)],_0x4cbdf5=ImageManager[_0xbd198b(0x34f)]||0x0,_0xfd2e6f=_0x5c272a===_0xbd198b(0x246)?_0x1ddabd:_0xbd198b(0x249)[_0xbd198b(0x2b7)](_0x4cbdf5,_0x1ddabd);this[_0xbd198b(0x2ae)](_0xfd2e6f,_0xbd198b(0x2bd));},VisuMZ[_0x109a1a(0x24d)]['Window_ActorCommand_makeCommandList']=Window_ActorCommand[_0x109a1a(0x311)][_0x109a1a(0x2ac)],Window_ActorCommand['prototype']['makeCommandList']=function(){const _0x19db41=_0x109a1a;VisuMZ['CombatLog']['Window_ActorCommand_makeCommandList']['call'](this);if(Imported[_0x19db41(0x29d)])return;if(this[_0x19db41(0x248)](_0x19db41(0x2bd))>=0x0)return;this[_0x19db41(0x1d4)]();},VisuMZ['CombatLog'][_0x109a1a(0x338)]=Window_ActorCommand[_0x109a1a(0x311)][_0x109a1a(0x18f)],Window_ActorCommand['prototype'][_0x109a1a(0x18f)]=function(){const _0x21ef70=_0x109a1a;VisuMZ[_0x21ef70(0x24d)]['Window_ActorCommand_addCustomCommands'][_0x21ef70(0x362)](this),this['addCombatLogCommand']();},Window_ActorCommand[_0x109a1a(0x311)][_0x109a1a(0x1d4)]=function(){const _0x1d7834=_0x109a1a;if(!$gameSystem[_0x1d7834(0x308)]())return;this[_0x1d7834(0x248)]('combatLog')>=0x0&&this['removeCombatLogCommand']();const _0x3498d1=Imported[_0x1d7834(0x29d)]?this['commandStyle']():_0x1d7834(0x246),_0x35cf33=TextManager[_0x1d7834(0x19a)],_0x520741=ImageManager['combatLog_BattleCmd_Icon']||0x0,_0x1ee6ec=_0x3498d1==='text'?_0x35cf33:_0x1d7834(0x249)[_0x1d7834(0x2b7)](_0x520741,_0x35cf33);this[_0x1d7834(0x2ae)](_0x1ee6ec,_0x1d7834(0x2bd));},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1b6)][_0x109a1a(0x2ba)]=Window_ActorCommand[_0x109a1a(0x311)][_0x109a1a(0x1d7)],Window_ActorCommand['prototype'][_0x109a1a(0x1d7)]=function(){const _0x47fda2=_0x109a1a,_0x2a6269=this[_0x47fda2(0x233)]();switch(_0x2a6269){case _0x47fda2(0x2bd):this[_0x47fda2(0x1c9)][_0x47fda2(0x30a)](TextManager[_0x47fda2(0x357)]);break;default:VisuMZ['CombatLog']['Settings'][_0x47fda2(0x2ba)]['call'](this);break;}},Window_ActorCommand['prototype'][_0x109a1a(0x34e)]=function(){const _0x425e6b=_0x109a1a;while(this[_0x425e6b(0x248)]('combatLog')>=0x0){const _0x2d855d=this['findSymbol'](_0x425e6b(0x2bd));this['_list']['splice'](_0x2d855d,0x1);}};function _0xe2a6(){const _0x58a6d1=['helpAreaHeight','prototype','Text_LifeStateEffects_%1','SystemShowCombatLogParty','createCombatLogWindow','2390400RGkxfb','gainSilentTp','1854832WAzKbF','isCombatLogHotKeyActive','enemyNoHit','setTp','Text_AntiDmgBarrier_Absorb','combatLog_MP_Dmg','battleMembers','actorLoss','createDisplayObjects','Text','combatLog_TP_Dmg','EVAL','initCombatLogAccess','Game_BattlerBase_increaseBuff','isOpen','partyCmd','CombatLogAddHorzLine','eraseBuff','Window','onAntiDamageTpBarrier','ARRAYEVAL','endTurn','SHOW_LINE_BACKGROUND','CombatHistory_BgType','Game_Battler_stbGainInstant','IconVictory','victory','ColorNumbers','Dmg','combatLogStateChanges','Game_BattlerBase_setMp','Show_StealItems_Steal','combatLog_Preemptive_Icon','Window_ActorCommand_addCustomCommands','3iboUiQ','BgFilename2','loadTitle1','deactivate','IconPreemptive','ShowStateCurrent','BgSettings','Window_Selectable_isCursorMovable','CombatHistoryLatest','CombatLogMenu_BgType','resetFontSettings','end','openness','processVictory','setCombatLogIndex','combatLog_Reflection_Icon','_combatLogIndex','maxScrollY','_buffs','setCombatLogHotKeyActive','_requestRefresh','removeCombatLogCommand','combatLog_BattleCmd_Icon','itemLineRect','isTriggered','exit','onCtbOrderChange','Window_BattleLog_displayEvasion','height','actorDamage','combatLogHelp','isMainMenuCombatLogEnabled','ShowBattleSysAtbInterrupt','addHorzLineToCombatLog','length','combatLog_EndTurn','_combatLogPayment','none','requestRefresh','debuffAdd','evasion','call','turnCount','mainAreaTop','TextColorDmgTP','Window_BattleLog_startAction','Game_Battler_displayAbsorptionBarrierPopup','combatLog_MP_NoDmg','BattleManager_onEscapeFailure','Bypass','onAntiDamageCancelBarrier','initCombatLogBase','Game_BattlerBase_decreaseBuff','enemyRecovery','BattleManager_onEscapeSuccess','HORZ_LINE_THICKNESS','match','IconStartTurn','anchor','Game_BattlerBase_setHp','_cancelButton','setMp','IconDmgTP','_fnord','finishCurrentCombatLog','BattleManager_processVictory','setActorCmdCombatLogVisible','displayCounter','SCROLL_SPEED_PAGEDN','combatLog_EnemyEmerge_Icon','setLastWindow','=====HORZLINE=====','onLifeStateEffect','displaySubstitute','boxWidth','pageup','Text_AntiDmgBarrier_TpDisperse','toUpperCase','Game_Battler_onAntiDamageTpBarrier','isTpb','Window_BattleLog_addStealText','ShowHP','addCustomCommands','_combatLog_HistoryFmt','setHandler','processDefeat','Text_AntiDmgBarrier_Nullify','max','createDimmerSprite','_backSprite1','onEscapeSuccess','666NWgKne','setBackgroundOpacity','combatLog_BattleCmd_Name','combatLog_Miss_Icon','boxHeight','ShowBattleSysStbInstant','8185RyyXNe','Icon','checkRefresh','IconSurprise','combatLog_HP_Dmg','increaseBuff','_partyCommandWindow','processAbort','startBattle','smoothScrollTo','ShowCounter','_historyWindow','setFrame','combatLogBuffChanges','IconDmgHP','displayAction','NoDmg','Scene_Menu_createCommandWindow','Game_Battler_useItem','ShowPartyCommand','getAntiDamageBarrierReduction','refreshDimmerBitmap','close','Game_System_initialize','Settings','SystemShowCombatLogMenu','3PJIXCI','isPressed','partyName','combatLogName','preemptive','Game_Battler_onLifeStateEffect','Window_BattleLog_displayReflection','_dimmerSprite','Window_BattleLog_displayCritical','384LOqEzN','IconNoDmgHP','combatLogWindowRect','bitmap','updateCancelButton','TextStartTurn','4802479WYHRqS','isPartyCmdCombatLogVisible','_helpWindow','getCombatLog','combatLog_MP_Heal','_tempActor','substitute','name','historyWindowRect','ARRAYNUM','TextColorDmgMP','setLogWindow','BattleManager_updateTurnEnd','addCombatLogCommand','ShowReflect','startBattleCombatLog','updateHelp','criticalToEnemy','select','ShowMiss','combatLog_EndTurn_Icon','setPartyCmdCombatLogVisible','ShowMP','combatLog_Substitute_Icon','Show_AntiDmgBarrier_Absorb','drawTextEx','ShowSkillMessage1','TextColorNoDmgHP','_lastWindow','TextColorDmgHP','Game_Battler_removeState','_list','isAutoColorAffected','Game_Battler_onAntiDamageCancelBarrier','BattleManager_endTurn','Scene_Battle_isTimeActive','param','addChild','onAntiDamageMpBarrier','drawBackgroundRect','enemyNoDamage','push','Game_Battler_addState','combatLog_TP_Heal','_combatLog_Latest','ShowStateRemove','Enable','\x5cC[%1]%2\x5cC[0]','Window_PartyCommand_makeCommandList','getBackgroundOpacity','COMBATLOG_MAXIMUM_BATTLE_ENTRIES','actorNoHit','ShowStartTurn','message2','getLastWindow','TextBattleSysStbInstant','combatLog_BattleStart','_surprise','critical','CombatLogEnableHotKey','15440hgVeZW','isBypassCombatLog','ShowEndTurn','history','_actorCommandWindow','onTouchOk','Window_Selectable_allowShiftScrolling','ShowFail','counterAttack','dimColor2','IconBattleSysStbInstant','isAnyInputWindowActive','ShowCritical','isAccessKeyPressed','Compatibility','escapeFailure','_actorId','Show_AntiDmgBarrier_TpDisperse','_preemptive','IconBattleSysCtbOrderChange','centerSprite','update','refresh','setBypassCombatLog','pop','iconIndex','parameters','registerCommand','onEscapeFailure','buffAdd','SystemShowCombatLogActor','IconHealHP','filter','enemyLoss','smoothScrollUp','open','combatLog_Result_Defeat','combatLog_Counter_Icon','TextColorHealHP','Window_PartyCommand_addCustomCommands','removeState','ShowAddBuff','ShowEnemyEmerge','IconFail','currentExt','startTurn','replace','2692935MQUnva','currentSymbol','displayEvasion','addStealText','Window_BattleLog_displayCurrentState','ConvertParams','bind','isCursorMovable','popScene','return\x200','map','Window_BattleLog_displayCounter','BIGGER_LINE_HEIGHT','actionFailure','battleCount','message1','unshift','pagedown','Game_Battler_onCtbOrderChange','SnapshotOpacity','text','displayCritical','findSymbol','\x5cI[%1]%2','IconBattleStart','STR','value','CombatLog','isActiveTpb','BattleManager_startBattle','IconEndTurn','displayCurrentState','IconReflect','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','isCombatLogCommandEnabled','includes','commandName','Game_Battler_onAntiDamageNullificationBarrier','parse','IconEnemyEmerge','displayAbsorptionBarrierPopup','applyCombatLogColor','physical','escapeStart','note','_tempBattler','CombatLogBypass','surprise','processOk','_combatLogAccess','actorNoDamage','Window_BattleLog_displayMiss','Text_AntiDmgBarrier_Cancel','ShowBattleStart','VisuMZ_3_InputComboSkills','mainAreaHeight','actorCmd','closeCombatLog','ARRAYSTRUCT','_bypassAddToCombatLog','battleRefresh','ShowEraseBuff','itemHeight','Text_AntiDmgBarrier_Reduce','IconMiss','cursorDown','BattleHelpCombatLog','message4','stbGainInstant','enemyDamage','isCombatLogCommandVisible','combatLog_BattleStart_Icon','Window_BattleLog_startTurn','_commandWindow','_combatLogs','TextColorNoDmgTP','CombatLogMenu_RectJS','ShowVictory','getTotalCombatLogs','drawRect','combatLog_HP_NoDmg','Show_AntiDmgBarrier_Nullify','_scene','smoothScrollDown','Window_MenuCommand_addOriginalCommands','FUNC','description','Scene_Battle_isAnyInputWindowActive','IconNoDmgMP','isBusy','_mp','down','onAntiDamageNullificationBarrier','ShowAddDebuff','setBackgroundType','Show_AntiDmgBarrier_MpDisperse','Window_BattleLog_displaySubstitute','combatLog_Failure_Icon','addWindow','initialize','ShowStateAdd','decreaseBuff','118784kmJnwd','itemRect','Game_BattlerBase_setTp','displayFailure','_windowLayer','VisuMZ_1_BattleCore','onAtbInterrupt','\x5cN[%1]','RemoveUnwantedTextCodes','Scene_Battle_createDisplayObjects','createBackground','createCommandWindow','Window_BattleLog_displayFailure','IconSubst','adjustSprite','isHit','addLoadListener','ShowDefeat','isActor','combatLog_TP_NoDmg','makeCommandList','criticalToActor','addCommand','message3','active','states','IconHealTP','leader','openCombatLog','_logWindow','setMainMenuCombatLogVisible','format','Icon_LifeStateEffects_%1','combatLog_CriticalHit_Icon','Window_ActorCommand_updateHelp','IconCritical','ShowTP','combatLog','Game_BattlerBase_getAntiDamageBarrierReduction','create','result','isSkill','maxCols','combatLog_Surprise_Icon','scrollTo','width','ShowEscape','BgFilename1','version','IconNoDmgTP','Heal','refreshCombatLog','combatLog_StartTurn','dimColor1','displayReflection','displayMiss','buffRemove','isSceneBattle','IconEvade','combatLog_Result_Victory','Icon_StealItems_Steal','combatLog_Result_Escape','commandCombatLog','canPerformInputComboSkills','combatLog_Evasion_Icon','CombatHistoryPrevious','constructor','gradientFillRect','processCancel','success','IconHealMP','ShowSkillMessage2','split','BypassCombatLog','updateTurnEnd','inBattle','BattleManager_processDefeat','Game_Battler_onAntiDamageMpBarrier','Text_AntiDmgBarrier_MpDisperse','AutoColor','SCROLL_SPEED_CURSOR','setHp','magicEvasion','scaleSprite','Game_BattlerBase_eraseBuff','isStateAffected','processCursorMove','createHistoryWindow','TextColorHealTP','combatLog_StartTurn_Icon','home','buffIconIndex','Scene_Battle_updateCancelButton','TextBattleStart','CombatHistory_RectJS','actorRecovery','combatLog_HP_Heal','magicReflection','General','cancel','activate','mainMenu','createCustomBackgroundImages','isMainMenuCombatLogVisible','ShowItemMessage','_combatLogWindow','Show_AntiDmgBarrier_Cancel','RegExp','trim','View\x20the\x20combat\x20log.','ShowIcons','Show','isActorCmdCombatLogVisible','_combatLogSilentTp','setText','ShowSubst','TextEndTurn','addTextToCombatLog','useItem','ACCESS_BUTTON'];_0xe2a6=function(){return _0x58a6d1;};return _0xe2a6();}function Window_CombatLogHistory(){this['initialize'](...arguments);}function _0x4202(_0x203576,_0x157b9a){const _0xe2a63c=_0xe2a6();return _0x4202=function(_0x4202a8,_0x52f387){_0x4202a8=_0x4202a8-0x189;let _0x3ae16a=_0xe2a63c[_0x4202a8];return _0x3ae16a;},_0x4202(_0x203576,_0x157b9a);}Window_CombatLogHistory['prototype']=Object[_0x109a1a(0x2bf)](Window_HorzCommand[_0x109a1a(0x311)]),Window_CombatLogHistory['prototype'][_0x109a1a(0x2da)]=Window_CombatLogHistory,Window_CombatLogHistory[_0x109a1a(0x311)][_0x109a1a(0x295)]=function(_0x4ad7fc){const _0x3ec8f2=_0x109a1a;Window_HorzCommand[_0x3ec8f2(0x311)][_0x3ec8f2(0x295)][_0x3ec8f2(0x362)](this,_0x4ad7fc);},Window_CombatLogHistory[_0x109a1a(0x311)][_0x109a1a(0x2c2)]=function(){const _0x52a77e=_0x109a1a;return $gameSystem[_0x52a77e(0x280)]();},Window_CombatLogHistory[_0x109a1a(0x311)]['processCursorHomeEndTrigger']=function(){},Window_CombatLogHistory['prototype'][_0x109a1a(0x273)]=function(_0x4202eb){},Window_CombatLogHistory['prototype']['cursorUp']=function(_0x275f26){},Window_CombatLogHistory['prototype'][_0x109a1a(0x218)]=function(){const _0x1f6a76=_0x109a1a;Window_HorzCommand[_0x1f6a76(0x311)][_0x1f6a76(0x218)][_0x1f6a76(0x362)](this),this['_logWindow']&&this[_0x1f6a76(0x2b5)]['setCombatLogIndex'](this[_0x1f6a76(0x22f)]());},Window_CombatLogHistory[_0x109a1a(0x311)][_0x109a1a(0x1d2)]=function(_0x833d26){const _0x3b1b8f=_0x109a1a;this[_0x3b1b8f(0x2b5)]=_0x833d26;},Window_CombatLogHistory[_0x109a1a(0x311)][_0x109a1a(0x2ac)]=function(){const _0x18828a=_0x109a1a;let _0x25942d=$gameSystem[_0x18828a(0x280)]();for(let _0xc2b980=0x0;_0xc2b980<_0x25942d;_0xc2b980++){let _0x4af93=_0xc2b980===0x0?TextManager[_0x18828a(0x1f3)]:TextManager[_0x18828a(0x190)],_0x430e6d=_0x4af93[_0x18828a(0x2b7)]($gameSystem[_0x18828a(0x240)]()-_0xc2b980);this['addCommand'](_0x430e6d,_0x18828a(0x206),!![],_0xc2b980);}};function Window_CombatLogDisplay(){const _0x36e2c8=_0x109a1a;this[_0x36e2c8(0x295)](...arguments);}Window_CombatLogDisplay[_0x109a1a(0x311)]=Object['create'](Window_Command['prototype']),Window_CombatLogDisplay[_0x109a1a(0x311)][_0x109a1a(0x2da)]=Window_CombatLogDisplay,Window_CombatLogDisplay[_0x109a1a(0x23e)]=![],Window_CombatLogDisplay[_0x109a1a(0x32d)]=![],Window_CombatLogDisplay[_0x109a1a(0x370)]=0x4,Window_CombatLogDisplay[_0x109a1a(0x2e8)]=0.2,Window_CombatLogDisplay[_0x109a1a(0x37d)]=1.5,Window_CombatLogDisplay[_0x109a1a(0x30f)]=VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1b6)][_0x109a1a(0x2fa)]['HotKey']||_0x109a1a(0x35e),Window_CombatLogDisplay[_0x109a1a(0x311)]['initialize']=function(_0x51cf22){const _0x7b2f47=_0x109a1a;Window_Command['prototype'][_0x7b2f47(0x295)][_0x7b2f47(0x362)](this,_0x51cf22),this[_0x7b2f47(0x33c)](),this[_0x7b2f47(0x34d)]=![],SceneManager[_0x7b2f47(0x2d1)]()&&(this[_0x7b2f47(0x345)]=0x0);},Window_CombatLogDisplay[_0x109a1a(0x311)][_0x109a1a(0x270)]=function(){const _0x12da6e=_0x109a1a;let _0x524ad3=Window_Scrollable[_0x12da6e(0x311)][_0x12da6e(0x270)][_0x12da6e(0x362)](this);return _0x524ad3+(Window_CombatLogDisplay[_0x12da6e(0x23e)]?0x8:0x0);},Window_CombatLogDisplay[_0x109a1a(0x311)][_0x109a1a(0x1e7)]=function(){const _0x4fc126=_0x109a1a;return VisuMZ[_0x4fc126(0x24d)][_0x4fc126(0x1b6)]['CombatLog'][_0x4fc126(0x2e7)];},Window_CombatLogDisplay['prototype']['isMenuCursorBlacklisted']=function(){return!![];},Window_CombatLogDisplay[_0x109a1a(0x311)][_0x109a1a(0x1d9)]=function(_0x2712ec){},Window_CombatLogDisplay[_0x109a1a(0x311)][_0x109a1a(0x262)]=function(){const _0x307290=_0x109a1a;this[_0x307290(0x2dc)]();},Window_CombatLogDisplay['prototype'][_0x109a1a(0x208)]=function(){const _0x5157dd=_0x109a1a;this[_0x5157dd(0x2dc)]();},Window_CombatLogDisplay['prototype'][_0x109a1a(0x2ee)]=function(){const _0xc32a60=_0x109a1a;SceneManager[_0xc32a60(0x2d1)]()&&!this[_0xc32a60(0x2b0)]&&($gameSystem['isCombatLogHotKeyActive']()&&Window_CombatLogDisplay['ACCESS_BUTTON']!==undefined&&(this[_0xc32a60(0x210)]()?(this[_0xc32a60(0x1a0)](),this[_0xc32a60(0x226)]()):this[_0xc32a60(0x1b4)]())),this['isOpen']()&&(Input[_0xc32a60(0x1b9)](_0xc32a60(0x28d))&&this['smoothScrollDown'](Window_CombatLogDisplay['SCROLL_SPEED_CURSOR']),Input[_0xc32a60(0x1b9)]('up')&&this[_0xc32a60(0x225)](Window_CombatLogDisplay[_0xc32a60(0x2e8)]),Input['isPressed'](_0xc32a60(0x243))&&this[_0xc32a60(0x285)](Window_CombatLogDisplay[_0xc32a60(0x37d)]),Input[_0xc32a60(0x1b9)](_0xc32a60(0x384))&&this['smoothScrollUp'](Window_CombatLogDisplay[_0xc32a60(0x37d)]),Input[_0xc32a60(0x351)](_0xc32a60(0x2f2))&&this['smoothScrollTo'](0x0,0x0),Input['isTriggered'](_0xc32a60(0x344))&&this[_0xc32a60(0x1a7)](0x0,this[_0xc32a60(0x34a)]()));},Window_CombatLogDisplay['prototype'][_0x109a1a(0x210)]=function(){const _0x198b91=_0x109a1a;if($gameMessage[_0x198b91(0x28b)]())return![];if(BattleManager['_victoryPhase'])return![];if(Imported['VisuMZ_3_ActiveChainSkills']){if(SceneManager[_0x198b91(0x284)]['isActiveChainSkillsUiVisible']())return![];}if(Imported[_0x198b91(0x268)]){if(SceneManager[_0x198b91(0x284)][_0x198b91(0x2d7)]())return![];}return Input['isPressed'](Window_CombatLogDisplay[_0x198b91(0x30f)]);},Window_CombatLogDisplay['prototype'][_0x109a1a(0x347)]=function(_0x2b3cb3){const _0xe4f58b=_0x109a1a;if(this[_0xe4f58b(0x349)]===_0x2b3cb3)return;this[_0xe4f58b(0x349)]=_0x2b3cb3,this[_0xe4f58b(0x219)](),this['scrollTo'](0x0,0x0);},Window_CombatLogDisplay['prototype'][_0x109a1a(0x2ac)]=function(){const _0x4f2594=_0x109a1a;if(this[_0x4f2594(0x349)]===undefined)return;const _0x5025e8=$gameSystem[_0x4f2594(0x1ca)](this[_0x4f2594(0x349)]);for(const _0x2222f8 of _0x5025e8){if(!_0x2222f8)continue;this[_0x4f2594(0x2ae)](_0x2222f8,_0x4f2594(0x2bd));}const _0x4083e4=this['_list'][this[_0x4f2594(0x1e6)][_0x4f2594(0x35b)]-0x1];_0x4083e4&&_0x4083e4['name']!==_0x4f2594(0x380)&&this['addCommand']('=====HORZLINE=====','combatLog');},Window_CombatLogDisplay[_0x109a1a(0x311)]['drawItemBackground']=function(_0x5212f3){const _0x106e8f=_0x109a1a;if(Window_CombatLogDisplay[_0x106e8f(0x32d)]){const _0x149cce=this[_0x106e8f(0x299)](_0x5212f3);this[_0x106e8f(0x1ee)](_0x149cce);}},Window_CombatLogDisplay[_0x109a1a(0x311)]['drawItem']=function(_0x55d0e8){const _0x57f4cf=_0x109a1a,_0x1c174e=this[_0x57f4cf(0x350)](_0x55d0e8),_0x3c8fa0=this[_0x57f4cf(0x256)](_0x55d0e8);_0x3c8fa0===_0x57f4cf(0x380)?this['drawHorzLine'](_0x1c174e):this[_0x57f4cf(0x1e0)](_0x3c8fa0,_0x1c174e['x'],_0x1c174e['y'],_0x1c174e['width']);},Window_CombatLogDisplay[_0x109a1a(0x311)]['drawHorzLine']=function(_0x5db423){const _0x54a0e7=_0x109a1a;this[_0x54a0e7(0x343)]();const _0x4caadf=Window_CombatLogDisplay[_0x54a0e7(0x370)],_0x106eb8=_0x5db423['y']+(_0x5db423['height']-_0x4caadf)/0x2;this[_0x54a0e7(0x281)](_0x5db423['x'],_0x106eb8,_0x5db423[_0x54a0e7(0x2c5)],_0x4caadf);},Window_CombatLogDisplay[_0x109a1a(0x311)][_0x109a1a(0x35f)]=function(){const _0x24eea7=_0x109a1a;this[_0x24eea7(0x34d)]=!![];},Window_CombatLogDisplay[_0x109a1a(0x311)][_0x109a1a(0x1a0)]=function(){const _0x257323=_0x109a1a;this[_0x257323(0x34d)]&&this[_0x257323(0x26e)]();},Window_CombatLogDisplay[_0x109a1a(0x311)][_0x109a1a(0x26e)]=function(){const _0xdf97eb=_0x109a1a;this['_requestRefresh']=![],this[_0xdf97eb(0x349)]=0x0,this[_0xdf97eb(0x219)](),this[_0xdf97eb(0x2c4)](0x0,this[_0xdf97eb(0x34a)]());},Window_CombatLogDisplay[_0x109a1a(0x311)][_0x109a1a(0x37f)]=function(_0x59e49b){this['_lastWindow']=_0x59e49b;},Window_CombatLogDisplay['prototype']['getLastWindow']=function(){const _0xd2aaf6=_0x109a1a;return this[_0xd2aaf6(0x1e3)];},Window_CombatLogDisplay[_0x109a1a(0x311)][_0x109a1a(0x195)]=function(){const _0x11b754=_0x109a1a;this[_0x11b754(0x1bf)]=new Sprite(),this[_0x11b754(0x1bf)]['bitmap']=new Bitmap(0x0,0x0),this[_0x11b754(0x1bf)]['x']=-0x4,this['addChildToBack'](this[_0x11b754(0x1bf)]);},Window_CombatLogDisplay[_0x109a1a(0x311)][_0x109a1a(0x1b3)]=function(){const _0x292fa1=_0x109a1a;if(this[_0x292fa1(0x1bf)]){const _0x49c672=this[_0x292fa1(0x1bf)][_0x292fa1(0x1c4)],_0x3393b6=this[_0x292fa1(0x2c5)]>0x0?this[_0x292fa1(0x2c5)]+0x8:0x0,_0x1ffc5a=this[_0x292fa1(0x355)],_0x375221=this['padding'],_0x23f916=ColorManager[_0x292fa1(0x2cd)](),_0x3f567d=ColorManager[_0x292fa1(0x20c)]();_0x49c672['resize'](_0x3393b6,_0x1ffc5a),_0x49c672[_0x292fa1(0x2db)](0x0,0x0,_0x3393b6,_0x375221,_0x3f567d,_0x23f916,!![]),_0x49c672['fillRect'](0x0,_0x375221,_0x3393b6,_0x1ffc5a-_0x375221*0x2,_0x23f916),_0x49c672[_0x292fa1(0x2db)](0x0,_0x1ffc5a-_0x375221,_0x3393b6,_0x375221,_0x23f916,_0x3f567d,!![]),this[_0x292fa1(0x1bf)][_0x292fa1(0x1aa)](0x0,0x0,_0x3393b6,_0x1ffc5a),$gameParty[_0x292fa1(0x2e3)]()&&(this[_0x292fa1(0x1bf)]['scale']['x']=0x64,this[_0x292fa1(0x1bf)][_0x292fa1(0x373)]['x']=0.5);}},VisuMZ[_0x109a1a(0x24d)]['Game_Battler_onAtbInterrupt']=Game_Battler[_0x109a1a(0x311)]['onAtbInterrupt'],Game_Battler[_0x109a1a(0x311)][_0x109a1a(0x29e)]=function(){const _0x4a4b7a=_0x109a1a;VisuMZ[_0x4a4b7a(0x24d)]['Game_Battler_onAtbInterrupt'][_0x4a4b7a(0x362)](this);if(!SceneManager[_0x4a4b7a(0x2d1)]())return;const _0x4d7305=VisuMZ[_0x4a4b7a(0x24d)][_0x4a4b7a(0x1b6)][_0x4a4b7a(0x211)];if(!_0x4d7305)return;if(!_0x4d7305[_0x4a4b7a(0x359)])return;const _0x511f92=_0x4d7305['TextBattleSysAtbInterrupt'];if(_0x511f92){let _0x2fd9b7=_0x511f92[_0x4a4b7a(0x2b7)](this[_0x4a4b7a(0x1bb)]()),_0x264789=_0x4d7305['IconBattleSysAtbInterrupt'];$gameSystem[_0x4a4b7a(0x30d)](_0x2fd9b7,_0x264789);}},VisuMZ[_0x109a1a(0x24d)]['Game_Battler_onCtbOrderChange']=Game_Battler['prototype'][_0x109a1a(0x353)],Game_Battler[_0x109a1a(0x311)][_0x109a1a(0x353)]=function(_0x206e6f){const _0x2f74aa=_0x109a1a;VisuMZ['CombatLog'][_0x2f74aa(0x244)][_0x2f74aa(0x362)](this,_0x206e6f);if(_0x206e6f===0x0)return;if(!SceneManager['isSceneBattle']())return;const _0xd4e329=VisuMZ[_0x2f74aa(0x24d)][_0x2f74aa(0x1b6)][_0x2f74aa(0x211)];if(!_0xd4e329)return;if(!_0xd4e329['ShowBattleSysCtbOrderChange'])return;const _0x4de00f=_0xd4e329['TextBattleSysCtbOrderChange'];if(_0x4de00f){let _0x20cbec=_0x4de00f['format'](this[_0x2f74aa(0x1bb)]()),_0x2c7510=_0xd4e329[_0x2f74aa(0x216)];$gameSystem[_0x2f74aa(0x30d)](_0x20cbec,_0x2c7510);}},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x32f)]=Game_Battler[_0x109a1a(0x311)][_0x109a1a(0x276)],Game_Battler[_0x109a1a(0x311)][_0x109a1a(0x276)]=function(_0x5f1499){const _0x883b47=_0x109a1a;VisuMZ[_0x883b47(0x24d)][_0x883b47(0x32f)][_0x883b47(0x362)](this,_0x5f1499);if(_0x5f1499===0x0)return;if(!SceneManager['isSceneBattle']())return;const _0x44cfe3=VisuMZ['CombatLog']['Settings'][_0x883b47(0x211)];if(!_0x44cfe3)return;if(!_0x44cfe3[_0x883b47(0x19d)])return;const _0x2063ec=_0x44cfe3[_0x883b47(0x1fe)];if(_0x2063ec){let _0x487f4e=_0x2063ec[_0x883b47(0x2b7)](this[_0x883b47(0x1bb)]()),_0x37b498=_0x44cfe3[_0x883b47(0x20d)];$gameSystem[_0x883b47(0x30d)](_0x487f4e,_0x37b498);}},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x257)]=Game_Battler['prototype'][_0x109a1a(0x28e)],Game_Battler['prototype']['onAntiDamageNullificationBarrier']=function(_0x1e346f){const _0x4cea10=_0x109a1a,_0x2652c9=VisuMZ[_0x4cea10(0x24d)]['Settings'][_0x4cea10(0x211)];if(_0x2652c9&&_0x2652c9[_0x4cea10(0x283)]&&SceneManager[_0x4cea10(0x2d1)]()){let _0x729f2f=_0x2652c9[_0x4cea10(0x193)];if(_0x729f2f){let _0x2dd848=_0x729f2f[_0x4cea10(0x2b7)](this[_0x4cea10(0x1bb)](),_0x1e346f['name']),_0x5dab31=_0x1e346f['iconIndex'];$gameSystem['addTextToCombatLog'](_0x2dd848,_0x5dab31);}}VisuMZ['CombatLog'][_0x4cea10(0x257)][_0x4cea10(0x362)](this,_0x1e346f);},VisuMZ['CombatLog'][_0x109a1a(0x1e8)]=Game_Battler['prototype'][_0x109a1a(0x36b)],Game_Battler['prototype'][_0x109a1a(0x36b)]=function(_0xc84f60){const _0x34266c=_0x109a1a,_0x12d566=VisuMZ[_0x34266c(0x24d)]['Settings'][_0x34266c(0x211)];if(_0x12d566&&_0x12d566[_0x34266c(0x302)]&&SceneManager[_0x34266c(0x2d1)]()){let _0x3eac8e=_0x12d566[_0x34266c(0x266)];if(_0x3eac8e){let _0x232ff0=_0x3eac8e['format'](this['combatLogName'](),_0xc84f60[_0x34266c(0x1ce)]),_0x5294e=_0xc84f60[_0x34266c(0x21c)];$gameSystem[_0x34266c(0x30d)](_0x232ff0,_0x5294e);}}VisuMZ[_0x34266c(0x24d)][_0x34266c(0x1e8)][_0x34266c(0x362)](this,_0xc84f60);},VisuMZ['CombatLog'][_0x109a1a(0x2be)]=Game_BattlerBase[_0x109a1a(0x311)]['getAntiDamageBarrierReduction'],Game_BattlerBase['prototype'][_0x109a1a(0x1b2)]=function(_0x117646){const _0xbf33c=_0x109a1a,_0x17d499=VisuMZ['CombatLog'][_0xbf33c(0x1b6)]['Compatibility'];if(_0x17d499&&_0x17d499['Show_AntiDmgBarrier_Reduce']&&SceneManager[_0xbf33c(0x2d1)]()){let _0x5ebe34=_0x17d499[_0xbf33c(0x271)];if(_0x5ebe34){let _0x58906c=_0x5ebe34[_0xbf33c(0x2b7)](this[_0xbf33c(0x1bb)](),$dataStates[_0x117646][_0xbf33c(0x1ce)]),_0x38f124=$dataStates[_0x117646][_0xbf33c(0x21c)];$gameSystem[_0xbf33c(0x30d)](_0x58906c,_0x38f124);}}return VisuMZ[_0xbf33c(0x24d)][_0xbf33c(0x2be)]['call'](this,_0x117646);},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x367)]=Game_Battler[_0x109a1a(0x311)][_0x109a1a(0x25a)],Game_Battler[_0x109a1a(0x311)][_0x109a1a(0x25a)]=function(_0x5b36c0,_0x4e0492){const _0x401ee9=_0x109a1a;VisuMZ[_0x401ee9(0x24d)]['Game_Battler_displayAbsorptionBarrierPopup']['call'](this,_0x5b36c0,_0x4e0492);if(_0x5b36c0===0x0)return;const _0x34ec2f=VisuMZ[_0x401ee9(0x24d)][_0x401ee9(0x1b6)][_0x401ee9(0x211)];if(_0x34ec2f&&_0x34ec2f[_0x401ee9(0x1df)]&&SceneManager['isSceneBattle']()){let _0x3c0156=_0x34ec2f[_0x401ee9(0x31b)];if(_0x3c0156){let _0xe93902=_0x3c0156[_0x401ee9(0x2b7)](this[_0x401ee9(0x1bb)](),_0x4e0492[_0x401ee9(0x1ce)],_0x5b36c0),_0x145d44=_0x4e0492[_0x401ee9(0x21c)];$gameSystem[_0x401ee9(0x30d)](_0xe93902,_0x145d44);}}},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x2e5)]=Game_Battler[_0x109a1a(0x311)][_0x109a1a(0x1ed)],Game_Battler[_0x109a1a(0x311)][_0x109a1a(0x1ed)]=function(_0x3b5b08){const _0x1b92ab=_0x109a1a,_0x49dcf7=VisuMZ[_0x1b92ab(0x24d)]['Settings'][_0x1b92ab(0x211)];if(_0x49dcf7&&_0x49dcf7[_0x1b92ab(0x291)]&&SceneManager['isSceneBattle']()){let _0x16fb01=_0x49dcf7[_0x1b92ab(0x2e6)];if(_0x16fb01){let _0xc216e0=_0x16fb01[_0x1b92ab(0x2b7)](this[_0x1b92ab(0x1bb)](),_0x3b5b08['name'],TextManager['mp']),_0x55bc4f=_0x3b5b08[_0x1b92ab(0x21c)];$gameSystem[_0x1b92ab(0x30d)](_0xc216e0,_0x55bc4f);}}VisuMZ[_0x1b92ab(0x24d)]['Game_Battler_onAntiDamageMpBarrier'][_0x1b92ab(0x362)](this,_0x3b5b08);},VisuMZ['CombatLog'][_0x109a1a(0x18b)]=Game_Battler['prototype']['onAntiDamageTpBarrier'],Game_Battler[_0x109a1a(0x311)][_0x109a1a(0x32a)]=function(_0x46c9d2){const _0x564c6a=_0x109a1a,_0x309461=VisuMZ[_0x564c6a(0x24d)][_0x564c6a(0x1b6)][_0x564c6a(0x211)];if(_0x309461&&_0x309461[_0x564c6a(0x214)]&&SceneManager[_0x564c6a(0x2d1)]()){let _0x3e9a24=_0x309461[_0x564c6a(0x189)];if(_0x3e9a24){let _0x14696d=_0x3e9a24['format'](this[_0x564c6a(0x1bb)](),_0x46c9d2[_0x564c6a(0x1ce)],TextManager['tp']),_0xc108c4=_0x46c9d2[_0x564c6a(0x21c)];$gameSystem[_0x564c6a(0x30d)](_0x14696d,_0xc108c4);}}VisuMZ[_0x564c6a(0x24d)][_0x564c6a(0x18b)][_0x564c6a(0x362)](this,_0x46c9d2);},VisuMZ[_0x109a1a(0x24d)][_0x109a1a(0x1bd)]=Game_Battler[_0x109a1a(0x311)][_0x109a1a(0x381)],Game_Battler[_0x109a1a(0x311)][_0x109a1a(0x381)]=function(_0x528485){const _0x11c160=_0x109a1a;VisuMZ[_0x11c160(0x24d)][_0x11c160(0x1bd)][_0x11c160(0x362)](this,_0x528485);if(!SceneManager[_0x11c160(0x2d1)]())return;if(!_0x528485)return;const _0x4c9110=VisuMZ['CombatLog'][_0x11c160(0x1b6)][_0x11c160(0x211)];if(!_0x4c9110)return;if(!_0x4c9110['Show_LifeStateEffects_%1'['format'](_0x528485)])return;let _0xd3f6f9=_0x4c9110[_0x11c160(0x312)[_0x11c160(0x2b7)](_0x528485)];if(_0xd3f6f9){let _0x4376d8=_0xd3f6f9[_0x11c160(0x2b7)](this[_0x11c160(0x1bb)]()),_0x366e35=_0x4c9110[_0x11c160(0x2b8)['format'](_0x528485)];$gameSystem[_0x11c160(0x30d)](_0x4376d8,_0x366e35);}},VisuMZ['CombatLog'][_0x109a1a(0x18d)]=Window_BattleLog[_0x109a1a(0x311)][_0x109a1a(0x235)],Window_BattleLog['prototype'][_0x109a1a(0x235)]=function(_0x168413){const _0x3f4219=_0x109a1a;VisuMZ[_0x3f4219(0x24d)][_0x3f4219(0x18d)][_0x3f4219(0x362)](this,_0x168413);if(_0x168413==='')return;const _0x45bd83=VisuMZ[_0x3f4219(0x24d)][_0x3f4219(0x1b6)][_0x3f4219(0x211)];if(_0x45bd83&&_0x45bd83[_0x3f4219(0x336)]&&SceneManager['isSceneBattle']()){let _0xe1382c=_0x45bd83[_0x3f4219(0x2d4)];$gameSystem['addTextToCombatLog'](_0x168413,_0xe1382c);}};