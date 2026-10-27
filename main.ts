input.onButtonPressed(Button.A, function () {
    Connected = 0
    basic.pause(1500)
    basic.clearScreen()
    basic.showString("DIALING")
    radio.sendString("AOL_CONNECT")
    for (let index = 0; index < 4; index++) {
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
        basic.pause(50)
    }
    for (let index = 0; index < 2; index++) {
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.pause(400)
    }
    for (let index = 0; index < 10; index++) {
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
    }
    music.play(music.tonePlayable(196, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    basic.pause(500)
    Connected = 1
    if (site_number == 4) {
        sega_year += 1
        if (sega_year == 1) {
            basic.showString("1996")
        } else if (sega_year == 2) {
            basic.showString("1999")
        } else if (sega_year == 3) {
            basic.showString("2001")
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    site_number += 1
    if (site_number > 5) {
        site_number = 1
    } else if (site_number == 1) {
        basic.showString("YAHOO")
    } else if (site_number == 2) {
        basic.showString("GOOGLE")
    } else if (site_number == 3) {
        basic.showString("SPACE_JAM")
    } else if (site_number == 4) {
        basic.showString("SEGA")
    } else if (site_number == 5) {
        basic.showString("MICROSOFT")
    }
})
input.onButtonPressed(Button.B, function () {
    if (site_number == 1) {
        basic.showString("YAHOO! NEWS: REPTILE WINS ELECTION")
    } else if (site_number == 2) {
        basic.showString("GOOGLE: SEARCHING... 0 RESULTS FOUND")
    } else if (site_number == 3) {
        basic.showString("SPACE JAM: WELCOME TO THE SPACE JAM WEBSITE")
    } else if (site_number == 4) {
        basic.showString("SEGA PORTAL (PRESS A FOR YEAR)")
        basic.pause(1500)
        basic.showIcon(IconNames.Rabbit)
        basic.clearScreen()
        if (sega_year == 1) {
            basic.showString("SEGA 1996 - NEW SATURN GAMES: NIGHTS INTO dreams... // SONIC 3D BLAST // VIRTUA FIGHTER 2")
        } else if (sega_year == 2) {
            basic.showString("SEGA 1999 - DREAMCAST LAUNCH! SONIC ADVENTURE // SOLCALIBUR // POWER STONE")
        } else if (sega_year == 3) {
            basic.showString("SEGA 2001 - LATEST ADDITIONS: CRAZY TAXI 2 // PHANTASY STAR ONLINE // JET SET RADIO")
        }
    } else if (site_number == 5) {
        basic.showString("MICROSOFT WINDOWS 95 IS HERE! START ME UP!")
        basic.pause(1500)
        basic.showIcon(IconNames.SmallSquare)
    }
})
let sega_year = 0
let site_number = 0
let Connected = 0
radio.setGroup(90)
music.setBuiltInSpeakerEnabled(true)
music.setVolume(256)
Connected = 0
basic.showIcon(IconNames.Confused)
basic.forever(function () {
    if (Connected == 1) {
        Connected = 0
        basic.showString("WELLCOME! YOU'VE GOT MAIL!")
        basic.showLeds(`
            # . . . #
            # # . # #
            # . # . #
            # . . . #
            # . . . #
            `)
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        basic.pause(1500)
        basic.clearScreen()
        basic.showString("IM FROM: SONIC_FAN97 - I JUST GOT SONIC R IT'S PRITY GOOD!")
        basic.pause(5000)
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
        basic.showString("Conection Esablished")
    }
})
