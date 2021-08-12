var canvas = new fabric.Canvas('b_canvas');
 var s= document.getElementById("b_audio");

function new_image(){

	fabric.Image.fromURL("fi.jpg", function(Img){
        block_img = Img;

        block_img.scaleToWidth(700);
        block_img.scaleToHeight(510);
        block_img.set({
            top:0,
            left:0
        });
        canvas.add(block_img);
    })
}

function playSound(){
	s.play();
}
