/**
* Andy England @ SparkFun Electronics
* September 6, 2018

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
 * Allows you to define the timing for light data collection
 * half = 62.5 ms
 * one = 125 ms
 * two = 250 ms
 * four = 500 ms
 */

 enum gatorUVRefreshTime{
	 half=1,
	 one=2,
	 two=3,
	 four=4,
 }

/**
* Functions for working with the gator:UV
*/
//% color=#f44242 icon="\uf185"
namespace gatorUV {
	let highAddress = 0x39
    let lowAddress = 0x38
    let araAddress = 0x0C
	let commandRegister = 0x06
    // Functions for reading UV from the gatorUV in UV or straight adv value
	
	function writeCommand()
	{
		pins.i2cWriteNumber(lowAddress, commandRegister, NumberFormat.UInt8LE)
	}
	
	/**
    * Initialize the sensor
    */
    //% weight=31 blockId="gatorUV_begin" block="initialize gator:UV sensor"
	export function begin() 
	{
		pins.i2cWriteNumber(lowAddress, commandRegister, NumberFormat.UInt8LE)
	}
	
    /**
    * Set the refresh time for our UVA measurement
    */
    //% weight=30 blockId="gatorUV_IT" block="set refresh time on UV Sensor to %gatorUVRefreshTime" advanced=true
    export function setRefreshTime(type: gatorUVRefreshTime): void{
	  commandRegister = 0x02
      switch(type){
        case gatorUVRefreshTime.half: 
			commandRegister | (0b00 << 2);
			break;
        case gatorUVRefreshTime.one: 
			commandRegister | (0b01 << 2);
			break;
        case gatorUVRefreshTime.two: 
			commandRegister | (0b10 << 2);
			break;
        case gatorUVRefreshTime.four: 
			commandRegister | (0b11 << 2);
			break;
      }
	  writeCommand();
    }

    /**
    * Get the UV measurement
    */
    //% weight=29 blockId="gatorUV_UV" block="UVA Reading"
    export function UV(): number{
		let msb = pins.i2cReadNumber(highAddress, NumberFormat.UInt8LE, false)
		let lsb = pins.i2cReadNumber(lowAddress, NumberFormat.UInt8LE, false)
		return (msb << 8) | lsb
	}
}