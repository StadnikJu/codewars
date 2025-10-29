// The constructor should take an array as an 
// argument, this will contain 3 integers of the form
// [width, length, height] from which the Block should be created.


class Block{
  constructor([width, length,  heigh]){
    this.width = width;
    this.length = length;
    this.heigh = heigh;
  }

  // 1
  getWidth() {
    return this.width;
  }
  
  // 2 
  getLength() {
    return this.length;
  }

  // 3 
  getHeight() {
    return this.heigh;
  }

  // 4
  getVolume(){
    return this.width * this.length * this.heigh;
  }

  // 5
  getSurfaceArea(){
    return this.length * this.width * 2 + this.length * this.heigh * 2 + this.width * this.heigh * 2;
  }
}