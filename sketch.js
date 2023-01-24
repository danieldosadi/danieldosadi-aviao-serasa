//criar variáveis

var aviao, aviaoImg;

var cliqueJogo = "play";

//função que carrega imagens
function preload()
{
    aviaoImg = loadImage("img/airplane_DSD.png");
}


//função que inicializa o arquivo
function setup()
{
    createCanvas(1500,800);
    aviao = createSprite(100,200,20,20);
    aviao.addImage("aviao", aviaoImg);
    aviao.scale = 0.5
    aviao.x = 40;
}

//função que executa o programa até que seja parado
function draw()
{
    //colocar cor de fundo
    background("#652CD0");
    //condição para pular
    //exibir texto de instrução
    //comando que desenha sprites
    if (cliqueJogo === "play")
    {
        if(keyDown("space"))
        {
            aviao.velocityY = -10;
        }
    }
    
    drawSprites();
}
