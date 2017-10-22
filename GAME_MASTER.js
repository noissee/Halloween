var canvas = document.getElementById('main');
var ctx = canvas.getContext('2d');
var WIDTH = document.body.offsetWidth;
var HEIGHT = document.body.offsetHeight;
canvas.height = HEIGHT;
canvas.width = WIDTH;

var extraFOV = 32;

var MOVEMENT_STATIONARY = "STATIONARY";
var MOVEMENT_BOUNCE = "BOUNCE";
var MOVEMENT_WRAP = "WRAP";


var GAME_MASTER = {
    game_board: {
        x: new ValueRange(-extraFOV, WIDTH + extraFOV),
        y: new ValueRange(-extraFOV, HEIGHT + extraFOV),
        grid_size: 32
    },
    entity_spawn_rate: 0.5,
    song: "audio/ghostbusters.mp3",
    entities: [{
        name: "PUMPKIN",
        spawn_rate: 0.25,
        size: 20,
        size_std_dev: 8,
        special_activation_rate: 0,
        normal_sprite: "sprites/pumpkin.png",
        special_sprite: "sprites/pumpkin.png",
        movement_type: MOVEMENT_STATIONARY
    }, {
        name: "JACK O'LANTERN",
        spawn_rate: 0.6,
        size: 20,
        size_std_dev: 8,
        special_activation_rate: 0.5,
        normal_sprite: "sprites/jackolantern-off.png",
        special_sprite: "sprites/jackolantern-on.png",
        movement_type: MOVEMENT_STATIONARY
    }, {
        name: "TOMBSTONE",
        spawn_rate: 0.1,
        size: 22,
        size_std_dev: 4,
        special_activation_rate: 0,
        normal_sprite: "sprites/gravestone.png",
        special_sprite: "sprites/gravestone.png",
        movement_type: MOVEMENT_STATIONARY
    }, {
        name: "BOUNCING GHOST",
        spawn_rate: 0.025,
        size: 22,
        size_std_dev: 4,
        special_activation_rate: 0,
        normal_sprite: "sprites/ghost.png",
        special_sprite: "sprites/ghost.png",
        x_movement_modifier: 2,
        y_movement_modifier: 2,
        movement_type: MOVEMENT_BOUNCE
    }, {
        name: "WRAPPING GHOST",
        spawn_rate: 0.025,
        size: 22,
        size_std_dev: 4,
        special_activation_rate: 0,
        normal_sprite: "sprites/ghost.png",
        special_sprite: "sprites/ghost.png",
        x_movement_modifier: 2,
        y_movement_modifier: 2,
        movement_type: MOVEMENT_WRAP
    }]
};