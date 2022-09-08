/**
* Lori Crotser @ SparkFun Electronics
* September 8, 2022
* Development environment specifics:
* Written in Microsoft Makecode
* Tested with a SparkFun gatorUV sensor and micro:bit
*
* This code is released under the [MIT License](http://opensource.org/licenses/MIT).
* Please review the LICENSE.md file included with this example. If you have any questions
* or concerns with licensing, please contact techsupport@sparkfun.com.
* Distributed as-is; no warranty is given.
*/


/**
 * Functions to operate the gatorUV sensor
 */

gatorUV.begin()
gatorUV.setRefreshTime(gatorUVRefreshTime.two)

basic.forever(function () {
    serial.writeLine("" + gatorUV.UV())
})