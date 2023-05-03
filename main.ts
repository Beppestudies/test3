basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 15) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
        basic.pause(200)
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(200)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        basic.pause(200)
        while (true) {
            if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
                maqueen.motorStop(maqueen.Motors.All)
                break;
            }
        }
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
        basic.pause(200)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    }
})
basic.forever(function () {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    basic.pause(1000)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
})
