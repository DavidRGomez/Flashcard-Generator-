

function BasicCard(front, back){
	this.front = front; 
	this.back = back; 
}

var crypto = new BasicCard("Which coin has the higest market cap?", "bitcoin");

console.log(crypto.front, crypto.back);

