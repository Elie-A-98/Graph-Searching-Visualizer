export class Nodee {

	public index: number;

	public posX: number ;
	public posY: number ;

	public isClicked: boolean;

	//Steps
	public color: string;
	public infos: string [] = [];
	
	constructor(_index?: number, _posX?: number, _posY?: number){
		this.index = _index;
		
		
		this.posX = _posX;
		this.posY = _posY;

		this.isClicked = false;

	}

	public SetColor (color: string): void {
		this.color = color;
	}

	public ReplaceInfos (info: string): void{
		this.infos = [];
		this.infos.push(info);
	}
	public AddInfo (info: string): void{
		this.infos.push(info);
	}

	public copy(): Nodee {
		let n = new Nodee (this.index, this.posX, this.posY);

		n.color = this.color;
		n.infos = [] ;
		for ( let i = 0 ; i < this.infos.length; i ++){
			n.infos.push (this.infos[i]);
		}

		return n;
	}

}
