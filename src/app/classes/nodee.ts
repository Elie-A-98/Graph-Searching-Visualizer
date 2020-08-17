export class Nodee {

	public index: number;

	public posX: number ;
	public posY: number ;

	public isClicked: boolean;
	
	constructor(_index?: number, _posX?: number, _posY?: number){
		this.index = _index;
		
		
		this.posX = _posX;
		this.posY = _posY;

		this.isClicked = false;
	}

}
