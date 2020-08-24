import { Nodee } from './nodee';
import { Edge } from './edge';
import { Step } from './step';

export class DFS {

	nodes: Nodee [] = [] ;
	edges: Edge [] = [];

	adj: boolean [][];

	steps: Step [] = [];

	public infos: any [] ;

	pathColor: string = 'green';
	activeColor: string = 'red';
	visitedColor: string = 'maroon';
	adjColor: string = 'yellow';

	constructor (nodes: Nodee [], edges: Edge[]) {
		this.nodes = nodes;
		this.edges = edges;
		this.infos = [] ;

		this.infos = [] ;

		this.adj = [];
		let l = this.nodes.length;
		for ( let i = 0 ; i < l ; i ++ ){
			this.adj[i] = [];
			for ( let j = 0 ; j < l ; j ++ ){
				this.adj[i][j] = this.isAdjacent(i,j);
			}
		}

		this.infos.push ({
			info: 'Path',
			value: this.pathColor
		}
		);
		this.infos.push ({
			info: 'Active',
			value: this.activeColor
		}
		);
		this.infos.push ({
			info: 'Visited',
			value: this.visitedColor
		}
		);
		this.infos.push ({
			info: 'Adjacent',
			value: this.adjColor
		}
		);
	}

	private isAdjacent  (i: number, j: number): boolean{

		let l = this.edges.length;
		for ( let k = 0 ; k < l; k ++){
			let edgeStart_index = this.edges[k].startNode.index;
			let edgeEnd_index = this.edges[k].endNode.index;

			if ( edgeStart_index == i && edgeEnd_index == j ||
				edgeStart_index == j && edgeEnd_index == i
				){
					return true;
				}
		}

		return false;
	}
	
	public Run () {
		let visited: Boolean [] = new Array<boolean> (this.nodes.length);
		let st : number [] = [] ;

		for ( let i = 0 ; i < visited.length ; i ++ ){
			visited[i] = false;
		}

		let c_nodes: Nodee [] = this.NodesCopy(this.nodes) ;

		let s = 0;
		visited [s] = true ;
		st.push(s);

		while (st.length != 0){
			let v: number = st.pop() // get first element in array and shift the array -remove the first element- (q.pop())

			c_nodes[v].SetColor(this.activeColor);
			c_nodes[v].ReplaceInfos('Active');
			this.steps.push (new Step (this.steps.length, c_nodes, this.edges));

			for ( let j = this.nodes.length-1 ; j >= 0 ; j --){
				if ( this.adj [v][j] == true && visited[j] == false){
					visited[j] = true ;
					st.push(j);

					c_nodes = this.NodesCopy (c_nodes);
					c_nodes[j].SetColor(this.visitedColor);
					c_nodes[j].AddInfo('visited');
				}
			}

			
			this.steps.push (new Step (this.steps.length, c_nodes, this.edges));

			c_nodes = this.NodesCopy(c_nodes);
			c_nodes[v].SetColor(this.pathColor);
			c_nodes[v].ReplaceInfos('Path');

		}

		this.steps.push (new Step (this.steps.length, c_nodes, this.edges));
	}
	
	public getSteps (): Step [] {
		return this.steps;
	}

	public Display(): void {
		for (let i = 0 ; i < this.adj[0].length ; i ++ ){
			let to_print = '';
			for (let j = 0 ; j < this.adj[1].length ; j ++ ){
				to_print += this.adj[i][j] + ' ';
			}
			console.log(to_print);
		}
	}

	public NodesCopy(nodes: Nodee []): Nodee [] {
		let c : Nodee [] = [] ;
		for ( let i = 0 ; i < nodes.length ; i ++ ){
			c.push (nodes[i].copy());
		}

		return c;
	}


}

