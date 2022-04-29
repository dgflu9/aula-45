
var fundo, fundo_tela, jogador, jogador_img1,jogador_img2 ;

function preload(){
  fundo_tela = loadImage ("assets/bg.jpeg");
  jogador_img1 = loadImage ("assets/shooter_2.png");
  jogador_img2 = loadImage ("assets/shooter_3.png");
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
 fundo = createSprite (displayWidth/2 - 20,displayHeight/2 - 40, 20, 20);
 fundo.addImage (fundo_tela);
 fundo.scale = 1.1;
//criando o sprite do jogador
 jogador = createSprite (displayWidth - 1150,displayHeight-300, 50, 50);
 jogador.addImage (jogador_img1);
 jogador.scale = 0.3;
 
 jogador.setCollider ("rectangle", 0,0,300,300);
 jogador.debug = true;
}

function draw() {
  background(0); 




  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando toques
 if(keyDown("W")|| touches.length > 0) {
 jogador.y = jogador.y - 30;
 }
 if(keyDown("S")|| touches.length > 0) {
  jogador.y = jogador.y + 30;
  }

//solte balas e mude a imagem do atirador para a posição de tiro quando a tecla de espaço for pressionada
if (keyWentDown("space")) {
jogador.addImage (jogador_img2);
}//o jogador volta à imagem original quando pararmos de pressionar a barra de espaço
else if (keyWentUp("space")) {
jogador.addImage (jogador_img1);
}





drawSprites();

}
