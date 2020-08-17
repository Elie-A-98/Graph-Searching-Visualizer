import { Nodee } from './nodee';

export class Edge {

	public index: number;

	public startNode: Nodee ;
	public endNode: Nodee;

	public angle: number;

	constructor (_index?: number, _startNode?: Nodee, _endNode?: Nodee){
		this.index = _index;

		this.startNode = _startNode;
		this.endNode = _endNode;
		
		let distX = this.endNode.posX - this.startNode.posX;
		let distY = this.endNode.posY - this.startNode.posY;

		this.angle = Math.atan2(distY, distX) * 180/Math.PI;
	}

	GetLength(): number {
		let length: number;

		let X : number = Math.pow (this.endNode.posX - this.startNode.posX, 2);
		let Y : number = Math.pow (this.endNode.posY - this.startNode.posY, 2);

		length = Math.sqrt (X + Y);


		return length;
	}

}
