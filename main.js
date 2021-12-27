var canvas = new fabric.Canvas('myCanvas');

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object= "";

function player_update()
{
   fabric.Image.fromURL("player.png" , function(IMG) {
       player_object = Img;

       player_object.scaleToWidth(150);
       player_object.scaleToHeight(140);
       player_object.set({
         top:player_y,
         left:player_x  
       });
       canvas.add(player_object);
   });
}


function new_image(get_image)
{
   fabric.Image.fromURL(get_image, function(Img){
   block_image_object = Img;

   block_image_object.scaleToWidth(block_image_width);
   block_image_object.scaleToHeight(block_image_height);
   block_image_object.set({
       top:player_y,
       left:player_x
   });
   canvas.add(block_image_object);

   });


}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
  keyPressed = e.keyCode;
  console.log(keyPressed);
  if(e.shiftKey == true && keyPressed == '80')
  {
    console.log("p and shift pressed together");
    block_image_width = block_image_width + 10;
    block_image_height = block_image_height + 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
    
  }
 if(e.shiftKey && keyPressed == '77')
 {
  console.log("m and shift pressed together");
  block_image_width = block_image_width - 10;
  block_image_height = block_image_height - 10;
  document.getElementById("current_width").innerHTML = block_image_width;
  document.getElementById("current_height").innerHTML = block_image_height;
 }

if(keyPressed == '38')
{
   up();
   console.log("up");
}

if(keyPressed == '40')
{
   down();
   console.log("down");
}

if(keyPressed == '37')
{
   left();
   console.log("left");
}

if(keyPressed == '39')
{
   right();
   console.log("right");
}
if(keyPressed == '87')
{
   new_image('https://i.pinimg.com/1200x/27/20/b1/2720b18cc17dfa4cbda316a98273fd86.jpg');
   console.log("w");
}
if(keyPressed == '71')
{
   new_image('https://m.media-amazon.com/images/I/71oHe4HkvXL._SY679_.jpg');
   console.log("g");
}
if(keyPressed == '76')
{
   new_image('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVVxKkKnvmLenhBeUn6q7SltENiQvJtUSllg&usqp=CAU');
   console.log("l");
}
if(keyPressed == '84')
{
   new_image('https://i.pinimg.com/originals/9d/cf/be/9dcfbe137dca9a96313951c8c247aed3.png');
   console.log("t");
}
if(keyPressed == '82')
{
   new_image('https://img.wattpad.com/9c9576f5116087792846986f6f6c94199c7cbc50/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6965644a37595f5742495f6e65513d3d2d313037393137373139332e313638343938376566643533376536323231383630373030303039372e6a7067');
   console.log("r");
}
if(keyPressed == '89')
{
   new_image('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWZJFdn65l5cDIRvJl35KRaCaRyCy9Ll2y4A&usqp=CAU');
   console.log("y");
}
if(keyPressed == '68')
{
   new_image('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77ad9101-adb8-4fe3-a386-8d77d0158b92/dcyvi6t-061dea4e-d016-4e55-be07-d3ad93ba8d75.jpg/v1/fill/w_804,h_994,q_70,strp/gnome_beast_master_ranger_by_the_art_of_b_dcyvi6t-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI2NSIsInBhdGgiOiJcL2ZcLzc3YWQ5MTAxLWFkYjgtNGZlMy1hMzg2LThkNzdkMDE1OGI5MlwvZGN5dmk2dC0wNjFkZWE0ZS1kMDE2LTRlNTUtYmUwNy1kM2FkOTNiYThkNzUuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.6CfQ5VolbWgzIIhv3SjKWYKgLPgML9_2mUGBqL9VM2c');
   console.log("d");
}
if(keyPressed == '85')
{
   new_image('https://i.pinimg.com/736x/56/0f/a4/560fa4613e5079c8a2771ca165f4e7f2--power-rangers-art-cristiano-ronaldo.jpg');
   console.log("u");
}
if(keyPressed == '67')
{
   new_image('https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzcxaWV2dFQwTmhMLl9TUzQwMF8uanBn.jpg');
   console.log("c");
}
}