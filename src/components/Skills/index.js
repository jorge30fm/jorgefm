import React from "react";
import {TagCloud} from 'react-tagcloud';
const data = [
{value: 'HTML5', count:33},
{value:"CSS", count: 30},
{value:"JAVASCRIPT", count:35},
{value:"REACT", count: 35},
{value:"MONGO DB", count:34},
{value:"NOSQL", count:24},
{value:"GITHUB", count:22},
{value:"EXPRESS.JS", count:30},
{value:"MYSQL", count:30},
{value:"SEQUELIZE", count:22},
{value:"HANDLEBARS.JS", count:22},
{value:"JEST", count: 20},
{value:"API", count: 29},
{value:"JSON", count:22},
{value:"REST", count:24},
{value:"AJAX", count:22},
{value:"GIT", count:19},
{value:"PWA", count:19},
{value:"PHOTOSHOP", count:15}
]
const customRenderer = (tag, size, color) => (
    <span
      key={tag.value}
      style={{
        animation: 'blinker 3s linear infinite',
        animationDelay: `${Math.random() * 2}s`,
        fontSize: `${size / 2}em`,
        border: `2px solid rgb(236, 236, 236)`,
        margin: '3px',
        padding: '3px',
        display: 'inline-block',
        color: 'white',
      }}
    >
      {tag.value}
    </span>
  )
function Skills() {
	return (
		<div className="skill-section">
			<div id="skills">
				<h2 className="section-title title no-mg">SKILLS AND TECHNOLOGIES</h2>
                <TagCloud
                tags={data}
                minSize={1}
                maxSize={5}
                renderer={customRenderer} />
			</div>
		</div>
	);
}
export default Skills;
