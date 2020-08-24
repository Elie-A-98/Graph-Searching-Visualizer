import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss'],
})
export class TutorialComponent implements OnInit {

	public hide: boolean;

	public tutorial: Element ;

	tutorials : string [] = [] ;

	tutorial_index: number;

	constructor() {
		this.hide = false ;
	}

	ngOnInit() {
		
		this.tutorial = document.querySelector ("[data-js = 'tutorial']");

		this.InitTutorials();

		this.tutorial_index = 0 ;

		this.tutorial.innerHTML = this.tutorials[0];

	}

	public SkipClicked (): void{
		this.hide = true;
	}

	public NextClicked (): void{
		let l : number = this.tutorials.length;

		this.tutorial_index = this.tutorial_index + 1;
		if (this.tutorial_index < l){
			this.tutorial.innerHTML = this.tutorials[this.tutorial_index];
		}else {
			this.SkipClicked();
		}
	}

	public PreviousClicked(): void{
		let l : number = this.tutorials.length;

		this.tutorial_index = Math.max (this.tutorial_index - 1, 0);
		if (this.tutorial_index >= 0) this.tutorial.innerHTML = this.tutorials[this.tutorial_index];
	}

	InitTutorials (): void {

		//0
		this.tutorials.push (this.CreateTitle("Welcome to Graph Searching Visualizer")
		+ this.CreateContent ("This tutorial will walk you through all of the features of this application",
		`<img src = '../../../assets/tutorial/General view.png' />`) );

		//1
		this.tutorials.push (
			this.CreateTitle("Place some nodes")
			+ 
			this.CreateContent ("Click anywhere on the screen to place nodes",
			`<img src = '../../../assets/tutorial/place nodes.png' />`) 
		);

		//2
		this.tutorials.push (
			this.CreateTitle("Connect some nodes")
			+ 
			this.CreateContent ("Switch between placing nodes and edges",
			`<img src = '../../../assets/tutorial/switch.png' />`)
			+ 
			this.CreateContent ("Connect nodes:",
			`<p>To connect node A to node B, click once on node A then click once on node B</p>
			<img src = '../../../assets/tutorial/switch.png' />`)
		);

		//3
		this.tutorials.push (
			this.CreateTitle("Choose the algorithm")
			+ 
			this.CreateContent ("Currently there are only 2 algorithms available:",
			`
			<p>DFS and BFS</p>
			<img src = '../../../assets/tutorial/bfs-dfs.png' />`)
		);

		//5
		this.tutorials.push (
			this.CreateTitle("Run Algorithm or Reset")
			+ 
			this.CreateContent (`<div>You <span style ="color: red; font-weight: bold;">must</span> click Run 
			to run the algorithm <span style="color:red; font-weight: bold;">before</span> visualization</div>
			<div>Click the Reset button to start from scratch and remove all the nodes and edges</div>
			`
			,
			`
			<img src = '../../../assets/tutorial/run-reset.png' />`)
		);

		//6
		this.tutorials.push (
			this.CreateTitle("Visualize")
			+ 
			this.CreateContent (`Start visualizing the chosen algorithm:`
			,
			`
			<p>A step is created each time the state of a particular node on the graph is changed:</p>
			<p>Ex:</p>
			<p>node X is placed in the queue -> a step is created which colors node X red <br>
			node Y is being explored -> a step is created which colors node Y orange
			</p style="display: inline-block;">
			`)
			+ 
			this.CreateContent (`<img src = '../../../assets/tutorial/Visualize.png' />`
			,
			`
			<p style = "color: #00B0F0; font-size: 1.2em;">Visualize</p>
			<p>Automatically go through all the remaining steps with a delay of 1 second between each step</p>

			<p style = "color: #00B0F0; font-size: 1.2em;">Stop</p>
			<p>Stop the automatic visualization</p>

			<p style = "color: #00B0F0; font-size: 1.2em;">Right arrow</p>
			<p>Go to the next step</p>

			<p style = "color: #00B0F0; font-size: 1.2em;">Left Arrow</p>
			<p>Go to the previous step</p>
			`)
		);

	}

	CreateTitle (title: string){
		return `
		<h1 class = "title">
			${title}
		</h1>
		`;
	}

	CreateContent (header: string, body: string){
		return `
		<div class = "content">
			<h3 class = "content__header">
				${header} 
			</h3>
		
			<div class="content__body">
				${body}
			</div>
		</div>
		`;
	}

}
