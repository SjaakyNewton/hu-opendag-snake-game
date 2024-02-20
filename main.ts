let snack_coord_x = 0
let snake_coord_x = 0
let snack_coord_y = 0
let snake_coord_y = 0
let check_snack_spawned = 0
let temp_coord: number[] = []
let list_tail_coords: number[][] = []
function HUopendag3eatsnack () {
    if (snack_coord_x == snake_coord_x && snack_coord_y == snake_coord_y) {
        check_snack_spawned = 0
        snack_coord_x = -1
        snack_coord_y = -1
        temp_coord = [snake_coord_x, snake_coord_y]
        list_tail_coords.push(temp_coord)
    }
}
function HUopendag4displaytail () {
    temp_coord = list_tail_coords[0]
    led.unplot(temp_coord[0], temp_coord[1])
    list_tail_coords.shift()
    for (let value of list_tail_coords) {
        led.plot(value[0], value[1])
    }
}
function HUopendag2spawnsnack () {
    if (check_snack_spawned != 1) {
        snack_coord_x = randint(0, 4)
        snack_coord_y = randint(0, 4)
        check_snack_spawned = 1
    }
    if (snack_coord_x == snake_coord_x && snack_coord_y == snake_coord_y) {
        led.plotBrightness(snack_coord_x, snack_coord_y, 250)
    } else {
        led.plotBrightness(snack_coord_x, snack_coord_y, 50)
    }
}
function HUopendag1moving () {
    led.unplot(snake_coord_x, snake_coord_y)
    if (input.isGesture(Gesture.TiltRight)) {
        snake_coord_x += 1
    } else if (input.isGesture(Gesture.TiltLeft)) {
        snake_coord_x += -1
    } else if (input.isGesture(Gesture.LogoUp)) {
        snake_coord_y += 1
    } else if (input.isGesture(Gesture.LogoDown)) {
        snake_coord_y += -1
    }
    check_move()
    led.plot(snake_coord_x, snake_coord_y)
    temp_coord = [snake_coord_x, snake_coord_y]
    list_tail_coords.push(temp_coord)
}
function check_move () {
    if (snake_coord_x > 4) {
        snake_coord_x = 0
    } else if (snake_coord_x < 0) {
        snake_coord_x = 4
    }
    if (snake_coord_y > 4) {
        snake_coord_y = 0
    } else if (snake_coord_y < 0) {
        snake_coord_y = 4
    }
}
basic.forever(function () {
	
})
