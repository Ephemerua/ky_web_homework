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
    }

    //randomly set the item's position
    set_pos() {
        plate_size = this.plate_size
        plate_r = plate_size / 2
        let x = Math.floor(Math.random() * plate_size) - plate_r; 
        let y = Math.floor(Math.random() *20) + plate_height + 10
        let angle = Math.floor(Math.random() * 360)
        this.x = x - this.width / 2 + 30
        this.y = y - this.height / 2 + 120
        this.angle = angle
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
}


//-------processing jobs start here------
function preload() {
    plate_img = loadImage('pic/diyBowl.png');
    load_item_images()
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
    //draw items
    for(i = 0; i < created_items.length; i++){
        created_items[i].draw()
    }
}

function draw_rect(){
    rect(0,0,90,90)
}

created_items = []


