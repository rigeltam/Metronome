input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 1e+54; index++) {
        music.playTone(988, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
