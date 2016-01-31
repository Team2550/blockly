/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating JavaScript for variable blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.RoboRio.robot');

goog.require('Blockly.RoboRio');

Blockly.RoboRio['robot_robotinit'] = function(block) {
  var statements_do = Blockly.RoboRio.statementToCode(block, 'DO');
  // TODO: Assemble JavaScript into code variable.
  var code = 'void Robot::RobotInit() {\n' + statements_do + '}\n';
  return code;
};

Blockly.RoboRio['robot_autoinit'] = function(block) {
  var statements_do = Blockly.RoboRio.statementToCode(block, 'DO');
  // TODO: Assemble JavaScript into code variable.
  var code = 'void Robot::AutonomousInit() {\n' + statements_do + '}\n';
  return code;
};

Blockly.RoboRio['robot_autoper'] = function(block) {
  var statements_do = Blockly.RoboRio.statementToCode(block, 'DO');
  // TODO: Assemble JavaScript into code variable.
  var code = 'void Robot::AutonomousPeriodic() {\n' + statements_do + '}\n';
  return code;
};

Blockly.RoboRio['robot_telinit'] = function(block) {
  var statements_do = Blockly.RoboRio.statementToCode(block, 'DO');
  // TODO: Assemble JavaScript into code variable.
  var code = 'void Robot::TeleopInit() {\n' + statements_do + '}\n';
  return code;
};

Blockly.RoboRio['robot_telper'] = function(block) {
  var statements_do = Blockly.RoboRio.statementToCode(block, 'DO');
  // TODO: Assemble JavaScript into code variable.
  var code = 'void Robot::TeleopPeriodic() {\n' + statements_do + '}\n';
  return code;
};

Blockly.RoboRio['robot_disinit'] = function(block) {
  var statements_do = Blockly.RoboRio.statementToCode(block, 'DO');
  // TODO: Assemble JavaScript into code variable.
  var code = 'void Robot::DisabledInit() {\n' + statements_do + '}\n';
  return code;
};

Blockly.RoboRio['robot_disper'] = function(block) {
  var statements_do = Blockly.RoboRio.statementToCode(block, 'DO');
  // TODO: Assemble JavaScript into code variable.
  var code = 'void Robot::DisabledPeriodic() {\n' + statements_do + '}\n';
  return code;
};