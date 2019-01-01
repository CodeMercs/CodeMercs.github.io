      
      /* Radar chart design created by Nadieh Bremer - VisualCinnamon.com */
      

                /* Set-Up */
		
			var margin = {top: 100, right: 100, bottom: 100, left: 100},
				width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
				height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);
					

			/* Data */
			
			/* EX : 

			var data = [
					  [ // 1
						{axis:"A",value:0.22},
						{axis:"B",value:0.50}
					  ],[ // 2
						{axis:"A",value:0.27},
						{axis:"B",value:0.50}
					  ],[// 3
						{axis:"A",value:0.26},
						{axis:"B",value:0.50}
					  ]
					];


			*/

			var data = [
							[
								{axis:"R",value:0.10},
								{axis:"PHP",value:0.40},
								{axis:"JS",value:0.70},
								{axis:"Python",value:0.30},
								{axis:"MariaDB",value:0.95},
								{axis:"Android",value:0.80},
								{axis:"Java",value:0.80},
								{axis:"HTML",value:0.80}
							],
							[
								{axis:"R",value:0.90},
								{axis:"PHP",value:0.60},
								{axis:"JS",value:0.70},
								{axis:"Python",value:0.60},
								{axis:"MariaDB",value:0.65},
								{axis:"Android",value:0.60},
								{axis:"Java",value:0.50},
								{axis:"HTML",value:0.80}
							],
														[
								{axis:"R",value:0.30},
								{axis:"PHP",value:0.70},
								{axis:"JS",value:0.90},
								{axis:"Python",value:0.50},
								{axis:"MariaDB",value:0.85},
								{axis:"Android",value:0.60},
								{axis:"Java",value:0.40},
								{axis:"HTML",value:0.70}
							]
						];

			/* Draw the Chart */
			/*

			var color = d3.scale.ordinal()
				.range(["#EDC951","#CC333F","#00A0B0"]);
			*/

			var color = d3.scale.ordinal()
				.range(["#EDC951", "#CC333F", "#00A0B0"]);
				
			var radarChartOptions = {
			  w: width,
			  h: height,
			  margin: margin,
			  maxValue: 1, /* 控制範圍 */
			  levels: 5,
			  roundStrokes: true,
			  color: color
			};
			/*Call function to draw the Radar chart */
			RadarChart(".radarChart", data, radarChartOptions);