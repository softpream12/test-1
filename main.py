def on_button_pressed_a():
    music.ring_tone(262)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    music.ring_tone(440)
input.on_button_pressed(Button.B, on_button_pressed_b)

