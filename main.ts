music.play(music.stringPlayable("E - E D A E A - ", 120), music.PlaybackMode.LoopingInBackground)
music.play(music.stringPlayable("G - A - - A - F ", 120), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("B A G A G F G F ", 120), music.PlaybackMode.UntilDone)
basic.forever(function () {
    music.play(music.stringPlayable("B G A E G - D - ", 120), music.PlaybackMode.UntilDone)
})
