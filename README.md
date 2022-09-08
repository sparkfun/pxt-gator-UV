# gator:light Light Sensor

[![Community Discord](https://img.shields.io/discord/448979533891371018.svg)](https://aka.ms/makecodecommunity)

The gator:UV is an ultraviolet light sensor that is gator-clippable to the gator:bit ecosystem

[![SparkFun gator:UV](https://raw.githubusercontent.com/sparkfun/pxt-gator-uv/master/icon.png)](https://www.sparkfun.com/products/15273)

[*SparkFun gator:UV (15273)*](https://www.sparkfun.com/products/15273)




## ~ hint

To use this package, go to https://makecode.microbit.org, click ``Add package`` and search for **gator-UV**. The package is located [here](https://makecode.microbit.org/pkg/sparkfun/pxt-gator-uv)

## ~

## Basic usage

```blocks
//Initializes the sensor to prepare it for readings.
gatorUV.begin()
```

Use ``||initialize gator:UV sensor||`` to prepare the gator:UV to take readings.

```blocks
//Grabs a value from the sensor and writes it out over serial
serial.writeNumber(gatorUV.UV())
```

Use ``||serial write number ||get UVA Reading|| ||`` To grab a UVA reading from the sensor and write it out over serial.

```blocks
//Changes the integration time for our sensor
gatorUV.setRefreshTime(gatorUVRefreshTime.one)
```

Use ``||set refresh time on UV Sensor to **one**||`` to change the time over which a reading is taken on the UV sensor

## Example: Light Detector

```blocks
//Read UV value and write it to the serial port
gatorUV.begin()
basic.forever(function () {
    serial.writeNumber(gatorUV.UV())
})
```

## Supported targets

* for PXT/microbit

## License

MIT

```package
gatorUV=github:sparkfun/pxt-gator-UV
```
