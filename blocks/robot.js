/**
 * @license
 * Visual Blocks Editor
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
 * @fileoverview Math blocks for Blockly.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.Blocks.robot');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.robot.HUE = 0;

Blockly.Blocks['robot_robotinit'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("When the robot starts up");
    this.appendStatementInput("DO")
        .appendField("do");
    this.setTooltip('Defines the code to run when the robot is turned on.');
	this.setDeletable(false);
    this.setColour(0);
  }
};

Blockly.Blocks['robot_autoinit'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("At the start of Autonomous round");
    this.appendStatementInput("DO")
        .appendField("do");
    this.setTooltip('Defines the code to run at the start of the Autonomous round.');
	this.setDeletable(false);
    this.setColour(0);
  }
};

Blockly.Blocks['robot_autoper'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Continuously during Autonomous round");
    this.appendStatementInput("DO")
        .appendField("do");
    this.setTooltip('Defines the code to run continuously during the Autonomous round.');
	this.setDeletable(false);
    this.setColour(0);
  }
};

Blockly.Blocks['robot_telinit'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("At the start of Periodic round");
    this.appendStatementInput("DO")
        .appendField("do");
    this.setTooltip('Defines the code to run at the start of the Periodic round.');
	this.setDeletable(false);
    this.setColour(0);
  }
};

Blockly.Blocks['robot_telper'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Continuously during Periodic round");
    this.appendStatementInput("DO")
        .appendField("do");
    this.setTooltip('Defines the code to run continuously during the Periodic round.');
	this.setDeletable(false);
    this.setColour(0);
  }
};

Blockly.Blocks['robot_disinit'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("When first disabled");
    this.appendStatementInput("DO")
        .appendField("do");
    this.setTooltip('Defines the code to run when the robot is first disabled.');
	this.setDeletable(false);
    this.setColour(0);
  }
};

Blockly.Blocks['robot_disper'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("While disabled");
    this.appendStatementInput("DO")
        .appendField("do");
    this.setTooltip('Defines the code to run continuously while disabled.');
	this.setDeletable(false);
    this.setColour(0);
  }
};