var link;

function setup() {
    createCanvas(windowWidth, windowHeight);
    link = createA("http://vagamundeando.co/bahia-malaga-un-paraiso-escondido-en-el-pacifico-colombiano/", "Un paraiso escondido");
    link2 = createA("http://www.kayakcolombia.net/planes-en-kayak/turismo-kayak-bahia-malaga/", "Planes en kayak");
    link3 = createA("https://www.reservaaguamarina.com/temporada-de-ballenas", "Temporada de ballenas");
    link4 = createA("http://www.bahiamalaga.org/", "Bienvenidos a Bahía Málaga");
}

function preload() {
    img = loadImage('img/malaga.jpg');
    img1 = loadImage('img/amaca.jpg');
    img2 = loadImage('img/canoa.jpg');
    img3 = loadImage('img/ballenas.jpg');
    img4 = loadImage('img/mapaMalaga.jpg');
    robot = loadImage('img/robot.jpg');
    cachalote = loadImage('img/cachalote.png');
}

function draw() {


    background(img);

    function malagasphotos(imgmalaga, x, y, w, h) {
        this.imgmalaga = imgmalaga;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.draw = image(imgmalaga, x, y, w, h);
    }

    var amacas = new malagasphotos(img1, 200, 100, 200, 100);
    var canoas = new malagasphotos(img2, 500, 100, 200, 100);
    var ballenas = new malagasphotos(img3, 200, 400, 200, 100);
    var bahia = new malagasphotos(img4, 500, 400, 200, 100);

    link.position(220, 200);
    link2.position(520, 200);
    link3.position(220, 500);
    link4.position(520, 500);
    textSize(32);
    text("Bahía Malaga", (windowWidth / 2) - 100, 10, 300);
    image(cachalote, mouseX, mouseY, 150, 120)
}