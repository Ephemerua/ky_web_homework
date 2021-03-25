let plate_img;
let item_img;
let canvas_size = 430;
let plate_size = 150;
let plate_r = plate_size / 2;
let item_size = 80
let plate_height = 0
let step_num = 5
let per_step_image_num = [7,7,12,6,9]
item_images = []
item_num =0
item_slots = []
click_slots = []


function init_slots(){
    x_base = -70
    y_base = 25
    for(i = 0; i < 4; i++){
        tmp=[]
        for (j = 0; j < i+2; j++){
            item_slots.push([x_base + j*80, y_base - i * 75])
            click_slots.push([x_base + j*80 - 30, y_base - i * 75 - 30])
        }
        x_base -= 85/2
    }
}


//this function loads all proteins' image
function load_item_images(){
    for(i = 0; i < step_num; i++){
        tmp_imgs = []
        for(j = 0; j < per_step_image_num[i]; j++){
            tmp_imgs.push(loadImage("pic/diy/"+(i+1)+"_"+(j+1)+".svg"))
        }
        item_images.push(tmp_imgs)
    }
}

function add_item(stepIndex, itemIndex, num){
    for(i = 0; i < num; i++){
        created_items.push(new item(stepIndex, itemIndex, plate_size, 60, 60))
    }
    plate_height -= 15
}

class item {
    constructor(stepIndex, itemIndex, plate_size, height, width) {
        this.img = item_images[stepIndex][itemIndex]
        this.width = width
        this.height = height
        this.plate_size = plate_size
        this.set_pos()
        this.h = 0
        this.d = 0.2
    }

    //randomly set the item's position
    set_pos() {
        // plate_size = this.plate_size
        // plate_r = plate_size / 2
        // let x = Math.floor(Math.random() * plate_size) - plate_r; 
        // let y = Math.floor(Math.random() *20) + plate_height + 10
        let angle = Math.floor(Math.random() * 360) - 180
        // this.x = x - this.width / 2 + 30
        // this.y = y - this.height / 2 + 120
        this.angle = angle
        var pos = item_slots[item_num]
        item_num += 1
        this.x = pos[0]
        this.y = pos[1]
        this.angle = 0
    }

    //draw the img with rotation
    draw() {
        angleMode(DEGREES);
        imageMode(CENTER);
        translate(this.x + this.width / 2, this.y + this.height / 2);
        rotate(this.angle);
        image(this.img, 0, 0, this.width, this.height);
        rotate(-this.angle);
        translate(-(this.x + this.width / 2), -(this.y + this.height / 2));
        imageMode(CORNER);
        angleMode(RADIANS);
    }
    tick(){
        var h = this.h
        if(h>4 || h < -4){
            this.d = -this.d
        }

        this.h += this.d
        this.y += this.d
    }
}


//-------processing jobs start here------
function preload() {
    plate_img = loadImage('pic/diyBowl.jpg');
    load_item_images()
    init_slots()
}


function setup() {
    angleMode(DEGREES);
    var canvas = createCanvas(canvas_size, canvas_size, WEBGL);
    translate(-canvas_size/2, -canvas_size/2)
    texture(plate_img);
    noStroke();
    rect(0, 0, canvas_size, canvas_size)
    canvas.parent('sketch-holder');
}

function draw(){
    translate(-canvas_size/2, -canvas_size/2)
    texture(plate_img);
    noStroke();
    rect(0, 0, canvas_size, canvas_size)
    translate(canvas_size/2, canvas_size/2)
    //draw items
    for(i = 0; i < created_items.length; i++){
        created_items[i].tick()
        created_items[i].draw()
    }
}

function draw_rect(){
    rect(0,0,90,90)
}

function mouseClicked(){
    x = mouseX
    y = mouseY
    alert(x+" "+y)
    for(i = 0; i < click_slots.length; i++){
        slot = click_slots[i]
        if(x>slot[0] && x < slot[0]+60){
            if(y > slot[1] && y < slot[1]+60){
                //clicked on an item
                toRemove = created_items[i]
                created_items.pop(i)
                delete toRemove
            }
        }
    }
}

created_items = []


